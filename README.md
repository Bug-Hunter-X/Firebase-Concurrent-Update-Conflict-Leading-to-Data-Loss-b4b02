# Firebase Concurrent Update Conflict

This repository demonstrates a common yet subtle issue in Firebase Firestore: data loss due to concurrent updates to the same document without proper conflict resolution.

The `bug.js` file shows the problematic code where two clients attempt to increment a counter simultaneously. This often leads to one update overwriting the other, resulting in an incorrect final count.

The `bugSolution.js` file illustrates a robust solution using Firestore transactions to ensure atomicity and prevent data loss.  The transaction guarantees that both increment operations are applied sequentially, preventing conflicts.

This example highlights the importance of handling concurrent updates carefully when building applications with Firebase Firestore.