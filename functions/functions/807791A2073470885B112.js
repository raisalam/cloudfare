export function onRequest(context) {
  const jsonResponse = {"error":"Username and Password Incorrect | Join Telegram @PhuongDoxD"};

  return new Response(JSON.stringify(jsonResponse), {
    status: 400,
    headers: {
      "content-type": "application/json"
    }
  });
}
