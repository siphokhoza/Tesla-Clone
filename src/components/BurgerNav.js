import React from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice'; // Assuming this is the correct path
import { useSelector } from 'react-redux';

const BurgerNav = ({ isOpen, toggle }) => {
    // Get cars from the Redux store
    const cars = useSelector((state) => state.car.cars);

    return (
        <NavContainer isOpen={isOpen}>
            <CloseButton onClick={toggle}>✖</CloseButton>
            {cars && cars.map((car, index) => (
                <NavItem key={index} href="#">{car}</NavItem>
            ))}
            <NavItem href="#">Existing Inventory</NavItem>
            <NavItem href="#">Used Inventory</NavItem>
            <NavItem href="#">Trade-in</NavItem>
            <NavItem href="#">Cybertruck</NavItem>
            <NavItem href="#">Roadster</NavItem>
        </NavContainer>
    );
};

export default BurgerNav;

const NavContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px; /* Adjust the width as needed */
    background-color: white;
    opacity: 0.85;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    text-align: start;

    /* Optional: If you want a nice shadow effect */
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
`;

const NavItem = styled.a`
    color: rgba(23, 26, 32, 0.8);
    padding: 15px 0;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
        color: #95a5a6; /* Change color on hover */
    }
`;

const CloseButton = styled.div`
    align-self: flex-end;
    cursor: pointer;
    font-size: 24px;
    color: rgba(23, 26, 32, 0.8);
    margin-bottom: 20px;
`;
