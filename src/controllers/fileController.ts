import * as fileService from "../services/fileService.js";
import { log } from "../utils/logger.js";

const cleanPathInput = (input: string) => {
  const trimmed = input.trim();
  return trimmed.replace(/^["'](.+)["']$/, "$1");
};

const executeAction = async (
  actionName: string,
  action: () => Promise<void>
) => {
  try {
    await action();  
    console.log(`${actionName} executed successfully.`);
  } catch (error: any) {
    console.error(`Error during ${actionName}:`, error.message);
  }
};

export const handleRead = async (path: string) => {
  await executeAction("Read file", async () => {
    const cleanPath = cleanPathInput(path);
    const data = await fileService.readFileSafe(cleanPath);
    console.log("File content:\n", data);
    await log(`Read file: ${cleanPath}`);
  });
};

export const handleWrite = async (path: string, content: string) => {
  await executeAction("Write file", async () => {
    const cleanPath = cleanPathInput(path);
    await fileService.writeFileSafe(cleanPath, content);
    await log(`Wrote file: ${cleanPath}`);
  });
};

export const handleDelete = async (path: string) => {
  await executeAction("Delete file", async () => {
    const cleanPath = cleanPathInput(path);
    await fileService.deleteFileSafe(cleanPath);
    await log(`Deleted file: ${cleanPath}`);
  });
};

export const handleList = async (dir: string) => {
  await executeAction("List directory", async () => {
    const cleanDir = cleanPathInput(dir);
    const files = await fileService.listFilesSafe(cleanDir);
    console.log("Files in directory:", files);
    await log(`Listed directory: ${cleanDir}`);
  });
};

