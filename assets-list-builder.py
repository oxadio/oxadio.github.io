from pathlib import Path
from typing import Literal

EXCLUDED_DIRS: set[str] = {".git", "./.vscode", "./.mypy_cache"}
EXCLUDED_FILES: set[str] = {"README.md", "CNAME", ".gitignore", "assets-list-builder.py"}

def list_files(directory, exclude_dirs: set | None=None, exclude_files: set | None = None) -> set[str]:
    if exclude_dirs is None:
        exclude_dirs = set()

    if exclude_files is None:
        exclude_files = set()

    directory_path = Path(directory)

    files: set = set()
    for file in directory_path.rglob("*"):
        if file.is_file():
            # Check if the file is in an excluded directory
            if any(file.is_relative_to(directory_path / exclude_dir) for exclude_dir in exclude_dirs):
                continue
            # Check if the file matches an excluded file
            if file.name in exclude_files:
                continue
            # Convert to Unix-style path using as_posix()
            files.add(f'''"{directory}{file.as_posix()}"''')
    
    return files

def generate_assets_list_js(files: set[str]) -> Literal[True]:
    content: str = f'self.ASSETS = [\n    "/",\n    {",\n    ".join(files)}\n]\n'
    with open("./asset-list.js", "w") as fo:
        fo.write(content)
    return True

def main() -> None:
    files: set[str] = list_files("./", EXCLUDED_DIRS, EXCLUDED_FILES)
    generate_assets_list_js(files=files)


if __name__ == "__main__":
    main()
