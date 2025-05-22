import { NextResponse } from "next/server"
import clientPromise from "@/lib/Database/mongo"

export const POST = async (req) => {
    const data = await req.json()
    try {
        const client = await clientPromise
        const db = client.db("NOORIX")
        const user = await db.collection("extrainfo").findOne({ email: data.email }) 
        console.log("Finding User",user)
        if (user) {
            console.log("User Already Exists❗")
            return NextResponse.json({ user }, { status: 400 })
        }else{
            const newUser = await db.collection("extrainfo").insertOne({
                ...data,
                role : "User"
            })
            console.log("User Added Successfully✅")
            NextResponse.json({ user:newUser }, { status: 200 })
        }
        NextResponse.json({ message: "User Added Successfully✅" }, { status: 200 })
    } catch (err) {
        console.log("Error ->Add User", err)
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}

