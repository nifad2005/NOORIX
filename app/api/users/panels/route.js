import { NextResponse } from "next/server"
import clientPromise from "@/lib/Database/mongo"
export const GET = async()=>{
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const users = await db.collection("extrainfo").find({role:"Admin"}).toArray()
        return NextResponse.json(users,{status:200})
    }catch(err){
        console.log("Error ->Add Prodcut", err)
        return NextResponse.json({message:err.message},{status:500})
    }
}

export const POST = async (req)=>{
    const inputData = await req.json()
    console.log("Data -> ",inputData)
    if(inputData.email === "nifaduzzaman2005@gmail.com"){
        return NextResponse.json({message:"This email is protected to change role.⚠️"},{status:400})
    }
    try{
        const client = await clientPromise
        const db = client.db("NOORIX")
        const findUser = await db.collection("extrainfo").findOne({email:inputData.email})
        if(!findUser){
            return NextResponse.json({message:"User not found❌"},{status:400})
        }
        const findLength = await db.collection("extrainfo").find({role:"Admin"}).toArray()
        if(findLength.length > 5){
            return NextResponse.json({message:"Only 5 admin is allowed❌"},{status:400})
        }
        const data = await db.collection("extrainfo").updateOne({email:inputData.email},{$set:{role:inputData.role}})
        const panels = await db.collection("extrainfo").find({role:"Admin"}).toArray()
        return NextResponse.json({message:"Updated Successfully✅",panels},{status:200})
    }catch(err){
        console.log("Error ->Add Prodcut", err)
        return NextResponse.json({message:"Something went wrong❌"},{status:500})
    }
}