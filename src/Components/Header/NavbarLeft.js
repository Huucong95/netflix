import React from 'react'
import logo from '../../assets/images/logo.svg'
import styled from 'styled-components'

export default function NavbarLeft() {
  return (
      <NavbarPane>
        <img src={logo} alt="" />
        <NavBarList>
            <NavbarItem><a href="">Trang chủ</a></NavbarItem>
            <NavbarItem><a href="">Phim T.hình</a></NavbarItem>
            <NavbarItem><a href="">Phim</a></NavbarItem>
            <NavbarItem><a href="">Mới & Phổ biến</a></NavbarItem>
            <NavbarItem><a href="">Danh sách của tôi</a></NavbarItem>
        </NavBarList>
      </NavbarPane>
  )
}
const NavbarPane = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    height:31px;
    img {
        height:100%;
        width:92px;
        margin-right:24px;
    }

`
const NavBarList = styled.ul`
 display:flex
`
const NavbarItem = styled.li`
 display:flex;
 color : var(--textColor);
 font-size: 1.4rem;
line-height:1.7rem;
 margin-left:20px;
 font-weight:500;
`