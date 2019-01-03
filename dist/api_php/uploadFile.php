<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data");
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

putenv("HOME=/home/ubuntu");  //required by AWS SDK
require '../../../../vendor/autoload.php';
require_once("../../src/backend/php/init.php");

use Aws\S3\S3Client;
use Aws\CloudFront\CloudFrontClient;
use Aws\Exception\AwsException;
use Aws\S3\Exception\S3Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file_name'])) {

    $file = $_FILES['file_name'];

    $file_name = $file['name'];
    $tmp_name = $file['tmp_name'];

    $extention = explode('.', $file_name);
    $extention = strtolower(end($extention));

    if ($extention != "mp4" || $extention != "jpeg") {
        echo "Only files of type mp4 or jpeg may be uploaded.";
        exit;
    }

    //temp details
    $key = md5(uniqid());
    $tmp_file_name = "{$key}.{$extention}";
    $tmp_file_path = "/var/tmp/{$tmp_file_name}";

    move_uploaded_file($tmp_name, $tmp_file_path);

    //Create a S3Client
    // $s3Client = new S3Client([
    //     'profile' => 'default',
    //     'region' => 'us-west-2',
    //     'version' => 'latest'
    // ]);


    try {
        //Create a S3Client
        $s3Client = new S3Client([
            'profile' => 'default',
            'region' => 'us-west-2',
            'version' => '2006-03-01'
        ]);
        $result = $s3Client->putObject([
            'Bucket' => "s4c-videos",
            'Key' => "{$file_name}",
            'ACL' => "public-read",
            'Body' => fopen($tmp_file_path, "r"),
        ]);
    } catch (S3Exception $e) {
        echo $e->getMessage() . "\n";
    }

    //remove file
    unlink($tmp_file_path);

//*************************************************
//****** CloudFront ********
//
//

//Create a CloudFront Client
//snippet-start:[cloudfront.php.creates3distribution.main] 
    $cfClient = new Aws\CloudFront\CloudFrontClient([
        'profile' => 'default',
        'version' => '2018-06-18',
        'region' => 'us-west-2'
    ]);
    $originName = 's4c-videos';
    $s3BucketURL = 's4c-videos.s3.amazonaws.com';
    $callerReference = sha1(uniqid());
    $comment = 'A Show For a Change distribution channel';
    $cacheBehavior = [
        'AllowedMethods' => [
            'CachedMethods' => [
                'Items' => ['HEAD', 'GET'],
                'Quantity' => 2,
            ],
            'Items' => ['HEAD', 'GET'],
            'Quantity' => 2,
        ],
        'Compress' => false,
        'DefaultTTL' => 0,
        'FieldLevelEncryptionId' => '',
        'ForwardedValues' => [
            'Cookies' => [
                'Forward' => 'none',
            ],
            'Headers' => [
                'Quantity' => 0,
            ],
            'QueryString' => false,
            'QueryStringCacheKeys' => [
                'Quantity' => 0,
            ],
        ],
        'LambdaFunctionAssociations' => ['Quantity' => 0],
        'MaxTTL' => 0,
        'MinTTL' => 0,
        'SmoothStreaming' => false,
        'TargetOriginId' => $originName,
        'TrustedSigners' => [
            'Enabled' => false,
            'Quantity' => 0,
        ],
        'ViewerProtocolPolicy' => 'allow-all',
    ];
    $enabled = false;
    $origin = [
        'Items' => [
            [
                'DomainName' => $s3BucketURL,
                'Id' => $originName,
                'OriginPath' => '',
                'CustomHeaders' => ['Quantity' => 0],
                'S3OriginConfig' => ['OriginAccessIdentity' => ''],
            ],
        ],
        'Quantity' => 1,
    ];
    
    $distribution = [
        'CallerReference' => $callerReference,
        'Comment' => $comment,
        'DefaultCacheBehavior' => $cacheBehavior,
        'Enabled' => $enabled,
        'Origins' => $origin,
    ];
    try {
        $result = $cfClient->createDistribution([
            'DistributionConfig' => $distribution, //REQUIRED
        ]);
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        echo $e->getMessage();
        echo "\n";
    }


}

