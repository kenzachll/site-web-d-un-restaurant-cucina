<?php
// Connexion à la base de données
$con = mysqli_connect("localhost", "root", "", "contact");
if (!$con) {
    die('Erreur de connexion : ' . mysqli_connect_error());
}

// Vérifie si le formulaire a été soumis
if (isset($_POST['book a table'])) {
    // Vérifie si toutes les variables POST nécessaires sont définies
    if (isset($_POST['day']) && isset($_POST['hour']) && isset($_POST['name']) && isset($_POST['number']) && isset($_POST['phone'])) {
        // Récupère les valeurs des variables POST
        $day = $_POST['day'];
        $hour = $_POST['hour'];
        $name = $_POST['name'];
        $number = $_POST['number'];
        $phone = $_POST['phone'];

        // Requête d'insertion SQL
        $query = "INSERT INTO client (day, hour, name, number, phone) VALUES ('$day', '$hour', '$name', '$number', '$phone')";
        $result = mysqli_query($con, $query);

        // Vérifie si l'insertion a réussi
        if ($result) {
            echo "Réservation enregistrée avec succès.";
        } else {
            echo "Erreur lors de l'enregistrement de la réservation : " . mysqli_error($con);
        }
    } else {
        echo "Veuillez remplir tous les champs.";
    }
}
?>
