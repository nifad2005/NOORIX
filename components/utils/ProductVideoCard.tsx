import React from 'react'

function ProductVideoCard({video}:{
    video:string
}) {
    const videoId = video.split("v=")[1].split("&")[0];
  return (
     <div className="aspect-video w-full  mb-2">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=0&rel=0&showinfo=0`}
                title="Product Video"
                className="w-full h-full rounded border"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
  )
}

export default ProductVideoCard