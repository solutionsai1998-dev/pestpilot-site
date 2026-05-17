import clsx from "clsx";

type PestPilotLogoProps = {
  className?: string;
  inverse?: boolean;
  markClassName?: string;
  markHeight?: number;
  markWidth?: number;
  showWordmark?: boolean;
  wordmarkSize?: number;
  wordmarkClassName?: string;
};

export function PestPilotMark({
  className,
  height = 36,
  inverse = false,
  width = 32,
}: {
  className?: string;
  height?: number;
  inverse?: boolean;
  width?: number;
}) {
  const primary = inverse ? "#FFFFFF" : "#1B4332";
  const interior = inverse ? "transparent" : "#FFFFFF";

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={height}
      style={{ display: "block", flex: "0 0 auto", height, width }}
      viewBox="0 0 64 72"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 5.5C24.8 10.3 18.1 12.4 11 14V33.2C11 48.4 25.4 59.4 32 63C38.6 59.4 53 48.4 53 33.2V14C45.9 12.4 39.2 10.3 32 5.5Z"
        fill={interior}
        stroke={primary}
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M22 49C32.5 42.8 22.4 36.9 30.2 31.1C35.4 27.2 36.7 23.7 37.6 19.4"
        stroke={primary}
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M22.3 48.8C32.2 43 23 37.4 30.4 31.8"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M39 9.5C34.2 9.5 30.4 13.2 30.4 18C30.4 24.5 39 32.8 39 32.8C39 32.8 47.6 24.5 47.6 18C47.6 13.2 43.8 9.5 39 9.5Z"
        fill="#F77F00"
      />
      <circle cx="39" cy="18" fill="#FFFFFF" r="3.4" />
    </svg>
  );
}

export function PestPilotLogo({
  className,
  inverse = false,
  markClassName,
  markHeight = 36,
  markWidth = 32,
  showWordmark = true,
  wordmarkSize = 24,
  wordmarkClassName,
}: PestPilotLogoProps) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <PestPilotMark className={clsx("shrink-0", markClassName)} height={markHeight} inverse={inverse} width={markWidth} />
      {showWordmark ? (
        <span
          className={clsx(
            "font-extrabold leading-none",
            inverse ? "text-white" : "text-text",
            wordmarkClassName,
          )}
          style={{ fontSize: wordmarkSize }}
        >
          <span className={inverse ? "text-white" : "text-primary"}>Pest</span>Pilot
        </span>
      ) : null}
    </span>
  );
}
