<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: REQUEST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

    $form_values = json_decode(file_get_contents('php://input'),true);

    echo $form_values['email'];
    exit;

    $first_name = $form_values['first_name'] ? $form_values['first_name'] : '';
    //$middle_name = $form_values['middle_name'] ? $form_values['middle_name'] : '';
    $last_name = $form_values['last_name'] ? $form_values['last_name'] : '';
    //$address = $form_values['address'] ? $form_values['address'] : '';
    //$address2 = $form_values['address2'] ? $form_values['address2'] : '';
    //$city = $form_values['city'] ? $form_values['city'] : '';
    //$state = $form_values['state'] ? $form_values['state'] : '';
    //$zipcode = $form_values['zipcode'] ? $form_values['zipcode'] : '';
    //$phone_no = $form_values['phone_no'] ? $form_values['phone_no'] : '';
    //$username = $form_values['username'] ? $form_values['username'] : '';
    $password = $form_values['password'] ? $form_values['password'] : '';
    $email = $form_values['email'] ? $form_values['email'] : '';


        if(empty($first_name))
        {
                $errors[] = "First name can not be empty.";
        }
        if(empty($last_name))
        {
                $errors[] = "Last name can not be empty.";
        }
 //       if(empty($username))
 //       {
 //               $errors[] = "Username can not be empty.";
 //       }
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

            echo json_encode(array("message" => "Errors in input field", "error" => $errors[0]));

        }
}

