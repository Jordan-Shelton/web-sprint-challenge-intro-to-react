// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character = props => {
    const {name, height, eye, gender, mass} = props

return (
    <div>
        <styleDiv>
            <styleTitle>
                {name}
            </styleTitle>
            <styleText>
                {name} is a {`${gender !== 'n/a' ? gender: 'robot'}`} who is {height}cm tall, {`${gender !== 'female' ? "he" : "she"}`} has {eye} eyes and has a mass of {mass}kg.
            </styleText>
        </styleDiv> 
    </div>
    )
}
const styleTitle = styled.h2`
font-family: cursive;
color: white;
font-size: 38px;
margin-bottom:0;
padding-top:20px;
`
const styleText = styled.p`
color: white;
font-size:50px;
font-family: sans-serif;
margin-top:0;
`
const styleDiv = styled.div``

export default Character;