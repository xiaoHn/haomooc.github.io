<?php
include 'Laimooc_upload.php';
$log_file_time=date("Y-m-d");
$logfile = fopen('log/'.$log_file_time."_log.txt","a+"); 
$time = date('Y-m-d H:i:s');
//echo $time;
$filename = $time.' '.$filename;
fwrite($logfile,$filename."\n");
fclose($logfile);

