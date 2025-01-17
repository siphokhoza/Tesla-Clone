import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerNav from './BurgerNav'; // Adjust the path as necessary
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const cars = useSelector(selectCars);
    const toggleBurgerNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={toggleBurgerNav} />
            </RightMenu>
            <BurgerNav isOpen={isOpen} toggle={toggleBurgerNav} />
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;
