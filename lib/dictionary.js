const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  de: () => import("../dictionaries/de.json").then((module) => module.default),
};

export const getDictionary = async locale => {
  try {
    const module = await import(`../dictionaries/${locale}.json`);
    return module.default || {}; // Return default export or an empty object if not found
  } catch (error) {
    console.error('Error loading dictionary:', error);
    return {}; // Return an empty object in case of an error
  }
};
