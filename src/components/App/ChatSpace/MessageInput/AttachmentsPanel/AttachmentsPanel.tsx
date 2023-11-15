import React, {useRef, useState} from 'react';
import styles from "./AttachmentsPanel.module.scss"
import csx from "classnames";
import GIFsTab from "./GIFs/GIFsTab";
import EmojisTab from "./Emojis/EmojisTab";

export enum Tab {
    Gifs,
    Stickers,
    Emojis,
}

type Props = {
    tab: Tab
    setTab: (tab: Tab | undefined) => void;
}
const AttachmentsPanel = ({tab, setTab}: Props) => {
    function close() {
        setTab(undefined);
    }

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.tabs}>
                    <div className={csx({[styles.selected]: tab === Tab.Gifs})}
                         onClick={() => setTab(Tab.Gifs)}>
                        GIFs
                    </div>
                    <div className={csx({[styles.selected]: tab === Tab.Stickers})}
                         onClick={() => setTab(Tab.Stickers)}>
                        Stickers
                    </div>
                    <div className={csx({[styles.selected]: tab === Tab.Emojis})}
                         onClick={() => setTab(Tab.Emojis)}>
                        Emojis
                    </div>
                </div>

                {
                    (tab === Tab.Gifs &&
						<GIFsTab close={close}/>) ||
                    (tab === Tab.Stickers && <></>) ||
                    (tab === Tab.Emojis &&
                        <EmojisTab close={close}/>
                    )
                }
            </div>
        </div>
    );
};

export default AttachmentsPanel;