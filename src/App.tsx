import React from 'react';
import SplineViewer from './components/SplineViewer';
import OverlayUI from './components/OverlayUI';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* 3D Scene Background - Full interaction enabled */}
      <SplineViewer 
        sceneUrl="https://prod.spline.design/v1O785j6oR91npFm/scene.splinecode"
        className="absolute inset-0 z-0"
      />
      
      {/* Overlay UI - Positioned to not block interactions */}
      <OverlayUI />
      
      {/* Ambient Background Effects - Non-interactive */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}

export default App;