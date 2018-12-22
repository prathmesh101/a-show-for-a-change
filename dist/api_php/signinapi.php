<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../../src/backend/php/init.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // $username = $_REQUEST['username'] ? $_REQUEST['username'] : '';
        // $password = $_REQUEST['password'] ? $_REQUEST['password'] : '';

        $form_values = json_decode(file_get_contents('php://input'),true);
        $username = !empty($form_values['username']) ? $form_values['username'] : '';
        $password = !empty($form_values['password']) ? $form_values['password'] : '';

        if(empty($username))
        {
                $errors[] = "Username can not be empty";
        }


        if(empty($password))
        {
                $errors[] = "Password can not be empty";
        }


        if (empty($errors))
        {

                // verify username in the database
                $user_data = $user->get_by_username($username);

                if ($user_data)
                {
                        if (password_verify($password, $user_data["password"]))
                        {
                               // $session->login($username);
                               // http_response_code(200);

                                // make it json format
                                echo "success";
                        } else {

                                http_response_code(404);
                                echo "Problem logining in";
                        }

                } else {

                        http_response_code(404);
                        echo "Problem logining in";
                }


        } else {

                http_response_code(404);
                echo "Values missing";

        }

}
?>
