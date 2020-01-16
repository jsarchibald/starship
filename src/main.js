$(document).ready(function(){
	var otherContOpen = 0;
	$("#help").click(function(){
		$(".other-cont div").hide();
		$(".other-cont").show();
		$(".other-cont .help").show();
		$(".other-cont .close-btn").show();
		otherContOpen = 1;
	});
	$("#options").click(function(){
		$(".other-cont div").hide();
		$(".other-cont").show();
		$(".other-cont .options").show();
		$(".other-cont .close-btn").show();
		otherContOpen = 1;
	});
	$("#high-scores").click(function(){
		$(".other-cont div").hide();
		$(".other-cont").show();
		$(".other-cont .high-scores").show();
		$(".other-cont .close-btn").show();
		otherContOpen = 1;
		
		var success = function(data)
		{
			$("#high-scores-table tr").hide();
			$("#high-scores-table tr:first-child").show();
			var print = "";
			for (x = 0; x < data.length; x++)
			{
				print += "<tr><td>" + data[x]["name"] + "</td><td>" + data[x]["score"] + "</td><td>" + data[x]["time"] + "</td></tr>";
			}
			$("#high-scores-table").append(print);
		}
		
		$.getJSON("scoreboard-data.php", success);
	});
	$("#close-extra").click(function(){
		$(".other-cont div").hide();
		$(".other-cont").hide();
		otherContOpen = 0;
	});
	$("#music").click(function(){
		if (document.getElementById("music").checked)
		{
			document.getElementById("star-wars").play();
		}
		else
		{
			document.getElementById("star-wars").pause();
		}
	});
	
	addAccent();
	
	$(".start").click(function(){
		$(this).hide();
		// get constants
		var CONSTANTS = setConstants();
		var ROCKET = CONSTANTS.ROCKET.OBJECT;
		var WORDS = getWords()[0];
		var WORD_LIST = getWords()[1];
		
		// set variables that will be used repeatedly
		var usedPaths = [];
		var currentObjects = 0;
		var numberWrong = 0;
		var points = 0;
		
		// movement handling for rocket
		$(document).keydown(function(e){
			var key = e.which;
			
			if (key == CONSTANTS.LEFT_KEY)
			{
				// if the x of rocket start (768px) + half rocket width (32px)
				// + our current marginal offset - 150px >= 1/2 of screen width (800px)
				// - the rocket's starting location (768px)
				if (CONSTANTS.ROCKET.START + (CONSTANTS.ROCKET.WIDTH / 2) + CONSTANTS.ROCKET.X - 150 >= CONSTANTS.SCREEN_WIDTH / 2 - CONSTANTS.ROCKET.START)
				{
					CONSTANTS.ROCKET.X = CONSTANTS.ROCKET.X - 150;
					ROCKET.animate({marginLeft: CONSTANTS.ROCKET.X + "px"}, CONSTANTS.ROCKET.SPEED);
				}
			}
			if (key == CONSTANTS.RIGHT_KEY)
			{
				// if the x of rocket start (768px) + half rocket width (32px)
				// + our current marginal offset - 150px <= screen width
				if (CONSTANTS.ROCKET.START + (CONSTANTS.ROCKET.WIDTH / 2) + CONSTANTS.ROCKET.X + 150 <= CONSTANTS.SCREEN_WIDTH)
				{
					CONSTANTS.ROCKET.X = CONSTANTS.ROCKET.X + 150;
					ROCKET.animate({marginLeft: CONSTANTS.ROCKET.X + "px"}, CONSTANTS.ROCKET.SPEED);
				}
			}
		});
		
		// generation of space debris/objects
		var pause = 0;
		var iterations = 0;
		setInterval(function(){
			//if (currentObjects < CONSTANTS.MAX_OBJECTS)
			if (pause == 0)
			{
				if (iterations < 20)
				{
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
				}
				else if (iterations < 40)
				{
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
				}
				else if (iterations < 60)
				{
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
				}
				else
				{
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
					
					usedPaths = generateDebris(usedPaths, CONSTANTS, ROCKET);
					currentObjects++;
				}
				iterations++;
			}
		}, 2500);
		
		// cleanup operations
		/*setInterval(function(){
			for (x = 0; x < usedPaths.length; x++);
			{
				//var elem = document.elementFromPoint(usedPaths[x]["x"], CONSTANTS.SCREEN_HEIGHT + 5);
				
				//if (usedPaths[x])
				{
					console.log(x)
					console.log(usedPaths[x-1])
					if (usedPaths[x-1]["done"] < Math.floor(Date.now() / 1000))
					{
						console.log("removing")
						var obj = usedPaths[x]["object"];
						obj.remove();
					}
				}
			}
		}, 1500);*/
		
		// check if ship is touching any debris
		setInterval(function(){
			if (pause == 0)
			{
				for (x = 0; x < usedPaths.length; x++)
				{
					var obj = usedPaths[x];
					var handler = usedPaths[x].object;
					var pos = handler.position();
					
					// see if the debris is in the correct y-value range to hit rocket
					var debrisT = pos.top + CONSTANTS['OBJECT_' + obj.type].WIDTH;
					if (debrisT >= CONSTANTS.ROCKET.Y && debrisT <= CONSTANTS.ROCKET.Y + CONSTANTS.ROCKET.HEIGHT)
					{
						//console.log("HIT Y")
						// see if debris is in the correct x-value range to hit rocket
						var debrisL = pos.left + CONSTANTS['OBJECT_' + obj.type].WIDTH;
						var rocketL = ROCKET.position().left + CONSTANTS.ROCKET.X;
						//console.log(rocketL)
						if (debrisL >= rocketL && debrisL <= rocketL + CONSTANTS.ROCKET.WIDTH + 10)
						{
							pause = 1;
							//console.log("HIT");
							
							numberWrong = gotHit(WORDS, WORD_LIST, numberWrong);
							console.log(numberWrong)
							setTimeout(function(){
								
								var txt = $("#correct-wrong").text();
								if (txt.indexOf("Wrong") > -1)
									numberWrong++;
								
								$(".question-box").hide();
								if (numberWrong == 3)
								{
									$(".game-over").show();
									$(".timer-points").text(points);
								}
								else
								{
									$(".lives").text((3 - numberWrong) + "x");
									pause = 0;
								}
								
								setTimeout(function(){
									$("#correct-wrong").text("");
								}, 1000);
								
							}, 20000);
							
							var seconds = 20;
							setInterval(function(){
								if (pause == 1)
								{
									seconds--;
									if (seconds >= 0)
										$(".timer-points").text(seconds);
								}
							}, 1000);
						}
						else
						{
							points = points + Math.ceil(Math.random() * 150 + 50);
							$(".timer-points").text(points);
						}
					}
					//console.log(handler)
				}
			}
		}, 500);
		$("#save-score").click(function(){
			var data = {
				name: $("#users-name").val(),
				score: points
			};
			$(".game-over").hide();
			$(".start").show();
			
			$.post("scoreboard.php", data);
		});
	});
});