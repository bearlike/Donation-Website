<!DOCTYPE html>
<html lang="en">
<?php
  if (empty($_GET)) {
    // no data passed by get
    header('Location: '."../common/404.html");
  }
  else {
    include "donate_def.php";
    if ($funds_rec==0) {
      $funds_rec=0;
      $funds_target=1;
    }
    $percent__ = (($funds_rec/$funds_target)*100);
  }
?>
<head>
    <title>Donate | Bhumi Donation Platform</title>
    <meta charset="UTF-8">
    <meta name="description" content=" Bhumi | Donation">
    <meta name="keywords" content="Bhumi, Donation, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Favicon -->
    <link href="../assets/img/logo.png" rel="shortcut icon" />
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css">
    <link rel="stylesheet" href="../lib/bootstrap/3.3.7/css/bootstrap.min.css" />
		<link rel="stylesheet" href="../lib/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="../assets/css/donate.css" />
    <link rel="stylesheet" href="../lib/pace/pace.css">
    <!-- Scripts -->
    <script type="text/javascript" src="../lib/pace/pace.min.js"></script>
</head>
<header id="luxbar" class="luxbar-fixed">
  <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox" />
  <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
    <ul class="luxbar-navigation">
      <li class="luxbar-header">
        <a href="#" class="luxbar-brand"><img src="../assets/img/logo.png" style="height: 40%; width: 40% " alt="Bhumi Logo"></a> <label class="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" for="luxbar-checkbox">
          <span></span>
        </label>
      </li>
      <li class="luxbar-item"><a href="../index.html">Home</a></li>
      <li class="luxbar-item"><a href="../public/about.html">About</a></li>
      <li class="luxbar-item"><a href="../public/search.php">Children Page</a></li>
      <li class="luxbar-item"><a href="../public/general-donation.html">General Donation</a></li>
    </ul>
  </div>
</header>
<body>
  <br><br><br><br> <!-- Too Lazy to CSS -->
    <!-- product section -->
    <section class="donate-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div>
                        <!-- <?php //echo "../uploads/".$url.".png"; ?>-->
                        <img src=<?php echo $url; ?> style="height: 28.125em;" alt="Bhumi - Child picture here">
                        <h5 style="padding-top: 1.875em;">"<?php echo $oneline; ?>"</h5><br>
                    </div>
                </div>
                <div class="col-lg-6 donate-details">
                    <!-- Name -->
                    <div class="p-review">
                        <label>Name</label>
                        <h3 id="category"><?php echo $name; ?></h4>
                    </div>
                    <!-- Progress Bar -->
                    <div class="progress" style="height: 0.188em;">
                      <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="<?php echo "width:".$percent__."%"; ?>" aria-valuenow="<?php echo "width:".$percent__."%"; ?>" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <!-- Fund Target --><!--
                    <div class="p-review">
                      <label>Fund Target</label>
                      <h4 id="fundTarget">Rs. <?php echo $funds_target; ?></h4>
                    </div>-->
                    <!-- Fund Raised -->
                    <div class="p-review">
                      <h3 id="fundRaised">Rs. <?php echo $funds_rec; ?></h4>
                      Raised of Rs. <?php echo $funds_target; ?> goal
                    </div>
                    <!-- Backers -->
                    <div class="p-review">
                        <h4 id="views">369</h4>
                        <label>Backers</label>
                    </div>
                    <!-- Views -->
                    <div class="p-review">
                        <h4 id="views"><?php echo $views; ?></h4>
                        <label>Views</label>
                    </div>
                    <!-- Likes -->
                    <div class="p-review">

                      <h4 class="claps">
                      <img src="../assets/img/donate/clap.png" onClick="incrementClap()" style="width:25px; height:25px; cursor: pointer;"> 69</h4><label>Likes</label>
                    </div>
                    <!-- Button -->
                    <a href="#" class="site-btn">Donate Now</a>
                    <!-- Description -->
                    <div id="accordion" class="accordion-area">
                        <div class="panel">
                            <div class="panel-header" id="headingOne">
                                <button class="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Information</button>
                            </div>
                            <div id="collapse1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="panel-body">
                                    <p id="description"><?php echo $desc; ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- product section end -->
    <!-- Footer section -->
    <section class="footer-section">
        <div class="social-links-warp">
            <div class="container">
                <div class="social-links" style="text-align:center;">
                    <a href="" class="instagram"><i class="fa fa-instagram"></i><span>instagram</span></a>
                    <a href="" class="facebook"><i class="fa fa-facebook"></i><span>facebook</span></a>
                    <a href="" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a>
                    <a href="" class="linkedin"><i class="fa fa-linkedin"></i><span>LinkedIn</span></a>
                </div>
                <br>
                <p class="text-white text-center mt-2">Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  All rights reserved | Visit Developer Page
                </p>
            </div>
        </div>
    </section>
    <!-- Footer section end -->


</body>

</html>
