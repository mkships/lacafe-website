type SparklesIconProps = {
  size?: number;
  className?: string;
};

export default function SparklesIcon({ size = 13, className }: SparklesIconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 3 1.8 4.2L14 9l-4.2 1.8L8 15l-1.8-4.2L2 9l4.2-1.8L8 3Z" />
      <path d="m15.5 1 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}
