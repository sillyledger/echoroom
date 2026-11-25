import { useId } from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

// Echo Room mark: three door frames inside each other on a rounded tile.
export default function Logo({ size = 24, className = "logo-mark" }: LogoProps) {
  const clipId = `er-tile-${useId().replace(/:/g, "")}`;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="120" height="120" rx="20" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="120" height="120" fill="#242426" />
        <rect x="18" y="22" width="84" height="80" fill="#F0997B" opacity="0.3" />
        <rect x="32" y="38" width="56" height="64" fill="#F0997B" opacity="0.6" />
        <rect x="46" y="54" width="28" height="48" fill="#F0997B" />
      </g>
    </svg>
  );
}
