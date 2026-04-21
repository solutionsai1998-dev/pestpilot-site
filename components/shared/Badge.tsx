import clsx from "clsx";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-small font-medium text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
