const { Client, Databases, Storage, Account } = require('appwrite');
const { v4: uuidv4 } = require('uuid');

const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1")
client.setProject("647769963d8c335861a4")


 const database = new Databases(client,"64787ed6dfed97614a03")

 
database.listDocuments("64787cd7520487b4dfb2","64787ed6dfed97614a03")
.then(
    response=>{
        const documents = response.documents
        console.log('Documents',documents)
    }
)
.catch(
    error=>{
        console.log('Error retrieving documents',error)
    }
)

database.createDocument("64787cd7520487b4dfb2",uuidv4(),
{
    "Title":"Callister Text Book"
},


{
    "Title": "Callister Manual"
})
.then(
    response=>
    {
        const document = response.$id
        console.log('New Document',document)
    })
.catch (
    error=>
    {
        console.error('Error creating document:',error)
    }
)
