import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext"; // Import useUser hook
import Header from "./Header";
import { motion } from "framer-motion";

function Home() {
  const { user } = useUser(); // Get user from context

  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const aboutVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1.0,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="font-sans text-white m-0 p-0 text-center flex flex-col bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <Header />
      <motion.main
        className="pt-24 px-5 pb-5 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="mt-32 flex justify-around flex-wrap pt-10 lg:flex-row md:flex-row sm:flex-col"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
        >
          <motion.div
            className="bg-black/50 backdrop-blur-md border border-white/20 rounded-lg p-4 m-2 w-full sm:w-4/5 md:w-1/5 lg:w-1/5 h-auto flex flex-col"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <img
              src="feature1.jpg"
              alt="Feature 1"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mt-2 text-sky-400 sm:text-xl md:text-2xl">
                  Transaction
                </h3>
                <p className="text-xl text-gray-300 sm:text-lg md:text-xl mb-4">
                  Transfer your currencies safely
                </p>
              </div>
              <Link to="/transaction">
                <motion.button
                  className="px-4 py-2 mt-2 border-0 rounded cursor-pointer text-gray-200 transition-all duration-200 w-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #61dafb, #21a1f1, #1b87c9)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -2,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Transaction
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-black/50 backdrop-blur-md border border-white/20 rounded-lg p-4 m-2 w-full sm:w-4/5 md:w-1/5 lg:w-1/5 h-auto flex flex-col"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <img
              src="feature2.jpg"
              alt="Feature 2"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mt-2 text-sky-400 sm:text-xl md:text-2xl">
                  Top Currencies
                </h3>
                <p className="text-xl text-gray-300 sm:text-lg md:text-xl mb-4">
                  Check out what are the strong currencies
                </p>
              </div>
              <Link to="/exchange">
                <motion.button
                  className="px-4 py-2 mt-2 border-0 rounded cursor-pointer text-gray-200 transition-all duration-200 w-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #61dafb, #21a1f1, #1b87c9)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -2,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Exchange Rates
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-black/50 backdrop-blur-md border border-white/20 rounded-lg p-4 m-2 w-full sm:w-4/5 md:w-1/5 lg:w-1/5 h-auto flex flex-col"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <img
              src="feature3.jpg"
              alt="Feature 3"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mt-2 text-sky-400 sm:text-xl md:text-2xl">
                  Currency Calculator
                </h3>
                <p className="text-xl text-gray-300 sm:text-lg md:text-xl mb-4">
                  Compare the Currency Pairs
                </p>
              </div>
              <Link to="/exchange-rates">
                <motion.button
                  className="px-4 py-2 mt-2 border-0 rounded cursor-pointer text-gray-200 transition-all duration-200 w-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #61dafb, #21a1f1, #1b87c9)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -2,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Use Calculator
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-black/50 backdrop-blur-md border border-white/20 rounded-lg p-4 m-2 w-full sm:w-4/5 md:w-1/5 lg:w-1/5 h-auto flex flex-col"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              y: -10,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <img
              src="feature5.webp"
              alt="Feature 4"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl mt-2 text-sky-400 sm:text-xl md:text-2xl">
                  User Info
                </h3>
                <p className="text-xl text-gray-300 sm:text-lg md:text-xl mb-4">
                  View your user information
                </p>
              </div>
              <Link to={`/userinfo/${user ? user.userId : ""}`}>
                <motion.button
                  className="px-4 py-2 mt-2 border-0 rounded cursor-pointer text-gray-200 transition-all duration-200 w-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #61dafb, #21a1f1, #1b87c9)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -2,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to User Info
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* New About Us section */}
      <motion.section
        className="pt-12 px-5 pb-5 w-full h-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-center mt-12 mb-24 mx-2"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
      >
        <h2 className="text-4xl text-blue-400 sm:text-3xl">About Us</h2>
        <p className="text-xl text-gray-300 sm:text-lg">
          We are a leading platform for currency exchange and financial
          transactions, providing secure and reliable services to our users
          worldwide. Our mission is to simplify currency exchange and empower
          users with real-time data.
        </p>
        <p className="text-xl text-gray-300 sm:text-lg">
          Founded in 2024, Currency Exchange Market has become a trusted name in
          the fintech industry, offering top-tier services for individual users
          and businesses alike.
        </p>
      </motion.section>

      <footer
        className="fixed bottom-0 w-full py-2 text-white backdrop-blur-md border-t border-white/20"
        style={{
          background: "rgba(0, 0, 42, 0.5)",
          boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p>&copy; 2024 Currency Exchange Market. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
