<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

require_once('../../../../vendor/autoload.php');


$stripe = [
  "secret_key"      => "sk_test_oTOTAOYTb91W3T0kOBreOFpU",
  "publishable_key" => "pk_test_QnqxjgpNaY5eYWI0mhVwVvZA",
];
  
\Stripe\Stripe::setApiKey($stripe['secret_key']);
  
$form_values = json_decode(file_get_contents('php://input'),true);
  
$token  = $form_values["id"];
$email = $form_values["email"];

$customer = \Stripe\Customer::create([
    'email' => $email,
    'source'  => $token,
]);
  
$charge = \Stripe\Charge::create([
    'customer' => $customer->id,
    'amount'   => 1000,
    'currency' => 'usd',
  ]);
  
echo $email;
  
?>

