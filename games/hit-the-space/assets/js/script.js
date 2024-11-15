function g(a,b,c){return a+(b-a)*c}function aa(a,b){var c=ba;return Math.atan2(g(Math.sin(c),Math.sin(a),b),g(Math.cos(c),Math.cos(a),b))}function l(a,b,c){return a<b?b:a>c?c:a}function ca(){var a=l((Math.hypot(r,t)-10)/15,0,1);return a*a*(3-2*a)}function da(a){return()=>{let b=a+=1831565813;b=Math.imul(b^b>>>15,b|1);b^=b+Math.imul(b^b>>>7,b|61);return((b^b>>>14)>>>0)/2**32}}let u,v,ea=.5,w=ea,x=!1;
window.ToggleMute=function(){x=!x;let a=w;w=x?0:ea;v&&(v.gain.linearRampToValueAtTime(a,u.currentTime),v.gain.linearRampToValueAtTime(w,u.currentTime+.01));document.getElementById("muted").style.display=x?"":"none";document.getElementById("not-muted").style.display=x?"none":""};let y,fa,ha,z;function ja(a){var b=u;let c=b.createBuffer(1,b.sampleRate|0,b.sampleRate),d=c.getChannelData(0);for(let f=0;f<d.length;++f)d[f]=a(f/b.sampleRate);return c}
function ka(){u=new AudioContext;v=u.createGain();v.gain.value=w;y=u.createBiquadFilter();y.type="highshelf";y.frequency.value=200;y.gain.value=0;y.connect(v);v.connect(u.destination);let a=da(0);fa=ja(()=>2*a()-1);ha=u.createPeriodicWave(new Float32Array([0,0,1,.1,-.4,0,1,0,-.9,.1,.4,-.1,0,.2,-.1,.1,0,0,.1,.1,0,0,0,0,0,.1,.2,-.2,-.3,.1,.1,-.2,0,0,.1,0,-.1,-.4,.2,.4,.1,.3,.3,0,0,-.2,.1,-.1,-.1,-.3,.1,-.1,0,0,.1,.1,0,.1,.1,-.2,0,-.1,-.1,0,0,-.1,-.2,0,.1,0,-.1,.1,-.1,0,0,-.1,-.1,0,-.1,-.1,-.1]),new Float32Array([0,
0,1,-.1,.2,0,-.3,.1,-.5,-.8,0,0,-.4,0,-.3,-.1,0,0,0,0,.1,.1,0,-.1,0,.1,-.4,.1,-.1,-.2,0,0,-.1,0,.1,-.2,0,-.2,0,-.2,0,.4,0,-.4,.3,.1,0,-.1,.2,-.1,.2,-.1,-.2,-.2,.2,0,-.2,.1,-.2,-.2,0,0,0,0,.1,-.1,-.1,0,.1,0,0,.1,0,0,0,0,0,0,0,0,0]));la();let b=A();z=u.createGain();let c=u.createBiquadFilter();z.gain.value=0;c.type="bandpass";c.frequency.value=250;c.Q.value=5;b.connect(c);c.connect(z);z.connect(y);b.start()}function A(){var a=fa;let b=u.createBufferSource();b.buffer=a;b.loop=!0;return b}
function B(a,b,c,d,f,e,m){let k=u.createOscillator(),h=u.createGain(),q=u.createBiquadFilter();k.frequency.value=a;h.gain.value=0;let n=c;h.gain.linearRampToValueAtTime(0,n);n+=.01;h.gain.linearRampToValueAtTime(b,n);n+=d;h.gain.linearRampToValueAtTime(b,n);n+=f;h.gain.linearRampToValueAtTime(0,n);q.type="bandpass";q.Q.value=e;q.frequency.value=a;k.connect(h);h.connect(q);q.connect(y);"string"===typeof m?k.type=m:k.setPeriodicWave(m);k.start(c);k.stop(n)}
function C(a,b,c,d,f,e,m=.01,k=.1,h=0){let q=u.createGain(),n=u.createBiquadFilter();q.gain.value=0;let p=b;q.gain.linearRampToValueAtTime(0,p);p+=m;q.gain.linearRampToValueAtTime(a,p);p+=h;q.gain.linearRampToValueAtTime(a,p);p+=k;q.gain.linearRampToValueAtTime(0,p);n.type=d?"bandpass":"allpass";n.frequency.value=f;n.Q.value=e;c.connect(q);q.connect(n);n.connect(y);c.start(b);c.stop(p)}function ma(a){C(.2,a,A(),!0,1E4,2)}function na(a){C(.2,a,A(),!0,1E4,1,.02,.06)}let oa=0;
function la(){function a(q,n,p,F){n=2**(Math.log2(440)+n-4+(p-9)/12);B(n,.1,q,F,.05,.02,ha);B(n,.1/1.5,q+.25,F,.05,.5,ha);B(n,.05,q+.5,F,.05,1,ha)}let b=u.currentTime+.1,c=!0,d=!1,f=!1,e=ma,m=da(0),k,h=()=>{let q=(u.currentTime+9)/8;for(;oa<q;){let F=b+8*oa;0===oa%2&&(k=da(10*m()|0));++oa;if(c)for(var n=0;16>n;++n){var p=F+.5*n;let ia=u.createOscillator();ia.frequency.value=250;ia.frequency.linearRampToValueAtTime(250,p+.01+0);ia.frequency.linearRampToValueAtTime(50,p+.03+0);C(.3,p+0,ia,!1,0,0,.01,
.1,.05)}if(d)for(p=0;8>p;++p)C(.1,F+p+.5,A(),!0,1800,1,.01,.05,.07);if(f)for(p=0;16>p;++p)e(F+.5*(p+.5));!c||.1>m()?c=!c:!d||.1>m()?d=!d:!f||.1>m()?f=!f:.2>m()&&(e=e===ma?na:ma);p=[[0,2,4,7,9],[2,4,7,9,12],[4,7,9,12,14]];p=p[k()*p.length|0];for(n=0;16>n;++n).5>k()?a(F+.5*n,2,p[k()*p.length|0]-10,.25*(.5>k()?1:.5)):(a(F+.5*n,2,p[k()*p.length|0]-10,.125),a(F+.25*(2*n+1),2,p[k()*p.length|0]-10,.125))}};h();setInterval(h,1379)}
function pa(a,b,c){a.o.width=b;a.o.height=c;a.g.viewport(0,0,b,c);a.g.uniform4f(a.i.uScreenSize,b,c,1/b,1/c);a.g.uniform2f(a.i.uAspect,b/c,c/b)}function qa(a){a.g.uniform1f(a.i.uTime,.001*performance.now());a.g.drawArrays(a.g.TRIANGLE_STRIP,0,a.D.length/2)}class ra{constructor(a,...b){function c(k){k=k.split("\n");const h=Math.log10(k.length+1)|4;console.error("\n"+k.map((q,n)=>(n+1).toString().padEnd(h," ")+q).join("\n"))}b.push("uTime","uScreenSize","uAspect");var d=`#version 300 es
precision highp float;

uniform float uTime;
uniform vec4 uScreenSize;
uniform vec2 uAspect;

in vec4 vPixelCoord;
out vec4 fragColor;

${a}


void main()
{
    vec4 color;
    mainImage(color, vPixelCoord.xy);
    fragColor = color;
}
        `;a=this.g=(this.o=document.createElement("canvas")).getContext("webgl2");var f=a.createShader(a.VERTEX_SHADER),e=a.createShader(a.FRAGMENT_SHADER);if(f&&e){a.shaderSource(f,"#version 300 es\nin vec2 aVertexPosition;\n\nuniform vec4 uScreenSize;\n\nuniform float uTime;\n\nout vec4 vPixelCoord;\n\nvoid main()\n{\n    vec2 normalizedPosition = (aVertexPosition + vec2(1.0)) * 0.5;\n    vec2 screenPosition = normalizedPosition * uScreenSize.xy;\n    vPixelCoord = vec4(normalizedPosition, screenPosition);\n    gl_Position = vec4(aVertexPosition, 0.0, 1.0);\n}\n        ");
a.shaderSource(e,d);a.compileShader(f);a.compileShader(e);var m=a.getShaderInfoLog(f);if(m&&0!==m.length)console.error("Error compiling vertex shader"),console.error(m),c("#version 300 es\nin vec2 aVertexPosition;\n\nuniform vec4 uScreenSize;\n\nuniform float uTime;\n\nout vec4 vPixelCoord;\n\nvoid main()\n{\n    vec2 normalizedPosition = (aVertexPosition + vec2(1.0)) * 0.5;\n    vec2 screenPosition = normalizedPosition * uScreenSize.xy;\n    vPixelCoord = vec4(normalizedPosition, screenPosition);\n    gl_Position = vec4(aVertexPosition, 0.0, 1.0);\n}\n        ");
else if((m=a.getShaderInfoLog(e))&&0!==m.length)console.error("Error compiling fragment shader"),console.error(m),c(d);else if(d=a.createProgram())if(a.attachShader(d,f),a.attachShader(d,e),a.linkProgram(d),(f=a.getProgramInfoLog(d))&&0!==f.length)console.error("Error linking program"),console.error(f);else if(a.useProgram(d),f=a.createBuffer()){this.D=new Float32Array([-1,-1,1,-1,-1,1,1,1]);e=a.getAttribLocation(d,"aVertexPosition");a.bindBuffer(a.ARRAY_BUFFER,f);a.enableVertexAttribArray(e);a.vertexAttribPointer(e,
2,a.FLOAT,!1,0,0);a.bufferData(a.ARRAY_BUFFER,this.D,a.STATIC_DRAW);this.i={};for(const k of b)this.i[k]=a.getUniformLocation(d,k)}else console.error("Cannot create buffers");else console.error("Cannot create WebGL program")}else console.error("Cannot create shader object")}}let D=1;
class sa{constructor(a){this.g=a;this.position={x:0,y:0,z:0}}u(){this.g.element.style.transform=`scale(${D}) translate3d(${-this.position.x*window.innerHeight}px, ${this.position.y*window.innerHeight}px, ${-this.position.z*window.innerHeight}px)`}}function ta(){var a=E;a.element.style.left=.5*window.innerWidth+"px";a.element.style.top=.5*window.innerHeight+"px";a.i.u();a.g.forEach(b=>b.u())}
class ua{constructor(){this.i=new sa(this);this.g=new Set;this.element=document.createElement("div");this.o=document.querySelector("#scene-parent");this.o.appendChild(this.element);this.element.id="scene"}add(a){this.g.add(a);this.element.appendChild(a.element)}remove(a){this.g.delete(a);this.element.removeChild(a.element)}}
class va{constructor(a=!0){this.element=document.createElement("div");this.B=[];this.position={x:0,y:0,z:0};this.g={x:0,y:0,z:0};this.o=1;a&&this.u()}u(){this.element.style.transform=`translate3d(${this.position.x*window.innerHeight}px, ${-this.position.y*window.innerHeight}px, ${this.position.z*window.innerHeight}px) rotateX(${this.g.x}deg) rotateY(${this.g.y}deg) rotateZ(${-this.g.z}deg) scale(${this.o})`;this.B.forEach(a=>a())}}
class wa extends va{constructor(){super();this.s=.025;this.i=document.createElement("div");this.i.style.borderRadius="50%";this.i.style.background="radial-gradient(#0ff, #000)";this.i.style.transform="translate(-50%, -50%)";let a=document.getElementById("ship");this.B.push(()=>{this.i.style.width=.05*window.innerHeight+"px";this.i.style.height=.05*window.innerHeight+"px";a.style.width=`${.05*1.5*window.innerHeight}px`;a.style.height=`${.05*1.5*window.innerHeight}px`});this.element.appendChild(a);
this.element.style.zIndex="1";this.u()}}
class xa extends va{constructor(){super();this.element.className="arrow";let a=document.createElement("div"),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttributeNS(null,"viewBox","0 0 8 8");b.setAttributeNS(null,"stroke-width","0.5");b.setAttributeNS(null,"stroke","#0cf");b.setAttributeNS(null,"fill","#bff");b.setAttributeNS(null,"stroke-linecap","round");b.setAttributeNS(null,"stroke-linejoin","round");let c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttributeNS(null,
"d","M2 2L6 4L2 6L3 4Z");b.appendChild(c);a.appendChild(b);b.style.transform="translate(-50%, -50%)";this.B.push(()=>{b.setAttributeNS(null,"width",`${.1*window.innerHeight}px`);b.setAttributeNS(null,"height",`${.1*window.innerHeight}px`)});this.element.appendChild(a);this.element.style.zIndex="2";this.element.style.opacity=0;this.u()}}let ya,E=new ua,G=E.i;const H=new ra(`
    // https://www.shadertoy.com/view/XlfGRj

    uniform vec2 offset;
    uniform float globalZoom;

    #define iterations 15
    #define formuparam 0.56

    #define volsteps 15
    #define stepsize 0.25

    #define zoom   5.000
    #define tile   0.850
    #define speed  0.010

    #define brightness 0.0008
    #define darkmatter 0.000
    #define distfading 0.5
    #define saturation 1.0


    #define maxNumBlackHoles 6
    uniform int numBlackHoles;
    uniform vec4 blackHoleData[maxNumBlackHoles]; // xy - position, z - radius, w - effect radius


    // basic noise
    float noise(in float x)
    {
        // setup
        float i = floor(x);
        float f = fract(x);
        float s = sign(fract(x*0.5)-0.5);

        // use some hash to create a random value k in [0..1] from i
        //float k = rand(i);
        //float k = 0.5+0.5*sin(i);
        float k = fract(i*.1731);

        // quartic polynomial
        return s*f*(f-1.0)*((16.0*k-4.0)*f*(f-1.0)-1.0);
    }


    void mainImage(out vec4 fragColor, in vec2 fragCoord)
    {
        float backgroundDistance = ${Number.isInteger(4)?(4).toFixed(1):(4).toString()};
        float backgroundDistanceMultiplier = ${Number.isInteger(2)?(2).toFixed(1):(2).toString()};

        //get coords and direction
        vec2 uv = fragCoord - 0.5;
        uv /= backgroundDistance * globalZoom;
        uv.x *= uAspect.x;

        vec2 offsetLocal = offset / backgroundDistance / backgroundDistanceMultiplier;
        vec3 from = vec3(offsetLocal, -11.11);

        // const float blackHoleEffectRadius = 0.0002;
        // const float blackHoleRadius = 0.04;
        const float blackHoleEdgeSharpness = 200.0;
        const float blackHolePower = 2.0;
        const vec3 blackHoleColor = vec3(0.0);

        float light = 1.0;
        vec2 originalUv = uv;
        float blackHoleOutlineGlow = 0.0;
        vec3 blackHoleOutlineGlowColor = vec3(1.0, 0.3, 0.0);
        for (int i = 0; i < numBlackHoles; ++i)
        {
            vec4 data = blackHoleData[i] / backgroundDistance;
            vec2 pos = data.xy / backgroundDistanceMultiplier - offsetLocal;
            pos *= backgroundDistanceMultiplier;
            float radius = data.z;
            float effectRadius = data.w;

            float currentDist = distance(pos, originalUv);
            vec2 warp = normalize(pos - originalUv) * pow(currentDist, -blackHolePower) * effectRadius;
            uv += warp;
            light *= clamp((currentDist - radius) * blackHoleEdgeSharpness, 0.0, 1.0);

            blackHoleOutlineGlow += 2.0 / (abs(currentDist - radius) * 1000.0);
        }

        vec3 rgb;
        {
            vec3 dir = vec3(uv * zoom, 1.0);

            float a1 = 1.0;
            float a2 = 2.5;
            mat2 rot1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));
            mat2 rot2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));
            dir.xz*=rot1;
            dir.xy*=rot2;
            from.xz*=rot1;
            from.xy*=rot2;

            // volumetric rendering
            float s = 0.5;
            float fade = 0.9;
            vec3 v = vec3(-1.0);
            for (int r = 0; r < volsteps; ++r)
            {
                vec3 p = from + s * dir * 0.5;
                p = abs(vec3(tile) - mod(p, vec3(tile * 2.0))); // tiling fold
                float a = 0.0;

                vec3 sp = p;

                for (int i = 0; i < iterations; ++i)
                {
                    p = abs(p) / dot(p, p) - formuparam; // the magic formula
                    float D = length(p); // absolute sum of average change
                    float fade2 = 5.0 / (float(i) * 2.0 + 20.0);
                    a += mix(min(15.0, D), D, fade2);
                }
                // float dm = max(0.0, darkmatter - a * a * 0.001); //dark matter
                // fade *= (1.0 - clamp(float(r - 8), 0.0, 1.0)) * (1.0 - dm); // dark matter, don't render near

                fade *= clamp(5.0 / float(r + 1), 0.0, 1.0);

                a = pow(a, 3.2 + noise(uTime * 0.01) * 0.1); // add contrast

                v += fade;
                v -= 0.2;

                v += vec3(s * s * s * s, s * s, s) * a * brightness * fade; // coloring based on distance
                fade *= distfading - noise(uTime * 0.01) * 0.1; // distance fading
                s += stepsize;
            }

            //v = mix(vec3(length(v)), v, saturation - noise(uTime * 0.03) * 0.2); //color adjust
            rgb = pow(v * 0.01 * sqrt(s), vec3(1.5)) * 1.5;
            rgb.r *= 0.4 + noise(uTime * 0.02 + 1.23) * 0.3;
            rgb = clamp(rgb, vec3(0.0), vec3(1.0)) * 0.8;
        }

        rgb += blackHoleOutlineGlowColor * clamp(blackHoleOutlineGlow, 0.0, 1.0) * 0.6;
        rgb = mix(blackHoleColor, rgb, light);

        fragColor = vec4(rgb, 1.0);
        // fragColor.g *= 0.6;
    }`,"offset","globalZoom","numBlackHoles","blackHoleData");document.body.appendChild(H.o);H.o.style.position="absolute";H.o.style.zIndex="-3";function za(){pa(H,window.innerWidth,window.innerHeight-76)}za();window.addEventListener("resize",za);window.requestAnimationFrame(Aa);function Aa(){window.requestAnimationFrame(Aa);H.g.uniform2f(H.i.offset,G.position.x,G.position.y);H.g.uniform1f(H.i.globalZoom,D);qa(H)}let I=[9E9,9E9,0,0,9E9,9E9,0,0,9E9,9E9,0,0,9E9,9E9,0,0,9E9,9E9,0,0,9E9,9E9,0,0];
