import type { PageServerLoad, Actions } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    let responseData;

      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "content-type": "application/json" },
      });

      if (!res.ok || !res) {
        throw redirect(303, '/login');
      }
      
      responseData = await res.json();

      cookies.set("AuthorizationToken", `Bearer ${responseData.token}`, {
        httpOnly: true,
        path: "/",
        secure: true,
        sameSite: "strict",
        maxAge: 8 * 60 * 60 * 24,
      });
      throw redirect(303, '/admin');
  },

  logout: async ({ cookies }) => {
    cookies.delete("AuthorizationToken");
    return { success: true };
  },
} satisfies Actions;
