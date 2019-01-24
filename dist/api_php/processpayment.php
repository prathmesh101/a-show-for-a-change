<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

file_put_contents("../../../../backup/filedump.txt", "we are inside processpayment\n");

require_once('../../../../vendor/autoload.php');

$stripe = [
  "secret_key"      => "sk_test_oTOTAOYTb91W3T0kOBreOFpU",
  "publishable_key" => "pk_test_QnqxjgpNaY5eYWI0mhVwVvZA",
];

\Stripe\Stripe::setApiKey($stripe['secret_key']);

$token  = $_POST['stripeToken'];
$email  = $_POST['stripeEmail'];

$customer = \Stripe\Customer::create([
    'email' => $email,
    'source'  => $token,
]);

$charge = \Stripe\Charge::create([
    'customer' => $customer->id,
    'amount'   => 1000,
    'currency' => 'usd',
]);

echo '<h1>Successfully charged $10.00!</h1>';

file_put_contents("../../../../backup/filedump.txt", "at the end of program\n");
?>

