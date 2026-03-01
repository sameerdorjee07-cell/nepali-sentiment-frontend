import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nepali Sentiment Intelligence',
    short_name: 'NepaliSentiment',
    description: 'AI Powered Nepali Sentiment Analysis',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f1a',
    theme_color: '#9333ea',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable' as any,
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable' as any,
      },
    ],
  }
}