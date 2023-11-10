<?php

class ConnectorDrive implements Connector{

    private $auth;
    private $credentialsPath;
    private $driveService;

    public function __construct() {
        $this->credentialsPath = plugin_dir_path( dirname( __FILE__ ) ) .'auth-data/authLocal.json';
        $this->auth = new AuthenticatorDrive($this->credentialsPath);
        $this->authenticateIfAccessTokenExpires();
    }
    
    public function list(){
        $this->authenticateIfAccessTokenExpires();
        $files = $this->driveService->files->listFiles();
        foreach ($files as $file) {
            echo $file->getName() . "<br>";
        }
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
        } 
        $this->driveService = $this->auth->getDriveService();
    }
}