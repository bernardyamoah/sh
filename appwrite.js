const { Client, Databases } = require('appwrite');
const { v4: uuidv4 } = require('uuid');

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("647769963d8c335861a4");

const database = new Databases(client, "64787ed6dfed97614a03");

database.listDocuments("64787cd7520487b4dfb2", "64787ed6dfed97614a03")
  .then(response => {
    const documents = response.documents;
    console.log('Documents:', documents);
  })
  .catch(error => {
    console.log('Error retrieving documents:', error);
  });

const documentId = uuidv4().substring(0, 36); // Generate a UUID and truncate to maximum length

