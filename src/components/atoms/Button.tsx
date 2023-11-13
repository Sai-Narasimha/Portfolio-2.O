import React from "react";
import { clsx } from "clsx";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
  textSize?: string;
}
export const Button = ({
  label,
  onClick,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {label}
    </button>
  );
};
