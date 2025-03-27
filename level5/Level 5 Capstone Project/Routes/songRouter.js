const express= require('express');
const songRouter = express.Router();
const Song = require('../Models/songs');


//GET all songs
songRouter.get('/', async (req, res, next) => {
    try {
        const songs = await Song.find();
        res.status(200).send(songs);
    } catch (error) {
        next(error);
    }
});

//GET single song


songRouter.get('/:id', async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).send('Song not found');
        res.status(200).send(song);
    } catch (error) {
        next(error);
    }
});

//POST a new song


songRouter.post('/', async (req, res, next) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).send(song);
    } catch (error) {
        next(error);
    }
});

//UPDATE a song

songRouter.put('/:id', async (req, res, next) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!song) return res.status(404).send('Song not found');
        res.status(200).send(song);
    } catch (error) {
        next(error);
    }
});

//DELETE a song

songRouter.delete('/:id', async (req, res, next) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) return res.status(404).send('Song not found');
        res.send(song);
    } catch (error) {
        next(error);
    }
});

module.exports = songRouter;
