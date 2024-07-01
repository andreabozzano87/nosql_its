/*
Quello che segue è una raccolta di comandi di MongoDB per le operazioni CRUD (Create, Read, Update, Delete).
Sono direttamente eseguibili in Compass, nella mongosh.
Ricordarsi di collegarsi al database corretto:

use myDatabase

Dove myDatabase è il database di lavoro.
*/

// documento di esempio
var documento = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    hobbies: ["reading", "hiking", "coding"]
  };

  // 1. Creazione di un documento
db.users.insertOne(documento);

// 2. Lettura di documenti
// a) Trova tutti i documenti nella collezione 'users'
db.users.find().pretty();

// b) Trova un documento che risponde alla query
var queryDocu = { name: "John Doe" }
db.users.findOne(queryDocu);

// c) Trova documenti con un filtro
var query = { age: { $gte: 25 } }
db.users.find(query).pretty();

// 3. Aggiornamento di documenti
// a) Aggiorna un singolo documento
var queryUpdate = { $set: { email: "john.doe.new@example.com" } }
db.users.updateOne(queryDocu,queryUpdate);

// b) Aggiorna più documenti
db.users.updateMany(
  { age: { $gte: 30 } },
  { $set: { status: "senior" } }
);

// 4. Cancellazione di documenti
// a) Cancella un singolo documento
db.users.deleteOne({ name: "John Doe" });

// b) Cancella più documenti
db.users.deleteMany({ age: { $lt: 18 } });

// 5. Operazioni di Indice
// a) Creazione di un indice
db.users.createIndex({ name: 1 });

// b) Visualizzazione degli indici
db.users.getIndexes();

// 6. Aggregazione
var pipeline = [
    { $match: { status: "completed" } },
    { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
    { $sort: { totalSpent: -1 } }
  ]
db.orders.aggregate(pipeline);

// 7. Altri comandi utili
// a) Conta il numero di documenti in una collezione
db.users.countDocuments();

// b) Rinomina una collezione
db.users.renameCollection("members");

// c) Rimuovi tutti i documenti da una collezione (ma conserva la collezione)
db.users.deleteMany({});

// d) Droppa una collezione
db.users.drop();
