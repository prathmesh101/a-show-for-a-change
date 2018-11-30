<?php

require_once ("init.php");


class User
{

        public $logged_in_username;

        public function insert_record ($first_name, $middle_name, $last_name, $address,
                                                                  $address2, $city, $state, $zipcode, $phone_no,
                                                                  $username, $password, $email)
        {
                global $db;


                $hased_password = password_hash($password, PASSWORD_BCRYPT);

                $sql = "INSERT INTO users ";
                $sql .= "(first_name, middle_name, last_name, address1, address2, ";
                $sql .= "city, state, zipcode, phone, ";
                $sql .= "username, password, email, ";
                $sql .= "modified_by)";
                $sql .= " VALUES (";
                $sql .= "'".   $db->mysql_sanitize($first_name) . "',";
                $sql .=  "'" . $db->mysql_sanitize($middle_name) . "',";
                $sql .=  "'" . $db->mysql_sanitize($last_name) . "',";
                $sql .=  "'" . $db->mysql_sanitize($address) . "',";
                $sql .=  "'" . $db->mysql_sanitize($address2) . "',";
                $sql .=  "'" . $db->mysql_sanitize($city) . "',";
                $sql .=  "'" . $db->mysql_sanitize($state) . "',";
                $sql .=  "'" . $db->mysql_sanitize($zipcode) . "',";
                $sql .=  "'" . $db->mysql_sanitize($phone_no) . "',";
                $sql .=  "'" . $db->mysql_sanitize($username) . "',";
                $sql .=  "'" . $db->mysql_sanitize($hased_password) . "',";
                $sql .=  "'" . $db->mysql_sanitize($email) . "',";
                $sql .=  "'defuser')";

                $result = $db->query($sql);
                if ($result)
                {
                        return true;

                } else {

                        echo $db->error;
                        $db->close();
                        exit;

                }

        }
        
        public function get_by_username($username)
        {
                global $db;

                $sql = "SELECT * FROM users ";
                $sql .= "WHERE username = '" . $db->mysql_sanitize($username) . "' ";
                $sql .= "LIMIT 1";

                //$result  = mysqli_query($db->connection, $sql);
                $result  = $db->query($sql);

                if ($result)
                {
                        //$admin = mysqli_fetch_assoc($result);
                        $admin =  $result->fetch_array(MYSQLI_ASSOC);
                        //mysqli_free_result($result);
                        $result->free();
                        return $admin;

                } else {

                        return false;
                }
        }

        public function get_by_email($email)
        {
                global $db;

                $sql = "SELECT * FROM users ";
                $sql .= "WHERE email = '" . $db->mysql_sanitize($email) . "' ";
                $sql .= "LIMIT 1";

                //$result  = mysqli_query($db->connection, $sql);
                $result  = $db->query($sql);

                if ($result)
                {
                        //$admin = mysqli_fetch_assoc($result);
                        $admin = $result->fetch_array(MYSQLI_ASSOC);
                        //mysqli_free_result($result);
                        $result->free();
                        return $admin;

                } else {

                        return false;
                }
        }
        
        public function find_by_sql($sql="")
        {
                global $db;
                $result = $db->query($sql);

                $object_array = [];

                while ($row = $db->fetch_array($result))
                {

                        $object_array[] = $this->instantiate($row);

                }

                return $object_array;
        }

        public function find_all()
        {
                global $db;
                return $this->find_by_sql("SELECT * FROM users");
        }

        public function find_by_id($id=0)
        {
                global $db;
                $result = $this->find_by_sql("SELECT * FROM users WHERE id = {$id} LIMIT 1");

                return !empty($result) ? array_shift($result) : false;
        }

        private static function instantiate($record)
        {

                $object = new self;

                foreach ($record as $attribute => $value)
                {
                        if($object->has_atttribute($attribute))
                        {
                                $object->$attribute = $value;
                        }
                }

                return $object;
        }

        private function has_atttribute($attribute)
        {

                $object_vars = get_object_vars($this);

                return array_key_exists($attribute, $object_vars);

        }

}

$user = new User;

?>
