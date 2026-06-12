"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function RemoteImage({
  alt,
  children,
  className,
  fallbackLabel,
  imageClassName,
  priority,
  sizes = "100vw",
  src,
}: {
  src?: string;
  alt: string;
  fallbackLabel: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  return (
    <div className={cn("relative overflow-hidden bg-beige", className)}>
      {showFallback ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-[oklch(0.95_0.03_60)] to-brand-red/10" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-x-4 bottom-4 z-10">
            <span className="inline-flex max-w-full rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
              {fallbackLabel}
            </span>
          </div>
        </>
      ) : (
        <Image
          fill
          alt={alt}
          className={cn("object-cover", imageClassName)}
          onError={() => setHasError(true)}
          priority={priority}
          sizes={sizes}
          src={src}
        />
      )}
      {children}
    </div>
  );
}
