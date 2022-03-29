export interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset" | undefined;
  variant: "base" | "alternative";
  onClick?: () => void | null | undefined;
}
