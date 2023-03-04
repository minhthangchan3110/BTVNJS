function allUsersValid(goodUsers, submittedUsers) {
  return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id;
      });
  });
}


console.log(
  allUsersValid([
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ], [
    { id: 2 },
    { id: 1 }
  ])

); 