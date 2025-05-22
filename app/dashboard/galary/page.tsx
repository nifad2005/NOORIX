"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { useSelector } from "react-redux";

export default function Galary() {
  // Hooks
  const user = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  // Handle Form Change
  //Handle Data change
  const handleFormChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus("");
    if (e.target.name == "image") {
      const file = e.target.files?.[0];
      if (file) {
        const options = {
          maxSizeMB: 0.06,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const smallImage = await imageCompression(file, options);
        setImageFile(smallImage);
        const reader = new FileReader();
        reader.readAsDataURL(smallImage);
        reader.onloadend = () => {
          setPreview(reader.result as string);
          console.log(reader.result);
          setFormData({
            ...formData,
            [e.target.name]: reader.result,
          });
          return;
        };
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("User -galary", user.role !== "master");
  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      setStatus("Please select an image");
      return;
    }

    try {
      setLoading(true);
      setStatus("Uploading to gallery...🔃");

      // Create form data

      console.log("From data - post", formData);
      const response = await fetch("/api/gallery", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          userImage: user?.image,
          userName: user?.name,
          userEmail: user?.email,
        }),
      });

      const data = await response.json();
      if (data) {
        setStatus(data.message);
        setFormData({});
        setPreview("");
        setImageFile(null);
      }
    } catch (err) {
      console.log("Error -> Add Gallery Item", err);
      setStatus("Error uploading image");
    } finally {
      setLoading(false);
    }
  };
  if (user.role !== "Master" && user.role !== "Admin")
    return (
      <div className="flex justify-center items-center h-screen">
        You are not authorized to view this page.
      </div>
    );
  return (
    <div className="max-w-xl mx-auto mt-16 bg-white rounded-lg shadow p-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        Add New Gallery Item
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Image</label>
          <input
            type="file"
            name="image"
            required
            accept="image/*"
            onChange={handleFormChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {preview && (
            <div className="mt-4">
              <Image
                src={preview}
                height={200}
                width={200}
                alt="Preview"
                className="max-h-48 rounded-lg object-contain"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            required
            onChange={handleFormChange}
            value={formData?.title || ""}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={handleFormChange}
            value={formData?.date || ""}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {status && <div className="text-blue-600">{status}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Add to Gallery"}
        </button>
      </form>
    </div>
  );
}
