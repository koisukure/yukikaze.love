"use client";

import { useStoryOptions } from "@/utils/stores";
import type { ReactNode } from "react";

interface Props {
    g: "m" | "f";
    children: ReactNode;
}

function DiffClient({ g, children }: Props) {
    // console.log("DiffClient Render");
    const gender = useStoryOptions("ushio__18TRIP__gender");

    const gFull = g === "f" ? "female" : "male";

    if (gFull !== gender)
        return <div style={{ display: "none" }}>{children}</div>;
    return children;
}

export default DiffClient;
