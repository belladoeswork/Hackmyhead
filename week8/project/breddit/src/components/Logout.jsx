
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
      }}
      href={"/"}
    >
      Logout
    </Link>
  );
}
