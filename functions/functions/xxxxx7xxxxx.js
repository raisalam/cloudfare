
export async function onRequest(context) {
	
  
  

  // Make the call to another server
  try {
    const { request } = context;
    const requestBody = await request.clone().text(); // Clone request to extract body
    const requestHeaders = Object.fromEntries(request.headers.entries()); // Get request 

	  // Print headers and body to logs
	  console.log('Request Headers:', requestHeaders);
	  console.log('Request Body:', requestBody);
  } catch (error) {
    console.error('Error making the request to the other server:', error);
  }
	
	
  const jsonResponse ={"result":{"\u0000QAU":"3616-GBMDR1lGVlNVAwNeRBobUkMOFAYKXVlaBVQDAUAaGwFBC0AAVlJSB1xTCQpeD1sBUgYERk0XXBYORwIFUwBmVFdTCxFBGQ==","\tUFGPPW":"T","\u0017DT@DD":"V\u0000\u0005","\u000fUL":"\u0001VPW\u0001\u0006VQ\u0004Q\u0000\b\u0004\f\u0001US\u0007\t\\\r\u0000\u0001\u0004W\\W\u0007\u0007Q\u0006\u0002","\u0001HE]CNf\f\bW":"3UQ\u0014XDEW\u0002\u0015\u0003\u0003\u0006\u0003C\u0003\u0005\u000bP\tX\t\u0000F#{b\u001bV\u0002QT\u0010\u001dw^X@\u0001\f\\TEVP\u00176\\_G\u0000K\u0011YZF0_[UO","\bSj@HGW":"W","\bSjCY^F\u0000":"\u0014_ZX\u001fYF\u0015K]GV\u001cWZMASC\u0000W\u0005\u0016[\u000f\n_U\\\u000fB\u0011\u0010\u001eV[\\EW\u0011J^\\GV\u0019T\f\\PX\u0002\u0017\u0012WY\nJ[_^\u000fQ\r\r@E@\u001eZ]\u0007\f^P\u001c_]A\u0006\u001cF^\nULU_\b\rUZY\u0016B\u0015KVTWTU]\n\u000e","\u0011@jBRXV\u0000":"W\u0005\r\u0006","\u0011@jB_V_\u0000":"Q\u0005\u001b\r\u001f\u0007","\u0007FQQ]CS":"S\u0002\u0005\u0004"}};

  return new Response(JSON.stringify(jsonResponse), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
