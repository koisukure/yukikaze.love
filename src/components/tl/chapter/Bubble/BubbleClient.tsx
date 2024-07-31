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
    avatar?: boolean;
};
type MCBubbleProps = {
    children: ReactNode;
    mc: true;
    unknown?: boolean;
    hidden?: boolean;
    name?: string;
    avatar?: boolean;
};
type Props = CharacterBubbleProps | MCBubbleProps;

function BubbleClient({
    children,
    hidden,
    unknown,
    name,
    avatar,
    ...props
}: Props) {
    const firstname = useStoryOptions("ushio__18TRIP__firstName");
    const gender = useStoryOptions("ushio__18TRIP__gender");
    if ("mc" in props) {
        console.log(gender, "GENDER");
        return (
            <div
                className={`${styles.bubble}${
                    hidden ? ` ${styles.hidden}` : ""
                }${unknown ? ` ${styles.unknown}` : ""}${
                    avatar ? ` ${styles.avatar}` : ""
                }`}
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
                        <strong>
                            {name
                                ? name?.replace(/\{name\}/, firstname) ||
                                  firstname
                                : unknown
                                ? "???"
                                : firstname}
                        </strong>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
    const { character, hologram, shake, glow } = props;
    return (
        <div
            className={`${styles.bubble}${
                hologram ? ` ${styles.hologram}` : ""
            }${shake ? ` ${styles.shake}` : ""}${
                glow ? ` ${styles.glow}` : ""
            }${hidden ? ` ${styles.hidden}` : ""}${
                unknown ? ` ${styles.unknown}` : ""
            }${avatar ? ` ${styles.avatar}` : ""}`}
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
                        {name
                            ? name?.replace(/\{name\}/, firstname) || character
                            : unknown
                            ? "???"
                            : character}
                    </b>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BubbleClient;
