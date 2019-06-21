-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2019 at 09:34 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donation`
--

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

CREATE TABLE `children` (
  `cid` bigint(255) NOT NULL,
  `cname` varchar(255) NOT NULL,
  `sex` varchar(2) NOT NULL,
  `dob` date NOT NULL,
  `if_show_image` tinyint(1) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `one_liner` varchar(255) NOT NULL,
  `views` int(255) NOT NULL,
  `fund_target` int(255) NOT NULL,
  `fund_received` int(255) NOT NULL,
  `achi` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Used to store children details';

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`cid`, `cname`, `sex`, `dob`, `if_show_image`, `tags`, `description`, `city`, `state`, `one_liner`, `views`, `fund_target`, `fund_received`, `achi`) VALUES
(0, 'kris', 'fe', '0000-00-00', 0, 'hi', 'I\'m a smart boi. Text me on 8668088824', 'Chennai', 'Tamil Nadu', 'helo', 0, 12345, 0, 'singer'),
(1, 'Tony Stark', 'M', '2000-01-01', 1, 'Very Poor, Stark Industries', 'sample description', 'Gotha(m) City', 'Tamil Nadu', 'Romba pavam, plis donate some ', 34, 0, 0, 'sample achievements'),
(2, 'Kay Kay', 'M', '2000-01-01', 1, 'Kewl guy, Tony stark laam bacha, me acha', 'sample description', 'Atlantis City', 'Tamil Nadu', 'I\'m Aquaman, you\'re sura.', 75, 500000, 5, 'sample achievements'),
(3, 'Amy Santiago', 'F', '2000-01-01', 0, 'qt', 'sample description', 'Brooklyn', 'Tamil Nadu', 'she qt', 73, 5000, 1000, 'sample achievements');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`cid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
