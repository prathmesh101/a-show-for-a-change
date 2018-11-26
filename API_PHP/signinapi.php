<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once("../init.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $username = $_REQUEST['username'] ? $_REQUEST['username'] : '';
        $password = $_REQUEST['password'] ? $_REQUEST['password'] : '';


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
                                $session->login($username);
                                http_response_code(200);

                                // make it json format
                                echo serialize(json_encode(array("firstname" => $user_data["first_name"], "lastname" => $user_data["last_name"])));
                        } else {

                                http_response_code(404);
                                echo serialize(json_encode(array("message" => "Problem logining in")));
                        }

                } else {

                        http_response_code(404);
                        echo serialize(json_encode(array("message" => $errors)));
                }


        } else {

                http_response_code(404);
                echo serialize(json_encode(array("message" => $errors)));

        }

}
?>
