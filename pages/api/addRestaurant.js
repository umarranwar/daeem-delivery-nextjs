import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { name, location } = req.body;

  // Read existing data from the JSON file
  const filePath = path.join(process.cwd(), 'data', 'restaurants.json');
  const rawData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(rawData);

  // Create a new restaurant object
  const newRestaurant = {
    id: restaurants.length + 1, // Assign a unique ID
    name,
    location,
  };

  // Add the new restaurant to the existing data
  restaurants.push(newRestaurant);

  // Write the updated data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(restaurants, null, 2));

  res.status(200).json({ message: 'Restaurant added successfully!', restaurant: newRestaurant });
}
