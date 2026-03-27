"use client";

import { motion } from "framer-motion";

export default function Button({ label, onClick }: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="bg-gray-800 text-white p-4 rounded-xl text-xl shadow-md hover:bg-gray-700 transition"
      onClick={() => onClick(label)}
    >
      {label}
    </motion.button>
  );
}