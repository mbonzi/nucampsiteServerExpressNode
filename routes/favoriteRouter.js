const express = require("express");
const cors = require("./cors");
const authenticate = require("../authenticate");
const Favorite = require("../models/favorite");
const favoriteRouter = expess.Router();

favoriteRouter.route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    Favorite.find( { user: req.user._id } )
      .populate("user")
      .populate("campsites")
      .then((favorites) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(favorites);
      })
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id })
      .then((favorites) => {

        if (favorites) {
          req.body.forEach((favorite) => {
              
            if (!favorites.campsites.includes(favorite._id)) {
              favorites.campsites.push(favorite._id);
            }
          });
          favorites
            .save()
            .then((favorite) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(favorite);
            })
            .catch((err) => next(err));

        } else {
          Favorite.create({ user: req.user._id })
            .then((favorites) => {
              req.body.forEach((favorite) => {
                favorites.campsites.push(favorite._id);
              });
              favorites.save().then((favorites) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(favorites);
              });
            })
            .catch((err) => next(err));
        }  
      })
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
   
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
   
  });

favoriteRouter
  .route("/:campsiteId")
  .options(cors.corsWithOptions, ( req, res ) => res.sendStatus(200))
  .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      `GET operation is not supported on /favorites/${req.params.campsiteId}`
    );
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    
      }
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, ( req, res, next ) => {
  }
  .delete(cors.corsWithOptions, authenticate.verifyUser, ( req, res, next ) => {
   
  }

module.exports = favoriteRouter;