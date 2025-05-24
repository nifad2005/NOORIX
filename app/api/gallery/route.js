
import clientPromise from "@/lib/Database/mongo";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
    console.log("Requesting...")
    try{
        const reqData = await req.json()
        console.log(reqData)
        const client = await clientPromise
        const db = client.db("NOORIX")
        const data = await db.collection("gallery").insertOne({
            ...reqData,
            createdAt : new Date()
        })
        return NextResponse.json(data,{status:200})
    }catch(err){
        console.log("Error ->Add Galary", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}

export const GET = async(req)=>{
    
    const url = new URL(req.url)
    const pageNumber = url.searchParams.get("page")
    console.log("Pagination Number -gallery",pageNumber)
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const data = await db.collection("gallery").find({}).sort({createdAt:-1}).skip(pageNumber*10).limit(10).toArray()
        return NextResponse.json(data,{status:200})
    }catch(err){
        console.log("Error ->Add Galary", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}