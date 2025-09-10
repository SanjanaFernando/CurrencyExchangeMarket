import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { motion } from "framer-motion";

function Header() {
  const { user } = useUser();

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55], // Custom back ease
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      className="bg-white/20 backdrop-blur-md border border-white/20 p-2.5 px-4 fixed top-0 w-full z-50 flex justify-between items-center shadow-lg flex-wrap md:flex-nowrap"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.img
        src="logo.png"
        alt="Currency Exchange Market Logo"
        className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] mb-2 sm:mb-0"
        variants={logoVariants}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 },
        }}
      />
      <motion.h1
        className="text-lg md:text-[40px] leading-[50px] lg:text-[50px] font-mono font-extrabold text-blue-600 m-auto py-1 text-center"
        variants={titleVariants}
        whileHover={{
          scale: 1.05,
          color: "#3b82f6",
          transition: { duration: 0.3 },
        }}
      >
        Currency Exchange Market
      </motion.h1>
      <motion.nav
        className="flex gap-2 md:gap-4 lg:gap-4 flex-wrap justify-center md:justify-end m-auto"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
      >
        <motion.div variants={navLinkVariants}>
          <Link
            to="/home"
            className="text-white no-underline text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-yellow-400 focus:outline-dashed focus:outline-2 focus:outline-yellow-400 block text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.span>
          </Link>
        </motion.div>
        <motion.div variants={navLinkVariants}>
          <Link
            to="/exchange"
            className="text-white no-underline text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-yellow-400 focus:outline-dashed focus:outline-2 focus:outline-yellow-400 block text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Top Rates
            </motion.span>
          </Link>
        </motion.div>
        <motion.div variants={navLinkVariants}>
          <Link
            to="/transaction"
            className="text-white no-underline text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-yellow-400 focus:outline-dashed focus:outline-2 focus:outline-yellow-400 block text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Transaction Page
            </motion.span>
          </Link>
        </motion.div>
        <motion.div variants={navLinkVariants}>
          <Link
            to="/exchange-rates"
            className="text-white no-underline text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-yellow-400 focus:outline-dashed focus:outline-2 focus:outline-yellow-400 block text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Exchange Calculator
            </motion.span>
          </Link>
        </motion.div>
        <motion.div variants={navLinkVariants}>
          <Link
            to={`/userinfo/${user ? user.userId : ""}`}
            className="text-white no-underline text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-yellow-400 focus:outline-dashed focus:outline-2 focus:outline-yellow-400 block text-center"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              User Info
            </motion.span>
          </Link>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}

export default Header;
