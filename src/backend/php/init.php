<?php
$app = __DIR__;

//require_once('/etc/php/7.0/cli/vendor/autoload.php');

require_once("config.php");
//require_once("{$app}/includes/classes/Stripe_API.php");
require_once("Session.php");
require_once("Database.php");
require_once("Users.php");
/*require_once("{$app}/includes/classes/Dealer.php");
require_once("{$app}/includes/classes/Plan.php");
require_once("{$app}/includes/classes/Subscription.php");
require_once("{$app}/includes/classes/Calculate.php");

$public = strpos($_SERVER['SCRIPT_NAME'], '/html') + 5;
$doc_root = substr($_SERVER['SCRIPT_NAME'], 0, 0);
define("WWW_ROOT", $doc_root);

//require_once("{$app}/includes/functions/functions.php");
*/
$errors=[];
