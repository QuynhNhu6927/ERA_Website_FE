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
  const [moveX, setMoveX] = useState(136);

  useEffect(() => {
    const update = () => setMoveX(window.innerWidth >= 768 ? 200 : 136);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setStep(0);
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStep(1), 300));     
    timers.push(setTimeout(() => setStep(2), 1000));    
    timers.push(setTimeout(() => setStep(3), 2000));    
    timers.push(setTimeout(() => setStep(4), 2500));    // bắt đầu move (gần chạm)
    
    // 👉 đẩy flash sớm hơn một chút để cảm giác "chạm"
    timers.push(setTimeout(() => setStep(5), 2750));    // flash start (chạm)
    
    // 👉 giữ flash đủ lâu cho merge hoàn tất
    timers.push(setTimeout(() => setStep(6), 3250));    // flash end + delay 0.5s
    
    timers.push(setTimeout(() => setStep(7), 4000));    
    timers.push(setTimeout(() => setStep(8), 4100));    
    timers.push(setTimeout(() => setStep(9), 9100));    
    timers.push(setTimeout(() => setStep(10), 11100));  

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const circleSizeClass = "w-28 h-28 md:w-44 md:h-44";
  const bigCircleScale = step >= 6 ? 1.4 : 1;

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

      {/* Circle 1 */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6`}
        style={{ left: 0 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: step >= 10 ? 0 : step >= 1 ? 1 : 0,
          opacity: step >= 10 ? 0 : step >= 1 ? 1 : 0,
          x: step >= 4 ? moveX : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 18 },
          x: { duration: 0.4, ease: "easeInOut" },
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

      {/* Circle 2 */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6`}
        style={{ right: 0 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: step >= 10 ? 0 : step >= 1 ? 1 : 0,
          opacity: step >= 10 ? 0 : step >= 1 ? 1 : 0,
          x: step >= 4 ? -moveX : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 18 },
          x: { duration: 0.4, ease: "easeInOut" },
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

      {/* Merged */}
      {step >= 5 && (
        <motion.div
          className="absolute left-1/2 top-1/2 z-30"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: step >= 10 ? 0 : bigCircleScale,
            opacity: step >= 10 ? 0 : 1,
          }}
          transition={{
            scale: { type: "spring", stiffness: 260, damping: 18 },
            opacity: { duration: 0.4 },
          }}
        >
          {/* Flash */}
          <AnimatePresence>
            {step >= 5 && step < 6 && (
              <motion.div
                className="absolute left-1/2 top-1/2 z-0 rounded-full bg-[#1E40AF] pointer-events-none"
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
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>

          {/* Neon giữ nguyên */}
          {step >= 8 && step < 9 && (
            <>
              <motion.div className="absolute inset-[-2px] md:inset-[-4px] rounded-full pointer-events-none"
                animate={{ rotate: 360 }} transition={{ duration: 5, ease: "linear" }}>
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(30,64,175,0.95) 0%, rgba(30,64,175,0.5) 40%, transparent 70%)", filter: "blur(16px)" }} />
              </motion.div>
              <motion.div className="absolute inset-[-2px] md:inset-[-4px] rounded-full pointer-events-none"
                animate={{ rotate: -360 }} transition={{ duration: 5, ease: "linear" }}>
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(30,64,175,0.95) 0%, rgba(30,64,175,0.5) 40%, transparent 70%)", filter: "blur(16px)" }} />
              </motion.div>
            </>
          )}

          {/* Logo xuất hiện cùng lúc scale */}
          <div className={`${circleSizeClass} rounded-full bg-white shadow-2xl flex items-center justify-center p-4 md:p-6 relative z-10`}>
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