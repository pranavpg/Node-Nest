import readline from "readline";
import { handleRead, handleWrite, handleDelete, handleList, } from "./controllers/fileController.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Welcome to Node File Manager CLI!");
console.log("Commands: read, write, delete, list, exit\n");
const ask = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
};
const run = async () => {
    while (true) {
        const command = (await ask("Enter command: ")).trim();
        if (command === "exit") {
            console.log("screen closed");
            rl.close();
            break;
        }
        try {
            switch (command) {
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
                    console.log("Invalid command. Try again.");
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
        console.log("");
    }
};
run();
//# sourceMappingURL=index.js.map