import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MaarssenKimiaTaxi - Taxi Service Maarssen',
    short_name: 'MaarssenKimiaTaxi',
    description: 'Betrouwbare taxi service in Maarssen. 24/7 beschikbaar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#FF9F1C',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
