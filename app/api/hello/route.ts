import { NextResponse } from "next/server"


export async function GET() {
    const data = {
        message: 'Hello next.js!',    
        contents:
        '가나다라마바사'
        
        
    }
    return NextResponse.json(data)
}
