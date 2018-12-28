<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'vendor/autoload.php';
require_once("../../src/backend/php/init.php");

use Aws\S3\S3Client;
use Aws\Exception\AwsException;
use Aws\S3\Exception\S3Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $file = $_FILES['file_name'];

    $file_name = $file['name'];
    $tmp_name = $file['tmp_name'];

    $extention = explode('.', $file_name);
    $extention = strtolower(end($extention));

    if ($extention != "mp4") {
        echo "Only files of type mp4 may be uploaded.";
        exit;
    }

    //temp details
    $key = md5(uniqid());
    $tmp_file_name = "{$key}.{$extention}";
    $tmp_file_path = "files/{$tmp_file_name}";

    move_uploaded_file($tmp_name, $tmp_file_path);


    //Create a S3Client
    $s3Client = new S3Client([
        'profile' => 'default',
        'region' => 'us-west-2',
        'version' => 'latest'
    ]);


    try {
        //Create a S3Client
        $s3Client = new S3Client([
            'profile' => 'default',
            'region' => 'us-west-2',
            'version' => '2006-03-01'
        ]);
        $result = $s3Client->putObject([
            'Bucket' => "s4c-videos",
            'Key' => "uploads/{$file_name}",
            'ACL' => "public-read",
            'Body' => fopen($tmp_file_path, "r"),
        ]);
    } catch (S3Exception $e) {
        echo $e->getMessage() . "\n";
    }

    //remove file
    unlink($tmp_file_path);

}

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>test</title>
    </head>
    <body>
        <form action="" method="post" enctype="multipart/form-data">
            <input type="file" name="file_name">
            <input type="submit" value="Upload">
        </form>
    </body>
</html>
