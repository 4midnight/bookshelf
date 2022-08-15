import React from 'react';
import { Link } from 'react-router-dom';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import ButtonLearnMore from '../../UI/ButtonLearnMore';

interface BookItemProps {
  className: string,
}

const BookItem: React.FC<BookItemProps> = ({ className }) => {

  const book = UseTypedSelector(state => state.book);

  const bookAuthor: string[] = book.book[0].volumeInfo.authors;
  const bookUrlImg = book.book[0].volumeInfo.imageLinks && book.book[0].volumeInfo.imageLinks.thumbnail;
  const bookName = book.book[0].volumeInfo.title;
  const bookDescription = book.book[0].volumeInfo.description ? book.book[0].volumeInfo.description : undefined ;
  const bookPublished = book.book[0].volumeInfo.publishedDate
  
  return (
    <div className={className}>
      <div className="book-item-img">
        <img src={bookUrlImg} alt="" className="img" />
      </div>
      <div className="book-item-info">
        <div className="book-item-header">
          <div className="header-author">{bookAuthor.map(i => i + " ")}</div>
          <div className="header-name">{bookName}</div>
        </div>
        <div className="book-item-description">
          {bookDescription}
        </div>
        <div className="book-item-publisher">
          {bookPublished}
        </div>

        <Link to="/" className="book-item-btn">
          <ButtonLearnMore className='btn-back'>Back</ButtonLearnMore>
        </Link>
      </div>
    </div>
  )
}

export default BookItem