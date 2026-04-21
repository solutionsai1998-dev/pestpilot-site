import { promises as fs } from "node:fs";
import path from "node:path";

const blogDir = path.join(process.cwd(), "content", "blog");

export async function getBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(blogDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
