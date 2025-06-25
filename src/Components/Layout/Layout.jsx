import { Outlet } from 'react-router-dom'
import { Navbar } from './../NavBar/NavBar';
import style from "./Layout.module.css"

export function Layout() {
  return (
    <div>
    <Navbar/>
    <div className={style.main}>
      <Outlet />
      </div>
    </div>
  )
}
