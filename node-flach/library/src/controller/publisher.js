const PublisherBook = require('../model/publisher').PublisherBook;

//create Publisher
exports.createPublisher = async (req, res) => {
    const {
        id,
        publisher_name,
        cnpj
    } = req.body

    const publisher = new PublisherBook();

    publisher.id = id;
    publisher.publisher_name = publisher_name;
    publisher.cnpj = cnpj;
    await publisher.save();

    res.json(publisher);
};

//read all Publisher
exports.readAllPublisher = async (req, res) => {
    PublisherBook.findAll().then(result => res.json(result))

};

//read Publisher by id
exports.readPublisher = async (req, res) => {
    const id = req.params.id;

    const publisher = await PublisherBook.findByPk(id);

    res.json(publisher);
};

//update publihser
exports.updatePublisher = async (req, res) => {
    const id = req.params.id;

    const publisher = await PublisherBook.findByPk(id);

    const{
        publisher_name,
        cnpj
    } = req.body;

    publisher.publisher_name = publisher_name;
    publisher.cnpj = cnpj
    await publisher.save();

    res.json(publisher)
};

// delete publisher
exports.deletePublisher = async (req, res) => {
    const id = req.params.id;

    const publihser = await PublisherBook.findByPk(id);
    await publihser.destroy();

    res.json({Data: 'Publisher Delete it was a Successful'})
} 
