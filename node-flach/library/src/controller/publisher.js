const Publisher = require('../model/publisher').Publisher;

//create Publisher
exports.createPublisher = async (req, res) => {
    const {
        publisher_name,
        cnpj
    } = req.body

    const publisher = new Publisher();

    publisher.publisher_name = publisher_name;
    publisher.cnpj = cnpj;
    await publisher.save();

    res.json(publisher);
};

//read all Publisher
exports.readAllPublisher = async (req, res) => {
    Publisher.findAll().then(result => res.json(result))

};

//read Publisher by id
exports.readPublisher = async (req, res) => {
    const id = req.params.id;

    const publisher = await Publisher.findByPk(id);

    res.json(publisher);
};

//update publihser
exports.updatePublisher = async (req, res) => {
    const id = req.params.id;

    const publisher = await Publisher.findByPk(id);

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

    const publihser = await Publisher.findByPk(id);
    await publihser.destroy();

    res.json({Data: 'Publisher Delete it was a Successful'})
} 
