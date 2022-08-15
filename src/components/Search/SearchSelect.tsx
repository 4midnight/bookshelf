import React from 'react'
import ButtonSubmit from '../../UI/ButtonSubmit';

interface SearchSelectProps{
    search: (value: any) => void,
    value: string
}

const SearchSelect: React.FC<SearchSelectProps> = ({search, value}) => {
  return (
    <div className='search-select'>
        <input type="search" placeholder='search' className='search-input' onChange={search} value={value}/>
        <ButtonSubmit className="btn">Go</ButtonSubmit>
    </div>
  )
}

export default SearchSelect