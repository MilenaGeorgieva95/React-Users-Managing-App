const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAllUsers() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const usersData = Object.values(data);

    return usersData;
  },
  async createUser(userData) {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      imageUrl,
      country,
      city,
      street,
      streetNumber,
    } = userData;

    const postData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      imageUrl,
      address: {
        country,
        city,
        street,
        streetNumber,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    const res = await fetch(baseUrl, options);
    const data = await res.json();
    return data;
  },
  async getOneUser(userId) {
    const res = await fetch(baseUrl + "/" + userId);
    const data = await res.json();
    const userData = data;
    console.log(userData);
    return userData;
  },
  async delUser(userId) {
    const options = {
      method: "POST",
    };
    const res = await fetch(baseUrl, options);
    const data = await res.json();
    return data;
  },
};
