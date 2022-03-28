import fs from "fs";
import path from "path";

const projectsPath = path.join(process.cwd(), "other/projects.json");

export function getProjects() {
  const file = fs.readFileSync(projectsPath, "utf8");
  return JSON.parse(file);
}
