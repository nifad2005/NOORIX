"use client";
import GalleryCard from "@/components/gallery/GalleryCard";
import Loading from "@/components/utils/Loading";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const { data: session } = useSession();
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchGalleryData = async () => {
      const response = await fetch("/api/gallery");
      const data = await response.json();
      setGalleryData(data);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);
  return (
    <div className="min-h-screen xl:w-[70%] mx-auto flex flex-col gap-4 py-8">
      <h1 className="text-3xl font-bold">Gallery of NOORIX.</h1>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {galleryData.map((data: any) => (
              <GalleryCard key={data._id} gallery={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
