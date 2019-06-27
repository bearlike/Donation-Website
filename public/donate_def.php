<!-- Pure PHP File-->
<?php
include 'init_con.php';
session_start();
// GET cidi<-id
$cidi   = $_GET["id"];
// Add +1 to the views
$sql    = "UPDATE children set views=views+1 WHERE cid=".$cidi.";";
$result = $conn -> query($sql);
// SELECT command
$sql    = "SELECT * FROM children WHERE cid=".$cidi.";";
$result = $conn -> query($sql);
$url    = null;
if ($row = $result -> fetch_assoc()) {
    /*   To determine whether to show profile image or not
     *   0 -> Not show image
     *   1 -> Show image
     */
    if ($row["if_show_image"] != 0)
      $url = "../uploads/".$row['cid'].".png";
    else
      $url = "../uploads/default/".ucfirst($row['sex']).".png";
    // Basic Details
    $name         = ucfirst($row['cname']);
    $sex          = ucfirst($row['sex']);
    $city         = ucfirst($row['city']);
    $state        = ucfirst($row['state']);
    $desc         = ucfirst($row['description']);
    $oneline      = ucfirst($row['one_liner']);
    $views        = $row['views'];
    $funds_target = $row['fund_target'];
    $funds_rec    = $row['fund_received'];
    // Tags Normalisation
    $tags         = $row['tags'];
    $tags         = str_replace(",,","",$tags);
    $tags         = str_replace(" , ","",$tags);
    $tags         = str_replace(", ",",",$tags);
    $tags         = str_replace(" ,",",",$tags);
    $tags         = str_replace(",",", ",$tags);
    $p            = (explode(", ",$tags));
}
// If cid not found (~404 Page)
else {
  header('Location: '."../common/404.html");
}
 ?>
