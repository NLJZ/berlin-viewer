import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ cookies, fetch }) => {
  let data;
  const token = cookies.get("AuthorizationToken");
  if (!token) return { data };
  const res = await fetch("http://localhost:4000/users/authenticate", {
    mode: "cors",
    credentials: "include",
    headers: { Authentication: `${token}` },
  });
  if (res.status === 404) return data;
  data = await res.json();
  console.log("load");
  return {
    data,
  };
}) satisfies PageServerLoad;

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    let responseData;
    try {
      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "content-type": "application/json" },
      });

      if (!res.ok || !res) {
        console.log(res);
        throw new Error("HTTP error " + res.status);
      }
      responseData = await res.json();

      cookies.set("AuthorizationToken", `Bearer ${responseData.token}`, {
        httpOnly: true,
        path: "/",
        secure: true,
        sameSite: "strict",
        maxAge: 8 * 60 * 60 * 24,
      });
      return { success: true };
    } catch (error) {
      console.log("An error occurred:", error, "you dont like that");
    }
  },

  logout: async ({ cookies, request }) => {
    cookies.delete("AuthorizationToken");
    return { success: true };
  },
} satisfies Actions;
