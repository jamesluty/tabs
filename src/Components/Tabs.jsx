import React from 'react'
import styles from './styles.module.css'
import {useState} from 'react'

const Tabs = (props) => {

    const submit = (value) => {
        props.getContent(value.tab.content)
        console.log("inside app.js", value.tab.content)
    }

    return (
        <div className={styles.tabs_wrapper}>
            {props.tabsArr.map( (tab, idx) =>
                <button className={styles.tabs} key={idx} onClick={(e) => submit({tab})} value={tab}>{tab.tab}</button>
            )}
        </div>
    )
}

export default Tabs