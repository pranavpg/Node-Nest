import readline from "readline";
import {
  handleRead,
  handleWrite,
  handleDelete,
  handleList,
} from "./controllers/fileController.js";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to  File Manager CLI");
console.log("choose input: read, write, delete, list, exit\n");

const ask = (question: string): Promise<string> => {
  return new Promise((resolve) => readLine.question(question, resolve));
};

const run = async () => {
  while (true) {
    const userInput = (await ask("Enter Your Input: ")).trim();

    if (userInput === "exit") {
      console.log("screen closed");
      readLine.close();
      break;
    }

    try {
      switch (userInput) {
        case "read": {
          const path = (await ask("Enter file path: ")).trim();
          await handleRead(path);
          break;
        }
        case "write": {
          const path = (await ask("Enter file path: ")).trim();
          const content = await ask("Enter content:");
          await handleWrite(path, content);
          break;
        }
        case "delete": {
          const path = (await ask("Enter file path: ")).trim();
          await handleDelete(path);
          break;
        }
        case "list": {
          const dir = (await ask("Enter directory path: ")).trim();
          await handleList(dir);
          break;
        }
        default:
          console.log("Invalid userInput. Try again.");
        }
    }catch (error) {
      console.error("Error:", error);
    }
    
    console.log("");
    console.log("");
  }
};

run();