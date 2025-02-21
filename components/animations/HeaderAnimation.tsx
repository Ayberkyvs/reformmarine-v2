"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const HeaderAnimation = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  const [height, setHeight] = useState(90);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(scrollY.get() > 50 ? 80 : 90);
    };

    const unsubscribe = scrollY.onChange(updateHeight);
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <motion.header
      className={cn("header", {
        "glass-effect shadow-sm": scrollY.get() > 50,
      })}
      animate={{ height }}
      initial={{ height: 90 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderAnimation;
