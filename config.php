<?php

$con = new mysqli('localhost', 'root', '', 'dubai');
if ($con->connect_errno) {
    echo $con->connect_error;
    die('Csatlokazás sikertelen!');
} else {
    // echo "Csatlakozás sikeres!";
}
?>
