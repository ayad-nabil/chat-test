(function(g, e) {
    var f = {
            extend: function(a, c) {
                for (var h in c) - 1 !== "browser cpu device engine os".indexOf(h) && 0 === c[h].length % 2 && (a[h] = c[h].concat(a[h]));
                return a
            },
            has: function(a, c) {
                return "string" === typeof a ? -1 !== c.toLowerCase().indexOf(a.toLowerCase()) : !1
            },
            lowerize: function(a) {
                return a.toLowerCase()
            },
            major: function(a) {
                return "string" === typeof a ? a.split(".")[0] : e
            }
        },
        n = function() {
            for (var a, c = 0, h, b, d, k, g, f, p = arguments; c < p.length && !g;) {
                var q = p[c],
                    n = p[c + 1];
                if ("undefined" === typeof a)
                    for (d in a = {}, n) n.hasOwnProperty(d) &&
                        (k = n[d], "object" === typeof k ? a[k[0]] = e : a[k] = e);
                for (h = b = 0; h < q.length && !g;)
                    if (g = q[h++].exec(this.getUA()))
                        for (d = 0; d < n.length; d++) f = g[++b], k = n[d], "object" === typeof k && 0 < k.length ? 2 == k.length ? a[k[0]] = "function" == typeof k[1] ? k[1].call(this, f) : k[1] : 3 == k.length ? a[k[0]] = "function" !== typeof k[1] || k[1].exec && k[1].test ? f ? f.replace(k[1], k[2]) : e : f ? k[1].call(this, f, k[2]) : e : 4 == k.length && (a[k[0]] = f ? k[3].call(this, f.replace(k[1], k[2])) : e) : a[k] = f ? f : e;
                c += 2
            }
            return a
        },
        b = function(a, c) {
            for (var h in c)
                if ("object" === typeof c[h] &&
                    0 < c[h].length)
                    for (var b = 0; b < c[h].length; b++) {
                        if (f.has(c[h][b], a)) return "?" === h ? e : h
                    } else if (f.has(c[h], a)) return "?" === h ? e : h;
            return a
        },
        d = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        p = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                ["name", "version"],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    ["name",
                        "Opera"
                    ], "version"
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                ["name", "version"],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    ["name", "IE"], "version"
                ],
                [/(edge)\/((\d+)?[\w\.]+)/i],
                ["name", "version"],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    ["name", "Yandex"], "version"
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    ["name", /_/g, " "], "version"
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                [
                    ["name", "UCBrowser"], "version"
                ],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    ["name", "Dolphin"], "version"
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    ["name", "Chrome"], "version"
                ],
                [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                ["version", ["name", "MIUI Browser"]],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                ["version", ["name", "Android Browser"]],
                [/FBAV\/([\w\.]+);/i],
                ["version", ["name", "Facebook"]],
                [/fxios\/([\w\.-]+)/i],
                ["version", ["name", "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                ["version", ["name", "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                ["version", "name"],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                ["name", ["version", b, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                ["name", "version"],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    ["name", "Netscape"], "version"
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                ],
                ["name", "version"]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", f.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", f.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", f.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                ["model", "vendor", ["type", "tablet"]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                ["model", ["vendor", "Apple"],
                    ["type", "tablet"]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    ["model", "Apple TV"],
                    ["vendor", "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                [
                    ["model", b, {
                        "Fire Phone": ["SD", "KF"]
                    }],
                    ["vendor", "Amazon"],
                    ["type", "mobile"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                ["model", "vendor", ["type", "mobile"]],
                [/\((ip[honed|\s\w*]+);/i],
                ["model", ["vendor", "Apple"],
                    ["type", "mobile"]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i
                ],
                ["vendor", "model", ["type", "mobile"]],
                [/\(bb10;\s(\w+)/i],
                ["model", ["vendor", "BlackBerry"],
                    ["type", "mobile"]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                ["model", ["vendor", "Asus"],
                    ["type", "tablet"]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Tablet"],
                    ["type", "tablet"]
                ],
                [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Phone"],
                    ["type",
                        "mobile"
                    ]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                ["vendor", "model", ["type", "console"]],
                [/android.+;\s(shield)\sbuild/i],
                ["model", ["vendor", "Nvidia"],
                    ["type", "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                ["model", ["vendor", "Sony"],
                    ["type", "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    ["vendor", b, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", b, {
                        "Evo Shift 4G": "7373KT"
                    }],
                    ["type", "mobile"]
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i,
                    /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                ],
                ["vendor", ["model", /_/g, " "],
                    ["type", "mobile"]
                ],
                [/(nexus\s9)/i],
                ["model", ["vendor", "HTC"],
                    ["type", "tablet"]
                ],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                ["model", ["vendor", "Microsoft"],
                    ["type", "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    ["model", /\./g, " "],
                    ["vendor", "Microsoft"],
                    ["type", "mobile"]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                ["model", ["vendor", "Motorola"],
                    ["type", "mobile"]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                ["model", ["vendor", "Motorola"],
                    ["type", "tablet"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "tablet"]
                ],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "mobile"]
                ],
                [/(samsung);smarttv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/\(dtv[\);].+(aquos)/i],
                ["model", ["vendor", "Sharp"],
                    ["type", "smarttv"]
                ],
                [/sie-(\w+)*/i],
                ["model", ["vendor", "Siemens"],
                    ["type", "mobile"]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                [
                    ["vendor", "Nokia"], "model", ["type", "mobile"]
                ],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                ["model", ["vendor", "Acer"],
                    ["type", "tablet"]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    ["vendor", "LG"], "model", ["type", "tablet"]
                ],
                [/(lg) netcast\.tv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/(nexus\s[45])/i,
                    /lg[e;\s\/-]+(\w+)*/i
                ],
                ["model", ["vendor", "LG"],
                    ["type", "mobile"]
                ],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                ["model", ["vendor", "Lenovo"],
                    ["type", "tablet"]
                ],
                [/linux;.+((jolla));/i],
                ["vendor", "model", ["type", "mobile"]],
                [/((pebble))app\/[\d\.]+\s/i],
                ["vendor", "model", ["type", "wearable"]],
                [/android.+;\s(glass)\s\d/i],
                ["model", ["vendor", "Google"],
                    ["type", "wearable"]
                ],
                [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "mobile"]
                ],
                [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                [
                    ["type", f.lowerize], "vendor", "model"
                ]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                ["version", ["name", "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                ["name", "version"],
                [/rv\:([\w\.]+).*(gecko)/i],
                ["version", "name"]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                ["name", "version"],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                ["name", ["version", b, d]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", b, d]
                ],
                [/\((bb)(10);/i],
                [
                    ["name", "BlackBerry"], "version"
                ],
                [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                ["name", "version"],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                [
                    ["name", "Symbian"], "version"
                ],
                [/\((series40);/i],
                ["name"],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    ["name", "Firefox OS"], "version"
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                ["name", "version"],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    ["name", "Chromium OS"],
                    "version"
                ],
                [/(sunos)\s?([\w\.]+\d)*/i],
                [
                    ["name", "Solaris"], "version"
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                ["name", "version"],
                [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                [
                    ["name", "iOS"],
                    ["version", /_/g, "."]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    ["name", "Mac OS"],
                    ["version", /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    /(unix)\s?([\w\.]+)*/i
                ],
                ["name", "version"]
            ]
        },
        q = function(a, c) {
            if (!(this instanceof q)) return (new q(a, c)).getResult();
            var h = a || (g && g.navigator && g.navigator.userAgent ? g.navigator.userAgent : ""),
                b = c ? f.extend(p, c) : p;
            this.getBrowser = function() {
                var a = n.apply(this, b.browser);
                a.major = f.major(a.version);
                return a
            };
            this.getCPU = function() {
                return n.apply(this, b.cpu)
            };
            this.getDevice = function() {
                return n.apply(this, b.device)
            };
            this.getEngine = function() {
                return n.apply(this, b.engine)
            };
            this.getOS = function() {
                return n.apply(this,
                    b.os)
            };
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            };
            this.getUA = function() {
                return h
            };
            this.setUA = function(a) {
                h = a;
                return this
            };
            this.setUA(h);
            return this
        };
    q.VERSION = "0.7.10";
    q.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    q.CPU = {
        ARCHITECTURE: "architecture"
    };
    q.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    };
    q.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    q.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = q), exports.UAParser = q) : "function" === typeof define && define.amd ? define(function() {
        return q
    }) : g.UAParser = q;
    var r = g.jQuery || g.Zepto;
    if ("undefined" !== typeof r) {
        var v = new q;
        r.ua = v.getResult();
        r.ua.get = function() {
            return v.getUA()
        };
        r.ua.set = function(a) {
            v.setUA(a);
            a = v.getResult();
            for (var c in a) r.ua[c] = a[c]
        }
    }
})("object" ===
    typeof window ? window : this);
var Detector = function() {
    var g = ["monospace", "sans-serif", "serif"],
        e = document.getElementsByTagName("body")[0],
        f = document.createElement("span");
    f.style.fontSize = "72px";
    f.innerHTML = "mmmmmmmmmmlli";
    var n = {},
        b = {},
        d;
    for (d in g) f.style.fontFamily = g[d], e.appendChild(f), n[g[d]] = f.offsetWidth, b[g[d]] = f.offsetHeight, e.removeChild(f);
    this.detect = function(d) {
        var q = !1,
            r;
        for (r in g) {
            f.style.fontFamily = d + "," + g[r];
            e.appendChild(f);
            var v = f.offsetWidth != n[g[r]] || f.offsetHeight != b[g[r]];
            e.removeChild(f);
            q = q || v
        }
        return q
    }
};
var swfobject = function() {
    function g() {
        if (!C) {
            try {
                var a = m.getElementsByTagName("body")[0].appendChild(m.createElement("span"));
                a.parentNode.removeChild(a)
            } catch (c) {
                return
            }
            C = !0;
            for (var a = H.length, h = 0; h < a; h++) H[h]()
        }
    }

    function e(a) {
        C ? a() : H[H.length] = a
    }

    function f(a) {
        if (typeof w.addEventListener != u) w.addEventListener("load", a, !1);
        else if (typeof m.addEventListener != u) m.addEventListener("load", a, !1);
        else if (typeof w.attachEvent != u) t(w, "onload", a);
        else if ("function" == typeof w.onload) {
            var c = w.onload;
            w.onload =
                function() {
                    c();
                    a()
                }
        } else w.onload = a
    }

    function n() {
        var a = m.getElementsByTagName("body")[0],
            c = m.createElement(x);
        c.setAttribute("type", G);
        var h = a.appendChild(c);
        if (h) {
            var d = 0;
            (function() {
                if (typeof h.GetVariable != u) {
                    var e = h.GetVariable("$version");
                    e && (e = e.split(" ")[1].split(","), l.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
                } else if (10 > d) {
                    d++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                a.removeChild(c);
                h = null;
                b()
            })()
        } else b()
    }

    function b() {
        var a = z.length;
        if (0 < a)
            for (var c = 0; c < a; c++) {
                var b = z[c].id,
                    e = z[c].callbackFn,
                    f = {
                        success: !1,
                        id: b
                    };
                if (0 < l.pv[0]) {
                    var k = h(b);
                    if (k)
                        if (!D(z[c].swfVersion) || l.wk && 312 > l.wk)
                            if (z[c].expressInstall && p()) {
                                f = {};
                                f.data = z[c].expressInstall;
                                f.width = k.getAttribute("width") || "0";
                                f.height = k.getAttribute("height") || "0";
                                k.getAttribute("class") && (f.styleclass = k.getAttribute("class"));
                                k.getAttribute("align") && (f.align = k.getAttribute("align"));
                                for (var g = {}, k = k.getElementsByTagName("param"), m = k.length, t = 0; t < m; t++) "movie" != k[t].getAttribute("name").toLowerCase() && (g[k[t].getAttribute("name")] =
                                    k[t].getAttribute("value"));
                                q(f, g, b, e)
                            } else r(k), e && e(f);
                    else B(b, !0), e && (f.success = !0, f.ref = d(b), e(f))
                } else B(b, !0), e && ((b = d(b)) && typeof b.SetVariable != u && (f.success = !0, f.ref = b), e(f))
            }
    }

    function d(a) {
        var c = null;
        (a = h(a)) && "OBJECT" == a.nodeName && (typeof a.SetVariable != u ? c = a : (a = a.getElementsByTagName(x)[0]) && (c = a));
        return c
    }

    function p() {
        return !I && D("6.0.65") && (l.win || l.mac) && !(l.wk && 312 > l.wk)
    }

    function q(c, b, d, e) {
        I = !0;
        L = e || null;
        O = {
            success: !1,
            id: d
        };
        var f = h(d);
        if (f) {
            "OBJECT" == f.nodeName ? (F = v(f), J = null) :
                (F = f, J = d);
            c.id = P;
            if (typeof c.width == u || !/%$/.test(c.width) && 310 > parseInt(c.width, 10)) c.width = "310";
            if (typeof c.height == u || !/%$/.test(c.height) && 137 > parseInt(c.height, 10)) c.height = "137";
            m.title = m.title.slice(0, 47) + " - Flash Player Installation";
            e = l.ie && l.win ? "ActiveX" : "PlugIn";
            e = "MMredirectURL=" + w.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + e + "&MMdoctitle=" + m.title;
            b.flashvars = typeof b.flashvars != u ? b.flashvars + ("&" + e) : e;
            l.ie && l.win && 4 != f.readyState && (e = m.createElement("div"), d += "SWFObjectNew",
                e.setAttribute("id", d), f.parentNode.insertBefore(e, f), f.style.display = "none",
                function() {
                    4 == f.readyState ? f.parentNode.removeChild(f) : setTimeout(arguments.callee, 10)
                }());
            a(c, b, d)
        }
    }

    function r(a) {
        if (l.ie && l.win && 4 != a.readyState) {
            var c = m.createElement("div");
            a.parentNode.insertBefore(c, a);
            c.parentNode.replaceChild(v(a), c);
            a.style.display = "none";
            (function() {
                4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
            })()
        } else a.parentNode.replaceChild(v(a), a)
    }

    function v(a) {
        var c = m.createElement("div");
        if (l.win && l.ie) c.innerHTML = a.innerHTML;
        else if (a = a.getElementsByTagName(x)[0])
            if (a = a.childNodes)
                for (var b = a.length, h = 0; h < b; h++) 1 == a[h].nodeType && "PARAM" == a[h].nodeName || 8 == a[h].nodeType || c.appendChild(a[h].cloneNode(!0));
        return c
    }

    function a(a, c, b) {
        var d, e = h(b);
        if (l.wk && 312 > l.wk) return d;
        if (e)
            if (typeof a.id == u && (a.id = b), l.ie && l.win) {
                var f = "",
                    k;
                for (k in a) a[k] != Object.prototype[k] && ("data" == k.toLowerCase() ? c.movie = a[k] : "styleclass" == k.toLowerCase() ? f += ' class="' + a[k] + '"' : "classid" != k.toLowerCase() &&
                    (f += " " + k + '="' + a[k] + '"'));
                k = "";
                for (var g in c) c[g] != Object.prototype[g] && (k += '<param name="' + g + '" value="' + c[g] + '" />');
                e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + k + "</object>";
                K[K.length] = a.id;
                d = h(a.id)
            } else {
                g = m.createElement(x);
                g.setAttribute("type", G);
                for (var t in a) a[t] != Object.prototype[t] && ("styleclass" == t.toLowerCase() ? g.setAttribute("class", a[t]) : "classid" != t.toLowerCase() && g.setAttribute(t, a[t]));
                for (f in c) c[f] != Object.prototype[f] && "movie" != f.toLowerCase() &&
                    (a = g, k = f, t = c[f], b = m.createElement("param"), b.setAttribute("name", k), b.setAttribute("value", t), a.appendChild(b));
                e.parentNode.replaceChild(g, e);
                d = g
            } return d
    }

    function c(a) {
        var c = h(a);
        c && "OBJECT" == c.nodeName && (l.ie && l.win ? (c.style.display = "none", function() {
            if (4 == c.readyState) {
                var b = h(a);
                if (b) {
                    for (var d in b) "function" == typeof b[d] && (b[d] = null);
                    b.parentNode.removeChild(b)
                }
            } else setTimeout(arguments.callee, 10)
        }()) : c.parentNode.removeChild(c))
    }

    function h(a) {
        var c = null;
        try {
            c = m.getElementById(a)
        } catch (b) {}
        return c
    }

    function t(a, c, b) {
        a.attachEvent(c, b);
        E[E.length] = [a, c, b]
    }

    function D(a) {
        var c = l.pv;
        a = a.split(".");
        a[0] = parseInt(a[0], 10);
        a[1] = parseInt(a[1], 10) || 0;
        a[2] = parseInt(a[2], 10) || 0;
        return c[0] > a[0] || c[0] == a[0] && c[1] > a[1] || c[0] == a[0] && c[1] == a[1] && c[2] >= a[2] ? !0 : !1
    }

    function k(a, c, b, h) {
        if (!l.ie || !l.mac) {
            var d = m.getElementsByTagName("head")[0];
            d && (b = b && "string" == typeof b ? b : "screen", h && (M = y = null), y && M == b || (h = m.createElement("style"), h.setAttribute("type", "text/css"), h.setAttribute("media", b), y = d.appendChild(h),
                l.ie && l.win && typeof m.styleSheets != u && 0 < m.styleSheets.length && (y = m.styleSheets[m.styleSheets.length - 1]), M = b), l.ie && l.win ? y && typeof y.addRule == x && y.addRule(a, c) : y && typeof m.createTextNode != u && y.appendChild(m.createTextNode(a + " {" + c + "}")))
        }
    }

    function B(a, c) {
        if (Q) {
            var b = c ? "visible" : "hidden";
            C && h(a) ? h(a).style.visibility = b : k("#" + a, "visibility:" + b)
        }
    }

    function N(a) {
        return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != u ? encodeURIComponent(a) : a
    }
    var u = "undefined",
        x = "object",
        G = "application/x-shockwave-flash",
        P = "SWFObjectExprInst",
        w = window,
        m = document,
        A = navigator,
        R = !1,
        H = [function() {
            R ? n() : b()
        }],
        z = [],
        K = [],
        E = [],
        F, J, L, O, C = !1,
        I = !1,
        y, M, Q = !0,
        l = function() {
            var a = typeof m.getElementById != u && typeof m.getElementsByTagName != u && typeof m.createElement != u,
                c = A.userAgent.toLowerCase(),
                b = A.platform.toLowerCase(),
                h = b ? /win/.test(b) : /win/.test(c),
                b = b ? /mac/.test(b) : /mac/.test(c),
                c = /webkit/.test(c) ? parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                d = !+"\v1",
                f = [0, 0, 0],
                e = null;
            if (typeof A.plugins != u && typeof A.plugins["Shockwave Flash"] ==
                x) !(e = A.plugins["Shockwave Flash"].description) || typeof A.mimeTypes != u && A.mimeTypes[G] && !A.mimeTypes[G].enabledPlugin || (R = !0, d = !1, e = e.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), f[0] = parseInt(e.replace(/^(.*)\..*$/, "$1"), 10), f[1] = parseInt(e.replace(/^.*\.(.*)\s.*$/, "$1"), 10), f[2] = /[a-zA-Z]/.test(e) ? parseInt(e.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof w.ActiveXObject != u) try {
                var k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                k && (e = k.GetVariable("$version")) && (d = !0, e = e.split(" ")[1].split(","),
                    f = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
            } catch (g) {}
            return {
                w3: a,
                pv: f,
                wk: c,
                ie: d,
                win: h,
                mac: b
            }
        }();
    (function() {
        l.w3 && ((typeof m.readyState != u && "complete" == m.readyState || typeof m.readyState == u && (m.getElementsByTagName("body")[0] || m.body)) && g(), C || (typeof m.addEventListener != u && m.addEventListener("DOMContentLoaded", g, !1), l.ie && l.win && (m.attachEvent("onreadystatechange", function() {
            "complete" == m.readyState && (m.detachEvent("onreadystatechange", arguments.callee), g())
        }), w == top && function() {
            if (!C) {
                try {
                    m.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(arguments.callee,
                        0);
                    return
                }
                g()
            }
        }()), l.wk && function() {
            C || (/loaded|complete/.test(m.readyState) ? g() : setTimeout(arguments.callee, 0))
        }(), f(g)))
    })();
    (function() {
        l.ie && l.win && window.attachEvent("onunload", function() {
            for (var a = E.length, b = 0; b < a; b++) E[b][0].detachEvent(E[b][1], E[b][2]);
            a = K.length;
            for (b = 0; b < a; b++) c(K[b]);
            for (var h in l) l[h] = null;
            l = null;
            for (var d in swfobject) swfobject[d] = null;
            swfobject = null
        })
    })();
    return {
        registerObject: function(a, c, b, h) {
            if (l.w3 && a && c) {
                var d = {};
                d.id = a;
                d.swfVersion = c;
                d.expressInstall = b;
                d.callbackFn =
                    h;
                z[z.length] = d;
                B(a, !1)
            } else h && h({
                success: !1,
                id: a
            })
        },
        getObjectById: function(a) {
            if (l.w3) return d(a)
        },
        embedSWF: function(c, b, h, d, f, k, g, t, m, n) {
            var r = {
                success: !1,
                id: b
            };
            l.w3 && !(l.wk && 312 > l.wk) && c && b && h && d && f ? (B(b, !1), e(function() {
                h += "";
                d += "";
                var e = {};
                if (m && typeof m === x)
                    for (var l in m) e[l] = m[l];
                e.data = c;
                e.width = h;
                e.height = d;
                l = {};
                if (t && typeof t === x)
                    for (var v in t) l[v] = t[v];
                if (g && typeof g === x)
                    for (var w in g) l.flashvars = typeof l.flashvars != u ? l.flashvars + ("&" + w + "=" + g[w]) : w + "=" + g[w];
                if (D(f)) v = a(e, l, b), e.id ==
                    b && B(b, !0), r.success = !0, r.ref = v;
                else {
                    if (k && p()) {
                        e.data = k;
                        q(e, l, b, n);
                        return
                    }
                    B(b, !0)
                }
                n && n(r)
            })) : n && n(r)
        },
        switchOffAutoHideShow: function() {
            Q = !1
        },
        ua: l,
        getFlashPlayerVersion: function() {
            return {
                major: l.pv[0],
                minor: l.pv[1],
                release: l.pv[2]
            }
        },
        hasFlashPlayerVersion: D,
        createSWF: function(c, b, h) {
            if (l.w3) return a(c, b, h)
        },
        showExpressInstall: function(a, c, b, h) {
            l.w3 && p() && q(a, c, b, h)
        },
        removeSWF: function(a) {
            l.w3 && c(a)
        },
        createCSS: function(a, c, b, h) {
            l.w3 && k(a, c, b, h)
        },
        addDomLoadEvent: e,
        addLoadEvent: f,
        getQueryParamValue: function(a) {
            var c =
                m.location.search || m.location.hash;
            if (c) {
                /\?/.test(c) && (c = c.split("?")[1]);
                if (null == a) return N(c);
                for (var c = c.split("&"), b = 0; b < c.length; b++)
                    if (c[b].substring(0, c[b].indexOf("=")) == a) return N(c[b].substring(c[b].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (I) {
                var a = h(P);
                a && F && (a.parentNode.replaceChild(F, a), J && (B(J, !0), l.ie && l.win && (F.style.display = "block")), L && L(O));
                I = !1
            }
        }
    }
}();

function murmurhash3_32_gc(g, e) {
    var f, n, b, d, p;
    f = g.length & 3;
    n = g.length - f;
    b = e;
    for (p = 0; p < n;) d = g.charCodeAt(p) & 255 | (g.charCodeAt(++p) & 255) << 8 | (g.charCodeAt(++p) & 255) << 16 | (g.charCodeAt(++p) & 255) << 24, ++p, d = 3432918353 * (d & 65535) + ((3432918353 * (d >>> 16) & 65535) << 16) & 4294967295, d = d << 15 | d >>> 17, d = 461845907 * (d & 65535) + ((461845907 * (d >>> 16) & 65535) << 16) & 4294967295, b ^= d, b = b << 13 | b >>> 19, b = 5 * (b & 65535) + ((5 * (b >>> 16) & 65535) << 16) & 4294967295, b = (b & 65535) + 27492 + (((b >>> 16) + 58964 & 65535) << 16);
    d = 0;
    switch (f) {
        case 3:
            d ^= (g.charCodeAt(p +
                2) & 255) << 16;
        case 2:
            d ^= (g.charCodeAt(p + 1) & 255) << 8;
        case 1:
            d ^= g.charCodeAt(p) & 255, d = 3432918353 * (d & 65535) + ((3432918353 * (d >>> 16) & 65535) << 16) & 4294967295, d = d << 15 | d >>> 17, b ^= 461845907 * (d & 65535) + ((461845907 * (d >>> 16) & 65535) << 16) & 4294967295
    }
    b ^= g.length;
    b ^= b >>> 16;
    b = 2246822507 * (b & 65535) + ((2246822507 * (b >>> 16) & 65535) << 16) & 4294967295;
    b ^= b >>> 13;
    b = 3266489909 * (b & 65535) + ((3266489909 * (b >>> 16) & 65535) << 16) & 4294967295;
    return (b ^ b >>> 16) >>> 0
};
var deployJava = function() {
    function g(a) {
        p.debug && (console.log ? console.log(a) : alert(a))
    }

    function e(a) {
        if (null == a || 0 == a.length) return "http://java.com/dt-redirect";
        "&" == a.charAt(0) && (a = a.substring(1, a.length));
        return "http://java.com/dt-redirect?" + a
    }
    var f = ["id", "class", "title", "style"];
    "classid codebase codetype data type archive declare standby height width usemap name tabindex align border hspace vspace".split(" ").concat(f, ["lang", "dir"], "onclick ondblclick onmousedown onmouseup onmouseover onmousemove onmouseout onkeypress onkeydown onkeyup".split(" "));
    var n = "codebase code name archive object width height alt align hspace vspace".split(" ").concat(f),
        b;
    try {
        b = -1 != document.location.protocol.indexOf("http") ? "//java.com/js/webstart.png" : "http://java.com/js/webstart.png"
    } catch (d) {
        b = "http://java.com/js/webstart.png"
    }
    var p = {
        debug: null,
        version: "20120801",
        firefoxJavaVersion: null,
        myInterval: null,
        preInstallJREList: null,
        returnPage: null,
        brand: null,
        locale: null,
        installType: null,
        EAInstallEnabled: !1,
        EarlyAccessURL: null,
        oldMimeType: "application/npruntime-scriptable-plugin;DeploymentToolkit",
        mimeType: "application/java-deployment-toolkit",
        launchButtonPNG: b,
        browserName: null,
        browserName2: null,
        getJREs: function() {
            var a = [];
            if (this.isPluginInstalled())
                for (var c = this.getPlugin().jvms, b = 0; b < c.getLength(); b++) a[b] = c.get(b).version;
            else c = this.getBrowser(), "MSIE" == c ? this.testUsingActiveX("1.7.0") ? a[0] = "1.7.0" : this.testUsingActiveX("1.6.0") ? a[0] = "1.6.0" : this.testUsingActiveX("1.5.0") ? a[0] = "1.5.0" : this.testUsingActiveX("1.4.2") ? a[0] = "1.4.2" : this.testForMSVM() && (a[0] = "1.1") : "Netscape Family" == c && (this.getJPIVersionUsingMimeType(),
                null != this.firefoxJavaVersion ? a[0] = this.firefoxJavaVersion : this.testUsingMimeTypes("1.7") ? a[0] = "1.7.0" : this.testUsingMimeTypes("1.6") ? a[0] = "1.6.0" : this.testUsingMimeTypes("1.5") ? a[0] = "1.5.0" : this.testUsingMimeTypes("1.4.2") ? a[0] = "1.4.2" : "Safari" == this.browserName2 && (this.testUsingPluginsArray("1.7.0") ? a[0] = "1.7.0" : this.testUsingPluginsArray("1.6") ? a[0] = "1.6.0" : this.testUsingPluginsArray("1.5") ? a[0] = "1.5.0" : this.testUsingPluginsArray("1.4.2") && (a[0] = "1.4.2")));
            if (this.debug)
                for (b = 0; b < a.length; ++b) g("[getJREs()] We claim to have detected Java SE " +
                    a[b]);
            return a
        },
        installJRE: function(a, c) {
            if (this.isPluginInstalled() && this.isAutoInstallEnabled(a)) {
                var b = !1;
                if (b = this.isCallbackSupported() ? this.getPlugin().installJRE(a, c) : this.getPlugin().installJRE(a)) this.refresh(), null != this.returnPage && (document.location = this.returnPage);
                return b
            }
            return this.installLatestJRE()
        },
        isAutoInstallEnabled: function(a) {
            if (!this.isPluginInstalled()) return !1;
            "undefined" == typeof a && (a = null);
            var c;
            if ("MSIE" != deployJava.browserName || deployJava.compareVersionToPattern(deployJava.getPlugin().version,
                    ["10", "0", "0"], !1, !0)) c = !0;
            else if (null == a) c = !1;
            else {
                c = "1.6.0_33+";
                if (null == c || 0 == c.length) c = !0;
                else {
                    var b = c.charAt(c.length - 1);
                    "+" != b && "*" != b && -1 != c.indexOf("_") && "_" != b && (c += "*", b = "*");
                    c = c.substring(0, c.length - 1);
                    if (0 < c.length) {
                        var d = c.charAt(c.length - 1);
                        if ("." == d || "_" == d) c = c.substring(0, c.length - 1)
                    }
                    c = "*" == b ? 0 == a.indexOf(c) : "+" == b ? c <= a : !1
                }
                c = !c
            }
            return c
        },
        isCallbackSupported: function() {
            return this.isPluginInstalled() && this.compareVersionToPattern(this.getPlugin().version, ["10", "2", "0"], !1, !0)
        },
        installLatestJRE: function(a) {
            if (this.isPluginInstalled() &&
                this.isAutoInstallEnabled()) {
                var c = !1;
                if (c = this.isCallbackSupported() ? this.getPlugin().installLatestJRE(a) : this.getPlugin().installLatestJRE()) this.refresh(), null != this.returnPage && (document.location = this.returnPage);
                return c
            }
            a = this.getBrowser();
            c = navigator.platform.toLowerCase();
            if ("true" == this.EAInstallEnabled && -1 != c.indexOf("win") && null != this.EarlyAccessURL) this.preInstallJREList = this.getJREs(), null != this.returnPage && (this.myInterval = setInterval("deployJava.poll()", 3E3)), location.href = this.EarlyAccessURL;
            else {
                if ("MSIE" == a) return this.IEInstall();
                if ("Netscape Family" == a && -1 != c.indexOf("win32")) return this.FFInstall();
                location.href = e((null != this.returnPage ? "&returnPage=" + this.returnPage : "") + (null != this.locale ? "&locale=" + this.locale : "") + (null != this.brand ? "&brand=" + this.brand : ""))
            }
            return !1
        },
        runApplet: function(a, c, b) {
            if ("undefined" == b || null == b) b = "1.1";
            var d = b.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$");
            null == this.returnPage && (this.returnPage = document.location);
            null != d ? "?" != this.getBrowser() ?
                this.versionCheck(b + "+") ? this.writeAppletTag(a, c) : this.installJRE(b + "+") && (this.refresh(), location.href = document.location, this.writeAppletTag(a, c)) : this.writeAppletTag(a, c) : g("[runApplet()] Invalid minimumVersion argument to runApplet():" + b)
        },
        writeAppletTag: function(a, c) {
            var b = "<applet ",
                d = "",
                e = !0;
            if (null == c || "object" != typeof c) c = {};
            for (var f in a) {
                var g;
                a: {
                    g = f.toLowerCase();
                    for (var p = n.length, q = 0; q < p; q++)
                        if (n[q] === g) {
                            g = !0;
                            break a
                        } g = !1
                }
                g ? (b += " " + f + '="' + a[f] + '"', "code" == f && (e = !1)) : c[f] = a[f]
            }
            f = !1;
            for (var r in c) {
                "codebase_lookup" ==
                r && (f = !0);
                if ("object" == r || "java_object" == r || "java_code" == r) e = !1;
                d += '<param name="' + r + '" value="' + c[r] + '"/>'
            }
            f || (d += '<param name="codebase_lookup" value="false"/>');
            e && (b += ' code="dummy"');
            document.write(b + ">\n" + d + "\n</applet>")
        },
        versionCheck: function(a) {
            var c = 0,
                b = a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?(\\*|\\+)?$");
            if (null != b) {
                for (var d = a = !1, e = [], f = 1; f < b.length; ++f) "string" == typeof b[f] && "" != b[f] && (e[c] = b[f], c++);
                "+" == e[e.length - 1] ? (d = !0, a = !1, e.length--) : "*" == e[e.length - 1] ? (d = !1,
                    a = !0, e.length--) : 4 > e.length && (d = !1, a = !0);
                c = this.getJREs();
                for (f = 0; f < c.length; ++f)
                    if (this.compareVersionToPattern(c[f], e, a, d)) return !0
            } else c = "Invalid versionPattern passed to versionCheck: " + a, g("[versionCheck()] " + c), alert(c);
            return !1
        },
        isWebStartInstalled: function(a) {
            if ("?" == this.getBrowser()) return !0;
            if ("undefined" == a || null == a) a = "1.4.2";
            var c = !1;
            null != a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$") ? c = this.versionCheck(a + "+") : (g("[isWebStartInstaller()] Invalid minimumVersion argument to isWebStartInstalled(): " +
                a), c = this.versionCheck("1.4.2+"));
            return c
        },
        getJPIVersionUsingMimeType: function() {
            for (var a = 0; a < navigator.mimeTypes.length; ++a) {
                var c = navigator.mimeTypes[a].type.match(/^application\/x-java-applet;jpi-version=(.*)$/);
                if (null != c && (this.firefoxJavaVersion = c[1], "Opera" != this.browserName2)) break
            }
        },
        launchWebStartApplication: function(a) {
            navigator.userAgent.toLowerCase();
            this.getJPIVersionUsingMimeType();
            if (!1 == this.isWebStartInstalled("1.7.0") && (!1 == this.installJRE("1.7.0+") || !1 == this.isWebStartInstalled("1.7.0"))) return !1;
            var c = null;
            document.documentURI && (c = document.documentURI);
            null == c && (c = document.URL);
            var b = this.getBrowser(),
                d;
            "MSIE" == b ? d = '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="0" height="0"><PARAM name="launchjnlp" value="' + a + '"><PARAM name="docbase" value="' + c + '"></object>' : "Netscape Family" == b && (d = '<embed type="application/x-java-applet;jpi-version=' + this.firefoxJavaVersion + '" width="0" height="0" launchjnlp="' + a + '"docbase="' + c + '" />');
            "undefined" == document.body || null == document.body ?
                (document.write(d), document.location = c) : (a = document.createElement("div"), a.id = "div1", a.style.position = "relative", a.style.left = "-10000px", a.style.margin = "0px auto", a.className = "dynamicDiv", a.innerHTML = d, document.body.appendChild(a))
        },
        createWebStartLaunchButtonEx: function(a, c) {
            null == this.returnPage && (this.returnPage = a);
            document.write('<a href="' + ("javascript:deployJava.launchWebStartApplication('" + a + "');") + '" onMouseOver="window.status=\'\'; return true;"><img src="' + this.launchButtonPNG + '" border="0" /></a>')
        },
        createWebStartLaunchButton: function(a, c) {
            null == this.returnPage && (this.returnPage = a);
            document.write('<a href="' + ("javascript:if (!deployJava.isWebStartInstalled(&quot;" + c + "&quot;)) {if (deployJava.installLatestJRE()) {if (deployJava.launch(&quot;" + a + "&quot;)) {}}} else {if (deployJava.launch(&quot;" + a + "&quot;)) {}}") + '" onMouseOver="window.status=\'\'; return true;"><img src="' + this.launchButtonPNG + '" border="0" /></a>')
        },
        launch: function(a) {
            document.location = a;
            return !0
        },
        isPluginInstalled: function() {
            var a =
                this.getPlugin();
            return a && a.jvms ? !0 : !1
        },
        isAutoUpdateEnabled: function() {
            return this.isPluginInstalled() ? this.getPlugin().isAutoUpdateEnabled() : !1
        },
        setAutoUpdateEnabled: function() {
            return this.isPluginInstalled() ? this.getPlugin().setAutoUpdateEnabled() : !1
        },
        setInstallerType: function(a) {
            this.installType = a;
            return this.isPluginInstalled() ? this.getPlugin().setInstallerType(a) : !1
        },
        setAdditionalPackages: function(a) {
            return this.isPluginInstalled() ? this.getPlugin().setAdditionalPackages(a) : !1
        },
        setEarlyAccess: function(a) {
            this.EAInstallEnabled =
                a
        },
        isPlugin2: function() {
            if (this.isPluginInstalled() && this.versionCheck("1.6.0_10+")) try {
                return this.getPlugin().isPlugin2()
            } catch (a) {}
            return !1
        },
        allowPlugin: function() {
            this.getBrowser();
            return "Safari" != this.browserName2 && "Opera" != this.browserName2
        },
        getPlugin: function() {
            this.refresh();
            var a = null;
            this.allowPlugin() && (a = document.getElementById("deployJavaPlugin"));
            return a
        },
        compareVersionToPattern: function(a, c, b, d) {
            if (void 0 == a || void 0 == c) return !1;
            var e = a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$");
            if (null != e) {
                var f = 0;
                a = [];
                for (var g = 1; g < e.length; ++g) "string" == typeof e[g] && "" != e[g] && (a[f] = e[g], f++);
                e = Math.min(a.length, c.length);
                if (d) {
                    for (g = 0; g < e; ++g) {
                        if (a[g] < c[g]) return !1;
                        if (a[g] > c[g]) break
                    }
                    return !0
                }
                for (g = 0; g < e; ++g)
                    if (a[g] != c[g]) return !1;
                return b ? !0 : a.length == c.length
            }
            return !1
        },
        getBrowser: function() {
            if (null == this.browserName) {
                var a = navigator.userAgent.toLowerCase();
                g("[getBrowser()] navigator.userAgent.toLowerCase() -> " + a); - 1 != a.indexOf("msie") && -1 == a.indexOf("opera") ? this.browserName2 = this.browserName =
                    "MSIE" : -1 != a.indexOf("iphone") ? (this.browserName = "Netscape Family", this.browserName2 = "iPhone") : -1 != a.indexOf("firefox") && -1 == a.indexOf("opera") ? (this.browserName = "Netscape Family", this.browserName2 = "Firefox") : -1 != a.indexOf("chrome") ? (this.browserName = "Netscape Family", this.browserName2 = "Chrome") : -1 != a.indexOf("safari") ? (this.browserName = "Netscape Family", this.browserName2 = "Safari") : -1 != a.indexOf("mozilla") && -1 == a.indexOf("opera") ? (this.browserName = "Netscape Family", this.browserName2 = "Other") : -1 !=
                    a.indexOf("opera") ? (this.browserName = "Netscape Family", this.browserName2 = "Opera") : (this.browserName = "?", this.browserName2 = "unknown");
                g("[getBrowser()] Detected browser name:" + this.browserName + ", " + this.browserName2)
            }
            return this.browserName
        },
        testUsingActiveX: function(a) {
            a = "JavaWebStart.isInstalled." + a + ".0";
            if ("undefined" == typeof ActiveXObject || !ActiveXObject) return g("[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?"), !1;
            try {
                return null != new ActiveXObject(a)
            } catch (c) {
                return !1
            }
        },
        testForMSVM: function() {
            if ("undefined" != typeof oClientCaps) {
                var a = oClientCaps.getComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}", "ComponentID");
                return "" == a || "5,0,5000,0" == a ? !1 : !0
            }
            return !1
        },
        testUsingMimeTypes: function(a) {
            if (!navigator.mimeTypes) return g("[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?"), !1;
            for (var c = 0; c < navigator.mimeTypes.length; ++c) {
                s = navigator.mimeTypes[c].type;
                var b = s.match(/^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/);
                if (null != b && this.compareVersions(b[1], a)) return !0
            }
            return !1
        },
        testUsingPluginsArray: function(a) {
            if (!navigator.plugins || !navigator.plugins.length) return !1;
            for (var c = navigator.platform.toLowerCase(), b = 0; b < navigator.plugins.length; ++b)
                if (s = navigator.plugins[b].description, -1 != s.search(/^Java Switchable Plug-in (Cocoa)/)) {
                    if (this.compareVersions("1.5.0", a)) return !0
                } else if (-1 != s.search(/^Java/) && -1 != c.indexOf("win") && (this.compareVersions("1.5.0", a) || this.compareVersions("1.6.0", a))) return !0;
            return this.compareVersions("1.5.0",
                a) ? !0 : !1
        },
        IEInstall: function() {
            location.href = e((null != this.returnPage ? "&returnPage=" + this.returnPage : "") + (null != this.locale ? "&locale=" + this.locale : "") + (null != this.brand ? "&brand=" + this.brand : ""));
            return !1
        },
        done: function(a, c) {},
        FFInstall: function() {
            location.href = e((null != this.returnPage ? "&returnPage=" + this.returnPage : "") + (null != this.locale ? "&locale=" + this.locale : "") + (null != this.brand ? "&brand=" + this.brand : "") + (null != this.installType ? "&type=" + this.installType : ""));
            return !1
        },
        compareVersions: function(a,
            c) {
            for (var b = a.split("."), d = c.split("."), e = 0; e < b.length; ++e) b[e] = Number(b[e]);
            for (e = 0; e < d.length; ++e) d[e] = Number(d[e]);
            2 == b.length && (b[2] = 0);
            return b[0] > d[0] ? !0 : b[0] < d[0] ? !1 : b[1] > d[1] ? !0 : b[1] < d[1] ? !1 : b[2] > d[2] ? !0 : b[2] < d[2] ? !1 : !0
        },
        enableAlerts: function() {
            this.browserName = null;
            this.debug = !0
        },
        poll: function() {
            this.refresh();
            var a = this.getJREs();
            0 == this.preInstallJREList.length && 0 != a.length && (clearInterval(this.myInterval), null != this.returnPage && (location.href = this.returnPage));
            0 != this.preInstallJREList.length &&
                0 != a.length && this.preInstallJREList[0] != a[0] && (clearInterval(this.myInterval), null != this.returnPage && (location.href = this.returnPage))
        },
        writePluginTag: function() {
            var a = this.getBrowser();
            "MSIE" == a ? document.write('<object classid="clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA" id="deployJavaPlugin" width="0" height="0"></object>') : "Netscape Family" == a && this.allowPlugin() && this.writeEmbedTag()
        },
        refresh: function() {
            navigator.plugins.refresh(!1);
            "Netscape Family" == this.getBrowser() && this.allowPlugin() && null ==
                document.getElementById("deployJavaPlugin") && this.writeEmbedTag()
        },
        writeEmbedTag: function() {
            var a = !1;
            if (null != navigator.mimeTypes) {
                for (var b = 0; b < navigator.mimeTypes.length; b++) navigator.mimeTypes[b].type == this.mimeType && navigator.mimeTypes[b].enabledPlugin && (document.write('<embed id="deployJavaPlugin" type="' + this.mimeType + '" hidden="true" />'), a = !0);
                if (!a)
                    for (b = 0; b < navigator.mimeTypes.length; b++) navigator.mimeTypes[b].type == this.oldMimeType && navigator.mimeTypes[b].enabledPlugin && document.write('<embed id="deployJavaPlugin" type="' +
                        this.oldMimeType + '" hidden="true" />')
            }
        }
    };
    p.writePluginTag();
    if (null == p.locale) {
        f = null;
        if (null == f) try {
            f = navigator.userLanguage
        } catch (q) {}
        if (null == f) try {
            f = navigator.systemLanguage
        } catch (r) {}
        if (null == f) try {
            f = navigator.language
        } catch (v) {}
        null != f && (f.replace("-", "_"), p.locale = f)
    }
    return p
}();
(function(g) {
    var e, f, n = function() {
        e = (new(window.UAParser || exports.UAParser)).getResult();
        f = new Detector;
        return this
    };
    n.prototype = {
        getSoftwareVersion: function() {
            return "ClientJS 0.1.9"
        },
        getBrowserData: function() {
            return e
        },
        getFingerprint: function() {
            var b = e.ua,
                d = this.getScreenPrint(),
                f = this.getPlugins(),
                g = this.getFonts(),
                n = this.isLocalStorage(),
                v = this.isSessionStorage(),
                a = this.getTimeZone(),
                c = this.getLanguage(),
                h = this.getSystemLanguage(),
                t = this.isCookie(),
                D = this.getCanvasPrint();
            return murmurhash3_32_gc(b +
                "|" + d + "|" + f + "|" + g + "|" + n + "|" + v + "|" + a + "|" + c + "|" + h + "|" + t + "|" + D, 256)
        },
        getCustomFingerprint: function() {
            for (var b = "", d = 0; d < arguments.length; d++) b += arguments[d] + "|";
            return murmurhash3_32_gc(b, 256)
        },
        getUserAgent: function() {
            return e.ua
        },
        getUserAgentLowerCase: function() {
            return e.ua.toLowerCase()
        },
        getBrowser: function() {
            return e.browser.name
        },
        getBrowserVersion: function() {
            return e.browser.version
        },
        getBrowserMajorVersion: function() {
            return e.browser.major
        },
        isIE: function() {
            return /IE/i.test(e.browser.name)
        },
        isChrome: function() {
            return /Chrome/i.test(e.browser.name)
        },
        isFirefox: function() {
            return /Firefox/i.test(e.browser.name)
        },
        isSafari: function() {
            return /Safari/i.test(e.browser.name)
        },
        isMobileSafari: function() {
            return /Mobile\sSafari/i.test(e.browser.name)
        },
        isOpera: function() {
            return /Opera/i.test(e.browser.name)
        },
        getEngine: function() {
            return e.engine.name
        },
        getEngineVersion: function() {
            return e.engine.version
        },
        getOS: function() {
            return e.os.name
        },
        getOSVersion: function() {
            return e.os.version
        },
        isWindows: function() {
            return /Windows/i.test(e.os.name)
        },
        isMac: function() {
            return /Mac/i.test(e.os.name)
        },
        isLinux: function() {
            return /Linux/i.test(e.os.name)
        },
        isUbuntu: function() {
            return /Ubuntu/i.test(e.os.name)
        },
        isSolaris: function() {
            return /Solaris/i.test(e.os.name)
        },
        getDevice: function() {
            return e.device.model
        },
        getDeviceType: function() {
            return e.device.type
        },
        getDeviceVendor: function() {
            return e.device.vendor
        },
        getCPU: function() {
            return e.cpu.architecture
        },
        isMobile: function() {
            var b = e.ua || navigator.vendor || window.opera;
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
                    4))
        },
        isMobileMajor: function() {
            return this.isMobileAndroid() || this.isMobileBlackBerry() || this.isMobileIOS() || this.isMobileOpera() || this.isMobileWindows()
        },
        isMobileAndroid: function() {
            return e.ua.match(/Android/i) ? !0 : !1
        },
        isMobileOpera: function() {
            return e.ua.match(/Opera Mini/i) ? !0 : !1
        },
        isMobileWindows: function() {
            return e.ua.match(/IEMobile/i) ? !0 : !1
        },
        isMobileBlackBerry: function() {
            return e.ua.match(/BlackBerry/i) ? !0 : !1
        },
        isMobileIOS: function() {
            return e.ua.match(/iPhone|iPad|iPod/i) ? !0 : !1
        },
        isIphone: function() {
            return e.ua.match(/iPhone/i) ?
                !0 : !1
        },
        isIpad: function() {
            return e.ua.match(/iPad/i) ? !0 : !1
        },
        isIpod: function() {
            return e.ua.match(/iPod/i) ? !0 : !1
        },
        getScreenPrint: function() {
            return "Current Resolution: " + this.getCurrentResolution() + ", Available Resolution: " + this.getAvailableResolution() + ", Color Depth: " + this.getColorDepth() + ", Device XDPI: " + this.getDeviceXDPI() + ", Device YDPI: " + this.getDeviceYDPI()
        },
        getColorDepth: function() {
            return screen.colorDepth
        },
        getCurrentResolution: function() {
            return screen.width + "x" + screen.height
        },
        getAvailableResolution: function() {
            return screen.availWidth +
                "x" + screen.availHeight
        },
        getDeviceXDPI: function() {
            return screen.deviceXDPI
        },
        getDeviceYDPI: function() {
            return screen.deviceYDPI
        },
        getPlugins: function() {
            for (var b = "", d = 0; d < navigator.plugins.length; d++) b = d == navigator.plugins.length - 1 ? b + navigator.plugins[d].name : b + (navigator.plugins[d].name + ", ");
            return b
        },
        isJava: function() {
            return navigator.javaEnabled()
        },
        getJavaVersion: function() {
            return deployJava.getJREs().toString()
        },
        isFlash: function() {
            return navigator.plugins["Shockwave Flash"] ? !0 : !1
        },
        getFlashVersion: function() {
            return this.isFlash() ?
                (objPlayerVersion = swfobject.getFlashPlayerVersion(), objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release) : ""
        },
        isSilverlight: function() {
            return navigator.plugins["Silverlight Plug-In"] ? !0 : !1
        },
        getSilverlightVersion: function() {
            return this.isSilverlight() ? navigator.plugins["Silverlight Plug-In"].description : ""
        },
        isMimeTypes: function() {
            return navigator.mimeTypes.length ? !0 : !1
        },
        getMimeTypes: function() {
            for (var b = "", d = 0; d < navigator.mimeTypes.length; d++) b = d == navigator.mimeTypes.length -
                1 ? b + navigator.mimeTypes[d].description : b + (navigator.mimeTypes[d].description + ", ");
            return b
        },
        isFont: function(b) {
            return f.detect(b)
        },
        getFonts: function() {
            for (var b = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Aharoni;Andalus;Angsana New;AngsanaUPC;Aparajita;Arab;Arabic Transparent;Arabic Typesetting;Arial Baltic;Arial Black;Arial CE;Arial CYR;Arial Greek;Arial TUR;Arial;Batang;BatangChe;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Browallia New;BrowalliaUPC;Calibri Light;Calibri;Californian FB;Cambria Math;Cambria;Candara;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Comic Sans MS;Consolas;Constantia;Copperplate Gothic Light;Corbel;Cordia New;CordiaUPC;Courier New Baltic;Courier New CE;Courier New CYR;Courier New Greek;Courier New TUR;Courier New;DFKai-SB;DaunPenh;David;DejaVu LGC Sans Mono;Desdemona;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Engravers MT;Eras Bold ITC;Estrangelo Edessa;EucrosiaUPC;Euphemia;Eurostile;FangSong;Forte;FrankRuehl;Franklin Gothic Heavy;Franklin Gothic Medium;FreesiaUPC;French Script MT;Gabriola;Gautami;Georgia;Gigi;Gisha;Goudy Old Style;Gulim;GulimChe;GungSeo;Gungsuh;GungsuhChe;Haettenschweiler;Harrington;Hei S;HeiT;Heisei Kaku Gothic;Hiragino Sans GB;Impact;Informal Roman;IrisUPC;Iskoola Pota;JasmineUPC;KacstOne;KaiTi;Kalinga;Kartika;Khmer UI;Kino MT;KodchiangUPC;Kokila;Kozuka Gothic Pr6N;Lao UI;Latha;Leelawadee;Levenim MT;LilyUPC;Lohit Gujarati;Loma;Lucida Bright;Lucida Console;Lucida Fax;Lucida Sans Unicode;MS Gothic;MS Mincho;MS PGothic;MS PMincho;MS Reference Sans Serif;MS UI Gothic;MV Boli;Magneto;Malgun Gothic;Mangal;Marlett;Matura MT Script Capitals;Meiryo UI;Meiryo;Menlo;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Miriam Fixed;Miriam;Mongolian Baiti;MoolBoran;NSimSun;Narkisim;News Gothic MT;Niagara Solid;Nyala;PMingLiU;PMingLiU-ExtB;Palace Script MT;Palatino Linotype;Papyrus;Perpetua;Plantagenet Cherokee;Playbill;Prelude Bold;Prelude Condensed Bold;Prelude Condensed Medium;Prelude Medium;PreludeCompressedWGL Black;PreludeCompressedWGL Bold;PreludeCompressedWGL Light;PreludeCompressedWGL Medium;PreludeCondensedWGL Black;PreludeCondensedWGL Bold;PreludeCondensedWGL Light;PreludeCondensedWGL Medium;PreludeWGL Black;PreludeWGL Bold;PreludeWGL Light;PreludeWGL Medium;Raavi;Rachana;Rockwell;Rod;Sakkal Majalla;Sawasdee;Script MT Bold;Segoe Print;Segoe Script;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Segoe UI;Shonar Bangla;Showcard Gothic;Shruti;SimHei;SimSun;SimSun-ExtB;Simplified Arabic Fixed;Simplified Arabic;Snap ITC;Sylfaen;Symbol;Tahoma;Times New Roman Baltic;Times New Roman CE;Times New Roman CYR;Times New Roman Greek;Times New Roman TUR;Times New Roman;TlwgMono;Traditional Arabic;Trebuchet MS;Tunga;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Utsaah;Vani;Verdana;Vijaya;Vladimir Script;Vrinda;Webdings;Wide Latin;Wingdings".split(";"),
                    d = "", e = 0; e < b.length; e++) f.detect(b[e]) && (d = e == b.length - 1 ? d + b[e] : d + (b[e] + ", "));
            return d
        },
        isLocalStorage: function() {
            try {
                return !!g.localStorage
            } catch (b) {
                return !0
            }
        },
        isSessionStorage: function() {
            try {
                return !!g.sessionStorage
            } catch (b) {
                return !0
            }
        },
        isCookie: function() {
            return navigator.cookieEnabled
        },
        getTimeZone: function() {
            return String(String(new Date).split("(")[1]).split(")")[0]
        },
        getLanguage: function() {
            return navigator.language
        },
        getSystemLanguage: function() {
            return navigator.systemLanguage
        },
        isCanvas: function() {
            var b =
                document.createElement("canvas");
            try {
                return !(!b.getContext || !b.getContext("2d"))
            } catch (d) {
                return !1
            }
        },
        getCanvasPrint: function() {
            var b = document.createElement("canvas"),
                d;
            try {
                d = b.getContext("2d")
            } catch (e) {
                return ""
            }
            d.textBaseline = "top";
            d.font = "14px 'Arial'";
            d.textBaseline = "alphabetic";
            d.fillStyle = "#f60";
            d.fillRect(125, 1, 62, 20);
            d.fillStyle = "#069";
            d.fillText("http://valve.github.io", 2, 15);
            d.fillStyle = "rgba(102, 204, 0, 0.7)";
            d.fillText("http://valve.github.io", 4, 17);
            return b.toDataURL()
        }
    };
    "object" === typeof module &&
        "undefined" !== typeof exports && (module.exports = n);
    g.ClientJS = n
})(window);