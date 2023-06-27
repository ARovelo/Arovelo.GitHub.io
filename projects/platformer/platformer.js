$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)\
    // TODO 1
// Create platforms
createPlatform(100, 850, 200, 10); // Platform 1
  createPlatform(200, 750, 200, 10); // Platform 2
  createPlatform(500, 650, 200, 10); // Platform 3
  createPlatform(700, 550, 200, 10); // Platform 4
  createPlatform(350, 450, 200, 10); // Platform 5
  createPlatform(600, 345, 100, 10); // Platform 6
  createPlatform(900, 345, 200, 10); // Platform 7
  createPlatform(700, 250, 200, 10); // Platform 8
  createPlatform(1000, 150, 200, 10); // Platform 9
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("grace", 590, 235); // Collectible near platform 6
    createCollectable("max", 950, 455); // Collectible near Platform 2
    createCollectable("database", 550, 625); // Collectible near Platform 3
  


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 200, 1500); // Cannon on the left wall, positioned at 200px down, shooting every 1.5 seconds
    createCannon("right", 850, 2000); // Cannon on the right wall, positioned at 850px down, shooting every 2 seconds
    createCannon("top", 500, 3000); // Cannon on the top wall, positioned at 500px across, shooting every 3 seconds
    createCannon("bottom", 700, 2500); // Cannon on the bottom wall, positioned at 700px across, shooting every 2.5 seconds



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
