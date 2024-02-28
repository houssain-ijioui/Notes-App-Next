import { NextResponse } from "next/server"
import Note from "@/models/note.model"
import "@/utils/connectDB"
import { NextApiRequest, NextApiResponse } from "next"


export async function POST(request: Request) {

    const data = await request.json()

    
    
    return NextResponse.json({
        message: "notes"
    })
}