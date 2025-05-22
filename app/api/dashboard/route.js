import { NextResponse } from "next/server";
import clientPromise from "@/lib/Database/mongo";
export const GET = async()=>{
    
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const experiments = await db.collection("experiments").find({}).toArray()
        const products = await db.collection("products").find({}).toArray()
        const gallery = await db.collection("gallery").find({}).toArray()
        

        const data = {
            experiments: await db.collection("experiments").find({}).toArray().then(res=>res.length),
            products: await db.collection("products").find({}).toArray().then(res=>res.length),
            gallery: await db.collection("gallery").find({}).toArray().then(res=>res.length),
            masters :1,
            admins : await db.collection("extrainfo").find({role:"Admin"}).toArray().then(res=>res.length),
            users : await db.collection("extrainfo").find({role:"User"}).toArray().then(res=>res.length)
        }
        return NextResponse.json({data},{status:200})
    }catch(err){
        console.log("Error ->Add Galary", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}