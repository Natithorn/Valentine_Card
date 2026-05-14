import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'flower';
  color: string;
  rotation: number;
  drift: number;
}

const FLOWER_COLORS = ['#ff6b9d', '#ff9ec4', '#ffb3c6', '#ff4d6d', '#ff8fa3', '#ffccd5', '#ffd6e0'];
const HEART_COLORS = ['#ff4d6d', '#ff6b9d', '#c9184a', '#ff8fa3', '#ff0a54'];

function FlowerSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={20 + 9 * Math.cos((angle * Math.PI) / 180)}
          cy={20 + 9 * Math.sin((angle * Math.PI) / 180)}
          rx="6"
          ry="4"
          fill={color}
          opacity="0.9"
          transform={`rotate(${angle}, ${20 + 9 * Math.cos((angle * Math.PI) / 180)}, ${20 + 9 * Math.sin((angle * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="20" cy="20" r="5" fill="#ffe0ec" />
    </svg>
  );
}

export default function Celebration() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: 20 + Math.random() * 30,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      type: Math.random() > 0.45 ? 'flower' : 'heart',
      color:
        Math.random() > 0.45
          ? FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)]
          : HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 120,
    }));
    setParticles(generated);

    const timer = setTimeout(() => setShowMessage(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="celebration-overlay">
      {particles.map((p) => (
        <div
          key={p.id}
          className="falling-particle"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
              '--drift': `${p.drift}px`,
              '--rotation': `${p.rotation}deg`,
            } as React.CSSProperties
          }
        >
          {p.type === 'heart' ? (
            <Heart
              className="w-full h-full"
              style={{ color: p.color, fill: p.color }}
            />
          ) : (
            <FlowerSVG color={p.color} />
          )}
        </div>
      ))}

      <div className={`celebration-message ${showMessage ? 'show' : ''}`}>
        <div className="celebration-heart-ring">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="ring-heart"
              style={{
                '--angle': `${i * 45}deg`,
                animationDelay: `${i * 0.1}s`,
              } as React.CSSProperties}
              size={28}
            />
          ))}
          <div className="celebration-center-heart">
            <Heart size={72} className="text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>
        <h1 className="celebration-title">
          I Love You!
        </h1>
        <p className="celebration-subtitle">Happy Valentine's Day</p>
      </div>
    </div>
  );
}
