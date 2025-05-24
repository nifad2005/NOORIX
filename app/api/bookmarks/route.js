import clientPromise from  '@/lib/Database/mongo'
import { NextResponse } from 'next/server'
// This file handles the API route for bookmarks

export const GET = async (req) => {
    try {
        const client = await clientPromise
        const db = client.db('NOORIX')
        const bookmarks = await db.collection('extrainfo').find({
            'email': req.nextUrl.searchParams.get('email')
        }).toArray()
        return NextResponse.json(bookmarks, { status: 200 })
    } catch (error) {
        console.error('Error handling request:', error)
        return new Response('Internal Server Error', { status: 500 })
    }
}



export const POST = async (req) => {
    try {
        const client = await clientPromise
        const db = client.db('NOORIX')
        const data = await req.json()
        console.log('Received data:', {...data})
        const result = await db.collection('extrainfo').updateOne(
            { email: data.userEmail },
            {
                $addToSet:{
                    bookmarks:{
                        ...data
                    }
                }
            }
            
        )
        return NextResponse.json({ message: 'Bookmark added successfully' }, { status: 201 })
    } catch (error) {
        console.error('Error handling request:', error)
        return new Response('Internal Server Error', { status: 500 })
    }
}