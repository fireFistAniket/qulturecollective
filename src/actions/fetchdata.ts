"use server";
export async function fetchTagBaseBlog(category: string) {
  try {
    const response = await fetch(
      `${process.env.STRIPE_API_URI}?&filters[blog_tags][$eq]=${category}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_CMS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllBlogs() {
  try {
    const response = await fetch(`${process.env.STRIPE_API_URI}?&populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_CMS_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchSingleBlog(id: string | number) {
  try {
    const response = await fetch(
      `${process.env.STRIPE_API_URI}/${id}?&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_CMS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
