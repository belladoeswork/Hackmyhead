// "use client";

// import Link from "next/link.js";
// import { useRouter } from "next/navigation.js";


// export default function Logout() {

//     const router = useRouter();

//     const handleLogout = async () => {

//         console.log("Logging out...");

//         const response = await fetch("/api/users/logout", {
//             method: "POST",
//         });

//         const info = await response.json();

//         if (info.success) {
//             router.push("/");
//         }

//     };

//     return (
//         <Link onClick={handleLogout} href={"/"}>
//             Logout
//         </Link>
        
//     );
// }


// "use client";

// import Link from "next/link.js";
// import { useRouter } from "next/navigation.js";
// import { fetchUser } from  "@/lib/fetchUser.js";


// export default function Logout(props) {

//   const router = useRouter();

//   return (
//     <Link
//       onClick={async () => {
//         const response = await fetch("/api/users/logout", {
//           method: "POST",
//         });
//         const info = await response.json();

//         if (info.success) {
//             try {

//               const userData = await fetchUser();
//               const username = userData.username;
//               props.onLogout(username);

//             } catch (error) {

//               console.error('Error fetching user data:', error);
//             }
  
//             router.replace("/");
//         }
//       }}
//       href={"/"}
//     >
//       Logout
//     </Link>
//   );
// }


// Logout.jsx

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation.js";

export default function Logout(props) {
  const router = useRouter();

  return (
    <Link
      onClick={async () => {
        const response = await fetch("/api/users/logout", {
          method: "POST",
        });
        const info = await response.json();

        router.refresh();

        // if (info.success) {
        //   props.onLogout(); 
        //   router.replace("/");
        // }
      }}
      // href="/"
    >
      Logout
    </Link>
  );
}
