// Nomenclatura de variaveis

const users = ["Diego", "Robson", "Victor"];

const usersStartingWithLetterD = users.filter((user) => {
  return user.startsWith("D");
});

// --------------------

// Evite nomes genericos para variaveis (data, response, list, args, params, etc)

function getUsers() {
  const users = getUsersFromDatabase();

  // validação
  // manipulação dos dados (mapping)

  return users;
}
