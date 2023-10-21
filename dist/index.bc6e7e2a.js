function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirebd24"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirebd24"] = parcelRequire;
}
parcelRequire.register("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $7d39d93f9098a310$export$f7ad0328861e2f03, (v) => $7d39d93f9098a310$export$f7ad0328861e2f03 = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = {};
function $7d39d93f9098a310$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$7d39d93f9098a310$var$mapping[keys[i]] = pairs[keys[i]];
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

var $45d9bf47f40debef$exports = {};

(parcelRequire("aKzDW")).register(JSON.parse('{"h8h7G":"index.bc6e7e2a.js","cICML":"sofa.9e86dae4.glb","8BrTn":"index.9d54a3d9.css","gHPHw":"index.182cef57.js"}'));


var $5qRoW = parcelRequire("5qRoW");

var $63d8e9f3a17061a9$exports = {};

$63d8e9f3a17061a9$exports = new URL((parcelRequire("aKzDW")).resolve("cICML"), import.meta.url).toString();


async function $3da87ddc4a220fcd$var$setupViewer() {
    // Initialize the viewer
    const viewer = new (0, $5qRoW.ViewerApp)({
        canvas: document.getElementById("webgi-canvas")
    });
    // Add some plugins
    const manager = await viewer.addPlugin((0, $5qRoW.AssetManagerPlugin));
    // Add a popup(in HTML) with download progress when any asset is downloading.
    await viewer.addPlugin((0, $5qRoW.AssetManagerBasicPopupPlugin));
    // Add plugins individually.
    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    // await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...
    // or use this to add all main ones at once.
    await (0, $5qRoW.addBasePlugins)(viewer);
    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin((0, $5qRoW.CanvasSnipperPlugin));
    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();
    // Import and add a GLB file.
    let url = new URL($63d8e9f3a17061a9$exports);
    url = "" + url;
    const model = await viewer.load(url);
    const object3d = model.modelObject;
    const easing = "power.0";
    // Gsap Scroll Animation
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        //  duration:10,
        ease: easing,
        scrollTrigger: {
            trigger: ".trigger",
            scrub: 1,
            //   start: " top bottom ",
            endTrigger: ".trigger1"
        }
    });
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileNav = document.getElementById("mobileNav");
    mobileMenuButton.addEventListener("click", ()=>{
        mobileNav.classList.toggle("hidden");
    });
    const Colors = document.querySelectorAll(".cBtn");
    const object = viewer.scene.findObjectsByName("Object_2")[0].modelObject;
    const startMaterial = object.material;
    for (const color of Colors)color.addEventListener("click", (e)=>{
        const backgroundColor = window.getComputedStyle(color).backgroundColor;
        console.log(object, backgroundColor);
        const obj = viewer.createPhysicalMaterial({
            color: backgroundColor.toString(),
            roughness: 0.5
        });
        object.setMaterial(obj);
    });
    const scrollMat = viewer.createPhysicalMaterial({
        color: "darkgrey",
        roughness: 0.5
    });
    // Function to adjust the object's properties based on screen width
    function adjustObjectProperties() {
        if (window.innerWidth <= 768) {
            object3d.position.x = 0;
            object3d.position.y = -2.4;
            viewer.scene.activeCamera.position.set(5.5938, 2.22372, 15.9431);
            viewer.scene.activeCamera.positionUpdated(); // this must be called to notify the controller on value update
        } else {
            object3d.position.x = 1.3;
            object3d.position.y = -1;
            viewer.scene.activeCamera.position.set(5.5938, 2.22372, 6.9431);
            viewer.scene.activeCamera.positionUpdated(); // this must be called to notify the controller on value update
        }
        console.log(object3d.position.z);
    }
    // Initial adjustment
    adjustObjectProperties();
    // Listen for window resize events and adjust object properties accordingly
    window.addEventListener("resize", adjustObjectProperties);
    //   Camera 
    tl.to(object3d.rotation, {
        y: Math.PI / 2,
        ease: easing,
        duration: 1,
        onUpdate: ()=>{
            viewer.setDirty();
        },
        onReverseComplete: ()=>{
            object.setMaterial(startMaterial);
        }
    }, "<");
    // Mouse Move Effect 
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    document.addEventListener("mousemove", onDocumentMouseMove);
    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
        viewer.setDirty();
    }
    AOS.init();
    function animate() {
        requestAnimationFrame(animate);
        // targetX = mouseX * .0001;
        // targetY = mouseY * .00008;
        // if (object3d) {
        //     object3d.rotation.y += 0.07 * ( targetX - object3d.rotation.y );
        //     object3d.rotation.x += 0.07 * ( targetY - object3d.rotation.x );
        // }
        viewer.setDirty();
    }
    animate();
}
$3da87ddc4a220fcd$var$setupViewer();


//# sourceMappingURL=index.bc6e7e2a.js.map
