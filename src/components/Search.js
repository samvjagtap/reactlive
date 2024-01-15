import React, { useState } from 'react'
import SearchResult from './SearchResult'

function Search() {
    const [inputData, setInputData] = useState("")
    const fSetInputData = (e) => {
        let data = e.target.value
        setInputData(data)
    }
    return (
        <>
            <div className='searchbar'>
                <input type='text' value={inputData} onChange={fSetInputData} />
                <br />
                {inputData !== '' ? <SearchResult searchData = {inputData} /> : ''}
            </div>
            
        </>
    )
}

export default Search
