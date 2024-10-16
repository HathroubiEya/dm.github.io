<?php


$mat=$_POST['mat'];
$np=$_POST['np'];
$Tel=$_POST['tel'];
$Ligne=$_POST['ligne'];
$Chef=$_POST['chef'];
$date=$_POST['date'];
$nbjours=$_POST['nbjours'];
$type=$_POST['type'];
$username=$_POST['username'];
// Supposons que $demandes soit un tableau d'objets représentant les demandes
// et que $utilisateur_connecte contienne le nom d'utilisateur de l'utilisateur connecté.

foreach ($login  as  $index2  ) {
    // Comparaison entre le chef de la demande et l'utilisateur connecté
    if ($Chef == $username) {
        // Affichage de la demande uniquement si le chef correspond à l'utilisateur connecté
        echo "matricule : " . $mat . "<br>";
        echo "nom et prénom : " . $np . "<br>";
        echo "Tel : " . $Tel . "<br>";
        echo "ligne : " . $Ligne . "<br>";
        echo "Chef : " . $Chef . "<br>";
        echo "date : " . $date . "<br>";
        echo "nbjours : " . $nbjours . "<br>";
        echo "type : " . $type . "<br>";
        
        echo "<hr>"; // Séparateur entre les demandes
    }
}
?>
