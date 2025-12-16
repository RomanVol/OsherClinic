'use client';

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Auto-play prevented:', error);
        });
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  // Try to auto-play after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        }).catch(() => {
          // Auto-play failed, user needs to click
          setShowPrompt(true);
        });
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  return (
    <>
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
      >
        <source src="/music/Beautiful_Relaxing.mp3" type="audio/mpeg" />
      </audio>

      {/* Initial Prompt */}
      {showPrompt && !isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-4 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-400 to-pink-400 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-primary-700 mb-3">
              ברוכה הבאה 🌸
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              האם תרצי להפעיל מוזיקה מרגיעה לחוויה טובה יותר?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={togglePlay}
                className="bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                כן, הפעילי מוזיקה 🎵
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                לא תודה
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Music Control Button */}
      {!showPrompt && (
        <button
          onClick={togglePlay}
          className="fixed bottom-24 left-4 z-40 bg-gradient-to-br from-primary-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label={isPlaying ? 'השהה מוזיקה' : 'הפעל מוזיקה'}
        >
          {isPlaying ? (
            // Pause Icon with Animation
            <div className="relative">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </div>
          ) : (
            // Play Icon
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
          
          {/* Tooltip */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {isPlaying ? 'השהה מוזיקה' : 'הפעל מוזיקה'}
          </span>
        </button>
      )}
    </>
  );
}
