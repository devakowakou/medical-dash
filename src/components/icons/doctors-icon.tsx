export function DoctorsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.5 5.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
      <path d="M14 10.5c0-2-1.5-3-3.5-3s-3.5 1-3.5 3" />
      <path d="M14 12.5v5h-5v-5" />
    </svg>
  );
}
