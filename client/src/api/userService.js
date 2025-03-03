const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAllUsers() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const usersData = Object.values(data);
    return usersData;
  },
  async createUser(userData) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const res = await fetch(baseUrl, options);
    const data = await res.json();
    return data;
  },
};
