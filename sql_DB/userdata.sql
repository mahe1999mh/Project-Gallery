-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 06:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin1', 'password1'),
(2, 'admin2', 'password2'),
(3, 'admin3', 'password3');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_link` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `title`, `description`, `price`, `image_link`, `published`) VALUES
(2, 'Project 2', 'Description for Project 2', 75.50, 'https://www.springboard.com/blog/wp-content/uploads/2019/02/Untitled-design-3-scaled-scaled.jpg', 1),
(3, 'Project 3', 'Description for Project 3', 200.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(4, 'Project 4', 'Description for Project 4', 150.25, 'https://www.springboard.com/blog/wp-content/uploads/2019/02/Untitled-design-3-scaled-scaled.jpg', 1),
(5, 'Project Title 1', 'Project Description', 999.99, 'https://emerj.com/wp-content/uploads/2021/04/What-Makes-AI-Projects-Different-from-IT-Projects-950x540-1.jpg', 1),
(6, 'Project 2', 'Description for Project 2', 75.50, 'https://www.springboard.com/blog/wp-content/uploads/2019/02/Untitled-design-3-scaled-scaled.jpg', 1),
(7, 'IMS', 'Description for IMS Project ', 1000.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(8, 'i phone 15', 'jskjk', 500.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(9, 'i phone 15', 'jskjk', 500.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(10, 'ML project', 'ml project ', 2000.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(11, 'asd', 'asd', 324.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(12, 'AI project ', 'ai project', 1000.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(13, 'ML project', 'ai project', 100.00, 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/main.png', 1),
(14, 'ML project', 'ai project', 100000.00, '', 0),
(15, 'ML project', 'ai project', 10.00, '', 0),
(16, 'ML project', 'ai project', 101.00, '', 0),
(17, 'ML project', 'ai project', 101.00, '', 0),
(18, 'ML project', 'ai project', 101.00, '', 0),
(19, 'ML project', 'ai project', 101.00, '', 0),
(20, 'ML project', 'ai project', 101.00, '', 0),
(21, 'ML project', 'ai project', 101.00, '', 0),
(22, 'AI project ', 'asdas', 43435.00, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`, `name`, `email`, `phoneNumber`) VALUES
(1, 'password1', 'John Doe', 'john.doe@example.com', '123-456-7890'),
(2, 'password2', 'Jane Doe', 'jane.doe@example.com', '987-654-3210'),
(3, 'password3', 'Alice Smith', 'alice.smith@example.com', '555-111-2222'),
(4, 'password4', 'Bob Johnson', 'bob.johnson@example.com', '777-888-9999'),
(5, 'password30', 'Eva Wilson', 'eva.wilson@example.com', '333-444-5555'),
(6, 'password5', 'Charlie White', 'charlie.white@example.com', '210-987-6543'),
(7, 'password6', 'Emily Davis', 'emily.davis@example.com', '543-210-8765'),
(8, 'password7', 'Michael Miller', 'michael.miller@example.com', '876-543-2109'),
(9, 'password8', 'Olivia Wilson', 'olivia.wilson@example.com', '109-876-5432'),
(10, 'password9', 'Daniel Lee', 'daniel.lee@example.com', '432-109-8765'),
(11, 'password10', 'Sophia Brown', 'sophia.brown@example.com', '765-432-1098');

-- --------------------------------------------------------

--
-- Table structure for table `user_purchased_project`
--

CREATE TABLE `user_purchased_project` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `Project_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_purchased_project`
--

INSERT INTO `user_purchased_project` (`id`, `user_id`, `Project_id`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 2, 2),
(4, 4, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_purchased_project`
--
ALTER TABLE `user_purchased_project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_purchased_project`
--
ALTER TABLE `user_purchased_project`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
