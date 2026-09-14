import React from 'react';

/**
 * Clearly marked neutral placeholder component for partner logos.
 * Accepts real logo asset path later without changing layout or wrapping code.
 */
export function PartnerLogoPlaceholder({ name, sector, placeholderLabel = 'Partner Logo Placeholder' }) {
  // Extract initials for fallback display badge
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
    : 'P';

  return (
    <div className="w-full h-32 bg-surface-white border border-border rounded-card p-4 flex flex-col items-center justify-center text-center transition-colors hover:border-gold/50 shadow-subtle group">
      <div className="w-12 h-12 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy font-bold text-lg mb-2 group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
        {initials}
      </div>
      <span className="text-sm font-semibold text-text-dark group-hover:text-navy transition-colors">
        {name}
      </span>
      {sector && (
        <span className="text-xs text-text-muted mt-1">
          {sector}
        </span>
      )}
      <span className="mt-2 text-[10px] uppercase tracking-wider text-text-muted/60 bg-surface-offwhite px-2 py-0.5 rounded-sm border border-border/50">
        {placeholderLabel}
      </span>
    </div>
  );
}
