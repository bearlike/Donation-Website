<!DOCTYPE html>
<html lang="en">
<?php
  if (empty($_GET)) {
    // no data passed by get
    header('Location: '."../lib/404/index.html");
  }
  else {
    include "donate_def.php";
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
    <link rel="stylesheet" href="../lib/bootstrap/3.3.7/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css">
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
                        <img src=<?php echo $url; ?> style="height: 450px;" alt="Bhumi - Child picture here">
                        <h5 style="padding-top: 30px;">"<?php echo $oneline; ?>"</h5><br>
                    </div>

                </div>
                <div class="col-lg-6 donate-details">

                    <div class="p-review">
                        <label>Name</label>
                        <h4 id="category"><?php echo $name; ?></h4>
                    </div>
                    <div class="p-review">
                        <label>Fund Raised</label>
                        <h4 id="fundRaised">Rs. <?php echo ($funds_rec); ?></h4>

                    </div>
                    <div class="p-review">
                        <label>Fund Target</label>
                        <h4 id="fundTarget">Rs. <?php echo $funds_target; ?></h4>
                    </div>
                    <div class="p-review">
                        <label>Views</label>
                        <h4 id="views"><?php echo $views; ?></h4>
                    </div>
                    <div class="p-review">
                        <label>Claps</label>
                        <h4 class="claps">69</h4><img src="../assets/img/donate/clap.png" onClick="incrementClap()" style="width:30px; height:30px; cursor: pointer;">
                    </div>

                    <a href="#" class="site-btn">Donate Now</a>
                    <div id="accordion" class="accordion-area">
                        <div class="panel">
                            <div class="panel-header" id="headingOne">
                                <button class="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
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
                    </script> All rights reserved | Visit Developer Page</p>

            </div>
        </div>
    </section>
    <!-- Footer section end -->


</body>

</html>
