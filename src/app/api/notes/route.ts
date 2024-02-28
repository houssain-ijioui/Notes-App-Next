import { NextResponse } from "next/server"
import Note from "@/models/note.model"
import { NextApiRequest, NextApiResponse } from "next"
import "@/utils/connectDB"


export async function GET() {
    const notes = await Note.find()
    return NextResponse.json({
        notes
    })
}