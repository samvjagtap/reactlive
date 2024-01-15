import React from 'react'

function SearchResult(props) {
    let img = `https://source.unsplash.com/400x300/?${props.searchData}`;
    return (
        <>
            <div>
                <img src={img} alt='search' />
            </div>
        </>
    )
}

export default SearchResult
