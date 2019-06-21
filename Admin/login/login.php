<?php
  session_start();

  if(isset($_SESSION['login_id'])) {
    if(isset($_SESSION['pageStore'])) {
      $pageStore = $_SESSION['pageStore'];
      header("location: $pageStore");
    }
  }

  if(isset($_POST['signIn'])) {
    if(empty($_POST['email']) || empty($_POST['password'])) {
      echo "User n password should not be empty";
    } else {
      $email = $_POST['email'];
      $password = $_POST['password'];

      include('config.php');

      $sQuery = "SELECT id, password from account where email=? LIMIT 1";

      $stmt = $conn->prepare($sQuery);
      $stmt->bind_param("s",$email);
      $stmt->execute();
      $stmt->bind_result($id, $hash);
      $stmt->store_result();

      if($stmt->fetch()) {
        if(password_verify($password, $hash)) {
          $_SESSION['login_id'] = $id;

          if(isset($_SESSION['pageStore'])) {
            $pageStore =$_SESSION['pageStore'];
          }
          else {
            $pageStore = "index.php";
          }
          header("location: $pageStore");
          $stmt->close();
          $conn->close();
        }
        else {
          echo "Invalid Username or Password";
        }
      }
      else {
        echo "Invalid Username or Password";
      }
      $stmt->close();
      $conn->close();
    }
  }
 ?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Login </title>
  <link rel="stylesheet" type="text/css" href="rlform.css">
</head>

<body>
  <div class = "rlform">
    <div class="rlform rlform-wrapper">
      <div class="rlform-box">
        <div class="rlform-box-inner">
          <form method="POST">
            <p>sign In to Continue</p>

            <div class="rlform-group">
              <label></label>
              <input type="email" name="email" class="rlform-input" placeholder="Email" required>
            </div>

            <div class="rlform-group">
              <label></label>
              <input type ="password" name ="password" class="rlform-input" placeholder="Password" required>
            </div>

            <button type="submit" class="rlform-btn" name="signIn">Sign In</button>
            <div class = "text-foot">
              Don't have an account? <a href = "register.php">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
<html>
