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

      <div className="relative flex items-center">
        {open && (
          <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52 animate-in fade-in slide-in-from-top-2 duration-200 z-[200]">
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
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${open ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600'}`}
          aria-label="Accessibility options"
          aria-expanded={open}
        >
          <Accessibility size={20} />
        </button>
      </div>
    </>
  );
};

export default AccessibilityToolbar;
