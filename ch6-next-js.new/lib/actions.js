"use server";

import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: "/images/tomato-salad.jpg",
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    slug: "ini slug nya"
  };

  await saveMeal(meal);
}
