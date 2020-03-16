const MovieModel = require('../models/MovieModel');

class MovieController {
    async create(req, res){        

        const movie = new MovieModel(req.body);
        await movie.save().then(response => {
            return res.json(response);
        })
        .catch(error => {
            return res.json(error);
        });
    }

    async update(req, res){
        await MovieModel
        .findByIdAndUpdate(
            {'_id': req.params.id},
            req.body, 
            {new: true})
        .then(response => {
            return res.status(200).json(response); 
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async delete(req, res){
        await MovieModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async searchTitle(req, res){        

        await MovieModel
        .find({'title': req.body.title})
        .sort('title')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }

    
    async searchLike(req, res){        

        await MovieModel
        .find({'like': true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }


}

module.exports = new MovieController;