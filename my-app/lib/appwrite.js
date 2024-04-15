import { Client, ID,Account } from 'react-native-appwrite';

export const appwrite = {
    endpoint:'https://cloud.appwrite.io/v1',
    Platform:'com.yatharthriti.scraper',
    projectId:'661cc06abfe83a5c5109',
    dataBases:'661cf0ea3914bded040b',
    userID:'661cf1612cca9138cec3',
    storageID:'661cf33448dd6586f246'
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(appwrite.endpoint) // Your Appwrite Endpoint
    .setProject(appwrite.projectId) // Your project ID
    .setPlatform(appwrite.Platform) // Your application ID or bundle ID.
;
const account = new Account(client);

// Register User
export const createUser = ({x})=>{
console.log(x)
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}