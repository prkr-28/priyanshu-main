"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Coffee, Sparkles, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { type Section } from "@/lib/types";
import { type Dispatch, type SetStateAction } from "react";
import { TypeAnimation } from "react-type-animation";

interface IntroProps {
  setActiveSection: Dispatch<SetStateAction<Section>>;
  theme?: "retro" | "sunset";
}

export default function IntroSection({
  setActiveSection,
  theme = "sunset",
}: IntroProps) {
  // GitHub Snake SVG URL
  const githubSnakeUrl =
    "https://raw.githubusercontent.com/prkr-28/prkr-28/output/snake.svg";

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            {/* Name and Title */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                {theme === "retro" ? (
                  <div className="text-green-400">
                    <TypeAnimation
                      sequence={["Hey!", 1000, "Hey! I'm Priyanshu Kumar"]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                    />
                  </div>
                ) : (
                  <TypeAnimation
                    sequence={["Hey! I'm Priyanshu Kumar"]}
                    wrapper="span"
                    speed={1}
                    repeat={0}
                    className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent pb-3"
                  />
                )}
              </motion.h1>

              {/*Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`inline-flex items-center px-3 py-1.5 rounded-full ${
                  theme === "retro"
                    ? "bg-green-400/10 border border-green-400/20"
                    : "bg-orange-400/10 border border-orange-400/20"
                }`}
              >
                <Code
                  className={`w-4 h-4 mr-2 ${
                    theme === "retro" ? "text-green-400" : "text-orange-400"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    theme === "retro" ? "text-green-400" : "text-orange-400"
                  }`}
                >
                  AI & Web Developer
                </span>
              </motion.div>
            </div>

            {/* Description Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-3"
            >
              <div
                className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                  theme === "retro"
                    ? "bg-green-400/5 border border-green-400/10"
                    : "bg-gradient-to-r from-orange-400/5 to-pink-500/5 border border-orange-400/10"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    theme === "retro" ? "bg-green-400/10" : "bg-orange-400/10"
                  }`}
                >
                  <Sparkles
                    className={`w-4 h-4 ${
                      theme === "retro" ? "text-green-400" : "text-orange-400"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "retro" ? "text-green-100" : "text-orange-100"
                  }`}
                >
                  Learning microservices while exploring backend services.
                </p>
              </div>

              <div
                className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                  theme === "retro"
                    ? "bg-green-400/5 border border-green-400/10"
                    : "bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/10"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    theme === "retro" ? "bg-green-400/10" : "bg-pink-500/10"
                  }`}
                >
                  <Code
                    className={`w-4 h-4 ${
                      theme === "retro" ? "text-green-400" : "text-pink-500"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "retro" ? "text-green-100" : "text-pink-100"
                  }`}
                >
                  Active in open source, mentoring, and sharing learnings
                  through concise technical content.
                </p>
              </div>

              <div
                className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                  theme === "retro"
                    ? "bg-green-400/5 border border-green-400/10"
                    : "bg-gradient-to-r from-purple-500/5 to-orange-400/5 border border-purple-500/10"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    theme === "retro" ? "bg-green-400/10" : "bg-purple-500/10"
                  }`}
                >
                  <Coffee
                    className={`w-4 h-4 ${
                      theme === "retro" ? "text-green-400" : "text-purple-500"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "retro" ? "text-green-100" : "text-purple-100"
                  }`}
                >
                  Open to collaborate on React/Next.js builds or
                  beginner-friendly backend + AI projects.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <Link
                href="https://x.com"
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-orange-400/10 to-pink-500/10 hover:from-orange-400/20 hover:to-pink-500/20 border border-orange-400/20 hover:border-orange-400/40 text-orange-400 shadow-lg shadow-orange-400/10 hover:shadow-orange-400/20"
                }`}
              >
                <FaXTwitter size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/prkr28/"
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 text-pink-500 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
                }`}
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                href="https://github.com/prkr-28"
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-purple-500/10 to-orange-400/10 hover:from-purple-500/20 hover:to-orange-400/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                }`}
              >
                <FaGithub size={16} />
              </Link>
            </motion.div>

            {/* Mobile Hire Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="block lg:hidden flex justify-center"
            >
              <Button
                className={`w-full max-w-[200px] py-2 rounded-full transition-all duration-500 group relative overflow-hidden ${
                  theme === "retro"
                    ? "bg-transparent text-green-400 border-2 border-green-400 hover:text-black font-mono text-sm"
                    : "bg-transparent text-orange-400 border-2 border-orange-400 hover:text-white font-sans"
                }`}
                onClick={() => setActiveSection("contact")}
              >
                <span
                  className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                    theme === "retro"
                      ? "bg-gradient-to-r from-green-400 via-green-500 to-green-400"
                      : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
                  }`}
                />
                <span className="relative flex items-center justify-center">
                  <Briefcase className="mr-2 h-3 w-3" />
                  Hire Me
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image and Desktop Hire Me Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden lg:flex flex-col items-center gap-4"
          >
            <div
              className={`w-[240px] h-[240px] rounded-3xl overflow-hidden ${
                theme === "retro"
                  ? "border-4 border-green-400 shadow-lg shadow-green-400/20"
                  : "border-2 border-orange-400"
              }`}
            >
              <Image
                src="/profile.jpeg"
                alt="Priyanshu Kumar"
                width={240}
                height={240}
                className="object-cover"
                priority
              />
            </div>

            {/* Desktop Hire Me Button */}
            <Button
              className={`w-full max-w-[200px] py-2 rounded-full transition-all duration-500 group relative overflow-hidden ${
                theme === "retro"
                  ? "bg-transparent text-green-400 border-2 border-green-400 hover:text-black font-mono text-sm"
                  : "bg-transparent text-orange-400 border-2 border-orange-400 hover:text-white font-sans"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <span
                className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  theme === "retro"
                    ? "bg-gradient-to-r from-green-400 via-green-500 to-green-400"
                    : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
                }`}
              />
              <span className="relative flex items-center justify-center">
                <Briefcase className="mr-2 h-3 w-3" />
                Hire Me
              </span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 🧑‍💻 About Me Section */}
      <section className="w-full border-t border-white/10 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                <span className="block text-2xl sm:text-3xl text-gray-300 mb-1">
                  Hi, I'm
                </span>
                <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  PRIYANSHU KUMAR
                </span>
                <span className="text-green-400">.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-md">
                Full-stack developer who enjoys turning ideas into fast,
                reliable and user-friendly web experiences.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                I focus on building end-to-end products with clean UI, solid
                backend architecture, and smooth developer experience. I love
                exploring modern web technologies, experimenting with
                microservices, and learning how to make systems more resilient
                and scalable.
              </p>
              <p>
                Recently, I've been sharpening my problem-solving skills through
                platforms like LeetCode and working on projects that combine AI,
                DevOps practices, and modern frontend frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ GitHub Activity Section */}
      <section className="w-full mt-10 border-t border-white/10 pt-20">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          GitHub Activity
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-6">
            <img
              src={githubSnakeUrl}
              alt="GitHub Snake Animation"
              className="w-full rounded-lg shadow-lg border border-orange-400/20"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.getElementById("fallback-message");
                if (fallback) fallback.style.display = "block";
              }}
            />
            <div
              className="text-center text-gray-400 mt-4 hidden"
              id="fallback-message"
            >
              <p>GitHub Snake Animation Loading...</p>
              <p className="text-sm mt-2">
                Setting up GitHub snake animation...
              </p>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Snake eating my GitHub commits 🐍
            </p>
          </div>
        </div>
      </section>

      {/* 🧩 LeetCode Progress Section */}
      <section className="w-full mt-16 mb-12 border-t border-white/10 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          LeetCode Streak
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-6 rounded-2xl border border-orange-400/20 bg-black/30 backdrop-blur">
            <img
              src="https://leetcard.jacoblin.cool/prkr28?theme=dark&border=0&font=B612&ext=contest&ext=heatmap"
              alt="LeetCode contribution heatmap for user prkr28"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
