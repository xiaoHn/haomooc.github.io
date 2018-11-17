<?php
function __autoload($name){
		include $name .".js";
}
global $module;
$module = $_GET['module'];
//echo $module;
__autoload($module);






?>
