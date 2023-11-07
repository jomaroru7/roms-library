<?php
    class RomsApi
    {
        private Connector $connector;
        public function __construct() {
            $this->connector = new ConnectorDrive();
        }

        public function list(){
            $list = $this->connector->list();
            // Add stuff
            return $list;
        }   

        public function add(){
            $rom = $this->connector->add();
            // Check errors
            return $rom;
        }

        public function remove(){
            $rom = $this->connector->remove();
            // Check errors
            return $rom;
        }

        public function download(){
            $rom = $this->connector->download();
            // Check if file exists
            return $rom;
        }
    }
    