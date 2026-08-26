export default function IntelloraLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orbital ring 1 - tilted left */}
      <ellipse
        cx="50"
        cy="55"
        rx="32"
        ry="12"
        transform="rotate(-30 50 55)"
        stroke="url(#ring-gradient-1)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Orbital ring 2 - tilted right */}
      <ellipse
        cx="50"
        cy="55"
        rx="32"
        ry="12"
        transform="rotate(30 50 55)"
        stroke="url(#ring-gradient-2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Central "i" stem */}
      <rect x="46" y="35" width="8" height="40" rx="4" fill="url(#stem-gradient)" />
      {/* Dot on top */}
      <circle cx="50" cy="22" r="8" fill="url(#dot-gradient)" />

      <defs>
        <linearGradient id="ring-gradient-1" x1="20" y1="45" x2="80" y2="65">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="ring-gradient-2" x1="80" y1="45" x2="20" y2="65">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="50%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="stem-gradient" x1="50" y1="35" x2="50" y2="75">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="dot-gradient" x1="50" y1="14" x2="50" y2="30">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
    </svg>
  );
}
