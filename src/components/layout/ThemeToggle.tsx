"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-full border-border bg-muted flex items-center justify-center transition hover:border-(--ocean-500) hover:bg-(--ocean-500)/10"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={16} className="text-(--ocean-400)" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={16} className="text-(--ocean-700)" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}