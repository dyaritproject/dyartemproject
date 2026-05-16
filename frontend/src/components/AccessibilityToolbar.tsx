import { useState, useEffect } from 'react';
import { Type, Sun, RotateCcw, ChevronUp, Accessibility } from 'lucide-react';

const AccessibilityToolbar = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (dyslexiaFont) {
      document.body.style.fontFamily = "'OpenDyslexic', 'Comic Sans MS', cursive";
    } else {
      document.body.style.fontFamily = '';
    }
  }, [dyslexiaFont]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setDyslexiaFont(false);
  };

  return (
    <>
      <style>{`
        .high-contrast { filter: contrast(1.5) brightness(1.1); }
        .high-contrast a, .high-contrast button { outline: 2px solid #FFD700 !important; }
      `}</style>

      <div className="fixed bottom-6 left-6 z-[200] flex flex-col items-start gap-2">
        {open && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-52 animate-in slide-in-from-bottom-2 duration-200">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Accessibility</p>

            {/* Font Size */}
            <div className="mb-4">
              <p className="text-xs text-gray-600 font-medium mb-2 flex items-center gap-1"><Type size={12} /> Text Size</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFontSize(f => Math.max(80, f - 10))}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-purple-100 text-gray-700 font-bold text-sm transition-colors flex items-center justify-center"
                  aria-label="Decrease font size"
                >A-</button>
                <span className="text-xs text-gray-500 flex-1 text-center">{fontSize}%</span>
                <button
                  onClick={() => setFontSize(f => Math.min(150, f + 10))}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-purple-100 text-gray-700 font-bold text-sm transition-colors flex items-center justify-center"
                  aria-label="Increase font size"
                >A+</button>
              </div>
            </div>

            {/* High Contrast */}
            <button
              onClick={() => setHighContrast(h => !h)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all mb-2 ${highContrast ? 'bg-[#6A0DAD] text-white' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'}`}
              aria-pressed={highContrast}
            >
              <Sun size={14} /> High Contrast
            </button>

            {/* Dyslexia Font */}
            <button
              onClick={() => setDyslexiaFont(d => !d)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all mb-3 ${dyslexiaFont ? 'bg-[#6A0DAD] text-white' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'}`}
              aria-pressed={dyslexiaFont}
            >
              <Type size={14} /> Dyslexia Font
            </button>

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
            >
              <RotateCcw size={12} /> Reset All
            </button>
          </div>
        )}

        <button
          onClick={() => setOpen(o => !o)}
          className="w-12 h-12 bg-[#6A0DAD] hover:bg-purple-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Accessibility options"
          aria-expanded={open}
        >
          {open ? <ChevronUp size={20} /> : <Accessibility size={20} />}
        </button>
      </div>
    </>
  );
};

export default AccessibilityToolbar;
