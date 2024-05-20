import sql from "better-sqlite3";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  //   throw new Error("Loading meals failed...");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // const extension = meal.image.name.split(".").pop();
  // const fileName = `${meal.title}.${extension}`;

  // const stream = fs.createWriteStream(`/public/images/${fileName}`);

  // const bufferedImages = meal.image.arrayBuffer();
  // stream.write(Buffer.from(bufferedImages));

  db.prepare("INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES(@title, @slug,  @image,@summary,@instructions,  @creator, @creator_email)").run(meal);
}
