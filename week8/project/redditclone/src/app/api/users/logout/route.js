
import { cookies } from "next/headers.js";
import { NextResponse } from "next/server.js";

export async function POST(request) {
  
  const cookieStore = cookies(request.headers);

  cookieStore.delete("token");
  
  return ( 

    NextResponse.json({ success: true })
  );
}