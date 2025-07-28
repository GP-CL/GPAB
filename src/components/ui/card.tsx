import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export function Card({ children, ...props }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-md" {...props}>
      {children}
    </div>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export function CardContent({ children, ...props }: CardContentProps) {
  return <div {...props}>{children}</div>;
}
