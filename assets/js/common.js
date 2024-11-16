const APP_NAMESPACE = "oxa-pwa"; // Unique namespace for your application
const UPDATE_AVAILABLE_KEY = `${APP_NAMESPACE}-update-available`; // Namespaced key

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(registration => {
        // Check for updates periodically
        checkForUpdate(registration);
        setInterval(() => checkForUpdate(registration), 60000); // Check every 60 seconds

        // Handle update state if user opens app later
        if (localStorage.getItem(UPDATE_AVAILABLE_KEY) === "true") {
            showUpdateModal(() => {
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: "SKIP_WAITING" });
                }
                localStorage.removeItem(UPDATE_AVAILABLE_KEY);
                window.location.reload();
            });
        }
    });
}

// Function to check for updates
function checkForUpdate(registration) {
    registration.update().then(() => {
        const newWorker = registration.installing || registration.waiting;
        if (newWorker) {
            newWorker.onstatechange = () => {
                if (newWorker.state === "installed") {
                    if (navigator.serviceWorker.controller) {
                        // New update detected
                        localStorage.setItem(UPDATE_AVAILABLE_KEY, "true");
                        showUpdateModal(() => {
                            newWorker.postMessage({ type: "SKIP_WAITING" });
                            localStorage.removeItem(UPDATE_AVAILABLE_KEY);
                            window.location.reload();
                        });
                    }
                }
            };
        }
    });
}

// Function to show a custom modal
function showUpdateModal(onConfirm) {
    // Avoid duplicate modals
    if (document.getElementById("update-modal")) return;

    // Create modal structure
    const modal = document.createElement("div");
    modal.id = "update-modal";
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h2>Update Available</h2>
            <p>A new version of the app is available.</p>
            <div class="modal-actions">
                <button id="cancel-update" class="btn-cancel">Skip</button>
                <div style="width: 20px;"></div>
                <button id="confirm-update" class="btn-confirm">Update Now</button>
            </div>
        </div>
    `;

    // Add modal to the body
    document.body.appendChild(modal);

    // Add event listeners to buttons
    document.getElementById("confirm-update").addEventListener("click", () => {
        document.body.removeChild(modal);
        onConfirm();
    });
    document.getElementById("cancel-update").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}
