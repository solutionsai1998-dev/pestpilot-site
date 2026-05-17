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
  const centerline = inverse ? "#1B4332" : "#FFFFFF";
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
        d="M32 5C24.4 10.4 17.2 12.5 10 14.2V33.6C10 50.2 25.9 61.8 32 65C38.1 61.8 54 50.2 54 33.6V14.2C46.8 12.5 39.6 10.4 32 5Z"
        fill={interior}
        stroke={primary}
        strokeLinejoin="round"
        strokeWidth="4.2"
      />
      <path
        d="M22 52C33.8 45.2 22 38.1 31 31.6C36.4 27.7 38.7 24.1 39.8 20.6"
        stroke={primary}
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M22 52C33.8 45.2 22 38.1 31 31.6C36.4 27.7 38.7 24.1 39.8 20.6"
        stroke={centerline}
        strokeDasharray="5 6"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        d="M40 9.5C34.7 9.5 30.5 13.5 30.5 18.8C30.5 26.1 40 35 40 35C40 35 49.5 26.1 49.5 18.8C49.5 13.5 45.3 9.5 40 9.5Z"
        fill="#F77F00"
      />
      <circle cx="40" cy="18.7" fill="#FFFFFF" r="3.7" />
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
      <PestPilotMark
        className={clsx("shrink-0", markClassName)}
        height={markHeight}
        inverse={inverse}
        width={markWidth}
      />
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
