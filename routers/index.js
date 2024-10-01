//module.exports = {
  //  userController: require("./userRoute"),
 //};
 //const Models = require("../models/index");

/*module.exports = {
  insert: async (req, res) => {
    try {
      const objToSave = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      };

      const response = await Models.userModel.create(objToSave);
      return res.status(201).json(response);
    } catch (error) {
      console.error("Error inserting record:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getRecord: async (req, res) => {
    try {
      const result = await Models.userModel.findAll();
      return res.json(result);
    } catch (error) {
      console.error("Error retrieving records:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  findAndCountAll: async (req, res) => {
    try {
      const { limit, offset } = req.query; // Assume you pass limit and offset as query parameters

      const { count, rows } = await Models.userModel.findAndCountAll({
        limit: parseInt(limit) || 10, // Default limit
        offset: parseInt(offset) || 0, // Default offset
      });

      return res.json({ totalCount: count, records: rows });
    } catch (error) {
      console.error("Error finding and counting records:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  count: async (req, res) => {
    try {
      const count = await Models.userModel.count();
      return res.json({ totalCount: count });
    } catch (error) {
      console.error("Error counting records:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateSomeRecord: async (req, res) => {
    try {
      const { name, id } = req.body;

      // Check if record exists before updating
      const record = await Models.userModel.findOne({ where: { id } });
      if (!record) {
        return res.status(404).json({ message: "Record not found" });
      }

      await Models.userModel.update({ name }, { where: { id } });
      const updatedRecord = await Models.userModel.findOne({
        where: { id },
        raw: true,
      });

      return res.json(updatedRecord);
    } catch (error) {
      console.error("Error updating record:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};*/
