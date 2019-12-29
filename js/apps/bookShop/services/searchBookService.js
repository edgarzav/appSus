export default { getBooks }

function getBooks(bookTitle) {
    const prmAns = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookTitle}`)
    return prmAns.then((response) => {
        let { data } = response

       const books = data.items.map(book => book)

        return Promise.all(books)
    })
        .catch(err => {
            console.error(err);
        })
}
