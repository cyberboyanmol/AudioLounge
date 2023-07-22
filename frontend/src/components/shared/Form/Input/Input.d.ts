import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  type: string;
  icon: React.ReactNode;
}

export { InputProps };
