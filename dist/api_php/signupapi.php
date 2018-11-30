<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: REQUEST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

        $first_name = $_REQUEST['first_name'] ? $_REQUEST['first_name'] : '';
        $middle_name = $_REQUEST['middle_name'] ? $_REQUEST['middle_name'] : '';
        $last_name = $_REQUEST['last_name'] ? $_REQUEST['last_name'] : '';
        $address = $_REQUEST['address'] ? $_REQUEST['address'] : '';
        $address2 = $_REQUEST['address2'] ? $_REQUEST['address2'] : '';
        $city = $_REQUEST['city'] ? $_REQUEST['city'] : '';
        $state = $_REQUEST['state'] ? $_REQUEST['state'] : '';
        $zipcode = $_REQUEST['zipcode'] ? $_REQUEST['zipcode'] : '';
        $phone_no = $_REQUEST['phone_no'] ? $_REQUEST['phone_no'] : '';
        $username = $_REQUEST['username'] ? $_REQUEST['username'] : '';
        $password = $_REQUEST['password'] ? $_REQUEST['password'] : '';
        $email = $_REQUEST['email'] ? $_REQUEST['email'] : '';


        if(empty($first_name))
        {
                $errors[] = "First name can not be empty.";
        }
        if(empty($last_name))
        {
                $errors[] = "Last name can not be empty.";
        }
        if(empty($username))
        {
                $errors[] = "Username can not be empty.";
        }
        if(empty($password))
        {
                $errors[] = "Password can not be empty.";
        }
        if(empty($email))
        {
                $errors[] = "Email can not be empty.";
        }

        if(empty($errors)) {

                $result = $user->insert_record($first_name, $middle_name, $last_name, $address,
                                $address2, $city, $state, $zipcode, $phone_no,
                                $username, $password, $email);


                if($result) {

                        http_response_code(200);
                        echo json_encode(array("message" => "Success"));

                } else {

                         http_response_code(404);
                         echo json_encode(array("message" => "Unable to updated database"));
                         
                }

        } else {

            echo json_encode(array("message" => "Errors in input field", "list" => $errors))

        }
}

