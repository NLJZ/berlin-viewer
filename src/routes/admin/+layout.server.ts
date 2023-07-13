import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies, fetch }) => {
    let data;
    const token = cookies.get("AuthorizationToken") || '';
    const res = await fetch("http://localhost:4000/users/authenticate", {
      mode: "cors",
      credentials: "include",
      headers: { Authentication: `${token}` },
    });
    if (res.status === 401) {
      throw redirect(303, '/login');
    }
    else {
      data = await res.json();
      return {
        data,
      };
    }
  }) satisfies LayoutServerLoad;