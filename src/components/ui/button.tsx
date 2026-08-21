import React from "react";
import Link, { type LinkProps } from "next/link";

export type ButtonVariant = "primary" | "outline-dark" | "outline-light";

interface BaseButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps | keyof LinkProps> &
  LinkProps & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-mint text-[#08281f] hover:bg-[#5fd1af] hover:shadow-[0_10px_30px_-8px_rgba(77,190,158,0.55)] border border-transparent",
  "outline-dark":
    "border-[1.5px] border-paper/50 text-paper hover:border-paper hover:bg-paper/[0.08]",
  "outline-light":
    "border-[1.5px] border-navy text-navy hover:bg-navy hover:text-paper",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-bold text-sm tracking-[0.01em] px-[26px] py-[14px] rounded-full transition-[background-color,border-color,color,box-shadow,transform] duration-250 ease-out active:scale-[0.97]";

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ variant = "primary", className = "", children, ...props }, ref) {
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className={combinedClassName}
        {...(props as ButtonAsLinkProps)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      type={(props as ButtonAsButtonProps).type || "button"}
      className={combinedClassName}
      {...(props as ButtonAsButtonProps)}
    >
      {children}
    </button>
  );
});
