// Nomenclatura de variáveis

const users = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getData(req, res) {
  const githubUsername = String(req.query.username);

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const user = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (user.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`,
    });
  }

  const dataUserResponse = await user.json();

  const usersSortByNumberOfFollowers = users.sort(
    (a, b) => b.followers - a.followers
  );

  const userCategory = usersSortByNumberOfFollowers.find(
    (category) => dataUserResponse.followers > category.followers
  );

  const result = {
    githubUsername,
    category: userCategory.title,
  };

  return result;
}

getData(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
