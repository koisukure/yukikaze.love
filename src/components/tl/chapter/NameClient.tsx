"use client";

import { useStore } from "@nanostores/react";
import { $storyOptions, useStoryOptions } from "@/utils/stores";

interface Props {
    first?: boolean;
    last?: boolean;
}

function NameClient({ first, last }: Props) {
    const so = useStore($storyOptions);
    const firstName = useStoryOptions("ushio__18TRIP__firstName");
    const lastName = useStoryOptions("ushio__18TRIP__lastName");

    let nameOption = "both";
    if (first && !last) nameOption = "first";
    if (!first && last) nameOption = "last";

    const name =
        nameOption === "first"
            ? firstName
            : nameOption === "last"
            ? lastName
            : `${firstName} ${lastName}`;

    return <>{name}</>;
}

export default NameClient;
