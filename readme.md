monogodb:-
In MongoDB, a database is a container that holds collections of documents. Each database can have multiple collections, and each collection contains documents with data.
MongoDB uses a JSON-like format called BSON (Binary Serialized Object Notation) to store data.
MongoDB is a NoSQL database, which means it does not use the traditional table-based relational database
-> chat ka image images file me save hai
har naye app ka data store hoga storage mein, per usey directly rakne ki jagah ek container mein rakhege, us container mein sirf us app ka data aayega 

ek app ka poora data => db
ek app mein variety of data hota hai par poora data hota app ka hi hai, par us data ka sub category kehlaata hai collection
collection matlab ki bola users ka data, ek user pe baat kri to hua document 
how to setup :-
1. download mongoDB
2. install mongoDB
3. require and setup connection
4. make schema
5. create and export 
6. schema matlab aapko ye batana banna waala har document mein kya kya hoga


Date base = har naye app ka store hoga storage mein, per usey directly rakne ki jagah ek container mein rakhege, us container mein sirf us app ka data aayega

Models = {
    schema = ek aap ka pura data => db 
ek aap mein variety of data hota hai par poora data hota app ka hi hai
Collection = ek app mein variety of data hota hai par poora data hota app ka hi
Document = har naye app ka store hoga storage mein, per usey directly rakne ki
}

-> create, read, update, delete
await = await keyword is used to wait for a promise to resolve. It is typically used in asynchronous functions to handle the result of an asynchronous operation.
async = async keyword is used to define an asynchronous function. It allows the function to perform operations that may take some time (like waiting for a network request to complete) without blocking the main thread of execution.
-> router.get('/create', function(req, res) {
    User.create({
        username: 'Divyanshu',
        name: 'Divyansh',
        age: 19
    });
});
client = cookie + session
session = server side storage
cookie = client side storage
-> find, findOne, findOneAndUpdate, findOneAndDelete
-> findOneAndUpdate = update krne ke liye
-> findOneAndDelete = delete krne ke liye
to run mongoose first download npm i mongoose 
for session 
npm i express-session
cookie = client side storage
session = server side storage
Flash = temporary storage
jab bhi kisi ejs page ko dekhege waha par aapko kisi prakar ka koi information dana hai, wo kehlata hai flash messages, they are more like  good looking alerts, warning and descripitions 
