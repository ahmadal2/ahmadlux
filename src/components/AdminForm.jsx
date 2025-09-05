import { useState } from "react";
import { storage, databases } from "../appwrite";

const AdminForm = ({ databaseId, collectionId, onAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Bitte Bild auswählen!");

    try {
      // Bild hochladen
      const uploadedFile = await storage.createFile(
        "car-images", // Bucket ID
        file.name,
        file
      );

      // Auto-Daten speichern
      const car = await databases.createDocument(
        databaseId,  // z.B. dein Database ID
        collectionId, // Collection ID 'cars'
        undefined,
        {
          name,
          description,
          image: uploadedFile.$id // Datei-ID speichern
        }
      );

      onAdded(car); // Parent informieren
      setName("");
      setDescription("");
      setFile(null);
      alert("Auto erfolgreich hinzugefügt!");
    } catch (err) {
      console.error(err);
      alert("Fehler beim Hinzufügen: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Fahrzeug Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <textarea 
        placeholder="Beschreibung" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
      />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Auto hinzufügen</button>
    </form>
  );
};

export default AdminForm;
