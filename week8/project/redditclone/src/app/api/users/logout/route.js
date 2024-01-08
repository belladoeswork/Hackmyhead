
// import { cookies } from "next/headers.js";
// import { NextResponse } from "next/server.js";
// import jwt from "jsonwebtoken";


// export async function POST(request) {
  

//   try {
//     const cookieStore = cookies();

//     cookieStore.delete("token");

//     return ( 

//       NextResponse.json({ success: true })
//     );
  
//   } catch(error) {
//     console.error("Error verifying token:", error);
//   }
  
// }




// import { NextResponse } from "next/server.js";

// import { cookies } from "next/headers.js";

// export async function POST() {
  
//   try {
//     const cookieStore = cookies();

//     cookieStore.delete("token");

//     console.log("Logout successful");

//     return NextResponse.json({
//       success: true,
//     });

//   } catch (error) {

//     console.error("Logout error:", error.message);

//     return NextResponse.json({
//       success: false,
//       error: error.message,
//     });
//   }
// }


// Logout/route.js

import { NextResponse } from "next/server.js";
import { cookies } from "next/headers.js";

export async function POST() {
  try {
    const cookieStore = cookies();
    console.log("Token before logout:", cookieStore.get("token"));


    // Clear the token cookie
    cookieStore.delete("token");
    console.log("Token after logout:", cookieStore.get("token"));


    console.log("Logout successful");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Logout error:", error.message);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
