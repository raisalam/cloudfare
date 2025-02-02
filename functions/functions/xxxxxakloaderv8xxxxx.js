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
    const jsonResponseString = '{"result":{"\u0007\u0003\u0015X":"3653-Yi9tN3dnU0FyeThqSzlSaXhjMy8rSExmdjlNM0lDcmJZc3JSK1JCQWJha3B5Z1V3RlJzYXN5QkYrOWh1U3pPejU3KzVWdDRTSU0wZFNTQmJncU1nOW1QbkJYeU9oVVF3YnVjZ0k3Y05DNEk9","\u000e\u0007\u0012JPWS":"S","\u0010\u0016\u0000MDC":"QRQ","\b\u0007\u0018":"Q\u0001X\u0001U\u0004WTWUV\\V\u0004W\u0005\u0007U\u0001\\\u0003\u0007\u0006Q\u0001\u0003\u0003U\u0007QVP","\u0006\u001a\u0011PCIb\\^\u0000":"7\n\u0014\u0019wUT\u0015\u0003S\u0010\n\u0005\u0006\u0001D\u0006TX\f\u0002YRQ\u0015q{bI\u0002\u0007TSBIz^_DQZ\u000bQLPP\u00141Y\n\u0014\\A\u0010\u0002\u000f\u0015b_[\u0007\u001b","\u000f\u0001>MH@S":"P","\u000f\u0001>NYYBP":"\u0013\r\u000eU\u001f^BE\u001d\nB_\u001aWYJD\u0006\u0010\\]\u0004M\u000e\\X_U\u000e[G\u0014\u0017L\u0002V\\BSA\u001c\tYNP\u0019W\u000bY\u0005\u000b^\u001d\u0013\f\fY\u0018[_\f[T\b\n\u0012\u0011M\u001e]YWZ\tU\u0015Y]B\u0001\u0019\u0013\rV_M\u000e\n[_UZ\u000bBG\u0010L\u0004\u0000ZTRYZX","\u0016\u0012>OR_RP":"PWY\u000b","\u0016\u0012>O_Q[P":"VWO\u0000\u001f\u0000","\u0000\u0014\u0005\\]DW":"TPQ\t"}}';

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
