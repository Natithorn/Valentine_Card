import { useState } from 'react';
import Envelope from './components/Envelope';
import Celebration from './components/Celebration';
import { Heart } from 'lucide-react';

export default function App() {
  const [celebrated, setCelebrated] = useState(false);

  return (
    <div className="valentine-app">
      <div className="bg-pattern" />

      <header className="valentine-header">
        <Heart className="fill-rose-300 text-rose-300" size={18} />
        <span>Happy Valentine's Day</span>
        <Heart className="fill-rose-300 text-rose-300" size={18} />
      </header>

      <main className="valentine-main">
        {!celebrated ? (
          <Envelope onYes={() => setCelebrated(true)} />
        ) : (
          <Celebration />
        )}
      </main>

      <div className="floating-hearts">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={
              {
                '--x': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 8}s`,
                '--duration': `${6 + Math.random() * 6}s`,
                '--size': `${12 + Math.random() * 20}px`,
                '--opacity': `${0.1 + Math.random() * 0.3}`,
              } as React.CSSProperties
            }
          >
            <Heart
              style={{ width: 'var(--size)', height: 'var(--size)' }}
              className="text-rose-300 fill-rose-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
