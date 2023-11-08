<?php

$roms=new RomsApi();

 $roms->list();
 foreach ( $roms->list() as $key => $value) {
    echo "<h1>{$value}</h1>";
 }