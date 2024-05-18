const createPostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Post created",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const allPostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "All posts gotten",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const singlePostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Get a single post",
    });
  } catch (e) {
    res.json(e.message);
  }
};

const deletePostController = async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "delelte a post",
      });
    } catch (e) {
      res.json(e.message);
    }
  }

const updatePostController = async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "update post",
      });
    } catch (e) {
      res.json(e.message);
    }
  }

module.exports = {
  createPostController,
  allPostController,
  singlePostController,
  deletePostController,
  updatePostController

};
