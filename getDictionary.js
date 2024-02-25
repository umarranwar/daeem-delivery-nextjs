// const dictionaries = {
//   en: () => import("./dictionaries/en.json").then((r) => r.default || {}),
//   ar: () => import("./dictionaries/ar.json").then((r) => r.default || {}),
// };

// export const getDictionary = async (lang) => {
//   if (dictionaries[lang]) {
//     try {
//       return await dictionaries[lang]();
//     } catch (error) {
//       console.error(`Error loading dictionary for ${lang}:`, error);
//       return {}; // Return an empty object in case of error
//     }
//   } else {
//     console.error(`Unsupported language: ${lang}`);
//     return {}; // Return an empty object for unsupported languages
//   }
// };
