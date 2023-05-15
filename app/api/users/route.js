export async function GET(request) {
  // handle GET request for /api/user
  // retrieve user users from the database or any data database
  const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'},
  ]

  return new Response(JSON.stringify(users))

}