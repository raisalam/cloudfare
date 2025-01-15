
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
	
	
 // const jsonResponse ={"result":{"\u0000QAU":"kpXeVgwOE9mZ3VkcWxrcWM3OXNsbVJnd2hlQW89","\tUFGPPW":"T","\u0017DT@DD":"V\u0000\u0005","\u000fUL":"\u0002\b\u0006WRQ\u0004]W\u000bP\u0005\u0005\u0001SP\u0003\u0007\u0000\u0001\b\u0004\\\u0000\u0002\u0002\u0004T\u0007SW\u0007","\u0001HE]CNf\f\bW":"\"B\\\u0014XDEW\u0000\u0015\u0003\u0003\u0006\u0003C\u0002\u0002\u000bW\rX\b\u0002F#{b\u001bV\u0002QT\u0010\u001dw^X@\u0001\f\\TEVP\u00176\\_G\u0000K\u0011YZF0_[UO","\bSj@HGW":"W","\bSjCY^F\u0000":"\u0014_ZX\u001fYF\u0015K]GV\u001cWZMASC\u0000W\u0005\u0016[\u000f\n_U\\\u000fB\u0011\u0010\u001eV[\\EW\u0011J^\\GV\u0019T\f\\PX\u0002\u0017\u0012WY\nJ[_^\u000fQ\r\r@E@\u001eZ]\u0007\f^P\u001c_]A\u0006\u001cF^\nULU_\b\rUZY\u0016B\u0015KVTWTU]\n\u000e","\u0011@jBRXV\u0000":"W\u0005\r\u0006","\u0011@jB_V_\u0000":"Q\u0005\u001b\r\u001f\u0007","\u0007FQQ]CS":"S\u0002\u0005\u0004"}};
//  const jsonResponse ={"result":{"\u0007\u0003\u0015X":"3686-L2M0Y09iekVkcVBZdDVRV0JvMzh6T2RnWW96VzhXVHRVd1hHTTFFZ3NQMG1sZ0haUWdKdU1pUC9OcmhSL1RrZ29yK2NXNjVjb09rV2Y4TkZ3M1hsb0pzOUhFRmkxbzg5Qmx0SXJVK2Zxd3M9","\u000e\u0007\u0012JPWS":"S","\u0010\u0016\u0000MDC":"QRQ","\b\u0007\u0018":"Q\u0001X\u0001U\u0004WTWUV\\V\u0004W\u0005\u0007U\u0001\\\u0003\u0007\u0006Q\u0001\u0003\u0003U\u0007QVP","\u0006\u001a\u0011PCIb\\^\u0000":"7\n\u0014\u0019wUT\u0015\u0003S\u0010\n\u0005\u0006\u0001D\u0006TX\f\u0002YRQ\u0015q{bI\u0002\u0007TSBIz^_DQZ\u000bQLPP\u00141Y\n\u0014\\A\u0010\u0002\u000f\u0015b_[\u0007\u001b","\u000f\u0001>MH@S":"P","\u000f\u0001>NYYBP":"\u0013\r\u000eU\u001f^BE\u001d\nB_\u001aWYJD\u0006\u0010\\]\u0004M\u000e\\X_U\u000e[G\u0014\u0017L\u0002V\\BSA\u001c\tYNP\u0019W\u000bY\u0005\u000b^\u001d\u0013\f\fY\u0018[_\f[T\b\n\u0012\u0011M\u001e]YWZ\tU\u0015Y]B\u0001\u0019\u0013\rV_M\u000e\n[_UZ\u000bBG\u0010L\u0004\u0000ZTRYZX","\u0016\u0012>OR_RP":"PWY\u000b","\u0016\u0012>O_Q[P":"VWO\u0000\u001f\u0000","\u0000\u0014\u0005\\]DW":"TPQ\t"}};
  const jsonResponse ={"result":{"\u0007\u0003\u0015X":"3686-L2M0Y09iekVkcVBZdDVRV0JvMzh6T2RnWW96VzhXVHRVd1hHTTFFZ3NQMG1sZ0haUWdKdU1pUC9OcmhSL1RrZ29yK2NXNjVjb09rV2Y4TkZ3M1hsb1pzOUhFRmkxbzg5Qmx0SXJVK2Zxd3M9","\u000e\u0007\u0012JPWS":"S","\u0010\u0016\u0000MDC":"QRQ","\b\u0007\u0018":"Q\u0001X\u0001U\u0004WTWUV\\V\u0004W\u0005\u0007U\u0001\\\u0003\u0007\u0006Q\u0001\u0003\u0003U\u0007QVP","\u0006\u001a\u0011PCIb\\^\u0000":"7\n\u0014\u0019wUT\u0015\u0003S\u0010\n\u0005\u0006\u0001D\u0006TX\f\u0002YRQ\u0015q{bI\u0002\u0007TSBIz^_DQZ\u000bQLPP\u00141Y\n\u0014\\A\u0010\u0002\u000f\u0015b_[\u0007\u001b","\u000f\u0001>MH@S":"P","\u000f\u0001>NYYBP":"\u0013\r\u000eU\u001f^BE\u001d\nB_\u001aWYJD\u0006\u0010\\]\u0004M\u000e\\X_U\u000e[G\u0014\u0017L\u0002V\\BSA\u001c\tYNP\u0019W\u000bY\u0005\u000b^\u001d\u0013\f\fY\u0018[_\f[T\b\n\u0012\u0011M\u001e]YWZ\tU\u0015Y]B\u0001\u0019\u0013\rV_M\u000e\n[_UZ\u000bBG\u0010L\u0004\u0000ZTRYZX","\u0016\u0012>OR_RP":"PWY\u000b","\u0016\u0012>O_Q[P":"VWO\u0000\u001f\u0000","\u0000\u0014\u0005\\]DW":"TPQ\t"}};

  return new Response(JSON.stringify(jsonResponse), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
