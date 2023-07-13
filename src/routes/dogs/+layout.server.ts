import type { LayoutServerLoad } from '../admin/$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies, fetch }) => {
  let data;
  const token = cookies.get("AuthorizationToken") || '';
  console.log(token);
  const res = await fetch("http://localhost:4000/users/authenticate", {
    mode: "cors",
    credentials: "include",
    headers: { Authentication: `${token}` },
  });
  console.log(res);
  if (res.status === 401) {
    throw redirect(300, '/admin/login');
  }
  else {
    data = await res.json();
    return {
      data,
    };
  }
}) satisfies LayoutServerLoad;
