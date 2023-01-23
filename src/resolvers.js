import { users } from "./db";

let date = new Date().toLocaleDateString("fr-FR");

const resolvers = {
  Query: {
    currentDate: () => date,
    users: () => {
      return users;
    },
  },
};

export default resolvers;
