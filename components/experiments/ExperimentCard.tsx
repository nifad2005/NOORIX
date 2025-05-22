import React, { useEffect, useState } from 'react'
import Loading from '../utils/Loading';
import Link from 'next/link';

interface ExperimentCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  video?: string;
  category?: string;
}

export default function ExperimentCard({
  author,
  date,
  title,
  description,
  video,
  category
}: ExperimentCardProps) {
    const [videoId, setVideoId] = useState<string | null>(null)
    useEffect(() => {
        if(video){
            setVideoId(video.split("v=")[1].split("&")[0]);
        }
    }, [video])
    if(!video) return <Loading/>
 return (
  <div className="bg-white  w-[500px] h-fit rounded-lg shadow p-4 mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-blue-600 font-medium text-sm">{author}</span>
      <span className="text-gray-400 text-xs">{date ? new Date(date).toLocaleDateString() : ''}</span>
    </div>
    <h1 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h1>
    {category && (
      <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-1">{category}</span>
    )}
    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
    {video && (
      <div className="aspect-video w-full mb-2">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=0&rel=0&showinfo=0`}
          title="Experiment Video"
          className="w-full aspect-video rounded border"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
    <div className="flex flex-wrap gap-1">
      <Link href={`/experiments/${title}`} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Read More</Link>
    </div>
  </div>
)
}