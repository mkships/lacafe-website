type BreakfastIconProps = {
  size?: number;
};

export default function BreakfastIcon({ size = 28 }: BreakfastIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="13" cy="19" r="9.5" />
      <path d="m19 11.5 7-7a2.1 2.1 0 0 1 3 3l-7 7" />
      <path d="M8 15.5c-2 1-2.5 4-.5 5.5-.5 2.5 2.5 4 4.5 2.5 2 1.5 5 .5 5-2 2.5-1 2.5-4 .5-5.5-1-2.5-4-3-5.5-1.5-1.5-1-3-.5-4 1Z" />
      <circle cx="13" cy="19" r="2.25" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}
