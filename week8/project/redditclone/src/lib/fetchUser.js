import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma.js";
import jwt from "jsonwebtoken";

export async function fetchUser() {
    const cookieStore = cookies();
    const userCookie = cookieStore.get("token");

    // const {userId} = jwt.verify(userCookie.value, process.env.JWT_SECRET);

    // const user = prisma.users.findFirst({ where: { id: userId } });
    // delete user.password;

    // return user;

    return userCookie;
    
}