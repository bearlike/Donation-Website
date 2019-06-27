<html>

<?php
  include 'init_con.php';
?>

<head>
    <title>Donate | Bhumi Donation Platform</title>
    <meta charset="UTF-8">
    <meta name="description" content=" Bhumi | Donation">
    <!-- Favicon -->
    <link href="../assets/img/logo.png" rel="shortcut icon" />
    <!-- Scripts -->
    <script type="text/javascript" src="../lib/pace/pace.min.js"></script>
    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap">
    <link rel="stylesheet" type="text/css" href="../assets/css/projects.css" />
    <link rel="stylesheet" type="text/css" href="../lib/bootstrap/test-bs.css" />
    <link rel="stylesheet" type="text/css" href="../lib/pace/pace.css">
    <link rel="stylesheet" type="text/css" href="../lib/w3/w3.css">
    <style>
        body {
        			font-family: 'Raleway', sans-serif;
        			font-family: 'Open Sans', sans-serif;
              color: #000;
        		}
    </style>
</head>

<?php include "../common/header.php"; ?>

<body>
  <!-- Lazy Padding -->
  <br><br><br>
  <!-- Search Container -->
  <form method="get" action="search.php" accept-charset="UTF-8">
    <input name="_token" type="hidden">
    <div id="main-search-fields">
      <p class="pull-left term">Search Term:</p>
      <input name="keyword" autocomplete="off" type="search">
      <div class="selects-container">
        <p>Gender:</p>
        <select name="sex">
          <option value="A">All</option>
          <option value="M">Male</option>
          <option value="F">Females</option>
          <option value="O">Others</option>
        </select>
      </div>
      <div class="selects-container">
        <p>State:</p>
        <select name="state">
          <option value="All">All</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Orissa">Orissa</option>
          <option value="Pondicherry">Pondicherry</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttaranchal">Uttaranchal</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        </select>
      </div>
      <div class="selects-container">
        <p>Age:</p>
        <select name="age">
          <option value="All">All</option>
          <option value="10">10-18 years</option>
          <option value="5">5-10 years</option>
          <option value="0">0-5 years</option>
        </select>
      </div>
      <div class="selects-container selects-container-last">
        <p>Order By:</p>
        <select name="order_by">
          <option value="alphabetical">Alphabetical</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
    <div id="main-search-btn">
      <input class="button-green-download2-big" type="submit" value="Search">
    </div>
  </form>
  <!-- Lazy Padding -->
  <br><br>
  <!-- Kids Container -->
  <div class="row">
    <?php
      include 'init_con.php';

      if (empty($_GET)) {
        // no data passed by get
        $sql = "SELECT * FROM children;";
      }
      else {
        // IF Only Keyword is given
          $keyword = $_GET["keyword"];
          // For Determining Sex criterias
          if ($_GET["sex"] == "A") {
            $sp1 = "";
          }
          elseif ($_GET["sex"] == "M") {
            $sp1 = " and sex = 'M'";
          }
          elseif ($_GET["sex"] == "F") {
            $sp1 = " and sex = 'F' ";
          }
          elseif ($_GET["sex"] == "O") {
            $sp1 = " and sex = 'O' ";
          }
          // For Determining state criterias
          if ($_GET["state"] == "All") {
            $sp2 = "";
          }
          else {
            $sp2 = " and state = '".$_GET["state"]."' ";
          }
          // For Determining age criterias
          if ($_GET["age"] == "All") {
            $sp3 = "";
          }
          elseif ($_GET["age"] == "0") {
            $sp3 = " and TIMESTAMPDIFF(YEAR, dob, CURDATE()) >= 0 and TIMESTAMPDIFF(YEAR, dob, CURDATE()) <5 ";
          }
          elseif ($_GET["age"] == "5") {
            $sp3 = " and TIMESTAMPDIFF(YEAR, dob, CURDATE()) >= 5 and TIMESTAMPDIFF(YEAR, dob, CURDATE()) <10 ";
          }
          elseif ($_GET["age"] == "10") {
            $sp3 = " and TIMESTAMPDIFF(YEAR, dob, CURDATE()) >= 10 and TIMESTAMPDIFF(YEAR, dob, CURDATE()) <28 ";
          }
          // For order_by criterias
          if ($_GET["order_by"] == "alphabetical") {
            $sp4 = " order by cname ";
          }
          elseif ($_GET["order_by"] == "oldest") {
            $sp4 = " order by cid ";
          }
          else {
            $sp4 = " order by cid desc ";
          }
          $temp = $sp1. $sp2. $sp3. $sp4;
          $sql = "SELECT cid, cname, if_show_image, sex, tags FROM children where cname like '%".$keyword."%'".$temp.";";
          //echo $sql;   //For Testing reasons
      }
      $result = $conn->query($sql);
      if (!empty($result)) {
        $id=0;
        while ($row = $result->fetch_assoc()) {
          $title = $row["cname"];

          if ($row['if_show_image'] != 0)
            $url = "../uploads/".$row['cid'].".png";

          else
            $url = "../uploads/default/".ucfirst($row['sex']).".png";

          echo "
                <div class='w3-btn w3-col m4 l3 '>
                  <div class='card w3-display-container'>
                    <a onclick='redir()'><img name='".$title."' class='projectImg rounded w3-hover-opacity' id='".$row['cid']."' src=".$url." alt='Unable to display' />
               ";

            echo "</div>
                  <br>";

          $maxLen = 25;
          $tags = $row['tags'];
          // Tags Normalisation
          $tags = $row['tags'];
          $tags = str_replace(",,","",$tags);
          $tags = str_replace(" , ","",$tags);
          $tags = str_replace(", ",",",$tags);
          $tags = str_replace(" ,",",",$tags);
          $tags = str_replace(",",", ",$tags);

          if(strlen($tags) > $maxLen)
          {
            $tags = substr($tags, 0, $maxLen);
            $tags = $tags."...";
          }

          echo "<center><b>".ucfirst($title)."<br>Tags:</b> ".$tags."</center></a></div>";
        }
      }
      else{
        echo "<h3>No Children to Display.</h3>";
      }
    ?>
    <script type='text/javascript'>
      function redir() {
        window.open('donate.php?id='+event.srcElement.id,'_self');
      }
    </script>
    <!-- Call footer.php for Footer Bar-->
    <!--Footer to be added-->
</body>

</html>
