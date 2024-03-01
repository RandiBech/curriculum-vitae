import axios from "axios";

export class User {
  name: string;
  email: string;
  title: string;

  constructor(name: string, email: string, title: string) {
    this.name = name;
    this.email = email;
    this.title = title;
  }
}

export class UserClient {
  /**
   *
   */
  constructor() {}

  getAllUsers = async () => {
    const response = await axios
      .get(
        "https://curriculum-vitae-39869-default-rtdb.firebaseio.com/users.json?print=pretty"
      )
      .then((data) => {
        return data;
      });
    console.log("response", response.data);
    return new User(
      response.data.name,
      response.data.email,
      response.data.title
    );
  };

  getUser = async (userId: string) => {
    const response = await axios
      .get(
        `https://curriculum-vitae-39869-default-rtdb.firebaseio.com/users/${userId}.json?print=pretty`
      )
      .then((data) => {
        return data;
      });
    console.log("response", response.data);
    return new User(
      response.data.name,
      response.data.email,
      response.data.title
    );
  };
}
