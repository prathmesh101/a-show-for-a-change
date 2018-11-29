<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: REQUEST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//require_once("../init.php");
 http_response_code(200);
// echo serialize(json_encode(array("message" => "success")));
echo "here wer are *********************************";
file_put_contents("../../../backup/phpfilereached.txt", "inside php");
