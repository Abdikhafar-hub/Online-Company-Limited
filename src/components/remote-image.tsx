"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function shouldBypassOptimization(source?: string) {
  if (!source) return false;

  try {
    const { hostname } = new URL(source);
    return hostname === "www.phoneplacekenya.com";
  } catch {
    return false;
  }
}

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
  src?: string | string[];
  alt: string;
  fallbackLabel: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}) {
  const sources = (Array.isArray(src) ? src : [src]).filter(Boolean) as string[];
  const [sourceIndex, setSourceIndex] = useState(0);
  const activeSrc = sources[sourceIndex];
  const showFallback = !activeSrc;
  const unoptimized = shouldBypassOptimization(activeSrc);

  useEffect(() => {
    setSourceIndex(0);
  }, [src]);

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
          onError={() => setSourceIndex((current) => current + 1)}
          priority={priority}
          sizes={sizes}
          src={activeSrc}
          unoptimized={unoptimized}
        />
      )}
      {children}
    </div>
  );
}
