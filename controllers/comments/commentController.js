const createCommentController = async(req,res)=>{
    try{
        res.json({
            status: "success",
            data: "comments created",
          });
    }
    catch(e){
        res.json(e.message)
    }
  }

const singleCommentController = async(req,res)=>{
    try{
        res.json({
            status: "success",
            data: "Get a single comment",
          });
    }
    catch(e){
        res.json(e.message)
    }
  }

const deleteCommentController = async(req,res)=>{
    try{
        res.json({
            status: "success",
            data: "delelte a comment",
          });
    }
    catch(e){
        res.json(e.message)
    }
    }

const updateCommentController = async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "update comment",
      });
    } catch (e) {
      res.json(e.message);
    }
  }
  module.exports ={
    createCommentController,
    singleCommentController,
    deleteCommentController,
    updateCommentController

  }