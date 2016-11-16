<?php

if (isset($_GET['all']) && $_GET['all'] == 'true') {
    
     $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'world';
    
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    $stmt = $conn->query("SELECT * FROM countries");
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo '<ul>';
    foreach ($results as $row) {
      echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}
else if(!empty($_GET['country'])){
   
    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'world';
    
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%" . $_GET['country'] ."%'");
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo '<ul>';
    foreach ($results as $row) {
      echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}
else
    {
    echo "Please enter a country's name or check the 'View all countries' checkbox" ;
}