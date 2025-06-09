export const getUsers = () => {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('usuarios', JSON.stringify(users));
};
