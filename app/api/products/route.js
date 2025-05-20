import clientPromise from "@/lib/Database/mongo";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    const data = await req.json()
    console.log(data)
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        await db.collection("products").insertOne({...data,booking:[]})
        console.log("Product-Added-Successfully✅")
        return NextResponse.json({message:"Product-Added-Successfully✅"},{status:200})
    }catch(err){
        console.log("Error ->Add Prodcut", err)
        return NextResponse.json({message:err.message},{status:500})
    }

    
}

export const GET = async()=>{
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const data = await db.collection("products").find({}).toArray()
        return NextResponse.json(data,{status:200})
    }catch(err){
        console.log("Error ->Add Prodcut", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}