const express = require("express");
const postController = require("./controller/posts");

const route = express.Router();

route.post("/", postController.createPost).get("/", postController.getAllPosts);

module.exports = route;
