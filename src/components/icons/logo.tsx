export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c6ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M12 2a10 10 0 1 0 10 10"
        stroke="url(#grad1)"
        strokeWidth="2"
        filter="url(#glow)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M10 4.06A10 10 0 0 1 14 4.06"
        stroke="hsl(var(--sidebar-background))"
        strokeWidth="2"
      />
      <path
        d="M4.06 10A10 10 0 0 1 4.06 14"
        stroke="hsl(var(--sidebar-background))"
        strokeWidth="2"
      />
      <path
        d="M20 10A10 10 0 0 1 20 14"
        stroke="hsl(var(--sidebar-background))"
        strokeWidth="2"
      />
    </svg>
  );
}
