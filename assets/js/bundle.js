! function() {
    var e = /\n[\s]+$/,
        t = /^\n[\s]+/,
        r = /[\s]+$/,
        o = /^[\s]+/,
        n = /[\n\s]+/g,
        i = ["a", "abbr", "b", "bdi", "bdo", "br", "cite", "data", "dfn", "em", "i", "kbd", "mark", "q", "rp", "rt", "rtc", "ruby", "s", "amp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr"],
        a = ["code", "pre", "textarea"],
        u = function u(s, c) {
            if (Array.isArray(c))
                for (var l, p, f = s.nodeName.toLowerCase(), d = !1, h = 0, y = c.length; h < y; h++) {
                    var m = c[h];
                    if (Array.isArray(m)) u(s, m);
                    else {
                        ("number" == typeof m || "boolean" == typeof m || "function" == typeof m || m instanceof Date || m instanceof RegExp) && (m = m.toString());
                        var b = s.childNodes[s.childNodes.length - 1];
                        if ("string" == typeof m) d = !0, b && "#text" === b.nodeName ? b.nodeValue += m : (m = document.createTextNode(m), s.appendChild(m), b = m), h === y - 1 && (d = !1, -1 === i.indexOf(f) && -1 === a.indexOf(f) ? "" === (l = b.nodeValue.replace(t, "").replace(r, "").replace(e, "").replace(n, " ")) ? s.removeChild(b) : b.nodeValue = l : -1 === a.indexOf(f) && (p = 0 === h ? "" : " ", l = b.nodeValue.replace(t, p).replace(o, " ").replace(r, "").replace(e, "").replace(n, " "), b.nodeValue = l));
                        else if (m && m.nodeType) {
                            d && (d = !1, -1 === i.indexOf(f) && -1 === a.indexOf(f) ? "" === (l = b.nodeValue.replace(t, "").replace(e, "").replace(n, " ")) ? s.removeChild(b) : b.nodeValue = l : -1 === a.indexOf(f) && (l = b.nodeValue.replace(o, " ").replace(t, "").replace(e, "").replace(n, " "), b.nodeValue = l));
                            var v = m.nodeName;
                            v && (f = v.toLowerCase()), s.appendChild(m)
                        }
                    }
                }
        },
        s = function(e, t) {
            return function() {
                var e = document.createElement("article");
                e.setAttribute("class", "cf ph3 ph5-ns pv4 color-neutral relative");
                var t = document.createElement("header");
                t.setAttribute("class", "fn fl-ns w-50-l pr4-ns");
                var r = document.createElement("div");
                r.setAttribute("class", "w-100 flex flex-column pv3-ns");
                var o = document.createElement("h1");
                o.setAttribute("class", "f1 fw6 mb3 mt0 lh-title measure-wide"), u(o, ["General Donation to Bhumi"]);
                var n = document.createElement("a");
                n.setAttribute("href", "https://bhumi.ngo"), n.setAttribute("title", "Bhumi Homepage"), n.setAttribute("class", "");
                var i = document.createElement("img");
                i.setAttribute("src", "assets/img/siteicon-alt.png"), i.setAttribute("style", "height:auto; max-width:100px;"), i.setAttribute("alt", "Bhumi Logo"), i.setAttribute("class", "dn db-ns"), u(n, [i]), u(r, ["\n          ", o, "\n          ", n, "\n        "]), u(t, ["\n        ", r, "\n      "]);
                var a = document.createElement("div");
                a.setAttribute("class", "fn fl-ns w-50-l");
                var s = document.createElement("p");
                s.setAttribute("class", "lh-copy measure f3 mt4 mt0-ns ");
                var c = document.createElement("strong");
                u(c, ["Bhumi"]), u(s, ["\n          ", c, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec pellentesque mi, a semper nisl. Sed nec vulputate lacus. Integer vel maximus purus. Nam ullamcorper efficitur mollis. Integer vel enim risus. Duis justo lectus, vulputate nec semper eu, imperdiet in ipsum. Cras convallis, nulla dignissim lobortis rhoncus, ex diam molestie dolor, porttitor volutpat tellus erat at diam. Phasellus sed elit sit amet diam elementum varius vel.\n        "]);
                var l = document.createComment(' <p class="lh-copy measure f5  ">\n          <strong>Why Donate?</strong> As a fiscal sponsor and an active open scholarship community member, we have worked with people and projects at all stages of development - from supporting small open source project leaders to managing multi-institutional collaborations. We believe that building collaborative networks and developing open resources that share community knowledge is critical to advancing research.\n        </p>\n        <p class="lh-copy measure f5  ">\n          <strong>What is my money spent on?</strong> 100% of your money directly supports folks producing open source software and building our community. Our employee headcount and salaries depend on our active grants. We have very little overhead and all earn the same amount of money. If you want your money to go to a specific project, please let us know! We love to hear what you are interested in.\n        </p> '),
                    p = document.createElement("div");
                p.setAttribute("class", "pt1 mt2"), u(p, ["\n          ", arguments[0], "\n        "]), u(a, ["\n        ", s, "\n        ", l, "\n        ", p, "\n      "]);
                var f = document.createElement("footer");
                f.setAttribute("class", "w-100-m absolute-l fl-ns fn db-l bottom-2-l");
                var d = document.createElement("p");
                d.setAttribute("class", "lh-copy f7 color-neutral-60");
                var h = document.createElement("br"),
                    y = document.createElement("br");
                return u(d, ["\n          Bhumi is a registered Non-governmental organization.", h, "Donations are tax deductible to the extent allowed by law in India as per 80G.", y, "Tax ID 69-6969696\n        "]), u(f, ["\n        ", d, "\n      "]), u(e, ["\n      ", t, "\n      ", a, "\n      ", f, "\n    "]), e
            }(function(e, t) {
                var r, o, n = e.checkout.pending || e.checkout.success || e.checkout.error;
                return function() {
                    var e = document.createElement("div"),
                        t = document.createElement("h5");
                    t.setAttribute("class", "f4 mv0 color-neutral-80"), u(t, ["Donate now (tax-deductible)"]);
                    var r = document.createElement("h6");
                    r.setAttribute("class", "f6 mv1 color-neutral-60"), u(r, ["We accept credit/debit cards, Internet Banking, UPI "]);
                    var o = document.createElement("p");
                    var n = document.createElement("h5");
                    var i = document.createElement("p");
                    return i.setAttribute("class", "lh-copy f7 black-60 measure"), u(e, ["\n      ", t, "\n      ", r, "\n      ", arguments[0], "\n      ", o, "\n      ", arguments[1], "\n      ", n, "\n      ", arguments[2], "\n      ", i, "\n    "]), e
                }(function() {
                    var r = function() {
                        var e = document.createElement("ul");
                        e.setAttribute("class", "list pl0 mb0");
                        var t = document.createElement("li");
                        t.setAttribute("class", "dib mr2 mb2");
                        var r = document.createElement("a");
                        r.setAttribute("href", ""), r.onclick = arguments[0], r.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(r, ["Rs. 10"]), u(t, ["\n          ", r, "\n        "]);
                        var o = document.createElement("li");
                        o.setAttribute("class", "dib mr2 mb2");
                        var n = document.createElement("a");
                        n.setAttribute("href", ""), n.onclick = arguments[1], n.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(n, ["Rs. 25"]), u(o, ["\n          ", n, "\n        "]);
                        var i = document.createElement("li");
                        i.setAttribute("class", "dib mr2 mb2");
                        var a = document.createElement("a");
                        a.setAttribute("href", ""), a.onclick = arguments[2], a.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(a, ["Rs. 50"]), u(i, ["\n          ", a, "\n        "]);
                        var s = document.createElement("li");
                        s.setAttribute("class", "dib mr2 mb2");
                        var c = document.createElement("a");
                        c.setAttribute("href", ""), c.onclick = arguments[3], c.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(c, ["Rs. 100"]), u(s, ["\n          ", c, "\n        "]);
                        var l = document.createElement("li");
                        l.setAttribute("class", "dib mr2 mb2");
                        var p = document.createElement("a");
                        p.setAttribute("href", ""), p.onclick = arguments[4], p.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(p, ["Rs. 250"]), u(l, ["\n          ", p, "\n        "]);
                        var f = document.createElement("li");
                        f.setAttribute("class", "dib mr2 mb2");
                        var d = document.createElement("a");
                        return d.setAttribute("href", ""), d.onclick = arguments[5], d.setAttribute("class", "f6 f4-ns b db pv3 ph3 link dim color-neutral-80 ba b--green"), u(d, ["Other"]), u(f, ["\n          ", d, "\n        "]), u(e, ["\n        ", t, "\n        ", o, "\n        ", i, "\n        ", s, "\n        ", l, "\n        ", f, "\n      "]), e
                    }(function() {
                        t("checkout", 1e3)
                    }, function() {
                        t("checkout", 2500)
                    }, function() {
                        t("checkout", 5e3)
                    }, function() {
                        t("checkout", 1e4)
                    }, function() {
                        t("checkout", 25e3)
                    }, function() {
                        t("toggleValInput")
                    });
                    return e.showValInput ? function() {
                        var e = document.createElement("form");
                        e.onsubmit = arguments[2], e.setAttribute("class", "mv3 cf");
                        var t = document.createElement("label");
                        t.setAttribute("for", "donate-amount"), t.setAttribute("class", "f6 f4-ns input-reset ba b--green fl b color-neutral-80 br-0 bg-neutral-04 pa3 br2 br--left"), u(t, ["Rs. "]);
                        var r = document.createElement("input");
                        r.setAttribute("placeholder", "Donation Amount"), r.setAttribute("type", "text"), r.setAttribute("name", "donate-amount"), r.setAttribute("value", arguments[0]), r.setAttribute("id", "donate-amount"), r.setAttribute("class", "f6 f4-ns input-reset ba b--green fl color-neutral bg-white pa3 w-50 bl-0 br-0 outline-0");
                        var o = document.createElement("input");
                        return o.setAttribute("type", "submit"), o.onclick = arguments[1], o.setAttribute("value", "Donate"), o.setAttribute("class", "f6 f4-ns button-reset b--green ba fl pv3 tc bg-animate bg-green hover-bg-green-hover white pointer w-20 br2 br--right outline-0"), u(e, ["\n        ", t, "\n        ", r, "\n        ", o, "\n      "]), e
                    }(e.checkout.amount ? e.checkout.amount / 100 : "", function(e) {
                        return o()
                    }, function(e) {
                        return o(e)
                    }) : r;

                    function o(e) {
                        e.preventDefault();
                        var r = document.getElementById("donate-amount").value;
                        r && t("checkout", 100 * r)
                    }
                }(), n ? (r = "", o = "", e.checkout.pending && (o = "bg-lightest-blue", r = "We are processing your donation..."), e.checkout.success && (o = "bg-light-green", r = "\n        You donated $" + e.checkout.amount / 100 + " to Bhumi Organisation.\n        Thank you!\n      "), e.checkout.error && (o = "bg-light-red", r = "\n        We had trouble processing your donation:\n        " + e.checkout.error + "\n      "), function() {
                    var e = document.createElement("section");
                    e.setAttribute("class", "pv2 ph3 " + arguments[1]);
                    var t = document.createElement("p");
                    return t.setAttribute("class", "lh-copy measure"), u(t, ["\n          ", arguments[0], "\n        "]), u(e, ["\n        ", t, "\n      "]), e
                }(r, o)) : "", function() {
                }())
            }(e, t))
        },
        c = function() {
            return function() {
                var e = document.createElement("footer");
                e.setAttribute("class", "bt b--black-10 black-70 pv4 ph3 ph5-m ph6-l");
                var t = document.createElement("div");
                t.setAttribute("class", "tc mt3");
                var r = document.createElement("a");
                return r.setAttribute("href", "https://bhumi.ngo"), r.setAttribute("title", "Bhumi Website"), r.setAttribute("class", "f6 dib ph2 link mid-gray dim"), u(r, ["Bhumi Homepage"]), u(t, ["\n        ", r, "\n      "]), u(e, ["\n      ", t, "\n    "]), e
            }()
        },
        l = {};

    function p(e) {
        if (!(this instanceof p)) return new p(e);
        "number" == typeof e && (e = {
            max: e
        }), e || (e = {}), this.cache = {}, this.head = this.tail = null, this.length = 0, this.max = e.max || 1e3, this.maxAge = e.maxAge || 0
    }
    l = p, Object.defineProperty(p.prototype, "keys", {
        get: function() {
            return Object.keys(this.cache)
        }
    }), p.prototype.clear = function() {
        this.cache = {}, this.head = this.tail = null, this.length = 0
    }, p.prototype.remove = function(e) {
        if ("string" != typeof e && (e = "" + e), this.cache.hasOwnProperty(e)) {
            var t = this.cache[e];
            return delete this.cache[e], this._unlink(e, t.prev, t.next), t.value
        }
    }, p.prototype._unlink = function(e, t, r) {
        this.length--, 0 === this.length ? this.head = this.tail = null : this.head === e ? (this.head = t, this.cache[this.head].next = null) : this.tail === e ? (this.tail = r, this.cache[this.tail].prev = null) : (this.cache[t].next = r, this.cache[r].prev = t)
    }, p.prototype.peek = function(e) {
        if (this.cache.hasOwnProperty(e)) {
            var t = this.cache[e];
            if (this._checkAge(e, t)) return t.value
        }
    }, p.prototype.set = function(e, t) {
        var r;
        if ("string" != typeof e && (e = "" + e), this.cache.hasOwnProperty(e)) {
            if ((r = this.cache[e]).value = t, this.maxAge && (r.modified = Date.now()), e === this.head) return t;
            this._unlink(e, r.prev, r.next)
        } else r = {
            value: t,
            modified: 0,
            next: null,
            prev: null
        }, this.maxAge && (r.modified = Date.now()), this.cache[e] = r, this.length === this.max && this.evict();
        return this.length++, r.next = null, r.prev = this.head, this.head && (this.cache[this.head].next = e), this.head = e, this.tail || (this.tail = e), t
    }, p.prototype._checkAge = function(e, t) {
        return !(this.maxAge && Date.now() - t.modified > this.maxAge && (this.remove(e), 1))
    }, p.prototype.get = function(e) {
        if ("string" != typeof e && (e = "" + e), this.cache.hasOwnProperty(e)) {
            var t = this.cache[e];
            if (this._checkAge(e, t)) return this.head !== e && (e === this.tail ? (this.tail = t.next, this.cache[this.tail].prev = null) : this.cache[t.prev].next = t.next, this.cache[t.next].prev = t.prev, this.cache[this.head].next = e, t.prev = this.head, t.next = null, this.head = e), t.value
        }
    }, p.prototype.evict = function() {
        this.tail && this.remove(this.tail)
    };
    var f = {};

    function d(e, t, r) {
        this.cache = "number" == typeof r ? new l(r) : r || new l(100), this.state = e, this.emit = t
    }

    function h(e) {
        return new(e.bind.apply(e, arguments))
    }
    "function" == typeof Symbol && Symbol.iterator, f = d, d.prototype.render = function(e, t) {
        var r = this.cache.get(t);
        if (!r) {
            for (var o = [], n = 2, i = arguments.length; n < i; n++) o.push(arguments[n]);
            o.unshift(e, t, this.state, this.emit), r = h.apply(h, o), this.cache.set(t, r)
        }
        return r
    };
    var y, m = function(e) {
        if ("undefined" == typeof document) throw new Error("document-ready only runs in the browser");
        var t = document.readyState;
        if ("complete" === t || "interactive" === t) return setTimeout(e, 0);
        document.addEventListener("DOMContentLoaded", function() {
            e()
        })
    };
    "function" == typeof Symbol && Symbol.iterator;
    var b = "undefined" != typeof window;

    function v(e) {
        this.hasWindow = e, this.hasIdle = this.hasWindow && window.requestIdleCallback, this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout, this.scheduled = !1, this.queue = []
    }
    v.prototype.push = function(e) {
        this.queue.push(e), this.schedule()
    }, v.prototype.schedule = function() {
        if (!this.scheduled) {
            this.scheduled = !0;
            var e = this;
            this.method(function(t) {
                for (; e.queue.length && t.timeRemaining() > 0;) e.queue.shift()(t);
                e.scheduled = !1, e.queue.length && e.schedule()
            })
        }
    }, v.prototype.setTimeout = function(e) {
        setTimeout(e, 0, {
            timeRemaining: function() {
                return 1
            }
        })
    }, y = function() {
        var e;
        return b ? (window._nanoScheduler || (window._nanoScheduler = new v(!0)), e = window._nanoScheduler) : e = new v, e
    }, "function" == typeof Symbol && Symbol.iterator;
    var g, w = y();
    A.disabled = !0;
    try {
        g = window.performance, A.disabled = "true" === window.localStorage.DISABLE_NANOTIMING || !g.mark
    } catch (Lt) {}

    function A(e) {
        if (A.disabled) return S;
        var t = (1e4 * g.now()).toFixed() % Number.MAX_SAFE_INTEGER,
            r = "start-" + t + "-" + e;

        function o(o) {
            var n = "end-" + t + "-" + e;
            g.mark(n), w.push(function() {
                var i = null;
                try {
                    var a = e + " [" + t + "]";
                    g.measure(a, r, n), g.clearMarks(r), g.clearMarks(n)
                } catch (Lt) {
                    i = Lt
                }
                o && o(i, e)
            })
        }
        return g.mark(r), o.uuid = t, o
    }

    function S(e) {
        e && w.push(function() {
            e(new Error("nanotiming: performance API unavailable"))
        })
    }
    var E = A,
        $ = function(e, t, r) {
            var o, n = e.length;
            if (!(t >= n || 0 === r)) {
                var i = n - (r = t + r > n ? n - t : r);
                for (o = t; o < i; ++o) e[o] = e[o + r];
                e.length = i
            }
        },
        k = {};

    function P(e) {
        if (!(this instanceof P)) return new P(e);
        this._name = e || "nanobus", this._starListeners = [], this._listeners = {}
    }
    "function" == typeof Symbol && Symbol.iterator, k = P, P.prototype.emit = function(e) {
        for (var t = [], r = 1, o = arguments.length; r < o; r++) t.push(arguments[r]);
        var n = E(this._name + "('" + e.toString() + "')"),
            i = this._listeners[e];
        return i && i.length > 0 && this._emit(this._listeners[e], t), this._starListeners.length > 0 && this._emit(this._starListeners, e, t, n.uuid), n(), this
    }, P.prototype.on = P.prototype.addListener = function(e, t) {
        return "*" === e ? this._starListeners.push(t) : (this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t)), this
    }, P.prototype.prependListener = function(e, t) {
        return "*" === e ? this._starListeners.unshift(t) : (this._listeners[e] || (this._listeners[e] = []), this._listeners[e].unshift(t)), this
    }, P.prototype.once = function(e, t) {
        var r = this;
        return this.on(e, function o() {
            t.apply(r, arguments), r.removeListener(e, o)
        }), this
    }, P.prototype.prependOnceListener = function(e, t) {
        var r = this;
        return this.prependListener(e, function o() {
            t.apply(r, arguments), r.removeListener(e, o)
        }), this
    }, P.prototype.removeListener = function(e, t) {
        return "*" === e ? (this._starListeners = this._starListeners.slice(), r(this._starListeners, t)) : (void 0 !== this._listeners[e] && (this._listeners[e] = this._listeners[e].slice()), r(this._listeners[e], t));

        function r(e, t) {
            if (e) {
                var r = e.indexOf(t);
                return -1 !== r ? ($(e, r, 1), !0) : void 0
            }
        }
    }, P.prototype.removeAllListeners = function(e) {
        return e ? "*" === e ? this._starListeners = [] : this._listeners[e] = [] : (this._starListeners = [], this._listeners = {}), this
    }, P.prototype.listeners = function(e) {
        var t = "*" !== e ? this._listeners[e] : this._starListeners,
            r = [];
        if (t)
            for (var o = t.length, n = 0; n < o; n++) r.push(t[n]);
        return r
    }, P.prototype._emit = function(e, t, r, o) {
        if (void 0 !== e && 0 !== e.length) {
            void 0 === r && (r = t, t = null), t && (r = void 0 !== o ? [t].concat(r, o) : [t].concat(r));
            for (var n = e.length, i = 0; i < n; i++) {
                var a = e[i];
                a.apply(a, r)
            }
        }
    }, "function" == typeof Symbol && Symbol.iterator;
    var _ = /(noopener|noreferrer) (noopener|noreferrer)/,
        O = /^[\w-_]+:/;

    function T(e, t) {
        if (!e) throw new Error(t || "AssertionError")
    }
    T.notEqual = function(e, t, r) {}, T.notOk = function(e, t) {}, T.equal = function(e, t, r) {}, T.ok = T;
    var j = ["onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "onmouseenter", "onmouseleave", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ondragstart", "ondrag", "ondragenter", "ondragleave", "ondragover", "ondrop", "ondragend", "onkeydown", "onkeypress", "onkeyup", "onunload", "onabort", "onerror", "onresize", "onscroll", "onselect", "onchange", "onsubmit", "onreset", "onfocus", "onblur", "oninput", "oncontextmenu", "onfocusin", "onfocusout"],
        I = j.length;

    function x(e, t, r) {
        e[r] !== t[r] && (t[r] = e[r], e[r] ? t.setAttribute(r, "") : t.removeAttribute(r))
    }
    var C = function(e, t) {
        var r = e.nodeType,
            o = e.nodeName;
        1 === r && function(e, t) {
                for (var r = t.attributes, o = e.attributes, n = null, i = null, a = null, u = null, s = o.length - 1; s >= 0; --s) a = (u = o[s]).name, n = u.namespaceURI, i = u.value, n ? (a = u.localName || a, t.getAttributeNS(n, a) !== i && t.setAttributeNS(n, a, i)) : t.hasAttribute(a) ? t.getAttribute(a) !== i && ("null" === i || "undefined" === i ? t.removeAttribute(a) : t.setAttribute(a, i)) : t.setAttribute(a, i);
                for (var c = r.length - 1; c >= 0; --c) !1 !== (u = r[c]).specified && (a = u.name, (n = u.namespaceURI) ? (a = u.localName || a, e.hasAttributeNS(n, a) || t.removeAttributeNS(n, a)) : e.hasAttributeNS(null, a) || t.removeAttribute(a))
            }(e, t), 3 !== r && 8 !== r || t.nodeValue !== e.nodeValue && (t.nodeValue = e.nodeValue), "INPUT" === o ? function(e, t) {
                var r = e.value,
                    o = t.value;
                x(e, t, "checked"), x(e, t, "disabled"), r !== o && (t.setAttribute("value", r), t.value = r), "null" === r && (t.value = "", t.removeAttribute("value")), e.hasAttributeNS(null, "value") ? "range" === t.type && (t.value = r) : t.removeAttribute("value")
            }(e, t) : "OPTION" === o ? function(e, t) {
                x(e, t, "selected")
            }(e, t) : "TEXTAREA" === o && function(e, t) {
                var r = e.value;
                if (r !== t.value && (t.value = r), t.firstChild && t.firstChild.nodeValue !== r) {
                    if ("" === r && t.firstChild.nodeValue === t.placeholder) return;
                    t.firstChild.nodeValue = r
                }
            }(e, t),
            function(e, t) {
                for (var r = 0; r < I; r++) {
                    var o = j[r];
                    e[o] ? t[o] = e[o] : t[o] && (t[o] = void 0)
                }
            }(e, t)
    };
    "function" == typeof Symbol && Symbol.iterator;
    var N = 3;

    function D(e, t) {
        return t ? e ? e.isSameNode && e.isSameNode(t) ? t : e.tagName !== t.tagName || R(e) !== R(t) ? e : (C(e, t), L(e, t), t) : null : e
    }

    function R(e) {
        return e.dataset ? e.dataset.nanomorphComponentId : void 0
    }

    function L(e, t) {
        for (var r, o, n, i, a = 0, u = 0; r = t.childNodes[u], o = e.childNodes[u - a], r || o; u++)
            if (o)
                if (r)
                    if (U(o, r))(n = D(o, r)) !== r && (t.replaceChild(n, r), a++);
                    else {
                        i = null;
                        for (var s = u; s < t.childNodes.length; s++)
                            if (U(t.childNodes[s], o)) {
                                i = t.childNodes[s];
                                break
                            }
                        i ? ((n = D(o, i)) !== i && a++, t.insertBefore(n, r)) : o.id || r.id ? (t.insertBefore(o, r), a++) : (n = D(o, r)) !== r && (t.replaceChild(n, r), a++)
                    }
        else t.appendChild(o), a++;
        else t.removeChild(r), u--
    }

    function U(e, t) {
        return e.id ? e.id === t.id : e.isSameNode ? e.isSameNode(t) : e.tagName === t.tagName && e.type === N && e.nodeValue === t.nodeValue
    }
    var F = function(e, t, r) {
        return r && r.childrenOnly ? (L(t, e), e) : D(t, e)
    };
    "function" == typeof Symbol && Symbol.iterator;
    var M = /([^?=&]+)(=([^&]*))?/g;
    "function" == typeof Symbol && Symbol.iterator;
    var V = function() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) W.call(r, o) && (e[o] = r[o])
            }
            return e
        },
        W = Object.prototype.hasOwnProperty,
        B = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) q.call(r, o) && (e[o] = r[o])
            }
            return e
        },
        q = Object.prototype.hasOwnProperty,
        G = {};

    function H() {
        if (!(this instanceof H)) return new H;
        this.trie = {
            nodes: {}
        }
    }
    "function" == typeof Symbol && Symbol.iterator, G = H, H.prototype.create = function(e) {
        var t = e.replace(/^\//, "").split("/");
        return function e(r, o) {
            var n = t.hasOwnProperty(r) && t[r];
            if (!1 === n) return o;
            var i = null;
            return /^:|^\*/.test(n) ? (o.nodes.hasOwnProperty("$$") ? i = o.nodes.$$ : (i = {
                nodes: {}
            }, o.nodes.$$ = i), "*" === n[0] && (o.wildcard = !0), o.name = n.replace(/^:|^\*/, "")) : o.nodes.hasOwnProperty(n) ? i = o.nodes[n] : (i = {
                nodes: {}
            }, o.nodes[n] = i), e(r + 1, i)
        }(0, this.trie)
    }, H.prototype.match = function(e) {
        var t = e.replace(/^\//, "").split("/"),
            r = {},
            o = function e(o, n) {
                if (void 0 !== n) {
                    var i = t[o];
                    if (void 0 === i) return n;
                    if (n.nodes.hasOwnProperty(i)) return e(o + 1, n.nodes[i]);
                    if (n.name) {
                        try {
                            r[n.name] = decodeURIComponent(i)
                        } catch (Lt) {
                            return e(o, void 0)
                        }
                        return e(o + 1, n.nodes.$$)
                    }
                    if (n.wildcard) {
                        try {
                            r.wildcard = decodeURIComponent(t.slice(o).join("/"))
                        } catch (Lt) {
                            return e(o, void 0)
                        }
                        return n.nodes.$$
                    }
                    return e(o + 1)
                }
            }(0, this.trie);
        if (o) return (o = V(o)).params = r, o
    }, H.prototype.mount = function(e, t) {
        var r = e.replace(/^\//, "").split("/"),
            o = null,
            n = null;
        if (1 === r.length) n = r[0], o = this.create(n);
        else {
            var i = r.join("/");
            n = r[0], o = this.create(i)
        }
        B(o.nodes, t.nodes), t.name && (o.name = t.name), o.nodes[""] && (Object.keys(o.nodes[""]).forEach(function(e) {
            "nodes" !== e && (o[e] = o.nodes[""][e])
        }), B(o.nodes, o.nodes[""].nodes), delete o.nodes[""].nodes)
    }, "function" == typeof Symbol && Symbol.iterator;
    var X = function e(t) {
            if (!(this instanceof e)) return new e(t);
            var r = (t || "").replace(/^\//, ""),
                o = G();
            return n._trie = o, n.on = function(e, t) {
                var r = t._wayfarer && t._trie ? t : function() {
                    return t.apply(this, Array.prototype.slice.call(arguments))
                };
                (e = e || "/", r.route = e, r._wayfarer && r._trie) ? o.mount(e, r._trie.trie): o.create(e).cb = r;
                return n
            }, n.emit = n, n.match = i, n._wayfarer = !0, n;

            function n(e) {
                var t = i(e),
                    r = new Array(arguments.length);
                r[0] = t.params;
                for (var o = 1; o < r.length; o++) r[o] = arguments[o];
                return t.cb.apply(t.cb, r)
            }

            function i(e) {
                var t = o.match(e);
                if (t && t.cb) return new a(t);
                var n = o.match(r);
                if (n && n.cb) return new a(n);
                throw new Error("route '" + e + "' did not match")
            }

            function a(e) {
                this.cb = e.cb, this.route = e.cb.route, this.params = e.params
            }
        },
        J = {},
        K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Y = /file:\/\//.test("object" === ("undefined" == typeof window ? "undefined" : K(window)) && window.location && window.location.origin),
        z = new RegExp("^(file://|/)(.*.html?/?)?"),
        Z = new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),
        Q = new RegExp("#"),
        ee = new RegExp("[?].*$");

    function te(e) {
        if (!(this instanceof te)) return new te(e);
        e = e || {}, this.router = X(e.default || "/404")
    }

    function re(e, t) {
        return e = t ? e.replace(z, "") : e.replace(Z, ""), decodeURI(e.replace(ee, "").replace(Q, "/"))
    }
    J = te, te.prototype.on = function(e, t) {
        e = e.replace(/^[#\/]/, ""), this.router.on(e, t)
    }, te.prototype.emit = function(e) {
        return e = re(e, Y), this.router.emit(e)
    }, te.prototype.match = function(e) {
        return e = re(e, Y), this.router.match(e)
    };
    var oe = function(e, t) {
            if (e) try {
                var r = document.querySelector(e);
                r && r.scrollIntoView(t)
            } catch (Lt) {}
        },
        ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        ie = ue,
        ae = {};

    function ue(e) {
        if (!(this instanceof ue)) return new ue(e);
        e = e || {};
        var t = this;
        this._events = {
            DOMCONTENTLOADED: "DOMContentLoaded",
            DOMTITLECHANGE: "DOMTitleChange",
            REPLACESTATE: "replaceState",
            PUSHSTATE: "pushState",
            NAVIGATE: "navigate",
            POPSTATE: "popState",
            RENDER: "render"
        }, this._historyEnabled = void 0 === e.history || e.history, this._hrefEnabled = void 0 === e.href || e.href, this._hashEnabled = void 0 === e.hash || e.hash, this._hasWindow = "undefined" != typeof window, this._cache = e.cache, this._loaded = !1, this._stores = [], this._tree = null;
        var r = {
            events: this._events,
            components: {}
        };
        this._hasWindow ? (this.state = window.initialState ? V(window.initialState, r) : r, delete window.initialState) : this.state = r, this.router = J({
            curry: !0
        }), this.emitter = k("choo.emit"), this.emit = this.emitter.emit.bind(this.emitter), this._hasWindow && (this.state.title = document.title), this.emitter.prependListener(this._events.DOMTITLECHANGE, function(e) {
            t.state.title = e, t._hasWindow && (document.title = e)
        })
    }
    ue.prototype.route = function(e, t) {
        this.router.on(e, t)
    }, ue.prototype.use = function(e) {
        var t = this;
        this._stores.push(function(r) {
            var o = "choo.use";
            o = e.storeName ? o + "(" + e.storeName + ")" : o;
            var n = E(o);
            e(r, t.emitter, t), n()
        })
    }, ue.prototype.start = function() {
        var e, t, r = this;
        return this._historyEnabled && (this.emitter.prependListener(this._events.NAVIGATE, function() {
            r._matchRoute(), r._loaded && (r.emitter.emit(r._events.RENDER), setTimeout(oe.bind(null, window.location.hash), 0))
        }), this.emitter.prependListener(this._events.POPSTATE, function() {
            r.emitter.emit(r._events.NAVIGATE)
        }), this.emitter.prependListener(this._events.PUSHSTATE, function(e) {
            window.history.pushState(ae, null, e), r.emitter.emit(r._events.NAVIGATE)
        }), this.emitter.prependListener(this._events.REPLACESTATE, function(e) {
            window.history.replaceState(ae, null, e), r.emitter.emit(r._events.NAVIGATE)
        }), window.onpopstate = function() {
            r.emitter.emit(r._events.POPSTATE)
        }, r._hrefEnabled && (e = function(e) {
            var t = e.href,
                o = e.hash;
            t !== window.location.href ? r.emitter.emit(r._events.PUSHSTATE, t) : !r._hashEnabled && o && oe(o)
        }, t = t || window.document, window.addEventListener("click", function(r) {
            if (!(r.button && 0 !== r.button || r.ctrlKey || r.metaKey || r.altKey || r.shiftKey || r.defaultPrevented)) {
                var o = function e(r) {
                    if (r && r !== t) return "a" !== r.localName || void 0 === r.href ? e(r.parentNode) : r
                }(r.target);
                o && (window.location.protocol !== o.protocol || window.location.hostname !== o.hostname || window.location.port !== o.port || o.hasAttribute("data-nanohref-ignore") || o.hasAttribute("download") || "_blank" === o.getAttribute("target") && _.test(o.getAttribute("rel")) || O.test(o.getAttribute("href")) || (r.preventDefault(), e(o)))
            }
        }))), this._setCache(this.state), this._stores.forEach(function(e) {
            e(r.state)
        }), this._matchRoute(), this._tree = this._prerender(this.state), this.emitter.prependListener(r._events.RENDER, function(e, t) {
            t || (t = window.requestAnimationFrame);
            var r = !1,
                o = null;
            return function() {
                null !== o || r || (r = !0, t(function() {
                    r = !1;
                    for (var t = o.length, n = new Array(t), i = 0; i < t; i++) n[i] = o[i];
                    e.apply(e, n), o = null
                })), o = arguments
            }
        }(function() {
            var e = E("choo.render"),
                t = r._prerender(r.state),
                o = E("choo.morph");
            F(r._tree, t), o(), e()
        })), m(function() {
            r.emitter.emit(r._events.DOMCONTENTLOADED), r._loaded = !0
        }), this._tree
    }, ue.prototype.mount = function(e) {
        if ("object" !== ("undefined" == typeof window ? "undefined" : ne(window))) return this.selector = e, this;
        var t = this;
        m(function() {
            var r = E("choo.render"),
                o = t.start();
            t._tree = "string" == typeof e ? document.querySelector(e) : e;
            var n = E("choo.morph");
            F(t._tree, o), n(), r()
        })
    }, ue.prototype.toString = function(e, t) {
        this.state = V(this.state, t || {});
        var r = this;
        this._setCache(this.state), this._stores.forEach(function(e) {
            e(r.state)
        }), this._matchRoute(e);
        var o = this._prerender(this.state);
        return "string" == typeof o.outerHTML ? o.outerHTML : o.toString()
    }, ue.prototype._matchRoute = function(e) {
        var t, r;
        e ? (t = e.replace(/\?.+$/, "").replace(/\/$/, ""), this._hashEnabled || (t = t.replace(/#.+$/, "")), r = e) : (t = window.location.pathname.replace(/\/$/, ""), this._hashEnabled && (t += window.location.hash.replace(/^#/, "/")), r = window.location.search);
        var o, n = this.router.match(t);
        return this._handler = n.cb, this.state.href = t, this.state.query = (o = {}, r.replace(/^.*\?/, "").replace(M, function(e, t, r, n) {
            o[decodeURIComponent(t)] = decodeURIComponent(n)
        }), o), this.state.route = n.route, this.state.params = n.params, this.state
    }, ue.prototype._prerender = function(e) {
        var t = E("choo.prerender('" + e.route + "')"),
            r = this._handler(e, this.emit);
        return t(), r
    }, ue.prototype._setCache = function(e) {
        var t = new f(e, this.emitter.emit.bind(this.emitter), this._cache);

        function r(e, r) {
            for (var o = [], n = 0, i = arguments.length; n < i; n++) o.push(arguments[n]);
            return t.render.apply(t, o)
        }
        e.cache = r, r.toJSON = function() {
            return null
        }
    };
    var se = {};
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, se = t
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    var ce, le = function(e) {
            var t = pe.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        },
        pe = Object.prototype.toString,
        fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        de = Function.prototype.toString,
        he = /^\s*class\b/,
        ye = function(e) {
            try {
                var t = de.call(e);
                return he.test(t)
            } catch (Lt) {
                return !1
            }
        },
        me = Object.prototype.toString,
        be = "function" == typeof Symbol && "symbol" === fe(Symbol.toStringTag),
        ve = function(e) {
            if (!e) return !1;
            if ("function" != typeof e && "object" !== (void 0 === e ? "undefined" : fe(e))) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            if (be) return function(e) {
                try {
                    return !ye(e) && (de.call(e), !0)
                } catch (Lt) {
                    return !1
                }
            }(e);
            if (ye(e)) return !1;
            var t = me.call(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t
        },
        ge = Object.prototype.toString,
        we = Object.prototype.hasOwnProperty,
        Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Se = Object.prototype.toString,
        Ee = function(e) {
            var t = Se.call(e),
                r = "[object Arguments]" === t;
            return r || (r = "[object Array]" !== t && null !== e && "object" === (void 0 === e ? "undefined" : Ae(e)) && "number" == typeof e.length && e.length >= 0 && "[object Function]" === Se.call(e.callee)), r
        },
        $e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    if (!Object.keys) {
        var ke = Object.prototype.hasOwnProperty,
            Pe = Object.prototype.toString,
            _e = Object.prototype.propertyIsEnumerable,
            Oe = !_e.call({
                toString: null
            }, "toString"),
            Te = _e.call(function() {}, "prototype"),
            je = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            Ie = function(e) {
                var t = e.constructor;
                return t && t.prototype === e
            },
            xe = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            Ce = function() {
                if ("undefined" == typeof window) return !1;
                for (var e in window) try {
                    if (!xe["$" + e] && ke.call(window, e) && null !== window[e] && "object" === $e(window[e])) try {
                        Ie(window[e])
                    } catch (Lt) {
                        return !0
                    }
                } catch (Lt) {
                    return !0
                }
                return !1
            }();
        ce = function(e) {
            var t = null !== e && "object" === (void 0 === e ? "undefined" : $e(e)),
                r = "[object Function]" === Pe.call(e),
                o = Ee(e),
                n = t && "[object String]" === Pe.call(e),
                i = [];
            if (!t && !r && !o) throw new TypeError("Object.keys called on a non-object");
            var a = Te && r;
            if (n && e.length > 0 && !ke.call(e, 0))
                for (var u = 0; u < e.length; ++u) i.push(String(u));
            if (o && e.length > 0)
                for (var s = 0; s < e.length; ++s) i.push(String(s));
            else
                for (var c in e) a && "prototype" === c || !ke.call(e, c) || i.push(String(c));
            if (Oe)
                for (var l = function(e) {
                        if ("undefined" == typeof window || !Ce) return Ie(e);
                        try {
                            return Ie(e)
                        } catch (Lt) {
                            return !1
                        }
                    }(e), p = 0; p < je.length; ++p) l && "constructor" === je[p] || !ke.call(e, je[p]) || i.push(je[p]);
            return i
        }
    }
    var Ne = ce,
        De = {},
        Re = Array.prototype.slice,
        Le = Object.keys,
        Ue = Le ? function(e) {
            return Le(e)
        } : Ne,
        Fe = Object.keys;
    Ue.shim = function() {
        return Object.keys ? function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
        }(1, 2) || (Object.keys = function(e) {
            return Ee(e) ? Fe(Re.call(e)) : Fe(e)
        }) : Object.keys = Ue, Object.keys || Ue
    }, De = Ue;
    var Me = {},
        Ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        We = "function" == typeof Symbol && "symbol" === Ve(Symbol("foo")),
        Be = Object.prototype.toString,
        qe = Array.prototype.concat,
        Ge = Object.defineProperty,
        He = Ge && function() {
            var e = {};
            try {
                for (var t in Ge(e, "x", {
                        enumerable: !1,
                        value: e
                    }), e) return !1;
                return e.x === e
            } catch (Lt) {
                return !1
            }
        }(),
        Xe = function(e, t, r, o) {
            var n;
            t in e && ("function" != typeof(n = o) || "[object Function]" !== Be.call(n) || !o()) || (He ? Ge(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r,
                writable: !0
            }) : e[t] = r)
        },
        Je = function(e, t) {
            var r = arguments.length > 2 ? arguments[2] : {},
                o = De(t);
            We && (o = qe.call(o, Object.getOwnPropertySymbols(t)));
            for (var n = 0; n < o.length; n += 1) Xe(e, o[n], t[o[n]], r[o[n]])
        };
    Je.supportsDescriptors = !!He, Me = Je;
    var Ke = Array.prototype.slice,
        Ye = Object.prototype.toString,
        ze = Function.prototype.bind || function(e) {
            var t = this;
            if ("function" != typeof t || "[object Function]" !== Ye.call(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
            for (var r, o = Ke.call(arguments, 1), n = Math.max(0, t.length - o.length), i = [], a = 0; a < n; a++) i.push("$" + a);
            if (r = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                    if (this instanceof r) {
                        var n = t.apply(this, o.concat(Ke.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return t.apply(e, o.concat(Ke.call(arguments)))
                }), t.prototype) {
                var u = function() {};
                u.prototype = t.prototype, r.prototype = new u, u.prototype = null
            }
            return r
        },
        Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Qe = Object.getOwnPropertyDescriptor ? function() {
            return Object.getOwnPropertyDescriptor(arguments, "callee").get
        }() : function() {
            throw new TypeError
        },
        et = "function" == typeof Symbol && "symbol" === Ze(Symbol.iterator),
        tt = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        rt = "undefined" == typeof Uint8Array ? void 0 : tt(Uint8Array),
        ot = {
            "$ %Array%": Array,
            "$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
            "$ %ArrayIteratorPrototype%": et ? tt([][Symbol.iterator]()) : void 0,
            "$ %ArrayPrototype%": Array.prototype,
            "$ %ArrayProto_entries%": Array.prototype.entries,
            "$ %ArrayProto_forEach%": Array.prototype.forEach,
            "$ %ArrayProto_keys%": Array.prototype.keys,
            "$ %ArrayProto_values%": Array.prototype.values,
            "$ %AsyncFromSyncIteratorPrototype%": void 0,
            "$ %AsyncFunction%": void 0,
            "$ %AsyncFunctionPrototype%": void 0,
            "$ %AsyncGenerator%": void 0,
            "$ %AsyncGeneratorFunction%": void 0,
            "$ %AsyncGeneratorPrototype%": void 0,
            "$ %AsyncIteratorPrototype%": void 0,
            "$ %Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "$ %Boolean%": Boolean,
            "$ %BooleanPrototype%": Boolean.prototype,
            "$ %DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "$ %DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
            "$ %Date%": Date,
            "$ %DatePrototype%": Date.prototype,
            "$ %decodeURI%": decodeURI,
            "$ %decodeURIComponent%": decodeURIComponent,
            "$ %encodeURI%": encodeURI,
            "$ %encodeURIComponent%": encodeURIComponent,
            "$ %Error%": Error,
            "$ %ErrorPrototype%": Error.prototype,
            "$ %eval%": eval,
            "$ %EvalError%": EvalError,
            "$ %EvalErrorPrototype%": EvalError.prototype,
            "$ %Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
            "$ %Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
            "$ %Function%": Function,
            "$ %FunctionPrototype%": Function.prototype,
            "$ %Generator%": void 0,
            "$ %GeneratorFunction%": void 0,
            "$ %GeneratorPrototype%": void 0,
            "$ %Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
            "$ %Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
            "$ %Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
            "$ %isFinite%": isFinite,
            "$ %isNaN%": isNaN,
            "$ %IteratorPrototype%": et ? tt(tt([][Symbol.iterator]())) : void 0,
            "$ %JSON%": JSON,
            "$ %JSONParse%": JSON.parse,
            "$ %Map%": "undefined" == typeof Map ? void 0 : Map,
            "$ %MapIteratorPrototype%": "undefined" != typeof Map && et ? tt((new Map)[Symbol.iterator]()) : void 0,
            "$ %MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
            "$ %Math%": Math,
            "$ %Number%": Number,
            "$ %NumberPrototype%": Number.prototype,
            "$ %Object%": Object,
            "$ %ObjectPrototype%": Object.prototype,
            "$ %ObjProto_toString%": Object.prototype.toString,
            "$ %ObjProto_valueOf%": Object.prototype.valueOf,
            "$ %parseFloat%": parseFloat,
            "$ %parseInt%": parseInt,
            "$ %Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "$ %PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
            "$ %PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
            "$ %Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
            "$ %Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
            "$ %Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
            "$ %Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "$ %RangeError%": RangeError,
            "$ %RangeErrorPrototype%": RangeError.prototype,
            "$ %ReferenceError%": ReferenceError,
            "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
            "$ %Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "$ %RegExp%": RegExp,
            "$ %RegExpPrototype%": RegExp.prototype,
            "$ %Set%": "undefined" == typeof Set ? void 0 : Set,
            "$ %SetIteratorPrototype%": "undefined" != typeof Set && et ? tt((new Set)[Symbol.iterator]()) : void 0,
            "$ %SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
            "$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
            "$ %String%": String,
            "$ %StringIteratorPrototype%": et ? tt("" [Symbol.iterator]()) : void 0,
            "$ %StringPrototype%": String.prototype,
            "$ %Symbol%": et ? Symbol : void 0,
            "$ %SymbolPrototype%": et ? Symbol.prototype : void 0,
            "$ %SyntaxError%": SyntaxError,
            "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
            "$ %ThrowTypeError%": Qe,
            "$ %TypedArray%": rt,
            "$ %TypedArrayPrototype%": rt ? rt.prototype : void 0,
            "$ %TypeError%": TypeError,
            "$ %TypeErrorPrototype%": TypeError.prototype,
            "$ %Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
            "$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
            "$ %Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
            "$ %Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
            "$ %URIError%": URIError,
            "$ %URIErrorPrototype%": URIError.prototype,
            "$ %WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
            "$ %WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
            "$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
        },
        nt = function(e, t) {
            if (arguments.length > 1 && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
            var r = "$ " + e;
            if (!(r in ot)) throw new SyntaxError("intrinsic " + e + " does not exist!");
            if (void 0 === ot[r] && !t) throw new TypeError("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return ot[r]
        },
        it = ze.call(Function.call, Object.prototype.hasOwnProperty),
        at = nt("%TypeError%"),
        ut = nt("%SyntaxError%"),
        st = {
            "Property Descriptor": function(e, t) {
                if ("Object" !== e.Type(t)) return !1;
                var r = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var o in t)
                    if (it(t, o) && !r[o]) return !1;
                var n = it(t, "[[Value]]"),
                    i = it(t, "[[Get]]") || it(t, "[[Set]]");
                if (n && i) throw new at("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }
        },
        ct = function(e, t, r, o) {
            var n = st[t];
            if ("function" != typeof n) throw new ut("unknown record type: " + t);
            if (!n(e, o)) throw new at(r + " must be a " + t);
            console.log(n(e, o), o)
        },
        lt = Number.isNaN || function(e) {
            return e != e
        },
        pt = Number.isFinite || function(e) {
            return "number" == typeof e && !lt(e) && e !== 1 / 0 && e !== -1 / 0
        },
        ft = Number.isNaN || function(e) {
            return e != e
        },
        dt = function(e) {
            return e >= 0 ? 1 : -1
        },
        ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        yt = function(e) {
            return null === e || "function" != typeof e && "object" !== (void 0 === e ? "undefined" : ht(e))
        },
        mt = Object.prototype.toString,
        bt = function(e) {
            var t;
            if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === mt.call(e) ? String : Number) === String || t === Number) {
                var r, o, n = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (o = 0; o < n.length; ++o)
                    if (ve(e[n[o]]) && (r = e[n[o]](), yt(r))) return r;
                throw new TypeError("No default value")
            }
            throw new TypeError("invalid [[DefaultValue]] hint supplied")
        },
        vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        gt = nt("%Object%"),
        wt = nt("%TypeError%"),
        At = nt("%String%"),
        St = {
            ToPrimitive: function(e) {
                return yt(e) ? e : arguments.length > 1 ? bt(e, arguments[1]) : bt(e)
            },
            ToBoolean: function(e) {
                return !!e
            },
            ToNumber: function(e) {
                return +e
            },
            ToInteger: function(e) {
                var t = this.ToNumber(e);
                return ft(t) ? 0 : 0 !== t && pt(t) ? dt(t) * Math.floor(Math.abs(t)) : t
            },
            ToInt32: function(e) {
                return this.ToNumber(e) >> 0
            },
            ToUint32: function(e) {
                return this.ToNumber(e) >>> 0
            },
            ToUint16: function(e) {
                var t = this.ToNumber(e);
                return ft(t) || 0 === t || !pt(t) ? 0 : function(e, t) {
                    var r = e % t;
                    return Math.floor(r >= 0 ? r : r + t)
                }(dt(t) * Math.floor(Math.abs(t)), 65536)
            },
            ToString: function(e) {
                return At(e)
            },
            ToObject: function(e) {
                return this.CheckObjectCoercible(e), gt(e)
            },
            CheckObjectCoercible: function(e, t) {
                if (null == e) throw new wt(t || "Cannot call method on " + e);
                return e
            },
            IsCallable: ve,
            SameValue: function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : ft(e) && ft(t)
            },
            Type: function(e) {
                return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" === (void 0 === e ? "undefined" : vt(e)) ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
            },
            IsPropertyDescriptor: function(e) {
                if ("Object" !== this.Type(e)) return !1;
                var t = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var r in e)
                    if (it(e, r) && !t[r]) return !1;
                var o = it(e, "[[Value]]"),
                    n = it(e, "[[Get]]") || it(e, "[[Set]]");
                if (o && n) throw new wt("Property Descriptors may not be both accessor and data descriptors");
                return !0
            },
            IsAccessorDescriptor: function(e) {
                return void 0 !== e && (ct(this, "Property Descriptor", "Desc", e), !(!it(e, "[[Get]]") && !it(e, "[[Set]]")))
            },
            IsDataDescriptor: function(e) {
                return void 0 !== e && (ct(this, "Property Descriptor", "Desc", e), !(!it(e, "[[Value]]") && !it(e, "[[Writable]]")))
            },
            IsGenericDescriptor: function(e) {
                return void 0 !== e && (ct(this, "Property Descriptor", "Desc", e), !this.IsAccessorDescriptor(e) && !this.IsDataDescriptor(e))
            },
            FromPropertyDescriptor: function(e) {
                if (void 0 === e) return e;
                if (ct(this, "Property Descriptor", "Desc", e), this.IsDataDescriptor(e)) return {
                    value: e["[[Value]]"],
                    writable: !!e["[[Writable]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
                if (this.IsAccessorDescriptor(e)) return {
                    get: e["[[Get]]"],
                    set: e["[[Set]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
                throw new wt("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
            },
            ToPropertyDescriptor: function(e) {
                if ("Object" !== this.Type(e)) throw new wt("ToPropertyDescriptor requires an object");
                var t = {};
                if (it(e, "enumerable") && (t["[[Enumerable]]"] = this.ToBoolean(e.enumerable)), it(e, "configurable") && (t["[[Configurable]]"] = this.ToBoolean(e.configurable)), it(e, "value") && (t["[[Value]]"] = e.value), it(e, "writable") && (t["[[Writable]]"] = this.ToBoolean(e.writable)), it(e, "get")) {
                    var r = e.get;
                    if (void 0 !== r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
                    t["[[Get]]"] = r
                }
                if (it(e, "set")) {
                    var o = e.set;
                    if (void 0 !== o && !this.IsCallable(o)) throw new wt("setter must be a function");
                    t["[[Set]]"] = o
                }
                if ((it(t, "[[Get]]") || it(t, "[[Set]]")) && (it(t, "[[Value]]") || it(t, "[[Writable]]"))) throw new wt("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return t
            }
        },
        Et = ze.call(Function.call, String.prototype.replace),
        $t = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
        kt = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,
        Pt = function() {
            var e = St.ToString(St.CheckObjectCoercible(this));
            return Et(Et(e, $t, ""), kt, "")
        },
        _t = function() {
            return String.prototype.trim && "\u200b" === "\u200b".trim() ? String.prototype.trim : Pt
        },
        Ot = {},
        Tt = ze.call(Function.call, _t());
    Me(Tt, {
        getPolyfill: _t,
        implementation: Pt,
        shim: function() {
            var e = _t();
            return Me(String.prototype, {
                trim: e
            }, {
                trim: function() {
                    return String.prototype.trim !== e
                }
            }), e
        }
    }), Ot = Tt;
    var jt = function(e) {
            if (!e) return {};
            var t = {};
            return function(e, t, r) {
                if (!ve(t)) throw new TypeError("iterator must be a function");
                var o;
                arguments.length >= 3 && (o = r), "[object Array]" === ge.call(e) ? function(e, t, r) {
                    for (var o = 0, n = e.length; o < n; o++) we.call(e, o) && (null == r ? t(e[o], o, e) : t.call(r, e[o], o, e))
                }(e, t, o) : "string" == typeof e ? function(e, t, r) {
                    for (var o = 0, n = e.length; o < n; o++) null == r ? t(e.charAt(o), o, e) : t.call(r, e.charAt(o), o, e)
                }(e, t, o) : function(e, t, r) {
                    for (var o in e) we.call(e, o) && (null == r ? t(e[o], o, e) : t.call(r, e[o], o, e))
                }(e, t, o)
            }(Ot(e).split("\n"), function(e) {
                var r, o = e.indexOf(":"),
                    n = Ot(e.slice(0, o)).toLowerCase(),
                    i = Ot(e.slice(o + 1));
                void 0 === t[n] ? t[n] = i : (r = t[n], "[object Array]" === Object.prototype.toString.call(r) ? t[n].push(i) : t[n] = [t[n], i])
            }), t
        },
        It = {};

    function xt(e, t, r) {
        var o = e;
        return le(t) ? (r = t, "string" == typeof e && (o = {
            uri: e
        })) : o = V(t, {
            uri: e
        }), o.callback = r, o
    }

    function Ct(e, t, r) {
        return Nt(t = xt(e, t, r))
    }

    function Nt(e) {
        if (void 0 === e.callback) throw new Error("callback argument missing");
        var t = !1,
            r = function(r, o, n) {
                t || (t = !0, e.callback(r, o, n))
            };

        function o() {
            var e = void 0;
            if (e = s.response ? s.response : s.responseText || function(e) {
                    try {
                        if ("document" === e.responseType) return e.responseXML;
                        var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                        if ("" === e.responseType && !t) return e.responseXML
                    } catch (Lt) {}
                    return null
                }(s), y) try {
                e = JSON.parse(e)
            } catch (Lt) {}
            return e
        }

        function n(e) {
            return clearTimeout(c), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, r(e, m)
        }

        function i() {
            if (!u) {
                var t;
                clearTimeout(c), t = e.useXDR && void 0 === s.status ? 200 : 1223 === s.status ? 204 : s.status;
                var n = m,
                    i = null;
                return 0 !== t ? (n = {
                    body: o(),
                    statusCode: t,
                    method: p,
                    headers: {},
                    url: l,
                    rawRequest: s
                }, s.getAllResponseHeaders && (n.headers = jt(s.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), r(i, n, n.body)
            }
        }
        var a, u, s = e.xhr || null;
        s || (s = e.cors || e.useXDR ? new Ct.XDomainRequest : new Ct.XMLHttpRequest);
        var c, l = s.url = e.uri || e.url,
            p = s.method = e.method || "GET",
            f = e.body || e.data,
            d = s.headers = e.headers || {},
            h = !!e.sync,
            y = !1,
            m = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: p,
                url: l,
                rawRequest: s
            };
        if ("json" in e && !1 !== e.json && (y = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== p && "HEAD" !== p && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), f = JSON.stringify(!0 === e.json ? f : e.json))), s.onreadystatechange = function() {
                4 === s.readyState && setTimeout(i, 0)
            }, s.onload = i, s.onerror = n, s.onprogress = function() {}, s.onabort = function() {
                u = !0
            }, s.ontimeout = n, s.open(p, l, !h, e.username, e.password), h || (s.withCredentials = !!e.withCredentials), !h && e.timeout > 0 && (c = setTimeout(function() {
                if (!u) {
                    u = !0, s.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT", n(e)
                }
            }, e.timeout)), s.setRequestHeader)
            for (a in d) d.hasOwnProperty(a) && s.setRequestHeader(a, d[a]);
        else if (e.headers && ! function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in e && (s.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(s), s.send(f || null), s
    }(It = Ct).default = Ct, Ct.XMLHttpRequest = se.XMLHttpRequest || function() {}, Ct.XDomainRequest = "withCredentials" in new Ct.XMLHttpRequest ? Ct.XMLHttpRequest : se.XDomainRequest,
        function(e, t) {
            for (var r = 0; r < e.length; r++) t(e[r])
        }(["get", "put", "post", "patch", "head", "delete"], function(e) {
            Ct["delete" === e ? "del" : e] = function(t, r, o) {
                return (r = xt(t, r, o)).method = e.toUpperCase(), Nt(r)
            }
        });
    var Dt = ie();

    function Rt(e, t) {
        return function() {
            var e = document.createElement("body");
            return e.setAttribute("class", "color-neutral"), u(e, ["\n      ", arguments[0], "\n      ", arguments[1], "\n    "]), e
        }(s(e, t), c())
    }
    Dt.use(function() {
        if ("donate.datproject.org" === window.location.host) return window.location = "https://opencollective.com/dat"
    }), Dt.use(function(e, t) {
        var r, o, n, i;
        r = "https://checkout.stripe.com/checkout.js", o = function(r, o) {
            if (r) return t.emit("log:error", r);
            It({
                uri: "/stripe-key",
                json: !0
            }, function(r, o, n) {
                if (t.emit("log:debug", n), r || 200 !== o.statusCode) return t.emit("log:error", "Error loading stripe");
                e.stripeKey = n.key, e.stripeLoaded = !0, t.emit("stripeLoaded"), t.emit("log:info", "loaded stripe checkout.js")
            })
        }, n = document.head || document.getElementsByTagName("head")[0], (i = document.createElement("script")).type = "text/javascript", i.async = !0, i.src = r, o && (i.onload = function() {
            i.onerror = i.onload = null, o(null, i)
        }, i.onerror = function() {
            i.onerror = i.onload = null, o(new Error("Failed to load " + r), i)
        }), n.appendChild(i)
    }), Dt.use(function(e, t) {
        function r(r) {
            e.checkout.chargePending = !0, It({
                uri: "/charge",
                method: "POST",
                body: {
                    token: r,
                    amount: e.checkout.amount
                },
                json: !0,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function(r, o, n) {
                e.checkout.pending = !1, e.checkout.chargePending = !1, r || 200 !== o.statusCode ? (e.checkout.error = n.error || "Error processing donation", t.emit("log:error", n.error), r && t.emit("log:error", r)) : (e.checkout.success = !0, t.emit("log:debug", o)), t.emit("render")
            })
        }
        e.checkout = {}, t.on("toggleBitcoinView", function() {
            e.bitcoinView = !e.bitcoinView, t.emit("render")
        }), t.on("toggleValInput", function() {
            e.showValInput = !e.showValInput, t.emit("render")
        }), t.on("checkout", function(o) {
            (e.checkout = Object.assign(e.checkout, {
                amount: o,
                success: null,
                error: null,
                pending: !0
            }), t.emit("log:info", e.checkout), t.emit("render"), e.stripeLoaded) ? window.StripeCheckout.configure({
                key: e.stripeKey,
                locale: "auto"
            }).open({
                name: "Bhumi Organisation",
                description: "$" + e.checkout.amount / 100 + " Donation to Bhumi Organisation",
                image: "images/dat-logo.svg",
                token: r,
                panelLabel: "Donate",
                bitcoin: !0,
                amount: e.checkout.amount,
                billingAddress: !0,
                closed: function() {
                    e.checkout.chargePending || (e.checkout.pending = !1, t.emit("render"))
                }
            }): t.once("stripeLoaded", function() {
                t.emit("checkout", o)
            })
        })
    }), Dt.route("/", Rt), Dt.route("/*", Rt), Dt.mount("body")
}();
//# sourceMappingURL=bundle.js.map
