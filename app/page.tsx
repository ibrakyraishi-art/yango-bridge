'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function YangoLanding() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      title: ['Watch. Listen. Play.', 'All in One'],
      description: 'A massive library is waiting — full seasons, exclusive films, anime, music, and more',
      cta: 'Get started',
      features: {
        movies: {
          title: 'Movies & Series',
          description: 'Thousands of movies and series in HD quality'
        }
      }
    },
    ar: {
      title: ['شاهد. استمع. العب.', 'الكل في واحد'],
      description: 'مكتبة ضخمة في انتظارك — مواسم كاملة، أفلام حصرية، أنمي، موسيقى والمزيد',
      cta: 'ابدأ الآن',
      features: {
        movies: {
          title: 'أفلام ومسلسلات',
          description: 'آلاف الأفلام والمسلسلات بجودة عالية'
        }
      }
    }
  }

  const handleGetStarted = () => {
    window.location.href = 'https://play.yango.com'
  }

  const t = content[lang]
  const isRTL = lang === 'ar'

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">YANGO PLAY</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-purple-400 transition-colors border-b-2 border-purple-500 pb-1">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Music
              </a>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/10 rounded-full p-1">
                <button
                  onClick={() => setLang('ar')}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    lang === 'ar'
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    lang === 'en'
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  En
                </button>
              </div>
              <button className="hidden sm:block text-white hover:text-purple-400 transition-colors">
                Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        {/* Background with movie posters */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10"></div>

          {/* Animated background grid */}
          <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4 opacity-20">
            <div className="bg-purple-600 rounded-lg h-48 animate-pulse"></div>
            <div className="bg-blue-600 rounded-lg h-48 animate-pulse animation-delay-200"></div>
            <div className="bg-pink-600 rounded-lg h-48 animate-pulse animation-delay-400"></div>
            <div className="bg-indigo-600 rounded-lg h-48 animate-pulse animation-delay-600"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Title */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                {t.title[0]}
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.title[1]}
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                {t.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={handleGetStarted}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">{t.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Features */}
            <div className="mt-20 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Only Movies & Series */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">🎬</div>
                    <h3 className="text-2xl font-bold mb-3">{t.features.movies.title}</h3>
                    <p className="text-gray-400">{t.features.movies.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-b from-black to-purple-900/20 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold">
                {lang === 'en' ? 'Everything you love, in one place' : 'كل ما تحبه في مكان واحد'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <div className="text-4xl">📺</div>
                  <h4 className="text-xl font-semibold">
                    {lang === 'en' ? 'Watch anywhere' : 'شاهد في أي مكان'}
                  </h4>
                  <p className="text-gray-400">
                    {lang === 'en' 
                      ? 'On mobile, tablet, laptop, Smart TV, and more' 
                      : 'على الهاتف، الجهاز اللوحي، الكمبيوتر المحمول، التلفزيون الذكي والمزيد'}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl">⬇️</div>
                  <h4 className="text-xl font-semibold">
                    {lang === 'en' ? 'Download & watch offline' : 'حمّل وشاهد بدون إنترنت'}
                  </h4>
                  <p className="text-gray-400">
                    {lang === 'en' 
                      ? 'Save your favorites and watch them anytime' 
                      : 'احفظ المفضلة لديك وشاهدها في أي وقت'}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl">👨‍👩‍👧‍👦</div>
                  <h4 className="text-xl font-semibold">
                    {lang === 'en' ? 'Family sharing' : 'مشاركة عائلية'}
                  </h4>
                  <p className="text-gray-400">
                    {lang === 'en' 
                      ? 'Connect up to 20 devices for your family' 
                      : 'قم بتوصيل ما يصل إلى 20 جهازًا لعائلتك'}
                  </p>
                </div>
              </div>
              
              {/* Final CTA */}
              <div className="pt-12">
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            © 2025 Yango Play. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}
