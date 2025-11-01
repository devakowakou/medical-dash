export function StethoscopeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 14v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M8 14v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6" />
      <path d="M4 8V6a2 2 0 0 1 2-2h1" />
      <path d="M18 4a2 2 0 0 1 2 2v2" />
      <circle cx="12" cy="4" r="2" />
    </svg>
  );
}
