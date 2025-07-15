import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export function VideoPlayer({ src }) {
  const ref = useRef();
  useEffect(() => {
    const player = videojs(ref.current);
    player.src({ src, type: 'application/vnd.apple.mpegurl' });
    return () => player.dispose();
  }, [src]);
  return <video ref={ref} className="video-js vjs-default-skin" />;
}
