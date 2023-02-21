const Book = require('../model/book').Book;

//create Publisher
exports.createBook = async (req, res) => {
    const {
        book_name,
        book_edition,
        release_date
    } = req.body

    const book = new Book();

    book.book_name = book_name;
    book.book_edition = book_edition;
    book.release_date = release_date;
    await book.save();

    res.json(book);
};

//read all Book
exports.readAllBook = async (req, res) => {
    Book.findAll().then(result => res.json(result))

};

//read Book by id
exports.readBook = async (req, res) => {
    const id = req.params.id;

    const book = await Book.findByPk(id);

    res.json(book);
};

//update book
exports.updateBook = async (req, res) => {
    const id = req.params.id;

    const book = await Book.findByPk(id);

    const {
        book_name,
        book_edition,
        release_date
    } = req.body

    book.book_name = book_name;
    book.book_edition = book_edition;
    book.release_date = release_date;
    await book.save();

    res.json(book)
};

// delete book
exports.deleteBook = async (req, res) => {
    const id = req.params.id;

    const book = await Book.findByPk(id);
    await book.destroy();

    res.json({Data: 'Book Delete it was a Successful'})
} 
