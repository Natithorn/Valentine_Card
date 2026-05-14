import { useState } from 'react';
import ValentineCard from './ValentineCard';

interface EnvelopeProps {
  onYes: () => void;
}

export default function Envelope({ onYes }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => setShowCard(true), 800);
  };

  return (
    <div className="flex flex-col items-center justify-center" onClick={handleOpen}>
      <div className={`envelope-wrapper ${isOpen ? 'opened' : ''}`}>
        <div className="envelope">
          <div className={`envelope-flap ${isOpen ? 'open' : ''}`}>
            <div className="flap-triangle" />
          </div>
          <div className="envelope-body">
            <div className="envelope-left-fold" />
            <div className="envelope-right-fold" />
            <div className="envelope-bottom-fold" />
            <div className={`envelope-card-container ${showCard ? 'slide-up' : ''}`}>
              {showCard && <ValentineCard onYes={onYes} />}
            </div>
          </div>
        </div>
        {!isOpen && (
          <p className="mt-8 text-pink-400 text-sm font-medium animate-pulse tracking-widest uppercase">
            Click to open
          </p>
        )}
      </div>
    </div>
  );
}
