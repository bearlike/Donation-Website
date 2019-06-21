<?php
include('session.php');
if(isset($_SESSION['login_id'])) {
  header("location: login.php");
}
echo '<div style="font-size:35px;">
<strong>Setting</strong>
<br>'
.$session_fullname
.'<br>
<a href="index.php">Profile</a>
<a href="logout.php">Logout</a>
</div>';
?>
