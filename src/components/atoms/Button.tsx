"use client";

import React, { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`text-center px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
}
