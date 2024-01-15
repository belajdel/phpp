<?php
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}

$dbname = "testdrive";

$n = $_POST["nom"];
$np = $_POST["npermis"];
$p = $_POST["prenom"];
$g = $_POST["genre"];
$v = $_POST["ville"];

if (!mysql_select_db($dbname, $link)) {
    die('Could not select database: ' . mysql_error());
}

$query = "SELECT * FROM testeur WHERE numPermis = '$np'";
$res = mysql_query($query, $link);
if (!$res) {
    die('Query failed: ' . mysql_error());
}

$num_rows = mysql_num_rows($res);
if ($num_rows > 0) {
    echo "<h1>Permis existe déjà</h1>";
} else {
    $req="insert into testeur values('$np','$n','$p','$g','$v') ";  
    $rep=mysql_query($req)or die (mysql_error());
    if(mysql_affected_rows()!=-1) echo"enregistrment fait avec success";
  }


mysql_close($link);
?>