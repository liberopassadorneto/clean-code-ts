// Rota para criação do user (name, email, password)
// Controller (name, email, password)
// Repository (name, email, password)

// http://localhost:3333/users/3
function createUserRoute({ body, params }) {
  const { name, email, password } = body;

  // validações

  createUserController({ name, email, password });
}

createUserRoute({
  body: { name, email, password },
  params: { id: 1 },
});

createUserRoute({ params: { id: 1 } });

function createUserController(data) {
  const { name, email, password } = data;

  usersRepository.create({ name, email, password });
}

const usersRepository = {
  create(data) {
    // cria user (name, email, password)
    const user = createUserOnDatabase(data);

    return {
      user,
    };
  },
};
