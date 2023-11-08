<?php
class ConnectorDrive implements Connector{

    private $auth;
    private $credentialsPath = '../auth-data/client_secret_435397659397-ruchckg1np6nhup16jqpok9q7t2jphbc.apps.googleusercontent.com.json';
    private $driveService;

    public function __construct() {
        $this->auth = new AuthenticatorDrive($this->credentialsPath);
        $this->authenticateIfAccessTokenExpires();
    }
    
    public function list(){
        $files = $this->driveService->files->listFiles();
        // foreach ($files as $file) {
        //     echo $file->getName() . "<br>";
        // }
        return $files;
    }

    public function add(){

    }

    public function remove(){

    }

    public function download(){
        
    }

    private function authenticateIfAccessTokenExpires(){
        if ($this->auth->isAccessTokenExpired()) {
            $authUrl = $this->auth->getAuthorizationUrl();
            echo '<a href="' . $authUrl . '">Autorizar la aplicación</a>';
        } else {
            $this->driveService = $this->auth->getDriveService();
        }
    }
}