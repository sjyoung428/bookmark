"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  console.log(data, status);

  return <div>Home</div>;
}
