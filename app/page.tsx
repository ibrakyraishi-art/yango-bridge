'use client'

import { useState } from 'react'

export default function YangoLanding() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      nav: {
        home: 'Home',
        promoCode: 'Promo code'
      },
      title: ['Watch. Listen. Play.', 'All in One'],
      description: 'A massive library is waiting — full seasons, exclusive films, anime, music, and more',
      cta: 'Get started',
      feature: {
        title: 'Movies & Series',
        description: 'Thousands of movies and series in HD quality'
      },
      benefits: {
        title: 'More benefits',
        items: [
          {
            title: 'Invite your family members',
            description: 'Connect up to 20 devices between you and 3 more members'
          },
          {
            title: 'Watch any way you want',
            description: 'On mobile, tablet, laptop, Smart TV, PlayStation, Android TV, Apple TV, and more'
          },
          {
            title: 'Download and enjoy offline',
            description: 'Watch your favorite movies and series and listen to music at any time'
          }
        ]
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        promoCode: 'رمز ترويجي'
      },
      title: ['شاهد. استمع. العب.', 'الكل في واحد'],
      description: 'مكتبة ضخمة في انتظارك — مواسم كاملة، أفلام حصرية، أنمي، موسيقى والمزيد',
      cta: 'ابدأ الآن',
      feature: {
        title: 'أفلام ومسلسلات',
        description: 'آلاف الأفلام والمسلسلات بجودة عالية'
      },
      benefits: {
        title: 'المزيد من المزايا',
        items: [
          {
            title: 'قم بدعوة أفراد عائلتك',
            description: 'قم بتوصيل ما يصل إلى 20 جهازًا بينك وبين 3 أعضاء آخرين'
          },
          {
            title: 'شاهد بالطريقة التي تريدها',
            description: 'على الهاتف المحمول والجهاز اللوحي والكمبيوتر المحمول والتلفزيون الذكي وPlayStation وAndroid TV وApple TV والمزيد'
          },
          {
            title: 'قم بالتحميل واستمتع دون اتصال',
            description: 'شاهد أفلامك ومسلسلاتك المفضلة واستمع إلى الموسيقى في أي وقت'
          }
        ]
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Simple Text like Yango Play */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold tracking-wide">YANGO PLAY</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors border-b-2 border-purple-500 pb-5">
                {t.nav.home}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t.nav.promoCode}
              </a>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/5 rounded-full p-0.5">
                <button
                  onClick={() => setLang('ar')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    lang === 'ar'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    lang === 'en'
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  En
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative min-h-[85vh] flex items-center">
          {/* Subtle animated background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Title - Smaller and more elegant */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                {t.title[0]}
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t.title[1]}
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                {t.description}
              </p>

              {/* Single CTA Button - Clean and simple */}
              <div className="pt-4">
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-200 hover:scale-105"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section - Minimal */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center text-3xl">
                  🎬
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.feature.title}</h3>
                  <p className="text-sm text-gray-400">{t.feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-bold text-center mb-12">{t.benefits.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.benefits.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors"
              >
                <h4 className="text-base font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-200 hover:scale-105"
            >
              {t.cta}
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20"></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-xs text-gray-500">
            © 2025 Yango Play. All rights reserved.
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
