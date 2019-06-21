<?php
/* Retrieving Variables from POST */
if (empty($_POST)) {
  // no data passed by get
  header('Location: '."../common/404.html");
}
else {
  $cname = '"'.ucfirst($_POST['name']).'"';
  $dob = '"'.$_POST['dob'].'"';
  $sex = '"'.ucfirst($_POST['sex']).'"';
  $state = '"'.ucfirst($_POST['state']).'"';
  $city = '"'.ucfirst($_POST['city']).'"';
  $tags = '"'.$_POST['tags'].'"';
  $one_liner = '"'.ucfirst($_POST['one_liner']).'"';
  $fund_target = '"'.$_POST['fund_target'].'"';
  $achi = '"'.ucfirst($_POST['achi']).'"';
  $descri ='"'.ucfirst($_POST['descri']).'"';

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
    }
    else {
      $sql    = "SELECT max(cid) as c_count FROM children";
      $result = $conn -> query($sql);

      if ($row = $result -> fetch_assoc()) {
        $cid = $row['c_count'] + 1;
        $sql ="INSERT INTO children (cid, cname,dob,sex,state,city,tags,one_liner,fund_target,achi,description) values (".$cid.",".$cname.",".$dob.",".$sex.",".$state.",".$city.",".$tags.",".$one_liner.",".$fund_target.",".$achi.",".$descri.");";

        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        }
        else {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }
      }

    }
  }
  else {
    echo "All the fields are required";
    header('Location: '."../common/404.html");
    die();
  }
}
?>
