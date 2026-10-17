import React, { useState } from "react";

/**
 * Image with a soft shimmer until it has loaded. Falls back to a labeled
 * placeholder when there is no source.
 */
export default function SmartImage({ src, alt, label, className = "", style, ...rest }) {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return (
      <div className={`ph ${className}`} style={style} role="img" aria-label={alt || label}>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div className={`smart-img ${loaded ? "is-loaded" : ""} ${className}`} style={style}>
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} decoding="async" {...rest} />
    </div>
  );
}
