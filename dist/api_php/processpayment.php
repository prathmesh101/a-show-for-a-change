<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

file_put_contents("../../../../backup/filedump.txt", "we are inside processpayment");

<?php
require_once('vendor/autoload.php');

$stripe = [
  "secret_key"      => "sk_test_4eC39HqLyjWDarjtT1zdp7dc",
  "publishable_key" => "pk_test_TYooMQauvdEDq54NiTphI7jx",
];

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>

