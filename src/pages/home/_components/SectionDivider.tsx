type DividerVariant = "wave" | "zigzag" | "curve" | "pulse" | "slant" | "dots";

function WaveDivider({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-[50px] sm:h-[70px] md:h-[100px] ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveDivGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="30%" stopColor="var(--primary)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="var(--ring)" stopOpacity="1" />
          <stop offset="70%" stopColor="var(--primary)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 60 C360 20, 720 90, 1080 40 C1260 20, 1380 55, 1440 45"
        stroke="url(#waveDivGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 70 C400 35, 800 95, 1200 50 C1350 30, 1400 60, 1440 55"
        stroke="url(#waveDivGrad)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="none"
      />
    </svg>
  );
}

function ZigzagDivider() {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[40px] sm:h-[60px] md:h-[80px]"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="zigzagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--ring)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--ring)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="75%" stopColor="var(--ring)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--ring)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L80 20 L160 60 L240 20 L320 60 L400 20 L480 60 L560 20 L640 60 L720 20 L800 60 L880 20 L960 60 L1040 20 L1120 60 L1200 20 L1280 60 L1360 20 L1440 40"
        stroke="url(#zigzagGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 50 L80 30 L160 70 L240 30 L320 70 L400 30 L480 70 L560 30 L640 70 L720 30 L800 70 L880 30 L960 70 L1040 30 L1120 70 L1200 30 L1280 70 L1360 30 L1440 50"
        stroke="url(#zigzagGrad)"
        strokeWidth="1"
        strokeOpacity="0.2"
        fill="none"
      />
    </svg>
  );
}

function CurveDivider() {
  return (
    <svg
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[50px] sm:h-[70px] md:h-[100px]"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="20%" stopColor="var(--primary)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="var(--ring)" stopOpacity="0.8" />
          <stop offset="80%" stopColor="var(--primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 80 Q360 10, 720 50 Q1080 90, 1440 20"
        stroke="url(#curveGrad)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M0 85 Q360 20, 720 55 Q1080 90, 1440 30"
        stroke="url(#curveGrad)"
        strokeWidth="1"
        strokeOpacity="0.25"
        fill="none"
      />
    </svg>
  );
}

function PulseDivider() {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[40px] sm:h-[60px] md:h-[80px]"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="30%" stopColor="var(--primary)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="var(--ring)" stopOpacity="1" />
          <stop offset="70%" stopColor="var(--primary)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Heartbeat/EKG line */}
      <path
        d="M0 40 L400 40 L450 40 L470 15 L490 65 L510 10 L530 70 L550 35 L570 40 L1040 40 L1440 40"
        stroke="url(#pulseGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Glow echo */}
      <path
        d="M0 40 L400 40 L450 40 L470 15 L490 65 L510 10 L530 70 L550 35 L570 40 L1040 40 L1440 40"
        stroke="url(#pulseGrad)"
        strokeWidth="6"
        strokeOpacity="0.15"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SlantDivider() {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[40px] sm:h-[60px] md:h-[80px]"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="slantGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--ring)" stopOpacity="0" />
          <stop offset="20%" stopColor="var(--ring)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="80%" stopColor="var(--ring)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--ring)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 L1440 10"
        stroke="url(#slantGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 75 L1440 15"
        stroke="url(#slantGrad)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="none"
      />
      <path
        d="M0 65 L1440 5"
        stroke="url(#slantGrad)"
        strokeWidth="1"
        strokeOpacity="0.15"
        fill="none"
      />
    </svg>
  );
}

function DotsDivider() {
  return (
    <svg
      viewBox="0 0 1440 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[30px] sm:h-[45px] md:h-[60px]"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="dotGrad">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--ring)" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      {/* Center line of dots fading from center */}
      {Array.from({ length: 29 }).map((_, i) => {
        const x = (i + 1) * 50;
        const distFromCenter = Math.abs(x - 720) / 720;
        const opacity = Math.max(0.1, 1 - distFromCenter * 1.2);
        const radius = 2.5 - distFromCenter * 1.5;
        return (
          <circle
            key={i}
            cx={x}
            cy={30}
            r={Math.max(1, radius)}
            fill="url(#dotGrad)"
            opacity={opacity}
          />
        );
      })}
      {/* Horizontal guide line */}
      <line
        x1="200"
        y1="30"
        x2="1240"
        y2="30"
        stroke="var(--primary)"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />
    </svg>
  );
}

export default function SectionDivider({ variant = "wave", flip }: { variant?: DividerVariant; flip?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      {variant === "wave" && <WaveDivider flip={flip} />}
      {variant === "zigzag" && <ZigzagDivider />}
      {variant === "curve" && <CurveDivider />}
      {variant === "pulse" && <PulseDivider />}
      {variant === "slant" && <SlantDivider />}
      {variant === "dots" && <DotsDivider />}
    </div>
  );
}
