<?php
$app = __DIR__;

//require_once('/etc/php/7.0/cli/vendor/autoload.php');


file_put_contents("../../../backup/phpfilereached.txt",  $app   ."\n");
require_once("{$app}/config.php");
echo "afte config.php";
exit;
//require_once("{$app}/includes/classes/Stripe_API.php");
require_once("{$app}/src/php/Session.php");
require_once("{$app}/src/php/Database.php");
require_once("{$app}/src/php/User.php");
/*require_once("{$app}/includes/classes/Dealer.php");
require_once("{$app}/includes/classes/Plan.php");
require_once("{$app}/includes/classes/Subscription.php");
require_once("{$app}/includes/classes/Calculate.php");
*/
$public = strpos($_SERVER['SCRIPT_NAME'], '/html') + 5;
$doc_root = substr($_SERVER['SCRIPT_NAME'], 0, 0);
define("WWW_ROOT", $doc_root);

//require_once("{$app}/includes/functions/functions.php");
$errors=[];

?>
