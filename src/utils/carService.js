import { databases, storage } from "../appwrite";

export const addCar = async (name, description, imageUrl) => {
  await databases.createDocument(
    "carweb_db",  // Database ID
    "cars",       // Collection ID
    "unique()",
    { name, description, image: imageUrl }
  );
};

export const fetchCars = async () => {
  const res = await databases.listDocuments("carweb_db", "cars");
  return res.documents;
};

export const uploadImage = async (file) => {
  const uploaded = await storage.createFile("car-images", "unique()", file);
  return storage.getFileView("car-images", uploaded.$id); // URL für DB speichern
};
