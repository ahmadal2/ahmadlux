import { Client, Account, Databases, Storage } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("DEINE_PROJECT_ID"); // Your project ID

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export client for potential direct usage
export { client };

// Export configuration
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "DEINE_PROJECT_ID",
  databaseId: "YOUR_DATABASE_ID", // Add your database ID
  collectionId: "YOUR_COLLECTION_ID", // Add your collection ID
  bucketId: "YOUR_BUCKET_ID" // Add your storage bucket ID
};

// Helper function to check if Appwrite is properly configured
export const isAppwriteConfigured = () => {
  return client && client.config && client.config.projectId !== "DEINE_PROJECT_ID";
};

// Example usage functions (uncomment and customize as needed)
/*
export const createUser = async (email, password, name) => {
  try {
    const response = await account.create('unique()', email, password, name);
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await account.createEmailSession(email, password);
    return response;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};
*/