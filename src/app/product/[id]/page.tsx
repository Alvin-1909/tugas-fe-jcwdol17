/** @format */
"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
  //usePathname
  const path = usePathname().split("/");
  const id = path[path.length - 1];
  console.log(id);

  return <div>{id}</div>;
}
