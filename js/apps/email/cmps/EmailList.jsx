export default function EmailList(props) {
    return <div>
   <h2>List</h2>
   const { books, onSelectBook } = props
    
    return <div className="flex wrap justify-center">{books.map((book, i) => {
        return <BookPreview  key={i} book={book} />
    })}
    </div>
    </div>
}