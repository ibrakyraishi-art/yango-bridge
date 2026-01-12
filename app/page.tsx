'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function YangoLanding() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar')

  const content = {
    en: {
      title: ['Unlimited Entertainment', 'For Free'],
      description: 'New movies and series every week, HD quality, smart AI-powered recommendations, and more — free on Yango Play',
      cta: 'Watch on Yango Play',
      footer: {
        help: 'We are always ready to help you',
        contact: 'Contact Support',
        copyright: '© 2023–2025 Funtech Loyalty Cards Services LLC, 18+',
        terms: 'Terms and Conditions'
      }
    },
    ar: {
      title: ['ترفيه لا ينتهي', 'مجاناً'],
      description: 'أفلام ومسلسلات جديدة كل اسبوع، جودة عالية، توصيات ذكية مدعومة بالذكاء الاصطناعي، والمزيد — مجاناً على Yango Play',
      cta: 'شاهد على Yango Play',
      footer: {
        help: 'نحن دائماً جاهزون لمساعدتك',
        contact: 'اتصل بالدعم',
        copyright: '© 2023–2025 Funtech Loyalty Cards Services LLC, 18+',
        terms: 'الشروط والأحكام'
      }
    }
  }

  const handleCTA = () => {
    window.location.href = 'https://play.yango.com'
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header - Simple like Yango Music */}
      <header className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              <text x="0" y="24" fill="white" fontSize="24" fontWeight="bold" fontFamily="system-ui">
                YANGO PLAY
              </text>
            </svg>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setLang('ar')}
              className={lang === 'ar' ? 'text-white' : 'text-gray-500 hover:text-white transition-colors'}
            >
              العربية
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-white' : 'text-gray-500 hover:text-white transition-colors'}
            >
              Eng
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Two columns like Yango Music */}
      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.title[0]}
                <br />
                <span className="text-[#8b5cf6]">{t.title[1]}</span>
              </h1>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                {t.description}
              </p>

              <button
                onClick={handleCTA}
                className="inline-block bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-4 rounded-full font-medium text-base transition-colors"
              >
                {t.cta}
              </button>
            </div>

            {/* Right: Movie Posters */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Poster 1 */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
                    alt="Movie Poster 1"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm font-semibold">أفلام Yango</p>
                    <p className="text-xs text-gray-300">السجادة الأفاضال</p>
                  </div>
                </div>

                {/* Poster 2 */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
                    alt="Movie Poster 2"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm font-semibold">أهل الكهف</p>
                    <p className="text-xs text-gray-300">Ahl El Kahf</p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Footer - Like Yango Music */}
      <footer className="border-t border-gray-800 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Social & Support */}
            <div className="space-y-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/yangoplay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="https://www.instagram.com/yangoplay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="https://www.tiktok.com/@yangoplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">🎵</span>
                </a>
              </div>

              {/* Support */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400">{t.footer.help}</p>
                <a
                  href="https://play.yango.com/support/ar/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-purple-400 transition-colors underline"
                >
                  {t.footer.contact}
                </a>
              </div>
            </div>

            {/* Right: Legal */}
            <div className="space-y-2 text-right">
              <p className="text-xs text-gray-500">{t.footer.copyright}</p>
              <a
                href="https://yango.com/legal/uae_yango_play_conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white transition-colors underline"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
