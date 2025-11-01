export function HospitalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22V8" />
      <path d="m7 8 5-5 5 5" />
      <path d="M17 8h-2a2 2 0 0 0-2 2v10" />
      <path d="M2 22h20" />
    </svg>
  );
}
