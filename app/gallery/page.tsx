"use client";
import GalleryCard from "@/components/gallery/GalleryCard";
import Loading from "@/components/utils/Loading";
import { SetGalleryData } from "@/lib/redux/slices/gallerSlice";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const gallery = useSelector((state :any)=>state.gallery)
  const dispatch = useDispatch()
  //Pagination
  const [paginationCount , setPaginationCount] = useState(0)
  const [noMoreDataOnDB, setNoMoreDataOnDB] = useState(false)
  const [moreLoading, setMoreLoading] = useState(false)

  console.log(paginationCount)
  useEffect(() => {
    setGalleryData(gallery.gallery)
    setPaginationCount(Math.ceil(gallery.gallery.length/10))
    console.log(gallery.gallery)
    if(gallery.length >=1){
      return 
    }
    setLoading(true);
    const fetchGalleryData = async () => {
      const response = await fetch(`/api/gallery?page=${paginationCount}`);
      const data = await response.json();
    
      if(data.length < 10){
        setNoMoreDataOnDB(true)
      }
      dispatch(SetGalleryData(data))
      setLoading(false);
    };
    if(gallery.gallery.length ==0){
      fetchGalleryData();
    }else{
      setGalleryData(gallery.gallery)
      setLoading(false)
    }
  }, [gallery.gallery]);

  const handelLaodMore = async () => {
    setMoreLoading(true)
    const response = await fetch(`/api/gallery/?page=${paginationCount}`);
    const data = await response.json();
    if(data.length < 10){
      setNoMoreDataOnDB(true)
    }
    dispatch(SetGalleryData([...galleryData, ...data]))
    setMoreLoading(false);
  };

  return (
    <div className="min-h-screen md:mx-10 mx-auto flex flex-col gap-4 py-8">
      <h1 className="text-3xl font-bold">Gallery of NOORIX.</h1>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap">
            {galleryData.map((data: any) => (
              <GalleryCard key={data._id} gallery={data} />
            ))}
          </div>
        )}
      </div>
      {
        galleryData.length > 0 && !noMoreDataOnDB && <button onClick={handelLaodMore} className="px-4 py-2 bg-blue-500 text-xl rounded-2xl hover:bg-blue-600 duration-200">{moreLoading ? "Loading..." : "See More"}</button>
        
      }{
        noMoreDataOnDB && <div className="text-center text-slate-500 text-lg font-medium">No more gallery to show.</div> 
      }
    </div>
  );
}
