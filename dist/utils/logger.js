import fs from "node:fs/promises";
import path from "node:path";
const logPath = path.join("logs", "app.log");
export const log = async (message) => {
    const time = new Date().toISOString();
    const logMessage = `[${time}] ${message}\n`;
    await fs.mkdir(path.dirname(logPath), { recursive: true });
    await fs.appendFile(logPath, logMessage);
};
//# sourceMappingURL=logger.js.map