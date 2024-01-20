import React from 'react'
import styles from './Sidebar.module.scss'
import logo_symbol from '../../media/dbs-logo-symbol.png'
import logo_text from '../../media/dbs-logo-text.png'
import { useState } from 'react'
import { MdHome } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { MdBackup } from "react-icons/md";
import { MdBadge } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
const Sidebar = (props) => {
    const {chosenPage, setChosenPage} = props
    const [isHovered, setIsHovered] = useState(false)
    const [itemHovered,setItemHovered] = useState(null)
    const nav=useNavigate();

    const iconSize="4vw"
    const sidebarItems = [
        {
            logo: <MdHome color={itemHovered==='Home'||chosenPage==='Home'?'black':'white'} style={{fontSize: iconSize}}/>,
            name: 'Home',
            link: '/'
        },
        {
            logo: <MdBadge color={itemHovered==='Chapter'||chosenPage==='Chapter'?'black':'white'} style={{fontSize: iconSize}}/>,
            name: 'Chapter',
            link: '/chapter'
        },
        {
            logo: <MdBackup color={itemHovered==='Card'||chosenPage==='Card'?'black':'white'} style={{fontSize: iconSize}}/>,
            name: 'Card',
            link: '/card'
        },
        {
            logo: <MdBookmark color={itemHovered==='Review'||chosenPage==='Review'?'black':'white'} style={{fontSize: iconSize}}/>,
            name: 'Review',
            link: '/review'
        }
    ]

    const handleHover = () => {
        setIsHovered(!isHovered)
    }
  return (
    <>
    <div className={`${styles.Sidebar} ${isHovered==true?styles.SidebarHovered:''}`}
    onMouseEnter={()=>{setIsHovered(true);}} onMouseLeave={()=>setIsHovered(false)}>
        <div className={styles.SidebarMenu} onMouseLeave={()=>{setItemHovered(null);}}>
        <div className={styles.SidebarHeader}onMouseEnter={()=>{setItemHovered(null);}}>
        <img src={logo_symbol} alt="logo" className={styles.SidebarLogo}/>
        <img src={logo_text} alt="logo" className={styles.SidebarText}/>
        </div>
            {
                sidebarItems.map((item, index) => {
                    return (
                        <SidebarItem isChosen={chosenPage===item.name} onClick={()=>{nav(item.link);setChosenPage(item.name)}} onHover={()=>{setItemHovered(item.name)}} key={index}>{item.logo}{item.name}</SidebarItem>
                    )
                })
            }
        </div>
    </div>
    <div className={`${styles.Backdrop} ${isHovered===false && styles.BackdropHidden}`}/>
    </>
  )
}

const SidebarItem = (props) => {
    const {isChosen,onHover,onClick} = props
    return (
        <div onClick={onClick} onMouseEnter={onHover} className={`${styles.SidebarItem} ${isChosen && styles.ChosenItem}`}>
            {props.children}
        </div>
    )
}

export default Sidebar