"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
        // Hooks

  // Data Will Be Used.
  const { data: session } = useSession();
  const user = useSelector((state: any) => state.user);

  const [categories, setCategories] = useState<any>([])
  const [status, setStatus] = useState({message:"",type:""})
  // Add Experiment Logic States
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFromData ] = useState<any>({})
  // New Category Logic States 
  const [addCategory,setAddCategory] = useState<boolean>(false)
  const [categoryText,setCategoryText] = useState("")
  
  // Status
  
  
        // Functions Here   
  //Handle Form Change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement |HTMLSelectElement >) => {
    setStatus({message:"",type:""})
    if(e.target.name == "category" && e.target.value == "add-category"){ 
      setStatus({message:"Adding New Category...🔃",type:"category"})
      setAddCategory(true)
      return
    }
    console.log(e.target.value)
    e.preventDefault();
    setFromData({
      author: session?.user?.name,
      email: session?.user?.email,
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  // Handle Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try{
      setLoading(true)
      setStatus({message:"Adding New Experiment...🔃",type:"form"})
      const response = await fetch("/api/experiments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({...formData})
      })
      const data = await response.json()
      if(data){
        setStatus({message:data.message,type:"form"})
        setLoading(false)
      }
    }catch(err){
      console.log("Error -> Add Experiment",err)
    }

  }


  //Handle Add Category
  const handleAddCategory = () => {
    setCategories([...categories,categoryText])
    setStatus({message:"New Cateogry Added✅ Check On Dropdown.",type:"category"})
    setAddCategory(false)
    setCategoryText("")
  }


  if (user.role !== "Master" && user.role !== "Admin")  
    return (
      <div className="flex justify-center items-center h-screen">
        You are not authorized to view this page.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white rounded-lg shadow p-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Add New Experiment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
       
        {/* Name,Email,Title,Category,Description Input */}
        <>
        {/* // Author Name Input  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Author Name
          </label>
          <input
            type="text"
            name="author"
            value={session?.user?.name as string}
            readOnly
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter author name"
            />
        </div>

        {/* // Author Eamil Input  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Author Eamil
          </label>
          <input
            type="text"
            name="author"
            readOnly
            value={session?.user?.email as string}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter author name"
            />
        </div>

        {/* //  Title Input  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
          required
          type="text"
          name="title"
          onChange={handleFormChange}
          value={formData?.title ?? ""}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Experiment title"
          />
        </div>

        {/* // Experiment Description Input  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            required
            name="description"
            rows={4}
            onChange={handleFormChange}
            value={formData?.description ?? ""}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Experiment description"
            ></textarea>
        </div>

        </>

        {/* // Experiment Catregory Input  */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Catregory</label>
          <select 
            defaultValue={"others"}
            onChange={handleFormChange} 
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="category" id="category">
            <option value="others"  disabled>Select Category</option>
            {
              categories?.map((category:string,index:number)=><option key={index} value={category}>{category}</option>)
            }
            <option value={'add-category'} className="text-blue-600">Add New</option>
          </select>
          {
            status.type == "category" &&(<p className="text-green-600">{status.message}</p>)
          }
          {
            addCategory &&(<div>
              <input
              onChange={(e)=>setCategoryText(e.target.value)}
              value={categoryText}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"  type="text" />
              <button onClick={handleAddCategory} className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add Category</button>
            </div>
            )
          }
        </div>



        {/* Video Link Input*/}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Experiment Video Link
          </label>
          <input
            required
            type="text"
            name="video"
            onChange={handleFormChange}
            value={formData?.video ?? ""}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter author name"
            />
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            onChange={handleFormChange}
            value={formData?.date ?? ""}
            required
            type="date"
            name="date"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

        {
          status?.type === "form" &&<div>
            {status.message}
          </div>
        }

        {/* Submit button  */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          {loading? <div className="">Loading...</div>:<div>Add Experiment</div>}
        </button>
      </form>
    </div>
  );
}
