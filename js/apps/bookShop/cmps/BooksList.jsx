import BookPreview from "./BookPreview.jsx";

export default function BooksList(props) {
    const { books, onSelectBook } = props
    
    return <div className="flex wrap justify-center">{books.map((book, i) => {
        return <BookPreview  key={i} book={book} />
    })}
    </div>
}