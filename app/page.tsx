"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { TypeAnimation } from "react-type-animation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();


const analyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        "https://nepali-sentiment-api-kpfz.onrender.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setResult(data);
        speakResult(data.sentiment);
      }
    } catch {
      alert("Backend not reachable yet.");
    }

    setLoading(false);
  };

  const speakResult = (sentiment: string) => {
    const msg = new SpeechSynthesisUtterance(
      `The detected sentiment is ${sentiment}`
    );
    speechSynthesis.speak(msg);
  };

  const getEmoji = () => {
    if (!result) return "🤖";
    if (result.sentiment === "Positive") return "😊";
    if (result.sentiment === "Negative") return "😡";
    return "😐";
  };

  const chartData = result
    ? {
        labels: ["Negative", "Neutral", "Positive"],
        datasets: [
          {
            label: "Confidence %",
            data: [
              result?.probabilities?.Negative * 100 || 0,
              result?.probabilities?.Neutral * 100 || 0,
              result?.probabilities?.Positive * 100 || 0,
            ],
            backgroundColor: [
              "#ef4444",
              "#eab308",
              "#22c55e",
            ],
          },
        ],
      }
    : null;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden transition-all duration-500">

      {/* Animated Glow Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-3xl animate-pulse" />

      {/* Particles */}
      <Particles
  id="tsparticles"
  className="absolute inset-0 -z-10"
  options={{
    fullScreen: false,
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 40,
      },
      size: {
        value: 2,
      },
      move: {
        enable: true,
        speed: 1,
      },
      links: {
        enable: true,
        color: "#a855f7",
        distance: 150,
      },
    },
  }}
/>
      <div className="p-10 max-w-4xl mx-auto">

        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-purple-600 hover:scale-110 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          🧠 Nepali Sentiment Intelligence
        </motion.h1>

        {/* Typing Animation */}
        <div className="text-center mb-8 text-purple-400">
          <TypeAnimation
            sequence={[
              "AI Powered Sentiment Analysis",
              2000,
              "Real-time Emotion Detection",
              2000,
              "Deep Learning Intelligence",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        {/* Input Card */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
          <textarea
            className="w-full p-4 rounded-xl bg-black/40 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={4}
            placeholder="Enter Nepali text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={analyze}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Analyze Sentiment 🚀
          </motion.button>
        </div>

        {/* Loading Shimmer */}
        {loading && (
          <div className="mt-6 h-2 bg-purple-500/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="h-full w-1/3 bg-gradient-to-r from-purple-400 to-pink-500"
            />
          </div>
        )}

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-6xl mb-4"
              >
                {getEmoji()}
              </motion.div>

              <h2 className="text-2xl font-bold">{result.sentiment}</h2>
              <p className="text-purple-300">
                {(result.confidence * 100).toFixed(2)}%
              </p>
            </div>

            {/* Animated Bars */}
            <div className="mt-6 space-y-4">
              {["Negative", "Neutral", "Positive"].map((label) => {
                const value =
                  result?.probabilities?.[label] * 100 || 0;

                return (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span>{label}</span>
                      <span>{value.toFixed(1)}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1 }}
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                );
              })}
            </div>

            {/* Chart */}
            {chartData && (
              <div className="mt-8">
                <Bar data={chartData} />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}