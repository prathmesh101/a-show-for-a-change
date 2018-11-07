<?php

require_once ("../init.php");

class Session
{

        public $logged_in;
        public $username;

        function __construct()
        {
                session_start();
                $this->check_login();
        }

        public function is_logged_in()
        {
                if ($this->logged_in && $_SESSION['last_login'] + 30 > time())
                {
                        return true;
                } else {
                        $this->logout();
                        header("Location:/");
                }
        }

        public function login($username)
        {
                if (isset($username))
                {
                        $this->logged_in = true;
                        session_regenerate_id();
                        $_SESSION['username'] = $username;
                        $_SESSION['last_login'] = time();
                }
        }

        public function logout()
        {
                        unset($_SESSION['username']);
                        session_destroy();
                        $this->logged_in = false;
        }

        private function check_login()
        {
                if(isset($_SESSION['username']))
                {
                        $this->username = $_SESSION['username'];
                        $this->logged_in = true;

                } else {
                        unset($this->username);
                        $this->logged_in = false;
                        //header("Location:index.php");
                }
        }

}

$session =  New Session();

?>
