<?php
// Vérification de l'authentification de l'utilisateur et initialisation de la session, par exemple:
session_start();
// Supposons que $username soit défini après le processus de connexion

// Redirection vers la page des utilisateurs si l'utilisateur est authentifié
if (isset($_SESSION['username'])) {
    header("Location: users.php");
    exit();
}

// Le code ci-dessous peut être placé après le processus d'authentification réussie
// Supposons que $username soit le nom d'utilisateur connecté récupéré après l'authentification

// Simulation de demandes avec un tableau d'
