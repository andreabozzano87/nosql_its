// Vediamo un po' di aggregazioni

/* 
1. $match: in pratica è il find, la sintassi è:
db.orders.aggregate([
    {
      $match: {query}
    }
  ])

*/
db.orders.aggregate([
    {
      $match: { status: "completed" }
    }
  ])
  


/*
2. $group: per raggruppare i documenti, simile al GROUP BY, e si aggiunge
un accumulatore come $sum, $avg, $min, $max, $push, $addToSet

{
  $group: {
    _id: <expression>,  // Campo per raggruppare i documenti
    <field1>: { <accumulator1>: <expression1> },
    <field2>: { <accumulator2>: <expression2> },
    ...
  }
}
*/

db.sales.aggregate([
    {
      $group: {
        _id: "$productId",
        totalSales: { $sum: "$quantity" },
        avgPrice: { $avg: "$price" }
      }
    }
  ])
  
/* 
$set e $unset: servono per impostare e cancellare campi: set lo imposta, unset lo cancella.
*/

// setta il campo totalPrice con il valore ottenuto moltiplicando quantità*prezzo
db.orders.aggregate([
    {
      $set: {
        totalPrice: { $multiply: ["$price", "$quantity"] }
      }
    }
  ])

// rimuovi il campo password dai documenti
db.users.aggregate([
    {
      $unset: "password"
    }
  ])

/*
$unwind serve per "srotolare" gli array, crea un documento (nell'aggregazione) per ogni elemento
*/

db.orders.aggregate([
    {
      $unwind: "$items"
    }
  ])

/* 
Pipeline complete
*/
db.users.aggregate([
    //1° step: unwind del campo "hobbies"
    {
      $unwind: "$hobbies"
    },
    //2° step: raggruppa i documenti per hobbies e conta le occorrenze di ciascuno
    {
      $group: {
        _id: "$hobbies",
        userCount: { $sum: 1 }
      }
    }
  ])
  