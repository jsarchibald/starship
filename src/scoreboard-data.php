<?php
	$out = array();

	$in = file_get_contents("scoreboard.json");
	$data = json_decode($in);
	
	$score = array();
	foreach ($data as $key => $row)
	{
		$score[$key] = $row->score;
	}
	array_multisort($score, SORT_DESC, $data);
	
	if (sizeof($data) > 20)
	{
		for ($x = 0; $x < 20; $x++)
		{
			array_push($out, $data[$x]);
		}
	}
	else
	{
		foreach($data as $row)
			array_push($out, $row);
	}
	
	echo json_encode($out);
?>