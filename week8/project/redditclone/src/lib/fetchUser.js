"use server";

import { cookies } from "next/headers.js";
import { prisma } from "@/lib/prisma.js";
import jwt from "jsonwebtoken";

export async function fetchUser() {

    try {

        const cookieStore = cookies();
        const userCookie = cookieStore.get("token");


        if (!userCookie) {
            console.error("Token not found in cookies.");
            return {};
        }
          // token valid?
        const { userId } = jwt.verify(userCookie.value, process.env.JWT_SECRET);


        const user = await prisma.users.findFirst({ where: { id: userId } });

        delete user.password;

        return user;

    } catch (error) {
        console.log("Error fetching user:", error);
        return {};
    }

    
}