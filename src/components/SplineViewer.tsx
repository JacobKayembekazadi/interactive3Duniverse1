import React, { useRef, useEffect, useState } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineViewerProps {
  sceneUrl: string;
  className?: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ sceneUrl, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Ensure canvas can receive mouse events
    canvas.style.pointerEvents = 'auto';
    canvas.style.touchAction = 'none'; // Prevent default touch behaviors
    
    const app = new Application(canvas);
    
    app.load(sceneUrl)
      .then(() => {
        console.log('Spline scene loaded successfully');
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load Spline scene:', err);
        setError('Failed to load 3D scene');
        setIsLoading(false);
      });

    // Cleanup function
    return () => {
      try {
        app.dispose?.();
      } catch (e) {
        console.warn('Error disposing Spline app:', e);
      }
    };
  }, [sceneUrl]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full outline-none transition-opacity duration-1000"
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          pointerEvents: 'auto',
          touchAction: 'none'
        }}
        tabIndex={0} // Make canvas focusable for keyboard events
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-white text-lg font-medium">Loading 3D Experience...</p>
            <p className="text-gray-400 text-sm mt-2">Preparing interactive scene...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-20">
          <div className="text-center">
            <p className="text-red-400 text-lg font-medium mb-2">{error}</p>
            <p className="text-gray-400 text-sm">Please check your internet connection and try again</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplineViewer;