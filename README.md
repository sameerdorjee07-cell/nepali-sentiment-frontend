🧠 Nepali Sentiment Intelligence

AI-powered Nepali Sentiment Analysis Web Application built using XLM-RoBERTa, Next.js, and deployed with HuggingFace Spaces + Vercel.

🚀 Live Demo: https://nepali-sentiment-frontend.vercel.app/

📌 Project Overview

Nepali Sentiment Intelligence is a deep learning-based web application that analyzes Nepali text and classifies it into:

✅ Positive

❌ Negative

😐 Neutral

The system uses a fine-tuned XLM-RoBERTa transformer model for accurate multilingual sentiment detection.

The frontend is built with Next.js 16 (App Router) and supports:

🌙 Dark / Light mode

📊 Confidence visualization (Chart.js)

🔊 Speech output

📱 Installable as a Progressive Web App (PWA)

💻 Desktop app support

🏗️ Architecture

User → Next.js Frontend → REST API → HuggingFace Model → Prediction → Response → Visualization

🔹 Frontend

Next.js 16

TypeScript

Tailwind CSS

Framer Motion

Chart.js

next-themes

🔹 Backend

FastAPI

Transformers (HuggingFace)

XLM-RoBERTa model

Deployed on HuggingFace Spaces

🔹 Deployment

Frontend → Vercel

Backend → HuggingFace Spaces

PWA enabled (Service Worker + Manifest)

⚙️ How It Works

User enters Nepali text.

Frontend sends POST request to /predict API.

HuggingFace model processes text.

Model returns:

Sentiment label

Confidence score

Frontend displays:

Emoji indicator

Confidence %

Bar chart visualization

Optional voice feedback

📦 Installation (Local Setup)
1️⃣ Clone Repository
git clone https://github.com/sameerdorjee07-cell/nepali-sentiment-frontend.git
cd nepali-sentiment-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

Open:

http://localhost:3000
🔥 Production Build
npm run build
npm start
📱 PWA Features

Installable on Desktop

Installable on Mobile

Offline support via Service Worker

Custom app icon

Standalone window mode

🧠 Model Details

Base Model: xlm-roberta-base

Architecture: Transformer Encoder

Type: Multilingual Language Model

Fine-tuned for Nepali Sentiment Classification

Why XLM-RoBERTa?

Supports multiple languages

Strong contextual understanding

Better performance than traditional LSTM/Naive Bayes

📊 Example Output

Input:

यो सेवा एकदमै राम्रो छ।

Output:

Positive
Confidence: 98.86%
🎓 Academic Context

This project was developed as a 6th Semester Major Project focusing on:

Deep Learning

NLP (Natural Language Processing)

Transformer Models

Web Application Development

PWA Deployment

👨‍💻 Author

Built with ❤️ by Sameer Dorjee

GitHub: https://github.com/sameerdorjee07-cell

Project: Nepali Sentiment Intelligence

📜 License

This project is developed for academic and research purposes.
