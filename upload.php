<?php
    $file_name =  $_FILES['file']['name'];
    $tmp_name = $_FILES['file']['tmp_name'];
    move_uploaded_file($tmp_name, "upload-files/".$file_name);
?>