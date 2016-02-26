(function() {
  // Globals
  var formation = [
    1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,
    0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
    0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
    0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
    1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1
  ];
  var colors = ["#FFEB3B", "#E91E63", "#03A9F4"];
  var pixels = [];
  
  // Functions
  function init() {
    setupPixels(animate);
    
    // Event listener for button
    document.getElementById("smoothing").addEventListener("click", toggleSmoothing);
  }
  
  function setupPixels(callback) {
    var container = document.getElementsByClassName("container")[0];
    
    // Create and store colored pixels
    formation.forEach(function(el) {
      var pixel = document.createElement("div");
      pixel.className = "pixel";
      
      if (el !== 0) {
        var color = Math.floor(Math.random() * 3);
        pixel.style.backgroundColor = colors[color];
        
        pixels.push(pixel);
      }
      
      container.appendChild(pixel);
    });
    
    callback();
  }
  
  function animate() {
    // Randomly choose 32 pixels to switch colors
    for (var i = 0; i < 32; i++) {
      var pixel = Math.floor(Math.random() * pixels.length);
      var color = Math.floor(Math.random() * 3);
      pixels[pixel].style.backgroundColor = colors[color];
    }
    
    // Queue next animation
    setTimeout(function() {
      window.requestAnimationFrame(animate);
    }, 5);
  }
  
  function toggleSmoothing() {
    if (pixels[0].className.indexOf("nosmooth") === -1) {
      pixels.forEach(function(el) {
        el.className += " nosmooth";
      });
    } else {
      pixels.forEach(function(el) {
        el.className = "pixel";
      });
    }
  }
  
  // Event listener for init
  document.addEventListener("DOMContentLoaded", init);
})();
