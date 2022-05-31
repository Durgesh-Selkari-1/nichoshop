import React from 'react'
import footerLogo from '../../assets/img/menu/footer_logo.svg'
const Footer = () => {
  return (
    <footer id="footer" style={{bottom:0,position:'sticky',marginTop:'15%'}}>
         <div class="container">
            <div class="me-md-auto text-center text-md-start">
               <div class="copyright">
                  &copy; Copyright 2017 <span>nichoShop Inc.</span>. All Rights Reserved. <u>User Agreement</u>, &nbsp;<u>Privicy</u> and &nbsp;<u>Cookies</u>
               </div>
            </div>
         </div>
         <div class="footer_logo"> <img src={footerLogo}/></div>
      </footer>
  )
}

export default Footer