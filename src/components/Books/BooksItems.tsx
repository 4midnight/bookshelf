import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { addBookAC, errBookAC } from '../../store/reducer/bookReducer';
import ButtonLearnMore from '../../UI/ButtonLearnMore'

interface BooksItemsProps {
  className: string,
  urlImg: string,
  author: any[],
  id: string;
  name: string,
}

const BooksItems: React.FC<BooksItemsProps> = ({ className, urlImg, author, name, id }) => {

  const books = UseTypedSelector(state => state.books);
  const dispatch = useDispatch();

  const clickBookHandler = () =>{
    const book = books.books.filter(item => item.id === id);

    if(book.length === 0){
      dispatch(errBookAC("Error."));
      return;
    }
    dispatch(addBookAC(book));
  }

  return (
    <div className={className} id={id}>
      {urlImg ?
        <div className="item-img">
          {urlImg ? <img src={urlImg} alt="" className="img" /> : undefined}
        </div> :
        <div className="item-img"></div>}

      <Link to="/book" className="link item-header" onClick={clickBookHandler}>
        <div className="header-authors">{author}</div>
        <div className="header-name">{name}</div>
      </Link>
      <Link to="/book" className="link item-learn__more" onClick={clickBookHandler}>
        <ButtonLearnMore className='btn-learn__more'>Learn more
          <svg className='SVG'>
            <use xlinkHref='#next' />
          </svg>
        </ButtonLearnMore>
      </Link>
    </div>
  )
}

export default BooksItems