function setConstants()
{
	// Generate screen area - full screen container
	var ROCKET = $(".rocket");
	var CONSTANTS = {};

	CONSTANTS.ROCKET = {"OBJECT": ROCKET};
	CONSTANTS.MAX_OBJECTS = 200;

	// Create constant of screen width and height
	CONSTANTS.SCREEN_WIDTH  = $(document).width();
	CONSTANTS.SCREEN_HEIGHT = $(document).height();

	// Create constants of widths of objects (ex 50px)
	CONSTANTS.ROCKET.WIDTH  = ROCKET.width();
	CONSTANTS.ROCKET.HEIGHT = ROCKET.height();

	CONSTANTS['OBJECT_0'] = {};
	CONSTANTS['OBJECT_1'] = {};

	CONSTANTS['OBJECT_0'].WIDTH = 32;
	CONSTANTS['OBJECT_1'].WIDTH = 48;

	// Starting points for each object range is screenwidth-objectwidth
	CONSTANTS['OBJECT_0'].MIN_X = CONSTANTS['OBJECT_0'].WIDTH / 2;
	CONSTANTS['OBJECT_0'].MAX_X = CONSTANTS.SCREEN_WIDTH - CONSTANTS['OBJECT_0'].WIDTH;
	CONSTANTS['OBJECT_1'].MIN_X = CONSTANTS['OBJECT_1'].WIDTH / 2;
	CONSTANTS['OBJECT_1'].MAX_X = CONSTANTS.SCREEN_WIDTH - CONSTANTS['OBJECT_1'].WIDTH;
	
	CONSTANTS.ROCKET.SPEED = {duration: 500, easing: "linear"};
	CONSTANTS.ROCKET.X = 0;
	CONSTANTS.ROCKET.Y = $(".rocket-container").position().top;
	CONSTANTS.ROCKET.START = ROCKET.position().left;
	
	// Set the keys we are looking for
	CONSTANTS.LEFT_KEY  = 37;
	CONSTANTS.RIGHT_KEY = 39;
	
	console.log(CONSTANTS)
	
	return CONSTANTS;
	
	// Spaceship starts at center of screen on bottom, stays on bottom but moves sideways
	

	// turn off jquery quadratic speeds (easing)
	// velocity of objects = randomized between 300px/s

}