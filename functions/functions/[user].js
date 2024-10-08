export function onRequestGet(context) {
  const jsonResponse = {
      "\u001bU\u000bF\u0005R\u0006": "\u0005E\u001bV\u0001F\u0010",
      "\u0005D\u0019A\u0011F": "D\u0000H"
  };

  return new Response(JSON.stringify(context), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}

export async function onRequestPost(context) {
  const { request } = context;

  // Check if the request method is POST
  if (request.method === "POST") {
    try {
      // Get the JSON body from the request
      const requestBody = await request.json();

      // Log or process the JSON body as needed
      console.log("Received JSON body:", requestBody);

      // Return a response with the received JSON
      return new Response(JSON.stringify({ received: requestBody }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      // Handle errors, e.g., if the body is not valid JSON
      return new Response("Invalid JSON", { status: 400 });
    }
  } else {
    // If not a POST request, return a 405 Method Not Allowed
    return new Response("Method Not Allowed", { status: 405 });
  }
}

