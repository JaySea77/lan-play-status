<?php
$url = 'http://'.$_GET['address'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_TIMEOUT, 1);
$result = curl_exec($ch);
curl_close($ch);
?>
