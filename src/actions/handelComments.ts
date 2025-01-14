"use server";

import { revalidatePath } from "next/cache";

export async function submitComment(
  username: string,
  blogId: string,
  comment: string,
  rating: string | number
) {
  try {
    const response = await fetch(`${process.env.STRIPE_COMMENT_API_URI}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRIPE_CMS_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          username,
          remark: comment,
          qulture_collective_blog: {
            id: blogId,
          },
          rating,
          websiteid: "d73a5757-f43d-4520-94f6-e2657ade17c5",
        },
      }),
    });
    const result = await response.json();
    revalidatePath(`/blogdetails/${blogId}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
