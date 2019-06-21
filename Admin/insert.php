<?php
/* Retrieving Variables from POST */
$cname = '"'.$_POST['name'].'"';
$dob = $_POST['dob'];
$sex = '"'.$_POST['sex'].'"';
$state = '"'.$_POST['state'].'"';
$city = '"'.$_POST['city'].'"';
$tags = '"'.$_POST['tags'].'"';
$one_liner = '"'.$_POST['one_liner'].'"';
$fund_target = '"'.$_POST['fund_target'].'"';
$achi = '"'.$_POST['achi'].'"';
$descri ='"'.$_POST['descri'].='"';

/* Check if no Variables are empty */
if(!empty($cname) || !empty($dob) || !empty($sex) || !empty($state) || !empty($city) || !empty($tags) || !empty($one_liner) || !empty($fund_target) || !empty($achi)|| !empty($descri))
{
  $host = "localhost";
  $dbusername = "root";
  $dbpassword= "";
  $dbname= "donation";

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('connect Error('. mysqli_connect_errno().')'.mysqli_connect_error());
    } else {
      /*$SELECT = "SELECT cname From children Where cname = ? Limit 10";
      $INSERT ="INSERT INTO children (cname,dob,sex,state,city,tags,one_liner,fund_target,achi,descri) values
      (?,?,?,?,?,?,?,?,?,?)";
      */
      $sql ="INSERT INTO children (cname,dob,sex,state,city,tags,one_liner,fund_target,achi,description) values (".
      $cname.",".$dob.",".$sex.",".$state.",".$city.",".$tags.",".$one_liner.",".$fund_target.",".$achi.",".$descri.");";

      /*
      echo $INSERT;
      $stmt = $conn->prepare($SELECT);
      $stmt->bind_param("s", $cname);
      $stmt->execute();
      $stmt->bind_result($cname);
      $stmt->store_result();
      $rnum = $stmt->num_rows;

      if($rnum==0) {
        $stmt->close();

        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("sisssssiss",$cname,$dob,$sex,$state,$city,$tags,$one_liner,$fund_target,$achi,$descri);
        $stmt->execute();
        echo "New record has been inserted successfully";
      }else {
        echo "username already taken";
      }
      $stmt->close();
      $conn->close();
      */
      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      }
      else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    }

} else {
    echo "All the fields are required";
    header('Location: '."https://google.com");
    die();
}
 ?>
