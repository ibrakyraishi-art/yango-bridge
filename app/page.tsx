'use client'

import { useState } from 'react'

export default function YangoLanding() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      title: ['Unlimited', 'Entertainment'],
      description: 'New movies and series weekly, crystal-clear quality, and smart AI picks on Yango Play.',
      cta: 'Watch on Yango Play'
    },
    ar: {
      title: ['ترفيه', 'لا محدود'],
      description: 'أفلام ومسلسلات جديدة أسبوعياً، جودة عالية، وتوصيات ذكية بالذكاء الاصطناعي على Yango Play.',
      cta: 'شاهد على Yango Play'
    }
  }

  const handleCTA = () => {
    window.location.href = 'https://play.yango.com'
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0f0520] via-[#1a0b3e] to-[#0a1435] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
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
            {/* Text Content */}
            <div className={`space-y-6 md:space-y-8 ${isRTL ? 'lg:col-start-2 text-right' : 'text-left'}`}>
              {/* Title - Huge like original */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
                {t.title[0]}.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.title[1]}.
                </span>
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-xl">
                {t.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={handleCTA}
                className="inline-block bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
              >
                {t.cta}
              </button>
            </div>

            {/* Visual Content */}
            <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
              {/* 3D Card Stack */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
                {/* Card 1 - Back Left */}
                <div className="absolute left-0 top-12 w-[45%] h-[350px] md:h-[420px] transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:z-20">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80"
                      alt="Content"
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-white/60">أفلام Yango</p>
                        <p className="text-lg font-bold">السجادة الأفاضال</p>
                      </div>
                      <div className="mt-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Center Front (Main) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-[420px] md:h-[480px] lg:h-[520px] z-10 transform hover:scale-105 hover:z-30 transition-all duration-500">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=700&fit=crop&q=80"
                      alt="Featured Content"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                    
                    {/* Heart Icon in Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <span className="text-4xl">❤️</span>
                      </div>
                    </div>

                    {/* Title at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-2xl md:text-3xl font-bold mb-1">أهل الكهف</p>
                      <p className="text-base text-white/80">Ahl El Kahf</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Back Right */}
                <div className="absolute right-0 top-16 w-[45%] h-[350px] md:h-[420px] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:z-20">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-indigo-900 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80"
                      alt="Content"
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-white/60">مسلسلات Yango</p>
                        <p className="text-lg font-bold">Exclusive Series</p>
                      </div>
                      <div className="mt-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/20 rounded-full blur-3xl -z-10 scale-150"></div>
              </div>

              {/* Genre Tags Below */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  Radiohead
                </div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  Arabic Pop
                </div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  Foreign Rap
                </div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                  The Weeknd
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
            {/* Social + Support */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-sm">
                  f
                </a>
                <a href="https://www.instagram.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  📷
                </a>
                <a href="https://www.tiktok.com/@yangoplay" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  🎵
                </a>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <div className="text-center md:text-left">
                <p className="text-xs text-white/50 mb-1">We are always ready to help you</p>
                <a href="https://play.yango.com/support/en/contact-us/" target="_blank" rel="noopener" className="text-sm text-white hover:text-purple-400 transition-colors underline">
                  Contact support
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs text-white/40">© 2023–2025 Funtech Loyalty Cards Services LLC, 18+</p>
              <a href="https://yango.com/legal/uae_yango_play_conditions/" target="_blank" rel="noopener" className="text-xs text-white/40 hover:text-white/60 transition-colors underline">
                Terms and conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
