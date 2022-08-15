import React from 'react'
import { useDispatch } from 'react-redux';
import BooksItems from '../components/Books/BooksItems'
import { UseTypedSelector } from '../hooks/UseTypedSelector'
import { searchAddAC } from '../store/reducer/searchReducer';
import ButtonLearnMore from '../UI/ButtonLearnMore';
import Preloader from '../UI/Preloader';


const Books: React.FC = () => {

  const books = UseTypedSelector(state => state.books);
  const search: any = UseTypedSelector(state => state.search.searchSelect[0]);
  const dispath = useDispatch();

  const stepPaginationHandler = () =>{
    dispath(searchAddAC([{...search, index: search.index + 30}]))
  }

  const booksItems = books.books.length !== 0 ?
    books.books.map(item => <BooksItems
      key={item.id}
      id={item.id}
      className="books-item"
      urlImg={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail}
      name={item.volumeInfo.title}
      author={item.volumeInfo.authors} />) :
    undefined;

  return (
    <div className='books'>
      <div className="books-inner">
        <div className="books-items">
          {booksItems}
          {books.loading ? <Preloader />: undefined}
        </div>
        {books.books.length !== 0 && !books.loading ? <div className="btn-learn-more">
                            <ButtonLearnMore className='btn-learn' onClick={stepPaginationHandler}> Learn More</ButtonLearnMore>
                          </div> : undefined}
      </div>
    </div>
  )
}

export default Books;