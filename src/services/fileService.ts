import fs from "node:fs/promises";
import { dirname } from "node:path";

export const readFileSafe = async (path: string) => {
  let stats;
  try {
    stats = await fs.stat(path);
  } catch {
    throw new Error(`File not exist: ${path}`);
  }

  if (stats.isDirectory()) {
    throw new Error("Cannot read a dir.wrong path");
  }

  return await fs.readFile(path, "utf-8");
};


export const writeFileSafe = async (path: string, content: string) => {
  const dir = dirname(path);
  try {
    const dirStats = await fs.stat(dir);
    if (!dirStats.isDirectory()) throw new Error(`Directory path is not valid: ${dir}`);
  } catch {
    throw new Error(`Directory does not exist: ${dir}`);
  }

  try {
    const fileStats = await fs.stat(path);
    if (fileStats.isDirectory()) throw new Error("Cannot write to a directory. Provide a file path.");
  } catch {
  }

  await fs.writeFile(path, content, "utf-8");
};


export const deleteFileSafe = async (path: string) => {
  let stats;
  try {
    stats = await fs.stat(path);
  } catch {
    throw new Error(`File not exist: ${path}`);
  }

  if (stats.isDirectory()) {
    throw new Error("wrong path! can't delete");
  }

  await fs.unlink(path);
};


export const listFilesSafe = async (dir: string) => {
  let stats;
  try {
    stats = await fs.stat(dir);
  } catch {
    throw new Error(`Directory does not exist: ${dir}`);
  }

  if (!stats.isDirectory()) {
    throw new Error("wrong path");
  }

  return await fs.readdir(dir);
};


