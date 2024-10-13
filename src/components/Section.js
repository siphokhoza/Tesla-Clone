import React from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.6, 0.01, -0.05, 0.95], // Custom ease to mimic bounce effect
        type: "spring",
        stiffness: 120
      } 
    }
  }

  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText as={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons as={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && (
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                )}
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex; 
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``;
