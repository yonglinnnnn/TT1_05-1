import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Dashboard.module.scss'

const Dashboard = (props) => {
    const {chosenPage, setChosenPage} = props
  return (
    <div className={styles.Dashboard}>
        <Sidebar chosenPage={chosenPage} setChosenPage={setChosenPage}/>
        <div className={styles.OutletPositioner}>
        <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard