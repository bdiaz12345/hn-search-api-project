import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { addToHistory } from '../action/index'
import { connect } from 'react-redux'
import SearchBar from 'material-ui-search-bar'
import { useHistory } from 'react-router-dom'

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

const NewsCard = styled.div`
    background: #d46a6a;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
`

const Title = styled.h1`
    color: white;
    font-family: sans-serif;
`

const Author = styled.h4`
    color: white;
    font-family: sans-serif;
`

const Url = styled.a`
    color: white;
`

const ResultsDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;

    @media (max-width: 480px) {
        grid-template-columns: auto;
    }
`

const HistoryButton = styled.button`
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

// Component

const SearchScreen = ({addToHistory}) => {
    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])

    const history = useHistory()

    return (
        <Wrapper>
            <Title>Search Hacker News</Title>
            <SearchBar 
            value={searchValue} 
            onChange={(e) => {
                setSearchValue(e)
            }} 
            onRequestSearch={() => {
                axios
                    .get(`http://hn.algolia.com/api/v1/search?query=${searchValue}`)
                    .then(res => {
                        setResults(res.data.hits)
                        addToHistory(searchValue)
                    })
                    .catch(err => {console.log(err)})
            }}
            />
            <HistoryButton onClick={() => {
                history.push('/history')
            }}>View Search History</HistoryButton>
            <ResultsDiv>
                {results.length ? results.map(result => {
                    return (
                        <NewsCard>
                            <Title>{result.title}</Title>
                            <Author>by {result.author}</Author>
                            <Url href={result.url} target='_blank'>View here</Url>
                        </NewsCard>
                    )
                }) : console.log('no results yet')}
            </ResultsDiv>
        </Wrapper>
    )

}

// state from reducer

const mapStateToProps = state => {
    console.log(state)
    return {
        history: state.history
    }
}

export default connect(mapStateToProps, {addToHistory})(SearchScreen)
