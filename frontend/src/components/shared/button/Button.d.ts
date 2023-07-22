interface ButtonProps {
  btnText?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  btnType?: "primary" | "secondary" | "live";
  className?: string;
  fullWidth?: boolean;
}
export { ButtonProps };
