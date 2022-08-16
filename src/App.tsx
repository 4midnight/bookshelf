import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Search from './components/Search/Search';
import { UseTypedSelector } from './hooks/UseTypedSelector';
import Book from './pages/Book';
import Books from './pages/Books';
import { booksAddAC, booksErrAC, booksPagAC, booksSuccessAC } from './store/reducer/booksReducer';
import SVG from './SVG/SVG';

const App: React.FC = () => {

  const search = UseTypedSelector(state => state.search.searchSelect);
  const booksErr = UseTypedSelector(state => state.books.err);
  const dispath = useDispatch();

  useEffect(() => {
    const s = search.length === 0 ? "" : search[0].search; //s = search
    const index = search.length === 0 ? 0 : search[0].index;

    if (s && !index) {
      const cat = search[0].category === "" ? "" : search[0].category;
      const sort = search[0].sorting === "" ? "relevance" : search[0].sorting;

      const fethData = async () => {
        dispath(booksSuccessAC(true));
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}+subject:${cat}&orderBy=${sort}&startIndex=${0}&maxResults=30&key=AIzaSyAhbLYbTi0Z6kzNrdCcwZYN302f1k4DIzM`)
          .then(res => res.json())
          .then((res: any) => res.items !== undefined ? dispath(booksAddAC(res.items)) : dispath(booksErrAC("Error")))
          .catch(err => dispath(booksErrAC(err)));
      }
      fethData()
    } else if (index) {
      const cat = search[0].category === "" ? "" : search[0].category;
      const sort = search[0].sorting === "" ? "relevance" : search[0].sorting;
      (async function () {
        dispath(booksSuccessAC(true));
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}+subject:${cat}&orderBy=${sort}&startIndex=${index}&maxResults=30&key=AIzaSyAhbLYbTi0Z6kzNrdCcwZYN302f1k4DIzM`)
          .then(res => res.json())
          .then(res => dispath(booksPagAC(res.items)))
          .catch(err => dispath(booksErrAC(err)));
      })();
    }

  }, [search])

  return (
    <div className="App">
      <SVG />
      <header className="App-header">
        <Search />
        <div className="container">
          <div className="center">
            {booksErr ? <p className='error'>{booksErr}</p> : undefined}
          </div>
          <Routes>
            <Route path='/' element={<Books />} />
            <Route path='/book' element={<Book />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
