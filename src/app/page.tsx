'use client';
import { useState, useEffect } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Home() {
  const [showProposal, setShowProposal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  // Create floating hearts animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-20), // Keep only last 20 hearts
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: Math.random() * 2
        }
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const messages = [
    "Every day with you feels like a beautiful dream...",
    "You light up my world in ways I never imagined possible...",
    "Your smile makes my heart skip a beat every single time...",
    "I want to spend forever making you as happy as you make me..."
  ];

  const handleStartJourney = () => {
    setShowProposal(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < messages.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(messages.length); // Final proposal step
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-500 text-2xl animate-bounce"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: '6s',
            animationIterationCount: '1',
            animationFillMode: 'forwards',
            transform: 'translateY(-100vh)'
          }}
        >
          ❤️
        </div>
      ))}

      {/* Stars decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {!showProposal ? (
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Sparkles className="mx-auto text-pink-500 animate-spin" size={60} />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
                My Dearest Love
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                There's something very special I want to share with you...
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 dark:border-pink-800">
                <Heart className="mx-auto text-red-500 mb-4 animate-pulse" size={50} />
                <p className="text-lg text-gray-800 dark:text-gray-200 italic">
                  "Love is not just looking at each other, but looking in the same direction together."
                </p>
              </div>
              
              <button 
                onClick={handleStartJourney}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 proposal-button"
              >
                Begin Our Journey ✨
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            {currentStep < messages.length ? (
              <div className="bg-white/80 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200 dark:border-pink-800 transform animate-fadeIn">
                <div className="space-y-6">
                  <div className="flex justify-center space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i <= currentStep ? 'bg-pink-500' : 'bg-gray-300'
                        } transition-colors duration-500`}
                      />
                    ))}
                  </div>
                  
                  <Heart className="mx-auto text-red-500 animate-pulse" size={60} />
                  
                  <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {messages[currentStep]}
                  </p>
                  
                  <button 
                    onClick={nextStep}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 proposal-button"
                  >
                    {currentStep < messages.length - 1 ? 'Continue ❤️' : 'The Big Question 💍'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 dark:from-black/30 dark:via-pink-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-pink-300 dark:border-pink-700 transform animate-bounce">
                  <div className="space-y-8">
                    <div className="text-6xl animate-spin">💍</div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      Will You Marry Me?
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      You are my best friend, my soulmate, and my everything. 
                      I want to spend the rest of my life loving you, 
                      supporting you, and creating beautiful memories together.
                    </p>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                        Will you make me the happiest person in the world?
                      </p>
                      
                      <div className="flex justify-center space-x-6">
                        <button 
                          onClick={() => alert('YES! 🎉 Thank you for making me the happiest person alive! I love you so much! 💕')}
                          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-xl rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 proposal-button"
                        >
                          YES! 💕
                        </button>
                        
                        <button 
                          onClick={() => alert('I understand... but I will keep loving you always! ❤️')}
                          className="border-2 border-gray-400 text-gray-600 dark:text-gray-400 px-8 py-4 text-xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        >
                          I need time
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                      "Forever and always, my love ❤️"
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}