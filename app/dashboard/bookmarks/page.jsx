"use client";
import GalleryCard from '@/components/gallery/GalleryCard';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector((state) => state.user);
  const [bookmarks, setBookmarks] = React.useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await fetch(`/api/bookmarks?email=${user.email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch bookmarks');
      }
      const data = await response.json();
      setBookmarks(data);
    };

    fetchBookmarks().catch(error => console.error('Error fetching bookmarks:', error));
  }, [])
  return (
    <div>
      {
        bookmarks.length === 0 ? (
          <p>No bookmarks found.</p>
        ) :
        bookmarks.map((bookmark) => (
          <GalleryCard key={bookmark.id} gallery={bookmark}/>
        ))
      }
    </div>
  )
}
