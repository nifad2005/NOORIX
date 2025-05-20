
import clientPromise from "@/lib/Database/mongo";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
    console.log("Requesting...")
    try{
        const reqData = await req.json()
        console.log(reqData)
        const client = await clientPromise
        const db = client.db("NOORIX")
        const data = await db.collection("galary").insertOne(reqData)
        return NextResponse.json(data,{status:200})
    }catch(err){
        console.log("Error ->Add Galary", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}

export const GET = async()=>{
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const data = await db.collection("galary").find({}).toArray()
        return NextResponse.json(data,{status:200})
    }catch(err){
        console.log("Error ->Add Galary", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}