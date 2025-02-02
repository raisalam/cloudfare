export async function onRequest(request) {
    try {
      const requestData = await request.json();
      console.log("Request body:", requestData);

      // Sample encrypted JSON response
      const jsonResponse = {
        "data": "3686-MVBWaGt4Mm5qamVsTTU1YmN1YWVUcWhKWVVZTC95eE51aWMzaURxTHhVMUNjQ2YvZ3dkemoyQ3V5S2o5eUpLZGFmdDFhS3pJVmxjdUFuV01wOHU3SlBvTHVGMUNXRUNBRTRkUlNyclhWKzg9",
        "message": "0",
        "status": "200",
        "key": "2c98d4aad0fdc0ca06ce0de2455ceca4",
        "expiryTime": "Thu Feb 06 2025 17:51:12 GMT+0000 (Coordinated Universal Time)",
        "lc_type": "3",
        "lc_white": "pool.ntp.org/cm.sereng.miniclippt.comret/live-config.pool.miniclippt/mobile-live.pool.miniclippt/facebook",
        "up_vcode": "3582",
        "up_vname": "55.9.0",
        "cvdelta": "7200"
      };

      // Decrypt the request
      const decryptedData = await decryptRequest(requestData);
      const androidId = await getMd5(decryptedData.c);
      console.log("Android ID:", androidId);

      // Encrypt and return response
      const encryptedResponse = await encryptResponse(androidId, jsonResponse);
      console.log("Encrypted response:", encryptedResponse);

      return new Response(JSON.stringify(encryptedResponse), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error processing request:", error);
      return new Response(JSON.stringify({ status: "failure", message: error.message }), {
        headers: { "Content-Type": "application/json" },
      });
    }
};

// Decrypt the incoming request and parse JSON
async function decryptRequest(request) {
  try {
    let jsonObject = typeof request === "string" ? JSON.parse(request) : request;
    let hashMap = {};

    for (let key of Object.keys(jsonObject)) {
      let value = jsonObject[key];
      if (key === "a" || key === "b" || key === "c") {
        hashMap[key] = await decrypt(value);
      } else if (key === "e" || key === "f" || key === "g" || key === "h") {
        hashMap[key] = await decrypt(value);
      } else {
        hashMap[key] = value;
      }
    }
    return hashMap;
  } catch (e) {
    console.error("Error in decryptRequest:", e);
    return {};
  }
}

// XOR decryption method
async function decrypt(str) {
  const REQUEST_KEY = "t8V0x5z6c7f2j4a8s7d6h3k1m9p0q2r5";
  let sb = "";
  for (let i = 0; i < str.length; i++) {
    let charAt = str.charCodeAt(i);
    sb += String.fromCharCode(charAt ^ REQUEST_KEY.charCodeAt(i % REQUEST_KEY.length));
  }
  return sb;
}

// Encrypt response object using XOR encryption
async function encryptResponse(androidId, response) {
  return await encryptResponse1(androidId, response);
}

async function encryptResponse1(encKey, response) {
  try {
    let hashMap = {};
    Object.keys(response).forEach((key) => {
      const encryptedKey = encryptResponseInternal(key, encKey);
      let value = response[key];

      if (key === "data") {
        console.log("inside data");
        console.log(value);
        hashMap[encryptedKey] = value;
      } else {
        hashMap[encryptedKey] = encryptResponseInternal(value, encKey);
      }
    });

    console.log("Encrypted JSON:", JSON.stringify(hashMap));
    return hashMap;
  } catch (e) {
    console.error(e);
    return { error: e.toString() };
  }
}

// XOR encryption for key-value pairs
function encryptResponseInternal(input, key) {
  if (typeof input !== "string") {
    console.error("encryptResponseInternal Error: 'input' is not a string:", input);
    input = String(input);
  }
  if (typeof key !== "string" || key.length === 0) {
    console.error("encryptResponseInternal Error: 'key' is invalid:", key);
    throw new Error("Encryption key is invalid or missing.");
  }

  let output = "";
  for (let i = 0; i < input.length; ++i) {
    output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return output;
}

// Web Crypto API for MD5 Hashing in Cloudflare Workers
async function getMd5(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("MD5", data);
  return [...new Uint8Array(hashBuffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
