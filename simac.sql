-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 29, 2018 at 02:14 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simac`
--

-- --------------------------------------------------------

--
-- Table structure for table `masjid`
--

CREATE TABLE `masjid` (
  `id_masjid` varchar(15) NOT NULL,
  `nama_masjid` varchar(30) NOT NULL,
  `email` varchar(25) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(50) NOT NULL,
  `no_telpon` int(15) NOT NULL,
  `alamat` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `masjid`
--

INSERT INTO `masjid` (`id_masjid`, `nama_masjid`, `email`, `username`, `password`, `no_telpon`, `alamat`) VALUES
('004', 'miftahul falah', 'ibnuaziznu@gmail.com', 'ibnuaziz', 'akdhkakdlja', 97473895, ''),
('005', 'Salman', 'ibnuazizn@gmail.com', 'ibnuaziz', 'ibnuaziz', 2147483647, ''),
('1', 'ibnuaziz', 'ibnuaziznu@gmail.com', 'ibnuazizn', 'hhhhhh', 2147483647, ''),
('2', 'Ibnu Aziz Nu', 'ibnuazizn@gmail.com', 'ibnuazizn', 'ibnuaziz', 2147483647, ''),
('3', 'Ibnu Aziz Nu', 'ibnuazizn@gmail.com', 'ibnuazizn', 'ibnuaziz', 2147483647, ''),
('348', 'slfsjklfk', 'flj', 'lfjlkj', 'fjlskjflkfjs', 3094890, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `masjid`
--
ALTER TABLE `masjid`
  ADD PRIMARY KEY (`id_masjid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
