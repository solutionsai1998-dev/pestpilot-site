"use client";

import { X } from "lucide-react";
import { useEffect, useId } from "react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  videoUrl?: string;
};

export function VideoModal({
  isOpen,
  onClose,
  title = "PestPilot Demo",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"
}: VideoModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4"
      role="dialog"
    >
      <button
        aria-label="Close video modal"
        className="absolute inset-0"
        onClick={onClose}
        type="button"
      />
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-card bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="m-0 text-h3-mobile text-text" id={titleId}>{title}</h2>
          <button
            aria-label="Close video modal"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="aspect-video w-full bg-black">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={videoUrl}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
