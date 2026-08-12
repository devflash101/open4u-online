"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import type { FirmReview } from "@/config/firm";

interface ReviewsCarouselProps {
  reviews: FirmReview[];
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-current"
          style={{ color: "var(--attorney-accent)" }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: FirmReview }) {
  return (
    <article
      className="review-marquee-card shrink-0 w-[min(380px,88vw)] md:w-[440px] p-7 border border-[var(--attorney-primary)]/12 bg-[var(--attorney-bg)] flex flex-col select-none"
      style={{ borderLeft: "3px solid var(--attorney-accent)" }}
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={review.image}
          alt=""
          width={52}
          height={52}
          draggable={false}
          className="rounded-full object-cover shrink-0 pointer-events-none"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--attorney-primary)]">{review.author}</p>
          <p className="text-xs text-[var(--attorney-primary)]/50 mt-0.5">{review.context}</p>
          <div className="mt-2">
            <StarRating count={review.rating} />
          </div>
        </div>
      </div>
      <Quote
        className="w-5 h-5 mb-2 opacity-25 shrink-0"
        style={{ color: "var(--attorney-accent)" }}
      />
      <p className="text-[var(--attorney-primary)]/85 leading-relaxed text-sm flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
    </article>
  );
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const stopDrag = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    containerRef.current?.classList.remove("review-marquee-dragging");
    document.body.style.removeProperty("cursor");
    document.body.style.removeProperty("user-select");
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el || e.button !== 0) return;

    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = el.scrollLeft;
    el.classList.add("review-marquee-dragging");
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      moveEvent.preventDefault();
      const delta = moveEvent.pageX - startX.current;
      containerRef.current.scrollLeft = scrollStart.current - delta;
    };

    const onMouseUp = () => {
      stopDrag();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [stopDrag]);

  return (
    <div className="review-marquee relative w-full">
      <div
        className="review-marquee-fade review-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20"
        aria-hidden
      />
      <div
        className="review-marquee-fade review-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20"
        aria-hidden
      />
      <div
        ref={containerRef}
        className="review-marquee-scroll"
        onMouseDown={onMouseDown}
        role="region"
        aria-label="Client reviews — drag to scroll"
      >
        <div className="review-marquee-track flex gap-6 py-2 pl-6 pr-6">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.author}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
