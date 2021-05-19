import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { clearHistory, saveToHistory } from '../action/index'

// JSX styles

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
    background: white;

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

// Component

const HistoryScreen = (state) => {
    const [data, setData] = useState([])

    const dispatch = useDispatch()

    const history = useHistory()

    // this briefly sends the user to the homescreen upon refresh, for the case that they want to clear history.
    // if a user clears history, redirecting to the homescreen briefly ensures that history is successfully
    // cleared in the UI.
    window.onbeforeunload = () => {
        history.push('/')
    }

    // function that loads "state" data from local storage.
    const loadState = () => {
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) {
                return undefined
            }
            console.log(JSON.parse(serializedState))
            if (JSON.parse(serializedState).length < state.history.length) {
                setData(state.history)
            } else {
                setData(JSON.parse(serializedState))
            }

            if (state.history.length < JSON.parse(serializedState).length) {
                dispatch(saveToHistory(JSON.parse(serializedState)))
            }
            return JSON.parse(serializedState)
        } catch (err) {
            return undefined
        }
    }

    // function that saves state data to local storage.
    const saveToLocalStorage = (state) => {
        try {
            const serializedState = JSON.stringify(state.history)
            localStorage.setItem('state', serializedState)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadState()
        saveToLocalStorage(state)
    }, [state])

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
            }) : <h2 style={{color:'white', fontFamily:'sans-serif'}}>No search results yet</h2>}
            <BackButton onClick={() => {
                window.location.reload(false)
                localStorage.removeItem('state')
                dispatch(clearHistory())
            }}>Clear History</BackButton>
        </Wrapper>
    )
}

// state from reducer

const mapStateToProps = state => {
    console.log(state)
    return state
}

export default connect(mapStateToProps, {clearHistory, saveToHistory})(HistoryScreen)