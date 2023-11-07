<?php
    interface Connector {
        public function list();
        public function add();
        public function remove();
        public function download();
    }