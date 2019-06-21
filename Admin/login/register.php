<?php
session_start();

if(isset($_SESSION['login_id'])) {
  if(isset($_SESSION['pageStore'])) {
    $pageStore= $_SESSION['pageStore'];
    header("location: $pageStore");

  }
}

if(isset($_POST['signUP'])) {
    if(empty($_POST['fullname']) || empty($_POST['email' ]) || empty($_POST['newPassword'])) {
      echo "Please fill up all the req field";
    }
    else {
      $fullname = $_POST['fullname'];
      $email = $_POST['email'];
      $password= $_POST['newPassword'];
      //$hash= password_hash($password, PASSWORD_DEFAULT);

      include('config.php');

      $sQuery = "SELECT id from account where email=? LIMIT 1";
      $iQuery = "INSERT Into account (fullname, email,password) values(?,?,?)";

      $stmt = $conn->prepare($sQuery);
      $stmt->bind_param("s",$email);
      $stmt ->execute();
      $stmt->bind_result($id);
      $stmt->store_result();
      $rnum = $stmt->num_rows;

      if($rnum ==0) {
        $stmt -> close();

        $stmt = $conn->prepare($iQuery);
        $stmt->bind_param("sss", $fullname,$email,$hash);
        if($stmt->execute()) {
          echo "Registered Successfully, Please login with your credentials";

        }
      }
      else {
        echo "Someone already has registered with this ($email) email address";

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
   <title>Register </title>
   <link rel="stylesheet" type="text/css" href="rlform.css">
 </head>

 <body>
   <div class="rlform">
     <div class="rlform rlform-wrapper">
       <div class="rlform-box">

         <div class="rlform-box-inner">
           <form method="POST">
             <p>Create your account here</p>

             <div class="rlform-group">
               <label></label>
               <input type="text" name="fullname" class="rlform-input" placeholder="Enter your Name" required>
             </div>

             <div class="rlform-group">
               <label></label>
               <input type="email" name="email" class="rlform-input" placeholder="Enter your Email Id" required>
             </div>

             <div class="rlform-group">
               <label></label>
               <input type="password" name="newPassword" id="newPass" class="rlform-input" placeholder="Enter your Password" required>
             </div>

             <div class="rlform-group">
               <label></label>
               <input type="password" name="confirmPasswordword" id="confirmPasswordword" class="rlform-input" placeholder="Confirm your Password" required>
             </div>

             <button class="rlform-btn" name="signUp">Sign Up </button>

             <div class="text-foot">
               Already have an account? <a href ="login.php">Login</a>
             </div>

           </form>
         </div>
       </div>
     </div>
   </div>

   <script type ="text/javascript">
   function validatePassword(){
     if(newPass.value!=confirmPasswordword.value) {
       confirmPasswordword.setCustomValidity('Password do not match.');

     }else {
       confirmPasswordword.setCustomValidity('');
     }
   }
   </script>
 </body>
 <html>
