<?php
use Google\Service\Drive;
class AuthenticatorDrive {
    private $client;

    public function __construct($credentialsPath) {
        $this->client = new Google_Client();
        $this->client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . '/oauth2callback.php');
        $this->client->setAuthConfig($credentialsPath);
        $this->client->setAccessType('offline');
    }

    public function getClient() {
        return $this->client;
    }

    public function getDriveService() {
        return new Drive($this->client);
    }

    public function isAccessTokenExpired() {
        return $this->client->isAccessTokenExpired();
    }

    public function getAuthorizationUrl() {
        return $this->client->createAuthUrl();
    }

    public function fetchAccessTokenWithCode($code) {
        return $this->client->fetchAccessTokenWithAuthCode($code);
    }
}