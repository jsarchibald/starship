function generateDebris(usedPaths, CONSTANTS, ROCKET)
{
	var whichObj = Math.round(Math.random());
	if (Math.round(Math.random() * 10) >= 8)
		var chosenX = ROCKET.position().left + CONSTANTS.ROCKET.X;
	else
		var chosenX = (Math.round(Math.random() * CONSTANTS['OBJECT_' + whichObj].MAX_X +
	
	CONSTANTS['OBJECT_' + whichObj].MIN_X)) - CONSTANTS['OBJECT_' + whichObj].WIDTH / 2;
	
	var dur = Math.round(Math.random() * 6000 + 2000);
	
	$(".container").append(
		'<div class="space-debris type-' + whichObj + '" data-oid="' + usedPaths.length +
		'" style="left: '+ chosenX +'px">'
	);
	$("div[data-oid='" + usedPaths.length + "']").animate({top: CONSTANTS.SCREEN_HEIGHT},
		{duration: dur, easing: "linear"});
	
	usedPaths.push({
		object: $("div[data-oid='" + usedPaths.length + "']"),
		type: whichObj,
		x: chosenX,
		done: Math.floor(Date.now() / 1000) + (dur / 1000),
		oid: usedPaths.length,
	});
	
	return usedPaths;
}