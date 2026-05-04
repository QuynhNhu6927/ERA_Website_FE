"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "@/lib/theme";

interface CompassLoadingAnimationProps {
  onComplete: () => void;
}

export function CompassLoadingAnimation({ onComplete }: CompassLoadingAnimationProps) {
  const [step, setStep] = useState(0);
  const [moveX, setMoveX] = useState(128);

  // Calculate move distance based on screen width
  useEffect(() => {
    const update = () => setMoveX(window.innerWidth >= 768 ? 192 : 128);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setStep(1), 1000));    // circles appear
    timers.push(setTimeout(() => setStep(2), 1700));    // cross appears
    timers.push(setTimeout(() => setStep(3), 2700));    // cross rotates more + fades out
    timers.push(setTimeout(() => setStep(4), 3200));    // circles move in (0.5s after cross gone)
    timers.push(setTimeout(() => setStep(5), 3800));    // merge + flash
    timers.push(setTimeout(() => setStep(6), 4600));    // scale up + image (0.8s after merge, flash lasts longer)
    timers.push(setTimeout(() => setStep(7), 4700));    // neon start
    timers.push(setTimeout(() => setStep(8), 7700));    // neon disappear after 1 full rotation (3s)
    timers.push(setTimeout(() => setStep(9), 9700));    // shrink (2s pause after neon gone)
    timers.push(setTimeout(() => onComplete(), 10500)); // done
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const circleSizeClass = "w-32 h-32 md:w-48 md:h-48";

  return (
    <div className="relative w-96 h-52 md:w-[36rem] md:h-52">
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
            className="text-5xl md:text-7xl font-light leading-none"
            style={{ color: colors.primary.DEFAULT }}
          >
            ×
          </span>
        </motion.div>
      )}

      {/* Circle 1 - Anywhere */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-5 md:p-8`}
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
            width={180}
            height={180}
            className="object-contain w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Circle 2 - Compass */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-5 md:p-8`}
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
            width={180}
            height={180}
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
            scale: { type: "spring", stiffness: 260, damping: 18 },
            opacity: { duration: 0.4 },
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
                  width: "160%",
                  height: "160%",
                  filter: "blur(32px)",
                }}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1.6, opacity: 0.95 }}
                exit={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* Neon glowing orbs behind circle */}
          {step >= 7 && step < 8 && (
            <>
              <motion.div
                className="absolute inset-[-8px] md:inset-[-12px] rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.95) 0%, rgba(30, 64, 175, 0.5) 40%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-[-8px] md:inset-[-12px] rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, ease: "linear" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(30, 64, 175, 0.95) 0%, rgba(30, 64, 175, 0.5) 40%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </motion.div>
            </>
          )}

          {/* White circle with logo */}
          <div className={`${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-5 md:p-8 relative`}>
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 6 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/about/about_compass_inter.png"
                alt="Compass International"
                width={220}
                height={220}
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
