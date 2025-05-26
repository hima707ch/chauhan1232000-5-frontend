const express = require('express');
const Property = require('./propertyModel');
const router = express.Router();

router.get('/properties/search', async (req, res) => {
  try {
    const { location, minPrice, maxPrice, type } = req.query;
    let query = {};
    if (location) query.location = new RegExp(location, 'i');
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (type) query.type = type;
    
    const properties = await Property.find(query);
    res.json(properties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
