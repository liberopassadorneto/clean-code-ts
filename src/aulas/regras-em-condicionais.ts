// Negação dentro de ifs

const isUserYoungerThan18 = true;
const doesUserLivesOutsideOfBrazil = true;

if (isUserYoungerThan18 && doesUserLivesOutsideOfBrazil) {
  console.log("User is younger than 18 and lives outside of Brazil");
}

// Early return vs else

function isUserOlderThan18Years(user) {
  if (!user) {
    return false;
  }

  return user.age >= 18;
}

// Evite condicionais aninhadas (nested)

user.age >= 18 ? "User is older than 18" : "User is younger than 18";

if(user.age > 18){
  return;
}

if()