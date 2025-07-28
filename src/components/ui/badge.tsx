import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export function Badge({ children, color = "bg-blue-100 text-blue-800", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${color}`}
      {...props}
    >
      {children}
    </span>
  );
}
