The solution uses Firestore transactions to ensure atomicity and prevent data loss:

```javascript
db.runTransaction(transaction => {
  return transaction.get(db.collection('myCollection').doc('myDoc')).then(doc => {
    const newCount = (doc.data().count || 0) + 1;
    transaction.update(db.collection('myCollection').doc('myDoc'), {
      count: newCount
    });
    return newCount; // Return the new count
  });
}).then(newCount => {
  console.log('Transaction successful, new count:', newCount);
}).catch(error => {
  console.error('Transaction failed:', error);
});
```

This transaction ensures that the increment operation is atomic. If multiple clients attempt to update the document concurrently, only one transaction will succeed, preventing data loss.  The transaction ensures that the read and write operations are bundled together, avoiding race conditions.