const mongoose = require('mongoose');
const User = require('./userModel');
const Property = require('./propertyModel');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function initializeDb() {
  // Create admin user
  await User.create({
    email: 'admin',
    password: 'admin',
    name: 'Admin User'
  });

  // Create sample properties
  await Property.insertMany([
    {
      title: 'Luxury Villa',
      description: 'Beautiful villa with ocean view',
      price: 1000000,
      location: 'Miami Beach',
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      type: 'Villa'
    },
    {
      title: 'City Apartment',
      description: 'Modern apartment in downtown',
      price: 500000,
      location: 'New York City',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: 'Apartment'
    }
  ]);

  console.log('Database initialized with sample data');
  process.exit(0);
}

initializeDb();
