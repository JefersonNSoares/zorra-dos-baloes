import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDataStorage = (key, value) => {
  const valueJson = JSON.stringify(value);
  const responseStorage = AsyncStorage.setItem(key, valueJson);
  return responseStorage;
};

export const searchDataStorage = async (key) => {
    const valueStorage = await AsyncStorage.getItem(key);
    return valueStorage != null ? JSON.parse(valueStorage) : null;
};
