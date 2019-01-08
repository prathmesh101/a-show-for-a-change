<?php

require_once ("init.php");

class Video
{
    public function insert_record($distribution_id, $domain_name, $ARN, $user_id)
    {
        global $db;

        $sql = "INSERT INTO videos ";
        $sql .= "(distribution_id, domain_name, ARN, user_id,";
        $sql .= "modified_by)";
        $sql .= " VALUES (";
        $sql .= "'".   $distribution_id . "',";
        $sql .=  "'" . $domain_name . "',";
        $sql .=  "'" . $ARN . "',";
        $sql .=  "'" . $user_id . "',";
        $sql .=  "'defuser')";

        $result = $db->query($sql);
        
        if ($result)
        {
            return json_encode(["message" => "success"]);

        } else {

            return json_encode(["message" => $db->error]);
            $db->close();

        }

    }
}

$video = new Video;
