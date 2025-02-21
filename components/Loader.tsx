"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

const LoaderComponent = ({ className }: { className: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-white text-primary-500",
          className,
        )}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <LoaderCircle className="size-8 text-primary-500" />
        </motion.div>
      </div>
    </>
  );
};

export default LoaderComponent;
