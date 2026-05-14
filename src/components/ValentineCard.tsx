import { useState, useRef, useCallback } from 'react';
import { Heart } from 'lucide-react';

interface ValentineCardProps {
  onYes: () => void;
}

export default function ValentineCard({ onYes }: ValentineCardProps) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const noMessages = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Last chance!',
    'Please?',
    'Pretty please?',
  ];

  const handleNoHover = useCallback(() => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoPos({ x: randomX, y: randomY });
    setNoClicks((prev) => prev + 1);
  }, []);

  return (
    <div className="valentine-card" onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="text-rose-400 fill-rose-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
              size={24}
            />
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-rose-600 text-center leading-snug">
          Will you be my<br />Valentine?
        </h2>

        <p className="text-rose-400 text-sm text-center italic">
          {noClicks === 0
            ? 'Choose wisely...'
            : noClicks < 3
            ? 'I knew you would hesitate!'
            : 'Just say yes already!'}
        </p>

        <div className="flex gap-6 items-center justify-center w-full">
          <button
            onClick={onYes}
            className="yes-button"
          >
            <Heart size={16} className="fill-white inline mr-1" />
            Yes!
          </button>

          <div className="relative" style={{ width: 'clamp(80px, 20vw, 120px)', height: 'clamp(30px, 6vw, 44px)' }}>
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              className="no-button"
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                left: '0',
                top: '0',
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleNoHover();
              }}
            >
              {noMessages[Math.min(noClicks, noMessages.length - 1)]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
