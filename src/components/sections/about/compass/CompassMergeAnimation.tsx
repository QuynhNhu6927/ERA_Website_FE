"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "@/lib/theme";

interface CompassMergeAnimationProps {
  cycle: number;
}

export function CompassMergeAnimation({ cycle }: CompassMergeAnimationProps) {
  const [step, setStep] = useState(0);
  const [moveX, setMoveX] = useState(112);

  // Calculate move distance based on screen width
  useEffect(() => {
    const update = () => setMoveX(window.innerWidth >= 768 ? 152 : 112);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Animation sequence (restarts on cycle change)
  useEffect(() => {
    setStep(0);
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setStep(1), 300));     // circles appear
    timers.push(setTimeout(() => setStep(2), 1000));    // cross appears
    timers.push(setTimeout(() => setStep(3), 2000));    // cross rotates more + fades out
    timers.push(setTimeout(() => setStep(4), 2500));    // circles move in
    timers.push(setTimeout(() => setStep(5), 3100));    // merge + flash
    timers.push(setTimeout(() => setStep(6), 3900));    // scale up + image
    timers.push(setTimeout(() => setStep(7), 4000));    // neon start
    timers.push(setTimeout(() => setStep(8), 9000));    // neon disappear after 1 full rotation (5s)
    timers.push(setTimeout(() => setStep(9), 11000));   // shrink (2s pause after neon)
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const circleSizeClass = "w-24 h-24 md:w-36 md:h-36";

  return (
    <div className="relative w-80 h-44 md:w-[28rem] md:h-44">
      {/* Cross */}
      {step >= 2 && step < 4 && (
        <motion.div
          className="absolute left-1/2 top-1/2 z-20"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: step >= 3 ? 0 : 1,
            opacity: step >= 3 ? 0 : 1,
            rotate: step >= 3 ? 720 : 360,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <span
            className="text-4xl md:text-6xl font-light leading-none"
            style={{ color: colors.primary.DEFAULT }}
          >
            ×
          </span>
        </motion.div>
      )}

      {/* Circle 1 - Anywhere */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6`}
        style={{ left: 0 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: step >= 5 ? 0 : step >= 1 ? 1 : 0,
          opacity: step >= 5 ? 0 : step >= 1 ? 1 : 0,
          x: step >= 4 ? moveX : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 18 },
          x: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.4 },
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ opacity: step >= 4 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/about/about_anywhere_hero.png"
            alt="Anywhere"
            width={140}
            height={140}
            className="object-contain w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Circle 2 - Compass */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6`}
        style={{ right: 0 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: step >= 5 ? 0 : step >= 1 ? 1 : 0,
          opacity: step >= 5 ? 0 : step >= 1 ? 1 : 0,
          x: step >= 4 ? -moveX : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 18 },
          x: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.4 },
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ opacity: step >= 4 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/about/about_compass_hero.png"
            alt="Compass"
            width={140}
            height={140}
            className="object-contain w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Big merged circle with neon glow wrapper */}
      {step >= 5 && (
        <motion.div
          className="absolute left-1/2 top-1/2 z-30"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: step >= 9 ? 0 : step >= 6 ? 1.4 : 1,
            opacity: step >= 9 ? 0 : 1,
          }}
          transition={{
            scale: step >= 9
              ? { duration: 0.8, ease: "easeInOut" }
              : { type: "spring", stiffness: 260, damping: 18 },
            opacity: { duration: step >= 9 ? 0.6 : 0.4 },
          }}
        >
          {/* Flash effect on merge */}
          <AnimatePresence>
            {step >= 5 && step < 6 && (
              <motion.div
                className="absolute left-1/2 top-1/2 z-20 rounded-full bg-[#1E40AF]"
                style={{
                  x: "-50%",
                  y: "-50%",
                  width: "120%",
                  height: "120%",
                  filter: "blur(32px)",
                }}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.95 }}
                exit={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* Neon glowing orbs behind circle */}
          {step >= 7 && step < 8 && (
            <>
              {/* Orb 1 */}
              <motion.div
                className="absolute inset-[-2px] md:inset-[-4px] rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, ease: "linear" }}
              >
                <div
                  className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.95) 0%, rgba(30, 64, 175, 0.5) 40%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </motion.div>
              {/* Orb 2 */}
              <motion.div
                className="absolute inset-[-2px] md:inset-[-4px] rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, ease: "linear" }}
              >
                <div
                  className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.95) 0%, rgba(30, 64, 175, 0.5) 40%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </motion.div>
            </>
          )}

          {/* White circle with logo */}
          <div className={`${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6 relative`}>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 6 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/about/about_compass_inter.png"
                alt="Compass International"
                width={180}
                height={180}
                className="object-contain w-full h-full"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
