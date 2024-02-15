import foodData from "../../data/foodData.json";
import storeData from "../../data/storeData.json";


export const getSingleFood = (id) => {
  const singleFood = foodData.find((item) => item.id === id);
  return singleFood;
};

export const getSingleStore = (store) => {
  const singleStore = storeData.find((item) => item.store === store);
  return singleStore;
};