import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: #aa3939;
    padding-top: 3rem;
`

const Title = styled.h1`
    color: white;
    font-family: sans-serif;
`

const ResultCard = styled.div`
    background: #d46a6a;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    align-items: center;
`

const BackButton = styled.button`
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: .5rem 1rem;
    border: none;
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #d46a6a;
        color: white;
    }
`

const Result = styled.h4`
    font-family: sans-serif;
    color: white;
`

const HistoryScreen = (state) => {
    const data = state.history

    const history = useHistory()

    return (
        <Wrapper>
            <Title>Recent Searches</Title>
            <BackButton onClick={() => {
                history.push('/search')
            }}>Back to Search</BackButton>
            {data.length ? data.map(result => {
                return (
                    <ResultCard>
                        <Result>{result}</Result>
                    </ResultCard>
                )
            }) : <h2 style={{color:'white'}}>No search results yet</h2>}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(HistoryScreen)