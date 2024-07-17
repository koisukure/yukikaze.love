import styles from "./Bubble.module.scss";
import type { ReactNode } from "react";
import { useStoryOptions } from "@/utils/stores";
type CharacterBubbleProps = {
    children: ReactNode;
    character: string;
    name?: string;
    hidden?: boolean;
    unknown?: boolean;
    hologram?: boolean;
    shake?: boolean;
    glow?: boolean;
};
type MCBubbleProps = {
    children: ReactNode;
    mc: true;
};
type Props = CharacterBubbleProps | MCBubbleProps;

function BubbleClient({ children, ...props }: Props) {
    const firstname = useStoryOptions("ushio__18TRIP__firstName");
    const gender = useStoryOptions("ushio__18TRIP__gender");
    if ("mc" in props) {
        console.log(gender, "GENDER");
        return (
            <div
                className={styles.bubble}
                data-mc
                data-character={gender === "male" ? "Kaede" : "Momiji"}
            >
                <span style={{ display: "none" }}>{gender}</span>
                <div className={styles.icon__wrapper}>
                    <div className={styles.icon__box}>
                        <div className={styles.icon__base} />
                    </div>
                </div>
                <div className={styles.lines}>
                    <div className={styles.name}>
                        <strong>{firstname || "MC"}</strong>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
    const { character, name, hidden, unknown, hologram, shake, glow } = props;
    return (
        <div
            className={`${styles.bubble}${
                hologram ? ` ${styles.hologram}` : ""
            }${shake ? ` ${styles.shake}` : ""}${
                glow ? ` ${styles.glow}` : ""
            }${hidden ? ` ${styles.hidden}` : ""}${
                unknown ? ` ${styles.unknown}` : ""
            }`}
            data-character={character}
        >
            <div className={styles.icon__wrapper}>
                <div className={styles.icon__box}>
                    <div className={styles.icon__base} />
                </div>
            </div>
            <div className={styles.lines}>
                <div className={styles.name}>
                    <b>
                        {unknown
                            ? "???"
                            : name?.replace(/\{name\}/, firstname) || character}
                    </b>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BubbleClient;
