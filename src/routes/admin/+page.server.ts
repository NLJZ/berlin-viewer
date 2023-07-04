import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch("http://localhost:4000/users/authenticate");
  const data = await res.json();
  console.log('load');
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
  
      if (!res.ok) {
        console.log(res);
        throw new Error("HTTP error " + res.status);
      }
      responseData = await res.json();
      console.log("the response", responseData);

      cookies.set('AuthorizationToken', `${responseData.token}`, {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 8 * 60 * 60 * 24
      });
    } catch (error) {
      console.log("An error occurred:", error);
    }



  },
} satisfies Actions;
