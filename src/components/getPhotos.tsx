import fs from "fs";
import path from "path";

export default function getPhotos(dir: string) {
  const dirPath = path.join(process.cwd(), "public", dir);
  const images = fs.readdirSync(dirPath);
  const imagePaths = images.map((image) => ({
    src: `${dir}/${image}`,
    alt: image,
    id: image,
  }));
  return imagePaths;
}
