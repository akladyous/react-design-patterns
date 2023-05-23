export async function getUsers(user_id) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';
  const url = user_id ? baseUrl.concat('/', user_id) : baseUrl;
  const response = await fetch(url, { next: { revalidate: 20 } });

  if (!response.ok) return undefined;
  return response.json();
}
