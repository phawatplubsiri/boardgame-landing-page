import React from "react";

// Button Variants:
// primary: solid warm coral CTA button
// outline: transparent with accent border
// ghost:   no border, subtle hover

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--accent)",
    color: "#ffffff",
    boxShadow: "0 4px 14px var(--shadow)",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--accent)",
    border: "1.5px solid var(--accent)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--text-muted)",
  },
};

const variantHoverClass: Record<ButtonVariant, string> = {
  primary: "hover:brightness-110 active:scale-95",
  outline: "hover:bg-[color:var(--accent-light)] active:scale-95",
  ghost: "hover:text-[color:var(--accent)] active:scale-95",
};

const Button = ({
  variant = "primary",
  children,
  className = "",
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2.5 rounded-xl text-sm font-semibold
        transition-all duration-200 cursor-pointer
        ${variantHoverClass[variant]}
        ${className}
      `}
      style={{ ...variantStyles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
