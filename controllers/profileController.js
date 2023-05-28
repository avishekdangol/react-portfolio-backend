const { Meta } = require('../models/schemas');

module.exports = {
  getProfile: async (req, res) => {
    const meta = await Meta.find();

    const profile = meta.reduce((obj, item) => {
      obj[item.key] = item.value;
      return obj;
    }, {})
    res.status(200).send(profile);
  },

  addProfileInfo: async (req, res) => {
    const data = req.body;
    const meta = await Meta.create(data);
    if (meta) res.status(200).send(meta);
    else res.status(500).send("Something went wrong!");
  },

  updateProfileInfo: async (req, res) => {
    const meta = await Meta.updateOne(
      { _id: req.body.id },
      {
        $set: {
          key: req.body.key,
          value: req.body.value,
        },
      },
    );
    res.status(200).send(meta);
  },
}