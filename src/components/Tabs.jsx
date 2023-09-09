import { useState } from 'react'
import styles from './tabs.module.css';

const Tabs = (props) => {
    const { tabSelection, updateTabSelection, tabsContentArray } = props

     // Callback function when tab is clicked ?
    const clickHandler = (content, tabNum) => {
        updateTabSelection(tabNum);
        // alert('callback function? '+content);
    }

    return (
        <div className={ styles.tabs}>
            {
                tabsContentArray.map((item, index) => 
                    index == tabSelection ? 
                    <div className={styles.tab} key={index} onClick={() => clickHandler(item, index)}>
                        <input type="radio" name="css-tabs" id={'tab'+(index+1)} className={ styles.tabSwitch } defaultChecked/>
                        <label htmlFor={'tab'+(index+1)} className={ styles.tabLabel }>Tab {index+1}</label>
                    </div>
                    :
                    <div className={styles.tab} key={index} onClick={() => clickHandler(item, index)}>
                        <input type="radio" name="css-tabs" id={'tab'+(index+1)} className={ styles.tabSwitch } />
                        <label htmlFor={'tab'+(index+1)} className={ styles.tabLabel }>Tab {index+1}</label>
                    </div>
                )
            }
        </div>
    )
}


export default Tabs