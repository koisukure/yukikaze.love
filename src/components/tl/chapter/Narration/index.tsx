import styles from "./Narration.module.scss";
import type { ReactNode } from "react";
type novelProps = {
    children: ReactNode;
    novel: true;
};
type Props = novelProps;

function Narration({ children, ...props }: Props) {
    if ("novel" in props) {
        return (
            <div className={`${styles.narration} ${styles.novel}`}>
                {children}
            </div>
        );
    }
    return (
        <div className={`${styles.narration} ${styles.bubble}`}>
            <div className={styles.lines}>{children}</div>
        </div>
    );
}

export default Narration;
