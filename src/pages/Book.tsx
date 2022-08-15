import React from 'react'
import BookItem from '../components/Book/BookItem'

const Book: React.FC = () => {
  return (
    <div className='book'>
      <div className="book-inner">
        <BookItem className="book-item" />
      </div>
    </div>
  )
}

export default Book