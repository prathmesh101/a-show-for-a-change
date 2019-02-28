<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

require_once('../../../../vendor/autoload.php');


session_start();

//generate a random token
$auth_token = urlencode(base64_encode(random_bytes(32)));

$_SESSSION['auth_key'] = $auth_token;
$_SESSSION['start_time'] = time();

echo json_encode(array("access_token" => $auth_token));

