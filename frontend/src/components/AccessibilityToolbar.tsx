import { useState, useEffect, useRef } from 'react';

const AccessibilityToolbar = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [guideY, setGuideY] = useState(200);
  const panelRef = useRef<HTMLDivElement>(null);

  // Load saved preferences on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dyar-a11y');
      if (saved) {
        const prefs = JSON.parse(saved);
        setFontSize(prefs.fontSize ?? 100);
        setHighContrast(prefs.highContrast ?? false);
        setDyslexiaFont(prefs.dyslexiaFont ?? false);
        setGrayscale(prefs.grayscale ?? false);
        setHighlightLinks(prefs.highlightLinks ?? false);
        setTextSpacing(prefs.textSpacing ?? false);
        setHideImages(prefs.hideImages ?? false);
      }
    } catch {}
  }, []);

  // Apply all preferences to DOM & save
  useEffect(() => {
    try {
      localStorage.setItem('dyar-a11y', JSON.stringify({
        fontSize, highContrast, dyslexiaFont, grayscale, highlightLinks, textSpacing, hideImages
      }));
    } catch {}
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.body.classList.toggle('a11y-high-contrast', highContrast);
    document.body.classList.toggle('a11y-dyslexia', dyslexiaFont);
    document.body.classList.toggle('a11y-grayscale', grayscale);
    document.body.classList.toggle('a11y-highlight-links', highlightLinks);
    document.body.classList.toggle('a11y-text-spacing', textSpacing);
    document.body.classList.toggle('a11y-hide-images', hideImages);
  }, [fontSize, highContrast, dyslexiaFont, grayscale, highlightLinks, textSpacing, hideImages]);

  // Reading guide tracker
  useEffect(() => {
    if (!readingGuide) return;
    const handler = (e: MouseEvent) => setGuideY(e.clientY);
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [readingGuide]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setDyslexiaFont(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setTextSpacing(false);
    setReadingGuide(false);
    setHideImages(false);
  };

  const activeCount = [highContrast, dyslexiaFont, grayscale, highlightLinks, textSpacing, readingGuide, hideImages, fontSize !== 100].filter(Boolean).length;

  const ToggleBtn = ({ label, active, onClick, emoji }: {
    label: string; active: boolean; onClick: () => void; emoji: string;
  }) => (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-left border ${
        active
          ? 'bg-[#6A0DAD] text-white border-purple-600 shadow-md'
          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-300'
      }`}
    >
      <span className="text-base">{emoji}</span>
      <span className="flex-1">{label}</span>
      {active && (
        <span className="text-[10px] font-black bg-white/30 px-1.5 py-0.5 rounded">ON</span>
      )}
    </button>
  );

  return (
    <>
      {/* Global Accessibility CSS */}
      <style>{`
        .a11y-high-contrast { filter: contrast(2) !important; }
        .a11y-grayscale { filter: grayscale(1) !important; }
        .a11y-highlight-links a { background: #FFD700 !important; color: #000 !important; outline: 2px solid #000 !important; border-radius: 3px !important; padding: 0 2px !important; }
        .a11y-text-spacing * { letter-spacing: 0.12em !important; word-spacing: 0.25em !important; line-height: 1.9 !important; }
        .a11y-dyslexia, .a11y-dyslexia * { font-family: 'Comic Sans MS', 'Arial', cursive !important; }
        .a11y-hide-images img { visibility: hidden !important; }
        :focus-visible { outline: 3px solid #6A0DAD !important; outline-offset: 3px !important; border-radius: 4px !important; }
      `}</style>

      {/* Reading Guide */}
      {readingGuide && (
        <>
          <div
            aria-hidden="true"
            className="fixed left-0 right-0 z-[9997] pointer-events-none bg-yellow-300/40 transition-none"
            style={{ top: guideY - 16, height: 32 }}
          />
          <div
            aria-hidden="true"
            className="fixed left-0 right-0 z-[9996] pointer-events-none bg-black/10"
            style={{ top: 0, height: guideY - 16 }}
          />
          <div
            aria-hidden="true"
            className="fixed left-0 right-0 z-[9996] pointer-events-none bg-black/10"
            style={{ top: guideY + 16, bottom: 0 }}
          />
        </>
      )}

      {/* Floating Panel */}
      <div ref={panelRef} className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999] flex items-start">

        {/* Vertical Tab Button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close accessibility panel' : 'Open accessibility panel'}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="relative bg-[#6A0DAD] hover:bg-purple-800 text-white rounded-r-2xl py-6 px-2.5 shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 flex flex-col items-center gap-2"
        >
          {/* Active count badge */}
          {activeCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-yellow-400 text-black text-[10px] font-black rounded-full flex items-center justify-center shadow">
              {activeCount}
            </span>
          )}
          <span className="text-xl">♿</span>
          <span
            className="text-[10px] font-black tracking-widest uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Access
          </span>
        </button>

        {/* Panel */}
        <div
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="false"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'w-72 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
        >
          <div className="w-72 bg-white border border-gray-200 rounded-r-2xl shadow-2xl overflow-y-auto max-h-[90vh]">

            {/* Header */}
            <div className="px-4 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-black text-gray-900 text-sm tracking-tight">Accessibility Tools</h2>
                <p className="text-[11px] text-gray-400 mt-0.5">Your settings save automatically</p>
              </div>
              {activeCount > 0 && (
                <button
                  onClick={reset}
                  className="text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200 transition-all"
                >
                  Reset ({activeCount})
                </button>
              )}
            </div>

            <div className="p-4 space-y-4">

              {/* Skip to content */}
              <a
                href="#main-content"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-xs font-bold bg-purple-700 text-white hover:bg-purple-800 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                ⌨️ Skip to main content
              </a>

              {/* Font size */}
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2">Text Size</p>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-2 border border-gray-200">
                  <button
                    onClick={() => setFontSize(s => Math.max(80, s - 10))}
                    disabled={fontSize <= 80}
                    aria-label="Decrease text size"
                    className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 font-black text-sm hover:bg-purple-50 hover:border-purple-300 disabled:opacity-40 transition-all shadow-sm"
                  >
                    A−
                  </button>
                  <div className="flex-1 text-center">
                    <span className="font-black text-[#6A0DAD] text-sm">{fontSize}%</span>
                    <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-[#6A0DAD] rounded-full transition-all duration-300"
                        style={{ width: `${((fontSize - 80) / 70) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setFontSize(s => Math.min(150, s + 10))}
                    disabled={fontSize >= 150}
                    aria-label="Increase text size"
                    className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 font-black text-sm hover:bg-purple-50 hover:border-purple-300 disabled:opacity-40 transition-all shadow-sm"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Vision */}
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2">Vision</p>
                <div className="space-y-1.5">
                  <ToggleBtn emoji="🌗" label="High Contrast" active={highContrast} onClick={() => setHighContrast(v => !v)} />
                  <ToggleBtn emoji="⬜" label="Grayscale" active={grayscale} onClick={() => setGrayscale(v => !v)} />
                  <ToggleBtn emoji="🖼️" label="Hide Images" active={hideImages} onClick={() => setHideImages(v => !v)} />
                </div>
              </div>

              {/* Reading */}
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-wider mb-2">Reading</p>
                <div className="space-y-1.5">
                  <ToggleBtn emoji="🅰️" label="Dyslexia Friendly Font" active={dyslexiaFont} onClick={() => setDyslexiaFont(v => !v)} />
                  <ToggleBtn emoji="↔️" label="Increase Text Spacing" active={textSpacing} onClick={() => setTextSpacing(v => !v)} />
                  <ToggleBtn emoji="🔗" label="Highlight Links" active={highlightLinks} onClick={() => setHighlightLinks(v => !v)} />
                  <ToggleBtn emoji="📏" label="Reading Guide" active={readingGuide} onClick={() => setReadingGuide(v => !v)} />
                </div>
              </div>

              {/* Info */}
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
                <p className="text-[11px] text-purple-700 font-semibold leading-relaxed">
                  Need more help? Call us on <strong>1300 DYAR</strong> or email <strong>info@dyar.com.au</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityToolbar;
