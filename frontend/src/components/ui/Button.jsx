import { motion } from "framer-motion";
import clsx from "clsx";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className,
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.8)]",
    outline:
      "border border-slate-700 text-slate-300 hover:border-indigo-400 hover:text-white bg-slate-900/60 backdrop-blur",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

export default Button;