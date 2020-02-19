import app from "./App";
// import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();
// const config = dotenv.parse(fs.readFileSync('../.env'));
// for (const value in config) {
//   process.env[value] = config[value];
// }
const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server is listening on ${port}`);
});
