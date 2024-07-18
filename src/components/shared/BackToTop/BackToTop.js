"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <motion.button
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          exit={{scale: 0.5}}
          onClick={scrollToTop}
          className="bg-primary text-white p-2 w-10 h-10 rounded-full shadow-lg hover:bg-[#28aba5] focus:outline-none"
        >
          <IoIosArrowUp className="text-2xl" />
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;
