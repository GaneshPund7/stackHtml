/* PrismJS 1.22.0
https://prismjs.com/download.html#themes=prism&languages=markup&plugins=line-highlight+line-numbers */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            M = {
                manual: u.Prism && u.Prism.manual,
                disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++n
                        }), e.__id
                    },
                    clone: function t(e, r) {
                        var a, n;
                        switch (r = r || {}, M.util.type(e)) {
                            case "Object":
                                if (n = M.util.objId(e), r[n]) return r[n];
                                for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                                return a;
                            case "Array":
                                return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function(e, n) {
                                    a[n] = t(e, r)
                                }), a);
                            default:
                                return e
                        }
                    },
                    getLanguage: function(e) {
                        for (; e && !c.test(e.className);) e = e.parentElement;
                        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (e) {
                            var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                            if (n) {
                                var t = document.getElementsByTagName("script");
                                for (var r in t)
                                    if (t[r].src == n) return t[r]
                            }
                            return null
                        }
                    },
                    isActive: function(e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    extend: function(e, n) {
                        var t = M.util.clone(M.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function(t, e, n, r) {
                        var a = (r = r || M.languages)[t],
                            i = {};
                        for (var l in a)
                            if (a.hasOwnProperty(l)) {
                                if (l == e)
                                    for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                                n.hasOwnProperty(l) || (i[l] = a[l])
                            }
                        var s = r[t];
                        return r[t] = i, M.languages.DFS(M.languages, function(e, n) {
                            n === s && e != t && (this[e] = i)
                        }), i
                    },
                    DFS: function e(n, t, r, a) {
                        a = a || {};
                        var i = M.util.objId;
                        for (var l in n)
                            if (n.hasOwnProperty(l)) {
                                t.call(n, l, n[l], r || l);
                                var o = n[l],
                                    s = M.util.type(o);
                                "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, n) {
                    M.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function(e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);
                    for (var a, i = 0; a = r.elements[i++];) M.highlightElement(a, !0 === n, r.callback)
                },
                highlightElement: function(e, n, t) {
                    var r = M.util.getLanguage(e),
                        a = M.languages[r];
                    e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
                    var i = e.parentElement;
                    i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
                    var l = {
                        element: e,
                        language: r,
                        grammar: a,
                        code: e.textContent
                    };

                    function o(e) {
                        l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element)
                    }
                    if (M.hooks.run("before-sanity-check", l), !l.code) return M.hooks.run("complete", l), void(t && t.call(l.element));
                    if (M.hooks.run("before-highlight", l), l.grammar)
                        if (n && u.Worker) {
                            var s = new Worker(M.filename);
                            s.onmessage = function(e) {
                                o(e.data)
                            }, s.postMessage(JSON.stringify({
                                language: l.language,
                                code: l.code,
                                immediateClose: !0
                            }))
                        } else o(M.highlight(l.code, l.grammar, l.language));
                    else o(M.util.encode(l.code))
                },
                highlight: function(e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language)
                },
                tokenize: function(e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new i;
                    return I(a, a.head, e),
                        function e(n, t, r, a, i, l) {
                            for (var o in r)
                                if (r.hasOwnProperty(o) && r[o]) {
                                    var s = r[o];
                                    s = Array.isArray(s) ? s : [s];
                                    for (var u = 0; u < s.length; ++u) {
                                        if (l && l.cause == o + "," + u) return;
                                        var c = s[u],
                                            g = c.inside,
                                            f = !!c.lookbehind,
                                            h = !!c.greedy,
                                            d = 0,
                                            v = c.alias;
                                        if (h && !c.pattern.global) {
                                            var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                                            c.pattern = RegExp(c.pattern.source, p + "g")
                                        }
                                        for (var m = c.pattern || c, y = a.next, k = i; y !== t.tail && !(l && k >= l.reach); k += y.value.length, y = y.next) {
                                            var b = y.value;
                                            if (t.length > n.length) return;
                                            if (!(b instanceof W)) {
                                                var x = 1;
                                                if (h && y != t.tail.prev) {
                                                    m.lastIndex = k;
                                                    var w = m.exec(n);
                                                    if (!w) break;
                                                    var A = w.index + (f && w[1] ? w[1].length : 0),
                                                        P = w.index + w[0].length,
                                                        S = k;
                                                    for (S += y.value.length; S <= A;) y = y.next, S += y.value.length;
                                                    if (S -= y.value.length, k = S, y.value instanceof W) continue;
                                                    for (var E = y; E !== t.tail && (S < P || "string" == typeof E.value); E = E.next) x++, S += E.value.length;
                                                    x--, b = n.slice(k, S), w.index -= k
                                                } else {
                                                    m.lastIndex = 0;
                                                    var w = m.exec(b)
                                                }
                                                if (w) {
                                                    f && (d = w[1] ? w[1].length : 0);
                                                    var A = w.index + d,
                                                        O = w[0].slice(d),
                                                        P = A + O.length,
                                                        L = b.slice(0, A),
                                                        N = b.slice(P),
                                                        j = k + b.length;
                                                    l && j > l.reach && (l.reach = j);
                                                    var C = y.prev;
                                                    L && (C = I(t, C, L), k += L.length), z(t, C, x);
                                                    var _ = new W(o, g ? M.tokenize(O, g) : O, v, O);
                                                    y = I(t, C, _), N && I(t, y, N), 1 < x && e(n, t, r, y.prev, k, {
                                                        cause: o + "," + u,
                                                        reach: j
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                        }(e, a, n, a.head, 0),
                        function(e) {
                            var n = [],
                                t = e.head.next;
                            for (; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function(e, n) {
                        var t = M.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function(e, n) {
                        var t = M.hooks.all[e];
                        if (t && t.length)
                            for (var r, a = 0; r = t[a++];) r(n)
                    }
                },
                Token: W
            };

        function W(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function i() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function I(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function z(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r).prev = n, e.length -= a
        }
        if (u.Prism = M, W.stringify = function n(e, t) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    var r = "";
                    return e.forEach(function(e) {
                        r += n(e, t)
                    }), r
                }
                var a = {
                        type: e.type,
                        content: n(e.content, t),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t
                    },
                    i = e.alias;
                i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
                var l = "";
                for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
                return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">"
            }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function(e) {
            var n = JSON.parse(e.data),
                t = n.language,
                r = n.code,
                a = n.immediateClose;
            u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close()
        }, !1)), M;
        var e = M.util.currentScript();

        function t() {
            M.manual || M.highlightAll()
        }
        if (e && (M.filename = e.src, e.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
            var r = document.readyState;
            "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16)
        }
        return M
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/,
            name: /[^\s<>'"]+/
        }
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, /"|'/]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        n["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
            pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                return a
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, Prism.languages.insertBefore("markup", "cdata", t)
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function() {
    if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
        var t, s = function() {
                if (void 0 === t) {
                    var e = document.createElement("div");
                    e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = "0", e.style.border = "0", e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e)
                }
                return t
            },
            l = !0,
            a = 0;
        Prism.hooks.add("before-sanity-check", function(e) {
            var t = e.element.parentNode,
                n = t && t.getAttribute("data-line");
            if (t && n && /pre/i.test(t.nodeName)) {
                var i = 0;
                g(".line-highlight", t).forEach(function(e) {
                    i += e.textContent.length, e.parentNode.removeChild(e)
                }), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
            }
        }), Prism.hooks.add("complete", function e(t) {
            var n = t.element.parentNode,
                i = n && n.getAttribute("data-line");
            if (n && i && /pre/i.test(n.nodeName)) {
                clearTimeout(a);
                var r = Prism.plugins.lineNumbers,
                    o = t.plugins && t.plugins.lineNumbers;
                if (b(n, "line-numbers") && r && !o) Prism.hooks.add("line-numbers", e);
                else u(n, i)(), a = setTimeout(c, 1)
            }
        }), window.addEventListener("hashchange", c), window.addEventListener("resize", function() {
            g("pre[data-line]").map(function(e) {
                return u(e)
            }).forEach(v)
        })
    }

    function g(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function b(e, t) {
        return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t)
    }

    function v(e) {
        e()
    }

    function u(u, e, c) {
        var t = (e = "string" == typeof e ? e : u.getAttribute("data-line")).replace(/\s+/g, "").split(",").filter(Boolean),
            d = +u.getAttribute("data-line-offset") || 0,
            f = (s() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
            m = b(u, "line-numbers"),
            p = m ? u : u.querySelector("code") || u,
            h = [];
        t.forEach(function(e) {
            var t = e.split("-"),
                n = +t[0],
                i = +t[1] || n,
                r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
            if (h.push(function() {
                    r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (c || "") + " line-highlight"
                }), m && Prism.plugins.lineNumbers) {
                var o = Prism.plugins.lineNumbers.getLine(u, n),
                    a = Prism.plugins.lineNumbers.getLine(u, i);
                if (o) {
                    var s = o.offsetTop + "px";
                    h.push(function() {
                        r.style.top = s
                    })
                }
                if (a) {
                    var l = a.offsetTop - o.offsetTop + a.offsetHeight + "px";
                    h.push(function() {
                        r.style.height = l
                    })
                }
            } else h.push(function() {
                r.setAttribute("data-start", n), n < i && r.setAttribute("data-end", i), r.style.top = (n - d - 1) * f + "px", r.textContent = new Array(i - n + 2).join(" \n")
            });
            h.push(function() {
                p.appendChild(r)
            })
        });
        var i = u.id;
        if (m && i) {
            for (var n = "linkable-line-numbers", r = !1, o = u; o;) {
                if (b(o, n)) {
                    r = !0;
                    break
                }
                o = o.parentElement
            }
            if (r) {
                b(u, n) || h.push(function() {
                    u.className = (u.className + " " + n).trim()
                });
                var a = parseInt(u.getAttribute("data-start") || "1");
                g(".line-numbers-rows > span", u).forEach(function(e, t) {
                    var n = t + a;
                    e.onclick = function() {
                        var e = i + "." + n;
                        l = !1, location.hash = e, setTimeout(function() {
                            l = !0
                        }, 1)
                    }
                })
            }
        }
        return function() {
            h.forEach(v)
        }
    }

    function c() {
        var e = location.hash.slice(1);
        g(".temporary.line-highlight").forEach(function(e) {
            e.parentNode.removeChild(e)
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var n = e.slice(0, e.lastIndexOf(".")),
                i = document.getElementById(n);
            if (i) i.hasAttribute("data-line") || i.setAttribute("data-line", ""), u(i, t, "temporary ")(), l && document.querySelector(".temporary.line-highlight").scrollIntoView()
        }
    }
}();
! function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var o = "line-numbers",
            a = /\n(?!$)/g,
            e = Prism.plugins.lineNumbers = {
                getLine: function(e, n) {
                    if ("PRE" === e.tagName && e.classList.contains(o)) {
                        var t = e.querySelector(".line-numbers-rows"),
                            i = parseInt(e.getAttribute("data-start"), 10) || 1,
                            r = i + (t.children.length - 1);
                        n < i && (n = i), r < n && (n = r);
                        var s = n - i;
                        return t.children[s]
                    }
                },
                resize: function(e) {
                    u([e])
                },
                assumeViewportIndependence: !0
            },
            t = function(e) {
                return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
            },
            n = void 0;
        window.addEventListener("resize", function() {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))))
        }), Prism.hooks.add("complete", function(e) {
            if (e.code) {
                var n = e.element,
                    t = n.parentNode;
                if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
                    n.classList.remove(o), t.classList.add(o);
                    var i, r = e.code.match(a),
                        s = r ? r.length + 1 : 1,
                        l = new Array(s + 1).join("<span></span>");
                    (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e)
                }
            }
        }), Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        })
    }

    function u(e) {
        if (0 != (e = e.filter(function(e) {
                var n = t(e)["white-space"];
                return "pre-wrap" === n || "pre-line" === n
            })).length) {
            var n = e.map(function(e) {
                var n = e.querySelector("code"),
                    t = e.querySelector(".line-numbers-rows");
                if (n && t) {
                    var i = e.querySelector(".line-numbers-sizer"),
                        r = n.textContent.split(a);
                    i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
                    var s = i.getBoundingClientRect().height;
                    return i.innerHTML = "", {
                        element: e,
                        lines: r,
                        lineHeights: [],
                        oneLinerHeight: s,
                        sizer: i
                    }
                }
            }).filter(Boolean);
            n.forEach(function(e) {
                var i = e.sizer,
                    n = e.lines,
                    r = e.lineHeights,
                    s = e.oneLinerHeight;
                r[n.length - 1] = void 0, n.forEach(function(e, n) {
                    if (e && 1 < e.length) {
                        var t = i.appendChild(document.createElement("span"));
                        t.style.display = "block", t.textContent = e
                    } else r[n] = s
                })
            }), n.forEach(function(e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }), n.forEach(function(e) {
                var n = e.sizer,
                    t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function(e, n) {
                    t.children[n].style.height = e + "px"
                })
            })
        }
    }
}();