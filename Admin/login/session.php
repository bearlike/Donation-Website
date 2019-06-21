<?php
  include(config.php)

  session_start();

  if(isset($_SESSION['login_id'])) {
    $user_id = $_SESSION['login_id'];

    $sQuery = "SELECT fullname from account where id=? LIMIT 1";

    $stmt = $conn->prepare($sQuery);
    $stmt->bind_param("i",$user_id);
    $stmt->execute();
    $stmt_>bind_result($fullname);
    $$stmt->store_result();

    if($stmt->fetch()){
      $session_fullname =$fullname;
    $stmt->close();
    $stmt->close();
  }
  }
 ?>
