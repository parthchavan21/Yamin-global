"use client";

import { useRef } from "react";

interface BubbleButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function BubbleButton({ href, children, className = "" }: BubbleButtonProps) {
  const circleRef = useRef<HTMLSpanElement>(null);

  function handleMouseEnter() {
    if (!circleRef.current) return;
    circleRef.current.style.transition = "transform 0.8s cubic-bezier(0.33, 0, 0.66, 0)";
    circleRef.current.style.transform = "translateX(-50%) scale(10)";
  }
  function handleMouseLeave() {
    if (!circleRef.current) return;
    circleRef.current.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    circleRef.current.style.transform = "translateX(-50%) scale(0)";
  }

  const inner = (
    <>
      {/* expanding circle */}
      <span
        ref={circleRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          width: "100%",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "color-mix(in srgb, var(--surface-brand) 100%, black 20%)",
          transform: "translateX(-50%) scale(0)",
          transition: "transform 0.8s cubic-bezier(0.33, 0, 0.66, 0)",
          pointerEvents: "none",
          zIndex: 0,
          filter: "brightness(0.78)",
        }}
      />
      {/* label */}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </>
  );

  const sharedStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 44,
    paddingInline: 20,
    borderRadius: "var(--radius-sm)",
    background: "var(--surface-brand)",
    color: "var(--content-inverted)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "var(--font-sans)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={sharedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      className={className}
      style={sharedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </button>
  );
}
