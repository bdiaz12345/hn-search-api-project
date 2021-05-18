import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { useHistory } from 'react-router'

// JSX styles

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #aa3939;
`

const TitleDiv = styled.div`
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    width: 40%;
    height: 20%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
        height: 30%
    }
`

const TitleSubDiv = styled.div``

const SubTitle = styled.h6`
    text-align: center;
    font-size: 15px;
    color: #aa3939;
`

const Title = styled.h1`
    text-align: center;
    color: #aa3939;
`

// Component

const LandingScreen = () => {
    const history = useHistory()

    const click = () => {
        history.push('/search')
    }

    return (
        <Wrapper onClick={click}>
            <TitleDiv>
                <TitleSubDiv>
                    <Title>Hacker News</Title>
                    <SubTitle>Click Anywhere!</SubTitle>
                </TitleSubDiv>
            </TitleDiv>
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                position: 'fixed',
                left: '0',
                top: '0',
                height: '100%' 
              }}
            />
        </Wrapper>
    )
}

export default LandingScreen