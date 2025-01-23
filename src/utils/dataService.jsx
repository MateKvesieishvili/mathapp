const STORAGE_KEY = "mathCards";

/**
 * Fetch all cards from localStorage
 * @returns {Array} 
 */
export const getCards = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Save all cards to localStorage
 * @param {Array} cards - Array of cards to save
 */
export const saveCards = (cards) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};
