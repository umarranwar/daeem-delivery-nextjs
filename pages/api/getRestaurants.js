import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Read data from the JSON file
  const filePath = path.join(process.cwd(), 'data', 'restaurants.json');
  const rawData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(rawData);

  res.status(200).json(restaurants);
}
