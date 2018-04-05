module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {body} = req;

        dbInstance.create_product([body.name, body.description, body.price, body.imageurl]).then(() =>{
            res.status(200).send()
        }).catch(() => res.status(500).send());
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.read_product([params.id]).then(product => {
            res.status(200).send(product)
        }).catch(() => res.status(500).send())
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then(products => {
            res.status(200).send(products)
        }).catch(() => res.status(500).send())
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_product([params.id, query.desc]).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

   delete: (req, res, next) => {
       const dbInstance = req.app.get('db');
       const {params} = req;

       dbInstance.delete_product([params.id]).then(() => {
           res.status(200).send()
       }).catch(() => res.status(500).send())
   }
}