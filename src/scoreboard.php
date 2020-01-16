<?php
	$in = file_get_contents("scoreboard.json");
	$data = json_decode($in);
	
	$add = array(
		"name" => $_POST['name'],
		"score" => $_POST['score'],
		"time" => date("M d Y h:i A")
	);
	
	array_push($data, $add);
	
	file_put_contents("scoreboard.json", json_encode($data));
?>