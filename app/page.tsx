'use client'

import { useState } from 'react'

export default function YangoLanding() {
  const [lang, setLang] = useState<'ar' | 'en'>('en')

  const content = {
    en: {
      title: 'UNLIMITED ENTERTAINMENT. ZERO COST.',
      description: 'New movies and series weekly, crystal-clear quality, and smart AI picks — totally free on Yango Play.',
      cta: 'Watch on Yango Play'
    },
    ar: {
      title: 'ترفيه لا محدود. بدون تكلفة.',
      description: 'أفلام ومسلسلات جديدة أسبوعياً، جودة عالية، وتوصيات ذكية بالذكاء الاصطناعي — مجاناً على Yango Play.',
      cta: 'شاهد على Yango Play'
    }
  }

  const handleCTA = () => {
    window.location.href = 'https://play.yango.com'
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1e3a8a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Full text */}
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight">YANGO PLAY</h1>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === 'en'
                  ? 'bg-white text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Eng
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-4 py-1.5 text-sm font-medium transition-all ${
                lang === 'ar'
                  ? 'bg-white text-black rounded-full'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              العربية
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content - Left for EN, Right for AR */}
            <div className={`space-y-6 md:space-y-8 ${isRTL ? 'lg:col-start-2 text-right' : 'text-left'}`}>
              {/* Title - Big and Bold like Yango Music */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                {t.title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-xl">
                {t.description}
              </p>

              {/* CTA Button - Purple/Pink like original */}
              <button
                onClick={handleCTA}
                className="inline-block bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
              >
                {t.cta}
              </button>
            </div>

            {/* Visual Content - Right for EN, Left for AR */}
            <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
              {/* Movie Cards with 3D effect */}
              <div className="relative h-[400px] md:h-[500px]">
                {/* Card 1 - Left/Back */}
                <div className="absolute left-0 top-8 w-[45%] h-[380px] md:h-[450px] transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
                      alt="Movie"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p className="text-lg font-bold">أفلام Yango</p>
                      <p className="text-sm text-white/70">السجادة الأفاضال</p>
                      <div className="mt-3 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-2xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Center/Front */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-[420px] md:h-[480px] z-10 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-600 to-orange-600">
                    <img
                      src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
                      alt="Movie"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                        <span className="text-3xl md:text-4xl">❤️</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl md:text-2xl font-bold">أهل الكهف</p>
                      <p className="text-sm md:text-base text-white/80">Ahl El Kahf</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Right/Back */}
                <div className="absolute right-0 top-12 w-[45%] h-[380px] md:h-[450px] transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-800 to-blue-900">
                    <img
                      src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop"
                      alt="Movie"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <p className="text-lg font-bold">مسلسلات Yango</p>
                      <p className="text-sm text-white/70">Exclusive Series</p>
                      <div className="mt-3 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-2xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
              </div>

              {/* Genre Badges - Below cards */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  🎬 أفلام عربية
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  🎭 مسلسلات
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  🌟 حصريات Yango
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>f</span>
              </a>
              <a href="https://www.instagram.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>📷</span>
              </a>
              <a href="https://www.tiktok.com/@yangoplay" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>🎵</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-white/50 text-center">
              © 2023–2025 Funtech Loyalty Cards Services LLC, 18+
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
