'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function YangoLanding() {
  const searchParams = useSearchParams()
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [oneLinkUrl, setOneLinkUrl] = useState('https://play.yango.com')

  useEffect(() => {
    // Захватываем UTM параметры из URL
    const utmSource = searchParams.get('utm_source') || ''
    const utmMedium = searchParams.get('utm_medium') || ''
    const utmCampaign = searchParams.get('utm_campaign') || ''
    const utmTerm = searchParams.get('utm_term') || ''
    const utmContent = searchParams.get('utm_content') || ''
    const gclid = searchParams.get('gclid') || ''

    // Если есть UTM параметры - формируем AppsFlyer OneLink
    if (utmSource || utmCampaign || gclid) {
      // ЗАМЕНИ на свою реальную OneLink ссылку из AppsFlyer Dashboard
      const oneLinkBase = 'https://yango.onelink.me/XXXXX'
      
      const params = new URLSearchParams()
      
      // Преобразуем UTM → AppsFlyer параметры
      if (utmSource) params.append('pid', utmSource) // Media source
      if (utmCampaign) params.append('c', utmCampaign) // Campaign
      if (utmTerm) params.append('af_keywords', utmTerm) // Keywords
      if (utmContent) params.append('af_adset', utmContent) // AdGroup
      if (gclid) params.append('af_ad', gclid) // Google Click ID
      if (utmMedium) params.append('af_channel', utmMedium) // Channel
      
      const finalUrl = `${oneLinkBase}?${params.toString()}`
      setOneLinkUrl(finalUrl)
      
      console.log('📊 UTM Parameters captured:', { utmSource, utmMedium, utmCampaign, utmTerm, utmContent, gclid })
      console.log('🔗 Generated OneLink:', finalUrl)
    }
  }, [searchParams])

  const content = {
    en: {
      title: ['Picked for you.', 'Ready to watch.'],
      description: 'Smart recommendations — just press play.',
      cta: 'Watch Yango Play',
      featured: 'Featured Content',
      trailers: 'Watch Trailers',
      genres: {
        drama: 'Drama',
        comedy: 'Comedy',
        arabic: 'Arabic Cinema',
        exclusive: 'Exclusive'
      },
      footer: {
        help: 'We are always ready to help you',
        contact: 'Contact support',
        copyright: '© 2023–2025 Funtech Loyalty Cards Services LLC, 18+',
        terms: 'Terms and conditions'
      }
    },
    ar: {
      title: ['مُختار لك.', 'جاهز للمشاهدة.'],
      description: 'توصيات ذكية — فقط اضغط play',
      cta: 'شاهد على Yango Play',
      featured: 'المحتوى المميز',
      trailers: 'شاهد الإعلانات',
      genres: {
        drama: 'دراما',
        comedy: 'كوميديا',
        arabic: 'سينما عربية',
        exclusive: 'حصري'
      },
      footer: {
        help: 'نحن دائماً جاهزون لمساعدتك',
        contact: 'اتصل بالدعم',
        copyright: '© 2023–2025 Funtech Loyalty Cards Services LLC, 18+',
        terms: 'الشروط والأحكام'
      }
    }
  }

  const videos = [
    {
      title: 'أهل الكهف',
      subtitle: 'Ahl El Kahf - Official Trailer',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Замени на свое видео
      duration: '2:34'
    },
    {
      title: 'السجادة الأفاضال',
      subtitle: 'Comedy Series Trailer',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:45'
    },
    {
      title: 'فيما يرا يعني!؟',
      subtitle: 'Family Comedy',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=450&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:12'
    },
    {
      title: 'Exclusive Content',
      subtitle: 'Only on Yango Play',
      thumbnail: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&h=450&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:05'
    }
  ]

  const movies = [
    {
      title: 'أفلام Yango',
      subtitle: 'السجادة الأفاضال',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop&q=80',
      color: 'from-teal-700 to-green-800'
    },
    {
      title: 'أهل الكهف',
      subtitle: 'Ahl El Kahf',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop&q=80',
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
    window.location.href = oneLinkUrl
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0b3e] to-[#2d4a8a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
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

              {/* Genre Tags */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">🎭 {t.genres.drama}</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">😂 {t.genres.comedy}</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">🎬 {t.genres.arabic}</div>
                <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">⭐ {t.genres.exclusive}</div>
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
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide overscroll-x-contain">
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

      {/* Video Trailers Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>{t.trailers}</h3>
          
          {/* Video Cards with Horizontal Scroll */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide overscroll-x-contain">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 md:w-96 snap-start group cursor-pointer"
                  onClick={() => setSelectedVideo(video.videoUrl)}
                >
                  <div className="relative h-52 md:h-56 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600/80">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {video.duration}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl font-bold mb-1">{video.title}</p>
                      <p className="text-sm text-white/80">{video.subtitle}</p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Fade */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0f0520] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0f0520] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white text-2xl font-bold">×</span>
            </button>

            {/* Video Player */}
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

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
                <p className="text-xs text-white/50 mb-1">{t.footer.help}</p>
                <a href="https://play.yango.com/support/en/contact-us/" target="_blank" rel="noopener" className="text-sm text-white hover:text-purple-400 transition-colors underline">{t.footer.contact}</a>
              </div>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs text-white/40">{t.footer.copyright}</p>
              <a href="https://yango.com/legal/uae_yango_play_conditions/" target="_blank" rel="noopener" className="text-xs text-white/40 hover:text-white/60 transition-colors underline">{t.footer.terms}</a>
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
          -webkit-overflow-scrolling: touch;
        }
        .overscroll-x-contain {
          overscroll-behavior-x: contain;
        }
      `}</style>
    </div>
  )
}
