import * as fs from "fs/promises";

try {
  await fs.appendFile("ReadMe.md","\n is the best");
} catch (error) {
  console.log(error);
}
