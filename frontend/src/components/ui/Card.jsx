import { motion } from "framer-motion";
import clsx from "clsx";

function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={clsx(
        "relative rounded-2xl p-8",
        "bg-slate-900/70 backdrop-blur-lg",
        "border border-slate-800",
        "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]",
        "transition-all duration-300 ease-out",
        "hover:border-indigo-500/40",
        "hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.25)]",
        className
      )}
    >
      {/* Subtle Top Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-60" />

      {children}
    </motion.div>
  );
}

export default Card;