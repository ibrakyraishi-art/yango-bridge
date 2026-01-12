'use client'

import { useState } from 'react'

export default function YangoLanding() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      title: ['Unlimited', 'Entertainment'],
      description: 'New albums weekly, crystal-clear sound, and smart AI picks on Yango Play.',
      cta: 'Watch on Yango Play',
      featured: 'Featured Content'
    },
    ar: {
      title: ['ترفيه لا ينتهي', ''],
      description: 'ألبومات جديدة كل اسبوع، صوت واضح وعالي، توصيات ذكية مدعومة بالذكاء الاصطناعي، والمزيد على Yango Play',
      cta: 'شاهد على Yango Play',
      featured: 'المحتوى المميز'
    }
  }

  const movies = [
    {
      title: 'أفلام Yango',
      subtitle: 'السجادة الأفاضال',
      image: 'https://images.unsplash.com/photo-1574267432644-f2b45c3510ad?w=500&h=750&fit=crop&q=80',
      color: 'from-teal-700 to-green-800'
    },
    {
      title: 'أهل الكهف',
      subtitle: 'Ahl El Kahf',
      image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop&q=80',
      color: 'from-orange-800 to-red-900'
    },
    {
      title: 'فيما يرا يعني!؟',
      subtitle: 'يُعرَض الآن',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=750&fit=crop&q=80',
      color: 'from-green-700 to-olive-800'
    },
    {
      title: 'مسلسلات Yango',
      subtitle: 'Exclusive Series',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&h=750&fit=crop&q=80',
      color: 'from-blue-800 to-indigo-900'
    },
    {
      title: 'أفلام عربية',
      subtitle: 'Arabic Cinema',
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&h=750&fit=crop&q=80',
      color: 'from-purple-800 to-pink-900'
    },
    {
      title: 'مسلسلات درامية',
      subtitle: 'Drama Series',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=750&fit=crop&q=80',
      color: 'from-red-800 to-rose-900'
    }
  ]

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
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>YANGO PLAY</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === 'en' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              Eng
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-4 py-1.5 text-sm font-medium transition-all ${
                lang === 'ar' ? 'bg-white text-black rounded-full' : 'text-white/70 hover:text-white'
              }`}
            >
              العربية
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content */}
            <div className={`space-y-6 md:space-y-8 max-w-xl ${isRTL ? 'lg:col-start-2 text-right lg:ml-auto' : 'text-left lg:mr-auto'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter" style={{ fontFamily: 'system-ui, -apple-system, Arial Black, sans-serif' }}>
                <span className="block">{t.title[0]}.</span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.title[1]}.
                </span>
              </h2>

              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/70">
                {t.description}
              </p>

              <button
                onClick={handleCTA}
                className="inline-block bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
              >
                {t.cta}
              </button>
            </div>

            {/* 3D Cards */}
            <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
              <div className="relative h-[400px] md:h-[500px]">
                {/* Card 1 */}
                <div className="absolute left-0 top-12 w-[45%] h-[350px] md:h-[420px] transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:z-20">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img src={movies[0].image} alt={movies[0].title} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm font-medium text-white/60">{movies[0].title}</p>
                      <p className="text-lg font-bold">{movies[0].subtitle}</p>
                      <div className="mt-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Main */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-[420px] md:h-[480px] z-10 transform hover:scale-105 hover:z-30 transition-all duration-500">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img src={movies[1].image} alt={movies[1].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <span className="text-4xl">❤️</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-2xl md:text-3xl font-bold mb-1">{movies[1].title}</p>
                      <p className="text-base text-white/80">{movies[1].subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute right-0 top-16 w-[45%] h-[350px] md:h-[420px] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:z-20">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <img src={movies[2].image} alt={movies[2].title} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm font-medium text-white/60">{movies[2].title}</p>
                      <p className="text-lg font-bold">{movies[2].subtitle}</p>
                      <div className="mt-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/20 rounded-full blur-3xl -z-10 scale-150"></div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Radiohead</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Arabic Pop</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">Foreign Rap</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">The Weeknd</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Horizontal Scrolling Gallery */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>{t.featured}</h3>
          
          {/* Scrollable Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 snap-start group cursor-pointer"
                >
                  <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${movie.color} to-transparent opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Heart Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-2xl">❤️</span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xl md:text-2xl font-bold mb-2">{movie.title}</p>
                      <p className="text-sm text-white/80">{movie.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Fade on edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0f0520] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0f0520] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      <div className="h-12"></div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-sm">f</a>
                <a href="https://www.instagram.com/yangoplay/" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">📷</a>
                <a href="https://www.tiktok.com/@yangoplay" target="_blank" rel="noopener" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">🎵</a>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <div className="text-center md:text-left">
                <p className="text-xs text-white/50 mb-1">We are always ready to help you</p>
                <a href="https://play.yango.com/support/en/contact-us/" target="_blank" rel="noopener" className="text-sm text-white hover:text-purple-400 transition-colors underline">Contact support</a>
              </div>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs text-white/40">© 2023–2025 Funtech Loyalty Cards Services LLC, 18+</p>
              <a href="https://yango.com/legal/uae_yango_play_conditions/" target="_blank" rel="noopener" className="text-xs text-white/40 hover:text-white/60 transition-colors underline">Terms and conditions</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
