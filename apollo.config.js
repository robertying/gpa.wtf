const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

module.exports = {
  client: {
    includes: ["apis/**/*"],
    service: {
      name: "gpa.wtf",
      url: `${process.env.API_URL}/v1/graphql`,
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  },
};
