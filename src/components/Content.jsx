import { useState } from 'react'

const contentBoxStyle = {
        left: '0',
        padding: '1.618rem',
        background: '#fff',
        color: '#2c3e50',
        borderBottom: '0.2 solid #bdc3c7',
        transition: 'all 0.35s',
}

const Content = (props) => {
    const { tabsContentArray, tabSelection } = props
    return (
        <div style={contentBoxStyle}>
            { tabsContentArray[tabSelection] }
        </div>
    )
}

export default Content