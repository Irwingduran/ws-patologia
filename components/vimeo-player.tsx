"use client"

import { useEffect, useRef } from "react"

interface VimeoPlayerProps {
  videoId: string
  title?: string
}

export default function VimeoPlayer({ videoId, title = "Video" }: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Limpiar cualquier script previo
    const existingScript = document.querySelector('script[src*="player.vimeo.com"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://player.vimeo.com/api/player.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title={title}
        suppressHydrationWarning
      />
    </div>
  )
}
