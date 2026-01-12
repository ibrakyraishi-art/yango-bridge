import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yango Play - Watch. Listen. Play. All in One',
  description: 'Огромная библиотека контента — фильмы, сериалы, музыка, игры и многое другое',
  keywords: 'yango play, streaming, movies, series, music, games',
  openGraph: {
    title: 'Yango Play - Watch. Listen. Play. All in One',
    description: 'Огромная библиотека контента — фильмы, сериалы, музыка, игры и многое другое',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
