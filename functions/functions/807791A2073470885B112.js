export function onRequest(context) {
  const jsonResponse = {"error":"Username and Password Incorrect | Join Telegram @PhuongDoxD"};

  return new Response(JSON.stringify(jsonResponse), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
