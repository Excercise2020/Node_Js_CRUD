-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2020 at 10:08 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `Emp_id` int(11) NOT NULL,
  `Emp_Name` varchar(50) NOT NULL,
  `Emp_code` varchar(30) NOT NULL,
  `Salary` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`Emp_id`, `Emp_Name`, `Emp_code`, `Salary`) VALUES
(1, 'Sakdinan', '001', 1500000),
(2, 'Nunkiller', '002', 123345),
(6, 'Nami', '004', 23000),
(7, 'Namioino', '003', 23000),
(8, 'Namioitttt', '005', 23000);

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `des_id` int(11) NOT NULL,
  `Emp_code` varchar(50) NOT NULL,
  `name_pro` text NOT NULL,
  `price` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`des_id`, `Emp_code`, `name_pro`, `price`, `date`) VALUES
(1, '001', 'paper', '120', '0000-00-00'),
(2, '002', 'paper', '120', '2020-09-26'),
(3, '003', 'pen', '50', '2020-09-26'),
(4, '004', 'pen', '50', '2020-09-26'),
(5, '004', 'paper', '250', '2020-09-26'),
(6, '005', 'paper', '250', '2020-09-26'),
(7, '005', 'pen', '50', '2020-09-26'),
(8, '005', 'rubber', '50', '2020-09-26'),
(9, '001', 'rubber', '50', '2020-09-26'),
(10, '002', 'rubber', '50', '2020-09-26'),
(11, '005', 'rubber', '250', '2020-09-27'),
(12, '005', 'pen', '20', '2020-09-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Emp_id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`des_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `Emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `description`
--
ALTER TABLE `description`
  MODIFY `des_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
