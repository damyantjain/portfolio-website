export const BASE_URL = "http://localhost:1337";
export const API_URL = `${BASE_URL}/api`;
export const POSTS_URL = `${API_URL}/blogs?&fields=title&fields=slug&fields=date&fields=description&populate[Image][fields][0]=name&populate[Image][fields][1]=url`;