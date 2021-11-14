const storage = window.localStorage;

const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    alert(error);
  }
};

const getItem = (key, defaultValue) => {
  try {
    const storedData = storage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return defaultValue;
    }
  } catch (error) {
    return defaultValue;
  }
};

export { getItem, setItem };
