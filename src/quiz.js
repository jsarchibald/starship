function askQuestion(word, object)
{
	var nouns = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles",];
	var which = Math.round(Math.random() * 7);
	
	$("#word-instr").text(word);
	$("#noun-instr").text(nouns[which])
	
	$("#check-conjugation").click(function(){
		var wrong;
		console.log($("#answer").val() +  " == " + object[nouns[which]])
		// don't reset textbox value; it will hard-code it in
		if ($("#answer").val() == object[nouns[which]])
		{
			wrong = 0;
			$("#correct-wrong").text("Correct!");
			//alert("YI")
			//$("#answer").val("Correct!");
		}
		else
		{
			wrong = 1;
			$("#correct-wrong").text("Wrong. " + object[nouns[which]]);
			//$("#answer").val("Wrong");
		}
		
		//$("#answer").val("");
		return wrong;
	});
	
	//alert(word + ": " + nouns[which]);
}

function gotHit(WORDS, WORD_LIST, numberWrong)
{
	$(".question-box").show();
	$("#answer").focus();
	var whichWord = Math.round(Math.random() * WORD_LIST.length);
	var res = askQuestion(WORD_LIST[whichWord], WORDS[WORD_LIST[whichWord]]);
	if (res == 0)
		return numberWrong;
	else
	{
		$("#correct-wrong").text("Wrong.");
		return numberWrong++;
	}
}

function addAccent()
{
	$(".accents button").click(function(){
		var accent = $(this).attr("id");
		$("#answer").val($("#answer").val() + accent).focus();
	});
}