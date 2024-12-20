// TimeChain Example Code
// This code demonstrates the basic functionality of TimeChain
// NOTE: This is a simplified example for demonstration purposes only.

const { ethers } = require("ethers");

// Simulated User Data
const users = [
  { id: 1, name: "Alice", timeBalance: 10 }, // 10 hours
  { id: 2, name: "Bob", timeBalance: 5 },   // 5 hours
];

// Function to tokenize time
function tokenizeTime(userId, hours) {
  const user = users.find((u) => u.id === userId);
  if (!user) {
    console.log("User not found.");
    return;
  }
  user.timeBalance += hours;
  console.log(`${hours} hours tokenized for ${user.name}.`);
}

// Function to exchange services
function exchangeService(fromUserId, toUserId, hours) {
  const fromUser = users.find((u) => u.id === fromUserId);
  const toUser = users.find((u) => u.id === toUserId);

  if (!fromUser || !toUser) {
    console.log("One or both users not found.");
    return;
  }

  if (fromUser.timeBalance < hours) {
    console.log(`${fromUser.name} does not have enough time tokens.`);
    return;
  }

  fromUser.timeBalance -= hours;
  toUser.timeBalance += hours;

  console.log(
    `${hours} hours transferred from ${fromUser.name} to ${toUser.name}.`
  );
}

// Example Usage
console.log("Initial Balances:", users);
tokenizeTime(1, 5); // Alice earns 5 hours
exchangeService(1, 2, 3); // Alice gives Bob 3 hours of service
console.log("Final Balances:", users);