ya=(a,b,c,d,f)=>{a*=4;I[a]=b;I[a+1]=c;I[a+2]=d;I[a+3]=f;H.g.uniform4fv(H.i.blackHoleData,I)};H.g.uniform4fv(H.i.blackHoleData,I);class Ba extends va{constructor(a,b,c){super();this.element.appendChild(a);a.style.transform="translate(-50%, -50%)";this.I=!0;this.A=0;this.G=this.F=1;this.v=c;this.update=b(this);this.B.push(()=>{a.style.width=window.innerHeight*this.F+"px";a.style.height=window.innerHeight*this.G+"px"});this.update(0)}}
function Ca(a,b=1,c=null){for(let d=0;d<b;++d){let f=new Ba(a.D.cloneNode(!0),a.K,c);a.o.add(f);a.i.add(f)}}class Da{constructor(a){var b=Ea;this.o=E;this.D=b;this.g=0;this.i=new Set;this.K=a}update(a){for(let b of this.i)b.A+=a,b.update(a),b.I||(this.i.delete(b),this.o.remove(b));for(this.g+=0*a;1<=this.g;)--this.g,Ca(this)}}
const J=new ra("\n\nuniform vec3 colorData[4];\nuniform int numColors;\n\nuniform float planetRadius;\nuniform float seed;\nuniform float noiseScale;\n\n\nvec3 hash3(vec3 p)\n{\n    p = vec3(\n        dot(p,vec3(127.1, 311.7, 74.7)),\n        dot(p,vec3(269.5, 183.3, 246.1)),\n        dot(p,vec3(113.5, 271.9, 124.6))\n    );\n\n    return 2.0 * fract(sin(p) * 43758.5453123) - 1.0;\n}\n\nfloat simplex_noise(vec3 p)\n{\n    const float K1 = 1.0 / 3.0;\n    const float K2 = 1.0 / 6.0;\n\n    vec3 i = floor(p + (p.x + p.y + p.z) * K1);\n    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);\n\n    vec3 e = step(vec3(0.0), d0 - d0.yzx);\n    vec3 i1 = e * (1.0 - e.zxy);\n    vec3 i2 = 1.0 - e.zxy * (1.0 - e);\n\n    vec3 d1 = d0 - (i1 - 1.0 * K2);\n    vec3 d2 = d0 - (i2 - 2.0 * K2);\n    vec3 d3 = d0 - (1.0 - 3.0 * K2);\n\n    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);\n    vec4 n = h * h * h * h * vec4(dot(d0, hash3(i)), dot(d1, hash3(i + i1)), dot(d2, hash3(i + i2)), dot(d3, hash3(i + 1.0)));\n\n    return dot(vec4(31.316), n);\n}\n\n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    const vec2 planetPosition = vec2(0.0, 0.0);\n\n    float glowRadius = -0.001;\n    vec2 uv = (fragCoord - 0.5) * (planetRadius - glowRadius * 4.0) * 2.0;\n\n    float currentPlanetDistance = distance(planetPosition, uv);\n    vec3 originalPlanetColor = hsv2rgb(colorData[0]);\n\n    vec2 planetDir = (uv - planetPosition) / planetRadius;\n    float len = clamp(length(planetDir), 0.0, 1.0);\n    float z = sqrt(1.0 - len * len);\n    vec3 normal = vec3(planetDir, z);\n\n    vec3 planetNoise = vec3(0.0);\n\n    float mul = 1.0;\n    float scale = planetRadius * 50.0 * noiseScale;\n    float mulmul = 2.5;\n\n    for (int i = 0; i < numColors; ++i)\n    {\n        planetNoise += smoothstep(-1.2, 1.6, simplex_noise(vec3(seed) + normal * mul * scale)) / mul * hsv2rgb(colorData[i]);\n        mul *= mulmul;\n    }\n\n    vec3 planetColor = planetNoise;\n    float side = smoothstep(0.0, 1.0, (currentPlanetDistance - planetRadius) * 1000.0);\n    planetColor *= mix(0.2, 1.0, pow(dot(normal, vec3(0.0, 0.0, 1.0)), 2.0));\n\n    float glowIntensity = smoothstep(1.0, 0.0, (currentPlanetDistance - planetRadius - glowRadius) * 200.0);\n    vec3 rgb = glowIntensity * originalPlanetColor * 0.4;\n    rgb = mix(planetColor, rgb, smoothstep(0.0, 1.0, (currentPlanetDistance - planetRadius) * 1000.0));\n    fragColor = vec4(rgb, glowIntensity);\n}","numColors",
"colorData","planetRadius","seed","noiseScale"),Fa=[];function Ga(){window.requestAnimationFrame(Ga);let a;null==(a=Fa.shift())||a.call()}Ga();
class Ha extends va{constructor(a,b,c,d,f,e,m){super(!1);this.element.style.zIndex="-1";this.element.classList.add("planet");this.s=a;this.J=e;this.C=!1;this.level=m;this.L=b;this.H=!0;const k=new Image;this.M=()=>{this.H&&(this.H=!1,Fa.push(()=>{const h=window.innerHeight*a*2;pa(J,h,h);J.g.uniform1i(J.i.numColors,d.length);J.g.uniform3fv(J.i.colorData,d.flat());J.g.uniform1f(J.i.planetRadius,a/2);J.g.uniform1f(J.i.seed,c);J.g.uniform1f(J.i.noiseScale,f);qa(J);k.src=J.o.toDataURL()}))};if(e){let h=
document.createElement("div");h.classList.add("pulse");this.element.appendChild(h);h.style.borderRadius="50%";h.style.background="#0f0";this.B.push(()=>{h.style.width=2*a*window.innerHeight+"px";h.style.height=2*a*window.innerHeight+"px"})}this.element.appendChild(k);k.style.transform="translate(-50%, -50%)";window.addEventListener("resize",()=>this.H=!0)}u(){super.u();this.M()}}
let K=[{l:1,h:[0,0,.1],m:[[1,0,.4]],j:[]},{l:2.5,h:[2,0,.1],m:[[1,0,.3],[3,0,.4]],j:[]},{l:3,h:[4,0,.1],m:[[.75,0,.15],[.75,.5,.1]],j:[]},{l:4,h:[1.5,.5,.15],m:[],j:[[1.5,0,.2,7E-4]]},{l:4,h:[2.5,0,.1],m:[[1.5,0,.4],[1.5,.6,.15],[1.5,-.6,.15]],j:[]},{l:3,h:[3,0,.1],m:[[1,.1,.15],[2,0,.1],[3,0,.15],[4,-.1,.15],[5,0,.1]],j:[]},{l:5,h:[6,0,.1],m:[[1,0,.15],[2,.1,.1],[3.5,0,.5,100],[5,-.1,.15],[6,0,.1]],j:[]},{l:2,h:[7,0,.1],m:[[.8,0,.2],[0,1,.3],[1,1,.3]],j:[]},{l:2,h:[1,1.5,.1],m:[[.3,.2,.05,10],[.5,
.52,.05,10],[.35,.48,.03,10],[.55,.3,.05,10],[.4,.1,.08,10],[.6,.6,.05,10],[.5,.94,.06,10],[.6,.86,.05,10],[.8,.7,.04,10],[.7,.5,.05,10],[.5,-.2,.2,40],[.2,.94,.15,30],[0,.7,.08,20],[-.2,.5,.15,30]],j:[]},{l:1.5,h:[1,.9,.1],m:[[1,0,.2],[1.5,.2,.15],[2,.22,.18],[2.5,.25,.1,40],[.5,.5,.1,40],[1,.7,.18],[1.5,.9,.2],[2,.98,.22]],j:[]},{l:4.5,h:[3,.6,.1],m:[[2.5,1.5,.2]],j:[[1.5,0,.2,7E-4]]},{l:4,h:[3,1.5,.1],m:[],j:[]},{l:3,h:[1,-3,.1],m:[[1,0,.2],[2,-.15,.2],[3,.15,.2]],j:[]},{l:5,h:[4,0,.1],m:[[1,0,
.2],[3,0,.15]],j:[[2,0,.1,1E-4]]},{l:3,h:[4,0,.1],m:[[.5,0,.15],[1,.5,.15],[1,-.5,.15],[1.5,0,.15],[2,.5,.15],[2,-.5,.15],[2.5,0,.15]],j:[]},{l:3,h:[3,0,.1],m:[],j:[]},{l:3,h:[2,0,.1],m:[[.6,.3,.08,20],[2.1,1.2,.08,20],[2.7,-.6,.08,20],[2.9,-.2,.08,20],[2.2,.1,.08,20],[2.5,-.5,.08,20],[.2,1.2,.08,20],[1.1,-.1,.08,20],[2.4,0,.08,20],[1,-.3,.08,20],[2.3,.9,.08,20],[0,1.1,.08,20],[1.1,-.8,.08,20],[1.6,1.6,.08,20],[2.3,-.7,.08,20],[2.7,.6,.08,20],[2.2,.4,.08,20],[2.7,.3,.08,20],[.3,-.1,.08,20],[1.3,1.3,
.08,20]],j:[]},{l:3,h:[3.5,.5,.1],m:[],j:[]},{l:9,h:[3,.5,.1],m:[[1,-.5,.15],[1,-.25,.05,20],[1,0,.15],[1,.25,.05,20],[1,.5,.15]],j:[[1,-.9,.15,3E-4],[1,.9,.15,3E-4]]},{l:9,h:[2,0,.3],m:[],j:[]}],L=!1,Ia=!1,Ja=!1;const Ka=document.querySelector("#current-level"),La=document.querySelector("#boost");window.addEventListener("keydown",a=>{L||(L=" "===a.key);Ia=L&&!a.repeat;Ja||(Ja=("Enter"===a.key||"r"===a.key.toLowerCase())&&!a.repeat)});window.addEventListener("keyup",a=>{L&&(L=" "!==a.key)});
function Ma(){const a=new KeyboardEvent("keydown",{key:" ",code:"Space",keyCode:32,which:32,bubbles:!0,cancelable:!0});window.dispatchEvent(a)}function Na(){const a=new KeyboardEvent("keyup",{key:" ",code:"Space",keyCode:32,which:32,bubbles:!0,cancelable:!0});window.dispatchEvent(a)}La.addEventListener("mousedown",()=>Ma());La.addEventListener("mouseup",()=>Na());La.addEventListener("touchstart",a=>{a.preventDefault();Ma()});La.addEventListener("touchend",()=>Na());let Ea=document.createElement("div");
Ea.style.borderRadius="50%";Ea.style.background="radial-gradient(#ff6, #f52 30%, #0006 50%, #0000 80%)";
let Oa=new Da(a=>{a.element.style.filter=`brightness(${Math.random()+.5})`;let b=.5*Math.random()+.5,c,d=null!=(c=a.v.angle)?c:Math.random()*Math.PI*2,f;a.F=null!=(f=a.v.F)?f:.03;let e;a.G=null!=(e=a.v.G)?e:.03;let m,k=null!=(m=a.v.speed)?m:.1*Math.random()+.2;a.position.x=a.v.x;a.position.y=a.v.y;return h=>{let q=k*(1-(1-(1-a.A/b)**2)),n=Math.sin(d)*q;a.position.x+=h*Math.cos(d)*q;a.position.y+=h*n;a.element.style.opacity=Math.sin((1-a.A/b)*Math.PI/2)/2;a.I=1>a.A/b}});const Pa=[[.25,1,1.5]];
H.g.uniform1i(H.i.numBlackHoles,6);let M=[],N=[],Qa,Ra,O=(null!=(Ra=+window.localStorage.getItem("hit-the-space-progress"))?Ra:0)%(K.length-1);Ka.appendChild(document.createTextNode(O));for(let a=1;a<K.length;++a){K[a].h[0]+=K[a-1].h[0];K[a].h[1]+=K[a-1].h[1];for(let b of K[a].m)b[0]+=K[a].h[0],b[1]+=K[a].h[1];for(let b of K[a].j)b[0]+=K[a].h[0],b[1]+=K[a].h[1]}
function Sa(a){function b(e,m){let k,h=new Ha(e[2],null!=(k=e[3])?k:80,100*c(),m?Pa:[d(),d(),d(),d()],.6*c()+.6,m,a);(h.C=m&&a<=O)&&(h.element.style.filter="hue-rotate(88deg)");h.position.x=e[0];h.position.y=e[1];E.add(h);return h}Ta(a-3);if(!(a>=K.length||0>a)){var c=da(a),d=()=>[.2*c(),c(),.5*c()+.5],f=0;M=[...M,Qa=b(K[a].h,!0),...K[a].m.map(e=>b(e,!1))];N=[...K[a].j.map(function(e){let m=a%3*2+f++,k=e[0],h=e[1];ya(m,k,h,e[2],e[3]);return[k,h,e[2],a,m]}),...N]}}Sa(O);Sa(O-1);Sa(O+1);
function Ta(a){0>a||(M=M.filter(b=>{let c=b.level===a;c&&E.remove(b);return!c}),N=N.filter(b=>{let c=b[3]===a;c&&ya(b[4],9E9,9E9,0,0);return!c}))}let P=new xa;E.add(P);P.position.x=0;P.position.y=0;let Q=M[0],Ua=0,Va=0,Wa=0,ba=0,R=new wa;E.add(R);let S=2,r=0,t=0,T=Math.atan2(t,r),U=G.position.x,Xa=G.position.y,V=K[O].l,W=V,X=!1,Ya=document.getElementById("overlay"),Za=document.getElementById("boost-bar").style,$a=document.getElementById("boost-container").style;$a.width=10*V+"vh";
function ab(a){W=Math.max(W-a,0);Za.width=W/V*100+"%"}function bb(){R.element.style.opacity=1;R.position.x=Q.position.x-Q.s-.05;R.position.y=Q.position.y;R.o=1;G.position.x=U=R.position.x;G.position.y=Xa=R.position.y;t=r=0;T=Math.atan2(t,r);R.g.z=180*T/Math.PI;D=1;Ya.classList.remove("visible");Ua=1;S=2;Y=0;W=V;ab(0)}let cb=!1;window.StartGame=function(){cb||(cb=!0,ka(),bb(),db=!1)};window.ResetGame=function(){window.localStorage.setItem("hit-the-space-progress",0);Ka.textContent=0};let eb=[];
function fb(a,b){eb.push([a,b,!1])}function gb(a,b){eb.push([a,b,!0])}let hb=0,ib=0;const Z=1/60;
function jb(a){a/=1E3;var b=a-hb;hb=a;b=Math.min(b,.1);ib+=b;window.requestAnimationFrame(jb);for(a=X;ib>-Z/2;){ib-=Z;kb();for(b=0;b<eb.length;++b){var c=eb[b];c[2]&&c[0]();0>=(c[1]-=Z)&&(eb.splice(b,1),--b,c[0]())}Ja=Ia=!1}1===S&&(X=!1);a!==X&&(z.gain.linearRampToValueAtTime(X?0:1,u.currentTime),z.gain.linearRampToValueAtTime(X?1:0,u.currentTime+.1));a=.45/D;b=window.innerWidth/window.innerHeight*a;c=Qa.position.x-G.position.x;const d=Qa.position.y-G.position.y,f=l(d,-a,a);P.position.x=G.position.x+
l(c,-b,b);P.position.y=G.position.y+f;P.g.z=180*Math.atan2(d,c)/Math.PI;P.element.style.opacity=+(Math.abs(c)>1.5*b||Math.abs(d)>1.5*a);ta()}function lb(a){a>Math.PI?a-=2*Math.PI:a<-Math.PI&&(a+=2*Math.PI);return a}
function mb(){Ca(Oa,50,{x:R.position.x,y:R.position.y});B(50,.5,u.currentTime,.1,.5,.5,"square");B(70,.5,u.currentTime,.1,.3,.3,"sawtooth");C(.3,u.currentTime,A(),!0,1E3,2,.02,.6,0);S=1;Ya.classList.add("visible");R.element.style.opacity=0;y.gain.linearRampToValueAtTime(0,u.currentTime);y.gain.linearRampToValueAtTime(-20,u.currentTime+.5);fb(()=>{bb();y.gain.linearRampToValueAtTime(-20,u.currentTime);y.gain.linearRampToValueAtTime(0,u.currentTime+.5)},1)}let db=!0,Y=0;
function kb(){Oa.update(Z);if(!db&&1!==S){var a=.02*Z,b=l(Math.abs(U-R.position.x),0,5)/5,c=l(Math.abs(Xa-R.position.y),0,5)/5;U=g(U,R.position.x,g(b**1.5,b,Y));b=Xa=g(Xa,R.position.y,g(c**1.5,c,Y));c=2*R.position.y-Xa;G.position.x=g(U,2*R.position.x-U,Y*Y*(3-2*Y));G.position.y=g(b,c,Y*Y*(3-2*Y));D=g(D,1/(1+.5*ca()),.5*Z);if(0===S){if(Ja){mb();return}for(var d of M){b=d.position.x-R.position.x;c=d.position.y-R.position.y;var f=b*b+c*c;let e=d.L/f;if(Math.sqrt(f)<d.s+R.s+(d.J&&!d.C?.05:0)){if(d.J&&
!d.C){S=2;r=t=0;Sa(++O+1);window.localStorage.setItem("hit-the-space-progress",O);Ka.textContent=O;B(555,.5,u.currentTime,.1,.2,10,"sawtooth");B(66,.5,u.currentTime,.1,.2,10,"sawtooth");X=!1;W=V=K[O].l;$a.width=10*V+"vh";ab(0);Q=d;d.C=!0;d.element.style.filter="hue-rotate(88deg)";Ua=0;Va=R.position.x;Wa=R.position.y;ba=T;gb(()=>{Y=l(Y-Z/2,0,1)},2);O===K.length-1&&(db=!0,fb(()=>{document.getElementById("start-text").style.display="none";document.getElementById("game-completed").style.display="";Ya.classList.add("visible")},
.5),v.gain.linearRampToValueAtTime(ea,u.currentTime),v.gain.linearRampToValueAtTime(0,u.currentTime+4),w=ea=0);return}mb();return}r+=b*e*a;t+=c*e*a}for(const e of N){d=e[0]-R.position.x;b=e[1]-R.position.y;c=d*d+b*b;f=2E3*e[2]/c;if(Math.sqrt(c)<e[2]+R.s){S=1;Ya.classList.add("visible");let m=0,k=R.position.x,h=R.position.y;gb(()=>{m+=Z/.3;R.element.style.opacity=R.o=Math.max(0,1-m);R.position.x=g(k,e[0],m);R.position.y=g(h,e[1],m)},.3);y.gain.linearRampToValueAtTime(0,u.currentTime);y.gain.linearRampToValueAtTime(-20,
u.currentTime+.5);fb(()=>{bb();y.gain.linearRampToValueAtTime(-20,u.currentTime);y.gain.linearRampToValueAtTime(0,u.currentTime+.5)},1);return}r+=d*f*a;t+=b*f*a}if(X=L&&0<W)d=Math.cos(T),b=Math.sin(T),c=g(500,15,l(Math.hypot(r,t)/10,0,1)),r+=d*Z*c,t+=b*Z*c,c=.01*Math.random()+.025,Ca(Oa,1,{angle:T+(Math.random()-.5),x:R.position.x-.02*d,y:R.position.y-.02*b,speed:5*Z,F:c,G:c}),ab(Z);r*=1-5*a;t*=1-5*a;d=Math.hypot(r,t);b=Math.min(25,d);r*=b/d;t*=b/d;R.position.x+=r*a;R.position.y+=t*a;d=lb(Math.atan2(t,
r)-T);a*=80;d=l(d,-a,a);T=lb(T+d)}else 2===S&&(a=Math.atan2(R.position.y-Q.position.y,R.position.x-Q.position.x)+.15*Z/Q.s,b=Math.cos(a),d=Math.sin(a),Ua=Math.min(Ua+Z/.5,1),a+=Math.PI/2,b=Q.position.x+(Q.s+.05)*b,d=Q.position.y+(Q.s+.05)*d,c=1-(1-Ua)**2,T=aa(a,c),R.position.x=g(Va,b,c),R.position.y=g(Wa,d,c),Ia&&(S=0,r=15*Math.cos(a),t=15*Math.sin(a),gb(()=>{Y=l(Y+Z/3,0,1)},3)));R.g.z=180*T/Math.PI}}window.requestAnimationFrame(jb);window.addEventListener("resize",()=>ta());
