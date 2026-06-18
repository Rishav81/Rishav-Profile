import React from "react";
import { motion } from "framer-motion";
const Scroll = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Section
      </motion.div>
    </div>
  );
};

export default Scroll;
