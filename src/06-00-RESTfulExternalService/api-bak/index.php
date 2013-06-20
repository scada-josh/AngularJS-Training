<?php
//header("Content-type:text/html; charset=UTF-8");
/**
 * Step 1: Require the Slim Framework
 **/
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

/**
 * Step 2: Instantiate a Slim application
 **/
$app = new \Slim\Slim();


/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */

// $app->get('/', function () {
//         echo "Hello initial";
// });

// $app->get('/hello/:name', function ($name) {
//         echo "Hello, $name";
// });

// $app->get('/wines', 'getWines');
 
// function getWines() {
//    echo "Hello world 555";
// }

$app->get('/wines', 'getWines');
$app->get('/wines/:id', 'getWine');
$app->get('/wines/search/:query', 'findByName');
$app->post('/wines', 'addWine');
// $app->put('/wines/:id', 'updateWine');
// $app->delete('/wines/:id',   'deleteWine');


// $app->get('/wines', 'getWines');
// $app->get('/wines/:id',  'getWine');
// $app->get('/wines/search/:query', 'findByName');
// $app->post('/wines', 'addWine');
// $app->put('/wines/:id', 'updateWine');
// $app->delete('/wines/:id',   'deleteWine');

$app->run();


function getWines() {
    $sql = "select * FROM member ORDER BY id";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"wine": ' . json_encode($wines) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

// function getWines() {
//     echo "getWines";
// }

function getWine($id) {
    $sql = "SELECT * FROM member WHERE id=:id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $wine = $stmt->fetchObject();
        $db = null;
        echo json_encode($wine);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

// function getWine($id) {
//     //echo "getWine".$id;
//     echo "getWine $id $id";
// }

function findByName($query) {
    $sql = "SELECT * FROM member WHERE member_email LIKE :query ORDER BY id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $query = "%".$query."%";
        $stmt->bindParam("query", $query);
        $stmt->execute();
        $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"members": ' . json_encode($wines) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


function addWine() {
    $request = Slim::getInstance()->request();
    $wine = json_decode($request->getBody());
    $sql = "INSERT INTO wine (name, grapes, country, region, year, description) VALUES (:name, :grapes, :country, :region, :year, :description)";
    // try {
    //     $db = getConnection();
    //     $stmt = $db->prepare($sql);
    //     $stmt->bindParam("name", $wine->name);
    //     $stmt->bindParam("grapes", $wine->grapes);
    //     $stmt->bindParam("country", $wine->country);
    //     $stmt->bindParam("region", $wine->region);
    //     $stmt->bindParam("year", $wine->year);
    //     $stmt->bindParam("description", $wine->description);
    //     $stmt->execute();
    //     $wine->id = $db->lastInsertId();
    //     $db = null;
    //     echo json_encode($wine);
    // } catch(PDOException $e) {
    //     echo '{"error":{"text":'. $e->getMessage() .'}}';
    // }
}

function getConnection() {
    $dbhost="127.0.0.1";
    $dbuser="root";
    $dbpass="";
    $dbname="code-aholic";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->query("SET NAMES 'utf8'");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

// function getWine($id) {
//     echo "getWines $id";
// }

 
// require 'Slim/Slim.php';
 
// $app = new Slim();
 
// $app->get('/wines', 'getWines');
// $app->get('/wines/:id',  'getWine');
// $app->get('/wines/search/:query', 'findByName');
// $app->post('/wines', 'addWine');
// $app->put('/wines/:id', 'updateWine');
// $app->delete('/wines/:id',   'deleteWine');
 
// $app->run();
 
// function getWines() {
//     $sql = "select * FROM wine ORDER BY name";
//     try {
//         $db = getConnection();
//         $stmt = $db->query($sql);
//         $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
//         $db = null;
//         echo '{"wine": ' . json_encode($wines) . '}';
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function getWine($id) {
//     $sql = "SELECT * FROM wine WHERE id=:id";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam("id", $id);
//         $stmt->execute();
//         $wine = $stmt->fetchObject();
//         $db = null;
//         echo json_encode($wine);
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function addWine() {
//     $request = Slim::getInstance()->request();
//     $wine = json_decode($request->getBody());
//     $sql = "INSERT INTO wine (name, grapes, country, region, year, description) VALUES (:name, :grapes, :country, :region, :year, :description)";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam("name", $wine->name);
//         $stmt->bindParam("grapes", $wine->grapes);
//         $stmt->bindParam("country", $wine->country);
//         $stmt->bindParam("region", $wine->region);
//         $stmt->bindParam("year", $wine->year);
//         $stmt->bindParam("description", $wine->description);
//         $stmt->execute();
//         $wine->id = $db->lastInsertId();
//         $db = null;
//         echo json_encode($wine);
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function updateWine($id) {
//     $request = Slim::getInstance()->request();
//     $body = $request->getBody();
//     $wine = json_decode($body);
//     $sql = "UPDATE wine SET name=:name, grapes=:grapes, country=:country, region=:region, year=:year, description=:description WHERE id=:id";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam("name", $wine->name);
//         $stmt->bindParam("grapes", $wine->grapes);
//         $stmt->bindParam("country", $wine->country);
//         $stmt->bindParam("region", $wine->region);
//         $stmt->bindParam("year", $wine->year);
//         $stmt->bindParam("description", $wine->description);
//         $stmt->bindParam("id", $id);
//         $stmt->execute();
//         $db = null;
//         echo json_encode($wine);
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function deleteWine($id) {
//     $sql = "DELETE FROM wine WHERE id=:id";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam("id", $id);
//         $stmt->execute();
//         $db = null;
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function findByName($query) {
//     $sql = "SELECT * FROM wine WHERE UPPER(name) LIKE :query ORDER BY name";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $query = "%".$query."%";
//         $stmt->bindParam("query", $query);
//         $stmt->execute();
//         $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
//         $db = null;
//         echo '{"wine": ' . json_encode($wines) . '}';
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }
// }
 
// function getConnection() {
//     $dbhost="127.0.0.1";
//     $dbuser="root";
//     $dbpass="";
//     $dbname="cellar";
//     $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
//     $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     return $dbh;
// }