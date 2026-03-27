"use client";

import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "⌫", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", 
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-[320px]">
      
      {/* Display */}
      <motion.div
        key={input}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black text-green-400 text-right text-3xl p-4 rounded-xl mb-4 min-h-[60px]"
      >
        {input || "0"}
      </motion.div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <Button key={i} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}