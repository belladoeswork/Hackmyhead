"use client";

import Link from "next/link.js";
import { useRouter } from "next/navigation.js";

export default function Logout() {

    const router = useRouter();

    return (

        <Link
            onClick={async () => {
                
                const response = await fetch("/api/users/logout", {
                method: "POST",
                });

                const info = await response.json();

                router.refresh();
            }}
            href={"/"}
            
        >
            Logout
        </Link>
    );
}

    // const handleLogout = async () => {
    //     try {
    
    //         const response = await fetch("/api/users/logout", {
    //             method: "POST",
    //         });

    //         if (response.ok) {
    //             // Redirect to the home page after successful logout
    //             router.push("/");
    //         } else {
    //             console.error("Logout failed");
    //         }

    //         } catch (error) {

    //             console.error("Error during logout:", error);
    //         }
    //       };

    // return (
    //     <button onClick={handleLogout}>
    //       Logout
    //     </button>
    // );
