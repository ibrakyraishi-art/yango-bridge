'use client'

import { useState } from 'react'

export default function YangoLanding() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      title: ['Watch. Listen. Play.', 'All in One'],
      description: 'A massive library is waiting — full seasons, exclusive films, anime, music, and more',
      cta: 'Download Yango Play',
      ctaSecondary: 'Open in App',
      features: {
        movies: {
          title: 'Movies & Series',
          description: 'Thousands of movies and series in HD quality'
        }
      },
      benefits: {
        anywhere: {
          title: 'Watch anywhere',
          description: 'On mobile, tablet, laptop, Smart TV, and more'
        },
        offline: {
          title: 'Download & watch offline',
          description: 'Save your favorites and watch them anytime'
        },
        family: {
          title: 'Family sharing',
          description: 'Connect up to 20 devices for your family'
        }
      }
    },
    ar: {
      title: ['شاهد. استمع. العب.', 'الكل في واحد'],
      description: 'مكتبة ضخمة في انتظارك — مواسم كاملة، أفلام حصرية، أنمي، موسيقى والمزيد',
      cta: 'تحميل Yango Play',
      ctaSecondary: 'فتح التطبيق',
      features: {
        movies: {
          title: 'أفلام ومسلسلات',
          description: 'آلاف الأفلام والمسلسلات بجودة عالية'
        }
      },
      benefits: {
        anywhere: {
          title: 'شاهد في أي مكان',
          description: 'على الهاتف، الجهاز اللوحي، الكمبيوتر المحمول، التلفزيون الذكي والمزيد'
        },
        offline: {
          title: 'حمّل وشاهد بدون إنترنت',
          description: 'احفظ المفضلة لديك وشاهدها في أي وقت'
        },
        family: {
          title: 'مشاركة عائلية',
          description: 'قم بتوصيل ما يصل إلى 20 جهازًا لعائلتك'
        }
      }
    }
  }

  const handleDownload = () => {
    window.location.href = 'https://play.yango.com'
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">▶</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  YANGO PLAY
                </h1>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-6">
              {/* Language Switcher - Modern */}
              <div className="relative flex items-center bg-white/5 backdrop-blur-lg rounded-2xl p-1 border border-white/10">
                <button
                  onClick={() => setLang('ar')}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    lang === 'ar'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang === 'ar' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
                  )}
                  <span className="relative z-10">العربية</span>
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    lang === 'en'
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang === 'en' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
                  )}
                  <span className="relative z-10">English</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Title */}
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight tracking-tight">
                <span className="block">{t.title[0]}</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  {t.title[1]}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              {t.description}
            </p>

            {/* CTA Buttons - Modern Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up animation-delay-200">
              {/* Primary Button */}
              <button
                onClick={handleDownload}
                className="group relative w-full sm:w-auto px-10 py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/70"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>📥</span>
                  <span>{t.cta}</span>
                </span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={handleDownload}
                className="group relative w-full sm:w-auto px-10 py-5 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>{t.ctaSecondary}</span>
                </span>
              </button>
            </div>
          </div>

          {/* Feature Card - Modern Glassmorphism */}
          <div className="mt-24 max-w-4xl mx-auto animate-slide-up animation-delay-400">
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-10 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-500/50">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-purple-500/50">
                    🎬
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {t.features.movies.title}
                  </h3>
                  <p className="text-xl text-gray-400">
                    {t.features.movies.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative bg-gradient-to-b from-transparent via-purple-900/10 to-transparent py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {lang === 'en' ? 'Everything you love, in one place' : 'كل ما تحبه في مكان واحد'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.values(t.benefits).map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 space-y-4">
                      <div className="text-6xl">
                        {index === 0 ? '📺' : index === 1 ? '⬇️' : '👨‍👩‍👧‍👦'}
                      </div>
                      <h4 className="text-2xl font-bold">{benefit.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="text-center mt-16">
                <button
                  onClick={handleDownload}
                  className="group relative px-12 py-6 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-xl shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🎉</span>
                    <span>{t.cta}</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                YANGO PLAY
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Yango Play. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}
