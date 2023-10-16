import axios from 'axios'

import { NextRequest, NextResponse } from 'next/server'



export async function GET() {
 try {
 const config = {
 method: 'GET',
 maxBodyLength: Infinity,
 url: 'https://api.clashroyale.com/v1/cards',
 headers: {
 Authorization:
 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBkOTgwYmZkLTU1YWQtNGIwMi05NmM5LTBhZThlNDU5YjcyNiIsImlhdCI6MTY5NzQ3Njk4MCwic3ViIjoiZGV2ZWxvcGVyLzM4NmU2MWY4LWYyMGMtNTViNS00ODc4LTBjNDlhZWI4ZmI1OCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODkuNDYuODQuMjA1Il0sInR5cGUiOiJjbGllbnQifV19.4jSJUMrFRIGAHjwwcK-8mCuPNZxMeNezY8bDAx4qdgFRdpygpBmSeGhXs961_sFxtGLqnxr4sISF6gPfC1amUg',
 'Content-Type': 'application/json'
 }
 }

 const response = await axios(config)

 return NextResponse.json(response.data)
 } catch (error) {
    console.log('[ORDER_GET]', error)
    return new NextResponse('Erro interno do servidor!', { status: 500 })
    }
   }