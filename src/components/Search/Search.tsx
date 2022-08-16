import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UseTypedSelector } from '../../hooks/UseTypedSelector'
import { searchAddAC, searchErrAC, searchSuccessAC } from '../../store/reducer/searchReducer'
import SearchChange from './SearchChange'
import SearchSelect from './SearchSelect'

const Search: React.FC = () => {

    const searchErr = UseTypedSelector(state => state.search.err);
    const dispath = useDispatch();

    const [category, setGategory] = useState("");
    const [sorting, setSorting] = useState("");
    const [search, setSearch] = useState("");


    const isInputEmpty = (event: any): void => {
        if (event.target.value.length === 0) {
            event.target.classList.add("error-input");
        } else {
            event.target.classList.remove("error-input");
        }
    }

    const searchHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!search) {
            dispath(searchErrAC("Error. Fields must not be empty"));
            event.target[0].classList.add('error-input')
            return;
        }

        dispath(searchSuccessAC());
        dispath(searchAddAC([{ search, category, sorting, index: 0}]))
        setSearch('');
    }

    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        isInputEmpty(event);
        setSearch(event.target.value)
    }

    const sortingChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSorting(event.target.value)
    }

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGategory(event.target.value)
    }

    return (
        <div className='search'>
            <div className="container">
                <div className="search-inner">
                    <h1 className="h1 search-header"> Books items search</h1>
                    {searchErr ? <p className='error'>{searchErr}</p> : undefined}
                    <form action="" className='search-form' onSubmit={searchHandler}>
                        <SearchSelect search={searchInputHandler} value={search} />
                        <SearchChange sorting={sortingChangeHandler}
                            category={categoryChangeHandler} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search