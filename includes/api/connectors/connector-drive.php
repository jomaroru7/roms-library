<?php

class ConnectorDrive implements Connector{

    private $auth;
    private $driveService;

    public function __construct() {       
        $this->auth = new AuthenticatorDrive();
        $this->driveService = $this->auth->getDriveService();
    }
    
    public function list(){
        $files = $this->driveService->files->listFiles();
        return $files;
    }

    public function add(){

    }

    public function remove(){

    }

    public function download(){
        
    }
}