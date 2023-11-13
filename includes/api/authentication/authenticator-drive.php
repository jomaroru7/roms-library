<?php
use Google\Service\Drive;
putenv('GOOGLE_APPLICATION_CREDENTIALS='.plugin_dir_path( dirname( __FILE__ ) ) .'auth-data/auth.json');
class AuthenticatorDrive {
    private $client;
    public function __construct() {
        $this->client = new Google_Client();
 
        try {
            $this->client->useApplicationDefaultCredentials();
            $this->client->addScope(Google\Service\Drive::DRIVE);
        } catch (Exception $e) {
            echo 'Excepción capturada: ', $e->getMessage(), "\n";
        }
        
    }

    public function getClient() {
        return $this->client;
    }

    public function getDriveService() {
        return new Drive($this->client);
    }
}