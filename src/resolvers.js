import { users } from "./db";

let date = new Date().toLocaleDateString("fr-FR");

const resolvers = {
  Query: {
    currentDate: () => date,
  },
};

export default resolvers;
