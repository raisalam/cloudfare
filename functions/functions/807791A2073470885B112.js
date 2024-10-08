export function onRequest(context) {
  const jsonResponse = {
    status: 200,
    message: "Login success"
  };

  return new Response(JSON.stringify(jsonResponse), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
