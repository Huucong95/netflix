import React from "react";
import { BsCaretDownFill, BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import avatar from "../../assets/images/avatar.png";
import styled from "styled-components";

export default function NavbarRight() {
    return (
        <NavbarPane>
            <NavbarItem>
                <FaSearch className="icon iconSearch" />
                <input type="text" placeholder="Phim, Diễn viên, Thể loại,..." />
            </NavbarItem>
            <NavbarItem>
                <a href="">Trẻ em</a>
            </NavbarItem>
            <NavbarItem>
                <BsFillBellFill className="icon" />
            </NavbarItem>
            <NavbarItem>
                    <img src={avatar} alt="" />
                    <BsCaretDownFill />
            </NavbarItem>
        </NavbarPane>
    );
}
const NavbarPane = styled.ul`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 31px;
    
 
`
const NavbarItem = styled.li`
 display:flex;
 color : var(--whiteColor);
 align-items: center;
 font-size: 1.4rem;
 line-height:1.7rem;
 margin-left:20px;
 font-weight:500;
 img {
    height: 32px;
    width: 32px;
    border-radius: 2px;
    margin-right: 8px;
}
@media (max-width: 1023px) {
    
    
    
}

/* mobile */
@media (max-width:739px) {
   
}
.icon {
    font-size: 2.2rem;
    color: #fff;
    font-weight: 600;
}
.iconSearch {
    transform: translateX(26px);
    padding-left:4px;
    line-height:4rem;
    cursor: pointer;
}
input {
    font-size: 1.7rem;
    border: 1px  solid #fff;
    opacity:0;
    outline:none;
    width:0;
    cursor: pointer;
    padding:6px;
    background:transparent;
    transition: width 0.5s;
    &:focus {
        padding-left:30px;
        width:275px;
        opacity:1;
        

    }
}
`