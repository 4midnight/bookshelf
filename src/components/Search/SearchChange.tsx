import React from 'react'

interface SearchChangeProps{
    sorting: (value: any) => void,
    category: (value: any) => void,
}

const SearchChange: React.FC<SearchChangeProps> = ({ sorting, category }) => {
    return (
        <div className='search-change' >
            <h3 className="search-change-header">Category :
                <select name="category" id="category" className='search-change__select' onChange={category} >
                    <option value="all" className='serch-change__select-option'>All</option>
                    <option value="art" className='serch-change__select-option'>Art</option>
                    <option value="biography" className='serch-change__select-option'>Biography</option>
                    <option value="computers" className='serch-change__select-option'>Computers</option>
                    <option value="history" className='serch-change__select-option'>History</option>
                    <option value="medical" className='serch-change__select-option'>Medical</option>
                    <option value="poetry" className='serch-change__select-option'>Poetry</option>
                </select>
            </h3>
            <h3 className="search-change-header">
                Sorting :
                <select name="sorting" id="sorting" className='search-change__select' onChange={sorting}>
                    <option value="relevance" className='serch-change__select-option'>Relevance</option>
                    <option value="newest" className='serch-change__select-option'>Newest</option>
                </select>
            </h3>
        </div>
    )
}

export default SearchChange