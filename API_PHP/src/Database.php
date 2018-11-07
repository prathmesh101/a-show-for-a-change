<?php

require_once ("../init.php");

class Database {

        public $connection;

        public function __construct() {
                try
                {
                        $this->connection = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
                }
                catch (Exception $e)
                {
                        die("Error connecting to database ". $this->connection->connect_error . " Exception error code " . $this->connection->connect_errno);
                }

        }

        public function close_connection ()
        {
                if (isset($this->connection))
                {
                        $this->connection->close();
                }
        }

        public function query($sql)
        {
                $result = mysqli_query($this->connection, $sql);
                if (!$result)
                {
                        die("Database query failed");
                }
                return $result;
        }

        public function table($table)
        {
                $this->table = $table;

                return $this;
        }

        public function insert($data)
        {
                $keys = array_keys($data);

                $fields = '`' . implode('`, `', $keys) . '`';
                $placeholders = ':' . implode(', :', $keys);

                $sql = "INSERT INTO {$this->table} ({$fields}) VALUES ({$placeholders})";

                $this->stmt = $this->pdo->prepare($sql);

                return $this->stmt->execute($data);
        }
        
        public function where($field, $operator, $value)
        {
                $sql = "SELECT * FROM {$this->table} WHERE {$field} {$operator} :value";

                $this->stmt = $this->pdo->prepare($sql);

                $this->stmt->execute([':value' => $value]);

                return $this;
        }

        public function count()
        {
                return $this->stmt->rowCount();
        }

        public function exists($data)
        {
                $field = array_keys($data)[0];

                return $this->where($field, "=", $data[$field])->count() ? true : false;
        }

        public function get()
        {

                return $this->stmt->fetchAll(PDO::FETCH_OBJ);
        }

        public function mysql_sanitize($string)
        {
                return mysqli_real_escape_string($this->connection, $string);
        }

        public function fetch_array($result_set)
        {
                return mysqli_fetch_array($result_set);
        }

        public function num_rows($result_set)
        {
                return mysqli_num_rows($result_set);
        }

        public function last_id_used()
        {
                return mysqli_insert_id($this->connection);
        }

        public function affected_rows()
        {
                return mysqli_affected_rows($this->connection);
        }

}

$db = new Database;

?>
