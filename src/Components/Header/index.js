import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'


export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const changeBackground  =()=> {
        if(window.scrollY >0) {
            setNavbar(true)
        }else {
            setNavbar(false)
    }}
    useEffect(() => {
            window.addEventListener('scroll', changeBackground)
        return ()=> {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [navbar])
    
   
  return (
    <HeaderNavbar className={navbar? 'active':''}>
        <NavbarLeft/>
        <NavbarRight/>
    </HeaderNavbar>
  )
}
const HeaderNavbar = styled.div`
    position:fixed;
    z-index: 999;
    top:0;
    left:0;
    right:0;
    width: 100%;
    height: 68px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:0 54px;
    &.active {
        background-image: linear-gradient(#060606, #141414);

    }
    `

