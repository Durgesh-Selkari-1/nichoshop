import React from 'react'
import general from '../../assets/img/menu/General (Statistic Chart).svg'
import customer from '../../assets/img/menu/Customer Support.svg'
import search from '../../assets/img/menu/Search.svg'
import categories from '../../assets/img/menu/Categories.svg'
import content from '../../assets/img/menu/Content.svg'
import administrator from '../../assets/img/menu/Administrator.svg'
import messages from '../../assets/img/menu/Messages.svg'
import logo from '../../assets/img/NS Logo.svg'
import './header.css'
const Header = () => {
  return (
    <header id="header" className="fixedtop">
         <div className="container-fluid d-flex align-items-center">
            <h1 className="logo"><img src={logo} alt="" className="img-fluid"/></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
               <ul>
                  <li><a className="nav-link scrollto" href="#"><img src={general} alt="general"/></a></li>
                  <li><a className="nav-link scrollto" href="#"><img src={customer} alt="customer"/></a></li>
                  <li><a className="nav-link scrollto" href="#"><img src={search} alt="search"/></a></li>
                  <li><a className="nav-link scrollto active" href="#"><img src={categories} alt="categories"/></a></li>
                  <li><a className="nav-link scrollto" href="#"><img src={content} alt="content"/></a></li>
                  <li><a className="nav-link scrollto" href="#"><img src={administrator} alt="Administrator"/></a></li>
                  <li><a className="nav-link scrollto" href="#"><img src={messages} alt="Messages"/></a></li>
               </ul>
            </nav>
         </div>
      </header>
  )
}

export default Header