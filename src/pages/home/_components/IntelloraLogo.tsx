import { useId } from "react";

// Infinity-ribbon mark from the Intellora brand logo. Same geometry as public/logo.svg.
export default function IntelloraLogo({ className = "w-10 h-10" }: { className?: string }) {
  // Unique gradient ids so several logos on one page don't collide
  const id = useId().replace(/:/g, "");
  const blue = `${id}-blue`;
  const gold = `${id}-gold`;
  const dot = `${id}-dot`;

  return (
    <svg
      viewBox="12 6 98 82"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Intellora logo"
    >
      <defs>
        <linearGradient id={blue} x1="20" y1="80" x2="104" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1e3a8a" />
          <stop offset="0.45" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id={gold} x1="22" y1="36" x2="100" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d99a06" />
          <stop offset="0.5" stopColor="#fde047" />
          <stop offset="1" stopColor="#e3a008" />
        </linearGradient>
        <radialGradient id={dot} cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="0.55" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e40af" />
        </radialGradient>
      </defs>
      {/* Blue ribbon: stem of the "i", rising diagonal, top and right of the loop */}
      <path
        d="M23 46 V68 C23 73.5 27 77 32 77 C46 77 62 35 80 35 A21 21 0 0 1 94.85 70.85"
        stroke={`url(#${blue})`}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Gold ribbon: bottom of the loop and the falling diagonal, crossing over the blue */}
      <path
        d="M94.85 70.85 A21 21 0 0 1 80 77 C62 77 46 35 32 35 C27 35 23 38.5 23 46"
        stroke={`url(#${gold})`}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Dot of the "i" */}
      <circle cx="34" cy="17" r="8.5" fill={`url(#${dot})`} />
    </svg>
  );
}

// "INTELLORA" wordmark set like the brand logo: wide-tracked Montserrat
export function IntelloraWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-brand font-bold uppercase tracking-[0.22em] text-foreground ${className}`}>
      Intellora
    </span>
  );
}
