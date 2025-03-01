const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAllUsers() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const usersData = Object.values(data);
    return usersData;
  },
};
