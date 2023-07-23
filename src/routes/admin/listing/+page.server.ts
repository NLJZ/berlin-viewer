import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies, fetch }) => {
    let data;
    const token = cookies.get("AuthorizationToken") || '';
    const res = await fetch("http://localhost:4000/listings/myListings", {
      mode: "cors",
      credentials: "include",
      headers: { Authentication: `${token}` },
    });
    data = res.json();
    return { data, token };
}) satisfies PageServerLoad;
