export async function onRequest(context) {
  try {
    // Make the call to another server
    const { request } = context;
    const requestBody = await request.clone().text(); // Clone request to extract body
    const requestHeaders = Object.fromEntries(request.headers.entries()); // Get request headers

    // Print headers and body to logs
    console.log('Request Headers:', requestHeaders);
    console.log('Request Body:', requestBody);

    // JSON response as string
    const jsonResponseString = '{"result":{"\\u0007\\u0003\\u0015X":"3686-Mi9tN3dnU0FyeThqSzlSaXhjMy8rSExmdjlNM0lDcmJZc3JSK1JCQWJha3B5Z1V3RlJzYXN5QkYrOWh1U3pPejU3KzVWdDRTSU0wZFNTQmJncU1nOW1QbkJYeU9oVVF3YnVjZ0k3Y05DNEk9","\\u000e\\u0007\\u0012JPWS":"S","\\u0010\\u0016\\u0000MDC":"QRQ"}}';

    // Return the string directly (no JSON.stringify)
    return new Response(jsonResponseString, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error('Error making the request to the other server:', error);
    return new Response(
      JSON.stringify({ status: "failure", message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
