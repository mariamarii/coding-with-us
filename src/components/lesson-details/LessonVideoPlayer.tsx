'use client';

import { useVideoPlayer } from '@/hooks/useVideoPlayer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SectionVideoPlayerProps {
  videoUrl?: string;
}

export function SectionVideoPlayer({ videoUrl = '/sea.mp4' }: SectionVideoPlayerProps) {
  const { isPlaying, videoRef, handlePlayClick } = useVideoPlayer();

  return (
    <div className="bg-black/50 rounded-lg overflow-hidden aspect-video relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="/vedio.png"
        onPlay={() => {}}
        onPause={() => {}}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button onClick={handlePlayClick} variant="ghost" className="p-0">
          <Image
            src="/vedio.svg"
            alt={isPlaying ? 'Pause Video' : 'Play Video'}
            width={64}
            height={64}
            className={`cursor-pointer ${isPlaying ? 'opacity-50' : ''}`}
          />
        </Button>
      </div>
    </div>
  );
}