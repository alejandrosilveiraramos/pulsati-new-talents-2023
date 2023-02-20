const Author = require('../model/author').Author;

//create Author
exports.createAuthor = async (req, res) => {
    const {
        id,
        first_name,
        last_name,
        birthday

    } = req.body

    const author = new  Author();

    author.id = id;
    author.first_name = first_name;
    author.last_name = last_name;
    author.birthday = birthday;
    await author.save();

    res.json(author);
};

//read All Author
exports.readAllAuthor = async (req, res) => {
    Author.findAll().then(result => res.json(result))

};

//read Author by id
exports.readAuthor = async (req, res) => {
    const id = req.params.id;

    const author = await Author.findByPk(id);

    res.json(author);
};

// update Authorby id
exports.updateAuthor = async (req, res) => {
    const id = req.params.id;

    const author = await Author.findByPk(id);

    const { 
        first_name,
        last_name,
         birthday 
        } = req.body;

    author.first_name = first_name;
    author.last_name = last_name;
    author.birthday  = birthday;
    await author.save();
    
    res.json(author)
};

//delete Auhtor
exports.deleteAuthor = async (req, res) => {
    const id = req.params.id;

    const author = await Author.findByPk(id);
    await author.destroy();

    res.json({Data: 'Author Delete it was Successful'});
};

