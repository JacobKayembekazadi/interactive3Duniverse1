import React, { useState } from 'react';
import { Play, MousePointer, RotateCcw, ZoomIn, ArrowRight, X, Info } from 'lucide-react';

const OverlayUI: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleBeginExperience = () => {
    setShowWelcome(false);
    setShowTutorial(true);
    
    // Auto-hide tutorial after 8 seconds
    setTimeout(() => {
      setShowTutorial(false);
    }, 8000);
  };

  const handleLearnMore = () => {
    // Scroll to show more information or open a modal
    alert('This would typically open a detailed guide about the 3D experience, controls, and features. For now, try dragging and scrolling to explore the 3D scene!');
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Welcome Overlay - Full Screen */}
      {showWelcome && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-auto">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
              style={{ 
                textShadow: '0 0 40px rgba(147, 51, 234, 0.3), 0 0 80px rgba(147, 51, 234, 0.1)',
                filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))'
              }}
            >
              Interactive
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                3D Universe
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
              Immerse yourself in a captivating 3D experience. 
              <span className="text-purple-300 font-medium"> Drag to explore</span>, 
              <span className="text-blue-300 font-medium"> scroll to zoom</span>, 
              and discover the infinite possibilities of interactive design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBeginExperience}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                <div className="relative flex items-center gap-3">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg">Begin Experience</span>
                  <ArrowRight className={`h-5 w-5 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </div>
              </button>
              
              <button 
                onClick={handleLearnMore}
                className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-white/10"
              >
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  <span className="text-lg">Learn More</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Overlay */}
      {showTutorial && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Tutorial Steps */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 max-w-md text-center animate-pulse">
              <div className="text-purple-400 mb-3">
                <MousePointer className="h-8 w-8 mx-auto animate-bounce" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Try It Now!</h3>
              <p className="text-gray-300 text-sm mb-4">
                Click and drag anywhere to rotate the 3D scene. Use your scroll wheel to zoom in and out.
              </p>
              <button
                onClick={() => setShowTutorial(false)}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium"
              >
                Got it! ✨
              </button>
            </div>
          </div>

          {/* Animated Arrows */}
          <div className="absolute top-1/3 left-1/4 pointer-events-none animate-bounce">
            <div className="text-purple-400 text-2xl">👆</div>
            <p className="text-white text-xs mt-1">Drag here</p>
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 pointer-events-none animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="text-blue-400 text-2xl">🔄</div>
            <p className="text-white text-xs mt-1">Scroll to zoom</p>
          </div>
        </div>
      )}

      {/* Minimal UI - Only shown after welcome is dismissed */}
      {!showWelcome && (
        <>
          {/* Title - Top */}
          <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none">
            <div className="text-center px-6 pointer-events-auto">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Interactive 3D Universe
              </h1>
            </div>
          </div>

          {/* Quick Actions - Bottom Left */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-3 pointer-events-auto">
            <button
              onClick={() => setShowWelcome(true)}
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                <span className="text-sm">Reset View</span>
              </div>
            </button>
            
            <button
              onClick={handleLearnMore}
              className="group bg-purple-600/20 backdrop-blur-md border border-purple-400/30 hover:bg-purple-600/30 text-purple-200 font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="text-sm">Help</span>
              </div>
            </button>
          </div>

          {/* Controls Hint - Bottom Right */}
          <div className="absolute bottom-8 right-8 pointer-events-auto">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-xs">
              <h3 className="text-white font-semibold text-sm mb-3 text-center">Controls</h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="group">
                  <div className="bg-white/10 rounded-lg p-2 mb-1 group-hover:bg-white/20 transition-colors duration-200">
                    <MousePointer className="h-4 w-4 text-purple-300 mx-auto" />
                  </div>
                  <p className="text-xs text-gray-300">Drag to Rotate</p>
                </div>
                <div className="group">
                  <div className="bg-white/10 rounded-lg p-2 mb-1 group-hover:bg-white/20 transition-colors duration-200">
                    <ZoomIn className="h-4 w-4 text-blue-300 mx-auto" />
                  </div>
                  <p className="text-xs text-gray-300">Scroll to Zoom</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OverlayUI;