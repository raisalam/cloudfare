export function onRequest(context) {
  const jsonResponse ='{"result":{"\u001bU\u000bF\u0005R\u0006":"\u0005E\u001bV\u0001F\u0010","\u0005D\u0019A\u0011F":"D\u0000H"}}';

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
