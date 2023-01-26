const Posts = require("../model/post");

module.exports = {
  /**
   * Create posts
   * @param {*} req
   * @param {*} res
   */
  createPost: async (req, res) => {
    try {
      const { title, description } = req.body;
      const newPost = new Posts({ title, description });
      const createdPost = await newPost.save();
      res
        .status(201)
        .json({ message: "Post created successfully", data: createdPost });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * GetAllPosts
   * @param {*} req
   * @param {*} res
   */
  getAllPosts: async (req, res) => {
    try {
      const allPost = await Posts.find();
      res.status(200).json({
        message: "Post found successfully",
        data: allPost,
        count: allPost.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
