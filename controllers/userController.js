const Models = require("../models/index");

module.exports = {
  insert: async (req, res) => {
    try {
      let objToSave = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      };
      let response = await Models.userModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
 
  getRecord: async (req, res) => {
    try {
      let result = await Models.userModel.findAll();
      return res.send(result);
    } catch (error) {
      console.log(error); 
      throw error;
    }
  },

  updateSomeRecord: async (req, res) => {
    try {
      await Models.userModel.update(
        { name: req.body.name },
        { where: { id: req.body.id } }
      );
      let response = await Models.userModel.findOne({
        where: { id: req.body.id },
        raw: true,
      });
      return res.send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  findAndCountRecord: async(req, res) => {
    try{
     
      let response = await Models.userModel.findAndCountAll();
       return res.send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
count:  async(req, res) => {
  try{
    let response = await Models.userModel.count();
     return res.send(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
};
