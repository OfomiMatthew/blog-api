const createCategoryController = async(req,res)=>{
    try{
        res.json({
            status: "success",
            data: "categories created",
          });
    }
    catch(e){
        res.json(e.message)
    }
  }


const singleCategoryController = async(req,res)=>{
    try{
        res.json({
            status: "success",
            data: "Get a single category",
          });
    }
    catch(e){
        res.json(e.message)
    }
  }

const deleteCategoryController = async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "delete a category",
      });
    } catch (e) {
      res.json(e.message);
    }
  }
const updateCategoryController = async (req, res) => {
    try {
      res.json({
        status: "success",
        data: "update category",
      });
    } catch (e) {
      res.json(e.message);
    }
  }
module.exports ={
    createCategoryController,
    singleCategoryController,
    deleteCategoryController,
    updateCategoryController
}