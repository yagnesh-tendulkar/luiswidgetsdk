! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.BotChat = e() : t.BotChat = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 180)
    }([function(t, e, n) {
        "use strict";
        var r = n(16),
            o = n(439),
            i = n(83),
            s = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        i = o.toSubscriber(t, e, n);
                    if (r ? r.call(i, this.source) : i.add(this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                    return i
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)), !e) throw new Error("no Promise impl found");
                    return new e(function(e, r) {
                        var o;
                        o = n.subscribe(function(e) {
                            if (o) try {
                                t(e)
                            } catch (t) {
                                r(t), o.unsubscribe()
                            } else t(e)
                        }, r, e)
                    })
                }, t.prototype._subscribe = function(t) {
                    return this.source.subscribe(t)
                }, t.prototype[i.observable] = function() {
                    return this
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();
        e.Observable = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r, i, s, a, c) {
            if (o(e), !t) {
                var u;
                if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, i, s, a, c],
                        p = 0;
                    u = new Error(e.replace(/%s/g, function() {
                        return l[p++]
                    })), u.name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        }
        var o = function(t) {};
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return Object.prototype.toString.call(t)
        }

        function o(t) {
            return "[object String]" === r(t)
        }

        function i(t, e) {
            return C.call(t, e)
        }

        function s(t) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                if (e) {
                    if ("object" != typeof e) throw new TypeError(e + "must be object");
                    Object.keys(e).forEach(function(n) {
                        t[n] = e[n]
                    })
                }
            }), t
        }

        function a(t, e, n) {
            return [].concat(t.slice(0, e), n, t.slice(e + 1))
        }

        function c(t) {
            return !(t >= 55296 && t <= 57343) && (!(t >= 64976 && t <= 65007) && (65535 != (65535 & t) && 65534 != (65535 & t) && (!(t >= 0 && t <= 8) && (11 !== t && (!(t >= 14 && t <= 31) && (!(t >= 127 && t <= 159) && !(t > 1114111)))))))
        }

        function u(t) {
            if (t > 65535) {
                t -= 65536;
                var e = 55296 + (t >> 10),
                    n = 56320 + (1023 & t);
                return String.fromCharCode(e, n)
            }
            return String.fromCharCode(t)
        }

        function l(t, e) {
            var n = 0;
            return i(E, e) ? E[e] : 35 === e.charCodeAt(0) && S.test(e) && (n = "x" === e[1].toLowerCase() ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), c(n)) ? u(n) : t
        }

        function p(t) {
            return t.indexOf("\\") < 0 ? t : t.replace(w, "$1")
        }

        function h(t) {
            return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(k, function(t, e, n) {
                return e || l(t, n)
            })
        }

        function f(t) {
            return O[t]
        }

        function d(t) {
            return A.test(t) ? t.replace(T, f) : t
        }

        function m(t) {
            return t.replace(P, "\\$&")
        }

        function v(t) {
            switch (t) {
                case 9:
                case 32:
                    return !0
            }
            return !1
        }

        function y(t) {
            if (t >= 8192 && t <= 8202) return !0;
            switch (t) {
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 32:
                case 160:
                case 5760:
                case 8239:
                case 8287:
                case 12288:
                    return !0
            }
            return !1
        }

        function g(t) {
            return I.test(t)
        }

        function b(t) {
            switch (t) {
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 124:
                case 125:
                case 126:
                    return !0;
                default:
                    return !1
            }
        }

        function _(t) {
            return t.trim().replace(/\s+/g, " ").toUpperCase()
        }
        var C = Object.prototype.hasOwnProperty,
            w = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
            x = /&([a-z#][a-z0-9]{1,31});/gi,
            k = new RegExp(w.source + "|" + x.source, "gi"),
            S = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
            E = n(101),
            A = /[&<>"]/,
            T = /[&<>"]/g,
            O = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            },
            P = /[.?*+^$[\]\\(){}|-]/g,
            I = n(86);
        e.lib = {}, e.lib.mdurl = n(105), e.lib.ucmicro = n(444), e.assign = s, e.isString = o, e.has = i, e.unescapeMd = p, e.unescapeAll = h, e.isValidEntityCode = c, e.fromCodePoint = u, e.escapeHtml = d, e.arrayReplaceAt = a, e.isSpace = v, e.isWhiteSpace = y, e.isMdAsciiPunct = b, e.isPunctChar = g, e.escapeRE = m, e.normalizeReference = _
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = r;
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var o = new Error(n);
            throw o.name = "Invariant Violation", o.framesToPop = 1, o
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var o = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, a, c = r(t), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var l in n) i.call(n, l) && (c[l] = n[l]);
                if (o) {
                    a = o(n);
                    for (var p = 0; p < a.length; p++) s.call(n, a[p]) && (c[a[p]] = n[a[p]])
                }
            }
            return c
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return 1 === t.nodeType && t.getAttribute(d) === String(e) || 8 === t.nodeType && t.nodeValue === " react-text: " + e + " " || 8 === t.nodeType && t.nodeValue === " react-empty: " + e + " "
        }

        function o(t) {
            for (var e; e = t._renderedComponent;) t = e;
            return t
        }

        function i(t, e) {
            var n = o(t);
            n._hostNode = e, e[v] = n
        }

        function s(t) {
            var e = t._hostNode;
            e && (delete e[v], t._hostNode = null)
        }

        function a(t, e) {
            if (!(t._flags & m.hasCachedChildNodes)) {
                var n = t._renderedChildren,
                    s = e.firstChild;
                t: for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var c = n[a],
                            u = o(c)._domID;
                        if (0 !== u) {
                            for (; null !== s; s = s.nextSibling)
                                if (r(s, u)) {
                                    i(c, s);
                                    continue t
                                } p("32", u)
                        }
                    } t._flags |= m.hasCachedChildNodes
            }
        }

        function c(t) {
            if (t[v]) return t[v];
            for (var e = []; !t[v];) {
                if (e.push(t), !t.parentNode) return null;
                t = t.parentNode
            }
            for (var n, r; t && (r = t[v]); t = e.pop()) n = r, e.length && a(r, t);
            return n
        }

        function u(t) {
            var e = c(t);
            return null != e && e._hostNode === t ? e : null
        }

        function l(t) {
            if (void 0 === t._hostNode && p("33"), t._hostNode) return t._hostNode;
            for (var e = []; !t._hostNode;) e.push(t), t._hostParent || p("34"), t = t._hostParent;
            for (; e.length; t = e.pop()) a(t, t._hostNode);
            return t._hostNode
        }
        var p = n(4),
            h = n(23),
            f = n(115),
            d = (n(1), h.ID_ATTRIBUTE_NAME),
            m = f,
            v = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
            y = {
                getClosestInstanceFromNode: c,
                getInstanceFromNode: u,
                getNodeFromInstance: l,
                precacheChildNodes: a,
                precacheNode: i,
                uncacheNode: s
            };
        t.exports = y
    }, function(t, e, n) {
        "use strict";
        var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
            o = {
                canUseDOM: r,
                canUseWorkers: "undefined" != typeof Worker,
                canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
                canUseViewport: r && !!window.screen,
                isInWorker: !r
            };
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(85),
            i = n(19),
            s = n(148),
            a = n(84),
            c = function(t) {
                function e(n, r, o) {
                    switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = s.empty;
                            break;
                        case 1:
                            if (!n) {
                                this.destination = s.empty;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, n));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new u(this, n, r, o)
                    }
                }
                return r(e, t), e.prototype[a.rxSubscriber] = function() {
                    return this
                }, e.create = function(t, n, r) {
                    var o = new e(t, n, r);
                    return o.syncErrorThrowable = !1, o
                }, e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function(t) {
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this,
                        e = t._parent,
                        n = t._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = n, this
                }, e
            }(i.Subscription);
        e.Subscriber = c;
        var u = function(t) {
            function e(e, n, r, i) {
                t.call(this), this._parentSubscriber = e;
                var a, c = this;
                o.isFunction(n) ? a = n : n && (a = n.next, r = n.error, i = n.complete, n !== s.empty && (c = Object.create(n), o.isFunction(c.unsubscribe) && this.add(c.unsubscribe.bind(c)), c.unsubscribe = this.unsubscribe.bind(this))), this._context = c, this._next = a, this._error = r, this._complete = i
            }
            return r(e, t), e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._error) e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                    else {
                        if (!e.syncErrorThrowable) throw this.unsubscribe(), t;
                        e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe()
                    }
                }
            }, e.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return t._complete.call(t._context)
                        };
                        e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    throw this.unsubscribe(), t
                }
            }, e.prototype.__tryOrSetError = function(t, e, n) {
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return t.syncErrorValue = e, t.syncErrorThrown = !0, !0
                }
                return !1
            }, e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(c)
    }, function(t, e, n) {
        "use strict";
        t.exports = n(25)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return function() {
                return t
            }
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(t) {
            return t
        }, t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                this.constructor = t
            }
            g(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        function o(t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]]);
            return n
        }

        function i(t, e, n, r) {
            var o, i = arguments.length,
                s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
            else
                for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s), s
        }

        function s(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }

        function a(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function c(t, e, n, r) {
            return new(n || (n = Promise))(function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            })
        }

        function u(t, e) {
            function n(t) {
                return function(e) {
                    return r([t, e])
                }
            }

            function r(n) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (o = 1, i && (s = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(i, n[1])).done) return s;
                    switch (i = 0, s && (n = [0, s.value]), n[0]) {
                        case 0:
                        case 1:
                            s = n;
                            break;
                        case 4:
                            return c.label++, {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            c.label++, i = n[1], n = [0];
                            continue;
                        case 7:
                            n = c.ops.pop(), c.trys.pop();
                            continue;
                        default:
                            if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                c.label = n[1];
                                break
                            }
                            if (6 === n[0] && c.label < s[1]) {
                                c.label = s[1], s = n;
                                break
                            }
                            if (s && c.label < s[2]) {
                                c.label = s[2], c.ops.push(n);
                                break
                            }
                            s[2] && c.ops.pop(), c.trys.pop();
                            continue
                    }
                    n = e.call(t, c)
                } catch (t) {
                    n = [6, t], i = 0
                } finally {
                    o = s = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }
            var o, i, s, a, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: n(0),
                throw: n(1),
                return: n(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a
        }

        function l(t, e) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
        }

        function p(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
                n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        }

        function h(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        }

        function f() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(h(arguments[e]));
            return t
        }

        function d(t) {
            return this instanceof d ? (this.v = t, this) : new d(t)
        }

        function m(t, e, n) {
            function r(t) {
                l[t] && (u[t] = function(e) {
                    return new Promise(function(n, r) {
                        p.push([t, e, n, r]) > 1 || o(t, e)
                    })
                })
            }

            function o(t, e) {
                try {
                    i(l[t](e))
                } catch (t) {
                    c(p[0][3], t)
                }
            }

            function i(t) {
                t.value instanceof d ? Promise.resolve(t.value.v).then(s, a) : c(p[0][2], t)
            }

            function s(t) {
                o("next", t)
            }

            function a(t) {
                o("throw", t)
            }

            function c(t, e) {
                t(e), p.shift(), p.length && o(p[0][0], p[0][1])
            }
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var u, l = n.apply(t, e || []),
                p = [];
            return u = {}, r("next"), r("throw"), r("return"), u[Symbol.asyncIterator] = function() {
                return this
            }, u
        }

        function v(t) {
            function e(e, o) {
                t[e] && (n[e] = function(n) {
                    return (r = !r) ? {
                        value: d(t[e](n)),
                        done: "return" === e
                    } : o ? o(n) : n
                })
            }
            var n, r;
            return n = {}, e("next"), e("throw", function(t) {
                throw t
            }), e("return"), n[Symbol.iterator] = function() {
                return this
            }, n
        }

        function y(t) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = t[Symbol.asyncIterator];
            return e ? e.call(t) : "function" == typeof p ? p(t) : t[Symbol.iterator]()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.__extends = r, n.d(e, "__assign", function() {
            return b
        }), e.__rest = o, e.__decorate = i, e.__param = s, e.__metadata = a, e.__awaiter = c, e.__generator = u, e.__exportStar = l, e.__values = p, e.__read = h, e.__spread = f, e.__await = d, e.__asyncGenerator = m, e.__asyncDelegator = v, e.__asyncValues = y;
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var g = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        }, b = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
                e = arguments[n];
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = null;
        t.exports = {
            debugTool: r
        }
    }, function(t, e, n) {
        "use strict";

        function r() {
            A.ReactReconcileTransaction && C || l("123")
        }

        function o() {
            this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = h.getPooled(), this.reconcileTransaction = A.ReactReconcileTransaction.getPooled(!0)
        }

        function i(t, e, n, o, i, s) {
            return r(), C.batchedUpdates(t, e, n, o, i, s)
        }

        function s(t, e) {
            return t._mountOrder - e._mountOrder
        }

        function a(t) {
            var e = t.dirtyComponentsLength;
            e !== y.length && l("124", e, y.length), y.sort(s), g++;
            for (var n = 0; n < e; n++) {
                var r = y[n],
                    o = r._pendingCallbacks;
                r._pendingCallbacks = null;
                var i;
                if (d.logTopLevelRenders) {
                    var a = r;
                    r._currentElement.type.isReactTopLevelWrapper && (a = r._renderedComponent), i = "React update: " + a.getName(), console.time(i)
                }
                if (m.performUpdateIfNecessary(r, t.reconcileTransaction, g), i && console.timeEnd(i), o)
                    for (var c = 0; c < o.length; c++) t.callbackQueue.enqueue(o[c], r.getPublicInstance())
            }
        }

        function c(t) {
            if (r(), !C.isBatchingUpdates) return void C.batchedUpdates(c, t);
            y.push(t), null == t._updateBatchNumber && (t._updateBatchNumber = g + 1)
        }

        function u(t, e) {
            C.isBatchingUpdates || l("125"), b.enqueue(t, e), _ = !0
        }
        var l = n(4),
            p = n(5),
            h = n(113),
            f = n(17),
            d = n(118),
            m = n(24),
            v = n(45),
            y = (n(1), []),
            g = 0,
            b = h.getPooled(),
            _ = !1,
            C = null,
            w = {
                initialize: function() {
                    this.dirtyComponentsLength = y.length
                },
                close: function() {
                    this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength), S()) : y.length = 0
                }
            },
            x = {
                initialize: function() {
                    this.callbackQueue.reset()
                },
                close: function() {
                    this.callbackQueue.notifyAll()
                }
            },
            k = [w, x];
        p(o.prototype, v, {
            getTransactionWrappers: function() {
                return k
            },
            destructor: function() {
                this.dirtyComponentsLength = null, h.release(this.callbackQueue), this.callbackQueue = null, A.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
            },
            perform: function(t, e, n) {
                return v.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, t, e, n)
            }
        }), f.addPoolingTo(o);
        var S = function() {
                for (; y.length || _;) {
                    if (y.length) {
                        var t = o.getPooled();
                        t.perform(a, null, t), o.release(t)
                    }
                    if (_) {
                        _ = !1;
                        var e = b;
                        b = h.getPooled(), e.notifyAll(), h.release(e)
                    }
                }
            },
            E = {
                injectReconcileTransaction: function(t) {
                    t || l("126"), A.ReactReconcileTransaction = t
                },
                injectBatchingStrategy: function(t) {
                    t || l("127"), "function" != typeof t.batchedUpdates && l("128"), "boolean" != typeof t.isBatchingUpdates && l("129"), C = t
                }
            },
            A = {
                ReactReconcileTransaction: null,
                batchedUpdates: i,
                enqueueUpdate: c,
                flushBatchedUpdates: S,
                injection: E,
                asap: u
            };
        t.exports = A
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n;
            var o = this.constructor.Interface;
            for (var i in o)
                if (o.hasOwnProperty(i)) {
                    var a = o[i];
                    a ? this[i] = a(n) : "target" === i ? this.target = r : this[i] = n[i]
                } var c = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
            return this.isDefaultPrevented = c ? s.thatReturnsTrue : s.thatReturnsFalse, this.isPropagationStopped = s.thatReturnsFalse, this
        }
        var o = n(5),
            i = n(17),
            s = n(10),
            a = (n(3), ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
            c = {
                type: null,
                target: null,
                currentTarget: s.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(t) {
                    return t.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            };
        o(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = s.thatReturnsTrue)
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = s.thatReturnsTrue)
            },
            persist: function() {
                this.isPersistent = s.thatReturnsTrue
            },
            isPersistent: s.thatReturnsFalse,
            destructor: function() {
                var t = this.constructor.Interface;
                for (var e in t) this[e] = null;
                for (var n = 0; n < a.length; n++) this[a[n]] = null
            }
        }), r.Interface = c, r.augmentClass = function(t, e) {
            var n = this,
                r = function() {};
            r.prototype = n.prototype;
            var s = new r;
            o(s, t.prototype), t.prototype = s, t.prototype.constructor = t, t.Interface = o({}, n.Interface, e), t.augmentClass = n.augmentClass, i.addPoolingTo(t, i.fourArgumentPooler)
        }, i.addPoolingTo(r, i.fourArgumentPooler), t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = {
            current: null
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "undefined" != typeof window && window,
                r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                o = void 0 !== t && t,
                i = n || o || r;
            e.root = i,
                function() {
                    if (!i) throw new Error("RxJS could not find any global context (window, self, global)")
                }()
        }).call(e, n(38))
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = (n(1), function(t) {
                var e = this;
                if (e.instancePool.length) {
                    var n = e.instancePool.pop();
                    return e.call(n, t), n
                }
                return new e(t)
            }),
            i = function(t, e) {
                var n = this;
                if (n.instancePool.length) {
                    var r = n.instancePool.pop();
                    return n.call(r, t, e), r
                }
                return new n(t, e)
            },
            s = function(t, e, n) {
                var r = this;
                if (r.instancePool.length) {
                    var o = r.instancePool.pop();
                    return r.call(o, t, e, n), o
                }
                return new r(t, e, n)
            },
            a = function(t, e, n, r) {
                var o = this;
                if (o.instancePool.length) {
                    var i = o.instancePool.pop();
                    return o.call(i, t, e, n, r), i
                }
                return new o(t, e, n, r)
            },
            c = function(t) {
                var e = this;
                t instanceof e || r("25"), t.destructor(), e.instancePool.length < e.poolSize && e.instancePool.push(t)
            },
            u = o,
            l = function(t, e) {
                var n = t;
                return n.instancePool = [], n.getPooled = e || u, n.poolSize || (n.poolSize = 10), n.release = c, n
            },
            p = {
                addPoolingTo: l,
                oneArgumentPooler: o,
                twoArgumentPooler: i,
                threeArgumentPooler: s,
                fourArgumentPooler: a
            };
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(8),
            i = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return r(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }, e
            }(o.Subscriber);
        e.OuterSubscriber = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.reduce(function(t, e) {
                return t.concat(e instanceof u.UnsubscriptionError ? e.errors : e)
            }, [])
        }
        var o = n(51),
            i = n(165),
            s = n(85),
            a = n(37),
            c = n(28),
            u = n(436),
            l = function() {
                function t(t) {
                    this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                return t.prototype.unsubscribe = function() {
                    var t, e = !1;
                    if (!this.closed) {
                        var n = this,
                            l = n._parent,
                            p = n._parents,
                            h = n._unsubscribe,
                            f = n._subscriptions;
                        this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                        for (var d = -1, m = p ? p.length : 0; l;) l.remove(this), l = ++d < m && p[d] || null;
                        if (s.isFunction(h)) {
                            var v = a.tryCatch(h).call(this);
                            v === c.errorObject && (e = !0, t = t || (c.errorObject.e instanceof u.UnsubscriptionError ? r(c.errorObject.e.errors) : [c.errorObject.e]))
                        }
                        if (o.isArray(f))
                            for (d = -1, m = f.length; ++d < m;) {
                                var y = f[d];
                                if (i.isObject(y)) {
                                    var v = a.tryCatch(y.unsubscribe).call(y);
                                    if (v === c.errorObject) {
                                        e = !0, t = t || [];
                                        var g = c.errorObject.e;
                                        g instanceof u.UnsubscriptionError ? t = t.concat(r(g.errors)) : t.push(g)
                                    }
                                }
                            }
                        if (e) throw new u.UnsubscriptionError(t)
                    }
                }, t.prototype.add = function(e) {
                    if (!e || e === t.EMPTY) return t.EMPTY;
                    if (e === this) return this;
                    var n = e;
                    switch (typeof e) {
                        case "function":
                            n = new t(e);
                        case "object":
                            if (n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if ("function" != typeof n._addParent) {
                                var r = n;
                                n = new t, n._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
                }, t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                    }
                }, t.prototype._addParent = function(t) {
                    var e = this,
                        n = e._parent,
                        r = e._parents;
                    n && n !== t ? r ? -1 === r.indexOf(t) && r.push(t) : this._parents = [t] : this._parent = t
                }, t.EMPTY = function(t) {
                    return t.closed = !0, t
                }(new t), t
            }();
        e.Subscription = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            var h = new l.InnerSubscriber(t, n, r);
            if (h.closed) return null;
            if (e instanceof c.Observable) return e._isScalar ? (h.next(e.value), h.complete(), null) : e.subscribe(h);
            if (i.isArrayLike(e)) {
                for (var f = 0, d = e.length; f < d && !h.closed; f++) h.next(e[f]);
                h.closed || h.complete()
            } else {
                if (s.isPromise(e)) return e.then(function(t) {
                    h.closed || (h.next(t), h.complete())
                }, function(t) {
                    return h.error(t)
                }).then(null, function(t) {
                    o.root.setTimeout(function() {
                        throw t
                    })
                }), h;
                if (e && "function" == typeof e[u.iterator])
                    for (var m = e[u.iterator]();;) {
                        var v = m.next();
                        if (v.done) {
                            h.complete();
                            break
                        }
                        if (h.next(v.value), h.closed) break
                    } else if (e && "function" == typeof e[p.observable]) {
                        var y = e[p.observable]();
                        if ("function" == typeof y.subscribe) return y.subscribe(new l.InnerSubscriber(t, n, r));
                        h.error(new TypeError("Provided object does not correctly implement Symbol.observable"))
                    } else {
                        var g = a.isObject(e) ? "an invalid object" : "'" + e + "'",
                            b = "You provided " + g + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                        h.error(new TypeError(b))
                    }
            }
            return null
        }
        var o = n(16),
            i = n(164),
            s = n(166),
            a = n(165),
            c = n(0),
            u = n(82),
            l = n(383),
            p = n(83);
        e.subscribeToResult = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(53),
            s = n(40),
            a = n(48),
            c = n(39),
            u = n(29),
            l = n(184),
            p = n(185),
            h = n(186),
            f = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.store = s.createStore(), n.resizeListener = function() {
                        return n.setSize()
                    }, u.log("BotChat.Chat props", e), n.store.dispatch({
                        type: "Set_Locale",
                        locale: e.locale || window.navigator.userLanguage || window.navigator.language || "en"
                    }), e.formatOptions && n.store.dispatch({
                        type: "Set_Format_Options",
                        options: e.formatOptions
                    }), e.sendTyping && n.store.dispatch({
                        type: "Set_Send_Typing",
                        sendTyping: e.sendTyping
                    }), e.speechOptions && (c.Speech.SpeechRecognizer.setSpeechRecognizer(e.speechOptions.speechRecognizer), c.Speech.SpeechSynthesizer.setSpeechSynthesizer(e.speechOptions.speechSynthesizer)), n
                }
                return r.__extends(e, t), e.prototype.handleIncomingActivity = function(t) {
                    var e = this.store.getState();
                    switch (t.type) {
                        case "message":
                            this.store.dispatch({
                                type: t.from.id === e.connection.user.id ? "Receive_Sent_Message" : "Receive_Message",
                                activity: t
                            });
                            break;
                        case "typing":
                            t.from.id !== e.connection.user.id && this.store.dispatch({
                                type: "Show_Typing",
                                activity: t
                            })
                    }
                }, e.prototype.setSize = function() {
                    this.store.dispatch({
                        type: "Set_Size",
                        width: this.chatviewPanel.offsetWidth,
                        height: this.chatviewPanel.offsetHeight
                    })
                }, e.prototype.componentDidMount = function() {
                    var t = this;
                    this.setSize();
                    var e = this.props.directLine ? this.botConnection = new i.DirectLine(this.props.directLine) : this.props.botConnection;
                    "window" === this.props.resize && window.addEventListener("resize", this.resizeListener), this.store.dispatch({
                        type: "Start_Connection",
                        user: this.props.user,
                        bot: this.props.bot,
                        botConnection: e,
                        selectedActivity: this.props.selectedActivity
                    }), this.connectionStatusSubscription = e.connectionStatus$.subscribe(function(n) {
                        if (t.props.speechOptions && t.props.speechOptions.speechRecognizer) {
                            var r = e.referenceGrammarId;
                            r && (t.props.speechOptions.speechRecognizer.referenceGrammarId = r)
                        }
                        t.store.dispatch({
                            type: "Connection_Change",
                            connectionStatus: n
                        })
                    }), this.activitySubscription = e.activity$.subscribe(function(e) {
                        return t.handleIncomingActivity(e)
                    }, function(t) {
                        return u.log("activity$ error", t)
                    }), this.props.selectedActivity && (this.selectedActivitySubscription = this.props.selectedActivity.subscribe(function(e) {
                        t.store.dispatch({
                            type: "Select_Activity",
                            selectedActivity: e.activity || t.store.getState().history.activities.find(function(t) {
                                return t.id === e.id
                            })
                        })
                    }))
                }, e.prototype.componentWillUnmount = function() {
                    this.connectionStatusSubscription.unsubscribe(), this.activitySubscription.unsubscribe(), this.selectedActivitySubscription && this.selectedActivitySubscription.unsubscribe(), this.botConnection && this.botConnection.end(), window.removeEventListener("resize", this.resizeListener)
                }, e.prototype.setFocus = function() {
                    this.chatviewPanel.querySelector(".wc-shellinput").focus()
                }, e.prototype.render = function() {
                    var t = this,
                        e = this.store.getState();
                    u.log("BotChat.Chat state", e);
                    var n;
                    e.format.options.showHeader && (n = o.createElement("div", {
                        className: "wc-header"
                    }, o.createElement("span", null, e.format.strings.title)));
                    var r;
                    return "detect" === this.props.resize && (r = o.createElement(d, {
                        onresize: this.resizeListener
                    })), o.createElement(a.Provider, {
                        store: this.store
                    }, o.createElement("div", {
                        className: "wc-chatview-panel",
                        ref: function(e) {
                            return t.chatviewPanel = e
                        }
                    }, n, o.createElement(p.MessagePane, {
                        setFocus: function() {
                            return t.setFocus()
                        }
                    }, o.createElement(l.History, {
                        setFocus: function() {
                            return t.setFocus()
                        }
                    })), o.createElement(h.Shell, null), r))
                }, e
            }(o.Component);
        e.Chat = f, e.doCardAction = function(t, n, r, o) {
            return function(i, s) {
                var a = "string" == typeof s ? s : void 0,
                    c = "object" == typeof s ? s : void 0;
                switch (i) {
                    case "imBack":
                        "string" == typeof a && o(a, n, r);
                        break;
                    case "postBack":
                        e.sendPostBack(t, a, c, n, r);
                        break;
                    case "call":
                    case "openUrl":
                    case "playAudio":
                    case "playVideo":
                    case "showImage":
                    case "downloadFile":
                    case "signin":
                        window.open(a);
                        break;
                    default:
                        u.log("unknown button type", i)
                }
            }
        }, e.sendPostBack = function(t, e, n, r, o) {
            t.postActivity({
                type: "message",
                text: e,
                value: n,
                from: r,
                locale: o
            }).subscribe(function(t) {
                u.log("success sending postBack", t)
            }, function(t) {
                u.log("failed to send postBack", t)
            })
        }, e.renderIfNonempty = function(t, e) {
            if (void 0 !== t && null !== t && ("string" != typeof t || t.length > 0)) return e(t)
        }, e.classList = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return t.filter(Boolean).join(" ")
        };
        var d = function(t) {
            return o.createElement("iframe", {
                style: {
                    position: "absolute",
                    left: "0",
                    top: "-100%",
                    width: "100%",
                    height: "100%",
                    margin: "1px 0 0",
                    border: "none",
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none"
                },
                ref: function(e) {
                    e && (e.contentWindow.onresize = t.onresize)
                }
            })
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (d) {
                var e = t.node,
                    n = t.children;
                if (n.length)
                    for (var r = 0; r < n.length; r++) m(e, n[r], null);
                else null != t.html ? p(e, t.html) : null != t.text && f(e, t.text)
            }
        }

        function o(t, e) {
            t.parentNode.replaceChild(e.node, t), r(e)
        }

        function i(t, e) {
            d ? t.children.push(e) : t.node.appendChild(e.node)
        }

        function s(t, e) {
            d ? t.html = e : p(t.node, e)
        }

        function a(t, e) {
            d ? t.text = e : f(t.node, e)
        }

        function c() {
            return this.node.nodeName
        }

        function u(t) {
            return {
                node: t,
                children: [],
                html: null,
                text: null,
                toString: c
            }
        }
        var l = n(63),
            p = n(47),
            h = n(71),
            f = n(131),
            d = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
            m = h(function(t, e, n) {
                11 === e.node.nodeType || 1 === e.node.nodeType && "object" === e.node.nodeName.toLowerCase() && (null == e.node.namespaceURI || e.node.namespaceURI === l.html) ? (r(e), t.insertBefore(e.node, n)) : (t.insertBefore(e.node, n), r(e))
            });
        u.insertTreeBefore = m, u.replaceChildWithTree = o, u.queueChild = i, u.queueHTML = s, u.queueText = a, t.exports = u
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return (t & e) === e
        }
        var o = n(4),
            i = (n(1), {
                MUST_USE_PROPERTY: 1,
                HAS_BOOLEAN_VALUE: 4,
                HAS_NUMERIC_VALUE: 8,
                HAS_POSITIVE_NUMERIC_VALUE: 24,
                HAS_OVERLOADED_BOOLEAN_VALUE: 32,
                injectDOMPropertyConfig: function(t) {
                    var e = i,
                        n = t.Properties || {},
                        s = t.DOMAttributeNamespaces || {},
                        c = t.DOMAttributeNames || {},
                        u = t.DOMPropertyNames || {},
                        l = t.DOMMutationMethods || {};
                    t.isCustomAttribute && a._isCustomAttributeFunctions.push(t.isCustomAttribute);
                    for (var p in n) {
                        a.properties.hasOwnProperty(p) && o("48", p);
                        var h = p.toLowerCase(),
                            f = n[p],
                            d = {
                                attributeName: h,
                                attributeNamespace: null,
                                propertyName: p,
                                mutationMethod: null,
                                mustUseProperty: r(f, e.MUST_USE_PROPERTY),
                                hasBooleanValue: r(f, e.HAS_BOOLEAN_VALUE),
                                hasNumericValue: r(f, e.HAS_NUMERIC_VALUE),
                                hasPositiveNumericValue: r(f, e.HAS_POSITIVE_NUMERIC_VALUE),
                                hasOverloadedBooleanValue: r(f, e.HAS_OVERLOADED_BOOLEAN_VALUE)
                            };
                        if (d.hasBooleanValue + d.hasNumericValue + d.hasOverloadedBooleanValue <= 1 || o("50", p), c.hasOwnProperty(p)) {
                            var m = c[p];
                            d.attributeName = m
                        }
                        s.hasOwnProperty(p) && (d.attributeNamespace = s[p]), u.hasOwnProperty(p) && (d.propertyName = u[p]), l.hasOwnProperty(p) && (d.mutationMethod = l[p]), a.properties[p] = d
                    }
                }
            }),
            s = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            a = {
                ID_ATTRIBUTE_NAME: "data-reactid",
                ROOT_ATTRIBUTE_NAME: "data-reactroot",
                ATTRIBUTE_NAME_START_CHAR: s,
                ATTRIBUTE_NAME_CHAR: s + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
                properties: {},
                getPossibleStandardName: null,
                _isCustomAttributeFunctions: [],
                isCustomAttribute: function(t) {
                    for (var e = 0; e < a._isCustomAttributeFunctions.length; e++) {
                        if ((0, a._isCustomAttributeFunctions[e])(t)) return !0
                    }
                    return !1
                },
                injection: i
            };
        t.exports = a
    }, function(t, e, n) {
        "use strict";

        function r() {
            o.attachRefs(this, this._currentElement)
        }
        var o = n(327),
            i = (n(12), n(3), {
                mountComponent: function(t, e, n, o, i, s) {
                    var a = t.mountComponent(e, n, o, i, s);
                    return t._currentElement && null != t._currentElement.ref && e.getReactMountReady().enqueue(r, t), a
                },
                getHostNode: function(t) {
                    return t.getHostNode()
                },
                unmountComponent: function(t, e) {
                    o.detachRefs(t, t._currentElement), t.unmountComponent(e)
                },
                receiveComponent: function(t, e, n, i) {
                    var s = t._currentElement;
                    if (e !== s || i !== t._context) {
                        var a = o.shouldUpdateRefs(s, e);
                        a && o.detachRefs(t, s), t.receiveComponent(e, n, i), a && t._currentElement && null != t._currentElement.ref && n.getReactMountReady().enqueue(r, t)
                    }
                },
                performUpdateIfNecessary: function(t, e, n) {
                    t._updateBatchNumber === n && t.performUpdateIfNecessary(e)
                }
            });
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(137),
            i = n(365),
            s = n(366),
            a = n(26),
            c = n(367),
            u = n(368),
            l = n(369),
            p = n(373),
            h = a.createElement,
            f = a.createFactory,
            d = a.cloneElement,
            m = r,
            v = function(t) {
                return t
            },
            y = {
                Children: {
                    map: i.map,
                    forEach: i.forEach,
                    count: i.count,
                    toArray: i.toArray,
                    only: p
                },
                Component: o.Component,
                PureComponent: o.PureComponent,
                createElement: h,
                cloneElement: d,
                isValidElement: a.isValidElement,
                PropTypes: c,
                createClass: l,
                createFactory: f,
                createMixin: v,
                DOM: s,
                version: u,
                __spread: m
            };
        t.exports = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 !== t.ref
        }

        function o(t) {
            return void 0 !== t.key
        }
        var i = n(5),
            s = n(15),
            a = (n(3), n(141), Object.prototype.hasOwnProperty),
            c = n(139),
            u = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            },
            l = function(t, e, n, r, o, i, s) {
                var a = {
                    $$typeof: c,
                    type: t,
                    key: e,
                    ref: n,
                    props: s,
                    _owner: i
                };
                return a
            };
        l.createElement = function(t, e, n) {
            var i, c = {},
                p = null,
                h = null;
            if (null != e) {
                r(e) && (h = e.ref), o(e) && (p = "" + e.key), void 0 === e.__self ? null : e.__self, void 0 === e.__source ? null : e.__source;
                for (i in e) a.call(e, i) && !u.hasOwnProperty(i) && (c[i] = e[i])
            }
            var f = arguments.length - 2;
            if (1 === f) c.children = n;
            else if (f > 1) {
                for (var d = Array(f), m = 0; m < f; m++) d[m] = arguments[m + 2];
                c.children = d
            }
            if (t && t.defaultProps) {
                var v = t.defaultProps;
                for (i in v) void 0 === c[i] && (c[i] = v[i])
            }
            return l(t, p, h, 0, 0, s.current, c)
        }, l.createFactory = function(t) {
            var e = l.createElement.bind(null, t);
            return e.type = t, e
        }, l.cloneAndReplaceKey = function(t, e) {
            return l(t.type, e, t.ref, t._self, t._source, t._owner, t.props)
        }, l.cloneElement = function(t, e, n) {
            var c, p = i({}, t.props),
                h = t.key,
                f = t.ref,
                d = (t._self, t._source, t._owner);
            if (null != e) {
                r(e) && (f = e.ref, d = s.current), o(e) && (h = "" + e.key);
                var m;
                t.type && t.type.defaultProps && (m = t.type.defaultProps);
                for (c in e) a.call(e, c) && !u.hasOwnProperty(c) && (void 0 === e[c] && void 0 !== m ? p[c] = m[c] : p[c] = e[c])
            }
            var v = arguments.length - 2;
            if (1 === v) p.children = n;
            else if (v > 1) {
                for (var y = Array(v), g = 0; g < v; g++) y[g] = arguments[g + 2];
                p.children = y
            }
            return l(t.type, h, f, 0, 0, d, p)
        }, l.isValidElement = function(t) {
            return "object" == typeof t && null !== t && t.$$typeof === c
        }, t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = n(8),
            s = n(19),
            a = n(163),
            c = n(385),
            u = n(84),
            l = function(t) {
                function e(e) {
                    t.call(this, e), this.destination = e
                }
                return r(e, t), e
            }(i.Subscriber);
        e.SubjectSubscriber = l;
        var p = function(t) {
            function e() {
                t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            return r(e, t), e.prototype[u.rxSubscriber] = function() {
                return new l(this)
            }, e.prototype.lift = function(t) {
                var e = new h(this, this);
                return e.operator = t, e
            }, e.prototype.next = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                if (!this.isStopped)
                    for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
            }, e.prototype.error = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function() {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function(e) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function(t) {
                if (this.closed) throw new a.ObjectUnsubscribedError;
                return this.hasError ? (t.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (t.complete(), s.Subscription.EMPTY) : (this.observers.push(t), new c.SubjectSubscription(this, t))
            }, e.prototype.asObservable = function() {
                var t = new o.Observable;
                return t.source = this, t
            }, e.create = function(t, e) {
                return new h(t, e)
            }, e
        }(o.Observable);
        e.Subject = p;
        var h = function(t) {
            function e(e, n) {
                t.call(this), this.destination = e, this.source = n
            }
            return r(e, t), e.prototype.next = function(t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function(t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function() {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function(t) {
                return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY
            }, e
        }(p);
        e.AnonymousSubject = h
    }, function(t, e, n) {
        "use strict";
        e.errorObject = {
            e: {}
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.log = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            "undefined" != typeof window && window.botchatDebug && t && console.log.apply(console, [t].concat(e))
        }
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "button" === t || "input" === t || "select" === t || "textarea" === t
        }

        function o(t, e, n) {
            switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    return !(!n.disabled || !r(e));
                default:
                    return !1
            }
        }
        var i = n(4),
            s = n(64),
            a = n(65),
            c = n(69),
            u = n(124),
            l = n(125),
            p = (n(1), {}),
            h = null,
            f = function(t, e) {
                t && (a.executeDispatchesInOrder(t, e), t.isPersistent() || t.constructor.release(t))
            },
            d = function(t) {
                return f(t, !0)
            },
            m = function(t) {
                return f(t, !1)
            },
            v = function(t) {
                return "." + t._rootNodeID
            },
            y = {
                injection: {
                    injectEventPluginOrder: s.injectEventPluginOrder,
                    injectEventPluginsByName: s.injectEventPluginsByName
                },
                putListener: function(t, e, n) {
                    "function" != typeof n && i("94", e, typeof n);
                    var r = v(t);
                    (p[e] || (p[e] = {}))[r] = n;
                    var o = s.registrationNameModules[e];
                    o && o.didPutListener && o.didPutListener(t, e, n)
                },
                getListener: function(t, e) {
                    var n = p[e];
                    if (o(e, t._currentElement.type, t._currentElement.props)) return null;
                    var r = v(t);
                    return n && n[r]
                },
                deleteListener: function(t, e) {
                    var n = s.registrationNameModules[e];
                    n && n.willDeleteListener && n.willDeleteListener(t, e);
                    var r = p[e];
                    if (r) {
                        delete r[v(t)]
                    }
                },
                deleteAllListeners: function(t) {
                    var e = v(t);
                    for (var n in p)
                        if (p.hasOwnProperty(n) && p[n][e]) {
                            var r = s.registrationNameModules[n];
                            r && r.willDeleteListener && r.willDeleteListener(t, n), delete p[n][e]
                        }
                },
                extractEvents: function(t, e, n, r) {
                    for (var o, i = s.plugins, a = 0; a < i.length; a++) {
                        var c = i[a];
                        if (c) {
                            var l = c.extractEvents(t, e, n, r);
                            l && (o = u(o, l))
                        }
                    }
                    return o
                },
                enqueueEvents: function(t) {
                    t && (h = u(h, t))
                },
                processEventQueue: function(t) {
                    var e = h;
                    h = null, t ? l(e, d) : l(e, m), h && i("95"), c.rethrowCaughtError()
                },
                __purge: function() {
                    p = {}
                },
                __getListenerBank: function() {
                    return p
                }
            };
        t.exports = y
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r = e.dispatchConfig.phasedRegistrationNames[n];
            return y(t, r)
        }

        function o(t, e, n) {
            var o = r(t, n, e);
            o && (n._dispatchListeners = m(n._dispatchListeners, o), n._dispatchInstances = m(n._dispatchInstances, t))
        }

        function i(t) {
            t && t.dispatchConfig.phasedRegistrationNames && d.traverseTwoPhase(t._targetInst, o, t)
        }

        function s(t) {
            if (t && t.dispatchConfig.phasedRegistrationNames) {
                var e = t._targetInst,
                    n = e ? d.getParentInstance(e) : null;
                d.traverseTwoPhase(n, o, t)
            }
        }

        function a(t, e, n) {
            if (n && n.dispatchConfig.registrationName) {
                var r = n.dispatchConfig.registrationName,
                    o = y(t, r);
                o && (n._dispatchListeners = m(n._dispatchListeners, o), n._dispatchInstances = m(n._dispatchInstances, t))
            }
        }

        function c(t) {
            t && t.dispatchConfig.registrationName && a(t._targetInst, null, t)
        }

        function u(t) {
            v(t, i)
        }

        function l(t) {
            v(t, s)
        }

        function p(t, e, n, r) {
            d.traverseEnterLeave(n, r, a, t, e)
        }

        function h(t) {
            v(t, c)
        }
        var f = n(32),
            d = n(65),
            m = n(124),
            v = n(125),
            y = (n(3), f.getListener),
            g = {
                accumulateTwoPhaseDispatches: u,
                accumulateTwoPhaseDispatchesSkipTarget: l,
                accumulateDirectDispatches: h,
                accumulateEnterLeaveDispatches: p
            };
        t.exports = g
    }, function(t, e, n) {
        "use strict";
        var r = {
            remove: function(t) {
                t._reactInternalInstance = void 0
            },
            get: function(t) {
                return t._reactInternalInstance
            },
            has: function(t) {
                return void 0 !== t._reactInternalInstance
            },
            set: function(t, e) {
                t._reactInternalInstance = e
            }
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = n(74),
            s = {
                view: function(t) {
                    if (t.view) return t.view;
                    var e = i(t);
                    if (e.window === e) return e;
                    var n = e.ownerDocument;
                    return n ? n.defaultView || n.parentWindow : window
                },
                detail: function(t) {
                    return t.detail || 0
                }
            };
        o.augmentClass(r, s), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var o = new Error(n);
            throw o.name = "Invariant Violation", o.framesToPop = 1, o
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            try {
                return i.apply(this, arguments)
            } catch (t) {
                return s.errorObject.e = t, s.errorObject
            }
        }

        function o(t) {
            return i = t, r
        }
        var i, s = n(28);
        e.tryCatch = o
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            var e = function() {
                function t() {}
                return t.setSpeechRecognizer = function(e) {
                    t.instance = e
                }, t.startRecognizing = function(e, n, r, o, i) {
                    void 0 === e && (e = "en-US"), void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = null), void 0 === i && (i = null), t.speechIsAvailable() && (e && t.instance.locale !== e && (t.instance.stopRecognizing(), t.instance.locale = e), t.alreadyRecognizing() && t.stopRecognizing(), t.instance.onIntermediateResult = n, t.instance.onFinalResult = r, t.instance.onAudioStreamingToService = o, t.instance.onRecognitionFailed = i, t.instance.startRecognizing())
                }, t.stopRecognizing = function() {
                    t.speechIsAvailable() && t.instance.stopRecognizing()
                }, t.warmup = function() {
                    t.speechIsAvailable() && t.instance.warmup()
                }, t.speechIsAvailable = function() {
                    return null != t.instance && t.instance.speechIsAvailable()
                }, t.alreadyRecognizing = function() {
                    return !!t.instance && t.instance.isStreamingToService
                }, t
            }();
            e.instance = null, t.SpeechRecognizer = e;
            var n = function() {
                function t() {}
                return t.setSpeechSynthesizer = function(e) {
                    t.instance = e
                }, t.speak = function(e, n, r, o) {
                    void 0 === r && (r = null), void 0 === o && (o = null), null != t.instance && t.instance.speak(e, n, r, o)
                }, t.stopSpeaking = function() {
                    null != t.instance && t.instance.stopSpeaking()
                }, t
            }();
            n.instance = null, t.SpeechSynthesizer = n;
            var r = function() {
                function t() {
                    var t = this;
                    if (this.locale = null, this.isStreamingToService = !1, this.onIntermediateResult = null, this.onFinalResult = null, this.onAudioStreamingToService = null, this.onRecognitionFailed = null, this.recognizer = null, !window.webkitSpeechRecognition) return void console.error("This browser does not support speech recognition");
                    this.recognizer = new window.webkitSpeechRecognition, this.recognizer.lang = "en-US", this.recognizer.interimResults = !0, this.recognizer.onaudiostart = function() {
                        t.onAudioStreamingToService && t.onAudioStreamingToService()
                    }, this.recognizer.onresult = function(e) {
                        if (null != e.results && 0 != e.length) {
                            var n = e.results[0];
                            if (!0 === n.isFinal && null != t.onFinalResult) t.onFinalResult(n[0].transcript);
                            else if (!1 === n.isFinal && null != t.onIntermediateResult) {
                                for (var r = "", o = 0; o < e.results.length; ++o) r += e.results[o][0].transcript;
                                t.onIntermediateResult(r)
                            }
                        }
                    }, this.recognizer.onerror = function(e) {
                        throw t.onRecognitionFailed && t.onRecognitionFailed(), e
                    }
                }
                return t.prototype.speechIsAvailable = function() {
                    return null != this.recognizer
                }, t.prototype.warmup = function() {}, t.prototype.startRecognizing = function() {
                    this.recognizer.start()
                }, t.prototype.stopRecognizing = function() {
                    this.recognizer.stop()
                }, t
            }();
            t.BrowserSpeechRecognizer = r;
            var o = function() {
                function t() {
                    this.lastOperation = null, this.audioElement = null, this.speakRequests = []
                }
                return t.prototype.speak = function(t, e, n, r) {
                    var o = this;
                    if (void 0 === n && (n = null), void 0 === r && (r = null), "SpeechSynthesisUtterance" in window && t) {
                        if (null === this.audioElement) {
                            var s = document.createElement("audio");
                            s.id = "player", s.autoplay = !0, this.audioElement = s
                        }
                        var a = new Array;
                        if ("<" === t[0]) {
                            0 != t.indexOf("<speak") && (t = "<speak>\n" + t + "\n</speak>\n");
                            var c = new DOMParser,
                                u = c.parseFromString(t, "text/xml"),
                                l = u.documentElement.childNodes;
                            this.processNodes(l, a)
                        } else a.push(t);
                        var p = function() {
                                null !== r && r(), o.speakRequests.length && (o.speakRequests[0].completed(), o.speakRequests.splice(0, 1)), o.speakRequests.length && o.playNextTTS(o.speakRequests[0], 0)
                            },
                            h = new i(a, e, function(t) {
                                o.lastOperation = t
                            }, n, p);
                        0 === this.speakRequests.length ? (this.speakRequests = [h], this.playNextTTS(this.speakRequests[0], 0)) : this.speakRequests.push(h)
                    }
                }, t.prototype.stopSpeaking = function() {
                    if ("SpeechSynthesisUtterance" in window != !1 && this.speakRequests.length) {
                        this.audioElement && this.audioElement.pause(), this.speakRequests.forEach(function(t) {
                            t.abandon()
                        }), this.speakRequests = [];
                        var t = window.speechSynthesis;
                        (t.speaking || t.pending) && (this.lastOperation && (this.lastOperation.onend = null), t.cancel())
                    }
                }, t.prototype.playNextTTS = function(t, e) {
                    var n = this,
                        r = function() {
                            n.playNextTTS(t, e + 1)
                        };
                    if (e < t.speakChunks.length) {
                        var o = t.speakChunks[e];
                        if ("number" == typeof o) setTimeout(r, o);
                        else if (0 === o.indexOf("http")) {
                            var i = this.audioElement;
                            i.src = o, i.onended = r, i.onerror = r, i.play()
                        } else {
                            var s = new SpeechSynthesisUtterance;
                            s.text = o, s.lang = t.lang, s.onstart = 0 === e ? t.onSpeakingStarted : null, s.onend = r, s.onerror = r, t.onSpeakQueued && t.onSpeakQueued(s), window.speechSynthesis.speak(s)
                        }
                    } else t.onSpeakingFinished && t.onSpeakingFinished()
                }, t.prototype.processNodes = function(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        switch (r.nodeName) {
                            case "p":
                                this.processNodes(r.childNodes, e), e.push(250);
                                break;
                            case "break":
                                if (r.attributes.getNamedItem("strength")) {
                                    var o = r.attributes.getNamedItem("strength").nodeValue;
                                    "weak" === o || ("medium" === o ? e.push(50) : "strong" === o ? e.push(100) : "x-strong" === o && e.push(250))
                                } else r.attributes.getNamedItem("time") && e.push(JSON.parse(r.attributes.getNamedItem("time").value));
                                break;
                            case "audio":
                                r.attributes.getNamedItem("src") && e.push(r.attributes.getNamedItem("src").value);
                                break;
                            case "say-as":
                            case "prosody":
                            case "emphasis":
                            case "w":
                            case "phoneme":
                            case "voice":
                                this.processNodes(r.childNodes, e);
                                break;
                            default:
                                e.push(r.nodeValue)
                        }
                    }
                }, t
            }();
            t.BrowserSpeechSynthesizer = o;
            var i = function() {
                function t(t, e, n, r, o) {
                    void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = null), this._onSpeakQueued = null, this._onSpeakingStarted = null, this._onSpeakingFinished = null, this._speakChunks = [], this._lang = null, this._onSpeakQueued = n, this._onSpeakingStarted = r, this._onSpeakingFinished = o, this._speakChunks = t, this._lang = e
                }
                return t.prototype.abandon = function() {
                    this._speakChunks = []
                }, t.prototype.completed = function() {
                    this._speakChunks = []
                }, Object.defineProperty(t.prototype, "onSpeakQueued", {
                    get: function() {
                        return this._onSpeakQueued
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onSpeakingStarted", {
                    get: function() {
                        return this._onSpeakingStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onSpeakingFinished", {
                    get: function() {
                        return this._onSpeakingFinished
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "speakChunks", {
                    get: function() {
                        return this._speakChunks
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "lang", {
                    get: function() {
                        return this._lang
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }()
        }(e.Speech || (e.Speech = {}))
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(53),
            i = n(187),
            s = n(39),
            a = n(29);
        e.sendMessage = function(t, e, n) {
            return {
                type: "Send_Message",
                activity: {
                    type: "message",
                    text: t,
                    from: e,
                    locale: n,
                    textFormat: "plain",
                    timestamp: (new Date).toISOString()
                }
            }
        }, e.sendFiles = function(t, e, n) {
            return {
                type: "Send_Message",
                activity: {
                    type: "message",
                    attachments: c(t),
                    from: e,
                    locale: n
                }
            }
        };
        var c = function(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                e.push({
                    contentType: o.type,
                    contentUrl: window.URL.createObjectURL(o),
                    name: o.name
                })
            }
            return e
        };
        e.shell = function(t, e) {
            switch (void 0 === t && (t = {
                input: "",
                sendTyping: !1,
                listening: !1,
                lastInputViaSpeech: !1
            }), e.type) {
                case "Update_Input":
                    return r.__assign({}, t, {
                        input: e.input,
                        lastInputViaSpeech: "speech" == e.source
                    });
                case "Listening_Start":
                    return r.__assign({}, t, {
                        listening: !0
                    });
                case "Listening_Stop":
                    return r.__assign({}, t, {
                        listening: !1
                    });
                case "Send_Message":
                    return r.__assign({}, t, {
                        input: ""
                    });
                case "Set_Send_Typing":
                    return r.__assign({}, t, {
                        sendTyping: e.sendTyping
                    });
                case "Card_Action_Clicked":
                    return r.__assign({}, t, {
                        lastInputViaSpeech: !1
                    });
                default:
                case "Listening_Starting":
                    return t
            }
        }, e.format = function(t, e) {
            switch (void 0 === t && (t = {
                locale: "en-us",
                options: {
                    showHeader: !0
                },
                strings: i.defaultStrings,
                carouselMargin: void 0
            }), e.type) {
                case "Set_Format_Options":
                    return r.__assign({}, t, {
                        options: r.__assign({}, t.options, e.options)
                    });
                case "Set_Locale":
                    return r.__assign({}, t, {
                        locale: e.locale,
                        strings: i.strings(e.locale)
                    });
                case "Set_Measurements":
                    return r.__assign({}, t, {
                        carouselMargin: e.carouselMargin
                    });
                default:
                    return t
            }
        }, e.size = function(t, e) {
            switch (void 0 === t && (t = {
                width: void 0,
                height: void 0
            }), e.type) {
                case "Set_Size":
                    return r.__assign({}, t, {
                        width: e.width,
                        height: e.height
                    });
                default:
                    return t
            }
        }, e.connection = function(t, e) {
            switch (void 0 === t && (t = {
                connectionStatus: o.ConnectionStatus.Uninitialized,
                botConnection: void 0,
                selectedActivity: void 0,
                user: void 0,
                bot: void 0
            }), e.type) {
                case "Start_Connection":
                    return r.__assign({}, t, {
                        botConnection: e.botConnection,
                        user: e.user,
                        bot: e.bot,
                        selectedActivity: e.selectedActivity
                    });
                case "Connection_Change":
                    return r.__assign({}, t, {
                        connectionStatus: e.connectionStatus
                    });
                default:
                    return t
            }
        };
        var u = function(t, e, n) {
            return t.slice(0, e).concat([n], t.slice(e + 1))
        };
        e.history = function(t, e) {
            switch (void 0 === t && (t = {
                activities: [],
                clientActivityBase: Date.now().toString() + Math.random().toString().substr(1) + ".",
                clientActivityCounter: 0,
                selectedActivity: null
            }), a.log("history action", e), e.type) {
                case "Receive_Sent_Message":
                    if (!e.activity.channelData || !e.activity.channelData.clientActivityId) return t;
                    var n = t.activities.findIndex(function(t) {
                        return t.channelData && t.channelData.clientActivityId === e.activity.channelData.clientActivityId
                    });
                    if (-1 !== n) {
                        var o = t.activities[n];
                        return r.__assign({}, t, {
                            activities: u(t.activities, n, o),
                            selectedActivity: t.selectedActivity === o ? e.activity : t.selectedActivity
                        })
                    }
                    case "Receive_Message":
                        return t.activities.find(function(t) {
                            return t.id === e.activity.id
                        }) ? t : r.__assign({}, t, {
                            activities: t.activities.filter(function(t) {
                                return "typing" !== t.type
                            }).concat([e.activity], t.activities.filter(function(t) {
                                return t.from.id !== e.activity.from.id && "typing" === t.type
                            }))
                        });
                    case "Send_Message":
                        return r.__assign({}, t, {
                            activities: t.activities.filter(function(t) {
                                return "typing" !== t.type
                            }).concat([r.__assign({}, e.activity, {
                                timestamp: (new Date).toISOString(),
                                channelData: {
                                    clientActivityId: t.clientActivityBase + t.clientActivityCounter
                                }
                            })], t.activities.filter(function(t) {
                                return "typing" === t.type
                            })),
                            clientActivityCounter: t.clientActivityCounter + 1
                        });
                    case "Send_Message_Retry":
                        var i = t.activities.find(function(t) {
                                return t.channelData && t.channelData.clientActivityId === e.clientActivityId
                            }),
                            s = void 0 === i.id ? i : r.__assign({}, i, {
                                id: void 0
                            });
                        return r.__assign({}, t, {
                            activities: t.activities.filter(function(t) {
                                return "typing" !== t.type && t !== i
                            }).concat([s], t.activities.filter(function(t) {
                                return "typing" === t.type
                            })),
                            selectedActivity: t.selectedActivity === i ? s : t.selectedActivity
                        });
                    case "Send_Message_Succeed":
                    case "Send_Message_Fail":
                        var c = t.activities.findIndex(function(t) {
                            return t.channelData && t.channelData.clientActivityId === e.clientActivityId
                        });
                        if (-1 === c) return t;
                        var l = t.activities[c];
                        if (l.id && "retry" != l.id) return t;
                        var p = r.__assign({}, l, {
                            id: "Send_Message_Succeed" === e.type ? e.id : null
                        });
                        return r.__assign({}, t, {
                            activities: u(t.activities, c, p),
                            clientActivityCounter: t.clientActivityCounter + 1,
                            selectedActivity: t.selectedActivity === l ? p : t.selectedActivity
                        });
                    case "Show_Typing":
                        return r.__assign({}, t, {
                            activities: t.activities.filter(function(t) {
                                return "typing" !== t.type
                            }).concat(t.activities.filter(function(t) {
                                return t.from.id !== e.activity.from.id && "typing" === t.type
                            }), [e.activity])
                        });
                    case "Clear_Typing":
                        return r.__assign({}, t, {
                            activities: t.activities.filter(function(t) {
                                return t.id !== e.id
                            }),
                            selectedActivity: t.selectedActivity && t.selectedActivity.id === e.id ? null : t.selectedActivity
                        });
                    case "Select_Activity":
                        return e.selectedActivity === t.selectedActivity ? t : r.__assign({}, t, {
                            selectedActivity: e.selectedActivity
                        });
                    case "Take_SuggestedAction":
                        var h = t.activities.findIndex(function(t) {
                                return t === e.message
                            }),
                            f = t.activities[h],
                            d = r.__assign({}, f, {
                                suggestedActions: void 0
                            });
                        return r.__assign({}, t, {
                            activities: u(t.activities, h, d),
                            selectedActivity: t.selectedActivity === f ? d : t.selectedActivity
                        });
                    default:
                        return t
            }
        };
        var l = {
                type: null
            },
            p = function(t, e) {
                var n = t.speak;
                if ((!n && null == t.textFormat || "plain" == t.textFormat) && (n = t.text), !n && t.channelData && t.channelData.speechOutput && t.channelData.speechOutput.speakText && (n = t.channelData.speechOutput.speakText), !n && t.attachments && t.attachments.length > 0)
                    for (var r = 0; r < t.attachments.length; r++) {
                        var o = t;
                        if (o.attachments[r].content && o.attachments[r].content.speak) {
                            n = o.attachments[r].content.speak;
                            break
                        }
                    }
                return {
                    type: "Speak_SSML",
                    ssml: n,
                    locale: t.locale || e,
                    autoListenAfterSpeak: "expectingInput" == t.inputHint || t.channelData && "WaitingForAnswerToQuestion" == t.channelData.botState
                }
            },
            h = n(79),
            f = n(0);
        n(151), n(152), n(153), n(154), n(155), n(395), n(156), n(400), n(399), n(386), n(149), n(150);
        var d = function(t, e) {
                return t.ofType("Send_Message").map(function(t) {
                    var n = e.getState();
                    return {
                        type: "Send_Message_Try",
                        clientActivityId: n.history.clientActivityBase + (n.history.clientActivityCounter - 1)
                    }
                })
            },
            m = function(t, e) {
                return t.ofType("Send_Message_Try").flatMap(function(t) {
                    var n = e.getState(),
                        r = t.clientActivityId,
                        o = n.history.activities.find(function(t) {
                            return t.channelData && t.channelData.clientActivityId === r
                        });
                    if (!o) return a.log("trySendMessage: activity not found"), f.Observable.empty();
                    if (1 == n.history.clientActivityCounter) {
                        var i = {
                            type: "ClientCapabilities",
                            requiresBotState: !0,
                            supportsTts: !0,
                            supportsListening: !0
                        };
                        o.entities = null == o.entities ? [i] : o.entities.concat([i])
                    }
                    return n.connection.botConnection.postActivity(o).map(function(t) {
                        return {
                            type: "Send_Message_Succeed",
                            clientActivityId: r,
                            id: t
                        }
                    }).catch(function(t) {
                        return f.Observable.of({
                            type: "Send_Message_Fail",
                            clientActivityId: r
                        })
                    })
                })
            },
            v = f.Observable.bindCallback(s.Speech.SpeechSynthesizer.speak),
            y = function(t, e) {
                return t.ofType("Speak_SSML").filter(function(t) {
                    return t.ssml
                }).mergeMap(function(t) {
                    var e = null,
                        n = function() {
                            return l
                        };
                    return t.autoListenAfterSpeak && (e = function() {
                        return s.Speech.SpeechRecognizer.warmup()
                    }, n = function() {
                        return {
                            type: "Listening_Starting"
                        }
                    }), v(t.ssml, t.locale, e).map(n).catch(function(t) {
                        return f.Observable.of(l)
                    })
                }).merge(t.ofType("Speak_SSML").map(function(t) {
                    return {
                        type: "Listening_Stop"
                    }
                }))
            },
            g = function(t, e) {
                return t.ofType("Receive_Message").filter(function(t) {
                    return t.activity && e.getState().shell.lastInputViaSpeech
                }).map(function(t) {
                    return p(t.activity, e.getState().format.locale)
                })
            },
            b = function(t) {
                return t.ofType("Update_Input", "Listening_Starting", "Send_Message", "Card_Action_Clicked", "Stop_Speaking").do(s.Speech.SpeechSynthesizer.stopSpeaking).map(function(t) {
                    return l
                })
            },
            _ = function(t) {
                return t.ofType("Listening_Stop", "Card_Action_Clicked").do(s.Speech.SpeechRecognizer.stopRecognizing).map(function(t) {
                    return l
                })
            },
            C = function(t, n) {
                return t.ofType("Listening_Starting").do(function(t) {
                    var r = n.getState().format.locale,
                        o = function(t) {
                            n.dispatch({
                                type: "Update_Input",
                                input: t,
                                source: "speech"
                            })
                        },
                        i = function(t) {
                            t = t.replace(/^[.\s]+|[.\s]+$/g, ""), o(t), n.dispatch({
                                type: "Listening_Stop"
                            }), n.dispatch(e.sendMessage(t, n.getState().connection.user, r))
                        },
                        a = function() {
                            n.dispatch({
                                type: "Listening_Start"
                            })
                        },
                        c = function() {
                            n.dispatch({
                                type: "Listening_Stop"
                            })
                        };
                    s.Speech.SpeechRecognizer.startRecognizing(r, o, i, a, c)
                }).map(function(t) {
                    return l
                })
            },
            w = function(t, e) {
                var n = t.ofType("Update_Input", "Listening_Stop");
                return t.ofType("Listening_Start").mergeMap(function(t) {
                    return f.Observable.of({
                        type: "Listening_Stop"
                    }).delay(5e3).takeUntil(n)
                })
            },
            x = function(t) {
                return t.ofType("Send_Message_Retry").map(function(t) {
                    return {
                        type: "Send_Message_Try",
                        clientActivityId: t.clientActivityId
                    }
                })
            },
            k = function(t, e) {
                return t.ofType("Send_Message_Succeed", "Send_Message_Fail", "Show_Typing", "Clear_Typing").map(function(t) {
                    var n = e.getState();
                    return n.connection.selectedActivity && n.connection.selectedActivity.next({
                        activity: n.history.selectedActivity
                    }), l
                })
            },
            S = function(t) {
                return t.ofType("Show_Typing").delay(3e3).map(function(t) {
                    return {
                        type: "Clear_Typing",
                        id: t.activity.id
                    }
                })
            },
            E = function(t, e) {
                return t.ofType("Update_Input").map(function(t) {
                    return e.getState()
                }).filter(function(t) {
                    return t.shell.sendTyping
                }).throttleTime(3e3).do(function(t) {
                    return a.log("sending typing")
                }).flatMap(function(t) {
                    return t.connection.botConnection.postActivity({
                        type: "typing",
                        from: t.connection.user
                    }).map(function(t) {
                        return l
                    }).catch(function(t) {
                        return f.Observable.of(l)
                    })
                })
            },
            A = n(79),
            T = n(377);
        e.createStore = function() {
            return A.createStore(A.combineReducers({
                shell: e.shell,
                format: e.format,
                size: e.size,
                connection: e.connection,
                history: e.history
            }), h.applyMiddleware(T.createEpicMiddleware(T.combineEpics(k, d, m, x, S, E, y, g, C, _, b, w))))
        }
    }, function(t, e, n) {
        var r = n(202)("wks"),
            o = n(95),
            i = n(30).Symbol,
            s = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
        }).store = r
    }, function(t, e, n) {
        "use strict";
        var r = {};
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return Object.prototype.hasOwnProperty.call(t, m) || (t[m] = f++, p[t[m]] = {}), p[t[m]]
        }
        var o, i = n(5),
            s = n(64),
            a = n(319),
            c = n(123),
            u = n(351),
            l = n(75),
            p = {},
            h = !1,
            f = 0,
            d = {
                topAbort: "abort",
                topAnimationEnd: u("animationend") || "animationend",
                topAnimationIteration: u("animationiteration") || "animationiteration",
                topAnimationStart: u("animationstart") || "animationstart",
                topBlur: "blur",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topChange: "change",
                topClick: "click",
                topCompositionEnd: "compositionend",
                topCompositionStart: "compositionstart",
                topCompositionUpdate: "compositionupdate",
                topContextMenu: "contextmenu",
                topCopy: "copy",
                topCut: "cut",
                topDoubleClick: "dblclick",
                topDrag: "drag",
                topDragEnd: "dragend",
                topDragEnter: "dragenter",
                topDragExit: "dragexit",
                topDragLeave: "dragleave",
                topDragOver: "dragover",
                topDragStart: "dragstart",
                topDrop: "drop",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topFocus: "focus",
                topInput: "input",
                topKeyDown: "keydown",
                topKeyPress: "keypress",
                topKeyUp: "keyup",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topMouseDown: "mousedown",
                topMouseMove: "mousemove",
                topMouseOut: "mouseout",
                topMouseOver: "mouseover",
                topMouseUp: "mouseup",
                topPaste: "paste",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topScroll: "scroll",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topSelectionChange: "selectionchange",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTextInput: "textInput",
                topTimeUpdate: "timeupdate",
                topTouchCancel: "touchcancel",
                topTouchEnd: "touchend",
                topTouchMove: "touchmove",
                topTouchStart: "touchstart",
                topTransitionEnd: u("transitionend") || "transitionend",
                topVolumeChange: "volumechange",
                topWaiting: "waiting",
                topWheel: "wheel"
            },
            m = "_reactListenersID" + String(Math.random()).slice(2),
            v = i({}, a, {
                ReactEventListener: null,
                injection: {
                    injectReactEventListener: function(t) {
                        t.setHandleTopLevel(v.handleTopLevel), v.ReactEventListener = t
                    }
                },
                setEnabled: function(t) {
                    v.ReactEventListener && v.ReactEventListener.setEnabled(t)
                },
                isEnabled: function() {
                    return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled())
                },
                listenTo: function(t, e) {
                    for (var n = e, o = r(n), i = s.registrationNameDependencies[t], a = 0; a < i.length; a++) {
                        var c = i[a];
                        o.hasOwnProperty(c) && o[c] || ("topWheel" === c ? l("wheel") ? v.ReactEventListener.trapBubbledEvent("topWheel", "wheel", n) : l("mousewheel") ? v.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", n) : v.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === c ? l("scroll", !0) ? v.ReactEventListener.trapCapturedEvent("topScroll", "scroll", n) : v.ReactEventListener.trapBubbledEvent("topScroll", "scroll", v.ReactEventListener.WINDOW_HANDLE) : "topFocus" === c || "topBlur" === c ? (l("focus", !0) ? (v.ReactEventListener.trapCapturedEvent("topFocus", "focus", n), v.ReactEventListener.trapCapturedEvent("topBlur", "blur", n)) : l("focusin") && (v.ReactEventListener.trapBubbledEvent("topFocus", "focusin", n), v.ReactEventListener.trapBubbledEvent("topBlur", "focusout", n)), o.topBlur = !0, o.topFocus = !0) : d.hasOwnProperty(c) && v.ReactEventListener.trapBubbledEvent(c, d[c], n), o[c] = !0)
                    }
                },
                trapBubbledEvent: function(t, e, n) {
                    return v.ReactEventListener.trapBubbledEvent(t, e, n)
                },
                trapCapturedEvent: function(t, e, n) {
                    return v.ReactEventListener.trapCapturedEvent(t, e, n)
                },
                supportsEventPageXY: function() {
                    if (!document.createEvent) return !1;
                    var t = document.createEvent("MouseEvent");
                    return null != t && "pageX" in t
                },
                ensureScrollValueMonitoring: function() {
                    if (void 0 === o && (o = v.supportsEventPageXY()), !o && !h) {
                        var t = c.refreshScrollValues;
                        v.ReactEventListener.monitorScrollValue(t), h = !0
                    }
                }
            });
        t.exports = v
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(35),
            i = n(123),
            s = n(73),
            a = {
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: s,
                button: function(t) {
                    var e = t.button;
                    return "which" in t ? e : 2 === e ? 2 : 4 === e ? 1 : 0
                },
                buttons: null,
                relatedTarget: function(t) {
                    return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
                },
                pageX: function(t) {
                    return "pageX" in t ? t.pageX : t.clientX + i.currentScrollLeft
                },
                pageY: function(t) {
                    return "pageY" in t ? t.pageY : t.clientY + i.currentScrollTop
                }
            };
        o.augmentClass(r, a), t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = (n(1), {}),
            i = {
                reinitializeTransaction: function() {
                    this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
                },
                _isInTransaction: !1,
                getTransactionWrappers: null,
                isInTransaction: function() {
                    return !!this._isInTransaction
                },
                perform: function(t, e, n, o, i, s, a, c) {
                    this.isInTransaction() && r("27");
                    var u, l;
                    try {
                        this._isInTransaction = !0, u = !0, this.initializeAll(0), l = t.call(e, n, o, i, s, a, c), u = !1
                    } finally {
                        try {
                            if (u) try {
                                this.closeAll(0)
                            } catch (t) {} else this.closeAll(0)
                        } finally {
                            this._isInTransaction = !1
                        }
                    }
                    return l
                },
                initializeAll: function(t) {
                    for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                        var r = e[n];
                        try {
                            this.wrapperInitData[n] = o, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                        } finally {
                            if (this.wrapperInitData[n] === o) try {
                                this.initializeAll(n + 1)
                            } catch (t) {}
                        }
                    }
                },
                closeAll: function(t) {
                    this.isInTransaction() || r("28");
                    for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                        var i, s = e[n],
                            a = this.wrapperInitData[n];
                        try {
                            i = !0, a !== o && s.close && s.close.call(this, a), i = !1
                        } finally {
                            if (i) try {
                                this.closeAll(n + 1)
                            } catch (t) {}
                        }
                    }
                    this.wrapperInitData.length = 0
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = "" + t,
                n = i.exec(e);
            if (!n) return e;
            var r, o = "",
                s = 0,
                a = 0;
            for (s = n.index; s < e.length; s++) {
                switch (e.charCodeAt(s)) {
                    case 34:
                        r = "&quot;";
                        break;
                    case 38:
                        r = "&amp;";
                        break;
                    case 39:
                        r = "&#x27;";
                        break;
                    case 60:
                        r = "&lt;";
                        break;
                    case 62:
                        r = "&gt;";
                        break;
                    default:
                        continue
                }
                a !== s && (o += e.substring(a, s)), a = s + 1, o += r
            }
            return a !== s ? o + e.substring(a, s) : o
        }

        function o(t) {
            return "boolean" == typeof t || "number" == typeof t ? "" + t : r(t)
        }
        var i = /["'&<>]/;
        t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r, o = n(7),
            i = n(63),
            s = /^[ \r\n\t\f]/,
            a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
            c = n(71),
            u = c(function(t, e) {
                if (t.namespaceURI !== i.svg || "innerHTML" in t) t.innerHTML = e;
                else {
                    r = r || document.createElement("div"), r.innerHTML = "<svg>" + e + "</svg>";
                    for (var n = r.firstChild; n.firstChild;) t.appendChild(n.firstChild)
                }
            });
        if (o.canUseDOM) {
            var l = document.createElement("div");
            l.innerHTML = " ", "" === l.innerHTML && (u = function(t, e) {
                if (t.parentNode && t.parentNode.replaceChild(t, t), s.test(e) || "<" === e[0] && a.test(e)) {
                    t.innerHTML = String.fromCharCode(65279) + e;
                    var n = t.firstChild;
                    1 === n.data.length ? t.removeChild(n) : n.deleteData(0, 1)
                } else t.innerHTML = e
            }), l = null
        }
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(354),
            o = n(133),
            i = n(355);
        n.d(e, "Provider", function() {
            return r.a
        }), n.d(e, "createProvider", function() {
            return r.b
        }), n.d(e, "connectAdvanced", function() {
            return o.a
        }), n.d(e, "connect", function() {
            return i.a
        })
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = n(157),
            s = n(50),
            a = n(167),
            c = function(t) {
                function e(e, n) {
                    t.call(this), this.array = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0])
                }
                return r(e, t), e.create = function(t, n) {
                    return new e(t, n)
                }, e.of = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
                    var r = t[t.length - 1];
                    a.isScheduler(r) ? t.pop() : r = null;
                    var o = t.length;
                    return o > 1 ? new e(t, r) : 1 === o ? new i.ScalarObservable(t[0], r) : new s.EmptyObservable(r)
                }, e.dispatch = function(t) {
                    var e = t.array,
                        n = t.index,
                        r = t.count,
                        o = t.subscriber;
                    if (n >= r) return void o.complete();
                    o.next(e[n]), o.closed || (t.index = n + 1, this.schedule(t))
                }, e.prototype._subscribe = function(t) {
                    var n = this.array,
                        r = n.length,
                        o = this.scheduler;
                    if (o) return o.schedule(e.dispatch, 0, {
                        array: n,
                        index: 0,
                        count: r,
                        subscriber: t
                    });
                    for (var i = 0; i < r && !t.closed; i++) t.next(n[i]);
                    t.complete()
                }, e
            }(o.Observable);
        e.ArrayObservable = c
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = function(t) {
                function e(e) {
                    t.call(this), this.scheduler = e
                }
                return r(e, t), e.create = function(t) {
                    return new e(t)
                }, e.dispatch = function(t) {
                    t.subscriber.complete()
                }, e.prototype._subscribe = function(t) {
                    var n = this.scheduler;
                    if (n) return n.schedule(e.dispatch, 0, {
                        subscriber: t
                    });
                    t.complete()
                }, e
            }(o.Observable);
        e.EmptyObservable = i
    }, function(t, e, n) {
        "use strict";
        e.isArray = Array.isArray || function(t) {
            return t && "number" == typeof t.length
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(181),
            s = n(179),
            a = /\^application\/vnd\.microsoft\.card\./i;
        e.queryParams = function(t) {
            return t.substr(1).split("&").reduce(function(t, e) {
                var n = e.split("=");
                return t[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), t
            }, {})
        };
        var c = function(t) {
                return Object.keys(t).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e].toString())
                }).join("&")
            },
            u = function(t) {
                return null != t && void 0 !== t
            },
            l = function(t) {
                return o.createElement("iframe", {
                    src: "https://youtube.com/embed/" + t.embedId + "?" + c({
                        modestbranding: "1",
                        loop: t.loop ? "1" : "0",
                        autoplay: t.autoPlay ? "1" : "0"
                    })
                })
            },
            p = function(t) {
                return o.createElement("iframe", {
                    src: "https://player.vimeo.com/video/" + t.embedId + "?" + c({
                        title: "0",
                        byline: "0",
                        portrait: "0",
                        badge: "0",
                        autoplay: t.autoPlay ? "1" : "0",
                        loop: t.loop ? "1" : "0"
                    })
                })
            },
            h = function(t) {
                var n = document.createElement("a");
                n.href = t.src;
                var i = e.queryParams(n.search),
                    s = n.pathname.substr(1).split("/");
                switch (n.hostname) {
                    case "youtube.com":
                    case "youtu.be":
                    case "www.youtube.com":
                    case "www.youtu.be":
                        return o.createElement(l, {
                            embedId: "youtube.com" === n.hostname || "www.youtube.com" === n.hostname ? i.v : s[s.length - 1],
                            autoPlay: t.autoPlay,
                            loop: t.loop
                        });
                    case "www.vimeo.com":
                    case "vimeo.com":
                        return o.createElement(p, {
                            embedId: s[s.length - 1],
                            autoPlay: t.autoPlay,
                            loop: t.loop
                        });
                    default:
                        return o.createElement("video", r.__assign({
                            controls: !0
                        }, t))
                }
            },
            f = function(t) {
                switch (t.type) {
                    case "video":
                        return o.createElement(h, r.__assign({}, t));
                    case "audio":
                        return o.createElement("audio", r.__assign({
                            controls: !0
                        }, t));
                    default:
                        return o.createElement("img", r.__assign({}, t))
                }
            },
            d = function(t) {
                return a.test(t.contentType) ? o.createElement("span", null, t.format.strings.unknownCard.replace("%1", t.contentType)) : t.contentUrl ? o.createElement("span", null, o.createElement("a", {
                    href: t.contentUrl,
                    title: t.contentUrl,
                    target: "_blank"
                }, t.name || t.format.strings.unknownFile.replace("%1", t.contentType))) : o.createElement("span", null, t.format.strings.unknownFile.replace("%1", t.contentType))
            },
            m = function(t) {
                return "gif" == t.slice(2 + (t.lastIndexOf(".") - 1 >>> 0)).toLowerCase() ? "image" : "video"
            };
        e.AttachmentView = function(t) {
            if (t.attachment) {
                var e = t.attachment,
                    n = function(e) {
                        return e && function(n) {
                            t.onCardAction(e.type, e.value), n.stopPropagation()
                        }
                    };
                switch (e.contentType) {
                    case "application/vnd.microsoft.card.hero":
                        if (!e.content) return null;
                        var r = new i.AdaptiveCardBuilder;
                        return e.content.images && e.content.images.forEach(function(t) {
                            return r.addImage(t.url)
                        }), r.addCommon(e.content), o.createElement(s.AdaptiveCardContainer, {
                            className: "hero",
                            card: r.card,
                            onImageLoad: t.onImageLoad,
                            onCardAction: t.onCardAction,
                            onClick: n(e.content.tap)
                        });
                    case "application/vnd.microsoft.card.thumbnail":
                        if (!e.content) return null;
                        var a = new i.AdaptiveCardBuilder;
                        if (e.content.images && e.content.images.length > 0) {
                            var c = a.addColumnSet([75, 25]);
                            a.addTextBlock(e.content.title, {
                                size: "medium",
                                weight: "bolder"
                            }, c[0]), a.addTextBlock(e.content.subtitle, {
                                isSubtle: !0,
                                wrap: !0
                            }, c[0]), a.addImage(e.content.images[0].url, c[1]), a.addTextBlock(e.content.text, {
                                wrap: !0
                            }), a.addButtons(e.content.buttons)
                        } else a.addCommon(e.content);
                        return o.createElement(s.AdaptiveCardContainer, {
                            className: "thumbnail",
                            card: a.card,
                            onImageLoad: t.onImageLoad,
                            onCardAction: t.onCardAction,
                            onClick: n(e.content.tap)
                        });
                    case "application/vnd.microsoft.card.video":
                        return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.AdaptiveCardContainer, {
                            className: "video",
                            card: i.buildCommonCard(e.content),
                            onCardAction: t.onCardAction
                        }, o.createElement(f, {
                            type: "video",
                            src: e.content.media[0].url,
                            onLoad: t.onImageLoad,
                            poster: e.content.image && e.content.image.url,
                            autoPlay: e.content.autostart,
                            loop: e.content.autoloop
                        })) : null;
                    case "application/vnd.microsoft.card.animation":
                        return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.AdaptiveCardContainer, {
                            className: "animation",
                            card: i.buildCommonCard(e.content),
                            onCardAction: t.onCardAction
                        }, o.createElement(f, {
                            type: m(e.content.media[0].url),
                            src: e.content.media[0].url,
                            onLoad: t.onImageLoad,
                            poster: e.content.image && e.content.image.url,
                            autoPlay: e.content.autostart,
                            loop: e.content.autoloop
                        })) : null;
                    case "application/vnd.microsoft.card.audio":
                        return e.content && e.content.media && 0 !== e.content.media.length ? o.createElement(s.AdaptiveCardContainer, {
                            className: "audio",
                            card: i.buildCommonCard(e.content),
                            onCardAction: t.onCardAction
                        }, o.createElement(f, {
                            type: "audio",
                            src: e.content.media[0].url,
                            autoPlay: e.content.autostart,
                            loop: e.content.autoloop
                        })) : null;
                    case "application/vnd.microsoft.card.signin":
                        return e.content ? o.createElement(s.AdaptiveCardContainer, {
                            className: "signin",
                            card: i.buildCommonCard(e.content),
                            onCardAction: t.onCardAction
                        }) : null;
                    case "application/vnd.microsoft.card.receipt":
                        if (!e.content) return null;
                        var l = new i.AdaptiveCardBuilder;
                        l.addTextBlock(e.content.title, {
                            size: "medium",
                            weight: "bolder"
                        });
                        var p = l.addColumnSet([75, 25]);
                        if (e.content.facts && e.content.facts.map(function(t, e) {
                                l.addTextBlock(t.key, {
                                    color: "default",
                                    size: "medium"
                                }, p[0]), l.addTextBlock(t.value, {
                                    color: "default",
                                    size: "medium",
                                    horizontalAlignment: "right"
                                }, p[1])
                            }), e.content.items && e.content.items.map(function(t, e) {
                                if (t.image) {
                                    var n = l.addColumnSet([15, 75, 10]);
                                    l.addImage(t.image.url, n[0]), l.addTextBlock(t.title, {
                                        size: "medium",
                                        weight: "bolder"
                                    }, n[1]), l.addTextBlock(t.subtitle, {
                                        color: "default",
                                        size: "medium"
                                    }, n[1]), l.addTextBlock(t.price, {
                                        horizontalAlignment: "right"
                                    }, n[2])
                                } else {
                                    var r = l.addColumnSet([75, 25]);
                                    l.addTextBlock(t.title, {
                                        size: "medium",
                                        weight: "bolder"
                                    }, r[0]), l.addTextBlock(t.subtitle, {
                                        color: "default",
                                        size: "medium"
                                    }, r[0]), l.addTextBlock(t.price, {
                                        horizontalAlignment: "right"
                                    }, r[1])
                                }
                            }), u(e.content.vat)) {
                            var h = l.addColumnSet([75, 25]);
                            l.addTextBlock(t.format.strings.receiptVat, {
                                size: "medium",
                                weight: "bolder"
                            }, h[0]), l.addTextBlock(e.content.vat, {
                                horizontalAlignment: "right"
                            }, h[1])
                        }
                        if (u(e.content.tax)) {
                            var v = l.addColumnSet([75, 25]);
                            l.addTextBlock(t.format.strings.receiptTax, {
                                size: "medium",
                                weight: "bolder"
                            }, v[0]), l.addTextBlock(e.content.tax, {
                                horizontalAlignment: "right"
                            }, v[1])
                        }
                        if (u(e.content.total)) {
                            var y = l.addColumnSet([75, 25]);
                            l.addTextBlock(t.format.strings.receiptTotal, {
                                size: "medium",
                                weight: "bolder"
                            }, y[0]), l.addTextBlock(e.content.total, {
                                horizontalAlignment: "right",
                                size: "medium",
                                weight: "bolder"
                            }, y[1])
                        }
                        return l.addButtons(e.content.buttons), o.createElement(s.AdaptiveCardContainer, {
                            className: "receipt",
                            card: l.card,
                            onCardAction: t.onCardAction,
                            onClick: n(e.content.tap)
                        });
                    case "application/vnd.microsoft.card.adaptive":
                        return e.content ? o.createElement(s.AdaptiveCardContainer, {
                            card: e.content,
                            onImageLoad: t.onImageLoad,
                            onCardAction: t.onCardAction
                        }) : null;
                    case "application/vnd.microsoft.card.flex":
                        return e.content ? o.createElement(s.AdaptiveCardContainer, {
                            className: "flex",
                            card: i.buildCommonCard(e.content),
                            onCardAction: t.onCardAction
                        }, function(e) {
                            return e && e.length > 0 && o.createElement(f, {
                                src: e[0].url,
                                onLoad: t.onImageLoad,
                                onClick: n(e[0].tap)
                            })
                        }(e.content.images)) : null;
                    case "image/png":
                    case "image/jpg":
                    case "image/jpeg":
                    case "image/gif":
                        return o.createElement(f, {
                            src: e.contentUrl,
                            onLoad: t.onImageLoad
                        });
                    case "audio/mpeg":
                    case "audio/mp4":
                        return o.createElement(f, {
                            type: "audio",
                            src: e.contentUrl
                        });
                    case "video/mp4":
                        return o.createElement(f, {
                            type: "video",
                            poster: e.thumbnailUrl,
                            src: e.contentUrl,
                            onLoad: t.onImageLoad
                        });
                    default:
                        var g = t.attachment;
                        return o.createElement(d, {
                            format: t.format,
                            contentType: g.contentType,
                            contentUrl: g.contentUrl,
                            name: g.name
                        })
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__rest || function(t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]]);
            return n
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(382),
            i = n(0);
        n(151), n(393), n(394), n(152), n(153), n(154), n(155), n(156), n(396), n(397), n(398), n(387), n(149), n(388), n(390), n(150), n(392);
        var s;
        ! function(t) {
            t[t.Uninitialized = 0] = "Uninitialized", t[t.Connecting = 1] = "Connecting", t[t.Online = 2] = "Online", t[t.ExpiredToken = 3] = "ExpiredToken", t[t.FailedToConnect = 4] = "FailedToConnect", t[t.Ended = 5] = "Ended"
        }(s = e.ConnectionStatus || (e.ConnectionStatus = {}));
        var a = new Error("expired token"),
            c = new Error("conversation ended"),
            u = new Error("failed to connect"),
            l = {
                log: function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    "undefined" != typeof window && window.botchatDebug && t && console.log.apply(console, [t].concat(e))
                }
            },
            p = function() {
                function t(t) {
                    this.connectionStatus$ = new o.BehaviorSubject(s.Uninitialized), this.domain = "https://directline.botframework.com/v3/directline", this.watermark = "", this.pollingInterval = 1e3, this.secret = t.secret, this.token = t.secret || t.token, this.webSocket = (void 0 === t.webSocket || t.webSocket) && "undefined" != typeof WebSocket && void 0 !== WebSocket, t.domain && (this.domain = t.domain), t.conversationId && (this.conversationId = t.conversationId), t.watermark && (this.webSocket ? console.warn("Watermark was ignored: it is not supported using websockets at the moment") : this.watermark = t.watermark), t.streamUrl && (t.token && t.conversationId ? this.streamUrl = t.streamUrl : console.warn("streamUrl was ignored: you need to provide a token and a conversationid")), void 0 !== t.pollingInterval && (this.pollingInterval = t.pollingInterval), this.activity$ = (this.webSocket ? this.webSocketActivity$() : this.pollingGetActivity$()).share()
                }
                return t.prototype.checkConnection = function(t) {
                    var e = this;
                    void 0 === t && (t = !1);
                    var n = this.connectionStatus$.flatMap(function(t) {
                        return t === s.Uninitialized ? (e.connectionStatus$.next(s.Connecting), e.token && e.streamUrl ? (e.connectionStatus$.next(s.Online), i.Observable.of(t)) : e.startConversation().do(function(t) {
                            e.conversationId = t.conversationId, e.token = e.secret || t.token, e.streamUrl = t.streamUrl, e.referenceGrammarId = t.referenceGrammarId, e.secret || e.refreshTokenLoop(), e.connectionStatus$.next(s.Online)
                        }, function(t) {
                            e.connectionStatus$.next(s.FailedToConnect)
                        }).map(function(e) {
                            return t
                        })) : i.Observable.of(t)
                    }).filter(function(t) {
                        return t != s.Uninitialized && t != s.Connecting
                    }).flatMap(function(t) {
                        switch (t) {
                            case s.Ended:
                                return i.Observable.throw(c);
                            case s.FailedToConnect:
                                return i.Observable.throw(u);
                            case s.ExpiredToken:
                                return i.Observable.throw(a);
                            default:
                                return i.Observable.of(null)
                        }
                    });
                    return t ? n.take(1) : n
                }, t.prototype.expiredToken = function() {
                    var t = this.connectionStatus$.getValue();
                    t != s.Ended && t != s.FailedToConnect && this.connectionStatus$.next(s.ExpiredToken)
                }, t.prototype.startConversation = function() {
                    var t = this.conversationId ? this.domain + "/conversations/" + this.conversationId + "?watermark=" + this.watermark : this.domain + "/conversations",
                        e = this.conversationId ? "GET" : "POST";
                    return i.Observable.ajax({
                        method: e,
                        url: t,
                        timeout: 2e4,
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + this.token
                        }
                    }).map(function(t) {
                        return t.response
                    }).retryWhen(function(t) {
                        return t.mergeMap(function(t) {
                            return t.status >= 400 && t.status < 600 ? i.Observable.throw(t) : i.Observable.of(t)
                        }).delay(2e4).take(45)
                    })
                }, t.prototype.refreshTokenLoop = function() {
                    var t = this;
                    this.tokenRefreshSubscription = i.Observable.interval(9e5).flatMap(function(e) {
                        return t.refreshToken()
                    }).subscribe(function(e) {
                        l.log("refreshing token", e, "at", new Date), t.token = e
                    })
                }, t.prototype.refreshToken = function() {
                    var t = this;
                    return this.checkConnection(!0).flatMap(function(e) {
                        return i.Observable.ajax({
                            method: "POST",
                            url: t.domain + "/tokens/refresh",
                            timeout: 2e4,
                            headers: {
                                Authorization: "Bearer " + t.token
                            }
                        }).map(function(t) {
                            return t.response.token
                        }).retryWhen(function(e) {
                            return e.mergeMap(function(e) {
                                return 403 === e.status ? (t.expiredToken(), i.Observable.throw(e)) : i.Observable.of(e)
                            }).delay(2e4).take(45)
                        })
                    })
                }, t.prototype.reconnect = function(t) {
                    this.token = t.token, this.streamUrl = t.streamUrl, this.connectionStatus$.getValue() === s.ExpiredToken && this.connectionStatus$.next(s.Online)
                }, t.prototype.end = function() {
                    this.tokenRefreshSubscription && this.tokenRefreshSubscription.unsubscribe(), this.connectionStatus$.next(s.Ended)
                }, t.prototype.postActivity = function(t) {
                    var e = this;
                    return "message" === t.type && t.attachments && t.attachments.length > 0 ? this.postMessageWithAttachments(t) : (l.log("postActivity", t), this.checkConnection(!0).flatMap(function(n) {
                        return i.Observable.ajax({
                            method: "POST",
                            url: e.domain + "/conversations/" + e.conversationId + "/activities",
                            body: t,
                            timeout: 2e4,
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + e.token
                            }
                        }).map(function(t) {
                            return t.response.id
                        }).catch(function(t) {
                            return e.catchPostError(t)
                        })
                    }).catch(function(t) {
                        return e.catchExpiredToken(t)
                    }))
                }, t.prototype.postMessageWithAttachments = function(t) {
                    var e, n = this,
                        o = t.attachments,
                        s = r(t, ["attachments"]);
                    return this.checkConnection(!0).flatMap(function(t) {
                        return e = new FormData, e.append("activity", new Blob([JSON.stringify(s)], {
                            type: "application/vnd.microsoft.activity"
                        })), i.Observable.from(o || []).flatMap(function(t) {
                            return i.Observable.ajax({
                                method: "GET",
                                url: t.contentUrl,
                                responseType: "arraybuffer"
                            }).do(function(n) {
                                return e.append("file", new Blob([n.response], {
                                    type: t.contentType
                                }), t.name)
                            })
                        }).count()
                    }).flatMap(function(t) {
                        return i.Observable.ajax({
                            method: "POST",
                            url: n.domain + "/conversations/" + n.conversationId + "/upload?userId=" + s.from.id,
                            body: e,
                            timeout: 2e4,
                            headers: {
                                Authorization: "Bearer " + n.token
                            }
                        }).map(function(t) {
                            return t.response.id
                        }).catch(function(t) {
                            return n.catchPostError(t)
                        })
                    }).catch(function(t) {
                        return n.catchPostError(t)
                    })
                }, t.prototype.catchPostError = function(t) {
                    if (403 === t.status) this.expiredToken();
                    else if (t.status >= 400 && t.status < 500) return i.Observable.throw(t);
                    return i.Observable.of("retry")
                }, t.prototype.catchExpiredToken = function(t) {
                    return t === a ? i.Observable.of("retry") : i.Observable.throw(t)
                }, t.prototype.pollingGetActivity$ = function() {
                    var t = this;
                    return i.Observable.interval(this.pollingInterval).combineLatest(this.checkConnection()).flatMap(function(e) {
                        return i.Observable.ajax({
                            method: "GET",
                            url: t.domain + "/conversations/" + t.conversationId + "/activities?watermark=" + t.watermark,
                            timeout: 2e4,
                            headers: {
                                Accept: "application/json",
                                Authorization: "Bearer " + t.token
                            }
                        }).catch(function(e) {
                            return 403 === e.status && t.expiredToken(), i.Observable.empty()
                        }).map(function(t) {
                            return t.response
                        }).flatMap(function(e) {
                            return t.observableFromActivityGroup(e)
                        })
                    }).catch(function(t) {
                        return i.Observable.empty()
                    })
                }, t.prototype.observableFromActivityGroup = function(t) {
                    return t.watermark && (this.watermark = t.watermark), i.Observable.from(t.activities)
                }, t.prototype.webSocketActivity$ = function() {
                    var t = this;
                    return this.checkConnection().flatMap(function(e) {
                        return t.observableWebSocket().retryWhen(function(e) {
                            return e.mergeMap(function(e) {
                                return t.reconnectToConversation()
                            })
                        })
                    }).flatMap(function(e) {
                        return t.observableFromActivityGroup(e)
                    })
                }, t.prototype.observableWebSocket = function() {
                    var t = this;
                    return i.Observable.create(function(e) {
                        l.log("creating WebSocket", t.streamUrl);
                        var n, r = new WebSocket(t.streamUrl);
                        return r.onopen = function(t) {
                                l.log("WebSocket open", t), n = i.Observable.interval(2e4).subscribe(function(t) {
                                    return r.send(null)
                                })
                            }, r.onclose = function(t) {
                                l.log("WebSocket close", t), n && n.unsubscribe(), e.error(t)
                            }, r.onmessage = function(t) {
                                return t.data && e.next(JSON.parse(t.data))
                            },
                            function() {
                                0 !== r.readyState && 1 !== r.readyState || r.close()
                            }
                    })
                }, t.prototype.reconnectToConversation = function() {
                    var t = this;
                    return this.checkConnection(!0).flatMap(function(e) {
                        return i.Observable.ajax({
                            method: "GET",
                            url: t.domain + "/conversations/" + t.conversationId + "?watermark=" + t.watermark,
                            timeout: 2e4,
                            headers: {
                                Accept: "application/json",
                                Authorization: "Bearer " + t.token
                            }
                        }).do(function(e) {
                            t.secret || (t.token = e.response.token), t.streamUrl = e.response.streamUrl
                        }).map(function(t) {
                            return null
                        }).retryWhen(function(e) {
                            return e.mergeMap(function(e) {
                                return 403 === e.status && t.expiredToken(), i.Observable.of(e)
                            }).delay(2e4).take(45)
                        })
                    })
                }, t
            }();
        e.DirectLine = p
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        t.exports = !n(93)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(30),
            o = n(90),
            i = n(57),
            s = n(201),
            a = n(91),
            c = function(t, e, n) {
                var u, l, p, h, f = t & c.F,
                    d = t & c.G,
                    m = t & c.S,
                    v = t & c.P,
                    y = t & c.B,
                    g = d ? r : m ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = d ? o : o[e] || (o[e] = {}),
                    _ = b.prototype || (b.prototype = {});
                d && (n = e);
                for (u in n) l = !f && g && void 0 !== g[u], p = (l ? g : n)[u], h = y && l ? a(p, r) : v && "function" == typeof p ? a(Function.call, p) : p, g && s(g, u, p, t & c.U), b[u] != p && i(b, u, h), v && _[u] != p && (_[u] = p)
            };
        r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function(t, e, n) {
        var r = n(199),
            o = n(200);
        t.exports = n(55) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
        }

        function o(t, e) {
            if (r(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var s = 0; s < n.length; s++)
                if (!i.call(e, n[s]) || !r(t[n[s]], e[n[s]])) return !1;
            return !0
        }
        var i = Object.prototype.hasOwnProperty;
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (!n.i(s.a)(t) || n.i(o.a)(t) != a) return !1;
            var e = n.i(i.a)(t);
            if (null === e) return !0;
            var r = p.call(e, "constructor") && e.constructor;
            return "function" == typeof r && r instanceof r && l.call(r) == h
        }
        var o = n(226),
            i = n(228),
            s = n(233),
            a = "[object Object]",
            c = Function.prototype,
            u = Object.prototype,
            l = c.toString,
            p = u.hasOwnProperty,
            h = l.call(Object);
        e.a = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.__rules__ = [], this.__cache__ = null
        }
        r.prototype.__find__ = function(t) {
            for (var e = 0; e < this.__rules__.length; e++)
                if (this.__rules__[e].name === t) return e;
            return -1
        }, r.prototype.__compile__ = function() {
            var t = this,
                e = [""];
            t.__rules__.forEach(function(t) {
                t.enabled && t.alt.forEach(function(t) {
                    e.indexOf(t) < 0 && e.push(t)
                })
            }), t.__cache__ = {}, e.forEach(function(e) {
                t.__cache__[e] = [], t.__rules__.forEach(function(n) {
                    n.enabled && (e && n.alt.indexOf(e) < 0 || t.__cache__[e].push(n.fn))
                })
            })
        }, r.prototype.at = function(t, e, n) {
            var r = this.__find__(t),
                o = n || {};
            if (-1 === r) throw new Error("Parser rule not found: " + t);
            this.__rules__[r].fn = e, this.__rules__[r].alt = o.alt || [], this.__cache__ = null
        }, r.prototype.before = function(t, e, n, r) {
            var o = this.__find__(t),
                i = r || {};
            if (-1 === o) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(o, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: i.alt || []
            }), this.__cache__ = null
        }, r.prototype.after = function(t, e, n, r) {
            var o = this.__find__(t),
                i = r || {};
            if (-1 === o) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(o + 1, 0, {
                name: e,
                enabled: !0,
                fn: n,
                alt: i.alt || []
            }), this.__cache__ = null
        }, r.prototype.push = function(t, e, n) {
            var r = n || {};
            this.__rules__.push({
                name: t,
                enabled: !0,
                fn: e,
                alt: r.alt || []
            }), this.__cache__ = null
        }, r.prototype.enable = function(t, e) {
            Array.isArray(t) || (t = [t]);
            var n = [];
            return t.forEach(function(t) {
                var r = this.__find__(t);
                if (r < 0) {
                    if (e) return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[r].enabled = !0, n.push(t)
            }, this), this.__cache__ = null, n
        }, r.prototype.enableOnly = function(t, e) {
            Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(t) {
                t.enabled = !1
            }), this.enable(t, e)
        }, r.prototype.disable = function(t, e) {
            Array.isArray(t) || (t = [t]);
            var n = [];
            return t.forEach(function(t) {
                var r = this.__find__(t);
                if (r < 0) {
                    if (e) return;
                    throw new Error("Rules manager: invalid rule name " + t)
                }
                this.__rules__[r].enabled = !1, n.push(t)
            }, this), this.__cache__ = null, n
        }, r.prototype.getRules = function(t) {
            return null === this.__cache__ && this.__compile__(), this.__cache__[t] || []
        }, t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
        }
        r.prototype.attrIndex = function(t) {
            var e, n, r;
            if (!this.attrs) return -1;
            for (e = this.attrs, n = 0, r = e.length; n < r; n++)
                if (e[n][0] === t) return n;
            return -1
        }, r.prototype.attrPush = function(t) {
            this.attrs ? this.attrs.push(t) : this.attrs = [t]
        }, r.prototype.attrSet = function(t, e) {
            var n = this.attrIndex(t),
                r = [t, e];
            n < 0 ? this.attrPush(r) : this.attrs[n] = r
        }, r.prototype.attrGet = function(t) {
            var e = this.attrIndex(t),
                n = null;
            return e >= 0 && (n = this.attrs[e][1]), n
        }, r.prototype.attrJoin = function(t, e) {
            var n = this.attrIndex(t);
            n < 0 ? this.attrPush([t, e]) : this.attrs[n][1] = this.attrs[n][1] + " " + e
        }, t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Array.isArray(e) && (e = e[1]), e ? e.nextSibling : t.firstChild
        }

        function o(t, e, n) {
            l.insertTreeBefore(t, e, n)
        }

        function i(t, e, n) {
            Array.isArray(e) ? a(t, e[0], e[1], n) : m(t, e, n)
        }

        function s(t, e) {
            if (Array.isArray(e)) {
                var n = e[1];
                e = e[0], c(t, e, n), t.removeChild(n)
            }
            t.removeChild(e)
        }

        function a(t, e, n, r) {
            for (var o = e;;) {
                var i = o.nextSibling;
                if (m(t, o, r), o === n) break;
                o = i
            }
        }

        function c(t, e, n) {
            for (;;) {
                var r = e.nextSibling;
                if (r === n) break;
                t.removeChild(r)
            }
        }

        function u(t, e, n) {
            var r = t.parentNode,
                o = t.nextSibling;
            o === e ? n && m(r, document.createTextNode(n), o) : n ? (d(o, n), c(r, o, e)) : c(r, t, e)
        }
        var l = n(22),
            p = n(296),
            h = (n(6), n(12), n(71)),
            f = n(47),
            d = n(131),
            m = h(function(t, e, n) {
                t.insertBefore(e, n)
            }),
            v = p.dangerouslyReplaceNodeWithMarkup,
            y = {
                dangerouslyReplaceNodeWithMarkup: v,
                replaceDelimitedText: u,
                processUpdates: function(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        switch (a.type) {
                            case "INSERT_MARKUP":
                                o(t, a.content, r(t, a.afterNode));
                                break;
                            case "MOVE_EXISTING":
                                i(t, a.fromNode, r(t, a.afterNode));
                                break;
                            case "SET_MARKUP":
                                f(t, a.content);
                                break;
                            case "TEXT_CONTENT":
                                d(t, a.content);
                                break;
                            case "REMOVE_NODE":
                                s(t, a.fromNode)
                        }
                    }
                }
            };
        t.exports = y
    }, function(t, e, n) {
        "use strict";
        var r = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            if (a)
                for (var t in c) {
                    var e = c[t],
                        n = a.indexOf(t);
                    if (n > -1 || s("96", t), !u.plugins[n]) {
                        e.extractEvents || s("97", t), u.plugins[n] = e;
                        var r = e.eventTypes;
                        for (var i in r) o(r[i], e, i) || s("98", i, t)
                    }
                }
        }

        function o(t, e, n) {
            u.eventNameDispatchConfigs.hasOwnProperty(n) && s("99", n), u.eventNameDispatchConfigs[n] = t;
            var r = t.phasedRegistrationNames;
            if (r) {
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var a = r[o];
                        i(a, e, n)
                    } return !0
            }
            return !!t.registrationName && (i(t.registrationName, e, n), !0)
        }

        function i(t, e, n) {
            u.registrationNameModules[t] && s("100", t), u.registrationNameModules[t] = e, u.registrationNameDependencies[t] = e.eventTypes[n].dependencies
        }
        var s = n(4),
            a = (n(1), null),
            c = {},
            u = {
                plugins: [],
                eventNameDispatchConfigs: {},
                registrationNameModules: {},
                registrationNameDependencies: {},
                possibleRegistrationNames: null,
                injectEventPluginOrder: function(t) {
                    a && s("101"), a = Array.prototype.slice.call(t), r()
                },
                injectEventPluginsByName: function(t) {
                    var e = !1;
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var o = t[n];
                            c.hasOwnProperty(n) && c[n] === o || (c[n] && s("102", n), c[n] = o, e = !0)
                        } e && r()
                },
                getPluginModuleForEvent: function(t) {
                    var e = t.dispatchConfig;
                    if (e.registrationName) return u.registrationNameModules[e.registrationName] || null;
                    if (void 0 !== e.phasedRegistrationNames) {
                        var n = e.phasedRegistrationNames;
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                var o = u.registrationNameModules[n[r]];
                                if (o) return o
                            }
                    }
                    return null
                },
                _resetEventPlugins: function() {
                    a = null;
                    for (var t in c) c.hasOwnProperty(t) && delete c[t];
                    u.plugins.length = 0;
                    var e = u.eventNameDispatchConfigs;
                    for (var n in e) e.hasOwnProperty(n) && delete e[n];
                    var r = u.registrationNameModules;
                    for (var o in r) r.hasOwnProperty(o) && delete r[o]
                }
            };
        t.exports = u
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "topMouseUp" === t || "topTouchEnd" === t || "topTouchCancel" === t
        }

        function o(t) {
            return "topMouseMove" === t || "topTouchMove" === t
        }

        function i(t) {
            return "topMouseDown" === t || "topTouchStart" === t
        }

        function s(t, e, n, r) {
            var o = t.type || "unknown-event";
            t.currentTarget = y.getNodeFromInstance(r), e ? m.invokeGuardedCallbackWithCatch(o, n, t) : m.invokeGuardedCallback(o, n, t), t.currentTarget = null
        }

        function a(t, e) {
            var n = t._dispatchListeners,
                r = t._dispatchInstances;
            if (Array.isArray(n))
                for (var o = 0; o < n.length && !t.isPropagationStopped(); o++) s(t, e, n[o], r[o]);
            else n && s(t, e, n, r);
            t._dispatchListeners = null, t._dispatchInstances = null
        }

        function c(t) {
            var e = t._dispatchListeners,
                n = t._dispatchInstances;
            if (Array.isArray(e)) {
                for (var r = 0; r < e.length && !t.isPropagationStopped(); r++)
                    if (e[r](t, n[r])) return n[r]
            } else if (e && e(t, n)) return n;
            return null
        }

        function u(t) {
            var e = c(t);
            return t._dispatchInstances = null, t._dispatchListeners = null, e
        }

        function l(t) {
            var e = t._dispatchListeners,
                n = t._dispatchInstances;
            Array.isArray(e) && d("103"), t.currentTarget = e ? y.getNodeFromInstance(n) : null;
            var r = e ? e(t) : null;
            return t.currentTarget = null, t._dispatchListeners = null, t._dispatchInstances = null, r
        }

        function p(t) {
            return !!t._dispatchListeners
        }
        var h, f, d = n(4),
            m = n(69),
            v = (n(1), n(3), {
                injectComponentTree: function(t) {
                    h = t
                },
                injectTreeTraversal: function(t) {
                    f = t
                }
            }),
            y = {
                isEndish: r,
                isMoveish: o,
                isStartish: i,
                executeDirectDispatch: l,
                executeDispatchesInOrder: a,
                executeDispatchesInOrderStopAtTrue: u,
                hasDispatches: p,
                getInstanceFromNode: function(t) {
                    return h.getInstanceFromNode(t)
                },
                getNodeFromInstance: function(t) {
                    return h.getNodeFromInstance(t)
                },
                isAncestor: function(t, e) {
                    return f.isAncestor(t, e)
                },
                getLowestCommonAncestor: function(t, e) {
                    return f.getLowestCommonAncestor(t, e)
                },
                getParentInstance: function(t) {
                    return f.getParentInstance(t)
                },
                traverseTwoPhase: function(t, e, n) {
                    return f.traverseTwoPhase(t, e, n)
                },
                traverseEnterLeave: function(t, e, n, r, o) {
                    return f.traverseEnterLeave(t, e, n, r, o)
                },
                injection: v
            };
        t.exports = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, function(t) {
                return e[t]
            })
        }

        function o(t) {
            var e = /(=0|=2)/g,
                n = {
                    "=0": "=",
                    "=2": ":"
                };
            return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function(t) {
                return n[t]
            })
        }
        var i = {
            escape: r,
            unescape: o
        };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            null != t.checkedLink && null != t.valueLink && a("87")
        }

        function o(t) {
            r(t), (null != t.value || null != t.onChange) && a("88")
        }

        function i(t) {
            r(t), (null != t.checked || null != t.onChange) && a("89")
        }

        function s(t) {
            if (t) {
                var e = t.getName();
                if (e) return " Check the render method of `" + e + "`."
            }
            return ""
        }
        var a = n(4),
            c = n(325),
            u = n(109),
            l = n(25),
            p = u(l.isValidElement),
            h = (n(1), n(3), {
                button: !0,
                checkbox: !0,
                image: !0,
                hidden: !0,
                radio: !0,
                reset: !0,
                submit: !0
            }),
            f = {
                value: function(t, e, n) {
                    return !t[e] || h[t.type] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
                },
                checked: function(t, e, n) {
                    return !t[e] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
                },
                onChange: p.func
            },
            d = {},
            m = {
                checkPropTypes: function(t, e, n) {
                    for (var r in f) {
                        if (f.hasOwnProperty(r)) var o = f[r](e, r, t, "prop", null, c);
                        if (o instanceof Error && !(o.message in d)) {
                            d[o.message] = !0;
                            s(n)
                        }
                    }
                },
                getValue: function(t) {
                    return t.valueLink ? (o(t), t.valueLink.value) : t.value
                },
                getChecked: function(t) {
                    return t.checkedLink ? (i(t), t.checkedLink.value) : t.checked
                },
                executeOnChange: function(t, e) {
                    return t.valueLink ? (o(t), t.valueLink.requestChange(e.target.value)) : t.checkedLink ? (i(t), t.checkedLink.requestChange(e.target.checked)) : t.onChange ? t.onChange.call(void 0, e) : void 0
                }
            };
        t.exports = m
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = (n(1), !1),
            i = {
                replaceNodeWithMarkup: null,
                processChildrenUpdates: null,
                injection: {
                    injectEnvironment: function(t) {
                        o && r("104"), i.replaceNodeWithMarkup = t.replaceNodeWithMarkup, i.processChildrenUpdates = t.processChildrenUpdates, o = !0
                    }
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            try {
                e(n)
            } catch (t) {
                null === o && (o = t)
            }
        }
        var o = null,
            i = {
                invokeGuardedCallback: r,
                invokeGuardedCallbackWithCatch: r,
                rethrowCaughtError: function() {
                    if (o) {
                        var t = o;
                        throw o = null, t
                    }
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            c.enqueueUpdate(t)
        }

        function o(t) {
            var e = typeof t;
            if ("object" !== e) return e;
            var n = t.constructor && t.constructor.name || e,
                r = Object.keys(t);
            return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
        }

        function i(t, e) {
            var n = a.get(t);
            if (!n) {
                return null
            }
            return n
        }
        var s = n(4),
            a = (n(15), n(34)),
            c = (n(12), n(13)),
            u = (n(1), n(3), {
                isMounted: function(t) {
                    var e = a.get(t);
                    return !!e && !!e._renderedComponent
                },
                enqueueCallback: function(t, e, n) {
                    u.validateCallback(e, n);
                    var o = i(t);
                    if (!o) return null;
                    o._pendingCallbacks ? o._pendingCallbacks.push(e) : o._pendingCallbacks = [e], r(o)
                },
                enqueueCallbackInternal: function(t, e) {
                    t._pendingCallbacks ? t._pendingCallbacks.push(e) : t._pendingCallbacks = [e], r(t)
                },
                enqueueForceUpdate: function(t) {
                    var e = i(t, "forceUpdate");
                    e && (e._pendingForceUpdate = !0, r(e))
                },
                enqueueReplaceState: function(t, e, n) {
                    var o = i(t, "replaceState");
                    o && (o._pendingStateQueue = [e], o._pendingReplaceState = !0, void 0 !== n && null !== n && (u.validateCallback(n, "replaceState"), o._pendingCallbacks ? o._pendingCallbacks.push(n) : o._pendingCallbacks = [n]), r(o))
                },
                enqueueSetState: function(t, e) {
                    var n = i(t, "setState");
                    if (n) {
                        (n._pendingStateQueue || (n._pendingStateQueue = [])).push(e), r(n)
                    }
                },
                enqueueElementInternal: function(t, e, n) {
                    t._pendingElement = e, t._context = n, r(t)
                },
                validateCallback: function(t, e) {
                    t && "function" != typeof t && s("122", e, o(t))
                }
            });
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        var r = function(t) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return t(e, n, r, o)
                })
            } : t
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n = t.keyCode;
            return "charCode" in t ? 0 === (e = t.charCode) && 13 === n && (e = 13) : e = n, e >= 32 || 13 === e ? e : 0
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = this,
                n = e.nativeEvent;
            if (n.getModifierState) return n.getModifierState(t);
            var r = i[t];
            return !!r && !!n[r]
        }

        function o(t) {
            return r
        }
        var i = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.target || t.srcElement || window;
            return e.correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @param {?boolean} capture Check if the capture phase is supported.
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */
        function r(t, e) {
            if (!i.canUseDOM || e && !("addEventListener" in document)) return !1;
            var n = "on" + t,
                r = n in document;
            if (!r) {
                var s = document.createElement("div");
                s.setAttribute(n, "return;"), r = "function" == typeof s[n]
            }
            return !r && o && "wheel" === t && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
        }
        var o, i = n(7);
        i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = null === t || !1 === t,
                r = null === e || !1 === e;
            if (n || r) return n === r;
            var o = typeof t,
                i = typeof e;
            return "string" === o || "number" === o ? "string" === i || "number" === i : "object" === i && t.type === e.type && t.key === e.key
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = (n(5), n(10)),
            o = (n(3), r);
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t)
            } catch (t) {}
        }
        e.a = r
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(145),
            o = n(380),
            i = n(379),
            s = n(378),
            a = n(144);
        n(146);
        n.d(e, "createStore", function() {
            return r.b
        }), n.d(e, "combineReducers", function() {
            return o.a
        }), n.d(e, "bindActionCreators", function() {
            return i.a
        }), n.d(e, "applyMiddleware", function() {
            return s.a
        }), n.d(e, "compose", function() {
            return a.a
        })
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return this.lift(new s(t, e))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8);
        e.map = r;
        var s = function() {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new a(t, this.project, this.thisArg))
            }, t
        }();
        e.MapOperator = s;
        var a = function(t) {
            function e(e, n, r) {
                t.call(this, e), this.project = n, this.count = 0, this.thisArg = r || this
            }
            return o(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(i.Subscriber)
    }, function(t, e, n) {
        "use strict";
        var r = n(433),
            o = n(434);
        e.async = new o.AsyncScheduler(r.AsyncAction)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.Symbol;
            if ("function" == typeof e) return e.iterator || (e.iterator = e("iterator polyfill")), e.iterator;
            var n = t.Set;
            if (n && "function" == typeof(new n)["@@iterator"]) return "@@iterator";
            var r = t.Map;
            if (r)
                for (var o = Object.getOwnPropertyNames(r.prototype), i = 0; i < o.length; ++i) {
                    var s = o[i];
                    if ("entries" !== s && "size" !== s && r.prototype[s] === r.prototype.entries) return s
                }
            return "@@iterator"
        }
        var o = n(16);
        e.symbolIteratorPonyfill = r, e.iterator = r(o.root), e.$$iterator = e.iterator
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
        }
        var o = n(16);
        e.getSymbolObservable = r, e.observable = r(o.root), e.$$observable = e.observable
    }, function(t, e, n) {
        "use strict";
        var r = n(16),
            o = r.root.Symbol;
        e.rxSubscriber = "function" == typeof o && "function" == typeof o.for ? o.for("rxSubscriber") : "@@rxSubscriber", e.$$rxSubscriber = e.rxSubscriber
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t
        }
        e.isFunction = r
    }, function(t, e) {
        t.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(0);
        n(389), n(391);
        var s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return r.__extends(e, t), e.prototype.clearScrollTimers = function() {
                clearInterval(this.scrollStartTimer), clearInterval(this.scrollSyncTimer), clearTimeout(this.scrollDurationTimer), document.body.removeChild(this.animateDiv), this.animateDiv = null, this.scrollStartTimer = null, this.scrollSyncTimer = null, this.scrollDurationTimer = null
            }, e.prototype.updateScrollButtons = function() {
                this.prevButton.disabled = !this.scrollDiv || Math.round(this.scrollDiv.scrollLeft) <= 0, this.nextButton.disabled = !this.scrollDiv || Math.round(this.scrollDiv.scrollLeft) >= Math.round(this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth)
            }, e.prototype.componentDidMount = function() {
                var t = this;
                this.scrollDiv.style.marginBottom = -(this.scrollDiv.offsetHeight - this.scrollDiv.clientHeight) + "px", this.scrollSubscription = i.Observable.fromEvent(this.scrollDiv, "scroll").subscribe(function(e) {
                    t.updateScrollButtons()
                }), this.clickSubscription = i.Observable.merge(i.Observable.fromEvent(this.prevButton, "click").map(function(t) {
                    return -1
                }), i.Observable.fromEvent(this.nextButton, "click").map(function(t) {
                    return 1
                })).subscribe(function(e) {
                    t.scrollBy(e)
                }), this.updateScrollButtons()
            }, e.prototype.componentDidUpdate = function() {
                this.scrollDiv.scrollLeft = 0, this.updateScrollButtons()
            }, e.prototype.componentWillUnmount = function() {
                this.scrollSubscription.unsubscribe(), this.clickSubscription.unsubscribe()
            }, e.prototype.scrollAmount = function(t) {
                if ("item" == this.props.scrollUnit) {
                    var e = this.scrollDiv.querySelector("ul > li");
                    return e ? t * e.offsetWidth : 0
                }
                return t * (this.scrollDiv.offsetWidth - 70)
            }, e.prototype.scrollBy = function(t) {
                var e = this,
                    n = "wc-animate-scroll";
                this.animateDiv && (n = "wc-animate-scroll-rapid", this.clearScrollTimers());
                var r = this.scrollAmount(t),
                    o = this.scrollDiv.scrollLeft,
                    i = o + r;
                i = Math.max(i, 0), i = Math.min(i, this.scrollDiv.scrollWidth - this.scrollDiv.offsetWidth), o != i && (Math.abs(i - o) < 60 && (n = "wc-animate-scroll-near"), this.animateDiv = document.createElement("div"), this.animateDiv.className = n, this.animateDiv.style.left = o + "px", document.body.appendChild(this.animateDiv), this.scrollSyncTimer = window.setInterval(function() {
                    var t = parseFloat(getComputedStyle(e.animateDiv).left);
                    e.scrollDiv.scrollLeft = t
                }, 1), this.scrollStartTimer = window.setTimeout(function() {
                    e.animateDiv.style.left = i + "px";
                    var t = 1e3 * parseFloat(getComputedStyle(e.animateDiv).transitionDuration);
                    t ? (t += 50, e.scrollDurationTimer = window.setTimeout(function() {
                        return e.clearScrollTimers()
                    }, t)) : e.clearScrollTimers()
                }, 1))
            }, e.prototype.render = function() {
                var t = this;
                return o.createElement("div", null, o.createElement("button", {
                    ref: function(e) {
                        return t.prevButton = e
                    },
                    className: "scroll previous",
                    disabled: !0
                }, o.createElement("svg", null, o.createElement("path", {
                    d: this.props.prevSvgPathData
                }))), o.createElement("div", {
                    className: "wc-hscroll-outer"
                }, o.createElement("div", {
                    className: "wc-hscroll",
                    ref: function(e) {
                        return t.scrollDiv = e
                    }
                }, this.props.children)), o.createElement("button", {
                    ref: function(e) {
                        return t.nextButton = e
                    },
                    className: "scroll next",
                    disabled: !0
                }, o.createElement("svg", null, o.createElement("path", {
                    d: this.props.nextSvgPathData
                }))))
            }, e
        }(o.Component);
        e.HScroll = s
    }, function(t, e, n) {
        var r = n(41)("unscopables"),
            o = Array.prototype;
        void 0 == o[r] && n(57)(o, r, {}), t.exports = function(t) {
            o[r][t] = !0
        }
    }, function(t, e, n) {
        var r = n(91),
            o = n(196),
            i = n(205),
            s = n(94),
            a = n(191);
        t.exports = function(t, e) {
            var n = 1 == t,
                c = 2 == t,
                u = 3 == t,
                l = 4 == t,
                p = 6 == t,
                h = 5 == t || p,
                f = e || a;
            return function(e, a, d) {
                for (var m, v, y = i(e), g = o(y), b = r(a, d, 3), _ = s(g.length), C = 0, w = n ? f(e, _) : c ? f(e, 0) : void 0; _ > C; C++)
                    if ((h || C in g) && (m = g[C], v = b(m, C, y), t))
                        if (n) w[C] = v;
                        else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return m;
                    case 6:
                        return C;
                    case 2:
                        w.push(m)
                } else if (l) return !1;
                return p ? -1 : u || l ? l : w
            }
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(188);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var r = n(204),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = {
                listen: function(t, e, n) {
                    return t.addEventListener ? (t.addEventListener(e, n, !1), {
                        remove: function() {
                            t.removeEventListener(e, n, !1)
                        }
                    }) : t.attachEvent ? (t.attachEvent("on" + e, n), {
                        remove: function() {
                            t.detachEvent("on" + e, n)
                        }
                    }) : void 0
                },
                capture: function(t, e, n) {
                    return t.addEventListener ? (t.addEventListener(e, n, !0), {
                        remove: function() {
                            t.removeEventListener(e, n, !0)
                        }
                    }) : {
                        remove: r
                    }
                },
                registerDefault: function() {}
            };
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            try {
                t.focus()
            } catch (t) {}
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return t.activeElement || t.body
            } catch (e) {
                return t.body
            }
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(232),
            o = r.a.Symbol;
        e.a = o
    }, function(t, e, n) {
        "use strict";
        t.exports = n(239)
    }, function(t, e, n) {
        "use strict";
        t.exports = n(208)
    }, function(t, e, n) {
        "use strict";
        var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
            o = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
            i = new RegExp("^(?:" + r + "|" + o + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
            s = new RegExp("^(?:" + r + "|" + o + ")");
        t.exports.HTML_TAG_RE = i, t.exports.HTML_OPEN_CLOSE_TAG_RE = s
    }, function(t, e, n) {
        "use strict";
        t.exports.tokenize = function(t, e) {
            var n, r, o, i = t.pos,
                s = t.src.charCodeAt(i);
            if (e) return !1;
            if (95 !== s && 42 !== s) return !1;
            for (r = t.scanDelims(t.pos, 42 === s), n = 0; n < r.length; n++) o = t.push("text", "", 0), o.content = String.fromCharCode(s), t.delimiters.push({
                marker: s,
                length: r.length,
                jump: n,
                token: t.tokens.length - 1,
                level: t.level,
                end: -1,
                open: r.can_open,
                close: r.can_close
            });
            return t.pos += r.length, !0
        }, t.exports.postProcess = function(t) {
            var e, n, r, o, i, s, a = t.delimiters,
                c = t.delimiters.length;
            for (e = 0; e < c; e++) n = a[e], 95 !== n.marker && 42 !== n.marker || -1 !== n.end && (r = a[n.end], s = e + 1 < c && a[e + 1].end === n.end - 1 && a[e + 1].token === n.token + 1 && a[n.end - 1].token === r.token - 1 && a[e + 1].marker === n.marker, i = String.fromCharCode(n.marker), o = t.tokens[n.token], o.type = s ? "strong_open" : "em_open", o.tag = s ? "strong" : "em", o.nesting = 1, o.markup = s ? i + i : i, o.content = "", o = t.tokens[r.token], o.type = s ? "strong_close" : "em_close", o.tag = s ? "strong" : "em", o.nesting = -1, o.markup = s ? i + i : i, o.content = "", s && (t.tokens[a[e + 1].token].content = "", t.tokens[a[n.end - 1].token].content = "", e++))
        }
    }, function(t, e, n) {
        "use strict";
        t.exports.tokenize = function(t, e) {
            var n, r, o, i, s, a = t.pos,
                c = t.src.charCodeAt(a);
            if (e) return !1;
            if (126 !== c) return !1;
            if (r = t.scanDelims(t.pos, !0), i = r.length, s = String.fromCharCode(c), i < 2) return !1;
            for (i % 2 && (o = t.push("text", "", 0), o.content = s, i--), n = 0; n < i; n += 2) o = t.push("text", "", 0), o.content = s + s, t.delimiters.push({
                marker: c,
                jump: n,
                token: t.tokens.length - 1,
                level: t.level,
                end: -1,
                open: r.can_open,
                close: r.can_close
            });
            return t.pos += r.length, !0
        }, t.exports.postProcess = function(t) {
            var e, n, r, o, i, s = [],
                a = t.delimiters,
                c = t.delimiters.length;
            for (e = 0; e < c; e++) r = a[e], 126 === r.marker && -1 !== r.end && (o = a[r.end], i = t.tokens[r.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = t.tokens[o.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === t.tokens[o.token - 1].type && "~" === t.tokens[o.token - 1].content && s.push(o.token - 1));
            for (; s.length;) {
                for (e = s.pop(), n = e + 1; n < t.tokens.length && "s_close" === t.tokens[n].type;) n++;
                n--, e !== n && (i = t.tokens[n], t.tokens[n] = t.tokens[e], t.tokens[e] = i)
            }
        }
    }, function(t, e, n) {
        "use strict";
        t.exports.encode = n(279), t.exports.decode = n(278), t.exports.format = n(280), t.exports.parse = n(281)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            t[t.ActionTypeNotAllowed = 0] = "ActionTypeNotAllowed", t[t.CollectionCantBeEmpty = 1] = "CollectionCantBeEmpty", t[t.ElementTypeNotAllowed = 2] = "ElementTypeNotAllowed", t[t.InteractivityNotAllowed = 3] = "InteractivityNotAllowed", t[t.InvalidPropertyValue = 4] = "InvalidPropertyValue", t[t.MissingCardType = 5] = "MissingCardType", t[t.PropertyCantBeNull = 6] = "PropertyCantBeNull", t[t.TooManyActions = 7] = "TooManyActions", t[t.UnknownActionType = 8] = "UnknownActionType", t[t.UnknownElementType = 9] = "UnknownElementType", t[t.UnsupportedCardVersion = 10] = "UnsupportedCardVersion"
        }(e.ValidationError || (e.ValidationError = {}))
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return l.render(t)
        }

        function o(t, e) {
            return t || e
        }

        function i(t) {
            return void 0 === t || null === t || "" === t
        }

        function s(t, e) {
            null != e && void 0 != e && t.appendChild(e)
        }

        function a(t, e) {
            var n = document.createElement("div");
            return "vertical" == e ? t.lineThickness ? (n.style.marginTop = t.spacing / 2 + "px", n.style.paddingTop = t.spacing / 2 + "px", n.style.borderTop = t.lineThickness + "px solid " + c(t.lineColor)) : n.style.height = t.spacing + "px" : t.lineThickness ? (n.style.marginLeft = t.spacing / 2 + "px", n.style.paddingLeft = t.spacing / 2 + "px", n.style.borderLeft = t.lineThickness + "px solid " + c(t.lineColor)) : n.style.width = t.spacing + "px", n
        }

        function c(t) {
            var e = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi,
                n = e.exec(t);
            if (n && n[4]) {
                var r = parseInt(n[1], 16) / 255;
                return "rgba(" + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + "," + parseInt(n[4], 16) + "," + r + ")"
            }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = n(100),
            l = new u;
        e.processMarkdown = r, e.getValueOrDefault = o, e.isNullOrEmpty = i, e.appendChild = s, e.renderSeparation = a, e.stringToCssColor = c;
        var p = function() {
            function t() {
                this._isProcessed = !1, this._original = null, this._processed = null
            }
            return t.prototype.substituteInputValues = function(t) {
                this._processed = this._original;
                for (var e, n = /\{{2}([a-z0-9_$@]+).value\}{2}/gi; null != (e = n.exec(this._original));) {
                    for (var r = null, o = 0; o < t.length; o++)
                        if (t[o].id.toLowerCase() == e[1].toLowerCase()) {
                            r = t[o];
                            break
                        } r && (this._processed = this._processed.replace(e[0], r.value ? r.value : ""))
                }
                this._isProcessed = !0
            }, t.prototype.get = function() {
                return this._isProcessed ? this._processed : this._original
            }, t.prototype.set = function(t) {
                this._original = t, this._isProcessed = !1
            }, t
        }();
        e.StringWithSubstitutions = p
    }, function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }

        function i(t) {
            if (p === clearTimeout) return clearTimeout(t);
            if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
            try {
                return p(t)
            } catch (e) {
                try {
                    return p.call(null, t)
                } catch (e) {
                    return p.call(this, t)
                }
            }
        }

        function s() {
            m && f && (m = !1, f.length ? d = f.concat(d) : v = -1, d.length && a())
        }

        function a() {
            if (!m) {
                var t = o(s);
                m = !0;
                for (var e = d.length; e;) {
                    for (f = d, d = []; ++v < e;) f && f[v].run();
                    v = -1, e = d.length
                }
                f = null, m = !1, i(t)
            }
        }

        function c(t, e) {
            this.fun = t, this.array = e
        }

        function u() {}
        var l, p, h = t.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                l = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                p = r
            }
        }();
        var f, d = [],
            m = !1,
            v = -1;
        h.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            d.push(new c(t, e)), 1 !== d.length || m || o(a)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function(t) {
            return []
        }, h.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, h.cwd = function() {
            return "/"
        }, h.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, h.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(288);
        t.exports = function(t) {
            return r(t, !1)
        }
    }, function(t, e, n) {
        t.exports = n(287)()
    }, function(t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t + e.charAt(0).toUpperCase() + e.substring(1)
        }
        var o = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            i = ["Webkit", "ms", "Moz", "O"];
        Object.keys(o).forEach(function(t) {
            i.forEach(function(e) {
                o[r(e, t)] = o[t]
            })
        });
        var s = {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            },
            a = {
                isUnitlessNumber: o,
                shorthandPropertyExpansions: s
            };
        t.exports = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = n(4),
            i = n(17),
            s = (n(1), function() {
                function t(e) {
                    r(this, t), this._callbacks = null, this._contexts = null, this._arg = e
                }
                return t.prototype.enqueue = function(t, e) {
                    this._callbacks = this._callbacks || [], this._callbacks.push(t), this._contexts = this._contexts || [], this._contexts.push(e)
                }, t.prototype.notifyAll = function() {
                    var t = this._callbacks,
                        e = this._contexts,
                        n = this._arg;
                    if (t && e) {
                        t.length !== e.length && o("24"), this._callbacks = null, this._contexts = null;
                        for (var r = 0; r < t.length; r++) t[r].call(e[r], n);
                        t.length = 0, e.length = 0
                    }
                }, t.prototype.checkpoint = function() {
                    return this._callbacks ? this._callbacks.length : 0
                }, t.prototype.rollback = function(t) {
                    this._callbacks && this._contexts && (this._callbacks.length = t, this._contexts.length = t)
                }, t.prototype.reset = function() {
                    this._callbacks = null, this._contexts = null
                }, t.prototype.destructor = function() {
                    this.reset()
                }, t
            }());
        t.exports = i.addPoolingTo(s)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return !!u.hasOwnProperty(t) || !c.hasOwnProperty(t) && (a.test(t) ? (u[t] = !0, !0) : (c[t] = !0, !1))
        }

        function o(t, e) {
            return null == e || t.hasBooleanValue && !e || t.hasNumericValue && isNaN(e) || t.hasPositiveNumericValue && e < 1 || t.hasOverloadedBooleanValue && !1 === e
        }
        var i = n(23),
            s = (n(6), n(12), n(352)),
            a = (n(3), new RegExp("^[" + i.ATTRIBUTE_NAME_START_CHAR + "][" + i.ATTRIBUTE_NAME_CHAR + "]*$")),
            c = {},
            u = {},
            l = {
                createMarkupForID: function(t) {
                    return i.ID_ATTRIBUTE_NAME + "=" + s(t)
                },
                setAttributeForID: function(t, e) {
                    t.setAttribute(i.ID_ATTRIBUTE_NAME, e)
                },
                createMarkupForRoot: function() {
                    return i.ROOT_ATTRIBUTE_NAME + '=""'
                },
                setAttributeForRoot: function(t) {
                    t.setAttribute(i.ROOT_ATTRIBUTE_NAME, "")
                },
                createMarkupForProperty: function(t, e) {
                    var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
                    if (n) {
                        if (o(n, e)) return "";
                        var r = n.attributeName;
                        return n.hasBooleanValue || n.hasOverloadedBooleanValue && !0 === e ? r + '=""' : r + "=" + s(e)
                    }
                    return i.isCustomAttribute(t) ? null == e ? "" : t + "=" + s(e) : null
                },
                createMarkupForCustomAttribute: function(t, e) {
                    return r(t) && null != e ? t + "=" + s(e) : ""
                },
                setValueForProperty: function(t, e, n) {
                    var r = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
                    if (r) {
                        var s = r.mutationMethod;
                        if (s) s(t, n);
                        else {
                            if (o(r, n)) return void this.deleteValueForProperty(t, e);
                            if (r.mustUseProperty) t[r.propertyName] = n;
                            else {
                                var a = r.attributeName,
                                    c = r.attributeNamespace;
                                c ? t.setAttributeNS(c, a, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? t.setAttribute(a, "") : t.setAttribute(a, "" + n)
                            }
                        }
                    } else if (i.isCustomAttribute(e)) return void l.setValueForAttribute(t, e, n)
                },
                setValueForAttribute: function(t, e, n) {
                    if (r(e)) {
                        null == n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)
                    }
                },
                deleteValueForAttribute: function(t, e) {
                    t.removeAttribute(e)
                },
                deleteValueForProperty: function(t, e) {
                    var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
                    if (n) {
                        var r = n.mutationMethod;
                        if (r) r(t, void 0);
                        else if (n.mustUseProperty) {
                            var o = n.propertyName;
                            n.hasBooleanValue ? t[o] = !1 : t[o] = ""
                        } else t.removeAttribute(n.attributeName)
                    } else i.isCustomAttribute(e) && t.removeAttribute(e)
                }
            };
        t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = {
            hasCachedChildNodes: 1
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            if (this._rootNodeID && this._wrapperState.pendingUpdate) {
                this._wrapperState.pendingUpdate = !1;
                var t = this._currentElement.props,
                    e = a.getValue(t);
                null != e && o(this, Boolean(t.multiple), e)
            }
        }

        function o(t, e, n) {
            var r, o, i = c.getNodeFromInstance(t).options;
            if (e) {
                for (r = {}, o = 0; o < n.length; o++) r["" + n[o]] = !0;
                for (o = 0; o < i.length; o++) {
                    var s = r.hasOwnProperty(i[o].value);
                    i[o].selected !== s && (i[o].selected = s)
                }
            } else {
                for (r = "" + n, o = 0; o < i.length; o++)
                    if (i[o].value === r) return void(i[o].selected = !0);
                i.length && (i[0].selected = !0)
            }
        }

        function i(t) {
            var e = this._currentElement.props,
                n = a.executeOnChange(e, t);
            return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), u.asap(r, this), n
        }
        var s = n(5),
            a = n(67),
            c = n(6),
            u = n(13),
            l = (n(3), !1),
            p = {
                getHostProps: function(t, e) {
                    return s({}, e, {
                        onChange: t._wrapperState.onChange,
                        value: void 0
                    })
                },
                mountWrapper: function(t, e) {
                    var n = a.getValue(e);
                    t._wrapperState = {
                        pendingUpdate: !1,
                        initialValue: null != n ? n : e.defaultValue,
                        listeners: null,
                        onChange: i.bind(t),
                        wasMultiple: Boolean(e.multiple)
                    }, void 0 === e.value || void 0 === e.defaultValue || l || (l = !0)
                },
                getSelectValueContext: function(t) {
                    return t._wrapperState.initialValue
                },
                postUpdateWrapper: function(t) {
                    var e = t._currentElement.props;
                    t._wrapperState.initialValue = void 0;
                    var n = t._wrapperState.wasMultiple;
                    t._wrapperState.wasMultiple = Boolean(e.multiple);
                    var r = a.getValue(e);
                    null != r ? (t._wrapperState.pendingUpdate = !1, o(t, Boolean(e.multiple), r)) : n !== Boolean(e.multiple) && (null != e.defaultValue ? o(t, Boolean(e.multiple), e.defaultValue) : o(t, Boolean(e.multiple), e.multiple ? [] : ""))
                }
            };
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r, o = {
                injectEmptyComponentFactory: function(t) {
                    r = t
                }
            },
            i = {
                create: function(t) {
                    return r(t)
                }
            };
        i.injection = o, t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = {
            logTopLevelRenders: !1
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return a || s("111", t.type), new a(t)
        }

        function o(t) {
            return new c(t)
        }

        function i(t) {
            return t instanceof c
        }
        var s = n(4),
            a = (n(1), null),
            c = null,
            u = {
                injectGenericComponentClass: function(t) {
                    a = t
                },
                injectTextComponentClass: function(t) {
                    c = t
                }
            },
            l = {
                createInternalComponent: r,
                createInstanceForText: o,
                isTextComponent: i,
                injection: u
            };
        t.exports = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return i(document.documentElement, t)
        }
        var o = n(312),
            i = n(212),
            s = n(97),
            a = n(98),
            c = {
                hasSelectionCapabilities: function(t) {
                    var e = t && t.nodeName && t.nodeName.toLowerCase();
                    return e && ("input" === e && "text" === t.type || "textarea" === e || "true" === t.contentEditable)
                },
                getSelectionInformation: function() {
                    var t = a();
                    return {
                        focusedElem: t,
                        selectionRange: c.hasSelectionCapabilities(t) ? c.getSelection(t) : null
                    }
                },
                restoreSelection: function(t) {
                    var e = a(),
                        n = t.focusedElem,
                        o = t.selectionRange;
                    e !== n && r(n) && (c.hasSelectionCapabilities(n) && c.setSelection(n, o), s(n))
                },
                getSelection: function(t) {
                    var e;
                    if ("selectionStart" in t) e = {
                        start: t.selectionStart,
                        end: t.selectionEnd
                    };
                    else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                        var n = document.selection.createRange();
                        n.parentElement() === t && (e = {
                            start: -n.moveStart("character", -t.value.length),
                            end: -n.moveEnd("character", -t.value.length)
                        })
                    } else e = o.getOffsets(t);
                    return e || {
                        start: 0,
                        end: 0
                    }
                },
                setSelection: function(t, e) {
                    var n = e.start,
                        r = e.end;
                    if (void 0 === r && (r = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(r, t.value.length);
                    else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                        var i = t.createTextRange();
                        i.collapse(!0), i.moveStart("character", n), i.moveEnd("character", r - n), i.select()
                    } else o.setOffsets(t, e)
                }
            };
        t.exports = c
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++)
                if (t.charAt(r) !== e.charAt(r)) return r;
            return t.length === e.length ? -1 : n
        }

        function o(t) {
            return t ? t.nodeType === N ? t.documentElement : t.firstChild : null
        }

        function i(t) {
            return t.getAttribute && t.getAttribute(I) || ""
        }

        function s(t, e, n, r, o) {
            var i;
            if (C.logTopLevelRenders) {
                var s = t._currentElement.props.child,
                    a = s.type;
                i = "React mount: " + ("string" == typeof a ? a : a.displayName || a.name), console.time(i)
            }
            var c = k.mountComponent(t, n, null, b(t, e), o, 0);
            i && console.timeEnd(i), t._renderedComponent._topLevelWrapper = t, z._mountImageIntoNode(c, e, t, r, n)
        }

        function a(t, e, n, r) {
            var o = E.ReactReconcileTransaction.getPooled(!n && _.useCreateElement);
            o.perform(s, null, t, e, o, n, r), E.ReactReconcileTransaction.release(o)
        }

        function c(t, e, n) {
            for (k.unmountComponent(t, n), e.nodeType === N && (e = e.documentElement); e.lastChild;) e.removeChild(e.lastChild)
        }

        function u(t) {
            var e = o(t);
            if (e) {
                var n = g.getInstanceFromNode(e);
                return !(!n || !n._hostParent)
            }
        }

        function l(t) {
            return !(!t || t.nodeType !== M && t.nodeType !== N && t.nodeType !== R)
        }

        function p(t) {
            var e = o(t),
                n = e && g.getInstanceFromNode(e);
            return n && !n._hostParent ? n : null
        }

        function h(t) {
            var e = p(t);
            return e ? e._hostContainerInfo._topLevelWrapper : null
        }
        var f = n(4),
            d = n(22),
            m = n(23),
            v = n(25),
            y = n(43),
            g = (n(15), n(6)),
            b = n(306),
            _ = n(308),
            C = n(118),
            w = n(34),
            x = (n(12), n(322)),
            k = n(24),
            S = n(70),
            E = n(13),
            A = n(42),
            T = n(129),
            O = (n(1), n(47)),
            P = n(76),
            I = (n(3), m.ID_ATTRIBUTE_NAME),
            D = m.ROOT_ATTRIBUTE_NAME,
            M = 1,
            N = 9,
            R = 11,
            L = {},
            j = 1,
            F = function() {
                this.rootID = j++
            };
        F.prototype.isReactComponent = {}, F.prototype.render = function() {
            return this.props.child
        }, F.isReactTopLevelWrapper = !0;
        var z = {
            TopLevelWrapper: F,
            _instancesByReactRootID: L,
            scrollMonitor: function(t, e) {
                e()
            },
            _updateRootComponent: function(t, e, n, r, o) {
                return z.scrollMonitor(r, function() {
                    S.enqueueElementInternal(t, e, n), o && S.enqueueCallbackInternal(t, o)
                }), t
            },
            _renderNewRootComponent: function(t, e, n, r) {
                l(e) || f("37"), y.ensureScrollValueMonitoring();
                var o = T(t, !1);
                E.batchedUpdates(a, o, e, n, r);
                var i = o._instance.rootID;
                return L[i] = o, o
            },
            renderSubtreeIntoContainer: function(t, e, n, r) {
                return null != t && w.has(t) || f("38"), z._renderSubtreeIntoContainer(t, e, n, r)
            },
            _renderSubtreeIntoContainer: function(t, e, n, r) {
                S.validateCallback(r, "ReactDOM.render"), v.isValidElement(e) || f("39", "string" == typeof e ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof e ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != e && void 0 !== e.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var s, a = v.createElement(F, {
                    child: e
                });
                if (t) {
                    var c = w.get(t);
                    s = c._processChildContext(c._context)
                } else s = A;
                var l = h(n);
                if (l) {
                    var p = l._currentElement,
                        d = p.props.child;
                    if (P(d, e)) {
                        var m = l._renderedComponent.getPublicInstance(),
                            y = r && function() {
                                r.call(m)
                            };
                        return z._updateRootComponent(l, a, s, n, y), m
                    }
                    z.unmountComponentAtNode(n)
                }
                var g = o(n),
                    b = g && !!i(g),
                    _ = u(n),
                    C = b && !l && !_,
                    x = z._renderNewRootComponent(a, n, C, s)._renderedComponent.getPublicInstance();
                return r && r.call(x), x
            },
            render: function(t, e, n) {
                return z._renderSubtreeIntoContainer(null, t, e, n)
            },
            unmountComponentAtNode: function(t) {
                l(t) || f("40");
                var e = h(t);
                if (!e) {
                    u(t), 1 === t.nodeType && t.hasAttribute(D);
                    return !1
                }
                return delete L[e._instance.rootID], E.batchedUpdates(c, e, t, !1), !0
            },
            _mountImageIntoNode: function(t, e, n, i, s) {
                if (l(e) || f("41"), i) {
                    var a = o(e);
                    if (x.canReuseMarkup(t, a)) return void g.precacheNode(n, a);
                    var c = a.getAttribute(x.CHECKSUM_ATTR_NAME);
                    a.removeAttribute(x.CHECKSUM_ATTR_NAME);
                    var u = a.outerHTML;
                    a.setAttribute(x.CHECKSUM_ATTR_NAME, c);
                    var p = t,
                        h = r(p, u),
                        m = " (client) " + p.substring(h - 20, h + 20) + "\n (server) " + u.substring(h - 20, h + 20);
                    e.nodeType === N && f("42", m)
                }
                if (e.nodeType === N && f("43"), s.useCreateElement) {
                    for (; e.lastChild;) e.removeChild(e.lastChild);
                    d.insertTreeBefore(e, t, null)
                } else O(e, t), g.precacheNode(n, e.firstChild)
            }
        };
        t.exports = z
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(25),
            i = (n(1), {
                HOST: 0,
                COMPOSITE: 1,
                EMPTY: 2,
                getType: function(t) {
                    return null === t || !1 === t ? i.EMPTY : o.isValidElement(t) ? "function" == typeof t.type ? i.COMPOSITE : i.HOST : void r("26", t)
                }
            });
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function(t) {
                r.currentScrollLeft = t.x, r.currentScrollTop = t.y
            }
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return null == e && o("30"), null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
        }
        var o = n(4);
        n(1);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e;
                (e = t._renderedNodeType) === o.COMPOSITE;) t = t._renderedComponent;
            return e === o.HOST ? t._renderedComponent : e === o.EMPTY ? null : void 0
        }
        var o = n(122);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            return !i && o.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i
        }
        var o = n(7),
            i = null;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.type,
                n = t.nodeName;
            return n && "input" === n.toLowerCase() && ("checkbox" === e || "radio" === e)
        }

        function o(t) {
            return t._wrapperState.valueTracker
        }

        function i(t, e) {
            t._wrapperState.valueTracker = e
        }

        function s(t) {
            delete t._wrapperState.valueTracker
        }

        function a(t) {
            var e;
            return t && (e = r(t) ? "" + t.checked : t.value), e
        }
        var c = n(6),
            u = {
                _getTrackerFromNode: function(t) {
                    return o(c.getInstanceFromNode(t))
                },
                track: function(t) {
                    if (!o(t)) {
                        var e = c.getNodeFromInstance(t),
                            n = r(e) ? "checked" : "value",
                            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                            u = "" + e[n];
                        e.hasOwnProperty(n) || "function" != typeof a.get || "function" != typeof a.set || (Object.defineProperty(e, n, {
                            enumerable: a.enumerable,
                            configurable: !0,
                            get: function() {
                                return a.get.call(this)
                            },
                            set: function(t) {
                                u = "" + t, a.set.call(this, t)
                            }
                        }), i(t, {
                            getValue: function() {
                                return u
                            },
                            setValue: function(t) {
                                u = "" + t
                            },
                            stopTracking: function() {
                                s(t), delete e[n]
                            }
                        }))
                    }
                },
                updateValueIfChanged: function(t) {
                    if (!t) return !1;
                    var e = o(t);
                    if (!e) return u.track(t), !0;
                    var n = e.getValue(),
                        r = a(c.getNodeFromInstance(t));
                    return r !== n && (e.setValue(r), !0)
                },
                stopTracking: function(t) {
                    var e = o(t);
                    e && e.stopTracking()
                }
            };
        t.exports = u
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (t) {
                var e = t.getName();
                if (e) return " Check the render method of `" + e + "`."
            }
            return ""
        }

        function o(t) {
            return "function" == typeof t && void 0 !== t.prototype && "function" == typeof t.prototype.mountComponent && "function" == typeof t.prototype.receiveComponent
        }

        function i(t, e) {
            var n;
            if (null === t || !1 === t) n = u.create(i);
            else if ("object" == typeof t) {
                var a = t,
                    c = a.type;
                if ("function" != typeof c && "string" != typeof c) {
                    var h = "";
                    h += r(a._owner), s("130", null == c ? c : typeof c, h)
                }
                "string" == typeof a.type ? n = l.createInternalComponent(a) : o(a.type) ? (n = new a.type(a), n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new p(a)
            } else "string" == typeof t || "number" == typeof t ? n = l.createInstanceForText(t) : s("131", typeof t);
            return n._mountIndex = 0, n._mountImage = null, n
        }
        var s = n(4),
            a = n(5),
            c = n(303),
            u = n(117),
            l = n(119),
            p = (n(371), n(1), n(3), function(t) {
                this.construct(t)
            });
        a(p.prototype, c, {
            _instantiateReactComponent: i
        }), t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return "input" === e ? !!o[t.type] : "textarea" === e
        }
        var o = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(46),
            i = n(47),
            s = function(t, e) {
                if (e) {
                    var n = t.firstChild;
                    if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
                }
                t.textContent = e
            };
        r.canUseDOM && ("textContent" in document.documentElement || (s = function(t, e) {
            if (3 === t.nodeType) return void(t.nodeValue = e);
            i(t, o(e))
        })), t.exports = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t && "object" == typeof t && null != t.key ? u.escape(t.key) : e.toString(36)
        }

        function o(t, e, n, i) {
            var h = typeof t;
            if ("undefined" !== h && "boolean" !== h || (t = null), null === t || "string" === h || "number" === h || "object" === h && t.$$typeof === a) return n(i, t, "" === e ? l + r(t, 0) : e), 1;
            var f, d, m = 0,
                v = "" === e ? l : e + p;
            if (Array.isArray(t))
                for (var y = 0; y < t.length; y++) f = t[y], d = v + r(f, y), m += o(f, d, n, i);
            else {
                var g = c(t);
                if (g) {
                    var b, _ = g.call(t);
                    if (g !== t.entries)
                        for (var C = 0; !(b = _.next()).done;) f = b.value, d = v + r(f, C++), m += o(f, d, n, i);
                    else
                        for (; !(b = _.next()).done;) {
                            var w = b.value;
                            w && (f = w[1], d = v + u.escape(w[0]) + p + r(f, 0), m += o(f, d, n, i))
                        }
                } else if ("object" === h) {
                    var x = "",
                        k = String(t);
                    s("31", "[object Object]" === k ? "object with keys {" + Object.keys(t).join(", ") + "}" : k, x)
                }
            }
            return m
        }

        function i(t, e, n) {
            return null == t ? 0 : o(t, "", e, n)
        }
        var s = n(4),
            a = (n(15), n(318)),
            c = n(349),
            u = (n(1), n(66)),
            l = (n(3), "."),
            p = ":";
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function s(t, e) {
            var n = {};
            for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }

        function a() {}

        function c(t, e) {
            var n = {
                run: function(r) {
                    try {
                        var o = t(e.getState(), r);
                        (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null)
                    } catch (t) {
                        n.shouldComponentUpdate = !0, n.error = t
                    }
                }
            };
            return n
        }

        function u(t) {
            var e, u, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                h = l.getDisplayName,
                _ = void 0 === h ? function(t) {
                    return "ConnectAdvanced(" + t + ")"
                } : h,
                C = l.methodName,
                w = void 0 === C ? "connectAdvanced" : C,
                x = l.renderCountProp,
                k = void 0 === x ? void 0 : x,
                S = l.shouldHandleStateChanges,
                E = void 0 === S || S,
                A = l.storeKey,
                T = void 0 === A ? "store" : A,
                O = l.withRef,
                P = void 0 !== O && O,
                I = s(l, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
                D = T + "Subscription",
                M = g++,
                N = (e = {}, e[T] = v.a, e[D] = v.b, e),
                R = (u = {}, u[D] = v.b, u);
            return function(e) {
                f()("function" == typeof e, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(e));
                var s = e.displayName || e.name || "Component",
                    u = _(s),
                    l = y({}, I, {
                        getDisplayName: _,
                        methodName: w,
                        renderCountProp: k,
                        shouldHandleStateChanges: E,
                        storeKey: T,
                        withRef: P,
                        displayName: u,
                        wrappedComponentName: s,
                        WrappedComponent: e
                    }),
                    h = function(s) {
                        function p(t, e) {
                            r(this, p);
                            var n = o(this, s.call(this, t, e));
                            return n.version = M, n.state = {}, n.renderCount = 0, n.store = t[T] || e[T], n.propsMode = Boolean(t[T]), n.setWrappedInstance = n.setWrappedInstance.bind(n), f()(n.store, 'Could not find "' + T + '" in either the context or props of "' + u + '". Either wrap the root component in a <Provider>, or explicitly pass "' + T + '" as a prop to "' + u + '".'), n.initSelector(), n.initSubscription(), n
                        }
                        return i(p, s), p.prototype.getChildContext = function() {
                            var t, e = this.propsMode ? null : this.subscription;
                            return t = {}, t[D] = e || this.context[D], t
                        }, p.prototype.componentDidMount = function() {
                            E && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                        }, p.prototype.componentWillReceiveProps = function(t) {
                            this.selector.run(t)
                        }, p.prototype.shouldComponentUpdate = function() {
                            return this.selector.shouldComponentUpdate
                        }, p.prototype.componentWillUnmount = function() {
                            this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = a, this.store = null, this.selector.run = a, this.selector.shouldComponentUpdate = !1
                        }, p.prototype.getWrappedInstance = function() {
                            return f()(P, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + w + "() call."), this.wrappedInstance
                        }, p.prototype.setWrappedInstance = function(t) {
                            this.wrappedInstance = t
                        }, p.prototype.initSelector = function() {
                            var e = t(this.store.dispatch, l);
                            this.selector = c(e, this.store), this.selector.run(this.props)
                        }, p.prototype.initSubscription = function() {
                            if (E) {
                                var t = (this.propsMode ? this.props : this.context)[D];
                                this.subscription = new m.a(this.store, t, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                            }
                        }, p.prototype.onStateChange = function() {
                            this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(b)) : this.notifyNestedSubs()
                        }, p.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                            this.componentDidUpdate = void 0, this.notifyNestedSubs()
                        }, p.prototype.isSubscribed = function() {
                            return Boolean(this.subscription) && this.subscription.isSubscribed()
                        }, p.prototype.addExtraProps = function(t) {
                            if (!(P || k || this.propsMode && this.subscription)) return t;
                            var e = y({}, t);
                            return P && (e.ref = this.setWrappedInstance), k && (e[k] = this.renderCount++), this.propsMode && this.subscription && (e[D] = this.subscription), e
                        }, p.prototype.render = function() {
                            var t = this.selector;
                            if (t.shouldComponentUpdate = !1, t.error) throw t.error;
                            return n.i(d.createElement)(e, this.addExtraProps(t.props))
                        }, p
                    }(d.Component);
                return h.WrappedComponent = e, h.displayName = u, h.childContextTypes = R, h.contextTypes = N, h.propTypes = N, p()(h, e)
            }
        }
        e.a = u;
        var l = n(222),
            p = n.n(l),
            h = n(223),
            f = n.n(h),
            d = n(9),
            m = (n.n(d), n(361)),
            v = n(135),
            y = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            g = 0,
            b = {}
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e, n) {
                function r() {
                    return o
                }
                var o = t(e, n);
                return r.dependsOnOwnProps = !1, r
            }
        }

        function o(t) {
            return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
        }

        function i(t, e) {
            return function(e, n) {
                var r = (n.displayName, function(t, e) {
                    return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t)
                });
                return r.dependsOnOwnProps = !0, r.mapToProps = function(e, n) {
                    r.mapToProps = t, r.dependsOnOwnProps = o(t);
                    var i = r(e, n);
                    return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = o(i), i = r(e, n)), i
                }, r
            }
        }
        e.b = r, e.a = i;
        n(136)
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i
        }), n.d(e, "a", function() {
            return s
        });
        var r = n(110),
            o = n.n(r),
            i = o.a.shape({
                trySubscribe: o.a.func.isRequired,
                tryUnsubscribe: o.a.func.isRequired,
                notifyNestedSubs: o.a.func.isRequired,
                isSubscribed: o.a.func.isRequired
            }),
            s = o.a.shape({
                subscribe: o.a.func.isRequired,
                dispatch: o.a.func.isRequired,
                getState: o.a.func.isRequired
            })
    }, function(t, e, n) {
        "use strict";
        n(59), n(78)
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            this.props = t, this.context = e, this.refs = u, this.updater = n || c
        }

        function o(t, e, n) {
            this.props = t, this.context = e, this.refs = u, this.updater = n || c
        }

        function i() {}
        var s = n(36),
            a = n(5),
            c = n(140),
            u = (n(141), n(42));
        n(1), n(372);
        r.prototype.isReactComponent = {}, r.prototype.setState = function(t, e) {
            "object" != typeof t && "function" != typeof t && null != t && s("85"), this.updater.enqueueSetState(this, t), e && this.updater.enqueueCallback(this, e, "setState")
        }, r.prototype.forceUpdate = function(t) {
            this.updater.enqueueForceUpdate(this), t && this.updater.enqueueCallback(this, t, "forceUpdate")
        };
        i.prototype = r.prototype, o.prototype = new i, o.prototype.constructor = o, a(o.prototype, r.prototype), o.prototype.isPureReactComponent = !0, t.exports = {
            Component: r,
            PureComponent: o
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = Function.prototype.toString,
                n = Object.prototype.hasOwnProperty,
                r = RegExp("^" + e.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            try {
                var o = e.call(t);
                return r.test(o)
            } catch (t) {
                return !1
            }
        }

        function o(t) {
            var e = u(t);
            if (e) {
                var n = e.childIDs;
                l(t), n.forEach(o)
            }
        }

        function i(t, e, n) {
            return "\n    in " + (t || "Unknown") + (e ? " (at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + ")" : n ? " (created by " + n + ")" : "")
        }

        function s(t) {
            return null == t ? "#empty" : "string" == typeof t || "number" == typeof t ? "#text" : "string" == typeof t.type ? t.type : t.type.displayName || t.type.name || "Unknown"
        }

        function a(t) {
            var e, n = S.getDisplayName(t),
                r = S.getElement(t),
                o = S.getOwnerID(t);
            return o && (e = S.getDisplayName(o)), i(n, r && r._source, e)
        }
        var c, u, l, p, h, f, d, m = n(36),
            v = n(15),
            y = (n(1), n(3), "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys));
        if (y) {
            var g = new Map,
                b = new Set;
            c = function(t, e) {
                g.set(t, e)
            }, u = function(t) {
                return g.get(t)
            }, l = function(t) {
                g.delete(t)
            }, p = function() {
                return Array.from(g.keys())
            }, h = function(t) {
                b.add(t)
            }, f = function(t) {
                b.delete(t)
            }, d = function() {
                return Array.from(b.keys())
            }
        } else {
            var _ = {},
                C = {},
                w = function(t) {
                    return "." + t
                },
                x = function(t) {
                    return parseInt(t.substr(1), 10)
                };
            c = function(t, e) {
                var n = w(t);
                _[n] = e
            }, u = function(t) {
                var e = w(t);
                return _[e]
            }, l = function(t) {
                var e = w(t);
                delete _[e]
            }, p = function() {
                return Object.keys(_).map(x)
            }, h = function(t) {
                var e = w(t);
                C[e] = !0
            }, f = function(t) {
                var e = w(t);
                delete C[e]
            }, d = function() {
                return Object.keys(C).map(x)
            }
        }
        var k = [],
            S = {
                onSetChildren: function(t, e) {
                    var n = u(t);
                    n || m("144"), n.childIDs = e;
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r],
                            i = u(o);
                        i || m("140"), null == i.childIDs && "object" == typeof i.element && null != i.element && m("141"), i.isMounted || m("71"), null == i.parentID && (i.parentID = t), i.parentID !== t && m("142", o, i.parentID, t)
                    }
                },
                onBeforeMountComponent: function(t, e, n) {
                    c(t, {
                        element: e,
                        parentID: n,
                        text: null,
                        childIDs: [],
                        isMounted: !1,
                        updateCount: 0
                    })
                },
                onBeforeUpdateComponent: function(t, e) {
                    var n = u(t);
                    n && n.isMounted && (n.element = e)
                },
                onMountComponent: function(t) {
                    var e = u(t);
                    e || m("144"), e.isMounted = !0, 0 === e.parentID && h(t)
                },
                onUpdateComponent: function(t) {
                    var e = u(t);
                    e && e.isMounted && e.updateCount++
                },
                onUnmountComponent: function(t) {
                    var e = u(t);
                    if (e) {
                        e.isMounted = !1;
                        0 === e.parentID && f(t)
                    }
                    k.push(t)
                },
                purgeUnmountedComponents: function() {
                    if (!S._preventPurging) {
                        for (var t = 0; t < k.length; t++) {
                            o(k[t])
                        }
                        k.length = 0
                    }
                },
                isMounted: function(t) {
                    var e = u(t);
                    return !!e && e.isMounted
                },
                getCurrentStackAddendum: function(t) {
                    var e = "";
                    if (t) {
                        var n = s(t),
                            r = t._owner;
                        e += i(n, t._source, r && r.getName())
                    }
                    var o = v.current,
                        a = o && o._debugID;
                    return e += S.getStackAddendumByID(a)
                },
                getStackAddendumByID: function(t) {
                    for (var e = ""; t;) e += a(t), t = S.getParentID(t);
                    return e
                },
                getChildIDs: function(t) {
                    var e = u(t);
                    return e ? e.childIDs : []
                },
                getDisplayName: function(t) {
                    var e = S.getElement(t);
                    return e ? s(e) : null
                },
                getElement: function(t) {
                    var e = u(t);
                    return e ? e.element : null
                },
                getOwnerID: function(t) {
                    var e = S.getElement(t);
                    return e && e._owner ? e._owner._debugID : null
                },
                getParentID: function(t) {
                    var e = u(t);
                    return e ? e.parentID : null
                },
                getSource: function(t) {
                    var e = u(t),
                        n = e ? e.element : null;
                    return null != n ? n._source : null
                },
                getText: function(t) {
                    var e = S.getElement(t);
                    return "string" == typeof e ? e : "number" == typeof e ? "" + e : null
                },
                getUpdateCount: function(t) {
                    var e = u(t);
                    return e ? e.updateCount : 0
                },
                getRootIDs: d,
                getRegisteredIDs: p,
                pushNonStandardWarningStack: function(t, e) {
                    if ("function" == typeof console.reactStack) {
                        var n = [],
                            r = v.current,
                            o = r && r._debugID;
                        try {
                            for (t && n.push({
                                    name: o ? S.getDisplayName(o) : null,
                                    fileName: e ? e.fileName : null,
                                    lineNumber: e ? e.lineNumber : null
                                }); o;) {
                                var i = S.getElement(o),
                                    s = S.getParentID(o),
                                    a = S.getOwnerID(o),
                                    c = a ? S.getDisplayName(a) : null,
                                    u = i && i._source;
                                n.push({
                                    name: c,
                                    fileName: u ? u.fileName : null,
                                    lineNumber: u ? u.lineNumber : null
                                }), o = s
                            }
                        } catch (t) {}
                        console.reactStack(n)
                    }
                },
                popNonStandardWarningStack: function() {
                    "function" == typeof console.reactStackEnd && console.reactStackEnd()
                }
            };
        t.exports = S
    }, function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = (n(3), {
            isMounted: function(t) {
                return !1
            },
            enqueueCallback: function(t, e) {},
            enqueueForceUpdate: function(t) {},
            enqueueReplaceState: function(t, e) {},
            enqueueSetState: function(t, e) {}
        });
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = !1;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ActionsObservable = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = n(0),
            c = n(160),
            u = n(158),
            l = n(161);
        e.ActionsObservable = function(t) {
            function e(t) {
                r(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n.source = t, n
            }
            return i(e, t), s(e, null, [{
                key: "of",
                value: function() {
                    return new this(c.of.apply(void 0, arguments))
                }
            }, {
                key: "from",
                value: function(t, e) {
                    return new this((0, u.from)(t, e))
                }
            }]), s(e, [{
                key: "lift",
                value: function(t) {
                    var n = new e(this);
                    return n.operator = t, n
                }
            }, {
                key: "ofType",
                value: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return l.filter.call(this, function(t) {
                        var n = t.type,
                            r = e.length;
                        if (1 === r) return n === e[0];
                        for (var o = 0; o < r; o++)
                            if (e[o] === n) return !0;
                        return !1
                    })
                }
            }]), e
        }(a.Observable)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.EPIC_END = "@@redux-observable/EPIC_END"
    }, function(t, e, n) {
        "use strict";

        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return 0 === e.length ? function(t) {
                return t
            } : 1 === e.length ? e[0] : e.reduce(function(t, e) {
                return function() {
                    return t(e.apply(void 0, arguments))
                }
            })
        }
        e.a = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, i) {
            function c() {
                g === y && (g = y.slice())
            }

            function u() {
                return v
            }

            function l(t) {
                if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                var e = !0;
                return c(), g.push(t),
                    function() {
                        if (e) {
                            e = !1, c();
                            var n = g.indexOf(t);
                            g.splice(n, 1)
                        }
                    }
            }

            function p(t) {
                if (!n.i(o.a)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (b) throw new Error("Reducers may not dispatch actions.");
                try {
                    b = !0, v = m(v, t)
                } finally {
                    b = !1
                }
                for (var e = y = g, r = 0; r < e.length; r++) {
                    (0, e[r])()
                }
                return t
            }

            function h(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                m = t, p({
                    type: a.INIT
                })
            }

            function f() {
                var t, e = l;
                return t = {
                    subscribe: function(t) {
                        function n() {
                            t.next && t.next(u())
                        }
                        if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                        return n(), {
                            unsubscribe: e(n)
                        }
                    }
                }, t[s.a] = function() {
                    return this
                }, t
            }
            var d;
            if ("function" == typeof e && void 0 === i && (i = e, e = void 0), void 0 !== i) {
                if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
                return i(r)(t, e)
            }
            if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
            var m = t,
                v = e,
                y = [],
                g = y,
                b = !1;
            return p({
                type: a.INIT
            }), d = {
                dispatch: p,
                subscribe: l,
                getState: u,
                replaceReducer: h
            }, d[s.a] = f, d
        }
        n.d(e, "a", function() {
            return a
        }), e.b = r;
        var o = n(59),
            i = n(440),
            s = n.n(i),
            a = {
                INIT: "@@redux/INIT"
            }
    }, function(t, e, n) {
        "use strict"
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = function() {
                function t(t, e, n) {
                    this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
                }
                return t.prototype.observe = function(t) {
                    switch (this.kind) {
                        case "N":
                            return t.next && t.next(this.value);
                        case "E":
                            return t.error && t.error(this.error);
                        case "C":
                            return t.complete && t.complete()
                    }
                }, t.prototype.do = function(t, e, n) {
                    switch (this.kind) {
                        case "N":
                            return t && t(this.value);
                        case "E":
                            return e && e(this.error);
                        case "C":
                            return n && n()
                    }
                }, t.prototype.accept = function(t, e, n) {
                    return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                }, t.prototype.toObservable = function() {
                    switch (this.kind) {
                        case "N":
                            return r.Observable.of(this.value);
                        case "E":
                            return r.Observable.throw(this.error);
                        case "C":
                            return r.Observable.empty()
                    }
                    throw new Error("unexpected notification kind value")
                }, t.createNext = function(e) {
                    return void 0 !== e ? new t("N", e) : this.undefinedValueNotification
                }, t.createError = function(e) {
                    return new t("E", void 0, e)
                }, t.createComplete = function() {
                    return this.completeNotification
                }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
            }();
        e.Notification = o
    }, function(t, e, n) {
        "use strict";
        e.empty = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                throw t
            },
            complete: function() {}
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(413);
        r.Observable.empty = o.empty
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(160);
        r.Observable.of = o.of
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(417);
        r.Observable.prototype.catch = o._catch, r.Observable.prototype._catch = o._catch
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(420);
        r.Observable.prototype.delay = o.delay
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(421);
        r.Observable.prototype.do = o._do, r.Observable.prototype._do = o._do
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(161);
        r.Observable.prototype.filter = o.filter
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(80);
        r.Observable.prototype.map = o.map
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(423);
        r.Observable.prototype.mergeMap = o.mergeMap, r.Observable.prototype.flatMap = o.mergeMap
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = function(t) {
                function e(e, n) {
                    t.call(this), this.value = e, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1)
                }
                return r(e, t), e.create = function(t, n) {
                    return new e(t, n)
                }, e.dispatch = function(t) {
                    var e = t.done,
                        n = t.value,
                        r = t.subscriber;
                    if (e) return void r.complete();
                    r.next(n), r.closed || (t.done = !0, this.schedule(t))
                }, e.prototype._subscribe = function(t) {
                    var n = this.value,
                        r = this.scheduler;
                    if (r) return r.schedule(e.dispatch, 0, {
                        done: !1,
                        value: n,
                        subscriber: t
                    });
                    t.next(n), t.closed || t.complete()
                }, e
            }(o.Observable);
        e.ScalarObservable = i
    }, function(t, e, n) {
        "use strict";
        var r = n(406);
        e.from = r.FromObservable.create
    }, function(t, e, n) {
        "use strict";
        var r = n(162);
        e.merge = r.mergeStatic
    }, function(t, e, n) {
        "use strict";
        var r = n(49);
        e.of = r.ArrayObservable.of
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return this.lift(new s(t, e))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8);
        e.filter = r;
        var s = function() {
                function t(t, e) {
                    this.predicate = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new a(t, this.predicate, this.thisArg))
                }, t
            }(),
            a = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.predicate = n, this.thisArg = r, this.count = 0, this.predicate = n
                }
                return o(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.count++)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e && this.destination.next(t)
                }, e
            }(i.Subscriber)
    }, function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
            return this.lift.call(o.apply(void 0, [this].concat(t)))
        }

        function o() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
            var n = Number.POSITIVE_INFINITY,
                r = null,
                o = t[t.length - 1];
            return c.isScheduler(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof i.Observable ? t[0] : new s.ArrayObservable(t, r).lift(new a.MergeAllOperator(n))
        }
        var i = n(0),
            s = n(49),
            a = n(422),
            c = n(167);
        e.merge = r, e.mergeStatic = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = function(t) {
                function e() {
                    var e = t.call(this, "object unsubscribed");
                    this.name = e.name = "ObjectUnsubscribedError", this.stack = e.stack, this.message = e.message
                }
                return r(e, t), e
            }(Error);
        e.ObjectUnsubscribedError = o
    }, function(t, e, n) {
        "use strict";
        e.isArrayLike = function(t) {
            return t && "number" == typeof t.length
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return null != t && "object" == typeof t
        }
        e.isObject = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        e.isPromise = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" == typeof t.schedule
        }
        e.isScheduler = r
    }, function(t, e) {
        t.exports = /[\0-\x1F\x7F-\x9F]/
    }, function(t, e) {
        t.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
    }, function(t, e) {
        t.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(290),
            s = n(21),
            a = n(29);
        e.App = function(t, e) {
            a.log("BotChat.App props", t), i.render(o.createElement(c, t), e)
        };
        var c = function(t) {
            return o.createElement("div", {
                className: "wc-app"
            }, o.createElement(s.Chat, r.__assign({}, t)))
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t
        }();
        e.SpeechOptions = r
    }, function(t, e, n) {
        "use strict";
        var r = n(56),
            o = n(89)(6),
            i = "findIndex",
            s = !0;
        i in [] && Array(1)[i](function() {
            s = !1
        }), r(r.P + r.F * s, "Array", {
            findIndex: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(88)(i)
    }, function(t, e, n) {
        "use strict";
        var r = n(56),
            o = n(89)(5),
            i = !0;
        "find" in [] && Array(1).find(function() {
            i = !1
        }), r(r.P + r.F * i, "Array", {
            find: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(88)("find")
    }, function(t, e, n) {
        "use strict";
        var r = n(56),
            o = n(94),
            i = n(203),
            s = "".startsWith;
        r(r.P + r.F * n(193)("startsWith"), "String", {
            startsWith: function(t) {
                var e = i(this, t, "startsWith"),
                    n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    r = String(t);
                return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
            }
        })
    }, function(t, e) {
        t.exports = {
            supportsInteractivity: !0,
            strongSeparation: {
                spacing: 40,
                lineThickness: 1,
                lineColor: "#eeeeee"
            },
            fontFamily: '"Segoe UI", sans-serif',
            fontSizes: {
                small: 12,
                normal: 13,
                medium: 15,
                large: 17,
                extraLarge: 19
            },
            fontWeights: {
                lighter: 200,
                normal: 400,
                bolder: 700
            },
            colors: {
                dark: {
                    normal: "#000000",
                    subtle: "#808c95"
                },
                light: {
                    normal: "#ffffff",
                    subtle: "#88ffff"
                },
                accent: {
                    normal: "#2e89fc",
                    subtle: "#802E8901"
                },
                attention: {
                    normal: "#ffd800",
                    subtle: "#CCFFD800"
                },
                good: {
                    normal: "#00ff00",
                    subtle: "#CC00FF00"
                },
                warning: {
                    normal: "#ff0000",
                    subtle: "#CCFF0000"
                }
            },
            imageSizes: {
                small: 40,
                medium: 64,
                large: 96
            },
            actions: {
                maxActions: 100,
                separation: {
                    spacing: 8
                },
                buttonSpacing: 8,
                stretch: !1,
                showCard: {
                    actionMode: "inlineEdgeToEdge",
                    inlineTopMargin: 16,
                    backgroundColor: "#00000000",
                    padding: {
                        top: 8,
                        right: 8,
                        bottom: 8,
                        left: 8
                    }
                },
                actionsOrientation: "vertical",
                actionAlignment: "left"
            },
            adaptiveCard: {
                backgroundColor: "#00000000",
                padding: {
                    left: 8,
                    top: 8,
                    right: 8,
                    bottom: 8
                }
            },
            container: {
                separation: {
                    spacing: 8
                },
                normal: {
                    backgroundColor: "#00000000"
                },
                emphasis: {
                    backgroundColor: "#eeeeee",
                    borderColor: "#aaaaaa",
                    borderThickness: {
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    },
                    padding: {
                        top: 8,
                        right: 8,
                        bottom: 8,
                        left: 8
                    }
                }
            },
            textBlock: {
                color: "dark",
                separations: {
                    small: {
                        spacing: 8
                    },
                    normal: {
                        spacing: 8
                    },
                    medium: {
                        spacing: 8
                    },
                    large: {
                        spacing: 8
                    },
                    extraLarge: {
                        spacing: 8
                    }
                }
            },
            image: {
                size: "medium",
                separation: {
                    spacing: 8
                }
            },
            imageSet: {
                imageSize: "medium",
                separation: {
                    spacing: 8
                }
            },
            factSet: {
                separation: {
                    spacing: 8
                },
                title: {
                    color: "dark",
                    size: "normal",
                    isSubtle: !1,
                    weight: "bolder",
                    wrap: !0,
                    maxWidth: 150
                },
                value: {
                    color: "dark",
                    size: "normal",
                    isSubtle: !1,
                    weight: "normal",
                    wrap: !0
                },
                spacing: 8
            },
            input: {
                separation: {
                    spacing: 8
                }
            },
            columnSet: {
                separation: {
                    spacing: 8
                }
            },
            column: {
                separation: {
                    spacing: 8
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(52),
            s = n(182),
            a = n(183),
            c = function(t) {
                var e = t.attachments,
                    n = t.attachmentLayout,
                    a = r.__rest(t, ["attachments", "attachmentLayout"]);
                return e && 0 !== e.length ? "carousel" === n ? o.createElement(s.Carousel, r.__assign({
                    attachments: e
                }, a)) : o.createElement("div", {
                    className: "wc-list"
                }, e.map(function(e, n) {
                    return o.createElement(i.AttachmentView, {
                        key: n,
                        attachment: e,
                        format: t.format,
                        onCardAction: t.onCardAction,
                        onImageLoad: t.onImageLoad
                    })
                })) : null
            },
            u = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype.shouldComponentUpdate = function(t) {
                    return this.props.activity !== t.activity || this.props.format !== t.format || "message" === this.props.activity.type && "carousel" === this.props.activity.attachmentLayout && this.props.size !== t.size
                }, e.prototype.render = function() {
                    var t = this.props,
                        e = t.activity,
                        n = r.__rest(t, ["activity"]);
                    switch (e.type) {
                        case "message":
                            return o.createElement("div", null, o.createElement(a.FormattedText, {
                                text: e.text,
                                format: e.textFormat,
                                onImageLoad: n.onImageLoad
                            }), o.createElement(c, {
                                attachments: e.attachments,
                                attachmentLayout: e.attachmentLayout,
                                format: n.format,
                                onCardAction: n.onCardAction,
                                onImageLoad: n.onImageLoad,
                                size: n.size
                            }));
                        case "typing":
                            return o.createElement("div", {
                                className: "wc-typing"
                            })
                    }
                }, e
            }(o.Component);
        e.ActivityView = u
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = t.parent; e && !(e instanceof l);) e = e.parent;
            return e
        }

        function o(t) {
            if (!t.actions) return t;
            var e = [];
            return t.actions.forEach(function(t) {
                if ("Action.Http" !== t.type) {
                    if ("Action.ShowCard" === t.type) {
                        var n = t;
                        n.card = o(n.card)
                    }
                    e.push(t)
                }
            }), i.__assign({}, t, {
                actions: e
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(11),
            s = n(9),
            a = n(209),
            c = n(21),
            u = n(177),
            l = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.adaptiveCardContainer = e, n
                }
                return i.__extends(e, t), e
            }(a.AdaptiveCard);
        a.AdaptiveCard.onExecuteAction = function(t) {
            if (t instanceof a.OpenUrlAction) window.open(t.url);
            else if (t instanceof a.SubmitAction) {
                var e = r(t);
                if (e && void 0 !== t.data)
                    if ("object" == typeof t.data && t.data.__isBotFrameworkCardAction) {
                        var n = t.data;
                        e.adaptiveCardContainer.onCardAction(n.type, n.value)
                    } else e.adaptiveCardContainer.onCardAction("string" == typeof t.data ? "imBack" : "postBack", t.data)
            }
        };
        var p = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.onCardAction = function(t, e) {
                    n.props.onCardAction(t, e)
                }, n
            }
            return i.__extends(e, t), e.prototype.onClick = function(t) {
                if (this.props.onClick) switch (t.target.tagName) {
                    case "A":
                    case "AUDIO":
                    case "VIDEO":
                    case "BUTTON":
                    case "INPUT":
                    case "LABEL":
                    case "TEXTAREA":
                    case "SELECT":
                        break;
                    default:
                        this.props.onClick(t)
                }
            }, e.prototype.componentDidMount = function() {
                var t = this,
                    e = new l(this);
                e.parse(o(this.props.card));
                var n = e.validate();
                if (0 === n.length) {
                    var r = void 0;
                    try {
                        r = e.render()
                    } catch (t) {
                        var i = {
                            error: -1,
                            message: t
                        };
                        n.push(i), t.stack && (i.message += "\n" + t.stack)
                    }
                    if (r) {
                        if (this.props.onImageLoad) {
                            var s = r.querySelectorAll("img");
                            s && s.length > 0 && Array.prototype.forEach.call(s, function(e) {
                                e.addEventListener("load", t.props.onImageLoad)
                            })
                        }
                        return void this.div.appendChild(r)
                    }
                }
                n.length > 0 && (console.log("Error(s) rendering AdaptiveCard:"), n.forEach(function(t) {
                    return console.log(t.message)
                }), this.setState({
                    errors: n.map(function(t) {
                        return t.message
                    })
                }))
            }, e.prototype.render = function() {
                var t, e = this,
                    n = this.state && this.state.errors && this.state.errors.length > 0;
                return t = n ? s.createElement("div", null, s.createElement("svg", {
                    className: "error-icon",
                    viewBox: "0 0 15 12.01"
                }, s.createElement("path", {
                    d: "M7.62 8.63v-.38H.94a.18.18 0 0 1-.19-.19V.94A.18.18 0 0 1 .94.75h10.12a.18.18 0 0 1 .19.19v3.73H12V.94a.91.91 0 0 0-.07-.36 1 1 0 0 0-.5-.5.91.91 0 0 0-.37-.08H.94a.91.91 0 0 0-.37.07 1 1 0 0 0-.5.5.91.91 0 0 0-.07.37v7.12a.91.91 0 0 0 .07.36 1 1 0 0 0 .5.5.91.91 0 0 0 .37.08h6.72c-.01-.12-.04-.24-.04-.37z M11.62 5.26a3.27 3.27 0 0 1 1.31.27 3.39 3.39 0 0 1 1.8 1.8 3.36 3.36 0 0 1 0 2.63 3.39 3.39 0 0 1-1.8 1.8 3.36 3.36 0 0 1-2.62 0 3.39 3.39 0 0 1-1.8-1.8 3.36 3.36 0 0 1 0-2.63 3.39 3.39 0 0 1 1.8-1.8 3.27 3.27 0 0 1 1.31-.27zm0 6a2.53 2.53 0 0 0 1-.21A2.65 2.65 0 0 0 14 9.65a2.62 2.62 0 0 0 0-2 2.65 2.65 0 0 0-1.39-1.39 2.62 2.62 0 0 0-2 0A2.65 2.65 0 0 0 9.2 7.61a2.62 2.62 0 0 0 0 2A2.65 2.65 0 0 0 10.6 11a2.53 2.53 0 0 0 1.02.26zM13 7.77l-.86.86.86.86-.53.53-.86-.86-.86.86-.53-.53.86-.86-.86-.86.53-.53.86.86.86-.86zM1.88 7.13h2.25V4.88H1.88zm.75-1.5h.75v.75h-.75zM5.63 2.63h4.5v.75h-4.5zM1.88 4.13h2.25V1.88H1.88zm.75-1.5h.75v.75h-.75zM9 5.63H5.63v.75h2.64A4 4 0 0 1 9 5.63z"
                })), s.createElement("div", {
                    className: "error-text"
                }, "Can't render card")) : this.props.children ? s.createElement("div", {
                    className: "non-adaptive-content"
                }, this.props.children) : null, s.createElement("div", {
                    className: c.classList("wc-card", "wc-adaptive-card", this.props.className, n && "error"),
                    ref: function(t) {
                        return e.div = t
                    },
                    onClick: function(t) {
                        return e.onClick(t)
                    }
                }, t)
            }, e.prototype.componentDidUpdate = function() {
                this.props.onImageLoad && this.props.onImageLoad()
            }, e
        }(s.Component);
        e.AdaptiveCardContainer = p, a.setHostConfig(u)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(172);
        e.App = r.App;
        var o = n(21);
        e.Chat = o.Chat,
            function(t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
            }(n(53));
        var i = n(52);
        e.queryParams = i.queryParams;
        var s = n(173);
        e.SpeechOptions = s.SpeechOptions;
        var a = n(39);
        e.Speech = a.Speech, n(176), n(175), n(174)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = function() {
                function t() {
                    this.container = {
                        type: "Container",
                        items: []
                    }, this.card = {
                        type: "AdaptiveCard",
                        version: "0.5",
                        body: [this.container]
                    }
                }
                return t.prototype.addColumnSet = function(t, e) {
                    void 0 === e && (e = this.container);
                    var n = {
                        type: "ColumnSet",
                        columns: t.map(function(t) {
                            return {
                                type: "Column",
                                size: t.toString(),
                                items: []
                            }
                        })
                    };
                    return e.items.push(n), n.columns
                }, t.prototype.addItems = function(t, e) {
                    void 0 === e && (e = this.container), e.items.push.apply(e.items, t)
                }, t.prototype.addTextBlock = function(t, e, n) {
                    if (void 0 === n && (n = this.container), void 0 !== t) {
                        var o = r.__assign({
                            type: "TextBlock",
                            text: t
                        }, e);
                        n.items.push(o)
                    }
                }, t.prototype.addButtons = function(t) {
                    t && (this.card.actions = t.map(function(t) {
                        var e = r.__assign({
                            __isBotFrameworkCardAction: !0
                        }, t);
                        return {
                            title: t.title,
                            type: "Action.Submit",
                            data: e
                        }
                    }))
                }, t.prototype.addCommon = function(t) {
                    this.addTextBlock(t.title, {
                        size: "medium",
                        weight: "bolder"
                    }), this.addTextBlock(t.subtitle, {
                        isSubtle: !0,
                        wrap: !0,
                        separation: "none"
                    }), this.addTextBlock(t.text, {
                        wrap: !0
                    }), this.addButtons(t.buttons)
                }, t.prototype.addImage = function(t, e) {
                    void 0 === e && (e = this.container);
                    var n = {
                        type: "Image",
                        url: t,
                        size: "stretch"
                    };
                    e.items.push(n)
                }, t
            }();
        e.AdaptiveCardBuilder = o, e.buildCommonCard = function(t) {
            if (!t) return null;
            var e = new o;
            return e.addCommon(t), e.card
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(52),
            s = n(87),
            a = n(29),
            c = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype.updateContentWidth = function() {
                    var t = this.props.size.width - this.props.format.carouselMargin;
                    this.root.style.width = "", this.root.offsetWidth > t && (this.root.style.width = t.toString() + "px", this.hscroll.updateScrollButtons())
                }, e.prototype.componentDidMount = function() {
                    this.updateContentWidth()
                }, e.prototype.componentDidUpdate = function() {
                    this.updateContentWidth()
                }, e.prototype.render = function() {
                    var t = this;
                    return o.createElement("div", {
                        className: "wc-carousel",
                        ref: function(e) {
                            return t.root = e
                        }
                    }, o.createElement(s.HScroll, {
                        ref: function(e) {
                            return t.hscroll = e
                        },
                        prevSvgPathData: "M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z",
                        nextSvgPathData: "M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z",
                        scrollUnit: "item"
                    }, o.createElement(u, r.__assign({}, this.props))))
                }, e
            }(o.PureComponent);
        e.Carousel = c;
        var u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r.__extends(e, t), e.prototype.render = function() {
                a.log("rendering CarouselAttachments");
                var t = this.props,
                    e = (t.attachments, r.__rest(t, ["attachments"]));
                return o.createElement("ul", null, this.props.attachments.map(function(t, n) {
                    return o.createElement("li", {
                        key: n,
                        className: "wc-carousel-item"
                    }, o.createElement(i.AttachmentView, {
                        attachment: t,
                        format: e.format,
                        onCardAction: e.onCardAction,
                        onImageLoad: e.onImageLoad
                    }))
                }))
            }, e
        }(o.PureComponent)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(100),
            o = n(9);
        e.FormattedText = function(t) {
            if (!t.text || "" === t.text) return null;
            switch (t.format) {
                case "xml":
                case "plain":
                    return i(t.text);
                default:
                    return c(t.text, t.onImageLoad)
            }
        };
        var i = function(t) {
                var e = t.replace("\r", "").split("\n"),
                    n = e.map(function(t, e) {
                        return o.createElement("span", {
                            key: e
                        }, t, o.createElement("br", null))
                    });
                return o.createElement("span", {
                    className: "format-plain"
                }, n)
            },
            s = new r({
                html: !1,
                linkify: !0,
                typographer: !0
            }),
            a = s.renderer.rules.link_open || function(t, e, n, r, o) {
                return o.renderToken(t, e, n)
            };
        s.renderer.rules.link_open = function(t, e, n, r, o) {
            var i = t[e].attrIndex("target");
            return i < 0 ? t[e].attrPush(["target", "_blank"]) : t[e].attrs[i][1] = "_blank", a(t, e, n, r, o)
        };
        var c = function(t, e) {
            var n = t.replace(/<br\s*\/?>/gi, "\r\n\r\n").replace(/\[(.*?)\]\((.*?)\)/gi, function(t, e, n) {
                    return "[" + e + "](" + s.normalizeLink(n) + ")"
                }),
                r = s.render(n);
            return o.createElement("div", {
                className: "format-markdown",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(48),
            s = n(178),
            a = n(21),
            c = n(29),
            u = n(40),
            l = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.scrollToBottom = !0, n.measurableCarousel = function() {
                        return o.createElement(m, {
                            ref: function(t) {
                                return n.carouselActivity = t
                            },
                            activity: {
                                type: "message",
                                id: "",
                                from: {
                                    id: ""
                                },
                                attachmentLayout: "carousel"
                            },
                            format: null,
                            fromMe: !1,
                            onClickActivity: null,
                            onClickRetry: null,
                            selected: !1,
                            showTimestamp: !1
                        }, o.createElement("div", {
                            style: {
                                width: n.largeWidth
                            }
                        }, " "))
                    }, n
                }
                return r.__extends(e, t), e.prototype.componentWillUpdate = function() {
                    this.scrollToBottom = Math.abs(this.scrollMe.scrollHeight - this.scrollMe.scrollTop - this.scrollMe.offsetHeight) <= 1
                }, e.prototype.componentDidUpdate = function() {
                    if (void 0 == this.props.format.carouselMargin) {
                        var t = f(this.carouselActivity.messageDiv) - this.largeWidth,
                            e = this.carouselActivity.messageDiv.offsetParent.offsetWidth - t,
                            n = this.props.size.width - e;
                        c.log("history measureMessage " + n), this.props.setMeasurements(n), this.carouselActivity = null
                    }
                    this.autoscroll()
                }, e.prototype.autoscroll = function() {
                    var t = Math.max(0, h(this.scrollMe) - this.scrollContent.offsetHeight);
                    this.scrollContent.style.marginTop = t + "px";
                    var e = this.props.activities[this.props.activities.length - 1],
                        n = e && this.props.isFromMe && this.props.isFromMe(e);
                    (this.scrollToBottom || n) && (this.scrollMe.scrollTop = this.scrollMe.scrollHeight - this.scrollMe.offsetHeight)
                }, e.prototype.doCardAction = function(t, e) {
                    return this.props.setFocus(), this.props.onClickCardAction(), this.props.doCardAction(t, e)
                }, e.prototype.render = function() {
                    var t = this;
                    c.log("History props", this);
                    var e;
                    void 0 !== this.props.size.width && (void 0 === this.props.format.carouselMargin ? (this.largeWidth = 2 * this.props.size.width, e = o.createElement(this.measurableCarousel, null)) : e = this.props.activities.map(function(e, n) {
                        return o.createElement(m, {
                            format: t.props.format,
                            key: "message" + n,
                            activity: e,
                            showTimestamp: n === t.props.activities.length - 1 || n + 1 < t.props.activities.length && d(e, t.props.activities[n + 1]),
                            selected: t.props.isSelected(e),
                            fromMe: t.props.isFromMe(e),
                            onClickActivity: t.props.onClickActivity(e),
                            onClickRetry: function(n) {
                                n.preventDefault(), n.stopPropagation(), t.props.onClickRetry(e)
                            }
                        }, o.createElement(s.ActivityView, {
                            format: t.props.format,
                            size: t.props.size,
                            activity: e,
                            onCardAction: function(e, n) {
                                return t.doCardAction(e, n)
                            },
                            onImageLoad: function() {
                                return t.autoscroll()
                            }
                        }))
                    }));
                    var n = a.classList("wc-message-groups", !this.props.format.options.showHeader && "no-header");
                    return o.createElement("div", {
                        className: n,
                        ref: function(e) {
                            return t.scrollMe = e || t.scrollMe
                        }
                    }, o.createElement("div", {
                        className: "wc-message-group-content",
                        ref: function(e) {
                            e && (t.scrollContent = e)
                        }
                    }, e))
                }, e
            }(o.Component);
        e.HistoryView = l, e.History = i.connect(function(t) {
            return {
                format: t.format,
                size: t.size,
                activities: t.history.activities,
                connectionSelectedActivity: t.connection.selectedActivity,
                selectedActivity: t.history.selectedActivity,
                botConnection: t.connection.botConnection,
                user: t.connection.user
            }
        }, {
            setMeasurements: function(t) {
                return {
                    type: "Set_Measurements",
                    carouselMargin: t
                }
            },
            onClickRetry: function(t) {
                return {
                    type: "Send_Message_Retry",
                    clientActivityId: t.channelData.clientActivityId
                }
            },
            onClickCardAction: function() {
                return {
                    type: "Card_Action_Clicked"
                }
            },
            sendMessage: u.sendMessage
        }, function(t, e, n) {
            return {
                format: t.format,
                size: t.size,
                activities: t.activities,
                setMeasurements: e.setMeasurements,
                onClickRetry: e.onClickRetry,
                onClickCardAction: e.onClickCardAction,
                setFocus: n.setFocus,
                doCardAction: a.doCardAction(t.botConnection, t.user, t.format.locale, e.sendMessage),
                isFromMe: function(e) {
                    return e.from.id === t.user.id
                },
                isSelected: function(e) {
                    return e === t.selectedActivity
                },
                onClickActivity: function(e) {
                    return t.connectionSelectedActivity && function() {
                        return t.connectionSelectedActivity.next({
                            activity: e
                        })
                    }
                }
            }
        })(l);
        var p = function(t, e) {
                var n = window.getComputedStyle(t),
                    r = {};
                return e.forEach(function(t) {
                    return r[t] = parseInt(n.getPropertyValue(t))
                }), r
            },
            h = function(t) {
                var e = p(t, ["padding-top", "padding-bottom"]);
                return t.offsetHeight - e["padding-top"] - e["padding-bottom"]
            },
            f = function(t) {
                var e = p(t, ["padding-left", "padding-right"]);
                return t.offsetWidth + e["padding-left"] + e["padding-right"]
            },
            d = function(t, e) {
                return Date.parse(e.timestamp) - Date.parse(t.timestamp) > 3e5
            },
            m = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype.render = function() {
                    var t, e = this;
                    switch (this.props.activity.id) {
                        case void 0:
                            t = o.createElement("span", null, this.props.format.strings.messageSending);
                            break;
                        case null:
                            t = o.createElement("span", null, this.props.format.strings.messageFailed);
                            break;
                        case "retry":
                            t = o.createElement("span", null, this.props.format.strings.messageFailed, " ", o.createElement("a", {
                                href: ".",
                                onClick: this.props.onClickRetry
                            }, this.props.format.strings.messageRetry));
                            break;
                        default:
                            var n = void 0;
                            this.props.showTimestamp && (n = this.props.format.strings.timeSent.replace("%1", new Date(this.props.activity.timestamp).toLocaleTimeString())), t = o.createElement("span", null, this.props.activity.from.name || this.props.activity.from.id, n)
                    }
                    var r = this.props.fromMe ? "me" : "bot",
                        i = a.classList("wc-message-wrapper", this.props.activity.attachmentLayout || "list", this.props.onClickActivity && "clickable"),
                        s = a.classList("wc-message-content", this.props.selected && "selected");
                    return o.createElement("div", {
                        "data-activity-id": this.props.activity.id,
                        className: i,
                        onClick: this.props.onClickActivity
                    }, o.createElement("div", {
                        className: "wc-message wc-message-from-" + r,
                        ref: function(t) {
                            return e.messageDiv = t
                        }
                    }, o.createElement("div", {
                        className: s
                    }, o.createElement("svg", {
                        className: "wc-message-callout"
                    }, o.createElement("path", {
                        className: "point-left",
                        d: "m0,6 l6 6 v-12 z"
                    }), o.createElement("path", {
                        className: "point-right",
                        d: "m6,6 l-6 6 v-12 z"
                    })), this.props.children)), o.createElement("div", {
                        className: "wc-message-from wc-message-from-" + r
                    }, t))
                }, e
            }(o.Component);
        e.WrappedActivity = m
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (t && 0 !== t.length) {
                var e = t[t.length - 1];
                return "message" === e.type && e.suggestedActions && e.suggestedActions.actions.length > 0 ? e : void 0
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(11),
            i = n(9),
            s = n(48),
            a = n(87),
            c = n(21),
            u = n(40),
            l = function(t) {
                return i.createElement("div", {
                    className: c.classList("wc-message-pane", t.activityWithSuggestedActions && "show-actions")
                }, t.children, i.createElement("div", {
                    className: "wc-suggested-actions"
                }, i.createElement(p, o.__assign({}, t))))
            },
            p = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return o.__extends(e, t), e.prototype.actionClick = function(t, e) {
                    this.props.activityWithSuggestedActions && (this.props.takeSuggestedAction(this.props.activityWithSuggestedActions), this.props.doCardAction(e.type, e.value), this.props.setFocus(), t.stopPropagation())
                }, e.prototype.shouldComponentUpdate = function(t) {
                    return !!t.activityWithSuggestedActions
                }, e.prototype.render = function() {
                    var t = this;
                    return this.props.activityWithSuggestedActions ? i.createElement(a.HScroll, {
                        prevSvgPathData: "M 16.5 22 L 19 19.5 L 13.5 14 L 19 8.5 L 16.5 6 L 8.5 14 L 16.5 22 Z",
                        nextSvgPathData: "M 12.5 22 L 10 19.5 L 15.5 14 L 10 8.5 L 12.5 6 L 20.5 14 L 12.5 22 Z",
                        scrollUnit: "page"
                    }, i.createElement("ul", null, this.props.activityWithSuggestedActions.suggestedActions.actions.map(function(e, n) {
                        return i.createElement("li", {
                            key: n
                        }, i.createElement("button", {
                            type: "button",
                            onClick: function(n) {
                                return t.actionClick(n, e)
                            },
                            title: e.title
                        }, e.title))
                    }))) : null
                }, e
            }(i.Component);
        e.MessagePane = s.connect(function(t) {
            return {
                activityWithSuggestedActions: r(t.history.activities),
                botConnection: t.connection.botConnection,
                user: t.connection.user,
                locale: t.format.locale
            }
        }, {
            takeSuggestedAction: function(t) {
                return {
                    type: "Take_SuggestedAction",
                    message: t
                }
            },
            sendMessage: u.sendMessage
        }, function(t, e, n) {
            return {
                activityWithSuggestedActions: t.activityWithSuggestedActions,
                takeSuggestedAction: e.takeSuggestedAction,
                children: n.children,
                setFocus: n.setFocus,
                doCardAction: c.doCardAction(t.botConnection, t.user, t.locale, e.sendMessage)
            }
        })(l)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(9),
            i = n(21),
            s = n(48),
            a = n(39),
            c = n(40),
            u = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return r.__extends(e, t), e.prototype.sendMessage = function() {
                    this.props.inputText.trim().length > 0 && this.props.sendMessage(this.props.inputText)
                }, e.prototype.onKeyPress = function(t) {
                    "Enter" === t.key && this.sendMessage()
                }, e.prototype.onClickSend = function() {
                    this.textInput.focus(), this.sendMessage()
                }, e.prototype.onChangeFile = function() {
                    this.textInput.focus(), this.props.sendFiles(this.fileInput.files), this.fileInput.value = null
                }, e.prototype.onTextInputFocus = function() {
                    this.props.listening && this.props.stopListening()
                }, e.prototype.onClickMic = function() {
                    this.props.listening ? this.props.stopListening() : this.props.startListening()
                }, e.prototype.render = function() {
                    var t = this,
                        e = "wc-console";
                    this.props.inputText.length > 0 && (e += " has-text");
                    var n = this.props.listening || a.Speech.SpeechRecognizer.speechIsAvailable() && !this.props.inputText.length,
                        r = i.classList("wc-send", n && "hidden"),
                        s = i.classList("wc-mic", !n && "hidden", this.props.listening && "active", !this.props.listening && "inactive");
                    return o.createElement("div", {
                        className: e
                    }, o.createElement("input", {
                        id: "wc-upload-input",
                        type: "file",
                        ref: function(e) {
                            return t.fileInput = e
                        },
                        multiple: !0,
                        onChange: function() {
                            return t.onChangeFile()
                        }
                    }), o.createElement("label", {
                        className: "wc-upload",
                        htmlFor: "wc-upload-input"
                    }, o.createElement("svg",null, o.createElement("path", {
                        className:"cls-1",
                        d: "M23.36,12.52a.77.77,0,0,0-1.08,0l-9.15,9.2a3,3,0,0,1-4.3-4.31L18.25,8a1.9,1.9,0,0,1,2.69,2.69l-7.8,7.8h0a.75.75,0,0,1-1.07,0,.76.76,0,0,1,0-1.08l3.77-3.76a.78.78,0,0,0,0-1.08.76.76,0,0,0-1.08,0L11,16.29a2.28,2.28,0,1,0,3.23,3.23h0l7.8-7.8a3.42,3.42,0,1,0-4.84-4.84L7.75,16.34a4.56,4.56,0,0,0,6.46,6.45l9.15-9.19A.77.77,0,0,0,23.36,12.52Z",
                    }))), o.createElement("div", {
                        className: "wc-textbox"
                    }, o.createElement("input", {
                        type: "text",
                        className: "wc-shellinput",
                        ref: function(e) {
                            return t.textInput = e
                        },
                        autoFocus: !0,
                        value: this.props.inputText,
                        onChange: function(e) {
                            return t.props.onChangeText(t.textInput.value)
                        },
                        onKeyPress: function(e) {
                            return t.onKeyPress(e)
                        },
                        onFocus: function() {
                            return t.onTextInputFocus()
                        },
                        placeholder: this.props.listening ? this.props.strings.listeningIndicator : this.props.strings.consolePlaceholder
                    })), o.createElement("label", {
                        className: r,
                        onClick: function() {
                            return t.onClickSend()
                        }
                    }, o.createElement("svg", null, o.createElement("path", {
                        d:"M23.87,6.13,5.76,16.32l5.78,2.14,8.93-8.36-6.79,9.16h0v5l3.25-3.78L21,22Z"
                    }))), o.createElement("label", {
                        className: s,
                        onClick: function() {
                            return t.onClickMic()
                        }
                    }, o.createElement("svg", {
                        width: "28",
                        height: "22",
                        viewBox: "0 0 58 58"
                    }, o.createElement("path", {
                        d: "M 44 28 C 43.448 28 43 28.447 43 29 L 43 35 C 43 42.72 36.72 49 29 49 C 21.28 49 15 42.72 15 35 L 15 29 C 15 28.447 14.552 28 14 28 C 13.448 28 13 28.447 13 29 L 13 35 C 13 43.485 19.644 50.429 28 50.949 L 28 56 L 23 56 C 22.448 56 22 56.447 22 57 C 22 57.553 22.448 58 23 58 L 35 58 C 35.552 58 36 57.553 36 57 C 36 56.447 35.552 56 35 56 L 30 56 L 30 50.949 C 38.356 50.429 45 43.484 45 35 L 45 29 C 45 28.447 44.552 28 44 28 Z"
                    }), o.createElement("path", {
                        id: "micFilling",
                        d: "M 28.97 44.438 L 28.97 44.438 C 23.773 44.438 19.521 40.033 19.521 34.649 L 19.521 11.156 C 19.521 5.772 23.773 1.368 28.97 1.368 L 28.97 1.368 C 34.166 1.368 38.418 5.772 38.418 11.156 L 38.418 34.649 C 38.418 40.033 34.166 44.438 28.97 44.438 Z"
                    }), o.createElement("path", {
                        d: "M 29 46 C 35.065 46 40 41.065 40 35 L 40 11 C 40 4.935 35.065 0 29 0 C 22.935 0 18 4.935 18 11 L 18 35 C 18 41.065 22.935 46 29 46 Z M 20 11 C 20 6.037 24.038 2 29 2 C 33.962 2 38 6.037 38 11 L 38 35 C 38 39.963 33.962 44 29 44 C 24.038 44 20 39.963 20 35 L 20 11 Z"
                    }))))
                }, e
            }(o.Component);
        e.Shell = s.connect(function(t) {
            return {
                inputText: t.shell.input,
                strings: t.format.strings,
                locale: t.format.locale,
                user: t.connection.user,
                listening: t.shell.listening
            }
        }, {
            onChangeText: function(t) {
                return {
                    type: "Update_Input",
                    input: t,
                    source: "text"
                }
            },
            stopListening: function() {
                return {
                    type: "Listening_Stop"
                }
            },
            startListening: function() {
                return {
                    type: "Listening_Starting"
                }
            },
            sendMessage: c.sendMessage,
            sendFiles: c.sendFiles
        }, function(t, e, n) {
            return {
                inputText: t.inputText,
                strings: t.strings,
                listening: t.listening,
                onChangeText: e.onChangeText,
                sendMessage: function(n) {
                    return e.sendMessage(n, t.user, t.locale)
                },
                sendFiles: function(n) {
                    return e.sendFiles(n, t.user, t.locale)
                },
                startListening: function() {
                    return e.startListening()
                },
                stopListening: function() {
                    return e.stopListening()
                }
            }
        })(u)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {
            "en-us": {
                title: "Chat",
                send: "Send",
                unknownFile: "[File of type '%1']",
                unknownCard: "[Unknown Card '%1']",
                receiptVat: "VAT",
                receiptTax: "Tax",
                receiptTotal: "Total",
                messageRetry: "retry",
                messageFailed: "couldn't send",
                messageSending: "sending",
                timeSent: " at %1",
                consolePlaceholder: "Type your message...",
                listeningIndicator: "Listening..."
            },
            "nb-no": {
                title: "Chat",
                send: "Send",
                unknownFile: "[Fil av typen '%1']",
                unknownCard: "[Ukjent Kort '%1']",
                receiptVat: "MVA",
                receiptTax: "Skatt",
                receiptTotal: "Totalt",
                messageRetry: "prøv igjen",
                messageFailed: "kunne ikke sende",
                messageSending: "sender",
                timeSent: " %1",
                consolePlaceholder: "Skriv inn melding...",
                listeningIndicator: "Lytter..."
            },
            "de-de": {
                title: "Chat",
                send: "Senden",
                unknownFile: "[Datei vom Typ '%1']",
                unknownCard: "[Unbekannte Card '%1']",
                receiptVat: "VAT",
                receiptTax: "MwSt.",
                receiptTotal: "Gesamtbetrag",
                messageRetry: "wiederholen",
                messageFailed: "konnte nicht senden",
                messageSending: "sendet",
                timeSent: " am %1",
                consolePlaceholder: "Verfasse eine Nachricht...",
                listeningIndicator: "Hören..."
            },
            "pl-pl": {
                title: "Chat",
                send: "Wyślij",
                unknownFile: "[Plik typu '%1']",
                unknownCard: "[Nieznana karta '%1']",
                receiptVat: "VAT",
                receiptTax: "Podatek",
                receiptTotal: "Razem",
                messageRetry: "wyślij ponownie",
                messageFailed: "wysłanie nieudane",
                messageSending: "wysyłanie",
                timeSent: " o %1",
                consolePlaceholder: "Wpisz swoją wiadomość...",
                listeningIndicator: "Słuchający..."
            },
            "ru-ru": {
                title: "Чат",
                send: "Отправить",
                unknownFile: "[Неизвестный тип '%1']",
                unknownCard: "[Неизвестная карта '%1']",
                receiptVat: "VAT",
                receiptTax: "Налог",
                receiptTotal: "Итого",
                messageRetry: "повторить",
                messageFailed: "не удалось отправить",
                messageSending: "отправка",
                timeSent: " в %1",
                consolePlaceholder: "Введите ваше сообщение...",
                listeningIndicator: "прослушивание..."
            },
            "nl-nl": {
                title: "Chat",
                send: "Verstuur",
                unknownFile: "[Bestand van het type '%1']",
                unknownCard: "[Onbekende kaart '%1']",
                receiptVat: "VAT",
                receiptTax: "BTW",
                receiptTotal: "Totaal",
                messageRetry: "opnieuw",
                messageFailed: "versturen mislukt",
                messageSending: "versturen",
                timeSent: " om %1",
                consolePlaceholder: "Typ je bericht...",
                listeningIndicator: "het luisteren..."
            },
            "lv-lv": {
                title: "Tērzēšana",
                send: "Sūtīt",
                unknownFile: "[Nezināms tips '%1']",
                unknownCard: "[Nezināma kartīte '%1']",
                receiptVat: "VAT",
                receiptTax: "Nodoklis",
                receiptTotal: "Kopsumma",
                messageRetry: "Mēģināt vēlreiz",
                messageFailed: "Neizdevās nosūtīt",
                messageSending: "Nosūtīšana",
                timeSent: " %1",
                consolePlaceholder: "Ierakstiet savu ziņu...",
                listeningIndicator: "Klausoties..."
            },
            "pt-br": {
                title: "Bate-papo",
                send: "Enviar",
                unknownFile: "[Arquivo do tipo '%1']",
                unknownCard: "[Cartão desconhecido '%1']",
                receiptVat: "VAT",
                receiptTax: "Imposto",
                receiptTotal: "Total",
                messageRetry: "repetir",
                messageFailed: "não pude enviar",
                messageSending: "enviando",
                timeSent: " às %1",
                consolePlaceholder: "Digite sua mensagem...",
                listeningIndicator: "Ouvindo..."
            },
            "fr-fr": {
                title: "Chat",
                send: "Envoyer",
                unknownFile: "[Fichier de type '%1']",
                unknownCard: "[Carte inconnue '%1']",
                receiptVat: "TVA",
                receiptTax: "Taxe",
                receiptTotal: "Total",
                messageRetry: "reéssayer",
                messageFailed: "envoi impossible",
                messageSending: "envoi",
                timeSent: " à %1",
                consolePlaceholder: "Écrivez votre message...",
                listeningIndicator: "Écoute..."
            },
            "es-es": {
                title: "Chat",
                send: "Enviar",
                unknownFile: "[Archivo de tipo '%1']",
                unknownCard: "[Tarjeta desconocida '%1']",
                receiptVat: "IVA",
                receiptTax: "Impuestos",
                receiptTotal: "Total",
                messageRetry: "reintentar",
                messageFailed: "no enviado",
                messageSending: "enviando",
                timeSent: " a las %1",
                consolePlaceholder: "Escribe tu mensaje...",
                listeningIndicator: "Escuchando..."
            },
            "el-gr": {
                title: "Συνομιλία",
                send: "Αποστολή",
                unknownFile: "[Αρχείο τύπου '%1']",
                unknownCard: "[Αγνωστη Κάρτα '%1']",
                receiptVat: "VAT",
                receiptTax: "ΦΠΑ",
                receiptTotal: "Σύνολο",
                messageRetry: "δοκιμή",
                messageFailed: "αποτυχία",
                messageSending: "αποστολή",
                timeSent: " την %1",
                consolePlaceholder: "Πληκτρολόγηση μηνύματος...",
                listeningIndicator: "Ακούγοντας..."
            },
            "it-it": {
                title: "Chat",
                send: "Invia",
                unknownFile: "[File di tipo '%1']",
                unknownCard: "[Card sconosciuta '%1']",
                receiptVat: "VAT",
                receiptTax: "Tasse",
                receiptTotal: "Totale",
                messageRetry: "riprova",
                messageFailed: "impossibile inviare",
                messageSending: "invio",
                timeSent: " il %1",
                consolePlaceholder: "Scrivi il tuo messaggio...",
                listeningIndicator: "Ascoltando..."
            },
            "zh-hans": {
                title: "聊天",
                send: "发送",
                unknownFile: "[类型为'%1'的文件]",
                unknownCard: "[未知的'%1'卡片]",
                receiptVat: "VAT",
                receiptTax: "税",
                receiptTotal: "共计",
                messageRetry: "重试",
                messageFailed: "无法发送",
                messageSending: "正在发送",
                timeSent: " 用时 %1",
                consolePlaceholder: "输入你的消息...",
                listeningIndicator: "正在倾听..."
            },
            "zh-hant": {
                title: "聊天",
                send: "發送",
                unknownFile: "[類型為'%1'的文件]",
                unknownCard: "[未知的'%1'卡片]",
                receiptVat: "VAT",
                receiptTax: "税",
                receiptTotal: "總共",
                messageRetry: "重試",
                messageFailed: "無法發送",
                messageSending: "正在發送",
                timeSent: " 於 %1",
                consolePlaceholder: "輸入你的訊息...",
                listeningIndicator: "正在聆聽..."
            },
            "zh-yue": {
                title: "傾偈",
                send: "傳送",
                unknownFile: "[類型係'%1'嘅文件]",
                unknownCard: "[唔知'%1'係咩卡片]",
                receiptVat: "VAT",
                receiptTax: "税",
                receiptTotal: "總共",
                messageRetry: "再嚟一次",
                messageFailed: "傳送唔倒",
                messageSending: "而家傳送緊",
                timeSent: " 喺 %1",
                consolePlaceholder: "輸入你嘅訊息...",
                listeningIndicator: "聽緊你講嘢..."
            },
            "cs-cz": {
                title: "Chat",
                send: "Odeslat",
                unknownFile: "[Soubor typu '%1']",
                unknownCard: "[Neznámá karta '%1']",
                receiptVat: "DPH",
                receiptTax: "Daň z prod.",
                receiptTotal: "Celkem",
                messageRetry: "opakovat",
                messageFailed: "nepodařilo se odeslat",
                messageSending: "Odesílání",
                timeSent: " v %1",
                consolePlaceholder: "Napište svou zprávu...",
                listeningIndicator: "Poslouchám..."
            }
        };
        e.defaultStrings = r["en-us"], e.strings = function(t) {
            return t = t.startsWith("de") ? "de-de" : t.startsWith("no") || t.startsWith("nb") || t.startsWith("nn") ? "nb-no" : t.startsWith("pl") ? "pl-pl" : t.startsWith("ru") ? "ru-ru" : t.startsWith("nl") ? "nl-nl" : t.startsWith("lv") ? "lv-lv" : t.startsWith("pt") ? "pt-br" : t.startsWith("fr") ? "fr-fr" : t.startsWith("es") ? "es-es" : t.startsWith("el") ? "el-gr" : t.startsWith("it") ? "it-it" : "zh-yue" === t ? "zh-yue" : "zh-hant" === t || "zh-hk" === t || "zh-mo" === t || "zh-tw" === t ? "zh-hant" : t.startsWith("zh") ? "zh-hans" : t.startsWith("cs") ? "cs-cz" : "en-us", r[t]
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        var r = n(31);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(31),
            o = n(197),
            i = n(41)("species");
        t.exports = function(t) {
            var e;
            return o(t) && (e = t.constructor, "function" != typeof e || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function(t, e, n) {
        var r = n(190);
        t.exports = function(t, e) {
            return new(r(t))(e)
        }
    }, function(t, e, n) {
        var r = n(31),
            o = n(30).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(41)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, !"/./" [t](e)
                } catch (t) {}
            }
            return !0
        }
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        t.exports = !n(55) && !n(93)(function() {
            return 7 != Object.defineProperty(n(192)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(54);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(54);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        var r = n(31),
            o = n(54),
            i = n(41)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function(t, e, n) {
        var r = n(189),
            o = n(195),
            i = n(206),
            s = Object.defineProperty;
        e.f = n(55) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        var r = n(30),
            o = n(57),
            i = n(194),
            s = n(95)("src"),
            a = Function.toString,
            c = ("" + a).split("toString");
        n(90).inspectSource = function(t) {
            return a.call(t)
        }, (t.exports = function(t, e, n, a) {
            var u = "function" == typeof n;
            u && (i(n, "name") || o(n, "name", e)), t[e] !== n && (u && (i(n, s) || o(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }, function(t, e, n) {
        var r = n(30),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    }, function(t, e, n) {
        var r = n(198),
            o = n(92);
        t.exports = function(t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(o(t))
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e, n) {
        var r = n(92);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        var r = n(31);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t
        }

        function o(t, e, n) {
            function o(t, e) {
                var n = g.hasOwnProperty(e) ? g[e] : null;
                w.hasOwnProperty(e) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e), t && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
            }

            function u(t, n) {
                if (n) {
                    a("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), a(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var r = t.prototype,
                        i = r.__reactAutoBindPairs;
                    n.hasOwnProperty(c) && b.mixins(t, n.mixins);
                    for (var s in n)
                        if (n.hasOwnProperty(s) && s !== c) {
                            var u = n[s],
                                l = r.hasOwnProperty(s);
                            if (o(l, s), b.hasOwnProperty(s)) b[s](t, u);
                            else {
                                var p = g.hasOwnProperty(s),
                                    d = "function" == typeof u,
                                    m = d && !p && !l && !1 !== n.autobind;
                                if (m) i.push(s, u), r[s] = u;
                                else if (l) {
                                    var v = g[s];
                                    a(p && ("DEFINE_MANY_MERGED" === v || "DEFINE_MANY" === v), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", v, s), "DEFINE_MANY_MERGED" === v ? r[s] = h(r[s], u) : "DEFINE_MANY" === v && (r[s] = f(r[s], u))
                                } else r[s] = u
                            }
                        }
                } else;
            }

            function l(t, e) {
                if (e)
                    for (var n in e) {
                        var r = e[n];
                        if (e.hasOwnProperty(n)) {
                            var o = n in b;
                            a(!o, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                            var i = n in t;
                            a(!i, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), t[n] = r
                        }
                    }
            }

            function p(t, e) {
                a(t && e && "object" == typeof t && "object" == typeof e, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
                for (var n in e) e.hasOwnProperty(n) && (a(void 0 === t[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), t[n] = e[n]);
                return t
            }

            function h(t, e) {
                return function() {
                    var n = t.apply(this, arguments),
                        r = e.apply(this, arguments);
                    if (null == n) return r;
                    if (null == r) return n;
                    var o = {};
                    return p(o, n), p(o, r), o
                }
            }

            function f(t, e) {
                return function() {
                    t.apply(this, arguments), e.apply(this, arguments)
                }
            }

            function d(t, e) {
                var n = e.bind(t);
                return n
            }

            function m(t) {
                for (var e = t.__reactAutoBindPairs, n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        o = e[n + 1];
                    t[r] = d(t, o)
                }
            }

            function v(t) {
                var e = r(function(t, r, o) {
                    this.__reactAutoBindPairs.length && m(this), this.props = t, this.context = r, this.refs = s, this.updater = o || n, this.state = null;
                    var i = this.getInitialState ? this.getInitialState() : null;
                    a("object" == typeof i && !Array.isArray(i), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"), this.state = i
                });
                e.prototype = new x, e.prototype.constructor = e, e.prototype.__reactAutoBindPairs = [], y.forEach(u.bind(null, e)), u(e, _), u(e, t), u(e, C), e.getDefaultProps && (e.defaultProps = e.getDefaultProps()), a(e.prototype.render, "createClass(...): Class specification must implement a `render` method.");
                for (var o in g) e.prototype[o] || (e.prototype[o] = null);
                return e
            }
            var y = [],
                g = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE"
                },
                b = {
                    displayName: function(t, e) {
                        t.displayName = e
                    },
                    mixins: function(t, e) {
                        if (e)
                            for (var n = 0; n < e.length; n++) u(t, e[n])
                    },
                    childContextTypes: function(t, e) {
                        t.childContextTypes = i({}, t.childContextTypes, e)
                    },
                    contextTypes: function(t, e) {
                        t.contextTypes = i({}, t.contextTypes, e)
                    },
                    getDefaultProps: function(t, e) {
                        t.getDefaultProps ? t.getDefaultProps = h(t.getDefaultProps, e) : t.getDefaultProps = e
                    },
                    propTypes: function(t, e) {
                        t.propTypes = i({}, t.propTypes, e)
                    },
                    statics: function(t, e) {
                        l(t, e)
                    },
                    autobind: function() {}
                },
                _ = {
                    componentDidMount: function() {
                        this.__isMounted = !0
                    }
                },
                C = {
                    componentWillUnmount: function() {
                        this.__isMounted = !1
                    }
                },
                w = {
                    replaceState: function(t, e) {
                        this.updater.enqueueReplaceState(this, t, e)
                    },
                    isMounted: function() {
                        return !!this.__isMounted
                    }
                },
                x = function() {};
            return i(x.prototype, t.prototype, w), v
        }
        var i = n(5),
            s = n(42),
            a = n(1),
            c = "mixins";
        t.exports = o
    }, function(t, e) {
        t.exports = {
            Aacute: "Á",
            aacute: "á",
            Abreve: "Ă",
            abreve: "ă",
            ac: "∾",
            acd: "∿",
            acE: "∾̳",
            Acirc: "Â",
            acirc: "â",
            acute: "´",
            Acy: "А",
            acy: "а",
            AElig: "Æ",
            aelig: "æ",
            af: "⁡",
            Afr: "𝔄",
            afr: "𝔞",
            Agrave: "À",
            agrave: "à",
            alefsym: "ℵ",
            aleph: "ℵ",
            Alpha: "Α",
            alpha: "α",
            Amacr: "Ā",
            amacr: "ā",
            amalg: "⨿",
            amp: "&",
            AMP: "&",
            andand: "⩕",
            And: "⩓",
            and: "∧",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angmsd: "∡",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            Aogon: "Ą",
            aogon: "ą",
            Aopf: "𝔸",
            aopf: "𝕒",
            apacir: "⩯",
            ap: "≈",
            apE: "⩰",
            ape: "≊",
            apid: "≋",
            apos: "'",
            ApplyFunction: "⁡",
            approx: "≈",
            approxeq: "≊",
            Aring: "Å",
            aring: "å",
            Ascr: "𝒜",
            ascr: "𝒶",
            Assign: "≔",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            Atilde: "Ã",
            atilde: "ã",
            Auml: "Ä",
            auml: "ä",
            awconint: "∳",
            awint: "⨑",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            Backslash: "∖",
            Barv: "⫧",
            barvee: "⊽",
            barwed: "⌅",
            Barwed: "⌆",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            Bcy: "Б",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            Because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            Bernoullis: "ℬ",
            Beta: "Β",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            Bfr: "𝔅",
            bfr: "𝔟",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bNot: "⫭",
            bnot: "⌐",
            Bopf: "𝔹",
            bopf: "𝕓",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxbox: "⧉",
            boxdl: "┐",
            boxdL: "╕",
            boxDl: "╖",
            boxDL: "╗",
            boxdr: "┌",
            boxdR: "╒",
            boxDr: "╓",
            boxDR: "╔",
            boxh: "─",
            boxH: "═",
            boxhd: "┬",
            boxHd: "╤",
            boxhD: "╥",
            boxHD: "╦",
            boxhu: "┴",
            boxHu: "╧",
            boxhU: "╨",
            boxHU: "╩",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxul: "┘",
            boxuL: "╛",
            boxUl: "╜",
            boxUL: "╝",
            boxur: "└",
            boxuR: "╘",
            boxUr: "╙",
            boxUR: "╚",
            boxv: "│",
            boxV: "║",
            boxvh: "┼",
            boxvH: "╪",
            boxVh: "╫",
            boxVH: "╬",
            boxvl: "┤",
            boxvL: "╡",
            boxVl: "╢",
            boxVL: "╣",
            boxvr: "├",
            boxvR: "╞",
            boxVr: "╟",
            boxVR: "╠",
            bprime: "‵",
            breve: "˘",
            Breve: "˘",
            brvbar: "¦",
            bscr: "𝒷",
            Bscr: "ℬ",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsolb: "⧅",
            bsol: "\\",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            Bumpeq: "≎",
            bumpeq: "≏",
            Cacute: "Ć",
            cacute: "ć",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            cap: "∩",
            Cap: "⋒",
            capcup: "⩇",
            capdot: "⩀",
            CapitalDifferentialD: "ⅅ",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            Cayleys: "ℭ",
            ccaps: "⩍",
            Ccaron: "Č",
            ccaron: "č",
            Ccedil: "Ç",
            ccedil: "ç",
            Ccirc: "Ĉ",
            ccirc: "ĉ",
            Cconint: "∰",
            ccups: "⩌",
            ccupssm: "⩐",
            Cdot: "Ċ",
            cdot: "ċ",
            cedil: "¸",
            Cedilla: "¸",
            cemptyv: "⦲",
            cent: "¢",
            centerdot: "·",
            CenterDot: "·",
            cfr: "𝔠",
            Cfr: "ℭ",
            CHcy: "Ч",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            Chi: "Χ",
            chi: "χ",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            CircleDot: "⊙",
            circledR: "®",
            circledS: "Ⓢ",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            cir: "○",
            cirE: "⧃",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            Colon: "∷",
            Colone: "⩴",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            Congruent: "≡",
            conint: "∮",
            Conint: "∯",
            ContourIntegral: "∮",
            copf: "𝕔",
            Copf: "ℂ",
            coprod: "∐",
            Coproduct: "∐",
            copy: "©",
            COPY: "©",
            copysr: "℗",
            CounterClockwiseContourIntegral: "∳",
            crarr: "↵",
            cross: "✗",
            Cross: "⨯",
            Cscr: "𝒞",
            cscr: "𝒸",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cupbrcap: "⩈",
            cupcap: "⩆",
            CupCap: "≍",
            cup: "∪",
            Cup: "⋓",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "¤",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dagger: "†",
            Dagger: "‡",
            daleth: "ℸ",
            darr: "↓",
            Darr: "↡",
            dArr: "⇓",
            dash: "‐",
            Dashv: "⫤",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            Dcaron: "Ď",
            dcaron: "ď",
            Dcy: "Д",
            dcy: "д",
            ddagger: "‡",
            ddarr: "⇊",
            DD: "ⅅ",
            dd: "ⅆ",
            DDotrahd: "⤑",
            ddotseq: "⩷",
            deg: "°",
            Del: "∇",
            Delta: "Δ",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            Dfr: "𝔇",
            dfr: "𝔡",
            dHar: "⥥",
            dharl: "⇃",
            dharr: "⇂",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            diam: "⋄",
            diamond: "⋄",
            Diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            DifferentialD: "ⅆ",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divide: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            DJcy: "Ђ",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            Dopf: "𝔻",
            dopf: "𝕕",
            Dot: "¨",
            dot: "˙",
            DotDot: "⃜",
            doteq: "≐",
            doteqdot: "≑",
            DotEqual: "≐",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrowBar: "⤓",
            downarrow: "↓",
            DownArrow: "↓",
            Downarrow: "⇓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVectorBar: "⥖",
            DownLeftVector: "↽",
            DownRightTeeVector: "⥟",
            DownRightVectorBar: "⥗",
            DownRightVector: "⇁",
            DownTeeArrow: "↧",
            DownTee: "⊤",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            Dscr: "𝒟",
            dscr: "𝒹",
            DScy: "Ѕ",
            dscy: "ѕ",
            dsol: "⧶",
            Dstrok: "Đ",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            DZcy: "Џ",
            dzcy: "џ",
            dzigrarr: "⟿",
            Eacute: "É",
            eacute: "é",
            easter: "⩮",
            Ecaron: "Ě",
            ecaron: "ě",
            Ecirc: "Ê",
            ecirc: "ê",
            ecir: "≖",
            ecolon: "≕",
            Ecy: "Э",
            ecy: "э",
            eDDot: "⩷",
            Edot: "Ė",
            edot: "ė",
            eDot: "≑",
            ee: "ⅇ",
            efDot: "≒",
            Efr: "𝔈",
            efr: "𝔢",
            eg: "⪚",
            Egrave: "È",
            egrave: "è",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            Element: "∈",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            Emacr: "Ē",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            EmptySmallSquare: "◻",
            emptyv: "∅",
            EmptyVerySmallSquare: "▫",
            emsp13: " ",
            emsp14: " ",
            emsp: " ",
            ENG: "Ŋ",
            eng: "ŋ",
            ensp: " ",
            Eogon: "Ę",
            eogon: "ę",
            Eopf: "𝔼",
            eopf: "𝕖",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            Epsilon: "Ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            Equal: "⩵",
            equals: "=",
            EqualTilde: "≂",
            equest: "≟",
            Equilibrium: "⇌",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erarr: "⥱",
            erDot: "≓",
            escr: "ℯ",
            Escr: "ℰ",
            esdot: "≐",
            Esim: "⩳",
            esim: "≂",
            Eta: "Η",
            eta: "η",
            ETH: "Ð",
            eth: "ð",
            Euml: "Ë",
            euml: "ë",
            euro: "€",
            excl: "!",
            exist: "∃",
            Exists: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            ExponentialE: "ⅇ",
            fallingdotseq: "≒",
            Fcy: "Ф",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            Ffr: "𝔉",
            ffr: "𝔣",
            filig: "ﬁ",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            Fopf: "𝔽",
            fopf: "𝕗",
            forall: "∀",
            ForAll: "∀",
            fork: "⋔",
            forkv: "⫙",
            Fouriertrf: "ℱ",
            fpartint: "⨍",
            frac12: "½",
            frac13: "⅓",
            frac14: "¼",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "¾",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "𝒻",
            Fscr: "ℱ",
            gacute: "ǵ",
            Gamma: "Γ",
            gamma: "γ",
            Gammad: "Ϝ",
            gammad: "ϝ",
            gap: "⪆",
            Gbreve: "Ğ",
            gbreve: "ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            gcirc: "ĝ",
            Gcy: "Г",
            gcy: "г",
            Gdot: "Ġ",
            gdot: "ġ",
            ge: "≥",
            gE: "≧",
            gEl: "⪌",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            gescc: "⪩",
            ges: "⩾",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            Gfr: "𝔊",
            gfr: "𝔤",
            gg: "≫",
            Gg: "⋙",
            ggg: "⋙",
            gimel: "ℷ",
            GJcy: "Ѓ",
            gjcy: "ѓ",
            gla: "⪥",
            gl: "≷",
            glE: "⪒",
            glj: "⪤",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gnE: "≩",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            Gopf: "𝔾",
            gopf: "𝕘",
            grave: "`",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "𝒢",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gtcc: "⪧",
            gtcir: "⩺",
            gt: ">",
            GT: ">",
            Gt: "≫",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            Hacek: "ˇ",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            HARDcy: "Ъ",
            hardcy: "ъ",
            harrcir: "⥈",
            harr: "↔",
            hArr: "⇔",
            harrw: "↭",
            Hat: "^",
            hbar: "ℏ",
            Hcirc: "Ĥ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "𝔥",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "𝕙",
            Hopf: "ℍ",
            horbar: "―",
            HorizontalLine: "─",
            hscr: "𝒽",
            Hscr: "ℋ",
            hslash: "ℏ",
            Hstrok: "Ħ",
            hstrok: "ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            hybull: "⁃",
            hyphen: "‐",
            Iacute: "Í",
            iacute: "í",
            ic: "⁣",
            Icirc: "Î",
            icirc: "î",
            Icy: "И",
            icy: "и",
            Idot: "İ",
            IEcy: "Е",
            iecy: "е",
            iexcl: "¡",
            iff: "⇔",
            ifr: "𝔦",
            Ifr: "ℑ",
            Igrave: "Ì",
            igrave: "ì",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            IJlig: "Ĳ",
            ijlig: "ĳ",
            Imacr: "Ī",
            imacr: "ī",
            image: "ℑ",
            ImaginaryI: "ⅈ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            Im: "ℑ",
            imof: "⊷",
            imped: "Ƶ",
            Implies: "⇒",
            incare: "℅",
            in: "∈",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            intcal: "⊺",
            int: "∫",
            Int: "∬",
            integers: "ℤ",
            Integral: "∫",
            intercal: "⊺",
            Intersection: "⋂",
            intlarhk: "⨗",
            intprod: "⨼",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            IOcy: "Ё",
            iocy: "ё",
            Iogon: "Į",
            iogon: "į",
            Iopf: "𝕀",
            iopf: "𝕚",
            Iota: "Ι",
            iota: "ι",
            iprod: "⨼",
            iquest: "¿",
            iscr: "𝒾",
            Iscr: "ℐ",
            isin: "∈",
            isindot: "⋵",
            isinE: "⋹",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            Itilde: "Ĩ",
            itilde: "ĩ",
            Iukcy: "І",
            iukcy: "і",
            Iuml: "Ï",
            iuml: "ï",
            Jcirc: "Ĵ",
            jcirc: "ĵ",
            Jcy: "Й",
            jcy: "й",
            Jfr: "𝔍",
            jfr: "𝔧",
            jmath: "ȷ",
            Jopf: "𝕁",
            jopf: "𝕛",
            Jscr: "𝒥",
            jscr: "𝒿",
            Jsercy: "Ј",
            jsercy: "ј",
            Jukcy: "Є",
            jukcy: "є",
            Kappa: "Κ",
            kappa: "κ",
            kappav: "ϰ",
            Kcedil: "Ķ",
            kcedil: "ķ",
            Kcy: "К",
            kcy: "к",
            Kfr: "𝔎",
            kfr: "𝔨",
            kgreen: "ĸ",
            KHcy: "Х",
            khcy: "х",
            KJcy: "Ќ",
            kjcy: "ќ",
            Kopf: "𝕂",
            kopf: "𝕜",
            Kscr: "𝒦",
            kscr: "𝓀",
            lAarr: "⇚",
            Lacute: "Ĺ",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            Lambda: "Λ",
            lambda: "λ",
            lang: "⟨",
            Lang: "⟪",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            Laplacetrf: "ℒ",
            laquo: "«",
            larrb: "⇤",
            larrbfs: "⤟",
            larr: "←",
            Larr: "↞",
            lArr: "⇐",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            latail: "⤙",
            lAtail: "⤛",
            lat: "⪫",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lBarr: "⤎",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            Lcaron: "Ľ",
            lcaron: "ľ",
            Lcedil: "Ļ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            Lcy: "Л",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            lE: "≦",
            LeftAngleBracket: "⟨",
            LeftArrowBar: "⇤",
            leftarrow: "←",
            LeftArrow: "←",
            Leftarrow: "⇐",
            LeftArrowRightArrow: "⇆",
            leftarrowtail: "↢",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVectorBar: "⥙",
            LeftDownVector: "⇃",
            LeftFloor: "⌊",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            LeftRightArrow: "↔",
            Leftrightarrow: "⇔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            LeftRightVector: "⥎",
            LeftTeeArrow: "↤",
            LeftTee: "⊣",
            LeftTeeVector: "⥚",
            leftthreetimes: "⋋",
            LeftTriangleBar: "⧏",
            LeftTriangle: "⊲",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVectorBar: "⥘",
            LeftUpVector: "↿",
            LeftVectorBar: "⥒",
            LeftVector: "↼",
            lEg: "⪋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            lescc: "⪨",
            les: "⩽",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            lessgtr: "≶",
            LessLess: "⪡",
            lesssim: "≲",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            Lfr: "𝔏",
            lfr: "𝔩",
            lg: "≶",
            lgE: "⪑",
            lHar: "⥢",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            LJcy: "Љ",
            ljcy: "љ",
            llarr: "⇇",
            ll: "≪",
            Ll: "⋘",
            llcorner: "⌞",
            Lleftarrow: "⇚",
            llhard: "⥫",
            lltri: "◺",
            Lmidot: "Ŀ",
            lmidot: "ŀ",
            lmoustache: "⎰",
            lmoust: "⎰",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lnE: "≨",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            LongLeftArrow: "⟵",
            Longleftarrow: "⟸",
            longleftrightarrow: "⟷",
            LongLeftRightArrow: "⟷",
            Longleftrightarrow: "⟺",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            LongRightArrow: "⟶",
            Longrightarrow: "⟹",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            Lopf: "𝕃",
            lopf: "𝕝",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "𝓁",
            Lscr: "ℒ",
            lsh: "↰",
            Lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            Lstrok: "Ł",
            lstrok: "ł",
            ltcc: "⪦",
            ltcir: "⩹",
            lt: "<",
            LT: "<",
            Lt: "≪",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            ltrPar: "⦖",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            macr: "¯",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            Map: "⤅",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            Mcy: "М",
            mcy: "м",
            mdash: "—",
            mDDot: "∺",
            measuredangle: "∡",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "𝔐",
            mfr: "𝔪",
            mho: "℧",
            micro: "µ",
            midast: "*",
            midcir: "⫰",
            mid: "∣",
            middot: "·",
            minusb: "⊟",
            minus: "−",
            minusd: "∸",
            minusdu: "⨪",
            MinusPlus: "∓",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            Mopf: "𝕄",
            mopf: "𝕞",
            mp: "∓",
            mscr: "𝓂",
            Mscr: "ℳ",
            mstpos: "∾",
            Mu: "Μ",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nabla: "∇",
            Nacute: "Ń",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natural: "♮",
            naturals: "ℕ",
            natur: "♮",
            nbsp: " ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            Ncaron: "Ň",
            ncaron: "ň",
            Ncedil: "Ņ",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            Ncy: "Н",
            ncy: "н",
            ndash: "–",
            nearhk: "⤤",
            nearr: "↗",
            neArr: "⇗",
            nearrow: "↗",
            ne: "≠",
            nedot: "≐̸",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            nexist: "∄",
            nexists: "∄",
            Nfr: "𝔑",
            nfr: "𝔫",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            nGg: "⋙̸",
            ngsim: "≵",
            nGt: "≫⃒",
            ngt: "≯",
            ngtr: "≯",
            nGtv: "≫̸",
            nharr: "↮",
            nhArr: "⇎",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            NJcy: "Њ",
            njcy: "њ",
            nlarr: "↚",
            nlArr: "⇍",
            nldr: "‥",
            nlE: "≦̸",
            nle: "≰",
            nleftarrow: "↚",
            nLeftarrow: "⇍",
            nleftrightarrow: "↮",
            nLeftrightarrow: "⇎",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nLl: "⋘̸",
            nlsim: "≴",
            nLt: "≪⃒",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nLtv: "≪̸",
            nmid: "∤",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            nopf: "𝕟",
            Nopf: "ℕ",
            Not: "⫬",
            not: "¬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            notin: "∉",
            notindot: "⋵̸",
            notinE: "⋹̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangle: "⋪",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangle: "⋫",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            nparallel: "∦",
            npar: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            nprec: "⊀",
            npreceq: "⪯̸",
            npre: "⪯̸",
            nrarrc: "⤳̸",
            nrarr: "↛",
            nrArr: "⇏",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nRightarrow: "⇏",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            Nscr: "𝒩",
            nscr: "𝓃",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            Ntilde: "Ñ",
            ntilde: "ñ",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            Nu: "Ν",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvDash: "⊭",
            nVdash: "⊮",
            nVDash: "⊯",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvHarr: "⤄",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwarhk: "⤣",
            nwarr: "↖",
            nwArr: "⇖",
            nwarrow: "↖",
            nwnear: "⤧",
            Oacute: "Ó",
            oacute: "ó",
            oast: "⊛",
            Ocirc: "Ô",
            ocirc: "ô",
            ocir: "⊚",
            Ocy: "О",
            ocy: "о",
            odash: "⊝",
            Odblac: "Ő",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            OElig: "Œ",
            oelig: "œ",
            ofcir: "⦿",
            Ofr: "𝔒",
            ofr: "𝔬",
            ogon: "˛",
            Ograve: "Ò",
            ograve: "ò",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            Omacr: "Ō",
            omacr: "ō",
            Omega: "Ω",
            omega: "ω",
            Omicron: "Ο",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            Oopf: "𝕆",
            oopf: "𝕠",
            opar: "⦷",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            operp: "⦹",
            oplus: "⊕",
            orarr: "↻",
            Or: "⩔",
            or: "∨",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "ª",
            ordm: "º",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oS: "Ⓢ",
            Oscr: "𝒪",
            oscr: "ℴ",
            Oslash: "Ø",
            oslash: "ø",
            osol: "⊘",
            Otilde: "Õ",
            otilde: "õ",
            otimesas: "⨶",
            Otimes: "⨷",
            otimes: "⊗",
            Ouml: "Ö",
            ouml: "ö",
            ovbar: "⌽",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            para: "¶",
            parallel: "∥",
            par: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            PartialD: "∂",
            Pcy: "П",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            Pfr: "𝔓",
            pfr: "𝔭",
            Phi: "Φ",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            Pi: "Π",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plus: "+",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            PlusMinus: "±",
            plusmn: "±",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            Poincareplane: "ℌ",
            pointint: "⨕",
            popf: "𝕡",
            Popf: "ℙ",
            pound: "£",
            prap: "⪷",
            Pr: "⪻",
            pr: "≺",
            prcue: "≼",
            precapprox: "⪷",
            prec: "≺",
            preccurlyeq: "≼",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            pre: "⪯",
            prE: "⪳",
            precsim: "≾",
            prime: "′",
            Prime: "″",
            primes: "ℙ",
            prnap: "⪹",
            prnE: "⪵",
            prnsim: "⋨",
            prod: "∏",
            Product: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            Proportional: "∝",
            Proportion: "∷",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            Pscr: "𝒫",
            pscr: "𝓅",
            Psi: "Ψ",
            psi: "ψ",
            puncsp: " ",
            Qfr: "𝔔",
            qfr: "𝔮",
            qint: "⨌",
            qopf: "𝕢",
            Qopf: "ℚ",
            qprime: "⁗",
            Qscr: "𝒬",
            qscr: "𝓆",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            QUOT: '"',
            rAarr: "⇛",
            race: "∽̱",
            Racute: "Ŕ",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            Rang: "⟫",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "»",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarr: "→",
            Rarr: "↠",
            rArr: "⇒",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            Rarrtl: "⤖",
            rarrtl: "↣",
            rarrw: "↝",
            ratail: "⤚",
            rAtail: "⤜",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rBarr: "⤏",
            RBarr: "⤐",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            Rcaron: "Ř",
            rcaron: "ř",
            Rcedil: "Ŗ",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            Rcy: "Р",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            Re: "ℜ",
            rect: "▭",
            reg: "®",
            REG: "®",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "𝔯",
            Rfr: "ℜ",
            rHar: "⥤",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            Rho: "Ρ",
            rho: "ρ",
            rhov: "ϱ",
            RightAngleBracket: "⟩",
            RightArrowBar: "⇥",
            rightarrow: "→",
            RightArrow: "→",
            Rightarrow: "⇒",
            RightArrowLeftArrow: "⇄",
            rightarrowtail: "↣",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVectorBar: "⥕",
            RightDownVector: "⇂",
            RightFloor: "⌋",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            RightTeeArrow: "↦",
            RightTee: "⊢",
            RightTeeVector: "⥛",
            rightthreetimes: "⋌",
            RightTriangleBar: "⧐",
            RightTriangle: "⊳",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVectorBar: "⥔",
            RightUpVector: "↾",
            RightVectorBar: "⥓",
            RightVector: "⇀",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoustache: "⎱",
            rmoust: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "𝕣",
            Ropf: "ℝ",
            roplus: "⨮",
            rotimes: "⨵",
            RoundImplies: "⥰",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            Rrightarrow: "⇛",
            rsaquo: "›",
            rscr: "𝓇",
            Rscr: "ℛ",
            rsh: "↱",
            Rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            RuleDelayed: "⧴",
            ruluhar: "⥨",
            rx: "℞",
            Sacute: "Ś",
            sacute: "ś",
            sbquo: "‚",
            scap: "⪸",
            Scaron: "Š",
            scaron: "š",
            Sc: "⪼",
            sc: "≻",
            sccue: "≽",
            sce: "⪰",
            scE: "⪴",
            Scedil: "Ş",
            scedil: "ş",
            Scirc: "Ŝ",
            scirc: "ŝ",
            scnap: "⪺",
            scnE: "⪶",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            Scy: "С",
            scy: "с",
            sdotb: "⊡",
            sdot: "⋅",
            sdote: "⩦",
            searhk: "⤥",
            searr: "↘",
            seArr: "⇘",
            searrow: "↘",
            sect: "§",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            Sfr: "𝔖",
            sfr: "𝔰",
            sfrown: "⌢",
            sharp: "♯",
            SHCHcy: "Щ",
            shchcy: "щ",
            SHcy: "Ш",
            shcy: "ш",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            shortmid: "∣",
            shortparallel: "∥",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            shy: "­",
            Sigma: "Σ",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            SmallCircle: "∘",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            SOFTcy: "Ь",
            softcy: "ь",
            solbar: "⌿",
            solb: "⧄",
            sol: "/",
            Sopf: "𝕊",
            sopf: "𝕤",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            Sqrt: "√",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            square: "□",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            squarf: "▪",
            squ: "□",
            squf: "▪",
            srarr: "→",
            Sscr: "𝒮",
            sscr: "𝓈",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            Star: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            sub: "⊂",
            Sub: "⋐",
            subdot: "⪽",
            subE: "⫅",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            Subset: "⋐",
            subseteq: "⊆",
            subseteqq: "⫅",
            SubsetEqual: "⊆",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succapprox: "⪸",
            succ: "≻",
            succcurlyeq: "≽",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            SuchThat: "∋",
            sum: "∑",
            Sum: "∑",
            sung: "♪",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            sup: "⊃",
            Sup: "⋑",
            supdot: "⪾",
            supdsub: "⫘",
            supE: "⫆",
            supe: "⊇",
            supedot: "⫄",
            Superset: "⊃",
            SupersetEqual: "⊇",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            supset: "⊃",
            Supset: "⋑",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swarhk: "⤦",
            swarr: "↙",
            swArr: "⇙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "ß",
            Tab: "\t",
            target: "⌖",
            Tau: "Τ",
            tau: "τ",
            tbrk: "⎴",
            Tcaron: "Ť",
            tcaron: "ť",
            Tcedil: "Ţ",
            tcedil: "ţ",
            Tcy: "Т",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            Tfr: "𝔗",
            tfr: "𝔱",
            there4: "∴",
            therefore: "∴",
            Therefore: "∴",
            Theta: "Θ",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            ThickSpace: "  ",
            ThinSpace: " ",
            thinsp: " ",
            thkap: "≈",
            thksim: "∼",
            THORN: "Þ",
            thorn: "þ",
            tilde: "˜",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            timesbar: "⨱",
            timesb: "⊠",
            times: "×",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            topbot: "⌶",
            topcir: "⫱",
            top: "⊤",
            Topf: "𝕋",
            topf: "𝕥",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            TRADE: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            TripleDot: "⃛",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            Tscr: "𝒯",
            tscr: "𝓉",
            TScy: "Ц",
            tscy: "ц",
            TSHcy: "Ћ",
            tshcy: "ћ",
            Tstrok: "Ŧ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            Uacute: "Ú",
            uacute: "ú",
            uarr: "↑",
            Uarr: "↟",
            uArr: "⇑",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            ubrcy: "ў",
            Ubreve: "Ŭ",
            ubreve: "ŭ",
            Ucirc: "Û",
            ucirc: "û",
            Ucy: "У",
            ucy: "у",
            udarr: "⇅",
            Udblac: "Ű",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            Ufr: "𝔘",
            ufr: "𝔲",
            Ugrave: "Ù",
            ugrave: "ù",
            uHar: "⥣",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            Umacr: "Ū",
            umacr: "ū",
            uml: "¨",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            uogon: "ų",
            Uopf: "𝕌",
            uopf: "𝕦",
            UpArrowBar: "⤒",
            uparrow: "↑",
            UpArrow: "↑",
            Uparrow: "⇑",
            UpArrowDownArrow: "⇅",
            updownarrow: "↕",
            UpDownArrow: "↕",
            Updownarrow: "⇕",
            UpEquilibrium: "⥮",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            upsi: "υ",
            Upsi: "ϒ",
            upsih: "ϒ",
            Upsilon: "Υ",
            upsilon: "υ",
            UpTeeArrow: "↥",
            UpTee: "⊥",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            Uring: "Ů",
            uring: "ů",
            urtri: "◹",
            Uscr: "𝒰",
            uscr: "𝓊",
            utdot: "⋰",
            Utilde: "Ũ",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            Uuml: "Ü",
            uuml: "ü",
            uwangle: "⦧",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            vArr: "⇕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vBar: "⫨",
            Vbar: "⫫",
            vBarv: "⫩",
            Vcy: "В",
            vcy: "в",
            vdash: "⊢",
            vDash: "⊨",
            Vdash: "⊩",
            VDash: "⊫",
            Vdashl: "⫦",
            veebar: "⊻",
            vee: "∨",
            Vee: "⋁",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            Verbar: "‖",
            vert: "|",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "𝔙",
            vfr: "𝔳",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            Vopf: "𝕍",
            vopf: "𝕧",
            vprop: "∝",
            vrtri: "⊳",
            Vscr: "𝒱",
            vscr: "𝓋",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            Vvdash: "⊪",
            vzigzag: "⦚",
            Wcirc: "Ŵ",
            wcirc: "ŵ",
            wedbar: "⩟",
            wedge: "∧",
            Wedge: "⋀",
            wedgeq: "≙",
            weierp: "℘",
            Wfr: "𝔚",
            wfr: "𝔴",
            Wopf: "𝕎",
            wopf: "𝕨",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            Wscr: "𝒲",
            wscr: "𝓌",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            Xfr: "𝔛",
            xfr: "𝔵",
            xharr: "⟷",
            xhArr: "⟺",
            Xi: "Ξ",
            xi: "ξ",
            xlarr: "⟵",
            xlArr: "⟸",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            Xopf: "𝕏",
            xopf: "𝕩",
            xoplus: "⨁",
            xotime: "⨂",
            xrarr: "⟶",
            xrArr: "⟹",
            Xscr: "𝒳",
            xscr: "𝓍",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            Yacute: "Ý",
            yacute: "ý",
            YAcy: "Я",
            yacy: "я",
            Ycirc: "Ŷ",
            ycirc: "ŷ",
            Ycy: "Ы",
            ycy: "ы",
            yen: "¥",
            Yfr: "𝔜",
            yfr: "𝔶",
            YIcy: "Ї",
            yicy: "ї",
            Yopf: "𝕐",
            yopf: "𝕪",
            Yscr: "𝒴",
            yscr: "𝓎",
            YUcy: "Ю",
            yucy: "ю",
            yuml: "ÿ",
            Yuml: "Ÿ",
            Zacute: "Ź",
            zacute: "ź",
            Zcaron: "Ž",
            zcaron: "ž",
            Zcy: "З",
            zcy: "з",
            Zdot: "Ż",
            zdot: "ż",
            zeetrf: "ℨ",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            zeta: "ζ",
            zfr: "𝔷",
            Zfr: "ℨ",
            ZHcy: "Ж",
            zhcy: "ж",
            zigrarr: "⇝",
            zopf: "𝕫",
            Zopf: "ℤ",
            Zscr: "𝒵",
            zscr: "𝓏",
            zwj: "‍",
            zwnj: "‌"
        }
    }, function(t, e, n) {
        (function(e) {
            t.exports = e.AdaptiveCards = n(282)
        }).call(e, n(38))
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.replace(o, function(t, e) {
                return e.toUpperCase()
            })
        }
        var o = /-(.)/g;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return o(t.replace(i, "ms-"))
        }
        var o = n(210),
            i = /^-ms-/;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return !(!t || !e) && (t === e || !o(t) && (o(e) ? r(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
        }
        var o = n(220);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.length;
            if ((Array.isArray(t) || "object" != typeof t && "function" != typeof t) && s(!1), "number" != typeof e && s(!1), 0 === e || e - 1 in t || s(!1), "function" == typeof t.callee && s(!1), t.hasOwnProperty) try {
                return Array.prototype.slice.call(t)
            } catch (t) {}
            for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
            return n
        }

        function o(t) {
            return !!t && ("object" == typeof t || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t)
        }

        function i(t) {
            return o(t) ? Array.isArray(t) ? t.slice() : r(t) : [t]
        }
        var s = n(1);
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.match(l);
            return e && e[1].toLowerCase()
        }

        function o(t, e) {
            var n = u;
            u || c(!1);
            var o = r(t),
                i = o && a(o);
            if (i) {
                n.innerHTML = i[1] + t + i[2];
                for (var l = i[0]; l--;) n = n.lastChild
            } else n.innerHTML = t;
            var p = n.getElementsByTagName("script");
            p.length && (e || c(!1), s(p).forEach(e));
            for (var h = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
            return h
        }
        var i = n(7),
            s = n(213),
            a = n(215),
            c = n(1),
            u = i.canUseDOM ? document.createElement("div") : null,
            l = /^\s*<(\w+)/;
        t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return s || i(!1), h.hasOwnProperty(t) || (t = "*"), a.hasOwnProperty(t) || (s.innerHTML = "*" === t ? "<link />" : "<" + t + "></" + t + ">", a[t] = !s.firstChild), a[t] ? h[t] : null
        }
        var o = n(7),
            i = n(1),
            s = o.canUseDOM ? document.createElement("div") : null,
            a = {},
            c = [1, '<select multiple="true">', "</select>"],
            u = [1, "<table>", "</table>"],
            l = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
            h = {
                "*": [1, "?<div>", "</div>"],
                area: [1, "<map>", "</map>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                param: [1, "<object>", "</object>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                optgroup: c,
                option: c,
                caption: u,
                colgroup: u,
                tbody: u,
                tfoot: u,
                thead: u,
                td: l,
                th: l
            };
        ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function(t) {
            h[t] = p, a[t] = !0
        }), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.Window && t instanceof t.Window ? {
                x: t.pageXOffset || t.document.documentElement.scrollLeft,
                y: t.pageYOffset || t.document.documentElement.scrollTop
            } : {
                x: t.scrollLeft,
                y: t.scrollTop
            }
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.replace(o, "-$1").toLowerCase()
        }
        var o = /([A-Z])/g;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return o(t).replace(i, "-ms-")
        }
        var o = n(217),
            i = /^ms-/;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t ? t.ownerDocument || t : document,
                n = e.defaultView || window;
            return !(!t || !("function" == typeof n.Node ? t instanceof n.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName))
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return o(t) && 3 == t.nodeType
        }
        var o = n(219);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = {};
            return function(n) {
                return e.hasOwnProperty(n) || (e[n] = t.call(this, n)), e[n]
            }
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            o = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                arguments: !0,
                arity: !0
            },
            i = "function" == typeof Object.getOwnPropertySymbols;
        t.exports = function(t, e, n) {
            if ("string" != typeof e) {
                var s = Object.getOwnPropertyNames(e);
                i && (s = s.concat(Object.getOwnPropertySymbols(e)));
                for (var a = 0; a < s.length; ++a)
                    if (!(r[s[a]] || o[s[a]] || n && n[s[a]])) try {
                        t[s[a]] = e[s[a]]
                    } catch (t) {}
            }
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = function(t, e, n, r, o, i, s, a) {
            if (!t) {
                var c;
                if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, o, i, s, a],
                        l = 0;
                    c = new Error(e.replace(/%s/g, function() {
                        return u[l++]
                    })), c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                e && Object.keys(e).forEach(function(n) {
                    t[n] = e[n]
                })
            }), t
        }

        function o(t) {
            return Object.prototype.toString.call(t)
        }

        function i(t) {
            return "[object String]" === o(t)
        }

        function s(t) {
            return "[object Object]" === o(t)
        }

        function a(t) {
            return "[object RegExp]" === o(t)
        }

        function c(t) {
            return "[object Function]" === o(t)
        }

        function u(t) {
            return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }

        function l(t) {
            return Object.keys(t || {}).reduce(function(t, e) {
                return t || g.hasOwnProperty(e)
            }, !1)
        }

        function p(t) {
            t.__index__ = -1, t.__text_cache__ = ""
        }

        function h(t) {
            return function(e, n) {
                var r = e.slice(n);
                return t.test(r) ? r.match(t)[0].length : 0
            }
        }

        function f() {
            return function(t, e) {
                e.normalize(t)
            }
        }

        function d(t) {
            function e(t) {
                return t.replace("%TLDS%", o.src_tlds)
            }

            function r(t, e) {
                throw new Error('(LinkifyIt) Invalid schema "' + t + '": ' + e)
            }
            var o = t.re = n(225)(t.__opts__),
                l = t.__tlds__.slice();
            t.onCompile(), t.__tlds_replaced__ || l.push(_), l.push(o.src_xn), o.src_tlds = l.join("|"), o.email_fuzzy = RegExp(e(o.tpl_email_fuzzy), "i"), o.link_fuzzy = RegExp(e(o.tpl_link_fuzzy), "i"), o.link_no_ip_fuzzy = RegExp(e(o.tpl_link_no_ip_fuzzy), "i"), o.host_fuzzy_test = RegExp(e(o.tpl_host_fuzzy_test), "i");
            var d = [];
            t.__compiled__ = {}, Object.keys(t.__schemas__).forEach(function(e) {
                var n = t.__schemas__[e];
                if (null !== n) {
                    var o = {
                        validate: null,
                        link: null
                    };
                    return t.__compiled__[e] = o, s(n) ? (a(n.validate) ? o.validate = h(n.validate) : c(n.validate) ? o.validate = n.validate : r(e, n), void(c(n.normalize) ? o.normalize = n.normalize : n.normalize ? r(e, n) : o.normalize = f())) : i(n) ? void d.push(e) : void r(e, n)
                }
            }), d.forEach(function(e) {
                t.__compiled__[t.__schemas__[e]] && (t.__compiled__[e].validate = t.__compiled__[t.__schemas__[e]].validate, t.__compiled__[e].normalize = t.__compiled__[t.__schemas__[e]].normalize)
            }), t.__compiled__[""] = {
                validate: null,
                normalize: f()
            };
            var m = Object.keys(t.__compiled__).filter(function(e) {
                return e.length > 0 && t.__compiled__[e]
            }).map(u).join("|");
            t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + o.src_ZPCc + "))(" + m + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + o.src_ZPCc + "))(" + m + ")", "ig"), t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i"), p(t)
        }

        function m(t, e) {
            var n = t.__index__,
                r = t.__last_index__,
                o = t.__text_cache__.slice(n, r);
            this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = o, this.text = o, this.url = o
        }

        function v(t, e) {
            var n = new m(t, e);
            return t.__compiled__[n.schema].normalize(n, t), n
        }

        function y(t, e) {
            if (!(this instanceof y)) return new y(t, e);
            e || l(t) && (e = t, t = {}), this.__opts__ = r({}, g, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, b, t), this.__compiled__ = {}, this.__tlds__ = C, this.__tlds_replaced__ = !1, this.re = {}, d(this)
        }
        var g = {
                fuzzyLink: !0,
                fuzzyEmail: !0,
                fuzzyIP: !1
            },
            b = {
                "http:": {
                    validate: function(t, e, n) {
                        var r = t.slice(e);
                        return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
                    }
                },
                "https:": "http:",
                "ftp:": "http:",
                "//": {
                    validate: function(t, e, n) {
                        var r = t.slice(e);
                        return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? e >= 3 && ":" === t[e - 3] ? 0 : e >= 3 && "/" === t[e - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
                    }
                },
                "mailto:": {
                    validate: function(t, e, n) {
                        var r = t.slice(e);
                        return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
                    }
                }
            },
            _ = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
            C = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        y.prototype.add = function(t, e) {
            return this.__schemas__[t] = e, d(this), this
        }, y.prototype.set = function(t) {
            return this.__opts__ = r(this.__opts__, t), this
        }, y.prototype.test = function(t) {
            if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
            var e, n, r, o, i, s, a, c;
            if (this.re.schema_test.test(t))
                for (a = this.re.schema_search, a.lastIndex = 0; null !== (e = a.exec(t));)
                    if (o = this.testSchemaAt(t, e[2], a.lastIndex)) {
                        this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + o;
                        break
                    } return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && t.indexOf("@") >= 0 && null !== (r = t.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s)), this.__index__ >= 0
        }, y.prototype.pretest = function(t) {
            return this.re.pretest.test(t)
        }, y.prototype.testSchemaAt = function(t, e, n) {
            return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, n, this) : 0
        }, y.prototype.match = function(t) {
            var e = 0,
                n = [];
            this.__index__ >= 0 && this.__text_cache__ === t && (n.push(v(this, e)), e = this.__last_index__);
            for (var r = e ? t.slice(e) : t; this.test(r);) n.push(v(this, e)), r = r.slice(this.__last_index__), e += this.__last_index__;
            return n.length ? n : null
        }, y.prototype.tlds = function(t, e) {
            return t = Array.isArray(t) ? t : [t], e ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(t, e, n) {
                return t !== n[e - 1]
            }).reverse(), d(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, d(this), this)
        }, y.prototype.normalize = function(t) {
            t.schema || (t.url = "http://" + t.url), "mailto:" !== t.schema || /^mailto:/i.test(t.url) || (t.url = "mailto:" + t.url)
        }, y.prototype.onCompile = function() {}, t.exports = y
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = {};
            e.src_Any = n(170).source, e.src_Cc = n(168).source, e.src_Z = n(169).source, e.src_P = n(86).source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
            return e.src_pseudo_letter = "(?:(?![><｜]|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|[><｜]|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-(?!-)|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|[><｜]|\\(|" + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return null == t ? void 0 === t ? c : a : u && u in Object(t) ? n.i(i.a)(t) : n.i(s.a)(t)
        }
        var o = n(99),
            i = n(229),
            s = n(230),
            a = "[object Null]",
            c = "[object Undefined]",
            u = o.a ? o.a.toStringTag : void 0;
        e.a = r
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n
        }).call(e, n(38))
    }, function(t, e, n) {
        "use strict";
        var r = n(231),
            o = n.i(r.a)(Object.getPrototypeOf, Object);
        e.a = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = s.call(t, c),
                n = t[c];
            try {
                t[c] = void 0;
                var r = !0
            } catch (t) {}
            var o = a.call(t);
            return r && (e ? t[c] = n : delete t[c]), o
        }
        var o = n(99),
            i = Object.prototype,
            s = i.hasOwnProperty,
            a = i.toString,
            c = o.a ? o.a.toStringTag : void 0;
        e.a = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return i.call(t)
        }
        var o = Object.prototype,
            i = o.toString;
        e.a = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
        e.a = r
    }, function(t, e, n) {
        "use strict";
        var r = n(227),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r.a || o || Function("return this")();
        e.a = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return null != t && "object" == typeof t
        }
        e.a = r
    }, function(t, e, n) {
        "use strict";
        t.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    }, function(t, e, n) {
        "use strict";
        e.parseLinkLabel = n(237), e.parseLinkDestination = n(236), e.parseLinkTitle = n(238)
    }, function(t, e, n) {
        "use strict";
        var r = n(2).isSpace,
            o = n(2).unescapeAll;
        t.exports = function(t, e, n) {
            var i, s, a = e,
                c = {
                    ok: !1,
                    pos: 0,
                    lines: 0,
                    str: ""
                };
            if (60 === t.charCodeAt(e)) {
                for (e++; e < n;) {
                    if (10 === (i = t.charCodeAt(e)) || r(i)) return c;
                    if (62 === i) return c.pos = e + 1, c.str = o(t.slice(a + 1, e)), c.ok = !0, c;
                    92 === i && e + 1 < n ? e += 2 : e++
                }
                return c
            }
            for (s = 0; e < n && 32 !== (i = t.charCodeAt(e)) && !(i < 32 || 127 === i);)
                if (92 === i && e + 1 < n) e += 2;
                else {
                    if (40 === i && ++s > 1) break;
                    if (41 === i && --s < 0) break;
                    e++
                } return a === e ? c : (c.str = o(t.slice(a, e)), c.lines = 0, c.pos = e, c.ok = !0, c)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, o, i, s, a = -1,
                c = t.posMax,
                u = t.pos;
            for (t.pos = e + 1, r = 1; t.pos < c;) {
                if (93 === (i = t.src.charCodeAt(t.pos)) && 0 === --r) {
                    o = !0;
                    break
                }
                if (s = t.pos, t.md.inline.skipToken(t), 91 === i)
                    if (s === t.pos - 1) r++;
                    else if (n) return t.pos = u, -1
            }
            return o && (a = t.pos), t.pos = u, a
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).unescapeAll;
        t.exports = function(t, e, n) {
            var o, i, s = 0,
                a = e,
                c = {
                    ok: !1,
                    pos: 0,
                    lines: 0,
                    str: ""
                };
            if (e >= n) return c;
            if (34 !== (i = t.charCodeAt(e)) && 39 !== i && 40 !== i) return c;
            for (e++, 40 === i && (i = 41); e < n;) {
                if ((o = t.charCodeAt(e)) === i) return c.pos = e + 1, c.lines = s, c.str = r(t.slice(a + 1, e)), c.ok = !0, c;
                10 === o ? s++ : 92 === o && e + 1 < n && (e++, 10 === t.charCodeAt(e) && s++), e++
            }
            return c
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.trim().toLowerCase();
            return !y.test(e) || !!g.test(e)
        }

        function o(t) {
            var e = d.parse(t, !0);
            if (e.hostname && (!e.protocol || b.indexOf(e.protocol) >= 0)) try {
                e.hostname = m.toASCII(e.hostname)
            } catch (t) {}
            return d.encode(d.format(e))
        }

        function i(t) {
            var e = d.parse(t, !0);
            if (e.hostname && (!e.protocol || b.indexOf(e.protocol) >= 0)) try {
                e.hostname = m.toUnicode(e.hostname)
            } catch (t) {}
            return d.decode(d.format(e))
        }

        function s(t, e) {
            if (!(this instanceof s)) return new s(t, e);
            e || a.isString(t) || (e = t || {}, t = "default"), this.inline = new h, this.block = new p, this.core = new l, this.renderer = new u, this.linkify = new f, this.validateLink = r, this.normalizeLink = o, this.normalizeLinkText = i, this.utils = a, this.helpers = a.assign({}, c), this.options = {}, this.configure(t), e && this.set(e)
        }
        var a = n(2),
            c = n(235),
            u = n(246),
            l = n(241),
            p = n(240),
            h = n(242),
            f = n(224),
            d = n(105),
            m = n(289),
            v = {
                default: n(244),
                zero: n(245),
                commonmark: n(243)
            },
            y = /^(vbscript|javascript|file|data):/,
            g = /^data:image\/(gif|png|jpeg|webp);/,
            b = ["http:", "https:", "mailto:"];
        s.prototype.set = function(t) {
            return a.assign(this.options, t), this
        }, s.prototype.configure = function(t) {
            var e, n = this;
            if (a.isString(t) && (e = t, !(t = v[e]))) throw new Error('Wrong `markdown-it` preset "' + e + '", check name');
            if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
            return t.options && n.set(t.options), t.components && Object.keys(t.components).forEach(function(e) {
                t.components[e].rules && n[e].ruler.enableOnly(t.components[e].rules), t.components[e].rules2 && n[e].ruler2.enableOnly(t.components[e].rules2)
            }), this
        }, s.prototype.enable = function(t, e) {
            var n = [];
            Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(e) {
                n = n.concat(this[e].ruler.enable(t, !0))
            }, this), n = n.concat(this.inline.ruler2.enable(t, !0));
            var r = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (r.length && !e) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
            return this
        }, s.prototype.disable = function(t, e) {
            var n = [];
            Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(e) {
                n = n.concat(this[e].ruler.disable(t, !0))
            }, this), n = n.concat(this.inline.ruler2.disable(t, !0));
            var r = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (r.length && !e) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
            return this
        }, s.prototype.use = function(t) {
            var e = [this].concat(Array.prototype.slice.call(arguments, 1));
            return t.apply(t, e), this
        }, s.prototype.parse = function(t, e) {
            if ("string" != typeof t) throw new Error("Input data should be a String");
            var n = new this.core.State(t, this, e);
            return this.core.process(n), n.tokens
        }, s.prototype.render = function(t, e) {
            return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e)
        }, s.prototype.parseInline = function(t, e) {
            var n = new this.core.State(t, this, e);
            return n.inlineMode = !0, this.core.process(n), n.tokens
        }, s.prototype.renderInline = function(t, e) {
            return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e)
        }, t.exports = s
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.ruler = new o;
            for (var t = 0; t < i.length; t++) this.ruler.push(i[t][0], i[t][1], {
                alt: (i[t][2] || []).slice()
            })
        }
        var o = n(60),
            i = [
                ["table", n(258), ["paragraph", "reference"]],
                ["code", n(248)],
                ["fence", n(249), ["paragraph", "reference", "blockquote", "list"]],
                ["blockquote", n(247), ["paragraph", "reference", "list"]],
                ["hr", n(251), ["paragraph", "reference", "blockquote", "list"]],
                ["list", n(254), ["paragraph", "reference", "blockquote"]],
                ["reference", n(256)],
                ["heading", n(250), ["paragraph", "reference", "blockquote"]],
                ["lheading", n(253)],
                ["html_block", n(252), ["paragraph", "reference", "blockquote"]],
                ["paragraph", n(255)]
            ];
        r.prototype.tokenize = function(t, e, n) {
            for (var r, o = this.ruler.getRules(""), i = o.length, s = e, a = !1, c = t.md.options.maxNesting; s < n && (t.line = s = t.skipEmptyLines(s), !(s >= n)) && !(t.sCount[s] < t.blkIndent);) {
                if (t.level >= c) {
                    t.line = n;
                    break
                }
                for (r = 0; r < i && !o[r](t, s, n, !1); r++);
                t.tight = !a, t.isEmpty(t.line - 1) && (a = !0), (s = t.line) < n && t.isEmpty(s) && (a = !0, s++, t.line = s)
            }
        }, r.prototype.parse = function(t, e, n, r) {
            var o;
            t && (o = new this.State(t, e, n, r), this.tokenize(o, o.line, o.lineMax))
        }, r.prototype.State = n(257), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.ruler = new o;
            for (var t = 0; t < i.length; t++) this.ruler.push(i[t][0], i[t][1])
        }
        var o = n(60),
            i = [
                ["normalize", n(262)],
                ["block", n(259)],
                ["inline", n(260)],
                ["linkify", n(261)],
                ["replacements", n(263)],
                ["smartquotes", n(264)]
            ];
        r.prototype.process = function(t) {
            var e, n, r;
            for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++) r[e](t)
        }, r.prototype.State = n(265), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            var t;
            for (this.ruler = new o, t = 0; t < i.length; t++) this.ruler.push(i[t][0], i[t][1]);
            for (this.ruler2 = new o, t = 0; t < s.length; t++) this.ruler2.push(s[t][0], s[t][1])
        }
        var o = n(60),
            i = [
                ["text", n(276)],
                ["newline", n(274)],
                ["escape", n(270)],
                ["backticks", n(267)],
                ["strikethrough", n(104).tokenize],
                ["emphasis", n(103).tokenize],
                ["link", n(273)],
                ["image", n(272)],
                ["autolink", n(266)],
                ["html_inline", n(271)],
                ["entity", n(269)]
            ],
            s = [
                ["balance_pairs", n(268)],
                ["strikethrough", n(104).postProcess],
                ["emphasis", n(103).postProcess],
                ["text_collapse", n(277)]
            ];
        r.prototype.skipToken = function(t) {
            var e, n, r = t.pos,
                o = this.ruler.getRules(""),
                i = o.length,
                s = t.md.options.maxNesting,
                a = t.cache;
            if (void 0 !== a[r]) return void(t.pos = a[r]);
            if (t.level < s)
                for (n = 0; n < i && (t.level++, e = o[n](t, !0), t.level--, !e); n++);
            else t.pos = t.posMax;
            e || t.pos++, a[r] = t.pos
        }, r.prototype.tokenize = function(t) {
            for (var e, n, r = this.ruler.getRules(""), o = r.length, i = t.posMax, s = t.md.options.maxNesting; t.pos < i;) {
                if (t.level < s)
                    for (n = 0; n < o && !(e = r[n](t, !1)); n++);
                if (e) {
                    if (t.pos >= i) break
                } else t.pending += t.src[t.pos++]
            }
            t.pending && t.pushPending()
        }, r.prototype.parse = function(t, e, n, r) {
            var o, i, s, a = new this.State(t, e, n, r);
            for (this.tokenize(a), i = this.ruler2.getRules(""), s = i.length, o = 0; o < s; o++) i[o](a)
        }, r.prototype.State = n(275), t.exports = r
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
                },
                inline: {
                    rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                    rules2: ["balance_pairs", "emphasis", "text_collapse"]
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["normalize", "block", "inline"]
                },
                block: {
                    rules: ["paragraph"]
                },
                inline: {
                    rules: ["text"],
                    rules2: ["balance_pairs", "text_collapse"]
                }
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.rules = o({}, a)
        }
        var o = n(2).assign,
            i = n(2).unescapeAll,
            s = n(2).escapeHtml,
            a = {};
        a.code_inline = function(t, e, n, r, o) {
            var i = t[e];
            return "<code" + o.renderAttrs(i) + ">" + s(t[e].content) + "</code>"
        }, a.code_block = function(t, e, n, r, o) {
            var i = t[e];
            return "<pre" + o.renderAttrs(i) + "><code>" + s(t[e].content) + "</code></pre>\n"
        }, a.fence = function(t, e, n, r, o) {
            var a, c, u, l, p = t[e],
                h = p.info ? i(p.info).trim() : "",
                f = "";
            return h && (f = h.split(/\s+/g)[0]), a = n.highlight ? n.highlight(p.content, f) || s(p.content) : s(p.content), 0 === a.indexOf("<pre") ? a + "\n" : h ? (c = p.attrIndex("class"), u = p.attrs ? p.attrs.slice() : [], c < 0 ? u.push(["class", n.langPrefix + f]) : u[c][1] += " " + n.langPrefix + f, l = {
                attrs: u
            }, "<pre><code" + o.renderAttrs(l) + ">" + a + "</code></pre>\n") : "<pre><code" + o.renderAttrs(p) + ">" + a + "</code></pre>\n"
        }, a.image = function(t, e, n, r, o) {
            var i = t[e];
            return i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(t, e, n)
        }, a.hardbreak = function(t, e, n) {
            return n.xhtmlOut ? "<br />\n" : "<br>\n"
        }, a.softbreak = function(t, e, n) {
            return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
        }, a.text = function(t, e) {
            return s(t[e].content)
        }, a.html_block = function(t, e) {
            return t[e].content
        }, a.html_inline = function(t, e) {
            return t[e].content
        }, r.prototype.renderAttrs = function(t) {
            var e, n, r;
            if (!t.attrs) return "";
            for (r = "", e = 0, n = t.attrs.length; e < n; e++) r += " " + s(t.attrs[e][0]) + '="' + s(t.attrs[e][1]) + '"';
            return r
        }, r.prototype.renderToken = function(t, e, n) {
            var r, o = "",
                i = !1,
                s = t[e];
            return s.hidden ? "" : (s.block && -1 !== s.nesting && e && t[e - 1].hidden && (o += "\n"), o += (-1 === s.nesting ? "</" : "<") + s.tag, o += this.renderAttrs(s), 0 === s.nesting && n.xhtmlOut && (o += " /"), s.block && (i = !0, 1 === s.nesting && e + 1 < t.length && (r = t[e + 1], "inline" === r.type || r.hidden ? i = !1 : -1 === r.nesting && r.tag === s.tag && (i = !1))), o += i ? ">\n" : ">")
        }, r.prototype.renderInline = function(t, e, n) {
            for (var r, o = "", i = this.rules, s = 0, a = t.length; s < a; s++) r = t[s].type, void 0 !== i[r] ? o += i[r](t, s, e, n, this) : o += this.renderToken(t, s, e);
            return o
        }, r.prototype.renderInlineAsText = function(t, e, n) {
            for (var r = "", o = 0, i = t.length; o < i; o++) "text" === t[o].type ? r += t[o].content : "image" === t[o].type && (r += this.renderInlineAsText(t[o].children, e, n));
            return r
        }, r.prototype.render = function(t, e, n) {
            var r, o, i, s = "",
                a = this.rules;
            for (r = 0, o = t.length; r < o; r++) i = t[r].type, "inline" === i ? s += this.renderInline(t[r].children, e, n) : void 0 !== a[i] ? s += a[t[r].type](t, r, e, n, this) : s += this.renderToken(t, r, e, n);
            return s
        }, t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, o) {
            var i, s, a, c, u, l, p, h, f, d, m, v, y, g, b, _, C, w, x, k, S = t.lineMax,
                E = t.bMarks[e] + t.tShift[e],
                A = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (62 !== t.src.charCodeAt(E++)) return !1;
            if (o) return !0;
            for (c = d = t.sCount[e] + E - (t.bMarks[e] + t.tShift[e]), 32 === t.src.charCodeAt(E) ? (E++, c++, d++, i = !1, C = !0) : 9 === t.src.charCodeAt(E) ? (C = !0, (t.bsCount[e] + d) % 4 == 3 ? (E++, c++, d++, i = !1) : i = !0) : C = !1, m = [t.bMarks[e]], t.bMarks[e] = E; E < A && (s = t.src.charCodeAt(E), r(s));) 9 === s ? d += 4 - (d + t.bsCount[e] + (i ? 1 : 0)) % 4 : d++, E++;
            for (v = [t.bsCount[e]], t.bsCount[e] = t.sCount[e] + 1 + (C ? 1 : 0), p = E >= A, b = [t.sCount[e]], t.sCount[e] = d - c, _ = [t.tShift[e]], t.tShift[e] = E - t.bMarks[e], x = t.md.block.ruler.getRules("blockquote"), g = t.parentType, t.parentType = "blockquote", f = e + 1; f < n && (u = t.sCount[f] < t.blkIndent, E = t.bMarks[f] + t.tShift[f], A = t.eMarks[f], !(E >= A)); f++)
                if (62 !== t.src.charCodeAt(E++) || u) {
                    if (p) break;
                    for (w = !1, a = 0, l = x.length; a < l; a++)
                        if (x[a](t, f, n, !0)) {
                            w = !0;
                            break
                        } if (w) {
                        t.lineMax = f, 0 !== t.blkIndent && (m.push(t.bMarks[f]), v.push(t.bsCount[f]), _.push(t.tShift[f]), b.push(t.sCount[f]), t.sCount[f] -= t.blkIndent);
                        break
                    }
                    if (u) break;
                    m.push(t.bMarks[f]), v.push(t.bsCount[f]), _.push(t.tShift[f]), b.push(t.sCount[f]), t.sCount[f] = -1
                } else {
                    for (c = d = t.sCount[f] + E - (t.bMarks[f] + t.tShift[f]), 32 === t.src.charCodeAt(E) ? (E++, c++, d++, i = !1, C = !0) : 9 === t.src.charCodeAt(E) ? (C = !0, (t.bsCount[f] + d) % 4 == 3 ? (E++, c++, d++, i = !1) : i = !0) : C = !1, m.push(t.bMarks[f]), t.bMarks[f] = E; E < A && (s = t.src.charCodeAt(E), r(s));) 9 === s ? d += 4 - (d + t.bsCount[f] + (i ? 1 : 0)) % 4 : d++, E++;
                    p = E >= A, v.push(t.bsCount[f]), t.bsCount[f] = t.sCount[f] + 1 + (C ? 1 : 0), b.push(t.sCount[f]), t.sCount[f] = d - c, _.push(t.tShift[f]), t.tShift[f] = E - t.bMarks[f]
                } for (y = t.blkIndent, t.blkIndent = 0, k = t.push("blockquote_open", "blockquote", 1), k.markup = ">", k.map = h = [e, 0], t.md.block.tokenize(t, e, f), k = t.push("blockquote_close", "blockquote", -1), k.markup = ">", t.lineMax = S, t.parentType = g, h[1] = t.line, a = 0; a < _.length; a++) t.bMarks[a + e] = m[a], t.tShift[a + e] = _[a], t.sCount[a + e] = b[a], t.bsCount[a + e] = v[a];
            return t.blkIndent = y, !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, o, i;
            if (t.sCount[e] - t.blkIndent < 4) return !1;
            for (o = r = e + 1; r < n;)
                if (t.isEmpty(r)) r++;
                else {
                    if (!(t.sCount[r] - t.blkIndent >= 4)) break;
                    r++, o = r
                } return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(e, o, 4 + t.blkIndent, !0), i.map = [e, t.line], !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r) {
            var o, i, s, a, c, u, l, p = !1,
                h = t.bMarks[e] + t.tShift[e],
                f = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (h + 3 > f) return !1;
            if (126 !== (o = t.src.charCodeAt(h)) && 96 !== o) return !1;
            if (c = h, h = t.skipChars(h, o), (i = h - c) < 3) return !1;
            if (l = t.src.slice(c, h), s = t.src.slice(h, f), s.indexOf(String.fromCharCode(o)) >= 0) return !1;
            if (r) return !0;
            for (a = e; !(++a >= n) && (h = c = t.bMarks[a] + t.tShift[a], f = t.eMarks[a], !(h < f && t.sCount[a] < t.blkIndent));)
                if (t.src.charCodeAt(h) === o && !(t.sCount[a] - t.blkIndent >= 4 || (h = t.skipChars(h, o)) - c < i || (h = t.skipSpaces(h)) < f)) {
                    p = !0;
                    break
                } return i = t.sCount[e], t.line = a + (p ? 1 : 0), u = t.push("fence", "code", 0), u.info = s, u.content = t.getLines(e + 1, a, i, !0), u.markup = l, u.map = [e, t.line], !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, o) {
            var i, s, a, c, u = t.bMarks[e] + t.tShift[e],
                l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (35 !== (i = t.src.charCodeAt(u)) || u >= l) return !1;
            for (s = 1, i = t.src.charCodeAt(++u); 35 === i && u < l && s <= 6;) s++, i = t.src.charCodeAt(++u);
            return !(s > 6 || u < l && !r(i)) && (!!o || (l = t.skipSpacesBack(l, u), a = t.skipCharsBack(l, 35, u), a > u && r(t.src.charCodeAt(a - 1)) && (l = a), t.line = e + 1, c = t.push("heading_open", "h" + String(s), 1), c.markup = "########".slice(0, s), c.map = [e, t.line], c = t.push("inline", "", 0), c.content = t.src.slice(u, l).trim(), c.map = [e, t.line], c.children = [], c = t.push("heading_close", "h" + String(s), -1), c.markup = "########".slice(0, s), !0))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e, n, o) {
            var i, s, a, c, u = t.bMarks[e] + t.tShift[e],
                l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (42 !== (i = t.src.charCodeAt(u++)) && 45 !== i && 95 !== i) return !1;
            for (s = 1; u < l;) {
                if ((a = t.src.charCodeAt(u++)) !== i && !r(a)) return !1;
                a === i && s++
            }
            return !(s < 3) && (!!o || (t.line = e + 1, c = t.push("hr", "hr", 0), c.map = [e, t.line], c.markup = Array(s + 1).join(String.fromCharCode(i)), !0))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(234),
            o = n(102).HTML_OPEN_CLOSE_TAG_RE,
            i = [
                [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
                [/^<!--/, /-->/, !0],
                [/^<\?/, /\?>/, !0],
                [/^<![A-Z]/, />/, !0],
                [/^<!\[CDATA\[/, /\]\]>/, !0],
                [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
                [new RegExp(o.source + "\\s*$"), /^$/, !1]
            ];
        t.exports = function(t, e, n, r) {
            var o, s, a, c, u = t.bMarks[e] + t.tShift[e],
                l = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (!t.md.options.html) return !1;
            if (60 !== t.src.charCodeAt(u)) return !1;
            for (c = t.src.slice(u, l), o = 0; o < i.length && !i[o][0].test(c); o++);
            if (o === i.length) return !1;
            if (r) return i[o][2];
            if (s = e + 1, !i[o][1].test(c))
                for (; s < n && !(t.sCount[s] < t.blkIndent); s++)
                    if (u = t.bMarks[s] + t.tShift[s], l = t.eMarks[s], c = t.src.slice(u, l), i[o][1].test(c)) {
                        0 !== c.length && s++;
                        break
                    } return t.line = s, a = t.push("html_block", "", 0), a.map = [e, s], a.content = t.getLines(e, s, t.blkIndent, !0), !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r, o, i, s, a, c, u, l, p, h, f = e + 1,
                d = t.md.block.ruler.getRules("paragraph");
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            for (h = t.parentType, t.parentType = "paragraph"; f < n && !t.isEmpty(f); f++)
                if (!(t.sCount[f] - t.blkIndent > 3)) {
                    if (t.sCount[f] >= t.blkIndent && (c = t.bMarks[f] + t.tShift[f], u = t.eMarks[f], c < u && (45 === (p = t.src.charCodeAt(c)) || 61 === p) && (c = t.skipChars(c, p), (c = t.skipSpaces(c)) >= u))) {
                        l = 61 === p ? 1 : 2;
                        break
                    }
                    if (!(t.sCount[f] < 0)) {
                        for (o = !1, i = 0, s = d.length; i < s; i++)
                            if (d[i](t, f, n, !0)) {
                                o = !0;
                                break
                            } if (o) break
                    }
                } return !!l && (r = t.getLines(e, f, t.blkIndent, !1).trim(), t.line = f + 1, a = t.push("heading_open", "h" + String(l), 1), a.markup = String.fromCharCode(p), a.map = [e, t.line], a = t.push("inline", "", 0), a.content = r, a.map = [e, t.line - 1], a.children = [], a = t.push("heading_close", "h" + String(l), -1), a.markup = String.fromCharCode(p), t.parentType = h, !0)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n, r, o, i;
            return r = t.bMarks[e] + t.tShift[e], o = t.eMarks[e], n = t.src.charCodeAt(r++), 42 !== n && 45 !== n && 43 !== n ? -1 : r < o && (i = t.src.charCodeAt(r), !s(i)) ? -1 : r
        }

        function o(t, e) {
            var n, r = t.bMarks[e] + t.tShift[e],
                o = r,
                i = t.eMarks[e];
            if (o + 1 >= i) return -1;
            if ((n = t.src.charCodeAt(o++)) < 48 || n > 57) return -1;
            for (;;) {
                if (o >= i) return -1;
                n = t.src.charCodeAt(o++); {
                    if (!(n >= 48 && n <= 57)) {
                        if (41 === n || 46 === n) break;
                        return -1
                    }
                    if (o - r >= 10) return -1
                }
            }
            return o < i && (n = t.src.charCodeAt(o), !s(n)) ? -1 : o
        }

        function i(t, e) {
            var n, r, o = t.level + 2;
            for (n = e + 2, r = t.tokens.length - 2; n < r; n++) t.tokens[n].level === o && "paragraph_open" === t.tokens[n].type && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2)
        }
        var s = n(2).isSpace;
        t.exports = function(t, e, n, a) {
            var c, u, l, p, h, f, d, m, v, y, g, b, _, C, w, x, k, S, E, A, T, O, P, I, D, M, N, R, L = !1,
                j = !0;
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (a && "paragraph" === t.parentType && t.tShift[e] >= t.blkIndent && (L = !0), (P = o(t, e)) >= 0) {
                if (d = !0, D = t.bMarks[e] + t.tShift[e], _ = Number(t.src.substr(D, P - D - 1)), L && 1 !== _) return !1
            } else {
                if (!((P = r(t, e)) >= 0)) return !1;
                d = !1
            }
            if (L && t.skipSpaces(P) >= t.eMarks[e]) return !1;
            if (b = t.src.charCodeAt(P - 1), a) return !0;
            for (g = t.tokens.length, d ? (R = t.push("ordered_list_open", "ol", 1), 1 !== _ && (R.attrs = [
                    ["start", _]
                ])) : R = t.push("bullet_list_open", "ul", 1), R.map = y = [e, 0], R.markup = String.fromCharCode(b), w = e, I = !1, N = t.md.block.ruler.getRules("list"), E = t.parentType, t.parentType = "list"; w < n;) {
                for (O = P, C = t.eMarks[w], f = x = t.sCount[w] + P - (t.bMarks[e] + t.tShift[e]); O < C && (c = t.src.charCodeAt(O), s(c));) 9 === c ? x += 4 - (x + t.bsCount[w]) % 4 : x++, O++;
                if (u = O, h = u >= C ? 1 : x - f, h > 4 && (h = 1), p = f + h, R = t.push("list_item_open", "li", 1), R.markup = String.fromCharCode(b), R.map = m = [e, 0], k = t.blkIndent, T = t.tight, A = t.tShift[e], S = t.sCount[e], t.blkIndent = p, t.tight = !0, t.tShift[e] = u - t.bMarks[e], t.sCount[e] = x, u >= C && t.isEmpty(e + 1) ? t.line = Math.min(t.line + 2, n) : t.md.block.tokenize(t, e, n, !0), t.tight && !I || (j = !1), I = t.line - e > 1 && t.isEmpty(t.line - 1), t.blkIndent = k, t.tShift[e] = A, t.sCount[e] = S, t.tight = T, R = t.push("list_item_close", "li", -1), R.markup = String.fromCharCode(b), w = e = t.line, m[1] = w, u = t.bMarks[e], w >= n) break;
                if (t.sCount[w] < t.blkIndent) break;
                for (M = !1, l = 0, v = N.length; l < v; l++)
                    if (N[l](t, w, n, !0)) {
                        M = !0;
                        break
                    } if (M) break;
                if (d) {
                    if ((P = o(t, w)) < 0) break
                } else if ((P = r(t, w)) < 0) break;
                if (b !== t.src.charCodeAt(P - 1)) break
            }
            return R = d ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1), R.markup = String.fromCharCode(b), y[1] = w, t.line = w, t.parentType = E, j && i(t, g), !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            var n, r, o, i, s, a, c = e + 1,
                u = t.md.block.ruler.getRules("paragraph"),
                l = t.lineMax;
            for (a = t.parentType, t.parentType = "paragraph"; c < l && !t.isEmpty(c); c++)
                if (!(t.sCount[c] - t.blkIndent > 3 || t.sCount[c] < 0)) {
                    for (r = !1, o = 0, i = u.length; o < i; o++)
                        if (u[o](t, c, l, !0)) {
                            r = !0;
                            break
                        } if (r) break
                } return n = t.getLines(e, c, t.blkIndent, !1).trim(), t.line = c, s = t.push("paragraph_open", "p", 1), s.map = [e, t.line], s = t.push("inline", "", 0), s.content = n, s.map = [e, t.line], s.children = [], s = t.push("paragraph_close", "p", -1), t.parentType = a, !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference,
            o = n(2).isSpace;
        t.exports = function(t, e, n, i) {
            var s, a, c, u, l, p, h, f, d, m, v, y, g, b, _, C, w = 0,
                x = t.bMarks[e] + t.tShift[e],
                k = t.eMarks[e],
                S = e + 1;
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (91 !== t.src.charCodeAt(x)) return !1;
            for (; ++x < k;)
                if (93 === t.src.charCodeAt(x) && 92 !== t.src.charCodeAt(x - 1)) {
                    if (x + 1 === k) return !1;
                    if (58 !== t.src.charCodeAt(x + 1)) return !1;
                    break
                } for (u = t.lineMax, _ = t.md.block.ruler.getRules("reference"), m = t.parentType, t.parentType = "reference"; S < u && !t.isEmpty(S); S++)
                if (!(t.sCount[S] - t.blkIndent > 3 || t.sCount[S] < 0)) {
                    for (b = !1, p = 0, h = _.length; p < h; p++)
                        if (_[p](t, S, u, !0)) {
                            b = !0;
                            break
                        } if (b) break
                } for (g = t.getLines(e, S, t.blkIndent, !1).trim(), k = g.length, x = 1; x < k; x++) {
                if (91 === (s = g.charCodeAt(x))) return !1;
                if (93 === s) {
                    d = x;
                    break
                }
                10 === s ? w++ : 92 === s && ++x < k && 10 === g.charCodeAt(x) && w++
            }
            if (d < 0 || 58 !== g.charCodeAt(d + 1)) return !1;
            for (x = d + 2; x < k; x++)
                if (10 === (s = g.charCodeAt(x))) w++;
                else if (!o(s)) break;
            if (v = t.md.helpers.parseLinkDestination(g, x, k), !v.ok) return !1;
            if (l = t.md.normalizeLink(v.str), !t.md.validateLink(l)) return !1;
            for (x = v.pos, w += v.lines, a = x, c = w, y = x; x < k; x++)
                if (10 === (s = g.charCodeAt(x))) w++;
                else if (!o(s)) break;
            for (v = t.md.helpers.parseLinkTitle(g, x, k), x < k && y !== x && v.ok ? (C = v.str, x = v.pos, w += v.lines) : (C = "", x = a, w = c); x < k && (s = g.charCodeAt(x), o(s));) x++;
            if (x < k && 10 !== g.charCodeAt(x) && C)
                for (C = "", x = a, w = c; x < k && (s = g.charCodeAt(x), o(s));) x++;
            return !(x < k && 10 !== g.charCodeAt(x)) && (!!(f = r(g.slice(1, d))) && (!!i || (void 0 === t.env.references && (t.env.references = {}), void 0 === t.env.references[f] && (t.env.references[f] = {
                title: C,
                href: l
            }), t.parentType = m, t.line = e + w + 1, !0)))
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            var o, s, a, c, u, l, p, h;
            for (this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, h = !1, a = c = l = p = 0, u = s.length; c < u; c++) {
                if (o = s.charCodeAt(c), !h) {
                    if (i(o)) {
                        l++, 9 === o ? p += 4 - p % 4 : p++;
                        continue
                    }
                    h = !0
                }
                10 !== o && c !== u - 1 || (10 !== o && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(l), this.sCount.push(p), this.bsCount.push(0), h = !1, l = 0, p = 0, a = c + 1)
            }
            this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1
        }
        var o = n(61),
            i = n(2).isSpace;
        r.prototype.push = function(t, e, n) {
            var r = new o(t, e, n);
            return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r
        }, r.prototype.isEmpty = function(t) {
            return this.bMarks[t] + this.tShift[t] >= this.eMarks[t]
        }, r.prototype.skipEmptyLines = function(t) {
            for (var e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
            return t
        }, r.prototype.skipSpaces = function(t) {
            for (var e, n = this.src.length; t < n && (e = this.src.charCodeAt(t), i(e)); t++);
            return t
        }, r.prototype.skipSpacesBack = function(t, e) {
            if (t <= e) return t;
            for (; t > e;)
                if (!i(this.src.charCodeAt(--t))) return t + 1;
            return t
        }, r.prototype.skipChars = function(t, e) {
            for (var n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++);
            return t
        }, r.prototype.skipCharsBack = function(t, e, n) {
            if (t <= n) return t;
            for (; t > n;)
                if (e !== this.src.charCodeAt(--t)) return t + 1;
            return t
        }, r.prototype.getLines = function(t, e, n, r) {
            var o, s, a, c, u, l, p, h = t;
            if (t >= e) return "";
            for (l = new Array(e - t), o = 0; h < e; h++, o++) {
                for (s = 0, p = c = this.bMarks[h], u = h + 1 < e || r ? this.eMarks[h] + 1 : this.eMarks[h]; c < u && s < n;) {
                    if (a = this.src.charCodeAt(c), i(a)) 9 === a ? s += 4 - (s + this.bsCount[h]) % 4 : s++;
                    else {
                        if (!(c - p < this.tShift[h])) break;
                        s++
                    }
                    c++
                }
                l[o] = s > n ? new Array(s - n + 1).join(" ") + this.src.slice(c, u) : this.src.slice(c, u)
            }
            return l.join("")
        }, r.prototype.Token = o, t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = t.bMarks[e] + t.blkIndent,
                r = t.eMarks[e];
            return t.src.substr(n, r - n)
        }

        function o(t) {
            var e, n = [],
                r = 0,
                o = t.length,
                i = 0,
                s = 0,
                a = !1,
                c = 0;
            for (e = t.charCodeAt(r); r < o;) 96 === e ? a ? (a = !1, c = r) : i % 2 == 0 && (a = !0, c = r) : 124 !== e || i % 2 != 0 || a || (n.push(t.substring(s, r)), s = r + 1), 92 === e ? i++ : i = 0, r++, r === o && a && (a = !1, r = c + 1), e = t.charCodeAt(r);
            return n.push(t.substring(s)), n
        }
        var i = n(2).isSpace;
        t.exports = function(t, e, n, s) {
            var a, c, u, l, p, h, f, d, m, v, y, g;
            if (e + 2 > n) return !1;
            if (p = e + 1, t.sCount[p] < t.blkIndent) return !1;
            if (t.sCount[p] - t.blkIndent >= 4) return !1;
            if ((u = t.bMarks[p] + t.tShift[p]) >= t.eMarks[p]) return !1;
            if (124 !== (a = t.src.charCodeAt(u++)) && 45 !== a && 58 !== a) return !1;
            for (; u < t.eMarks[p];) {
                if (124 !== (a = t.src.charCodeAt(u)) && 45 !== a && 58 !== a && !i(a)) return !1;
                u++
            }
            for (c = r(t, e + 1), h = c.split("|"), m = [], l = 0; l < h.length; l++) {
                if (!(v = h[l].trim())) {
                    if (0 === l || l === h.length - 1) continue;
                    return !1
                }
                if (!/^:?-+:?$/.test(v)) return !1;
                58 === v.charCodeAt(v.length - 1) ? m.push(58 === v.charCodeAt(0) ? "center" : "right") : 58 === v.charCodeAt(0) ? m.push("left") : m.push("")
            }
            if (c = r(t, e).trim(), -1 === c.indexOf("|")) return !1;
            if (t.sCount[e] - t.blkIndent >= 4) return !1;
            if (h = o(c.replace(/^\||\|$/g, "")), (f = h.length) > m.length) return !1;
            if (s) return !0;
            for (d = t.push("table_open", "table", 1), d.map = y = [e, 0], d = t.push("thead_open", "thead", 1), d.map = [e, e + 1], d = t.push("tr_open", "tr", 1), d.map = [e, e + 1], l = 0; l < h.length; l++) d = t.push("th_open", "th", 1), d.map = [e, e + 1], m[l] && (d.attrs = [
                ["style", "text-align:" + m[l]]
            ]), d = t.push("inline", "", 0), d.content = h[l].trim(), d.map = [e, e + 1], d.children = [], d = t.push("th_close", "th", -1);
            for (d = t.push("tr_close", "tr", -1), d = t.push("thead_close", "thead", -1), d = t.push("tbody_open", "tbody", 1), d.map = g = [e + 2, 0], p = e + 2; p < n && !(t.sCount[p] < t.blkIndent) && (c = r(t, p).trim(), -1 !== c.indexOf("|")) && !(t.sCount[p] - t.blkIndent >= 4); p++) {
                for (h = o(c.replace(/^\||\|$/g, "")), d = t.push("tr_open", "tr", 1), l = 0; l < f; l++) d = t.push("td_open", "td", 1), m[l] && (d.attrs = [
                    ["style", "text-align:" + m[l]]
                ]), d = t.push("inline", "", 0), d.content = h[l] ? h[l].trim() : "", d.children = [], d = t.push("td_close", "td", -1);
                d = t.push("tr_close", "tr", -1)
            }
            return d = t.push("tbody_close", "tbody", -1), d = t.push("table_close", "table", -1), y[1] = g[1] = p, t.line = p, !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e;
            t.inlineMode ? (e = new t.Token("inline", "", 0), e.content = t.src, e.map = [0, 1], e.children = [], t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r, o = t.tokens;
            for (n = 0, r = o.length; n < r; n++) e = o[n], "inline" === e.type && t.md.inline.parse(e.content, t.md, t.env, e.children)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return /^<a[>\s]/i.test(t)
        }

        function o(t) {
            return /^<\/a\s*>/i.test(t)
        }
        var i = n(2).arrayReplaceAt;
        t.exports = function(t) {
            var e, n, s, a, c, u, l, p, h, f, d, m, v, y, g, b, _, C = t.tokens;
            if (t.md.options.linkify)
                for (n = 0, s = C.length; n < s; n++)
                    if ("inline" === C[n].type && t.md.linkify.pretest(C[n].content))
                        for (a = C[n].children, v = 0, e = a.length - 1; e >= 0; e--)
                            if (u = a[e], "link_close" !== u.type) {
                                if ("html_inline" === u.type && (r(u.content) && v > 0 && v--, o(u.content) && v++), !(v > 0) && "text" === u.type && t.md.linkify.test(u.content)) {
                                    for (h = u.content, _ = t.md.linkify.match(h), l = [], m = u.level, d = 0, p = 0; p < _.length; p++) y = _[p].url, g = t.md.normalizeLink(y), t.md.validateLink(g) && (b = _[p].text, b = _[p].schema ? "mailto:" !== _[p].schema || /^mailto:/i.test(b) ? t.md.normalizeLinkText(b) : t.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), f = _[p].index, f > d && (c = new t.Token("text", "", 0), c.content = h.slice(d, f), c.level = m, l.push(c)), c = new t.Token("link_open", "a", 1), c.attrs = [
                                        ["href", g]
                                    ], c.level = m++, c.markup = "linkify", c.info = "auto", l.push(c), c = new t.Token("text", "", 0), c.content = b, c.level = m, l.push(c), c = new t.Token("link_close", "a", -1), c.level = --m, c.markup = "linkify", c.info = "auto", l.push(c), d = _[p].lastIndex);
                                    d < h.length && (c = new t.Token("text", "", 0), c.content = h.slice(d), c.level = m, l.push(c)), C[n].children = a = i(a, e, l)
                                }
                            } else
                                for (e--; a[e].level !== u.level && "link_open" !== a[e].type;) e--
        }
    }, function(t, e, n) {
        "use strict";
        var r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
            o = /\u0000/g;
        t.exports = function(t) {
            var e;
            e = t.src.replace(r, "\n"), e = e.replace(o, "�"), t.src = e
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return u[e.toLowerCase()]
        }

        function o(t) {
            var e, n, o = 0;
            for (e = t.length - 1; e >= 0; e--) n = t[e], "text" !== n.type || o || (n.content = n.content.replace(c, r)), "link_open" === n.type && "auto" === n.info && o--, "link_close" === n.type && "auto" === n.info && o++
        }

        function i(t) {
            var e, n, r = 0;
            for (e = t.length - 1; e >= 0; e--) n = t[e], "text" !== n.type || r || s.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
        }
        var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
            a = /\((c|tm|r|p)\)/i,
            c = /\((c|tm|r|p)\)/gi,
            u = {
                c: "©",
                r: "®",
                p: "§",
                tm: "™"
            };
        t.exports = function(t) {
            var e;
            if (t.md.options.typographer)
                for (e = t.tokens.length - 1; e >= 0; e--) "inline" === t.tokens[e].type && (a.test(t.tokens[e].content) && o(t.tokens[e].children), s.test(t.tokens[e].content) && i(t.tokens[e].children))
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return t.substr(0, e) + n + t.substr(e + 1)
        }

        function o(t, e) {
            var n, o, c, p, h, f, d, m, v, y, g, b, _, C, w, x, k, S, E, A, T;
            for (E = [], n = 0; n < t.length; n++) {
                for (o = t[n], d = t[n].level, k = E.length - 1; k >= 0 && !(E[k].level <= d); k--);
                if (E.length = k + 1, "text" === o.type) {
                    c = o.content, h = 0, f = c.length;
                    t: for (; h < f && (u.lastIndex = h, p = u.exec(c));) {
                        if (w = x = !0, h = p.index + 1, S = "'" === p[0], v = 32, p.index - 1 >= 0) v = c.charCodeAt(p.index - 1);
                        else
                            for (k = n - 1; k >= 0; k--)
                                if ("text" === t[k].type) {
                                    v = t[k].content.charCodeAt(t[k].content.length - 1);
                                    break
                                } if (y = 32, h < f) y = c.charCodeAt(h);
                        else
                            for (k = n + 1; k < t.length; k++)
                                if ("text" === t[k].type) {
                                    y = t[k].content.charCodeAt(0);
                                    break
                                } if (g = a(v) || s(String.fromCharCode(v)), b = a(y) || s(String.fromCharCode(y)), _ = i(v), C = i(y), C ? w = !1 : b && (_ || g || (w = !1)), _ ? x = !1 : g && (C || b || (x = !1)), 34 === y && '"' === p[0] && v >= 48 && v <= 57 && (x = w = !1), w && x && (w = !1, x = b), w || x) {
                            if (x)
                                for (k = E.length - 1; k >= 0 && (m = E[k], !(E[k].level < d)); k--)
                                    if (m.single === S && E[k].level === d) {
                                        m = E[k], S ? (A = e.md.options.quotes[2], T = e.md.options.quotes[3]) : (A = e.md.options.quotes[0], T = e.md.options.quotes[1]), o.content = r(o.content, p.index, T), t[m.token].content = r(t[m.token].content, m.pos, A), h += T.length - 1, m.token === n && (h += A.length - 1), c = o.content, f = c.length, E.length = k;
                                        continue t
                                    } w ? E.push({
                                token: n,
                                pos: p.index,
                                single: S,
                                level: d
                            }) : x && S && (o.content = r(o.content, p.index, l))
                        } else S && (o.content = r(o.content, p.index, l))
                    }
                }
            }
        }
        var i = n(2).isWhiteSpace,
            s = n(2).isPunctChar,
            a = n(2).isMdAsciiPunct,
            c = /['"]/,
            u = /['"]/g,
            l = "’";
        t.exports = function(t) {
            var e;
            if (t.md.options.typographer)
                for (e = t.tokens.length - 1; e >= 0; e--) "inline" === t.tokens[e].type && c.test(t.tokens[e].content) && o(t.tokens[e].children, t)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e
        }
        var o = n(61);
        r.prototype.Token = o, t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
            o = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
        t.exports = function(t, e) {
            var n, i, s, a, c, u, l = t.pos;
            return 60 === t.src.charCodeAt(l) && (n = t.src.slice(l), !(n.indexOf(">") < 0) && (o.test(n) ? (i = n.match(o), a = i[0].slice(1, -1), c = t.md.normalizeLink(a), !!t.md.validateLink(c) && (e || (u = t.push("link_open", "a", 1), u.attrs = [
                ["href", c]
            ], u.markup = "autolink", u.info = "auto", u = t.push("text", "", 0), u.content = t.md.normalizeLinkText(a), u = t.push("link_close", "a", -1), u.markup = "autolink", u.info = "auto"), t.pos += i[0].length, !0)) : !!r.test(n) && (s = n.match(r), a = s[0].slice(1, -1), c = t.md.normalizeLink("mailto:" + a), !!t.md.validateLink(c) && (e || (u = t.push("link_open", "a", 1), u.attrs = [
                ["href", c]
            ], u.markup = "autolink", u.info = "auto", u = t.push("text", "", 0), u.content = t.md.normalizeLinkText(a), u = t.push("link_close", "a", -1), u.markup = "autolink", u.info = "auto"), t.pos += s[0].length, !0))))
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            var n, r, o, i, s, a, c = t.pos;
            if (96 !== t.src.charCodeAt(c)) return !1;
            for (n = c, c++, r = t.posMax; c < r && 96 === t.src.charCodeAt(c);) c++;
            for (o = t.src.slice(n, c), i = s = c; - 1 !== (i = t.src.indexOf("`", s));) {
                for (s = i + 1; s < r && 96 === t.src.charCodeAt(s);) s++;
                if (s - i === o.length) return e || (a = t.push("code_inline", "code", 0), a.markup = o, a.content = t.src.slice(c, i).replace(/[ \n]+/g, " ").trim()), t.pos = s, !0
            }
            return e || (t.pending += o), t.pos += o.length, !0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r, o, i = t.delimiters,
                s = t.delimiters.length;
            for (e = 0; e < s; e++)
                if (r = i[e], r.close)
                    for (n = e - r.jump - 1; n >= 0;) {
                        if (o = i[n], o.open && o.marker === r.marker && o.end < 0 && o.level === r.level) {
                            var a = (o.close || r.open) && void 0 !== o.length && void 0 !== r.length && (o.length + r.length) % 3 == 0;
                            if (!a) {
                                r.jump = e - n, r.open = !1, o.end = e, o.jump = 0;
                                break
                            }
                        }
                        n -= o.jump + 1
                    }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(101),
            o = n(2).has,
            i = n(2).isValidEntityCode,
            s = n(2).fromCodePoint,
            a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
            c = /^&([a-z][a-z0-9]{1,31});/i;
        t.exports = function(t, e) {
            var n, u, l = t.pos,
                p = t.posMax;
            if (38 !== t.src.charCodeAt(l)) return !1;
            if (l + 1 < p)
                if (35 === t.src.charCodeAt(l + 1)) {
                    if (u = t.src.slice(l).match(a)) return e || (n = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), t.pending += s(i(n) ? n : 65533)), t.pos += u[0].length, !0
                } else if ((u = t.src.slice(l).match(c)) && o(r, u[1])) return e || (t.pending += r[u[1]]), t.pos += u[0].length, !0;
            return e || (t.pending += "&"), t.pos++, !0
        }
    }, function(t, e, n) {
        "use strict";
        for (var r = n(2).isSpace, o = [], i = 0; i < 256; i++) o.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
            o[t.charCodeAt(0)] = 1
        }), t.exports = function(t, e) {
            var n, i = t.pos,
                s = t.posMax;
            if (92 !== t.src.charCodeAt(i)) return !1;
            if (++i < s) {
                if ((n = t.src.charCodeAt(i)) < 256 && 0 !== o[n]) return e || (t.pending += t.src[i]), t.pos += 2, !0;
                if (10 === n) {
                    for (e || t.push("hardbreak", "br", 0), i++; i < s && (n = t.src.charCodeAt(i), r(n));) i++;
                    return t.pos = i, !0
                }
            }
            return e || (t.pending += "\\"), t.pos++, !0
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = 32 | t;
            return e >= 97 && e <= 122
        }
        var o = n(102).HTML_TAG_RE;
        t.exports = function(t, e) {
            var n, i, s, a, c = t.pos;
            return !!t.md.options.html && (s = t.posMax, !(60 !== t.src.charCodeAt(c) || c + 2 >= s) && (!(33 !== (n = t.src.charCodeAt(c + 1)) && 63 !== n && 47 !== n && !r(n)) && (!!(i = t.src.slice(c).match(o)) && (e || (a = t.push("html_inline", "", 0), a.content = t.src.slice(c, c + i[0].length)), t.pos += i[0].length, !0))))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference,
            o = n(2).isSpace;
        t.exports = function(t, e) {
            var n, i, s, a, c, u, l, p, h, f, d, m, v, y = "",
                g = t.pos,
                b = t.posMax;
            if (33 !== t.src.charCodeAt(t.pos)) return !1;
            if (91 !== t.src.charCodeAt(t.pos + 1)) return !1;
            if (u = t.pos + 2, (c = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1)) < 0) return !1;
            if ((l = c + 1) < b && 40 === t.src.charCodeAt(l)) {
                for (l++; l < b && (i = t.src.charCodeAt(l), o(i) || 10 === i); l++);
                if (l >= b) return !1;
                for (v = l, h = t.md.helpers.parseLinkDestination(t.src, l, t.posMax), h.ok && (y = t.md.normalizeLink(h.str), t.md.validateLink(y) ? l = h.pos : y = ""), v = l; l < b && (i = t.src.charCodeAt(l), o(i) || 10 === i); l++);
                if (h = t.md.helpers.parseLinkTitle(t.src, l, t.posMax), l < b && v !== l && h.ok)
                    for (f = h.str, l = h.pos; l < b && (i = t.src.charCodeAt(l), o(i) || 10 === i); l++);
                else f = "";
                if (l >= b || 41 !== t.src.charCodeAt(l)) return t.pos = g, !1;
                l++
            } else {
                if (void 0 === t.env.references) return !1;
                if (l < b && 91 === t.src.charCodeAt(l) ? (v = l + 1, l = t.md.helpers.parseLinkLabel(t, l), l >= 0 ? a = t.src.slice(v, l++) : l = c + 1) : l = c + 1, a || (a = t.src.slice(u, c)), !(p = t.env.references[r(a)])) return t.pos = g, !1;
                y = p.href, f = p.title
            }
            return e || (s = t.src.slice(u, c), t.md.inline.parse(s, t.md, t.env, m = []), d = t.push("image", "img", 0), d.attrs = n = [
                ["src", y],
                ["alt", ""]
            ], d.children = m, d.content = s, f && n.push(["title", f])), t.pos = l, t.posMax = b, !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).normalizeReference,
            o = n(2).isSpace;
        t.exports = function(t, e) {
            var n, i, s, a, c, u, l, p, h, f, d = "",
                m = t.pos,
                v = t.posMax,
                y = t.pos,
                g = !0;
            if (91 !== t.src.charCodeAt(t.pos)) return !1;
            if (c = t.pos + 1, (a = t.md.helpers.parseLinkLabel(t, t.pos, !0)) < 0) return !1;
            if ((u = a + 1) < v && 40 === t.src.charCodeAt(u)) {
                for (g = !1, u++; u < v && (i = t.src.charCodeAt(u), o(i) || 10 === i); u++);
                if (u >= v) return !1;
                for (y = u, l = t.md.helpers.parseLinkDestination(t.src, u, t.posMax), l.ok && (d = t.md.normalizeLink(l.str), t.md.validateLink(d) ? u = l.pos : d = ""), y = u; u < v && (i = t.src.charCodeAt(u), o(i) || 10 === i); u++);
                if (l = t.md.helpers.parseLinkTitle(t.src, u, t.posMax), u < v && y !== u && l.ok)
                    for (h = l.str, u = l.pos; u < v && (i = t.src.charCodeAt(u), o(i) || 10 === i); u++);
                else h = "";
                (u >= v || 41 !== t.src.charCodeAt(u)) && (g = !0), u++
            }
            if (g) {
                if (void 0 === t.env.references) return !1;
                if (u < v && 91 === t.src.charCodeAt(u) ? (y = u + 1, u = t.md.helpers.parseLinkLabel(t, u), u >= 0 ? s = t.src.slice(y, u++) : u = a + 1) : u = a + 1, s || (s = t.src.slice(c, a)), !(p = t.env.references[r(s)])) return t.pos = m, !1;
                d = p.href, h = p.title
            }
            return e || (t.pos = c, t.posMax = a, f = t.push("link_open", "a", 1), f.attrs = n = [
                ["href", d]
            ], h && n.push(["title", h]), t.md.inline.tokenize(t), f = t.push("link_close", "a", -1)), t.pos = u, t.posMax = v, !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2).isSpace;
        t.exports = function(t, e) {
            var n, o, i = t.pos;
            if (10 !== t.src.charCodeAt(i)) return !1;
            for (n = t.pending.length - 1, o = t.posMax, e || (n >= 0 && 32 === t.pending.charCodeAt(n) ? n >= 1 && 32 === t.pending.charCodeAt(n - 1) ? (t.pending = t.pending.replace(/ +$/, ""), t.push("hardbreak", "br", 0)) : (t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0)) : t.push("softbreak", "br", 0)), i++; i < o && r(t.src.charCodeAt(i));) i++;
            return t.pos = i, !0
        }
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            this.src = t, this.env = n, this.md = e, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = []
        }
        var o = n(61),
            i = n(2).isWhiteSpace,
            s = n(2).isPunctChar,
            a = n(2).isMdAsciiPunct;
        r.prototype.pushPending = function() {
            var t = new o("text", "", 0);
            return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t
        }, r.prototype.push = function(t, e, n) {
            this.pending && this.pushPending();
            var r = new o(t, e, n);
            return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r
        }, r.prototype.scanDelims = function(t, e) {
            var n, r, o, c, u, l, p, h, f, d = t,
                m = !0,
                v = !0,
                y = this.posMax,
                g = this.src.charCodeAt(t);
            for (n = t > 0 ? this.src.charCodeAt(t - 1) : 32; d < y && this.src.charCodeAt(d) === g;) d++;
            return o = d - t, r = d < y ? this.src.charCodeAt(d) : 32, p = a(n) || s(String.fromCharCode(n)), f = a(r) || s(String.fromCharCode(r)), l = i(n), h = i(r), h ? m = !1 : f && (l || p || (m = !1)), l ? v = !1 : p && (h || f || (v = !1)), e ? (c = m, u = v) : (c = m && (!v || p), u = v && (!m || f)), {
                can_open: c,
                can_close: u,
                length: o
            }
        }, r.prototype.Token = o, t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            switch (t) {
                case 10:
                case 33:
                case 35:
                case 36:
                case 37:
                case 38:
                case 42:
                case 43:
                case 45:
                case 58:
                case 60:
                case 61:
                case 62:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 125:
                case 126:
                    return !0;
                default:
                    return !1
            }
        }
        t.exports = function(t, e) {
            for (var n = t.pos; n < t.posMax && !r(t.src.charCodeAt(n));) n++;
            return n !== t.pos && (e || (t.pending += t.src.slice(t.pos, n)), t.pos = n, !0)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e, n, r = 0,
                o = t.tokens,
                i = t.tokens.length;
            for (e = n = 0; e < i; e++) r += o[e].nesting, o[e].level = r, "text" === o[e].type && e + 1 < i && "text" === o[e + 1].type ? o[e + 1].content = o[e].content + o[e + 1].content : (e !== n && (o[n] = o[e]), n++);
            e !== n && (o.length = n)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n, r = i[t];
            if (r) return r;
            for (r = i[t] = [], e = 0; e < 128; e++) n = String.fromCharCode(e), r.push(n);
            for (e = 0; e < t.length; e++) n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
            return r
        }

        function o(t, e) {
            var n;
            return "string" != typeof e && (e = o.defaultChars), n = r(e), t.replace(/(%[a-f0-9]{2})+/gi, function(t) {
                var e, r, o, i, s, a, c, u = "";
                for (e = 0, r = t.length; e < r; e += 3) o = parseInt(t.slice(e + 1, e + 3), 16), o < 128 ? u += n[o] : 192 == (224 & o) && e + 3 < r && 128 == (192 & (i = parseInt(t.slice(e + 4, e + 6), 16))) ? (c = o << 6 & 1984 | 63 & i, u += c < 128 ? "��" : String.fromCharCode(c), e += 3) : 224 == (240 & o) && e + 6 < r && (i = parseInt(t.slice(e + 4, e + 6), 16), s = parseInt(t.slice(e + 7, e + 9), 16), 128 == (192 & i) && 128 == (192 & s)) ? (c = o << 12 & 61440 | i << 6 & 4032 | 63 & s, u += c < 2048 || c >= 55296 && c <= 57343 ? "���" : String.fromCharCode(c), e += 6) : 240 == (248 & o) && e + 9 < r && (i = parseInt(t.slice(e + 4, e + 6), 16), s = parseInt(t.slice(e + 7, e + 9), 16), a = parseInt(t.slice(e + 10, e + 12), 16), 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a)) ? (c = o << 18 & 1835008 | i << 12 & 258048 | s << 6 & 4032 | 63 & a, c < 65536 || c > 1114111 ? u += "����" : (c -= 65536, u += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), e += 9) : u += "�";
                return u
            })
        }
        var i = {};
        o.defaultChars = ";/?:@&=+$,#", o.componentChars = "", t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n, r = i[t];
            if (r) return r;
            for (r = i[t] = [], e = 0; e < 128; e++) n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            for (e = 0; e < t.length; e++) r[t.charCodeAt(e)] = t[e];
            return r
        }

        function o(t, e, n) {
            var i, s, a, c, u, l = "";
            for ("string" != typeof e && (n = e, e = o.defaultChars), void 0 === n && (n = !0), u = r(e), i = 0, s = t.length; i < s; i++)
                if (a = t.charCodeAt(i), n && 37 === a && i + 2 < s && /^[0-9a-f]{2}$/i.test(t.slice(i + 1, i + 3))) l += t.slice(i, i + 3), i += 2;
                else if (a < 128) l += u[a];
            else if (a >= 55296 && a <= 57343) {
                if (a >= 55296 && a <= 56319 && i + 1 < s && (c = t.charCodeAt(i + 1)) >= 56320 && c <= 57343) {
                    l += encodeURIComponent(t[i] + t[i + 1]), i++;
                    continue
                }
                l += "%EF%BF%BD"
            } else l += encodeURIComponent(t[i]);
            return l
        }
        var i = {};
        o.defaultChars = ";/?:@&=+$,-_.!~*'()#", o.componentChars = "-_.!~*'()", t.exports = o
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = "";
            return e += t.protocol || "", e += t.slashes ? "//" : "", e += t.auth ? t.auth + "@" : "", t.hostname && -1 !== t.hostname.indexOf(":") ? e += "[" + t.hostname + "]" : e += t.hostname || "", e += t.port ? ":" + t.port : "", e += t.pathname || "", e += t.search || "", e += t.hash || ""
        }
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
        }

        function o(t, e) {
            if (t && t instanceof r) return t;
            var n = new r;
            return n.parse(t, e), n
        }
        var i = /^([a-z0-9.+-]+:)/i,
            s = /:[0-9]*$/,
            a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            c = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
            u = ["{", "}", "|", "\\", "^", "`"].concat(c),
            l = ["'"].concat(u),
            p = ["%", "/", "?", ";", "#"].concat(l),
            h = ["/", "?", "#"],
            f = /^[+a-z0-9A-Z_-]{0,63}$/,
            d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            m = {
                javascript: !0,
                "javascript:": !0
            },
            v = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            };
        r.prototype.parse = function(t, e) {
            var n, r, o, s, c, u = t;
            if (u = u.trim(), !e && 1 === t.split("#").length) {
                var l = a.exec(u);
                if (l) return this.pathname = l[1], l[2] && (this.search = l[2]), this
            }
            var y = i.exec(u);
            if (y && (y = y[0], o = y.toLowerCase(), this.protocol = y, u = u.substr(y.length)), (e || y || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(c = "//" === u.substr(0, 2)) || y && m[y] || (u = u.substr(2), this.slashes = !0)), !m[y] && (c || y && !v[y])) {
                var g = -1;
                for (n = 0; n < h.length; n++) - 1 !== (s = u.indexOf(h[n])) && (-1 === g || s < g) && (g = s);
                var b, _;
                for (_ = -1 === g ? u.lastIndexOf("@") : u.lastIndexOf("@", g), -1 !== _ && (b = u.slice(0, _), u = u.slice(_ + 1), this.auth = b), g = -1, n = 0; n < p.length; n++) - 1 !== (s = u.indexOf(p[n])) && (-1 === g || s < g) && (g = s); - 1 === g && (g = u.length), ":" === u[g - 1] && g--;
                var C = u.slice(0, g);
                u = u.slice(g), this.parseHost(C), this.hostname = this.hostname || "";
                var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!w) {
                    var x = this.hostname.split(/\./);
                    for (n = 0, r = x.length; n < r; n++) {
                        var k = x[n];
                        if (k && !k.match(f)) {
                            for (var S = "", E = 0, A = k.length; E < A; E++) k.charCodeAt(E) > 127 ? S += "x" : S += k[E];
                            if (!S.match(f)) {
                                var T = x.slice(0, n),
                                    O = x.slice(n + 1),
                                    P = k.match(d);
                                P && (T.push(P[1]), O.unshift(P[2])), O.length && (u = O.join(".") + u), this.hostname = T.join(".");
                                break
                            }
                        }
                    }
                }
                this.hostname.length > 255 && (this.hostname = ""), w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
            }
            var I = u.indexOf("#"); - 1 !== I && (this.hash = u.substr(I), u = u.slice(0, I));
            var D = u.indexOf("?");
            return -1 !== D && (this.search = u.substr(D), u = u.slice(0, D)), u && (this.pathname = u), v[o] && this.hostname && !this.pathname && (this.pathname = ""), this
        }, r.prototype.parseHost = function(t) {
            var e = s.exec(t);
            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }, t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(n(283)), r(n(106)), r(n(284))
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            t.setParent(e)
        }

        function o(t, e) {
            if (e)
                for (var n = 0; n < e.length; n++)
                    if (t.getJsonTypeName() === e[n]) return !1;
            return !0
        }

        function i(t, e) {
            if (!Z.supportsInteractivity && t.isInteractive) return !1;
            if (e)
                for (var n = 0; n < e.length; n++)
                    if (t.getJsonTypeName() === e[n]) return !1;
            return !0
        }

        function s(t) {
            null != $.onExecuteAction && (t.prepare(t.parent.getRootElement().getAllInputs()), $.onExecuteAction(t))
        }

        function a(t, e) {
            null != $.onInlineCardExpanded && $.onInlineCardExpanded(t, e)
        }

        function c(t) {
            null != $.onShowPopupCard && $.onShowPopupCard(t)
        }

        function u(t) {
            null != $.onParseError && $.onParseError(t)
        }

        function l(t) {
            Z = t
        }

        function p() {
            Z = K
        }
        var h = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = n(106),
            d = n(107),
            m = n(285),
            v = function() {
                function t() {
                    this._parent = null, this.horizontalAlignment = "left", this.separation = "default"
                }
                return t.prototype.internalGetNonZeroPadding = function(t, e) {
                    0 == e.top && (e.top = t.padding.top), 0 == e.right && (e.right = t.padding.right), 0 == e.bottom && (e.bottom = t.padding.bottom), 0 == e.left && (e.left = t.padding.left), t.parent && this.internalGetNonZeroPadding(t.parent, e)
                }, t.prototype.showBottomSpacer = function(t) {
                    this.parent && this.parent.showBottomSpacer(this)
                }, t.prototype.hideBottomSpacer = function(t) {
                    this.parent && this.parent.hideBottomSpacer(this)
                }, t.prototype.setParent = function(t) {
                    this._parent = t
                }, Object.defineProperty(t.prototype, "useDefaultSizing", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "padding", {
                    get: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getNonZeroPadding = function() {
                    var t = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    return this.internalGetNonZeroPadding(this, t), t
                }, t.prototype.getForbiddenElementTypes = function() {
                    return null
                }, t.prototype.getForbiddenActionTypes = function() {
                    return null
                }, t.prototype.parse = function(t) {
                    this.speak = t.speak, this.horizontalAlignment = d.getValueOrDefault(t.horizontalAlignment, "left"), this.separation = d.getValueOrDefault(t.separation, "default")
                }, t.prototype.validate = function() {
                    return []
                }, t.prototype.render = function() {
                    var t = this.internalRender();
                    return null != t && (t.style.boxSizing = "border-box"), t
                }, t.prototype.isLastItem = function(t) {
                    return !this.parent || this.parent.isLastItem(t)
                }, t.prototype.getRootElement = function() {
                    for (var t = this; t.parent;) t = t.parent;
                    return t
                }, t.prototype.getAllInputs = function() {
                    return []
                }, Object.defineProperty(t.prototype, "isInteractive", {
                    get: function() {
                        return !1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isStandalone", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        return this._parent
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
        e.CardElement = v;
        var y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.size = "normal", e.weight = "normal", e.isSubtle = !1, e.wrap = !1, e
            }
            return h(e, t), e.prototype.internalRender = function() {
                if (d.isNullOrEmpty(this.text)) return null;
                var t = document.createElement("div");
                switch (Z.fontFamily && (t.style.fontFamily = Z.fontFamily), this.horizontalAlignment) {
                    case "center":
                        t.style.textAlign = "center";
                        break;
                    case "right":
                        t.style.textAlign = "right";
                        break;
                    default:
                        t.style.textAlign = "left"
                }
                var e;
                switch (this.size) {
                    case "small":
                        e = Z.fontSizes.small;
                        break;
                    case "medium":
                        e = Z.fontSizes.medium;
                        break;
                    case "large":
                        e = Z.fontSizes.large;
                        break;
                    case "extraLarge":
                        e = Z.fontSizes.extraLarge;
                        break;
                    default:
                        e = Z.fontSizes.normal
                }
                var n = 1.33 * e;
                t.style.fontSize = e + "px", t.style.lineHeight = n + "px";
                var r, o = this.color ? this.color : Z.textBlock.color;
                switch (o) {
                    case "dark":
                        r = Z.colors.dark;
                        break;
                    case "light":
                        r = Z.colors.light;
                        break;
                    case "accent":
                        r = Z.colors.accent;
                        break;
                    case "good":
                        r = Z.colors.good;
                        break;
                    case "warning":
                        r = Z.colors.warning;
                        break;
                    case "attention":
                        r = Z.colors.attention;
                        break;
                    default:
                        r = Z.colors.dark
                }
                t.style.color = d.stringToCssColor(this.isSubtle ? r.subtle : r.normal);
                var i;
                switch (this.weight) {
                    case "lighter":
                        i = Z.fontWeights.lighter;
                        break;
                    case "bolder":
                        i = Z.fontWeights.bolder;
                        break;
                    default:
                        i = Z.fontWeights.normal
                }
                t.style.fontWeight = i.toString();
                var s = m.formatText(this.text);
                if (t.innerHTML = d.processMarkdown(s), t.firstElementChild instanceof HTMLElement) {
                    var a = t.firstElementChild;
                    a.style.marginTop = "0px", a.style.width = "100%", this.wrap || (a.style.overflow = "hidden", a.style.textOverflow = "ellipsis")
                }
                t.lastElementChild instanceof HTMLElement && (t.lastElementChild.style.marginBottom = "0px");
                for (var c = t.getElementsByTagName("a"), u = 0; u < c.length; u++) c[u].target = "_blank";
                return this.wrap ? (t.style.wordWrap = "break-word", this.maxLines > 0 && (t.style.maxHeight = n * this.maxLines + "px", t.style.overflow = "hidden")) : t.style.whiteSpace = "nowrap", t
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.text = e.text, this.size = d.getValueOrDefault(e.size, "normal"), this.weight = d.getValueOrDefault(e.weight, "normal"), this.color = d.getValueOrDefault(e.color, Z.textBlock.color), this.isSubtle = e.isSubtle, this.wrap = void 0 !== e.wrap && e.wrap, this.maxLines = e.maxLines
            }, e.prototype.getJsonTypeName = function() {
                return "TextBlock"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                switch (this.size) {
                    case "small":
                        return Z.textBlock.separations.small;
                    case "medium":
                        return Z.textBlock.separations.medium;
                    case "large":
                        return Z.textBlock.separations.large;
                    case "extraLarge":
                        return Z.textBlock.separations.extraLarge;
                    default:
                        return Z.textBlock.separations.normal
                }
            }, e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : this.text ? "<s>" + this.text + "</s>\n" : null
            }, e
        }(v);
        e.TextBlock = y;
        var g = function() {
            function t() {}
            return t.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : "<s>" + this.name + " " + this.value + "</s>\n"
            }, t
        }();
        e.Fact = g;
        var b = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.facts = [], e
            }
            return h(e, t), Object.defineProperty(e.prototype, "useDefaultSizing", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.internalRender = function() {
                var t = null;
                if (this.facts.length > 0) {
                    t = document.createElement("table"), t.style.borderWidth = "0px", t.style.borderSpacing = "0px", t.style.borderStyle = "none", t.style.borderCollapse = "collapse", t.style.display = "block", t.style.overflow = "hidden";
                    for (var e = 0; e < this.facts.length; e++) {
                        var n = document.createElement("tr");
                        e > 0 && (n.style.marginTop = Z.factSet.spacing + "px");
                        var r = document.createElement("td");
                        r.style.padding = "0", Z.factSet.title.maxWidth && (r.style.maxWidth = Z.factSet.title.maxWidth + "px"), r.style.verticalAlign = "top";
                        var o = new y;
                        o.text = this.facts[e].name, o.size = Z.factSet.title.size, o.color = Z.factSet.title.color, o.isSubtle = Z.factSet.title.isSubtle, o.weight = Z.factSet.title.weight, o.wrap = Z.factSet.title.wrap, o.separation = "none", d.appendChild(r, o.render()), d.appendChild(n, r), r = document.createElement("td"), r.style.padding = "0px 0px 0px 10px", r.style.verticalAlign = "top", o = new y, o.text = this.facts[e].value, o.size = Z.factSet.value.size, o.color = Z.factSet.value.color, o.isSubtle = Z.factSet.value.isSubtle, o.weight = Z.factSet.value.weight, o.wrap = Z.factSet.value.wrap, o.separation = "none", d.appendChild(r, o.render()), d.appendChild(n, r), d.appendChild(t, n)
                    }
                }
                return t
            }, e.prototype.getJsonTypeName = function() {
                return "FactSet"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.factSet.separation
            }, e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e), null != e.facts)
                    for (var n = e.facts, r = 0; r < n.length; r++) {
                        var o = new g;
                        o.name = n[r].title, o.value = n[r].value, o.speak = n[r].speak, this.facts.push(o)
                    }
            }, e.prototype.renderSpeech = function() {
                if (null != this.speak) return this.speak + "\n";
                var t = null;
                if (this.facts.length > 0) {
                    t = "";
                    for (var e = 0; e < this.facts.length; e++) {
                        var n = this.facts[e].renderSpeech();
                        n && (t += n)
                    }
                }
                return "<p>" + t + "\n</p>\n"
            }, e
        }(v);
        e.FactSet = b;
        var _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.style = "normal", e.size = "medium", e
            }
            return h(e, t), Object.defineProperty(e.prototype, "useDefaultSizing", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.internalRender = function() {
                var t = this,
                    e = null;
                if (!d.isNullOrEmpty(this.url)) {
                    switch (e = document.createElement("div"), e.classList.add("ac-image"), e.style.display = "flex", e.style.alignItems = "flex-start", null != this.selectAction && e.classList.add("ac-selectable"), e.onclick = function(e) {
                        t.selectAction && (t.selectAction.execute(), e.cancelBubble = !0)
                    }, this.horizontalAlignment) {
                        case "center":
                            e.style.justifyContent = "center";
                            break;
                        case "right":
                            e.style.justifyContent = "flex-end";
                            break;
                        default:
                            e.style.justifyContent = "flex-start"
                    }
                    var n = document.createElement("img");
                    switch (n.style.maxHeight = "100%", this.size) {
                        case "stretch":
                            n.style.width = "100%";
                            break;
                        case "auto":
                            n.style.maxWidth = "100%", n.style.maxHeight = "500px";
                            break;
                        case "small":
                            n.style.maxWidth = Z.imageSizes.small + "px";
                            break;
                        case "large":
                            n.style.maxWidth = Z.imageSizes.large + "px";
                            break;
                        case "medium":
                            n.style.maxWidth = Z.imageSizes.medium + "px"
                    }
                    "person" == this.style && (n.style.borderRadius = "50%", n.style.backgroundPosition = "50% 50%", n.style.backgroundRepeat = "no-repeat"), n.src = this.url, e.appendChild(n)
                }
                return e
            }, e.prototype.getJsonTypeName = function() {
                return "Image"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.image.separation
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.url = e.url, this.style = d.getValueOrDefault(e.style, "normal"), this.size = d.getValueOrDefault(e.size, "medium");
                var n = e.selectAction;
                void 0 != n && (this.selectAction = D.createAction(n), r(this.selectAction, this))
            }, e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak + "\n" : null
            }, e
        }(v);
        e.Image = _;
        var C = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._images = [], e.imageSize = "medium", e
            }
            return h(e, t), e.prototype.internalRender = function() {
                var t = null;
                if (this._images.length > 0) {
                    t = document.createElement("div"), t.style.display = "flex", t.style.flexWrap = "wrap";
                    for (var e = 0; e < this._images.length; e++) {
                        var n = this._images[e].render();
                        n.style.display = "inline-flex", n.style.margin = "0px", n.style.marginRight = "10px", n.style.height = "100px", d.appendChild(t, n)
                    }
                }
                return t
            }, e.prototype.getJsonTypeName = function() {
                return "ImageSet"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.imageSet.separation
            }, e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e), this.imageSize = d.getValueOrDefault(e.imageSize, "medium"), null != e.images)
                    for (var n = e.images, r = 0; r < n.length; r++) {
                        var o = new _;
                        o.parse(n[r]), o.size = this.imageSize, this.addImage(o)
                    }
            }, e.prototype.addImage = function(t) {
                if (t.parent) throw new Error("This image already belongs to another ImageSet");
                this._images.push(t), r(t, this)
            }, e.prototype.renderSpeech = function() {
                if (null != this.speak) return this.speak;
                var t = null;
                if (this._images.length > 0) {
                    t = "";
                    for (var e = 0; e < this._images.length; e++) t += this._images[e].renderSpeech()
                }
                return t
            }, e
        }(v);
        e.ImageSet = C;
        var w = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.getDefaultSeparationDefinition = function() {
                return Z.input.separation
            }, e.prototype.validate = function() {
                return this.id ? [] : [{
                    error: f.ValidationError.PropertyCantBeNull,
                    message: "All inputs must have a unique Id"
                }]
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.id = e.id, this.defaultValue = e.value
            }, e.prototype.renderSpeech = function() {
                return null != this.speak ? this.speak : this.title ? "<s>" + this.title + "</s>\n" : null
            }, e.prototype.getAllInputs = function() {
                return [this]
            }, Object.defineProperty(e.prototype, "isInteractive", {
                get: function() {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(v);
        e.Input = w;
        var x = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.internalRender = function() {
                return this.isMultiline ? (this._textareaElement = document.createElement("textarea"), this._textareaElement.className = "ac-input ac-textInput ac-multiline", this._textareaElement.style.width = "100%", d.isNullOrEmpty(this.placeholder) || (this._textareaElement.placeholder = this.placeholder), d.isNullOrEmpty(this.defaultValue) || (this._textareaElement.value = this.defaultValue), this.maxLength > 0 && (this._textareaElement.maxLength = this.maxLength), this._textareaElement) : (this._inputElement = document.createElement("input"), this._inputElement.type = "text", this._inputElement.className = "ac-input ac-textInput", this._inputElement.style.width = "100%", d.isNullOrEmpty(this.placeholder) || (this._inputElement.placeholder = this.placeholder), d.isNullOrEmpty(this.defaultValue) || (this._inputElement.value = this.defaultValue), this.maxLength > 0 && (this._inputElement.maxLength = this.maxLength), this._inputElement)
            }, e.prototype.getJsonTypeName = function() {
                return "Input.Text"
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.maxLength = e.maxLength, this.isMultiline = e.isMultiline, this.placeholder = e.placeholder
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this.isMultiline ? this._textareaElement ? this._textareaElement.value : null : this._inputElement ? this._inputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.TextInput = x;
        var k = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.internalRender = function() {
                var t = document.createElement("div");
                t.className = "ac-input", t.style.width = "100%", this._checkboxInputElement = document.createElement("input"), this._checkboxInputElement.type = "checkbox", this._checkboxInputElement.style.display = "inline-block", this._checkboxInputElement.style.verticalAlign = "middle", this._checkboxInputElement.style.margin = "0", this.defaultValue == this.valueOn && (this._checkboxInputElement.checked = !0);
                var e = new y;
                e.text = this.title;
                var n = e.render();
                n.style.display = "inline-block", n.style.marginLeft = "6px", n.style.verticalAlign = "middle";
                document.createElement("div");
                return d.appendChild(t, this._checkboxInputElement), d.appendChild(t, n), t
            }, e.prototype.getJsonTypeName = function() {
                return "Input.Toggle"
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.title = e.title, this.valueOn = e.valueOn, this.valueOff = e.valueOff
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._checkboxInputElement ? this._checkboxInputElement.checked ? this.valueOn : this.valueOff : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.ToggleInput = k;
        var S = function() {
            function t() {}
            return t
        }();
        e.Choice = S;
        var E = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.choices = [], e
            }
            return h(e, t), e.prototype.internalRender = function() {
                if (this.isMultiSelect) {
                    var t = this.defaultValue ? this.defaultValue.split(",") : null,
                        e = document.createElement("div");
                    e.className = "ac-input", e.style.width = "100%", this._toggleInputs = [];
                    for (var n = 0; n < this.choices.length; n++) {
                        var r = document.createElement("input");
                        r.type = "checkbox", r.style.margin = "0", r.style.display = "inline-block", r.style.verticalAlign = "middle", r.value = this.choices[n].value, t && t.indexOf(this.choices[n].value) >= 0 && (r.checked = !0), this._toggleInputs.push(r);
                        var o = new y;
                        o.text = this.choices[n].title;
                        var i = o.render();
                        i.style.display = "inline-block", i.style.marginLeft = "6px", i.style.verticalAlign = "middle";
                        var s = document.createElement("div");
                        d.appendChild(s, r), d.appendChild(s, i), d.appendChild(e, s)
                    }
                    return e
                }
                if (this.isCompact) {
                    this._selectElement = document.createElement("select"), this._selectElement.className = "ac-input ac-multichoiceInput", this._selectElement.style.width = "100%";
                    var a = document.createElement("option");
                    a.selected = !0, a.disabled = !0, a.hidden = !0, this.placeholder && (a.text = this.placeholder), d.appendChild(this._selectElement, a);
                    for (var n = 0; n < this.choices.length; n++) {
                        var a = document.createElement("option");
                        a.value = this.choices[n].value, a.text = this.choices[n].title, this.choices[n].value == this.defaultValue && (a.selected = !0), d.appendChild(this._selectElement, a)
                    }
                    return this._selectElement
                }
                var e = document.createElement("div");
                e.className = "ac-input", e.style.width = "100%", this._toggleInputs = [];
                for (var n = 0; n < this.choices.length; n++) {
                    var c = document.createElement("input");
                    c.type = "radio", c.style.margin = "0", c.style.display = "inline-block", c.style.verticalAlign = "middle", c.name = this.id, c.value = this.choices[n].value, this.choices[n].value == this.defaultValue && (c.checked = !0), this._toggleInputs.push(c);
                    var o = new y;
                    o.text = this.choices[n].title;
                    var i = o.render();
                    i.style.display = "inline-block", i.style.marginLeft = "6px", i.style.verticalAlign = "middle";
                    var s = document.createElement("div");
                    d.appendChild(s, c), d.appendChild(s, i), d.appendChild(e, s)
                }
                return e
            }, e.prototype.getJsonTypeName = function() {
                return "Input.ChoiceSet"
            }, e.prototype.validate = function() {
                var t = [];
                0 == this.choices.length && (t = [{
                    error: f.ValidationError.CollectionCantBeEmpty,
                    message: "An Input.ChoiceSet must have at least one choice defined."
                }]);
                for (var e = 0; e < this.choices.length; e++)
                    if (!this.choices[e].title || !this.choices[e].value) {
                        t = t.concat([{
                            error: f.ValidationError.PropertyCantBeNull,
                            message: "All choices in an Input.ChoiceSet must have their title and value properties set."
                        }]);
                        break
                    } return t
            }, e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e), this.isCompact = !("expanded" === e.style), this.isMultiSelect = e.isMultiSelect, this.placeholder = e.placeholder, void 0 != e.choices)
                    for (var n = e.choices, r = 0; r < n.length; r++) {
                        var o = new S;
                        o.title = n[r].title, o.value = n[r].value, this.choices.push(o)
                    }
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    if (this.isMultiSelect) {
                        if (!this._toggleInputs || 0 == this._toggleInputs.length) return null;
                        for (var t = "", e = 0; e < this._toggleInputs.length; e++) this._toggleInputs[e].checked && ("" != t && (t += ";"), t += this._toggleInputs[e].value);
                        return "" == t ? null : t
                    }
                    if (this.isCompact) return this._selectElement ? this._selectElement.value : null;
                    if (!this._toggleInputs || 0 == this._toggleInputs.length) return null;
                    for (var e = 0; e < this._toggleInputs.length; e++)
                        if (this._toggleInputs[e].checked) return this._toggleInputs[e].value;
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.ChoiceSetInput = E;
        var A = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.internalRender = function() {
                return this._numberInputElement = document.createElement("input"), this._numberInputElement.type = "number", this._numberInputElement.className = "ac-input ac-numberInput", this._numberInputElement.min = this.min, this._numberInputElement.max = this.max, this._numberInputElement.style.width = "100%", d.isNullOrEmpty(this.defaultValue) || (this._numberInputElement.value = this.defaultValue), this._numberInputElement
            }, e.prototype.getJsonTypeName = function() {
                return "Input.Number"
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.min = e.min, this.max = e.max
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._numberInputElement ? this._numberInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.NumberInput = A;
        var T = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.internalRender = function() {
                return this._dateInputElement = document.createElement("input"), this._dateInputElement.type = "date", this._dateInputElement.className = "ac-input ac-dateInput", this._dateInputElement.style.width = "100%", d.isNullOrEmpty(this.defaultValue) || (this._dateInputElement.value = this.defaultValue), this._dateInputElement
            }, e.prototype.getJsonTypeName = function() {
                return "Input.Date"
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._dateInputElement ? this._dateInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.DateInput = T;
        var O = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.internalRender = function() {
                return this._timeInputElement = document.createElement("input"), this._timeInputElement.type = "time", this._timeInputElement.className = "ac-input ac-timeInput", this._timeInputElement.style.width = "100%", d.isNullOrEmpty(this.defaultValue) || (this._timeInputElement.value = this.defaultValue), this._timeInputElement
            }, e.prototype.getJsonTypeName = function() {
                return "Input.Time"
            }, Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._timeInputElement ? this._timeInputElement.value : null
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(w);
        e.TimeInput = O;
        var P;
        ! function(t) {
            t[t.Normal = 0] = "Normal", t[t.Expanded = 1] = "Expanded", t[t.Subdued = 2] = "Subdued"
        }(P || (P = {}));
        var I = function() {
                function t(t, e) {
                    var n = this;
                    this._style = "button", this._element = null, this._state = P.Normal, this.onClick = null, this._action = t, this._style = e, this._element = document.createElement("button"), this._element.type = "button", this._element.style.overflow = "hidden", this._element.style.whiteSpace = "nowrap", this._element.style.textOverflow = "ellipsis", this._element.onclick = function(t) {
                        n.click()
                    }, this.updateCssStyle()
                }
                return t.prototype.click = function() {
                    null != this.onClick && this.onClick(this)
                }, t.prototype.updateCssStyle = function() {
                    switch (this._element.className = "link" == this._style ? "ac-linkButton" : "ac-pushButton", this._action instanceof F && this._element.classList.add("expandable"), this._state) {
                        case P.Expanded:
                            this._element.classList.add("expanded");
                            break;
                        case P.Subdued:
                            this._element.classList.add("subdued")
                    }
                }, Object.defineProperty(t.prototype, "action", {
                    get: function() {
                        return this._action
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "text", {
                    get: function() {
                        return this._text
                    },
                    set: function(t) {
                        this._text = t, this._element.innerText = this._text
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "element", {
                    get: function() {
                        return this._element
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "state", {
                    get: function() {
                        return this._state
                    },
                    set: function(t) {
                        this._state = t, this.updateCssStyle()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(),
            D = function() {
                function t() {
                    this._parent = null
                }
                return t.createAction = function(t) {
                    var e = t.type,
                        n = $.actionTypeRegistry.createInstance(e);
                    return n ? n.parse(t) : u({
                        error: f.ValidationError.UnknownActionType,
                        message: "Unknown action type: " + e
                    }), n
                }, t.prototype.setParent = function(t) {
                    this._parent = t
                }, t.prototype.validate = function() {
                    return []
                }, t.prototype.prepare = function(t) {}, t.prototype.parse = function(t) {
                    this.title = t.title
                }, t.prototype.getAllInputs = function() {
                    return []
                }, Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        return this._parent
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
        e.Action = D;
        var M = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.execute = function() {
                s(this)
            }, e
        }(D);
        e.ExternalAction = M;
        var N = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._isPrepared = !1, e
            }
            return h(e, t), e.prototype.getJsonTypeName = function() {
                return "Action.Submit"
            }, e.prototype.prepare = function(t) {
                this._originalData ? this._processedData = JSON.parse(JSON.stringify(this._originalData)) : this._processedData = {};
                for (var e = 0; e < t.length; e++) {
                    null != t[e].value && (this._processedData[t[e].id] = t[e].value)
                }
                this._isPrepared = !0
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.data = e.data
            }, Object.defineProperty(e.prototype, "data", {
                get: function() {
                    return this._isPrepared ? this._processedData : this._originalData
                },
                set: function(t) {
                    this._originalData = t, this._isPrepared = !1
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(M);
        e.SubmitAction = N;
        var R = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return h(e, t), e.prototype.getJsonTypeName = function() {
                return "Action.OpenUrl"
            }, e.prototype.validate = function() {
                return this.url ? [] : [{
                    error: f.ValidationError.PropertyCantBeNull,
                    message: "An Action.OpenUrl must have its url property set."
                }]
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.url = e.url
            }, e
        }(M);
        e.OpenUrlAction = R;
        var L = function() {
            function t() {
                this._value = new d.StringWithSubstitutions
            }
            return t.prototype.prepare = function(t) {
                this._value.substituteInputValues(t)
            }, Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value.get()
                },
                set: function(t) {
                    this._value.set(t)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
        e.HttpHeader = L;
        var j = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._url = new d.StringWithSubstitutions, e._body = new d.StringWithSubstitutions, e._headers = [], e
            }
            return h(e, t), e.prototype.getJsonTypeName = function() {
                return "Action.Http"
            }, e.prototype.validate = function() {
                var t = [];
                if (this.url || (t = [{
                        error: f.ValidationError.PropertyCantBeNull,
                        message: "An Action.Http must have its url property set."
                    }]), this.headers.length > 0)
                    for (var e = 0; e < this.headers.length; e++)
                        if (!this.headers[e].name || !this.headers[e].value) {
                            t = t.concat([{
                                error: f.ValidationError.PropertyCantBeNull,
                                message: "All headers of an Action.Http must have their name and value properties set."
                            }]);
                            break
                        } return t
            }, e.prototype.prepare = function(t) {
                this._url.substituteInputValues(t), this._body.substituteInputValues(t);
                for (var e = 0; e < this._headers.length; e++) this._headers[e].prepare(t)
            }, e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e), this.url = e.url, this.method = e.method, this.body = e.body, null != e.headers)
                    for (var n = e.headers, r = 0; r < n.length; r++) {
                        var o = new L;
                        o.name = n[r].name, o.value = n[r].value, this.headers.push(o)
                    }
            }, Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this._url.get()
                },
                set: function(t) {
                    this._url.set(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "body", {
                get: function() {
                    return this._body.get()
                },
                set: function(t) {
                    this._body.set(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "headers", {
                get: function() {
                    return this._headers
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(M);
        e.HttpAction = j;
        var F = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.card = new Y, e
            }
            return h(e, t), e.prototype.setParent = function(e) {
                t.prototype.setParent.call(this, e), r(this.card, e)
            }, e.prototype.execute = function() {
                c(this)
            }, e.prototype.getJsonTypeName = function() {
                return "Action.ShowCard"
            }, e.prototype.validate = function() {
                return this.card.validate()
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.card.parse(e.card)
            }, e.prototype.getAllInputs = function() {
                return this.card.getAllInputs()
            }, e
        }(D);
        e.ShowCardAction = F;
        var z = function() {
                function t(t) {
                    this._actionButtons = [], this._expandedAction = null, this._renderedActionCount = 0, this.items = [], this.actionStyle = "button", this.onHideActionCardPane = null, this.onShowActionCardPane = null, this._owner = t
                }
                return t.prototype.hideActionCardPane = function() {
                    this._actionCardContainer.innerHTML = "", this._actionCardContainer.style.padding = "0px", this._actionCardContainer.style.marginTop = "0px", this.onHideActionCardPane && this.onHideActionCardPane(), this._expandedAction && a(this._expandedAction, !1), this._expandedAction = null
                }, t.prototype.showActionCardPane = function(t) {
                    this.onShowActionCardPane && this.onShowActionCardPane(t);
                    var e = t.card.render();
                    if (this._actionCardContainer.innerHTML = "", this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? Z.actions.showCard.inlineTopMargin + "px" : "0px", "inlineEdgeToEdge" == Z.actions.showCard.actionMode) {
                        var n = this._owner.getNonZeroPadding();
                        this._actionCardContainer.style.paddingLeft = n.left + "px", this._actionCardContainer.style.paddingRight = n.right + "px", this._actionCardContainer.style.marginLeft = "-" + n.left + "px", this._actionCardContainer.style.marginRight = "-" + n.right + "px", e.style.paddingLeft = "0px", e.style.paddingRight = "0px"
                    }
                    d.appendChild(this._actionCardContainer, e), a(t, !0), this._expandedAction = t
                }, t.prototype.actionClicked = function(t) {
                    if (t.action instanceof F)
                        if ("popup" == Z.actions.showCard.actionMode) t.action.execute();
                        else if (t.action === this._expandedAction) {
                        for (var e = 0; e < this._actionButtons.length; e++) this._actionButtons[e].state = P.Normal;
                        this.hideActionCardPane()
                    } else {
                        for (var e = 0; e < this._actionButtons.length; e++) this._actionButtons[e] !== t && (this._actionButtons[e].state = P.Subdued);
                        t.state = P.Expanded, this.showActionCardPane(t.action)
                    } else {
                        for (var e = 0; e < this._actionButtons.length; e++) this._actionButtons[e].state = P.Normal;
                        this.hideActionCardPane(), t.action.execute()
                    }
                }, t.prototype.validate = function() {
                    var t = [];
                    Z.actions.maxActions && this.items.length > Z.actions.maxActions && t.push({
                        error: f.ValidationError.TooManyActions,
                        message: "A maximum of " + Z.actions.maxActions + " actions are allowed."
                    }), this.items.length > 0 && !Z.supportsInteractivity && t.push({
                        error: f.ValidationError.InteractivityNotAllowed,
                        message: "Interactivity is not allowed."
                    });
                    for (var e = 0; e < this.items.length; e++) o(this.items[e], this._owner.getForbiddenActionTypes()) || t.push({
                        error: f.ValidationError.ActionTypeNotAllowed,
                        message: "Actions of type " + this.items[e].getJsonTypeName() + " are not allowe."
                    });
                    for (var e = 0; e < this.items.length; e++) t = t.concat(this.items[e].validate());
                    return t
                }, t.prototype.render = function() {
                    var t = this;
                    if (!Z.supportsInteractivity) return null;
                    var e = document.createElement("div");
                    this._actionCardContainer = document.createElement("div"), this._actionCardContainer.style.backgroundColor = d.stringToCssColor(Z.actions.showCard.backgroundColor), this._renderedActionCount = 0;
                    var n = Z.actions.maxActions ? Math.min(Z.actions.maxActions, this.items.length) : this.items.length,
                        r = this._owner.getForbiddenActionTypes();
                    if (Z.actions.preExpandSingleShowCardAction && 1 == n && this.items[0] instanceof F && o(this.items[s], r)) this.showActionCardPane(this.items[0]), this._renderedActionCount = 1;
                    else {
                        var i = document.createElement("div");
                        if (i.style.display = "flex", "horizontal" == Z.actions.actionsOrientation) switch (i.style.flexDirection = "row", Z.actions.actionAlignment) {
                            case "center":
                                i.style.justifyContent = "center";
                                break;
                            case "right":
                                i.style.justifyContent = "flex-end";
                                break;
                            default:
                                i.style.justifyContent = "flex-start"
                        } else switch (i.style.flexDirection = "column", Z.actions.actionAlignment) {
                            case "center":
                                i.style.alignItems = "center";
                                break;
                            case "right":
                                i.style.alignItems = "flex-end";
                                break;
                            case "stretch":
                                i.style.alignItems = "stretch";
                                break;
                            default:
                                i.style.alignItems = "flex-start"
                        }
                        for (var s = 0; s < n; s++)
                            if (o(this.items[s], r)) {
                                var a = new I(this.items[s], this.actionStyle);
                                if (a.element.style.overflow = "hidden", a.element.style.overflow = "table-cell", a.element.style.flex = "stretch" == Z.actions.actionAlignment ? "0 1 100%" : "0 1 auto", a.text = this.items[s].title, a.onClick = function(e) {
                                        t.actionClicked(e)
                                    }, this._actionButtons.push(a), i.appendChild(a.element), s < this.items.length - 1 && Z.actions.buttonSpacing > 0) {
                                    var c = document.createElement("div");
                                    "horizontal" == Z.actions.actionsOrientation ? (c.style.flex = "0 0 auto", c.style.width = Z.actions.buttonSpacing + "px") : c.style.height = Z.actions.buttonSpacing + "px", d.appendChild(i, c)
                                }
                                this._renderedActionCount++
                            } var u = document.createElement("div");
                        u.style.overflow = "hidden", u.appendChild(i), d.appendChild(e, u)
                    }
                    return d.appendChild(e, this._actionCardContainer), this._renderedActionCount > 0 ? e : null
                }, t.prototype.addAction = function(t) {
                    if (t.parent) throw new Error("The action already belongs to another element.");
                    this.items.push(t), r(t, this._owner)
                }, t.prototype.clear = function() {
                    this.items = []
                }, t.prototype.getAllInputs = function() {
                    for (var t = [], e = 0; e < this.items.length; e++) {
                        var n = this.items[e];
                        t = t.concat(n.getAllInputs())
                    }
                    return t
                }, t
            }(),
            U = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.actionStyle = "button", e._actionCollection = new z(e), e._actionCollection.onHideActionCardPane = function() {
                        e.showBottomSpacer(e)
                    }, e._actionCollection.onShowActionCardPane = function(t) {
                        e.hideBottomSpacer(e)
                    }, e
                }
                return h(e, t), e.prototype.internalRender = function() {
                    return this._actionCollection.actionStyle = this.actionStyle, this._actionCollection.render()
                }, e.prototype.getJsonTypeName = function() {
                    return "ActionSet"
                }, e.prototype.getDefaultSeparationDefinition = function() {
                    return Z.actions.separation
                }, e.prototype.validate = function() {
                    return this._actionCollection.validate()
                }, e.prototype.parse = function(e, n) {
                    if (void 0 === n && (n = "items"), t.prototype.parse.call(this, e), this.actionStyle = d.getValueOrDefault(e.actionStyle, "button"), void 0 != e.actions)
                        for (var r = e.actions, o = 0; o < r.length; o++) this.addAction(D.createAction(r[o]))
                }, e.prototype.addAction = function(t) {
                    null != t && this._actionCollection.addAction(t)
                }, e.prototype.getAllInputs = function() {
                    return this._actionCollection.getAllInputs()
                }, e.prototype.renderSpeech = function() {
                    return ""
                }, Object.defineProperty(e.prototype, "isInteractive", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(v);
        e.ActionSet = U;
        var q = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._items = [], e
            }
            return h(e, t), e.prototype.showBottomSpacer = function(e) {
                e && !this.isLastItem(e) || "inlineEdgeToEdge" != Z.actions.showCard.actionMode || (this._element.style.paddingBottom = this.padding.bottom + "px", t.prototype.showBottomSpacer.call(this, this))
            }, e.prototype.hideBottomSpacer = function(e) {
                e && !this.isLastItem(e) || "inlineEdgeToEdge" != Z.actions.showCard.actionMode || (this._element.style.paddingBottom = "0px", t.prototype.hideBottomSpacer.call(this, this))
            }, e.prototype.internalRender = function() {
                var t = this;
                this._element = document.createElement("div"), this._element.className = "ac-container", this.backgroundImage && (this._element.style.backgroundImage = "url('" + this.backgroundImage + "')", this._element.style.backgroundRepeat = "no-repeat", this._element.style.backgroundSize = "cover");
                var e = this.getBackgroundColor();
                if (e && (this._element.style.backgroundColor = d.stringToCssColor(e)), this.selectAction && this._element.classList.add("ac-selectable"), this._element.style.paddingTop = this.padding.top + "px", this._element.style.paddingRight = this.padding.right + "px", this._element.style.paddingBottom = this.padding.bottom + "px", this._element.style.paddingLeft = this.padding.left + "px", this._element.onclick = function(e) {
                        null != t.selectAction && (t.selectAction.execute(), e.cancelBubble = !0)
                    }, this._items.length > 0)
                    for (var n = 0, r = 0; r < this._items.length; r++) {
                        var o = i(this._items[r], this.getForbiddenElementTypes()) ? this._items[r].render() : null;
                        if (null != o) {
                            if (n > 0 && "none" != this._items[r].separation) {
                                var s = "default" == this._items[r].separation ? this._items[r].getDefaultSeparationDefinition() : Z.strongSeparation;
                                d.appendChild(this._element, d.renderSeparation(s, "vertical"))
                            }
                            d.appendChild(this._element, o), n++
                        }
                    }
                return this._element
            }, e.prototype.getBackgroundColor = function() {
                return null
            }, Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    return {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isLastItem = function(t) {
                return this._items.indexOf(t) == this._items.length - 1
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.container.separation
            }, e.prototype.validate = function() {
                for (var t = [], e = 0; e < this._items.length; e++) !Z.supportsInteractivity && this._items[e].isInteractive && t.push({
                    error: f.ValidationError.InteractivityNotAllowed,
                    message: "Interactivity is not allowed."
                }), i(this._items[e], this.getForbiddenElementTypes()) || t.push({
                    error: f.ValidationError.InteractivityNotAllowed,
                    message: "Elements of type " + this._items[e].getJsonTypeName() + " are not allowed in this container."
                }), t = t.concat(this._items[e].validate());
                return t
            }, e.prototype.parse = function(e, n) {
                if (void 0 === n && (n = "items"), t.prototype.parse.call(this, e), this.backgroundImage = e.backgroundImage, null != e[n])
                    for (var o = e[n], i = 0; i < o.length; i++) {
                        var s = o[i].type,
                            a = $.elementTypeRegistry.createInstance(s);
                        a ? (this.addItem(a), a.parse(o[i])) : u({
                            error: f.ValidationError.UnknownElementType,
                            message: "Unknown element type: " + s
                        })
                    }
                var c = e.selectAction;
                void 0 != c && (this.selectAction = D.createAction(c), r(this.selectAction, this))
            }, e.prototype.addItem = function(t) {
                if (t.parent) throw new Error("The element already belongs to another container.");
                if (!t.isStandalone) throw new Error("Elements of type " + t.getJsonTypeName() + " cannot be used as standalone elements.");
                this._items.push(t), r(t, this)
            }, e.prototype.clear = function() {
                this._items = []
            }, e.prototype.getAllInputs = function() {
                for (var t = [], e = 0; e < this._items.length; e++) {
                    var n = this._items[e];
                    t = t.concat(n.getAllInputs())
                }
                return t
            }, e.prototype.renderSpeech = function() {
                if (null != this.speak) return this.speak;
                var t = null;
                if (this._items.length > 0) {
                    t = "";
                    for (var e = 0; e < this._items.length; e++) {
                        var n = this._items[e].renderSpeech();
                        n && (t += n)
                    }
                }
                return t
            }, e
        }(v);
        e.ContainerBase = q;
        var B = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.style = "normal", e
            }
            return h(e, t), e.prototype.getBackgroundColor = function() {
                return "normal" == this.style ? Z.container.normal.backgroundColor : Z.container.emphasis.backgroundColor
            }, e.prototype.internalRender = function() {
                var e = t.prototype.internalRender.call(this);
                if (e) {
                    var n = "normal" == this.style ? Z.container.normal : Z.container.emphasis;
                    n.borderThickness && (e.style.borderTop = n.borderThickness.top + "px solid", e.style.borderRight = n.borderThickness.right + "px solid", e.style.borderBottom = n.borderThickness.bottom + "px solid", e.style.borderLeft = n.borderThickness.left + "px solid"), n.borderColor && (e.style.borderColor = d.stringToCssColor(n.borderColor))
                }
                return e
            }, Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    var t = "normal" == this.style ? Z.container.normal : Z.container.emphasis;
                    return t.padding ? t.padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getJsonTypeName = function() {
                return "Container"
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e), this.style = d.getValueOrDefault(e.style, "normal")
            }, e
        }(q);
        e.Container = B;
        var V = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._computedWeight = 0, e.size = "auto", e
            }
            return h(e, t), Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    return {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.internalRender = function() {
                var e = t.prototype.internalRender.call(this);
                return e && (e.style.minWidth = "0", "number" == typeof this.size ? e.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.size) + "%" : "auto" === this.size ? e.style.flex = "0 1 auto" : e.style.flex = "1 1 auto"), e
            }, e.prototype.getJsonTypeName = function() {
                return "Column"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.column.separation
            }, e.prototype.parse = function(e) {
                t.prototype.parse.call(this, e);
                var n = e.size,
                    r = !1;
                if ("number" == typeof n) n <= 0 && (r = !0);
                else if ("string" == typeof n) {
                    if ("auto" != n && "stretch" != n) {
                        var o = parseInt(n);
                        isNaN(o) ? r = !0 : n = o
                    }
                } else n && (r = !0);
                r ? u({
                    error: f.ValidationError.InvalidPropertyValue,
                    message: "Invalid column size: " + n
                }) : this.size = n
            }, Object.defineProperty(e.prototype, "isStandalone", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(B);
        e.Column = V;
        var W = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._columns = [], e
            }
            return h(e, t), e.prototype.internalRender = function() {
                if (this._columns.length > 0) {
                    var t = document.createElement("div");
                    switch (t.style.display = "flex", t.style.overflow = "hidden", this.horizontalAlignment) {
                        case "center":
                            t.style.justifyContent = "center";
                            break;
                        case "right":
                            t.style.justifyContent = "flex-end";
                            break;
                        default:
                            t.style.justifyContent = "flex-start"
                    }
                    for (var e = 0, n = 0; n < this._columns.length; n++) "number" == typeof this._columns[n].size && (e += this._columns[n].size);
                    for (var r = 0, n = 0; n < this._columns.length; n++) {
                        if ("number" == typeof this._columns[n].size && e > 0) {
                            var o = 100 / e * this._columns[n].size;
                            this._columns[n]._computedWeight = o
                        }
                        var i = this._columns[n].render();
                        if (null != i) {
                            if (d.appendChild(t, i), this._columns.length > 1 && n < this._columns.length - 1 && "none" != this._columns[n + 1].separation) {
                                var s = "default" == this._columns[n + 1].separation ? this._columns[n + 1].getDefaultSeparationDefinition() : Z.strongSeparation;
                                if (s) {
                                    var a = d.renderSeparation(s, "horizontal");
                                    a.style.flex = "0 0 auto", d.appendChild(t, a)
                                }
                            }
                            r++
                        }
                    }
                    return r > 0 ? t : null
                }
                return null
            }, e.prototype.getJsonTypeName = function() {
                return "ColumnSet"
            }, e.prototype.getDefaultSeparationDefinition = function() {
                return Z.columnSet.separation
            }, e.prototype.parse = function(e) {
                if (t.prototype.parse.call(this, e), null != e.columns)
                    for (var n = e.columns, r = 0; r < n.length; r++) {
                        var o = new V;
                        o.parse(n[r]), this.addColumn(o)
                    }
            }, e.prototype.addColumn = function(t) {
                if (t.parent) throw new Error("This column already belongs to another ColumnSet.");
                this._columns.push(t), r(t, this)
            }, e.prototype.getAllInputs = function() {
                for (var t = [], e = 0; e < this._columns.length; e++) t = t.concat(this._columns[e].getAllInputs());
                return t
            }, e.prototype.renderSpeech = function() {
                if (null != this.speak) return this.speak;
                var t = "";
                if (this._columns.length > 0)
                    for (var e = 0; e < this._columns.length; e++) t += this._columns[e].renderSpeech();
                return t
            }, e
        }(v);
        e.ColumnSet = W;
        var H = function() {
            function t() {
                this._items = []
            }
            return t.prototype.findTypeRegistration = function(t) {
                for (var e = 0; e < this._items.length; e++)
                    if (this._items[e].typeName === t) return this._items[e];
                return null
            }, t.prototype.clear = function() {
                this._items = []
            }, t.prototype.registerType = function(t, e) {
                var n = this.findTypeRegistration(t);
                null != n ? n.createInstance = e : (n = {
                    typeName: t,
                    createInstance: e
                }, this._items.push(n))
            }, t.prototype.unregisterType = function(t) {
                for (var e = 0; e < this._items.length; e++)
                    if (this._items[e].typeName === t) return void(this._items = this._items.splice(e, 1))
            }, t.prototype.createInstance = function(t) {
                var e = this.findTypeRegistration(t);
                return e ? e.createInstance() : null
            }, t
        }();
        e.TypeRegistry = H;
        var G = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.actionStyle = "button", e._actionCollection = new z(e), e._actionCollection.onHideActionCardPane = function() {
                    e.showBottomSpacer(null)
                }, e._actionCollection.onShowActionCardPane = function(t) {
                    e.hideBottomSpacer(null)
                }, e
            }
            return h(e, t), e.prototype.internalRender = function() {
                t.prototype.internalRender.call(this), this._actionCollection.actionStyle = this.actionStyle;
                var e = this._actionCollection.render();
                return e && (d.appendChild(this._element, d.renderSeparation(Z.actions.separation, "vertical")), d.appendChild(this._element, e)), this._element.children.length > 0 ? this._element : null
            }, e.prototype.parse = function(e, n) {
                if (void 0 === n && (n = "items"), t.prototype.parse.call(this, e, n), this.actionStyle = d.getValueOrDefault(e.actionStyle, "button"), void 0 != e.actions)
                    for (var r = e.actions, o = 0; o < r.length; o++) {
                        var i = D.createAction(r[o]);
                        null != i && this.addAction(i)
                    }
            }, e.prototype.isLastItem = function(e) {
                return t.prototype.isLastItem.call(this, e) && 0 == this._actionCollection.items.length
            }, e.prototype.addAction = function(t) {
                this._actionCollection.addAction(t)
            }, e.prototype.clear = function() {
                t.prototype.clear.call(this), this._actionCollection.clear()
            }, e.prototype.getAllInputs = function() {
                return t.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs())
            }, Object.defineProperty(e.prototype, "isStandalone", {
                get: function() {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(q);
        e.ContainerWithActions = G;
        var $ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.minVersion = {
                    major: 1,
                    minor: 0
                }, e
            }
            return h(e, t), e.initialize = function() {
                e.elementTypeRegistry.clear(), e.elementTypeRegistry.registerType("Container", function() {
                    return new B
                }), e.elementTypeRegistry.registerType("TextBlock", function() {
                    return new y
                }), e.elementTypeRegistry.registerType("Image", function() {
                    return new _
                }), e.elementTypeRegistry.registerType("ImageSet", function() {
                    return new C
                }), e.elementTypeRegistry.registerType("FactSet", function() {
                    return new b
                }), e.elementTypeRegistry.registerType("ColumnSet", function() {
                    return new W
                }), e.elementTypeRegistry.registerType("ActionSet", function() {
                    return new U
                }), e.elementTypeRegistry.registerType("Input.Text", function() {
                    return new x
                }), e.elementTypeRegistry.registerType("Input.Date", function() {
                    return new T
                }), e.elementTypeRegistry.registerType("Input.Time", function() {
                    return new O
                }), e.elementTypeRegistry.registerType("Input.Number", function() {
                    return new A
                }), e.elementTypeRegistry.registerType("Input.ChoiceSet", function() {
                    return new E
                }), e.elementTypeRegistry.registerType("Input.Toggle", function() {
                    return new k
                }), e.actionTypeRegistry.clear(), e.actionTypeRegistry.registerType("Action.Http", function() {
                    return new j
                }), e.actionTypeRegistry.registerType("Action.OpenUrl", function() {
                    return new R
                }), e.actionTypeRegistry.registerType("Action.Submit", function() {
                    return new N
                }), e.actionTypeRegistry.registerType("Action.ShowCard", function() {
                    return new F
                })
            }, e.prototype.isVersionSupported = function() {
                return !(e.currentVersion.major < this.minVersion.major || e.currentVersion.major == this.minVersion.major && e.currentVersion.minor < this.minVersion.minor)
            }, e.prototype.getBackgroundColor = function() {
                return Z.adaptiveCard.backgroundColor
            }, Object.defineProperty(e.prototype, "padding", {
                get: function() {
                    return Z.adaptiveCard.padding
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getJsonTypeName = function() {
                return "AdaptiveCard"
            }, e.prototype.validate = function() {
                var e = [];
                return "AdaptiveCard" != this._cardTypeName && e.push({
                    error: f.ValidationError.MissingCardType,
                    message: 'Invalid or missing card type. Make sure the card\'s type property is set to "AdaptiveCard".'
                }), this.isVersionSupported() || e.push({
                    error: f.ValidationError.UnsupportedCardVersion,
                    message: "The specified card version is not supported."
                }), e.concat(t.prototype.validate.call(this))
            }, e.prototype.parse = function(e) {
                this._cardTypeName = e.type;
                var n = e.minVersion,
                    r = /(\d+).(\d+)/gi,
                    o = r.exec(n);
                null != o && 3 == o.length && (this.minVersion.major = parseInt(o[1]), this.minVersion.minor = parseInt(o[2])), this.fallbackText = e.fallbackText, t.prototype.parse.call(this, e, "body")
            }, e.prototype.render = function() {
                var e;
                return this.isVersionSupported() ? t.prototype.render.call(this) : (e = document.createElement("div"), e.innerHTML = this.fallbackText ? this.fallbackText : "The specified card version is not supported.", e)
            }, e.currentVersion = {
                major: 1,
                minor: 0
            }, e.elementTypeRegistry = new H, e.actionTypeRegistry = new H, e.onExecuteAction = null, e.onShowPopupCard = null, e.onInlineCardExpanded = null, e.onParseError = null, e
        }(G);
        e.AdaptiveCard = $, $.initialize();
        var Y = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return h(e, t), Object.defineProperty(e.prototype, "padding", {
                    get: function() {
                        return Z.actions.showCard.padding
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getBackgroundColor = function() {
                    return null
                }, e.prototype.getForbiddenActionTypes = function() {
                    return [F]
                }, e
            }($),
            K = {
                supportsInteractivity: !0,
                strongSeparation: {
                    spacing: 40,
                    lineThickness: 1,
                    lineColor: "#EEEEEE"
                },
                fontFamily: "Segoe UI",
                fontSizes: {
                    small: 8,
                    normal: 10,
                    medium: 12,
                    large: 14,
                    extraLarge: 16
                },
                fontWeights: {
                    lighter: 200,
                    normal: 400,
                    bolder: 600
                },
                colors: {
                    dark: {
                        normal: "#0000FF",
                        subtle: "#222222"
                    },
                    light: {
                        normal: "#FFFFFF",
                        subtle: "#DDDDDD"
                    },
                    accent: {
                        normal: "#0000FF",
                        subtle: "#0000DD"
                    },
                    attention: {
                        normal: "#FF6600",
                        subtle: "#DD4400"
                    },
                    good: {
                        normal: "#00FF00",
                        subtle: "#00DD00"
                    },
                    warning: {
                        normal: "#FF0000",
                        subtle: "#DD0000"
                    }
                },
                imageSizes: {
                    small: 40,
                    medium: 80,
                    large: 160
                },
                actions: {
                    maxActions: 5,
                    separation: {
                        spacing: 20
                    },
                    buttonSpacing: 20,
                    showCard: {
                        actionMode: "inlineEdgeToEdge",
                        inlineTopMargin: 16,
                        backgroundColor: "#22000000",
                        padding: {
                            top: 16,
                            right: 16,
                            bottom: 16,
                            left: 16
                        }
                    },
                    actionsOrientation: "horizontal",
                    actionAlignment: "left"
                },
                adaptiveCard: {
                    backgroundColor: "#00000000",
                    padding: {
                        left: 20,
                        top: 20,
                        right: 20,
                        bottom: 20
                    }
                },
                container: {
                    separation: {
                        spacing: 20
                    },
                    normal: {},
                    emphasis: {
                        backgroundColor: "#EEEEEE",
                        borderColor: "#AAAAAA",
                        borderThickness: {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1
                        },
                        padding: {
                            top: 10,
                            right: 10,
                            bottom: 10,
                            left: 10
                        }
                    }
                },
                textBlock: {
                    color: "dark",
                    separations: {
                        small: {
                            spacing: 20
                        },
                        normal: {
                            spacing: 20
                        },
                        medium: {
                            spacing: 20
                        },
                        large: {
                            spacing: 20
                        },
                        extraLarge: {
                            spacing: 20
                        }
                    }
                },
                image: {
                    size: "medium",
                    separation: {
                        spacing: 20
                    }
                },
                imageSet: {
                    imageSize: "medium",
                    separation: {
                        spacing: 20
                    }
                },
                factSet: {
                    separation: {
                        spacing: 20
                    },
                    title: {
                        color: "dark",
                        size: "normal",
                        isSubtle: !1,
                        weight: "bolder",
                        wrap: !0,
                        maxWidth: 150
                    },
                    value: {
                        color: "dark",
                        size: "normal",
                        isSubtle: !1,
                        weight: "normal",
                        wrap: !0
                    },
                    spacing: 10
                },
                input: {
                    separation: {
                        spacing: 20
                    }
                },
                columnSet: {
                    separation: {
                        spacing: 20
                    }
                },
                column: {
                    separation: {
                        spacing: 20
                    }
                }
            },
            Z = K;
        e.setHostConfig = l, e.resetHostConfig = p
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t ? {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left
            } : null
        }

        function o(t) {
            return t ? {
                normal: t.normal,
                subtle: t.subtle
            } : null
        }

        function i(t) {
            return t ? {
                spacing: t.spacing,
                lineThickness: t.lineThickness,
                lineColor: t.lineColor
            } : null
        }

        function s(t) {
            return t ? {
                backgroundColor: t.backgroundColor,
                padding: r(t.padding)
            } : null
        }

        function a(t) {
            return t ? {
                color: t.color,
                separations: {
                    small: i(t.separations.small),
                    normal: i(t.separations.normal),
                    medium: i(t.separations.medium),
                    large: i(t.separations.large),
                    extraLarge: i(t.separations.extraLarge)
                }
            } : null
        }

        function c(t) {
            return t ? {
                backgroundColor: t.backgroundColor,
                padding: r(t.padding),
                borderColor: t.borderColor,
                borderThickness: r(t.borderThickness)
            } : null
        }

        function u(t) {
            return t ? {
                separation: i(t.separation),
                normal: c(t.normal),
                emphasis: c(t.emphasis)
            } : null
        }

        function l(t) {
            return t ? {
                separation: i(t.separation),
                size: t.size
            } : null
        }

        function p(t) {
            return t ? {
                separation: i(t.separation),
                imageSize: t.imageSize
            } : null
        }

        function h(t) {
            return t ? {
                size: C.getValueOrDefault(t.size, "normal"),
                color: C.getValueOrDefault(t.color, "dark"),
                isSubtle: t.isSubtle,
                weight: C.getValueOrDefault(t.weight, "normal"),
                wrap: t.wrap
            } : null
        }

        function f(t) {
            var e = h(t);
            return e && (e.maxWidth = t.maxWidth), e
        }

        function d(t) {
            return t ? {
                separation: i(t.separation),
                title: f(t.title),
                value: h(t.value),
                spacing: t.spacing
            } : null
        }

        function m(t) {
            return t ? {
                separation: i(t.separation)
            } : null
        }

        function v(t) {
            return t ? {
                separation: i(t.separation)
            } : null
        }

        function y(t) {
            return t ? {
                actionMode: C.getValueOrDefault(t.actionMode, "inlineEdgeToEdge"),
                inlineTopMargin: t.inlineTopMargin,
                backgroundColor: t.backgroundColor,
                padding: r(t.padding)
            } : null
        }

        function g(t) {
            return t ? {
                maxActions: t.maxActions,
                separation: i(t.separation),
                buttonSpacing: t.buttonSpacing,
                showCard: y(t.showCard),
                preExpandSingleShowCardAction: C.getValueOrDefault(t.preExpandSingleShowCardAction, !1),
                actionsOrientation: C.getValueOrDefault(t.actionsOrientation, "horizontal"),
                actionAlignment: C.getValueOrDefault(t.actionAlignment, "left")
            } : null
        }

        function b(t) {
            return t ? {
                separation: i(t.separation)
            } : null
        }

        function _(t) {
            var e = JSON.parse(t);
            return e ? {
                supportsInteractivity: e.supportsInteractivity,
                fontFamily: e.fontFamily,
                fontSizes: {
                    small: e.fontSizes.small,
                    normal: e.fontSizes.normal,
                    medium: e.fontSizes.medium,
                    large: e.fontSizes.large,
                    extraLarge: e.fontSizes.extraLarge
                },
                fontWeights: {
                    lighter: e.fontWeights.lighter,
                    normal: e.fontWeights.normal,
                    bolder: e.fontWeights.bolder
                },
                imageSizes: {
                    small: e.imageSizes.small,
                    medium: e.imageSizes.medium,
                    large: e.imageSizes.large
                },
                colors: {
                    dark: o(e.colors.dark),
                    light: o(e.colors.light),
                    accent: o(e.colors.accent),
                    good: o(e.colors.good),
                    warning: o(e.colors.warning),
                    attention: o(e.colors.attention)
                },
                strongSeparation: i(e.strongSeparation),
                actions: g(e.actions),
                adaptiveCard: s(e.adaptiveCard),
                container: u(e.container),
                textBlock: a(e.textBlock),
                image: l(e.image),
                imageSet: p(e.imageSet),
                factSet: d(e.factSet),
                column: v(e.column),
                columnSet: m(e.columnSet),
                input: b(e.input)
            } : null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var C = n(107);
        e.parseHostConfig = _
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = [new s(/\{{2}date\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:z|Z|-\d{1,2}))(?:,(long|short))?\)\}{2}/gi), new a(/\{{2}time\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:z|Z|-\d{1,2}))\)\}{2}/gi)], n = t, r = 0; r < e.length; r++) n = e[r].format(n);
            return n
        }
        var o = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t) {
                    this._regularExpression = t
                }
                return t.prototype.format = function(t) {
                    for (var e, n = t; null != (e = this._regularExpression.exec(t));) n = n.replace(e[0], this.internalFormat(e));
                    return n
                }, t
            }(),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.internalFormat = function(t) {
                    var e = new Date(Date.parse(t[1]));
                    if (void 0 != t[2]) {
                        var n = t[2].toLowerCase();
                        return e.toLocaleDateString(void 0, {
                            day: "numeric",
                            weekday: n,
                            month: n,
                            year: "numeric"
                        })
                    }
                    return e.toLocaleDateString()
                }, e
            }(i),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.internalFormat = function(t) {
                    return new Date(Date.parse(t[1])).toLocaleTimeString()
                }, e
            }(i);
        e.formatText = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r, o) {}
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = n(1),
            i = n(111);
        t.exports = function() {
            function t(t, e, n, r, s, a) {
                a !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function e() {
                return t
            }
            t.isRequired = t;
            var n = {
                array: t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = n(1),
            i = n(3),
            s = n(111),
            a = n(286);
        t.exports = function(t, e) {
            function n(t) {
                var e = t && (k && t[k] || t[S]);
                if ("function" == typeof e) return e
            }

            function c(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e
            }

            function u(t) {
                this.message = t, this.stack = ""
            }

            function l(t) {
                function n(n, r, i, a, c, l, p) {
                    if (a = a || E, l = l || i, p !== s)
                        if (e) o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        else;
                    return null == r[i] ? n ? new u(null === r[i] ? "The " + c + " `" + l + "` is marked as required in `" + a + "`, but its value is `null`." : "The " + c + " `" + l + "` is marked as required in `" + a + "`, but its value is `undefined`.") : null : t(r, i, a, c, l)
                }
                var r = n.bind(null, !1);
                return r.isRequired = n.bind(null, !0), r
            }

            function p(t) {
                function e(e, n, r, o, i, s) {
                    var a = e[n];
                    if (_(a) !== t) return new u("Invalid " + o + " `" + i + "` of type `" + C(a) + "` supplied to `" + r + "`, expected `" + t + "`.");
                    return null
                }
                return l(e)
            }

            function h(t) {
                function e(e, n, r, o, i) {
                    if ("function" != typeof t) return new u("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var a = e[n];
                    if (!Array.isArray(a)) {
                        return new u("Invalid " + o + " `" + i + "` of type `" + _(a) + "` supplied to `" + r + "`, expected an array.")
                    }
                    for (var c = 0; c < a.length; c++) {
                        var l = t(a, c, r, o, i + "[" + c + "]", s);
                        if (l instanceof Error) return l
                    }
                    return null
                }
                return l(e)
            }

            function f(t) {
                function e(e, n, r, o, i) {
                    if (!(e[n] instanceof t)) {
                        var s = t.name || E;
                        return new u("Invalid " + o + " `" + i + "` of type `" + x(e[n]) + "` supplied to `" + r + "`, expected instance of `" + s + "`.")
                    }
                    return null
                }
                return l(e)
            }

            function d(t) {
                function e(e, n, r, o, i) {
                    for (var s = e[n], a = 0; a < t.length; a++)
                        if (c(s, t[a])) return null;
                    return new u("Invalid " + o + " `" + i + "` of value `" + s + "` supplied to `" + r + "`, expected one of " + JSON.stringify(t) + ".")
                }
                return Array.isArray(t) ? l(e) : r.thatReturnsNull
            }

            function m(t) {
                function e(e, n, r, o, i) {
                    if ("function" != typeof t) return new u("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var a = e[n],
                        c = _(a);
                    if ("object" !== c) return new u("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected an object.");
                    for (var l in a)
                        if (a.hasOwnProperty(l)) {
                            var p = t(a, l, r, o, i + "." + l, s);
                            if (p instanceof Error) return p
                        } return null
                }
                return l(e)
            }

            function v(t) {
                function e(e, n, r, o, i) {
                    for (var a = 0; a < t.length; a++) {
                        if (null == (0, t[a])(e, n, r, o, i, s)) return null
                    }
                    return new u("Invalid " + o + " `" + i + "` supplied to `" + r + "`.")
                }
                if (!Array.isArray(t)) return r.thatReturnsNull;
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    if ("function" != typeof o) return i(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", w(o), n), r.thatReturnsNull
                }
                return l(e)
            }

            function y(t) {
                function e(e, n, r, o, i) {
                    var a = e[n],
                        c = _(a);
                    if ("object" !== c) return new u("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                    for (var l in t) {
                        var p = t[l];
                        if (p) {
                            var h = p(a, l, r, o, i + "." + l, s);
                            if (h) return h
                        }
                    }
                    return null
                }
                return l(e)
            }

            function g(e) {
                switch (typeof e) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !e;
                    case "object":
                        if (Array.isArray(e)) return e.every(g);
                        if (null === e || t(e)) return !0;
                        var r = n(e);
                        if (!r) return !1;
                        var o, i = r.call(e);
                        if (r !== e.entries) {
                            for (; !(o = i.next()).done;)
                                if (!g(o.value)) return !1
                        } else
                            for (; !(o = i.next()).done;) {
                                var s = o.value;
                                if (s && !g(s[1])) return !1
                            }
                        return !0;
                    default:
                        return !1
                }
            }

            function b(t, e) {
                return "symbol" === t || ("Symbol" === e["@@toStringTag"] || "function" == typeof Symbol && e instanceof Symbol)
            }

            function _(t) {
                var e = typeof t;
                return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : b(e, t) ? "symbol" : e
            }

            function C(t) {
                if (void 0 === t || null === t) return "" + t;
                var e = _(t);
                if ("object" === e) {
                    if (t instanceof Date) return "date";
                    if (t instanceof RegExp) return "regexp"
                }
                return e
            }

            function w(t) {
                var e = C(t);
                switch (e) {
                    case "array":
                    case "object":
                        return "an " + e;
                    case "boolean":
                    case "date":
                    case "regexp":
                        return "a " + e;
                    default:
                        return e
                }
            }

            function x(t) {
                return t.constructor && t.constructor.name ? t.constructor.name : E
            }
            var k = "function" == typeof Symbol && Symbol.iterator,
                S = "@@iterator",
                E = "<<anonymous>>",
                A = {
                    array: p("array"),
                    bool: p("boolean"),
                    func: p("function"),
                    number: p("number"),
                    object: p("object"),
                    string: p("string"),
                    symbol: p("symbol"),
                    any: function() {
                        return l(r.thatReturnsNull)
                    }(),
                    arrayOf: h,
                    element: function() {
                        function e(e, n, r, o, i) {
                            var s = e[n];
                            if (!t(s)) {
                                return new u("Invalid " + o + " `" + i + "` of type `" + _(s) + "` supplied to `" + r + "`, expected a single ReactElement.")
                            }
                            return null
                        }
                        return l(e)
                    }(),
                    instanceOf: f,
                    node: function() {
                        function t(t, e, n, r, o) {
                            return g(t[e]) ? null : new u("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.")
                        }
                        return l(t)
                    }(),
                    objectOf: m,
                    oneOf: d,
                    oneOfType: v,
                    shape: y
                };
            return u.prototype = Error.prototype, A.checkPropTypes = a, A.PropTypes = A, A
        }
    }, function(t, e, n) {
        (function(t, r) {
            var o;
            ! function(i) {
                function s(t) {
                    throw new RangeError(D[t])
                }

                function a(t, e) {
                    for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                    return r
                }

                function c(t, e) {
                    var n = t.split("@"),
                        r = "";
                    return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(I, "."), r + a(t.split("."), e).join(".")
                }

                function u(t) {
                    for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
                    return r
                }

                function l(t) {
                    return a(t, function(t) {
                        var e = "";
                        return t > 65535 && (t -= 65536, e += R(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += R(t)
                    }).join("")
                }

                function p(t) {
                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : C
                }

                function h(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }

                function f(t, e, n) {
                    var r = 0;
                    for (t = n ? N(t / S) : t >> 1, t += N(t / e); t > M * x >> 1; r += C) t = N(t / M);
                    return N(r + (M + 1) * t / (t + k))
                }

                function d(t) {
                    var e, n, r, o, i, a, c, u, h, d, m = [],
                        v = t.length,
                        y = 0,
                        g = A,
                        b = E;
                    for (n = t.lastIndexOf(T), n < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && s("not-basic"), m.push(t.charCodeAt(r));
                    for (o = n > 0 ? n + 1 : 0; o < v;) {
                        for (i = y, a = 1, c = C; o >= v && s("invalid-input"), u = p(t.charCodeAt(o++)), (u >= C || u > N((_ - y) / a)) && s("overflow"), y += u * a, h = c <= b ? w : c >= b + x ? x : c - b, !(u < h); c += C) d = C - h, a > N(_ / d) && s("overflow"), a *= d;
                        e = m.length + 1, b = f(y - i, e, 0 == i), N(y / e) > _ - g && s("overflow"), g += N(y / e), y %= e, m.splice(y++, 0, g)
                    }
                    return l(m)
                }

                function m(t) {
                    var e, n, r, o, i, a, c, l, p, d, m, v, y, g, b, k = [];
                    for (t = u(t), v = t.length, e = A, n = 0, i = E, a = 0; a < v; ++a)(m = t[a]) < 128 && k.push(R(m));
                    for (r = o = k.length, o && k.push(T); r < v;) {
                        for (c = _, a = 0; a < v; ++a)(m = t[a]) >= e && m < c && (c = m);
                        for (y = r + 1, c - e > N((_ - n) / y) && s("overflow"), n += (c - e) * y, e = c, a = 0; a < v; ++a)
                            if (m = t[a], m < e && ++n > _ && s("overflow"), m == e) {
                                for (l = n, p = C; d = p <= i ? w : p >= i + x ? x : p - i, !(l < d); p += C) b = l - d, g = C - d, k.push(R(h(d + b % g, 0))), l = N(b / g);
                                k.push(R(h(l, 0))), i = f(n, y, r == o), n = 0, ++r
                            }++ n, ++e
                    }
                    return k.join("")
                }

                function v(t) {
                    return c(t, function(t) {
                        return O.test(t) ? d(t.slice(4).toLowerCase()) : t
                    })
                }

                function y(t) {
                    return c(t, function(t) {
                        return P.test(t) ? "xn--" + m(t) : t
                    })
                }
                var g = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r);
                var b, _ = 2147483647,
                    C = 36,
                    w = 1,
                    x = 26,
                    k = 38,
                    S = 700,
                    E = 72,
                    A = 128,
                    T = "-",
                    O = /^xn--/,
                    P = /[^\x20-\x7E]/,
                    I = /[\x2E\u3002\uFF0E\uFF61]/g,
                    D = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    M = C - w,
                    N = Math.floor,
                    R = String.fromCharCode;
                b = {
                    version: "1.4.1",
                    ucs2: {
                        decode: u,
                        encode: l
                    },
                    decode: d,
                    encode: m,
                    toASCII: y,
                    toUnicode: v
                }, void 0 !== (o = function() {
                    return b
                }.call(e, n, e, t)) && (t.exports = o)
            }()
        }).call(e, n(171)(t), n(38))
    }, function(t, e, n) {
        "use strict";
        t.exports = n(304)
    }, function(t, e, n) {
        "use strict";
        var r = {
            Properties: {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0
            },
            DOMAttributeNames: {},
            DOMPropertyNames: {}
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(6),
            o = n(97),
            i = {
                focusDOMComponent: function() {
                    o(r.getNodeFromInstance(this))
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (t.ctrlKey || t.altKey || t.metaKey) && !(t.ctrlKey && t.altKey)
        }

        function o(t) {
            switch (t) {
                case "topCompositionStart":
                    return S.compositionStart;
                case "topCompositionEnd":
                    return S.compositionEnd;
                case "topCompositionUpdate":
                    return S.compositionUpdate
            }
        }

        function i(t, e) {
            return "topKeyDown" === t && e.keyCode === g
        }

        function s(t, e) {
            switch (t) {
                case "topKeyUp":
                    return -1 !== y.indexOf(e.keyCode);
                case "topKeyDown":
                    return e.keyCode !== g;
                case "topKeyPress":
                case "topMouseDown":
                case "topBlur":
                    return !0;
                default:
                    return !1
            }
        }

        function a(t) {
            var e = t.detail;
            return "object" == typeof e && "data" in e ? e.data : null
        }

        function c(t, e, n, r) {
            var c, u;
            if (b ? c = o(t) : A ? s(t, n) && (c = S.compositionEnd) : i(t, n) && (c = S.compositionStart), !c) return null;
            w && (A || c !== S.compositionStart ? c === S.compositionEnd && A && (u = A.getData()) : A = d.getPooled(r));
            var l = m.getPooled(c, e, n, r);
            if (u) l.data = u;
            else {
                var p = a(n);
                null !== p && (l.data = p)
            }
            return h.accumulateTwoPhaseDispatches(l), l
        }

        function u(t, e) {
            switch (t) {
                case "topCompositionEnd":
                    return a(e);
                case "topKeyPress":
                    return e.which !== x ? null : (E = !0, k);
                case "topTextInput":
                    var n = e.data;
                    return n === k && E ? null : n;
                default:
                    return null
            }
        }

        function l(t, e) {
            if (A) {
                if ("topCompositionEnd" === t || !b && s(t, e)) {
                    var n = A.getData();
                    return d.release(A), A = null, n
                }
                return null
            }
            switch (t) {
                case "topPaste":
                    return null;
                case "topKeyPress":
                    return e.which && !r(e) ? String.fromCharCode(e.which) : null;
                case "topCompositionEnd":
                    return w ? null : e.data;
                default:
                    return null
            }
        }

        function p(t, e, n, r) {
            var o;
            if (!(o = C ? u(t, n) : l(t, n))) return null;
            var i = v.getPooled(S.beforeInput, e, n, r);
            return i.data = o, h.accumulateTwoPhaseDispatches(i), i
        }
        var h = n(33),
            f = n(7),
            d = n(299),
            m = n(336),
            v = n(339),
            y = [9, 13, 27, 32],
            g = 229,
            b = f.canUseDOM && "CompositionEvent" in window,
            _ = null;
        f.canUseDOM && "documentMode" in document && (_ = document.documentMode);
        var C = f.canUseDOM && "TextEvent" in window && !_ && ! function() {
                var t = window.opera;
                return "object" == typeof t && "function" == typeof t.version && parseInt(t.version(), 10) <= 12
            }(),
            w = f.canUseDOM && (!b || _ && _ > 8 && _ <= 11),
            x = 32,
            k = String.fromCharCode(x),
            S = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                }
            },
            E = !1,
            A = null,
            T = {
                eventTypes: S,
                extractEvents: function(t, e, n, r) {
                    return [c(t, e, n, r), p(t, e, n, r)]
                }
            };
        t.exports = T
    }, function(t, e, n) {
        "use strict";
        var r = n(112),
            o = n(7),
            i = (n(12), n(211), n(345)),
            s = n(218),
            a = n(221),
            c = (n(3), a(function(t) {
                return s(t)
            })),
            u = !1,
            l = "cssFloat";
        if (o.canUseDOM) {
            var p = document.createElement("div").style;
            try {
                p.font = ""
            } catch (t) {
                u = !0
            }
            void 0 === document.documentElement.style.cssFloat && (l = "styleFloat")
        }
        var h = {
            createMarkupForStyles: function(t, e) {
                var n = "";
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var o = 0 === r.indexOf("--"),
                            s = t[r];
                        null != s && (n += c(r) + ":", n += i(r, s, e, o) + ";")
                    } return n || null
            },
            setValueForStyles: function(t, e, n) {
                var o = t.style;
                for (var s in e)
                    if (e.hasOwnProperty(s)) {
                        var a = 0 === s.indexOf("--"),
                            c = i(s, e[s], n, a);
                        if ("float" !== s && "cssFloat" !== s || (s = l), a) o.setProperty(s, c);
                        else if (c) o[s] = c;
                        else {
                            var p = u && r.shorthandPropertyExpansions[s];
                            if (p)
                                for (var h in p) o[h] = "";
                            else o[s] = ""
                        }
                    }
            }
        };
        t.exports = h
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r = E.getPooled(I.change, t, e, n);
            return r.type = "change", w.accumulateTwoPhaseDispatches(r), r
        }

        function o(t) {
            var e = t.nodeName && t.nodeName.toLowerCase();
            return "select" === e || "input" === e && "file" === t.type
        }

        function i(t) {
            var e = r(M, t, T(t));
            S.batchedUpdates(s, e)
        }

        function s(t) {
            C.enqueueEvents(t), C.processEventQueue(!1)
        }

        function a(t, e) {
            D = t, M = e, D.attachEvent("onchange", i)
        }

        function c() {
            D && (D.detachEvent("onchange", i), D = null, M = null)
        }

        function u(t, e) {
            var n = A.updateValueIfChanged(t),
                r = !0 === e.simulated && L._allowSimulatedPassThrough;
            if (n || r) return t
        }

        function l(t, e) {
            if ("topChange" === t) return e
        }

        function p(t, e, n) {
            "topFocus" === t ? (c(), a(e, n)) : "topBlur" === t && c()
        }

        function h(t, e) {
            D = t, M = e, D.attachEvent("onpropertychange", d)
        }

        function f() {
            D && (D.detachEvent("onpropertychange", d), D = null, M = null)
        }

        function d(t) {
            "value" === t.propertyName && u(M, t) && i(t)
        }

        function m(t, e, n) {
            "topFocus" === t ? (f(), h(e, n)) : "topBlur" === t && f()
        }

        function v(t, e, n) {
            if ("topSelectionChange" === t || "topKeyUp" === t || "topKeyDown" === t) return u(M, n)
        }

        function y(t) {
            var e = t.nodeName;
            return e && "input" === e.toLowerCase() && ("checkbox" === t.type || "radio" === t.type)
        }

        function g(t, e, n) {
            if ("topClick" === t) return u(e, n)
        }

        function b(t, e, n) {
            if ("topInput" === t || "topChange" === t) return u(e, n)
        }

        function _(t, e) {
            if (null != t) {
                var n = t._wrapperState || e._wrapperState;
                if (n && n.controlled && "number" === e.type) {
                    var r = "" + e.value;
                    e.getAttribute("value") !== r && e.setAttribute("value", r)
                }
            }
        }
        var C = n(32),
            w = n(33),
            x = n(7),
            k = n(6),
            S = n(13),
            E = n(14),
            A = n(128),
            T = n(74),
            O = n(75),
            P = n(130),
            I = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: "onChange",
                        captured: "onChangeCapture"
                    },
                    dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
                }
            },
            D = null,
            M = null,
            N = !1;
        x.canUseDOM && (N = O("change") && (!document.documentMode || document.documentMode > 8));
        var R = !1;
        x.canUseDOM && (R = O("input") && (!("documentMode" in document) || document.documentMode > 9));
        var L = {
            eventTypes: I,
            _allowSimulatedPassThrough: !0,
            _isInputEventSupported: R,
            extractEvents: function(t, e, n, i) {
                var s, a, c = e ? k.getNodeFromInstance(e) : window;
                if (o(c) ? N ? s = l : a = p : P(c) ? R ? s = b : (s = v, a = m) : y(c) && (s = g), s) {
                    var u = s(t, e, n);
                    if (u) {
                        return r(u, n, i)
                    }
                }
                a && a(t, c, e), "topBlur" === t && _(e, c)
            }
        };
        t.exports = L
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(22),
            i = n(7),
            s = n(214),
            a = n(10),
            c = (n(1), {
                dangerouslyReplaceNodeWithMarkup: function(t, e) {
                    if (i.canUseDOM || r("56"), e || r("57"), "HTML" === t.nodeName && r("58"), "string" == typeof e) {
                        var n = s(e, a)[0];
                        t.parentNode.replaceChild(n, t)
                    } else o.replaceChildWithTree(t, e)
                }
            });
        t.exports = c
    }, function(t, e, n) {
        "use strict";
        var r = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(33),
            o = n(6),
            i = n(44),
            s = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["topMouseOut", "topMouseOver"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["topMouseOut", "topMouseOver"]
                }
            },
            a = {
                eventTypes: s,
                extractEvents: function(t, e, n, a) {
                    if ("topMouseOver" === t && (n.relatedTarget || n.fromElement)) return null;
                    if ("topMouseOut" !== t && "topMouseOver" !== t) return null;
                    var c;
                    if (a.window === a) c = a;
                    else {
                        var u = a.ownerDocument;
                        c = u ? u.defaultView || u.parentWindow : window
                    }
                    var l, p;
                    if ("topMouseOut" === t) {
                        l = e;
                        var h = n.relatedTarget || n.toElement;
                        p = h ? o.getClosestInstanceFromNode(h) : null
                    } else l = null, p = e;
                    if (l === p) return null;
                    var f = null == l ? c : o.getNodeFromInstance(l),
                        d = null == p ? c : o.getNodeFromInstance(p),
                        m = i.getPooled(s.mouseLeave, l, n, a);
                    m.type = "mouseleave", m.target = f, m.relatedTarget = d;
                    var v = i.getPooled(s.mouseEnter, p, n, a);
                    return v.type = "mouseenter", v.target = d, v.relatedTarget = f, r.accumulateEnterLeaveDispatches(m, v, l, p), [m, v]
                }
            };
        t.exports = a
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this._root = t, this._startText = this.getText(), this._fallbackText = null
        }
        var o = n(5),
            i = n(17),
            s = n(127);
        o(r.prototype, {
            destructor: function() {
                this._root = null, this._startText = null, this._fallbackText = null
            },
            getText: function() {
                return "value" in this._root ? this._root.value : this._root[s()]
            },
            getData: function() {
                if (this._fallbackText) return this._fallbackText;
                var t, e, n = this._startText,
                    r = n.length,
                    o = this.getText(),
                    i = o.length;
                for (t = 0; t < r && n[t] === o[t]; t++);
                var s = r - t;
                for (e = 1; e <= s && n[r - e] === o[i - e]; e++);
                var a = e > 1 ? 1 - e : void 0;
                return this._fallbackText = o.slice(t, a), this._fallbackText
            }
        }), i.addPoolingTo(r), t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = r.injection.MUST_USE_PROPERTY,
            i = r.injection.HAS_BOOLEAN_VALUE,
            s = r.injection.HAS_NUMERIC_VALUE,
            a = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
            c = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
            u = {
                isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$")),
                Properties: {
                    accept: 0,
                    acceptCharset: 0,
                    accessKey: 0,
                    action: 0,
                    allowFullScreen: i,
                    allowTransparency: 0,
                    alt: 0,
                    as: 0,
                    async: i,
                    autoComplete: 0,
                    autoPlay: i,
                    capture: i,
                    cellPadding: 0,
                    cellSpacing: 0,
                    charSet: 0,
                    challenge: 0,
                    checked: o | i,
                    cite: 0,
                    classID: 0,
                    className: 0,
                    cols: a,
                    colSpan: 0,
                    content: 0,
                    contentEditable: 0,
                    contextMenu: 0,
                    controls: i,
                    coords: 0,
                    crossOrigin: 0,
                    data: 0,
                    dateTime: 0,
                    default: i,
                    defer: i,
                    dir: 0,
                    disabled: i,
                    download: c,
                    draggable: 0,
                    encType: 0,
                    form: 0,
                    formAction: 0,
                    formEncType: 0,
                    formMethod: 0,
                    formNoValidate: i,
                    formTarget: 0,
                    frameBorder: 0,
                    headers: 0,
                    height: 0,
                    hidden: i,
                    high: 0,
                    href: 0,
                    hrefLang: 0,
                    htmlFor: 0,
                    httpEquiv: 0,
                    icon: 0,
                    id: 0,
                    inputMode: 0,
                    integrity: 0,
                    is: 0,
                    keyParams: 0,
                    keyType: 0,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: i,
                    low: 0,
                    manifest: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    max: 0,
                    maxLength: 0,
                    media: 0,
                    mediaGroup: 0,
                    method: 0,
                    min: 0,
                    minLength: 0,
                    multiple: o | i,
                    muted: o | i,
                    name: 0,
                    nonce: 0,
                    noValidate: i,
                    open: i,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: i,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 0,
                    readOnly: i,
                    referrerPolicy: 0,
                    rel: 0,
                    required: i,
                    reversed: i,
                    role: 0,
                    rows: a,
                    rowSpan: s,
                    sandbox: 0,
                    scope: 0,
                    scoped: i,
                    scrolling: 0,
                    seamless: i,
                    selected: o | i,
                    shape: 0,
                    size: a,
                    sizes: 0,
                    span: a,
                    spellCheck: 0,
                    src: 0,
                    srcDoc: 0,
                    srcLang: 0,
                    srcSet: 0,
                    start: s,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 0,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 0,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    datatype: 0,
                    inlist: 0,
                    prefix: 0,
                    property: 0,
                    resource: 0,
                    typeof: 0,
                    vocab: 0,
                    autoCapitalize: 0,
                    autoCorrect: 0,
                    autoSave: 0,
                    color: 0,
                    itemProp: 0,
                    itemScope: i,
                    itemType: 0,
                    itemID: 0,
                    itemRef: 0,
                    results: 0,
                    security: 0,
                    unselectable: 0
                },
                DOMAttributeNames: {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                },
                DOMPropertyNames: {},
                DOMMutationMethods: {
                    value: function(t, e) {
                        if (null == e) return t.removeAttribute("value");
                        "number" !== t.type || !1 === t.hasAttribute("value") ? t.setAttribute("value", "" + e) : t.validity && !t.validity.badInput && t.ownerDocument.activeElement !== t && t.setAttribute("value", "" + e)
                    }
                }
            };
        t.exports = u
    }, function(t, e, n) {
        "use strict";
        (function(e) {
            function r(t, e, n, r) {
                var o = void 0 === t[n];
                null != e && o && (t[n] = i(e, !0))
            }
            var o = n(24),
                i = n(129),
                s = (n(66), n(76)),
                a = n(132);
            n(3);
            void 0 !== e && n.i({
                NODE_ENV: "production"
            });
            var c = {
                instantiateChildren: function(t, e, n, o) {
                    if (null == t) return null;
                    var i = {};
                    return a(t, r, i), i
                },
                updateChildren: function(t, e, n, r, a, c, u, l, p) {
                    if (e || t) {
                        var h, f;
                        for (h in e)
                            if (e.hasOwnProperty(h)) {
                                f = t && t[h];
                                var d = f && f._currentElement,
                                    m = e[h];
                                if (null != f && s(d, m)) o.receiveComponent(f, m, a, l), e[h] = f;
                                else {
                                    f && (r[h] = o.getHostNode(f), o.unmountComponent(f, !1));
                                    var v = i(m, !0);
                                    e[h] = v;
                                    var y = o.mountComponent(v, a, c, u, l, p);
                                    n.push(y)
                                }
                            } for (h in t) !t.hasOwnProperty(h) || e && e.hasOwnProperty(h) || (f = t[h], r[h] = o.getHostNode(f), o.unmountComponent(f, !1))
                    }
                },
                unmountChildren: function(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var r = t[n];
                            o.unmountComponent(r, e)
                        }
                }
            };
            t.exports = c
        }).call(e, n(108))
    }, function(t, e, n) {
        "use strict";
        var r = n(62),
            o = n(309),
            i = {
                processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
                replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {}

        function o(t) {
            return !(!t.prototype || !t.prototype.isReactComponent)
        }

        function i(t) {
            return !(!t.prototype || !t.prototype.isPureReactComponent)
        }
        var s = n(4),
            a = n(5),
            c = n(25),
            u = n(68),
            l = n(15),
            p = n(69),
            h = n(34),
            f = (n(12), n(122)),
            d = n(24),
            m = n(42),
            v = (n(1), n(58)),
            y = n(76),
            g = (n(3), {
                ImpureClass: 0,
                PureClass: 1,
                StatelessFunctional: 2
            });
        r.prototype.render = function() {
            var t = h.get(this)._currentElement.type,
                e = t(this.props, this.context, this.updater);
            return e
        };
        var b = 1,
            _ = {
                construct: function(t) {
                    this._currentElement = t, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
                },
                mountComponent: function(t, e, n, a) {
                    this._context = a, this._mountOrder = b++, this._hostParent = e, this._hostContainerInfo = n;
                    var u, l = this._currentElement.props,
                        p = this._processContext(a),
                        f = this._currentElement.type,
                        d = t.getUpdateQueue(),
                        v = o(f),
                        y = this._constructComponent(v, l, p, d);
                    v || null != y && null != y.render ? i(f) ? this._compositeType = g.PureClass : this._compositeType = g.ImpureClass : (u = y, null === y || !1 === y || c.isValidElement(y) || s("105", f.displayName || f.name || "Component"), y = new r(f), this._compositeType = g.StatelessFunctional);
                    y.props = l, y.context = p, y.refs = m, y.updater = d, this._instance = y, h.set(y, this);
                    var _ = y.state;
                    void 0 === _ && (y.state = _ = null), ("object" != typeof _ || Array.isArray(_)) && s("106", this.getName() || "ReactCompositeComponent"), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                    var C;
                    return C = y.unstable_handleError ? this.performInitialMountWithErrorHandling(u, e, n, t, a) : this.performInitialMount(u, e, n, t, a), y.componentDidMount && t.getReactMountReady().enqueue(y.componentDidMount, y), C
                },
                _constructComponent: function(t, e, n, r) {
                    return this._constructComponentWithoutOwner(t, e, n, r)
                },
                _constructComponentWithoutOwner: function(t, e, n, r) {
                    var o = this._currentElement.type;
                    return t ? new o(e, n, r) : o(e, n, r)
                },
                performInitialMountWithErrorHandling: function(t, e, n, r, o) {
                    var i, s = r.checkpoint();
                    try {
                        i = this.performInitialMount(t, e, n, r, o)
                    } catch (a) {
                        r.rollback(s), this._instance.unstable_handleError(a), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), s = r.checkpoint(), this._renderedComponent.unmountComponent(!0), r.rollback(s), i = this.performInitialMount(t, e, n, r, o)
                    }
                    return i
                },
                performInitialMount: function(t, e, n, r, o) {
                    var i = this._instance,
                        s = 0;
                    i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === t && (t = this._renderValidatedComponent());
                    var a = f.getType(t);
                    this._renderedNodeType = a;
                    var c = this._instantiateReactComponent(t, a !== f.EMPTY);
                    this._renderedComponent = c;
                    var u = d.mountComponent(c, r, e, n, this._processChildContext(o), s);
                    return u
                },
                getHostNode: function() {
                    return d.getHostNode(this._renderedComponent)
                },
                unmountComponent: function(t) {
                    if (this._renderedComponent) {
                        var e = this._instance;
                        if (e.componentWillUnmount && !e._calledComponentWillUnmount)
                            if (e._calledComponentWillUnmount = !0, t) {
                                var n = this.getName() + ".componentWillUnmount()";
                                p.invokeGuardedCallback(n, e.componentWillUnmount.bind(e))
                            } else e.componentWillUnmount();
                        this._renderedComponent && (d.unmountComponent(this._renderedComponent, t), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, h.remove(e)
                    }
                },
                _maskContext: function(t) {
                    var e = this._currentElement.type,
                        n = e.contextTypes;
                    if (!n) return m;
                    var r = {};
                    for (var o in n) r[o] = t[o];
                    return r
                },
                _processContext: function(t) {
                    var e = this._maskContext(t);
                    return e
                },
                _processChildContext: function(t) {
                    var e, n = this._currentElement.type,
                        r = this._instance;
                    if (r.getChildContext && (e = r.getChildContext()), e) {
                        "object" != typeof n.childContextTypes && s("107", this.getName() || "ReactCompositeComponent");
                        for (var o in e) o in n.childContextTypes || s("108", this.getName() || "ReactCompositeComponent", o);
                        return a({}, t, e)
                    }
                    return t
                },
                _checkContextTypes: function(t, e, n) {},
                receiveComponent: function(t, e, n) {
                    var r = this._currentElement,
                        o = this._context;
                    this._pendingElement = null, this.updateComponent(e, r, t, o, n)
                },
                performUpdateIfNecessary: function(t) {
                    null != this._pendingElement ? d.receiveComponent(this, this._pendingElement, t, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(t, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
                },
                updateComponent: function(t, e, n, r, o) {
                    var i = this._instance;
                    null == i && s("136", this.getName() || "ReactCompositeComponent");
                    var a, c = !1;
                    this._context === o ? a = i.context : (a = this._processContext(o), c = !0);
                    var u = e.props,
                        l = n.props;
                    e !== n && (c = !0), c && i.componentWillReceiveProps && i.componentWillReceiveProps(l, a);
                    var p = this._processPendingState(l, a),
                        h = !0;
                    this._pendingForceUpdate || (i.shouldComponentUpdate ? h = i.shouldComponentUpdate(l, p, a) : this._compositeType === g.PureClass && (h = !v(u, l) || !v(i.state, p))), this._updateBatchNumber = null, h ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, l, p, a, t, o)) : (this._currentElement = n, this._context = o, i.props = l, i.state = p, i.context = a)
                },
                _processPendingState: function(t, e) {
                    var n = this._instance,
                        r = this._pendingStateQueue,
                        o = this._pendingReplaceState;
                    if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                    if (o && 1 === r.length) return r[0];
                    for (var i = a({}, o ? r[0] : n.state), s = o ? 1 : 0; s < r.length; s++) {
                        var c = r[s];
                        a(i, "function" == typeof c ? c.call(n, i, t, e) : c)
                    }
                    return i
                },
                _performComponentUpdate: function(t, e, n, r, o, i) {
                    var s, a, c, u = this._instance,
                        l = Boolean(u.componentDidUpdate);
                    l && (s = u.props, a = u.state, c = u.context), u.componentWillUpdate && u.componentWillUpdate(e, n, r), this._currentElement = t, this._context = i, u.props = e, u.state = n, u.context = r, this._updateRenderedComponent(o, i), l && o.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, s, a, c), u)
                },
                _updateRenderedComponent: function(t, e) {
                    var n = this._renderedComponent,
                        r = n._currentElement,
                        o = this._renderValidatedComponent(),
                        i = 0;
                    if (y(r, o)) d.receiveComponent(n, o, t, this._processChildContext(e));
                    else {
                        var s = d.getHostNode(n);
                        d.unmountComponent(n, !1);
                        var a = f.getType(o);
                        this._renderedNodeType = a;
                        var c = this._instantiateReactComponent(o, a !== f.EMPTY);
                        this._renderedComponent = c;
                        var u = d.mountComponent(c, t, this._hostParent, this._hostContainerInfo, this._processChildContext(e), i);
                        this._replaceNodeWithMarkup(s, u, n)
                    }
                },
                _replaceNodeWithMarkup: function(t, e, n) {
                    u.replaceNodeWithMarkup(t, e, n)
                },
                _renderValidatedComponentWithoutOwnerOrContext: function() {
                    var t = this._instance;
                    return t.render()
                },
                _renderValidatedComponent: function() {
                    var t;
                    if (this._compositeType !== g.StatelessFunctional) {
                        l.current = this;
                        try {
                            t = this._renderValidatedComponentWithoutOwnerOrContext()
                        } finally {
                            l.current = null
                        }
                    } else t = this._renderValidatedComponentWithoutOwnerOrContext();
                    return null === t || !1 === t || c.isValidElement(t) || s("109", this.getName() || "ReactCompositeComponent"), t
                },
                attachRef: function(t, e) {
                    var n = this.getPublicInstance();
                    null == n && s("110");
                    var r = e.getPublicInstance();
                    (n.refs === m ? n.refs = {} : n.refs)[t] = r
                },
                detachRef: function(t) {
                    delete this.getPublicInstance().refs[t]
                },
                getName: function() {
                    var t = this._currentElement.type,
                        e = this._instance && this._instance.constructor;
                    return t.displayName || e && e.displayName || t.name || e && e.name || null
                },
                getPublicInstance: function() {
                    var t = this._instance;
                    return this._compositeType === g.StatelessFunctional ? null : t
                },
                _instantiateReactComponent: null
            };
        t.exports = _
    }, function(t, e, n) {
        "use strict";
        var r = n(6),
            o = n(317),
            i = n(121),
            s = n(24),
            a = n(13),
            c = n(330),
            u = n(346),
            l = n(126),
            p = n(353);
        n(3);
        o.inject();
        var h = {
            findDOMNode: u,
            render: i.render,
            unmountComponentAtNode: i.unmountComponentAtNode,
            version: c,
            unstable_batchedUpdates: a.batchedUpdates,
            unstable_renderSubtreeIntoContainer: p
        };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            ComponentTree: {
                getClosestInstanceFromNode: r.getClosestInstanceFromNode,
                getNodeFromInstance: function(t) {
                    return t._renderedComponent && (t = l(t)), t ? r.getNodeFromInstance(t) : null
                }
            },
            Mount: i,
            Reconciler: s
        });
        t.exports = h
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (t) {
                var e = t._currentElement._owner || null;
                if (e) {
                    var n = e.getName();
                    if (n) return " This DOM node was rendered by `" + n + "`."
                }
            }
            return ""
        }

        function o(t, e) {
            e && (K[t._tag] && (null != e.children || null != e.dangerouslySetInnerHTML) && v("137", t._tag, t._currentElement._owner ? " Check the render method of " + t._currentElement._owner.getName() + "." : ""), null != e.dangerouslySetInnerHTML && (null != e.children && v("60"), "object" == typeof e.dangerouslySetInnerHTML && V in e.dangerouslySetInnerHTML || v("61")), null != e.style && "object" != typeof e.style && v("62", r(t)))
        }

        function i(t, e, n, r) {
            if (!(r instanceof N)) {
                var o = t._hostContainerInfo,
                    i = o._node && o._node.nodeType === H,
                    a = i ? o._node : o._ownerDocument;
                U(e, a), r.getReactMountReady().enqueue(s, {
                    inst: t,
                    registrationName: e,
                    listener: n
                })
            }
        }

        function s() {
            var t = this;
            k.putListener(t.inst, t.registrationName, t.listener)
        }

        function a() {
            var t = this;
            O.postMountWrapper(t)
        }

        function c() {
            var t = this;
            D.postMountWrapper(t)
        }

        function u() {
            var t = this;
            P.postMountWrapper(t)
        }

        function l() {
            L.track(this)
        }

        function p() {
            var t = this;
            t._rootNodeID || v("63");
            var e = z(t);
            switch (e || v("64"), t._tag) {
                case "iframe":
                case "object":
                    t._wrapperState.listeners = [E.trapBubbledEvent("topLoad", "load", e)];
                    break;
                case "video":
                case "audio":
                    t._wrapperState.listeners = [];
                    for (var n in G) G.hasOwnProperty(n) && t._wrapperState.listeners.push(E.trapBubbledEvent(n, G[n], e));
                    break;
                case "source":
                    t._wrapperState.listeners = [E.trapBubbledEvent("topError", "error", e)];
                    break;
                case "img":
                    t._wrapperState.listeners = [E.trapBubbledEvent("topError", "error", e), E.trapBubbledEvent("topLoad", "load", e)];
                    break;
                case "form":
                    t._wrapperState.listeners = [E.trapBubbledEvent("topReset", "reset", e), E.trapBubbledEvent("topSubmit", "submit", e)];
                    break;
                case "input":
                case "select":
                case "textarea":
                    t._wrapperState.listeners = [E.trapBubbledEvent("topInvalid", "invalid", e)]
            }
        }

        function h() {
            I.postUpdateWrapper(this)
        }

        function f(t) {
            J.call(X, t) || (Z.test(t) || v("65", t), X[t] = !0)
        }

        function d(t, e) {
            return t.indexOf("-") >= 0 || null != e.is
        }

        function m(t) {
            var e = t.type;
            f(e), this._currentElement = t, this._tag = e.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
        }
        var v = n(4),
            y = n(5),
            g = n(292),
            b = n(294),
            _ = n(22),
            C = n(63),
            w = n(23),
            x = n(114),
            k = n(32),
            S = n(64),
            E = n(43),
            A = n(115),
            T = n(6),
            O = n(310),
            P = n(311),
            I = n(116),
            D = n(314),
            M = (n(12), n(323)),
            N = n(328),
            R = (n(10), n(46)),
            L = (n(1), n(75), n(58), n(128)),
            j = (n(77), n(3), A),
            F = k.deleteListener,
            z = T.getNodeFromInstance,
            U = E.listenTo,
            q = S.registrationNameModules,
            B = {
                string: !0,
                number: !0
            },
            V = "__html",
            W = {
                children: null,
                dangerouslySetInnerHTML: null,
                suppressContentEditableWarning: null
            },
            H = 11,
            G = {
                topAbort: "abort",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTimeUpdate: "timeupdate",
                topVolumeChange: "volumechange",
                topWaiting: "waiting"
            },
            $ = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            Y = {
                listing: !0,
                pre: !0,
                textarea: !0
            },
            K = y({
                menuitem: !0
            }, $),
            Z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            X = {},
            J = {}.hasOwnProperty,
            Q = 1;
        m.displayName = "ReactDOMComponent", m.Mixin = {
            mountComponent: function(t, e, n, r) {
                this._rootNodeID = Q++, this._domID = n._idCounter++, this._hostParent = e, this._hostContainerInfo = n;
                var i = this._currentElement.props;
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        this._wrapperState = {
                            listeners: null
                        }, t.getReactMountReady().enqueue(p, this);
                        break;
                    case "input":
                        O.mountWrapper(this, i, e), i = O.getHostProps(this, i), t.getReactMountReady().enqueue(l, this), t.getReactMountReady().enqueue(p, this);
                        break;
                    case "option":
                        P.mountWrapper(this, i, e), i = P.getHostProps(this, i);
                        break;
                    case "select":
                        I.mountWrapper(this, i, e), i = I.getHostProps(this, i), t.getReactMountReady().enqueue(p, this);
                        break;
                    case "textarea":
                        D.mountWrapper(this, i, e), i = D.getHostProps(this, i), t.getReactMountReady().enqueue(l, this), t.getReactMountReady().enqueue(p, this)
                }
                o(this, i);
                var s, h;
                null != e ? (s = e._namespaceURI, h = e._tag) : n._tag && (s = n._namespaceURI, h = n._tag), (null == s || s === C.svg && "foreignobject" === h) && (s = C.html), s === C.html && ("svg" === this._tag ? s = C.svg : "math" === this._tag && (s = C.mathml)), this._namespaceURI = s;
                var f;
                if (t.useCreateElement) {
                    var d, m = n._ownerDocument;
                    if (s === C.html)
                        if ("script" === this._tag) {
                            var v = m.createElement("div"),
                                y = this._currentElement.type;
                            v.innerHTML = "<" + y + "></" + y + ">", d = v.removeChild(v.firstChild)
                        } else d = i.is ? m.createElement(this._currentElement.type, i.is) : m.createElement(this._currentElement.type);
                    else d = m.createElementNS(s, this._currentElement.type);
                    T.precacheNode(this, d), this._flags |= j.hasCachedChildNodes, this._hostParent || x.setAttributeForRoot(d), this._updateDOMProperties(null, i, t);
                    var b = _(d);
                    this._createInitialChildren(t, i, r, b), f = b
                } else {
                    var w = this._createOpenTagMarkupAndPutListeners(t, i),
                        k = this._createContentMarkup(t, i, r);
                    f = !k && $[this._tag] ? w + "/>" : w + ">" + k + "</" + this._currentElement.type + ">"
                }
                switch (this._tag) {
                    case "input":
                        t.getReactMountReady().enqueue(a, this), i.autoFocus && t.getReactMountReady().enqueue(g.focusDOMComponent, this);
                        break;
                    case "textarea":
                        t.getReactMountReady().enqueue(c, this), i.autoFocus && t.getReactMountReady().enqueue(g.focusDOMComponent, this);
                        break;
                    case "select":
                    case "button":
                        i.autoFocus && t.getReactMountReady().enqueue(g.focusDOMComponent, this);
                        break;
                    case "option":
                        t.getReactMountReady().enqueue(u, this)
                }
                return f
            },
            _createOpenTagMarkupAndPutListeners: function(t, e) {
                var n = "<" + this._currentElement.type;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var o = e[r];
                        if (null != o)
                            if (q.hasOwnProperty(r)) o && i(this, r, o, t);
                            else {
                                "style" === r && (o && (o = this._previousStyleCopy = y({}, e.style)), o = b.createMarkupForStyles(o, this));
                                var s = null;
                                null != this._tag && d(this._tag, e) ? W.hasOwnProperty(r) || (s = x.createMarkupForCustomAttribute(r, o)) : s = x.createMarkupForProperty(r, o), s && (n += " " + s)
                            }
                    } return t.renderToStaticMarkup ? n : (this._hostParent || (n += " " + x.createMarkupForRoot()), n += " " + x.createMarkupForID(this._domID))
            },
            _createContentMarkup: function(t, e, n) {
                var r = "",
                    o = e.dangerouslySetInnerHTML;
                if (null != o) null != o.__html && (r = o.__html);
                else {
                    var i = B[typeof e.children] ? e.children : null,
                        s = null != i ? null : e.children;
                    if (null != i) r = R(i);
                    else if (null != s) {
                        var a = this.mountChildren(s, t, n);
                        r = a.join("")
                    }
                }
                return Y[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r
            },
            _createInitialChildren: function(t, e, n, r) {
                var o = e.dangerouslySetInnerHTML;
                if (null != o) null != o.__html && _.queueHTML(r, o.__html);
                else {
                    var i = B[typeof e.children] ? e.children : null,
                        s = null != i ? null : e.children;
                    if (null != i) "" !== i && _.queueText(r, i);
                    else if (null != s)
                        for (var a = this.mountChildren(s, t, n), c = 0; c < a.length; c++) _.queueChild(r, a[c])
                }
            },
            receiveComponent: function(t, e, n) {
                var r = this._currentElement;
                this._currentElement = t, this.updateComponent(e, r, t, n)
            },
            updateComponent: function(t, e, n, r) {
                var i = e.props,
                    s = this._currentElement.props;
                switch (this._tag) {
                    case "input":
                        i = O.getHostProps(this, i), s = O.getHostProps(this, s);
                        break;
                    case "option":
                        i = P.getHostProps(this, i), s = P.getHostProps(this, s);
                        break;
                    case "select":
                        i = I.getHostProps(this, i), s = I.getHostProps(this, s);
                        break;
                    case "textarea":
                        i = D.getHostProps(this, i), s = D.getHostProps(this, s)
                }
                switch (o(this, s), this._updateDOMProperties(i, s, t), this._updateDOMChildren(i, s, t, r), this._tag) {
                    case "input":
                        O.updateWrapper(this);
                        break;
                    case "textarea":
                        D.updateWrapper(this);
                        break;
                    case "select":
                        t.getReactMountReady().enqueue(h, this)
                }
            },
            _updateDOMProperties: function(t, e, n) {
                var r, o, s;
                for (r in t)
                    if (!e.hasOwnProperty(r) && t.hasOwnProperty(r) && null != t[r])
                        if ("style" === r) {
                            var a = this._previousStyleCopy;
                            for (o in a) a.hasOwnProperty(o) && (s = s || {}, s[o] = "");
                            this._previousStyleCopy = null
                        } else q.hasOwnProperty(r) ? t[r] && F(this, r) : d(this._tag, t) ? W.hasOwnProperty(r) || x.deleteValueForAttribute(z(this), r) : (w.properties[r] || w.isCustomAttribute(r)) && x.deleteValueForProperty(z(this), r);
                for (r in e) {
                    var c = e[r],
                        u = "style" === r ? this._previousStyleCopy : null != t ? t[r] : void 0;
                    if (e.hasOwnProperty(r) && c !== u && (null != c || null != u))
                        if ("style" === r)
                            if (c ? c = this._previousStyleCopy = y({}, c) : this._previousStyleCopy = null, u) {
                                for (o in u) !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (s = s || {}, s[o] = "");
                                for (o in c) c.hasOwnProperty(o) && u[o] !== c[o] && (s = s || {}, s[o] = c[o])
                            } else s = c;
                    else if (q.hasOwnProperty(r)) c ? i(this, r, c, n) : u && F(this, r);
                    else if (d(this._tag, e)) W.hasOwnProperty(r) || x.setValueForAttribute(z(this), r, c);
                    else if (w.properties[r] || w.isCustomAttribute(r)) {
                        var l = z(this);
                        null != c ? x.setValueForProperty(l, r, c) : x.deleteValueForProperty(l, r)
                    }
                }
                s && b.setValueForStyles(z(this), s, this)
            },
            _updateDOMChildren: function(t, e, n, r) {
                var o = B[typeof t.children] ? t.children : null,
                    i = B[typeof e.children] ? e.children : null,
                    s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                    a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                    c = null != o ? null : t.children,
                    u = null != i ? null : e.children,
                    l = null != o || null != s,
                    p = null != i || null != a;
                null != c && null == u ? this.updateChildren(null, n, r) : l && !p && this.updateTextContent(""), null != i ? o !== i && this.updateTextContent("" + i) : null != a ? s !== a && this.updateMarkup("" + a) : null != u && this.updateChildren(u, n, r)
            },
            getHostNode: function() {
                return z(this)
            },
            unmountComponent: function(t) {
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        var e = this._wrapperState.listeners;
                        if (e)
                            for (var n = 0; n < e.length; n++) e[n].remove();
                        break;
                    case "input":
                    case "textarea":
                        L.stopTracking(this);
                        break;
                    case "html":
                    case "head":
                    case "body":
                        v("66", this._tag)
                }
                this.unmountChildren(t), T.uncacheNode(this), k.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
            },
            getPublicInstance: function() {
                return z(this)
            }
        }, y(m.prototype, m.Mixin, M.Mixin), t.exports = m
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = {
                _topLevelWrapper: t,
                _idCounter: 1,
                _ownerDocument: e ? e.nodeType === o ? e : e.ownerDocument : null,
                _node: e,
                _tag: e ? e.nodeName.toLowerCase() : null,
                _namespaceURI: e ? e.namespaceURI : null
            };
            return n
        }
        var o = (n(77), 9);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(22),
            i = n(6),
            s = function(t) {
                this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
            };
        r(s.prototype, {
            mountComponent: function(t, e, n, r) {
                var s = n._idCounter++;
                this._domID = s, this._hostParent = e, this._hostContainerInfo = n;
                var a = " react-empty: " + this._domID + " ";
                if (t.useCreateElement) {
                    var c = n._ownerDocument,
                        u = c.createComment(a);
                    return i.precacheNode(this, u), o(u)
                }
                return t.renderToStaticMarkup ? "" : "\x3c!--" + a + "--\x3e"
            },
            receiveComponent: function() {},
            getHostNode: function() {
                return i.getNodeFromInstance(this)
            },
            unmountComponent: function() {
                i.uncacheNode(this)
            }
        }), t.exports = s
    }, function(t, e, n) {
        "use strict";
        var r = {
            useCreateElement: !0,
            useFiber: !1
        };
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(62),
            o = n(6),
            i = {
                dangerouslyProcessChildrenUpdates: function(t, e) {
                    var n = o.getNodeFromInstance(t);
                    r.processUpdates(n, e)
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r() {
            this._rootNodeID && h.updateWrapper(this)
        }

        function o(t) {
            return "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }

        function i(t) {
            var e = this._currentElement.props,
                n = u.executeOnChange(e, t);
            p.asap(r, this);
            var o = e.name;
            if ("radio" === e.type && null != o) {
                for (var i = l.getNodeFromInstance(this), a = i; a.parentNode;) a = a.parentNode;
                for (var c = a.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), h = 0; h < c.length; h++) {
                    var f = c[h];
                    if (f !== i && f.form === i.form) {
                        var d = l.getInstanceFromNode(f);
                        d || s("90"), p.asap(r, d)
                    }
                }
            }
            return n
        }
        var s = n(4),
            a = n(5),
            c = n(114),
            u = n(67),
            l = n(6),
            p = n(13),
            h = (n(1), n(3), {
                getHostProps: function(t, e) {
                    var n = u.getValue(e),
                        r = u.getChecked(e);
                    return a({
                        type: void 0,
                        step: void 0,
                        min: void 0,
                        max: void 0
                    }, e, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != n ? n : t._wrapperState.initialValue,
                        checked: null != r ? r : t._wrapperState.initialChecked,
                        onChange: t._wrapperState.onChange
                    })
                },
                mountWrapper: function(t, e) {
                    var n = e.defaultValue;
                    t._wrapperState = {
                        initialChecked: null != e.checked ? e.checked : e.defaultChecked,
                        initialValue: null != e.value ? e.value : n,
                        listeners: null,
                        onChange: i.bind(t),
                        controlled: o(e)
                    }
                },
                updateWrapper: function(t) {
                    var e = t._currentElement.props,
                        n = e.checked;
                    null != n && c.setValueForProperty(l.getNodeFromInstance(t), "checked", n || !1);
                    var r = l.getNodeFromInstance(t),
                        o = u.getValue(e);
                    if (null != o)
                        if (0 === o && "" === r.value) r.value = "0";
                        else if ("number" === e.type) {
                        var i = parseFloat(r.value, 10) || 0;
                        (o != i || o == i && r.value != o) && (r.value = "" + o)
                    } else r.value !== "" + o && (r.value = "" + o);
                    else null == e.value && null != e.defaultValue && r.defaultValue !== "" + e.defaultValue && (r.defaultValue = "" + e.defaultValue), null == e.checked && null != e.defaultChecked && (r.defaultChecked = !!e.defaultChecked)
                },
                postMountWrapper: function(t) {
                    var e = t._currentElement.props,
                        n = l.getNodeFromInstance(t);
                    switch (e.type) {
                        case "submit":
                        case "reset":
                            break;
                        case "color":
                        case "date":
                        case "datetime":
                        case "datetime-local":
                        case "month":
                        case "time":
                        case "week":
                            n.value = "", n.value = n.defaultValue;
                            break;
                        default:
                            n.value = n.value
                    }
                    var r = n.name;
                    "" !== r && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && (n.name = r)
                }
            });
        t.exports = h
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = "";
            return i.Children.forEach(t, function(t) {
                null != t && ("string" == typeof t || "number" == typeof t ? e += t : c || (c = !0))
            }), e
        }
        var o = n(5),
            i = n(25),
            s = n(6),
            a = n(116),
            c = (n(3), !1),
            u = {
                mountWrapper: function(t, e, n) {
                    var o = null;
                    if (null != n) {
                        var i = n;
                        "optgroup" === i._tag && (i = i._hostParent), null != i && "select" === i._tag && (o = a.getSelectValueContext(i))
                    }
                    var s = null;
                    if (null != o) {
                        var c;
                        if (c = null != e.value ? e.value + "" : r(e.children), s = !1, Array.isArray(o)) {
                            for (var u = 0; u < o.length; u++)
                                if ("" + o[u] === c) {
                                    s = !0;
                                    break
                                }
                        } else s = "" + o === c
                    }
                    t._wrapperState = {
                        selected: s
                    }
                },
                postMountWrapper: function(t) {
                    var e = t._currentElement.props;
                    if (null != e.value) {
                        s.getNodeFromInstance(t).setAttribute("value", e.value)
                    }
                },
                getHostProps: function(t, e) {
                    var n = o({
                        selected: void 0,
                        children: void 0
                    }, e);
                    null != t._wrapperState.selected && (n.selected = t._wrapperState.selected);
                    var i = r(e.children);
                    return i && (n.children = i), n
                }
            };
        t.exports = u
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return t === n && e === r
        }

        function o(t) {
            var e = document.selection,
                n = e.createRange(),
                r = n.text.length,
                o = n.duplicate();
            o.moveToElementText(t), o.setEndPoint("EndToStart", n);
            var i = o.text.length;
            return {
                start: i,
                end: i + r
            }
        }

        function i(t) {
            var e = window.getSelection && window.getSelection();
            if (!e || 0 === e.rangeCount) return null;
            var n = e.anchorNode,
                o = e.anchorOffset,
                i = e.focusNode,
                s = e.focusOffset,
                a = e.getRangeAt(0);
            try {
                a.startContainer.nodeType, a.endContainer.nodeType
            } catch (t) {
                return null
            }
            var c = r(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset),
                u = c ? 0 : a.toString().length,
                l = a.cloneRange();
            l.selectNodeContents(t), l.setEnd(a.startContainer, a.startOffset);
            var p = r(l.startContainer, l.startOffset, l.endContainer, l.endOffset),
                h = p ? 0 : l.toString().length,
                f = h + u,
                d = document.createRange();
            d.setStart(n, o), d.setEnd(i, s);
            var m = d.collapsed;
            return {
                start: m ? f : h,
                end: m ? h : f
            }
        }

        function s(t, e) {
            var n, r, o = document.selection.createRange().duplicate();
            void 0 === e.end ? (n = e.start, r = n) : e.start > e.end ? (n = e.end, r = e.start) : (n = e.start, r = e.end), o.moveToElementText(t), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select()
        }

        function a(t, e) {
            if (window.getSelection) {
                var n = window.getSelection(),
                    r = t[l()].length,
                    o = Math.min(e.start, r),
                    i = void 0 === e.end ? o : Math.min(e.end, r);
                if (!n.extend && o > i) {
                    var s = i;
                    i = o, o = s
                }
                var a = u(t, o),
                    c = u(t, i);
                if (a && c) {
                    var p = document.createRange();
                    p.setStart(a.node, a.offset), n.removeAllRanges(), o > i ? (n.addRange(p), n.extend(c.node, c.offset)) : (p.setEnd(c.node, c.offset), n.addRange(p))
                }
            }
        }
        var c = n(7),
            u = n(350),
            l = n(127),
            p = c.canUseDOM && "selection" in document && !("getSelection" in window),
            h = {
                getOffsets: p ? o : i,
                setOffsets: p ? s : a
            };
        t.exports = h
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(5),
            i = n(62),
            s = n(22),
            a = n(6),
            c = n(46),
            u = (n(1), n(77), function(t) {
                this._currentElement = t, this._stringText = "" + t, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
            });
        o(u.prototype, {
            mountComponent: function(t, e, n, r) {
                var o = n._idCounter++,
                    i = " react-text: " + o + " ";
                if (this._domID = o, this._hostParent = e, t.useCreateElement) {
                    var u = n._ownerDocument,
                        l = u.createComment(i),
                        p = u.createComment(" /react-text "),
                        h = s(u.createDocumentFragment());
                    return s.queueChild(h, s(l)), this._stringText && s.queueChild(h, s(u.createTextNode(this._stringText))), s.queueChild(h, s(p)), a.precacheNode(this, l), this._closingComment = p, h
                }
                var f = c(this._stringText);
                return t.renderToStaticMarkup ? f : "\x3c!--" + i + "--\x3e" + f + "\x3c!-- /react-text --\x3e"
            },
            receiveComponent: function(t, e) {
                if (t !== this._currentElement) {
                    this._currentElement = t;
                    var n = "" + t;
                    if (n !== this._stringText) {
                        this._stringText = n;
                        var r = this.getHostNode();
                        i.replaceDelimitedText(r[0], r[1], n)
                    }
                }
            },
            getHostNode: function() {
                var t = this._commentNodes;
                if (t) return t;
                if (!this._closingComment)
                    for (var e = a.getNodeFromInstance(this), n = e.nextSibling;;) {
                        if (null == n && r("67", this._domID), 8 === n.nodeType && " /react-text " === n.nodeValue) {
                            this._closingComment = n;
                            break
                        }
                        n = n.nextSibling
                    }
                return t = [this._hostNode, this._closingComment], this._commentNodes = t, t
            },
            unmountComponent: function() {
                this._closingComment = null, this._commentNodes = null, a.uncacheNode(this)
            }
        }), t.exports = u
    }, function(t, e, n) {
        "use strict";

        function r() {
            this._rootNodeID && l.updateWrapper(this)
        }

        function o(t) {
            var e = this._currentElement.props,
                n = a.executeOnChange(e, t);
            return u.asap(r, this), n
        }
        var i = n(4),
            s = n(5),
            a = n(67),
            c = n(6),
            u = n(13),
            l = (n(1), n(3), {
                getHostProps: function(t, e) {
                    return null != e.dangerouslySetInnerHTML && i("91"), s({}, e, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + t._wrapperState.initialValue,
                        onChange: t._wrapperState.onChange
                    })
                },
                mountWrapper: function(t, e) {
                    var n = a.getValue(e),
                        r = n;
                    if (null == n) {
                        var s = e.defaultValue,
                            c = e.children;
                        null != c && (null != s && i("92"), Array.isArray(c) && (c.length <= 1 || i("93"), c = c[0]), s = "" + c), null == s && (s = ""), r = s
                    }
                    t._wrapperState = {
                        initialValue: "" + r,
                        listeners: null,
                        onChange: o.bind(t)
                    }
                },
                updateWrapper: function(t) {
                    var e = t._currentElement.props,
                        n = c.getNodeFromInstance(t),
                        r = a.getValue(e);
                    if (null != r) {
                        var o = "" + r;
                        o !== n.value && (n.value = o), null == e.defaultValue && (n.defaultValue = o)
                    }
                    null != e.defaultValue && (n.defaultValue = e.defaultValue)
                },
                postMountWrapper: function(t) {
                    var e = c.getNodeFromInstance(t),
                        n = e.textContent;
                    n === t._wrapperState.initialValue && (e.value = n)
                }
            });
        t.exports = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            "_hostNode" in t || c("33"), "_hostNode" in e || c("33");
            for (var n = 0, r = t; r; r = r._hostParent) n++;
            for (var o = 0, i = e; i; i = i._hostParent) o++;
            for (; n - o > 0;) t = t._hostParent, n--;
            for (; o - n > 0;) e = e._hostParent, o--;
            for (var s = n; s--;) {
                if (t === e) return t;
                t = t._hostParent, e = e._hostParent
            }
            return null
        }

        function o(t, e) {
            "_hostNode" in t || c("35"), "_hostNode" in e || c("35");
            for (; e;) {
                if (e === t) return !0;
                e = e._hostParent
            }
            return !1
        }

        function i(t) {
            return "_hostNode" in t || c("36"), t._hostParent
        }

        function s(t, e, n) {
            for (var r = []; t;) r.push(t), t = t._hostParent;
            var o;
            for (o = r.length; o-- > 0;) e(r[o], "captured", n);
            for (o = 0; o < r.length; o++) e(r[o], "bubbled", n)
        }

        function a(t, e, n, o, i) {
            for (var s = t && e ? r(t, e) : null, a = []; t && t !== s;) a.push(t), t = t._hostParent;
            for (var c = []; e && e !== s;) c.push(e), e = e._hostParent;
            var u;
            for (u = 0; u < a.length; u++) n(a[u], "bubbled", o);
            for (u = c.length; u-- > 0;) n(c[u], "captured", i)
        }
        var c = n(4);
        n(1);
        t.exports = {
            isAncestor: o,
            getLowestCommonAncestor: r,
            getParentInstance: i,
            traverseTwoPhase: s,
            traverseEnterLeave: a
        }
    }, function(t, e, n) {
        "use strict";

        function r() {
            this.reinitializeTransaction()
        }
        var o = n(5),
            i = n(13),
            s = n(45),
            a = n(10),
            c = {
                initialize: a,
                close: function() {
                    h.isBatchingUpdates = !1
                }
            },
            u = {
                initialize: a,
                close: i.flushBatchedUpdates.bind(i)
            },
            l = [u, c];
        o(r.prototype, s, {
            getTransactionWrappers: function() {
                return l
            }
        });
        var p = new r,
            h = {
                isBatchingUpdates: !1,
                batchedUpdates: function(t, e, n, r, o, i) {
                    var s = h.isBatchingUpdates;
                    return h.isBatchingUpdates = !0, s ? t(e, n, r, o, i) : p.perform(t, null, e, n, r, o, i)
                }
            };
        t.exports = h
    }, function(t, e, n) {
        "use strict";

        function r() {
            x || (x = !0, g.EventEmitter.injectReactEventListener(y), g.EventPluginHub.injectEventPluginOrder(a), g.EventPluginUtils.injectComponentTree(h), g.EventPluginUtils.injectTreeTraversal(d), g.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: w,
                EnterLeaveEventPlugin: c,
                ChangeEventPlugin: s,
                SelectEventPlugin: C,
                BeforeInputEventPlugin: i
            }), g.HostComponent.injectGenericComponentClass(p), g.HostComponent.injectTextComponentClass(m), g.DOMProperty.injectDOMPropertyConfig(o), g.DOMProperty.injectDOMPropertyConfig(u), g.DOMProperty.injectDOMPropertyConfig(_), g.EmptyComponent.injectEmptyComponentFactory(function(t) {
                return new f(t)
            }), g.Updates.injectReconcileTransaction(b), g.Updates.injectBatchingStrategy(v), g.Component.injectEnvironment(l))
        }
        var o = n(291),
            i = n(293),
            s = n(295),
            a = n(297),
            c = n(298),
            u = n(300),
            l = n(302),
            p = n(305),
            h = n(6),
            f = n(307),
            d = n(315),
            m = n(313),
            v = n(316),
            y = n(320),
            g = n(321),
            b = n(326),
            _ = n(331),
            C = n(332),
            w = n(333),
            x = !1;
        t.exports = {
            inject: r
        }
    }, function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            o.enqueueEvents(t), o.processEventQueue(!1)
        }
        var o = n(32),
            i = {
                handleTopLevel: function(t, e, n, i) {
                    r(o.extractEvents(t, e, n, i))
                }
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (; t._hostParent;) t = t._hostParent;
            var e = p.getNodeFromInstance(t),
                n = e.parentNode;
            return p.getClosestInstanceFromNode(n)
        }

        function o(t, e) {
            this.topLevelType = t, this.nativeEvent = e, this.ancestors = []
        }

        function i(t) {
            var e = f(t.nativeEvent),
                n = p.getClosestInstanceFromNode(e),
                o = n;
            do {
                t.ancestors.push(o), o = o && r(o)
            } while (o);
            for (var i = 0; i < t.ancestors.length; i++) n = t.ancestors[i], m._handleTopLevel(t.topLevelType, n, t.nativeEvent, f(t.nativeEvent))
        }

        function s(t) {
            t(d(window))
        }
        var a = n(5),
            c = n(96),
            u = n(7),
            l = n(17),
            p = n(6),
            h = n(13),
            f = n(74),
            d = n(216);
        a(o.prototype, {
            destructor: function() {
                this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
            }
        }), l.addPoolingTo(o, l.twoArgumentPooler);
        var m = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: u.canUseDOM ? window : null,
            setHandleTopLevel: function(t) {
                m._handleTopLevel = t
            },
            setEnabled: function(t) {
                m._enabled = !!t
            },
            isEnabled: function() {
                return m._enabled
            },
            trapBubbledEvent: function(t, e, n) {
                return n ? c.listen(n, e, m.dispatchEvent.bind(null, t)) : null
            },
            trapCapturedEvent: function(t, e, n) {
                return n ? c.capture(n, e, m.dispatchEvent.bind(null, t)) : null
            },
            monitorScrollValue: function(t) {
                var e = s.bind(null, t);
                c.listen(window, "scroll", e)
            },
            dispatchEvent: function(t, e) {
                if (m._enabled) {
                    var n = o.getPooled(t, e);
                    try {
                        h.batchedUpdates(i, n)
                    } finally {
                        o.release(n)
                    }
                }
            }
        };
        t.exports = m
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = n(32),
            i = n(65),
            s = n(68),
            a = n(117),
            c = n(43),
            u = n(119),
            l = n(13),
            p = {
                Component: s.injection,
                DOMProperty: r.injection,
                EmptyComponent: a.injection,
                EventPluginHub: o.injection,
                EventPluginUtils: i.injection,
                EventEmitter: c.injection,
                HostComponent: u.injection,
                Updates: l.injection
            };
        t.exports = p
    }, function(t, e, n) {
        "use strict";
        var r = n(344),
            o = /\/?>/,
            i = /^<\!\-\-/,
            s = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function(t) {
                    var e = r(t);
                    return i.test(t) ? t : t.replace(o, " " + s.CHECKSUM_ATTR_NAME + '="' + e + '"$&')
                },
                canReuseMarkup: function(t, e) {
                    var n = e.getAttribute(s.CHECKSUM_ATTR_NAME);
                    return n = n && parseInt(n, 10), r(t) === n
                }
            };
        t.exports = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return {
                type: "INSERT_MARKUP",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: n,
                afterNode: e
            }
        }

        function o(t, e, n) {
            return {
                type: "MOVE_EXISTING",
                content: null,
                fromIndex: t._mountIndex,
                fromNode: h.getHostNode(t),
                toIndex: n,
                afterNode: e
            }
        }

        function i(t, e) {
            return {
                type: "REMOVE_NODE",
                content: null,
                fromIndex: t._mountIndex,
                fromNode: e,
                toIndex: null,
                afterNode: null
            }
        }

        function s(t) {
            return {
                type: "SET_MARKUP",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }

        function a(t) {
            return {
                type: "TEXT_CONTENT",
                content: t,
                fromIndex: null,
                fromNode: null,
                toIndex: null,
                afterNode: null
            }
        }

        function c(t, e) {
            return e && (t = t || [], t.push(e)), t
        }

        function u(t, e) {
            p.processChildrenUpdates(t, e)
        }
        var l = n(4),
            p = n(68),
            h = (n(34), n(12), n(15), n(24)),
            f = n(301),
            d = (n(10), n(347)),
            m = (n(1), {
                Mixin: {
                    _reconcilerInstantiateChildren: function(t, e, n) {
                        return f.instantiateChildren(t, e, n)
                    },
                    _reconcilerUpdateChildren: function(t, e, n, r, o, i) {
                        var s, a = 0;
                        return s = d(e, a), f.updateChildren(t, s, n, r, o, this, this._hostContainerInfo, i, a), s
                    },
                    mountChildren: function(t, e, n) {
                        var r = this._reconcilerInstantiateChildren(t, e, n);
                        this._renderedChildren = r;
                        var o = [],
                            i = 0;
                        for (var s in r)
                            if (r.hasOwnProperty(s)) {
                                var a = r[s],
                                    c = 0,
                                    u = h.mountComponent(a, e, this, this._hostContainerInfo, n, c);
                                a._mountIndex = i++, o.push(u)
                            } return o
                    },
                    updateTextContent: function(t) {
                        var e = this._renderedChildren;
                        f.unmountChildren(e, !1);
                        for (var n in e) e.hasOwnProperty(n) && l("118");
                        u(this, [a(t)])
                    },
                    updateMarkup: function(t) {
                        var e = this._renderedChildren;
                        f.unmountChildren(e, !1);
                        for (var n in e) e.hasOwnProperty(n) && l("118");
                        u(this, [s(t)])
                    },
                    updateChildren: function(t, e, n) {
                        this._updateChildren(t, e, n)
                    },
                    _updateChildren: function(t, e, n) {
                        var r = this._renderedChildren,
                            o = {},
                            i = [],
                            s = this._reconcilerUpdateChildren(r, t, i, o, e, n);
                        if (s || r) {
                            var a, l = null,
                                p = 0,
                                f = 0,
                                d = 0,
                                m = null;
                            for (a in s)
                                if (s.hasOwnProperty(a)) {
                                    var v = r && r[a],
                                        y = s[a];
                                    v === y ? (l = c(l, this.moveChild(v, m, p, f)), f = Math.max(v._mountIndex, f), v._mountIndex = p) : (v && (f = Math.max(v._mountIndex, f)), l = c(l, this._mountChildAtIndex(y, i[d], m, p, e, n)), d++), p++, m = h.getHostNode(y)
                                } for (a in o) o.hasOwnProperty(a) && (l = c(l, this._unmountChild(r[a], o[a])));
                            l && u(this, l), this._renderedChildren = s
                        }
                    },
                    unmountChildren: function(t) {
                        var e = this._renderedChildren;
                        f.unmountChildren(e, t), this._renderedChildren = null
                    },
                    moveChild: function(t, e, n, r) {
                        if (t._mountIndex < r) return o(t, e, n)
                    },
                    createChild: function(t, e, n) {
                        return r(n, e, t._mountIndex)
                    },
                    removeChild: function(t, e) {
                        return i(t, e)
                    },
                    _mountChildAtIndex: function(t, e, n, r, o, i) {
                        return t._mountIndex = r, this.createChild(t, n, e)
                    },
                    _unmountChild: function(t, e) {
                        var n = this.removeChild(t, e);
                        return t._mountIndex = null, n
                    }
                }
            });
        t.exports = m
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return !(!t || "function" != typeof t.attachRef || "function" != typeof t.detachRef)
        }
        var o = n(4),
            i = (n(1), {
                addComponentAsRefTo: function(t, e, n) {
                    r(n) || o("119"), n.attachRef(e, t)
                },
                removeComponentAsRefFrom: function(t, e, n) {
                    r(n) || o("120");
                    var i = n.getPublicInstance();
                    i && i.refs[e] === t.getPublicInstance() && n.detachRef(e)
                }
            });
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = t
        }
        var o = n(5),
            i = n(113),
            s = n(17),
            a = n(43),
            c = n(120),
            u = (n(12), n(45)),
            l = n(70),
            p = {
                initialize: c.getSelectionInformation,
                close: c.restoreSelection
            },
            h = {
                initialize: function() {
                    var t = a.isEnabled();
                    return a.setEnabled(!1), t
                },
                close: function(t) {
                    a.setEnabled(t)
                }
            },
            f = {
                initialize: function() {
                    this.reactMountReady.reset()
                },
                close: function() {
                    this.reactMountReady.notifyAll()
                }
            },
            d = [p, h, f],
            m = {
                getTransactionWrappers: function() {
                    return d
                },
                getReactMountReady: function() {
                    return this.reactMountReady
                },
                getUpdateQueue: function() {
                    return l
                },
                checkpoint: function() {
                    return this.reactMountReady.checkpoint()
                },
                rollback: function(t) {
                    this.reactMountReady.rollback(t)
                },
                destructor: function() {
                    i.release(this.reactMountReady), this.reactMountReady = null
                }
            };
        o(r.prototype, u, m), s.addPoolingTo(r), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            "function" == typeof t ? t(e.getPublicInstance()) : i.addComponentAsRefTo(e, t, n)
        }

        function o(t, e, n) {
            "function" == typeof t ? t(null) : i.removeComponentAsRefFrom(e, t, n)
        }
        var i = n(324),
            s = {};
        s.attachRefs = function(t, e) {
            if (null !== e && "object" == typeof e) {
                var n = e.ref;
                null != n && r(n, t, e._owner)
            }
        }, s.shouldUpdateRefs = function(t, e) {
            var n = null,
                r = null;
            null !== t && "object" == typeof t && (n = t.ref, r = t._owner);
            var o = null,
                i = null;
            return null !== e && "object" == typeof e && (o = e.ref, i = e._owner), n !== o || "string" == typeof o && i !== r
        }, s.detachRefs = function(t, e) {
            if (null !== e && "object" == typeof e) {
                var n = e.ref;
                null != n && o(n, t, e._owner)
            }
        }, t.exports = s
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = t, this.useCreateElement = !1, this.updateQueue = new a(this)
        }
        var o = n(5),
            i = n(17),
            s = n(45),
            a = (n(12), n(329)),
            c = [],
            u = {
                enqueue: function() {}
            },
            l = {
                getTransactionWrappers: function() {
                    return c
                },
                getReactMountReady: function() {
                    return u
                },
                getUpdateQueue: function() {
                    return this.updateQueue
                },
                destructor: function() {},
                checkpoint: function() {},
                rollback: function() {}
            };
        o(r.prototype, s, l), i.addPoolingTo(r), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = n(70),
            i = (n(3), function() {
                function t(e) {
                    r(this, t), this.transaction = e
                }
                return t.prototype.isMounted = function(t) {
                    return !1
                }, t.prototype.enqueueCallback = function(t, e, n) {
                    this.transaction.isInTransaction() && o.enqueueCallback(t, e, n)
                }, t.prototype.enqueueForceUpdate = function(t) {
                    this.transaction.isInTransaction() && o.enqueueForceUpdate(t)
                }, t.prototype.enqueueReplaceState = function(t, e) {
                    this.transaction.isInTransaction() && o.enqueueReplaceState(t, e)
                }, t.prototype.enqueueSetState = function(t, e) {
                    this.transaction.isInTransaction() && o.enqueueSetState(t, e)
                }, t
            }());
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        t.exports = "15.6.1"
    }, function(t, e, n) {
        "use strict";
        var r = {
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace"
            },
            o = {
                accentHeight: "accent-height",
                accumulate: 0,
                additive: 0,
                alignmentBaseline: "alignment-baseline",
                allowReorder: "allowReorder",
                alphabetic: 0,
                amplitude: 0,
                arabicForm: "arabic-form",
                ascent: 0,
                attributeName: "attributeName",
                attributeType: "attributeType",
                autoReverse: "autoReverse",
                azimuth: 0,
                baseFrequency: "baseFrequency",
                baseProfile: "baseProfile",
                baselineShift: "baseline-shift",
                bbox: 0,
                begin: 0,
                bias: 0,
                by: 0,
                calcMode: "calcMode",
                capHeight: "cap-height",
                clip: 0,
                clipPath: "clip-path",
                clipRule: "clip-rule",
                clipPathUnits: "clipPathUnits",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                contentScriptType: "contentScriptType",
                contentStyleType: "contentStyleType",
                cursor: 0,
                cx: 0,
                cy: 0,
                d: 0,
                decelerate: 0,
                descent: 0,
                diffuseConstant: "diffuseConstant",
                direction: 0,
                display: 0,
                divisor: 0,
                dominantBaseline: "dominant-baseline",
                dur: 0,
                dx: 0,
                dy: 0,
                edgeMode: "edgeMode",
                elevation: 0,
                enableBackground: "enable-background",
                end: 0,
                exponent: 0,
                externalResourcesRequired: "externalResourcesRequired",
                fill: 0,
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                filter: 0,
                filterRes: "filterRes",
                filterUnits: "filterUnits",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                focusable: 0,
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                format: 0,
                from: 0,
                fx: 0,
                fy: 0,
                g1: 0,
                g2: 0,
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                glyphRef: "glyphRef",
                gradientTransform: "gradientTransform",
                gradientUnits: "gradientUnits",
                hanging: 0,
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                ideographic: 0,
                imageRendering: "image-rendering",
                in: 0,
                in2: 0,
                intercept: 0,
                k: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0,
                kernelMatrix: "kernelMatrix",
                kernelUnitLength: "kernelUnitLength",
                kerning: 0,
                keyPoints: "keyPoints",
                keySplines: "keySplines",
                keyTimes: "keyTimes",
                lengthAdjust: "lengthAdjust",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                limitingConeAngle: "limitingConeAngle",
                local: 0,
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                markerHeight: "markerHeight",
                markerUnits: "markerUnits",
                markerWidth: "markerWidth",
                mask: 0,
                maskContentUnits: "maskContentUnits",
                maskUnits: "maskUnits",
                mathematical: 0,
                mode: 0,
                numOctaves: "numOctaves",
                offset: 0,
                opacity: 0,
                operator: 0,
                order: 0,
                orient: 0,
                orientation: 0,
                origin: 0,
                overflow: 0,
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pathLength: "pathLength",
                patternContentUnits: "patternContentUnits",
                patternTransform: "patternTransform",
                patternUnits: "patternUnits",
                pointerEvents: "pointer-events",
                points: 0,
                pointsAtX: "pointsAtX",
                pointsAtY: "pointsAtY",
                pointsAtZ: "pointsAtZ",
                preserveAlpha: "preserveAlpha",
                preserveAspectRatio: "preserveAspectRatio",
                primitiveUnits: "primitiveUnits",
                r: 0,
                radius: 0,
                refX: "refX",
                refY: "refY",
                renderingIntent: "rendering-intent",
                repeatCount: "repeatCount",
                repeatDur: "repeatDur",
                requiredExtensions: "requiredExtensions",
                requiredFeatures: "requiredFeatures",
                restart: 0,
                result: 0,
                rotate: 0,
                rx: 0,
                ry: 0,
                scale: 0,
                seed: 0,
                shapeRendering: "shape-rendering",
                slope: 0,
                spacing: 0,
                specularConstant: "specularConstant",
                specularExponent: "specularExponent",
                speed: 0,
                spreadMethod: "spreadMethod",
                startOffset: "startOffset",
                stdDeviation: "stdDeviation",
                stemh: 0,
                stemv: 0,
                stitchTiles: "stitchTiles",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                string: 0,
                stroke: 0,
                strokeDasharray: "stroke-dasharray",
                strokeDashoffset: "stroke-dashoffset",
                strokeLinecap: "stroke-linecap",
                strokeLinejoin: "stroke-linejoin",
                strokeMiterlimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                surfaceScale: "surfaceScale",
                systemLanguage: "systemLanguage",
                tableValues: "tableValues",
                targetX: "targetX",
                targetY: "targetY",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                textLength: "textLength",
                to: 0,
                transform: 0,
                u1: 0,
                u2: 0,
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicode: 0,
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                values: 0,
                vectorEffect: "vector-effect",
                version: 0,
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                viewBox: "viewBox",
                viewTarget: "viewTarget",
                visibility: 0,
                widths: 0,
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                x: 0,
                xHeight: "x-height",
                x1: 0,
                x2: 0,
                xChannelSelector: "xChannelSelector",
                xlinkActuate: "xlink:actuate",
                xlinkArcrole: "xlink:arcrole",
                xlinkHref: "xlink:href",
                xlinkRole: "xlink:role",
                xlinkShow: "xlink:show",
                xlinkTitle: "xlink:title",
                xlinkType: "xlink:type",
                xmlBase: "xml:base",
                xmlns: 0,
                xmlnsXlink: "xmlns:xlink",
                xmlLang: "xml:lang",
                xmlSpace: "xml:space",
                y: 0,
                y1: 0,
                y2: 0,
                yChannelSelector: "yChannelSelector",
                z: 0,
                zoomAndPan: "zoomAndPan"
            },
            i = {
                Properties: {},
                DOMAttributeNamespaces: {
                    xlinkActuate: r.xlink,
                    xlinkArcrole: r.xlink,
                    xlinkHref: r.xlink,
                    xlinkRole: r.xlink,
                    xlinkShow: r.xlink,
                    xlinkTitle: r.xlink,
                    xlinkType: r.xlink,
                    xmlBase: r.xml,
                    xmlLang: r.xml,
                    xmlSpace: r.xml
                },
                DOMAttributeNames: {}
            };
        Object.keys(o).forEach(function(t) {
            i.Properties[t] = 0, o[t] && (i.DOMAttributeNames[t] = o[t])
        }), t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if ("selectionStart" in t && c.hasSelectionCapabilities(t)) return {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            if (window.getSelection) {
                var e = window.getSelection();
                return {
                    anchorNode: e.anchorNode,
                    anchorOffset: e.anchorOffset,
                    focusNode: e.focusNode,
                    focusOffset: e.focusOffset
                }
            }
            if (document.selection) {
                var n = document.selection.createRange();
                return {
                    parentElement: n.parentElement(),
                    text: n.text,
                    top: n.boundingTop,
                    left: n.boundingLeft
                }
            }
        }

        function o(t, e) {
            if (g || null == m || m !== l()) return null;
            var n = r(m);
            if (!y || !h(y, n)) {
                y = n;
                var o = u.getPooled(d.select, v, t, e);
                return o.type = "select", o.target = m, i.accumulateTwoPhaseDispatches(o), o
            }
            return null
        }
        var i = n(33),
            s = n(7),
            a = n(6),
            c = n(120),
            u = n(14),
            l = n(98),
            p = n(130),
            h = n(58),
            f = s.canUseDOM && "documentMode" in document && document.documentMode <= 11,
            d = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
                }
            },
            m = null,
            v = null,
            y = null,
            g = !1,
            b = !1,
            _ = {
                eventTypes: d,
                extractEvents: function(t, e, n, r) {
                    if (!b) return null;
                    var i = e ? a.getNodeFromInstance(e) : window;
                    switch (t) {
                        case "topFocus":
                            (p(i) || "true" === i.contentEditable) && (m = i, v = e, y = null);
                            break;
                        case "topBlur":
                            m = null, v = null, y = null;
                            break;
                        case "topMouseDown":
                            g = !0;
                            break;
                        case "topContextMenu":
                        case "topMouseUp":
                            return g = !1, o(n, r);
                        case "topSelectionChange":
                            if (f) break;
                        case "topKeyDown":
                        case "topKeyUp":
                            return o(n, r)
                    }
                    return null
                },
                didPutListener: function(t, e, n) {
                    "onSelect" === e && (b = !0)
                }
            };
        t.exports = _
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "." + t._rootNodeID
        }

        function o(t) {
            return "button" === t || "input" === t || "select" === t || "textarea" === t
        }
        var i = n(4),
            s = n(96),
            a = n(33),
            c = n(6),
            u = n(334),
            l = n(335),
            p = n(14),
            h = n(338),
            f = n(340),
            d = n(44),
            m = n(337),
            v = n(341),
            y = n(342),
            g = n(35),
            b = n(343),
            _ = n(10),
            C = n(72),
            w = (n(1), {}),
            x = {};
        ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(t) {
            var e = t[0].toUpperCase() + t.slice(1),
                n = "on" + e,
                r = "top" + e,
                o = {
                    phasedRegistrationNames: {
                        bubbled: n,
                        captured: n + "Capture"
                    },
                    dependencies: [r]
                };
            w[t] = o, x[r] = o
        });
        var k = {},
            S = {
                eventTypes: w,
                extractEvents: function(t, e, n, r) {
                    var o = x[t];
                    if (!o) return null;
                    var s;
                    switch (t) {
                        case "topAbort":
                        case "topCanPlay":
                        case "topCanPlayThrough":
                        case "topDurationChange":
                        case "topEmptied":
                        case "topEncrypted":
                        case "topEnded":
                        case "topError":
                        case "topInput":
                        case "topInvalid":
                        case "topLoad":
                        case "topLoadedData":
                        case "topLoadedMetadata":
                        case "topLoadStart":
                        case "topPause":
                        case "topPlay":
                        case "topPlaying":
                        case "topProgress":
                        case "topRateChange":
                        case "topReset":
                        case "topSeeked":
                        case "topSeeking":
                        case "topStalled":
                        case "topSubmit":
                        case "topSuspend":
                        case "topTimeUpdate":
                        case "topVolumeChange":
                        case "topWaiting":
                            s = p;
                            break;
                        case "topKeyPress":
                            if (0 === C(n)) return null;
                        case "topKeyDown":
                        case "topKeyUp":
                            s = f;
                            break;
                        case "topBlur":
                        case "topFocus":
                            s = h;
                            break;
                        case "topClick":
                            if (2 === n.button) return null;
                        case "topDoubleClick":
                        case "topMouseDown":
                        case "topMouseMove":
                        case "topMouseUp":
                        case "topMouseOut":
                        case "topMouseOver":
                        case "topContextMenu":
                            s = d;
                            break;
                        case "topDrag":
                        case "topDragEnd":
                        case "topDragEnter":
                        case "topDragExit":
                        case "topDragLeave":
                        case "topDragOver":
                        case "topDragStart":
                        case "topDrop":
                            s = m;
                            break;
                        case "topTouchCancel":
                        case "topTouchEnd":
                        case "topTouchMove":
                        case "topTouchStart":
                            s = v;
                            break;
                        case "topAnimationEnd":
                        case "topAnimationIteration":
                        case "topAnimationStart":
                            s = u;
                            break;
                        case "topTransitionEnd":
                            s = y;
                            break;
                        case "topScroll":
                            s = g;
                            break;
                        case "topWheel":
                            s = b;
                            break;
                        case "topCopy":
                        case "topCut":
                        case "topPaste":
                            s = l
                    }
                    s || i("86", t);
                    var c = s.getPooled(o, e, n, r);
                    return a.accumulateTwoPhaseDispatches(c), c
                },
                didPutListener: function(t, e, n) {
                    if ("onClick" === e && !o(t._tag)) {
                        var i = r(t),
                            a = c.getNodeFromInstance(t);
                        k[i] || (k[i] = s.listen(a, "click", _))
                    }
                },
                willDeleteListener: function(t, e) {
                    if ("onClick" === e && !o(t._tag)) {
                        var n = r(t);
                        k[n].remove(), delete k[n]
                    }
                }
            };
        t.exports = S
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = {
                animationName: null,
                elapsedTime: null,
                pseudoElement: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = {
                clipboardData: function(t) {
                    return "clipboardData" in t ? t.clipboardData : window.clipboardData
                }
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = {
                data: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(44),
            i = {
                dataTransfer: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(35),
            i = {
                relatedTarget: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = {
                data: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(35),
            i = n(72),
            s = n(348),
            a = n(73),
            c = {
                key: s,
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: a,
                charCode: function(t) {
                    return "keypress" === t.type ? i(t) : 0
                },
                keyCode: function(t) {
                    return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                },
                which: function(t) {
                    return "keypress" === t.type ? i(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                }
            };
        o.augmentClass(r, c), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(35),
            i = n(73),
            s = {
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: i
            };
        o.augmentClass(r, s), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(14),
            i = {
                propertyName: null,
                elapsedTime: null,
                pseudoElement: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return o.call(this, t, e, n, r)
        }
        var o = n(44),
            i = {
                deltaX: function(t) {
                    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                },
                deltaY: function(t) {
                    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            };
        o.augmentClass(r, i), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = 1, n = 0, r = 0, i = t.length, s = -4 & i; r < s;) {
                for (var a = Math.min(r + 4096, s); r < a; r += 4) n += (e += t.charCodeAt(r)) + (e += t.charCodeAt(r + 1)) + (e += t.charCodeAt(r + 2)) + (e += t.charCodeAt(r + 3));
                e %= o, n %= o
            }
            for (; r < i; r++) n += e += t.charCodeAt(r);
            return e %= o, n %= o, e | n << 16
        }
        var o = 65521;
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            if (null == e || "boolean" == typeof e || "" === e) return "";
            var o = isNaN(e);
            if (r || o || 0 === e || i.hasOwnProperty(t) && i[t]) return "" + e;
            if ("string" == typeof e) {
                e = e.trim()
            }
            return e + "px"
        }
        var o = n(112),
            i = (n(3), o.isUnitlessNumber);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = s.get(t);
            if (e) return e = a(e), e ? i.getNodeFromInstance(e) : null;
            "function" == typeof t.render ? o("44") : o("45", Object.keys(t))
        }
        var o = n(4),
            i = (n(15), n(6)),
            s = n(34),
            a = n(126);
        n(1), n(3);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        (function(e) {
            function r(t, e, n, r) {
                if (t && "object" == typeof t) {
                    var o = t,
                        i = void 0 === o[n];
                    i && null != e && (o[n] = e)
                }
            }

            function o(t, e) {
                if (null == t) return t;
                var n = {};
                return i(t, r, n), n
            }
            var i = (n(66), n(132));
            n(3);
            void 0 !== e && n.i({
                NODE_ENV: "production"
            }), t.exports = o
        }).call(e, n(108))
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (t.key) {
                var e = i[t.key] || t.key;
                if ("Unidentified" !== e) return e
            }
            if ("keypress" === t.type) {
                var n = o(t);
                return 13 === n ? "Enter" : String.fromCharCode(n)
            }
            return "keydown" === t.type || "keyup" === t.type ? s[t.keyCode] || "Unidentified" : ""
        }
        var o = n(72),
            i = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            s = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            };
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t && (o && t[o] || t[i]);
            if ("function" == typeof e) return e
        }
        var o = "function" == typeof Symbol && Symbol.iterator,
            i = "@@iterator";
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            for (; t && t.firstChild;) t = t.firstChild;
            return t
        }

        function o(t) {
            for (; t;) {
                if (t.nextSibling) return t.nextSibling;
                t = t.parentNode
            }
        }

        function i(t, e) {
            for (var n = r(t), i = 0, s = 0; n;) {
                if (3 === n.nodeType) {
                    if (s = i + n.textContent.length, i <= e && s >= e) return {
                        node: n,
                        offset: e - i
                    };
                    i = s
                }
                n = r(o(n))
            }
        }
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = {};
            return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n["ms" + t] = "MS" + e, n["O" + t] = "o" + e.toLowerCase(), n
        }

        function o(t) {
            if (a[t]) return a[t];
            if (!s[t]) return t;
            var e = s[t];
            for (var n in e)
                if (e.hasOwnProperty(n) && n in c) return a[t] = e[n];
            return ""
        }
        var i = n(7),
            s = {
                animationend: r("Animation", "AnimationEnd"),
                animationiteration: r("Animation", "AnimationIteration"),
                animationstart: r("Animation", "AnimationStart"),
                transitionend: r("Transition", "TransitionEnd")
            },
            a = {},
            c = {};
        i.canUseDOM && (c = document.createElement("div").style, "AnimationEvent" in window || (delete s.animationend.animation, delete s.animationiteration.animation, delete s.animationstart.animation), "TransitionEvent" in window || delete s.transitionend.transition), t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return '"' + o(t) + '"'
        }
        var o = n(46);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(121);
        t.exports = r.renderSubtreeIntoContainer
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function s() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store",
                n = arguments[1],
                s = n || e + "Subscription",
                c = function(t) {
                    function n(i, s) {
                        r(this, n);
                        var a = o(this, t.call(this, i, s));
                        return a[e] = i.store, a
                    }
                    return i(n, t), n.prototype.getChildContext = function() {
                        var t;
                        return t = {}, t[e] = this[e], t[s] = null, t
                    }, n.prototype.render = function() {
                        return a.Children.only(this.props.children)
                    }, n
                }(a.Component);
            return c.propTypes = {
                store: l.a.isRequired,
                children: u.a.element.isRequired
            }, c.childContextTypes = (t = {}, t[e] = l.a.isRequired, t[s] = l.b, t), c.displayName = "Provider", c
        }
        e.b = s;
        var a = n(9),
            c = (n.n(a), n(110)),
            u = n.n(c),
            l = n(135);
        n(78);
        e.a = s()
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = {};
            for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }

        function o(t, e, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var o = e[r](t);
                if (o) return o
            }
            return function(e, r) {
                throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
            }
        }

        function i(t, e) {
            return t === e
        }
        var s = n(133),
            a = n(362),
            c = n(356),
            u = n(357),
            l = n(358),
            p = n(359),
            h = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };
        e.a = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.connectHOC,
                n = void 0 === e ? s.a : e,
                f = t.mapStateToPropsFactories,
                d = void 0 === f ? u.a : f,
                m = t.mapDispatchToPropsFactories,
                v = void 0 === m ? c.a : m,
                y = t.mergePropsFactories,
                g = void 0 === y ? l.a : y,
                b = t.selectorFactory,
                _ = void 0 === b ? p.a : b;
            return function(t, e, s) {
                var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    u = c.pure,
                    l = void 0 === u || u,
                    p = c.areStatesEqual,
                    f = void 0 === p ? i : p,
                    m = c.areOwnPropsEqual,
                    y = void 0 === m ? a.a : m,
                    b = c.areStatePropsEqual,
                    C = void 0 === b ? a.a : b,
                    w = c.areMergedPropsEqual,
                    x = void 0 === w ? a.a : w,
                    k = r(c, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                    S = o(t, d, "mapStateToProps"),
                    E = o(e, v, "mapDispatchToProps"),
                    A = o(s, g, "mergeProps");
                return n(_, h({
                    methodName: "connect",
                    getDisplayName: function(t) {
                        return "Connect(" + t + ")"
                    },
                    shouldHandleStateChanges: Boolean(t),
                    initMapStateToProps: S,
                    initMapDispatchToProps: E,
                    initMergeProps: A,
                    pure: l,
                    areStatesEqual: f,
                    areOwnPropsEqual: y,
                    areStatePropsEqual: C,
                    areMergedPropsEqual: x
                }, k))
            }
        }()
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t ? n.i(a.a)(t, "mapDispatchToProps") : void 0
        }

        function o(t) {
            return t ? void 0 : n.i(a.b)(function(t) {
                return {
                    dispatch: t
                }
            })
        }

        function i(t) {
            return t && "object" == typeof t ? n.i(a.b)(function(e) {
                return n.i(s.bindActionCreators)(t, e)
            }) : void 0
        }
        var s = n(79),
            a = n(134);
        e.a = [r, o, i]
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t ? n.i(i.a)(t, "mapStateToProps") : void 0
        }

        function o(t) {
            return t ? void 0 : n.i(i.b)(function() {
                return {}
            })
        }
        var i = n(134);
        e.a = [r, o]
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return a({}, n, t, e)
        }

        function o(t) {
            return function(e, n) {
                var r = (n.displayName, n.pure),
                    o = n.areMergedPropsEqual,
                    i = !1,
                    s = void 0;
                return function(e, n, a) {
                    var c = t(e, n, a);
                    return i ? r && o(c, s) || (s = c) : (i = !0, s = c), s
                }
            }
        }

        function i(t) {
            return "function" == typeof t ? o(t) : void 0
        }

        function s(t) {
            return t ? void 0 : function() {
                return r
            }
        }
        var a = (n(136), Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        });
        e.a = [i, s]
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = {};
            for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }

        function o(t, e, n, r) {
            return function(o, i) {
                return n(t(o, i), e(r, i), i)
            }
        }

        function i(t, e, n, r, o) {
            function i(o, i) {
                return d = o, m = i, v = t(d, m), y = e(r, m), g = n(v, y, m), f = !0, g
            }

            function s() {
                return v = t(d, m), e.dependsOnOwnProps && (y = e(r, m)), g = n(v, y, m)
            }

            function a() {
                return t.dependsOnOwnProps && (v = t(d, m)), e.dependsOnOwnProps && (y = e(r, m)), g = n(v, y, m)
            }

            function c() {
                var e = t(d, m),
                    r = !h(e, v);
                return v = e, r && (g = n(v, y, m)), g
            }

            function u(t, e) {
                var n = !p(e, m),
                    r = !l(t, d);
                return d = t, m = e, n && r ? s() : n ? a() : r ? c() : g
            }
            var l = o.areStatesEqual,
                p = o.areOwnPropsEqual,
                h = o.areStatePropsEqual,
                f = !1,
                d = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                g = void 0;
            return function(t, e) {
                return f ? u(t, e) : i(t, e)
            }
        }

        function s(t, e) {
            var n = e.initMapStateToProps,
                s = e.initMapDispatchToProps,
                a = e.initMergeProps,
                c = r(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
                u = n(t, c),
                l = s(t, c),
                p = a(t, c);
            return (c.pure ? i : o)(u, l, p, t, c)
        }
        e.a = s;
        n(360)
    }, function(t, e, n) {
        "use strict";
        n(78)
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            var t = [],
                e = [];
            return {
                clear: function() {
                    e = i, t = i
                },
                notify: function() {
                    for (var n = t = e, r = 0; r < n.length; r++) n[r]()
                },
                subscribe: function(n) {
                    var r = !0;
                    return e === t && (e = t.slice()), e.push(n),
                        function() {
                            r && t !== i && (r = !1, e === t && (e = t.slice()), e.splice(e.indexOf(n), 1))
                        }
                }
            }
        }
        n.d(e, "a", function() {
            return a
        });
        var i = null,
            s = {
                notify: function() {}
            },
            a = function() {
                function t(e, n, o) {
                    r(this, t), this.store = e, this.parentSub = n, this.onStateChange = o, this.unsubscribe = null, this.listeners = s
                }
                return t.prototype.addNestedSub = function(t) {
                    return this.trySubscribe(), this.listeners.subscribe(t)
                }, t.prototype.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, t.prototype.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, t.prototype.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = o())
                }, t.prototype.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = s)
                }, t
            }()
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t !== t && e !== e
        }

        function o(t, e) {
            if (r(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var s = 0; s < n.length; s++)
                if (!i.call(e, n[s]) || !r(t[n[s]], e[n[s]])) return !1;
            return !0
        }
        e.a = o;
        var i = Object.prototype.hasOwnProperty
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, function(t) {
                return e[t]
            })
        }

        function o(t) {
            var e = /(=0|=2)/g,
                n = {
                    "=0": "=",
                    "=2": ":"
                };
            return ("" + ("." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1))).replace(e, function(t) {
                return n[t]
            })
        }
        var i = {
            escape: r,
            unescape: o
        };
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(36),
            o = (n(1), function(t) {
                var e = this;
                if (e.instancePool.length) {
                    var n = e.instancePool.pop();
                    return e.call(n, t), n
                }
                return new e(t)
            }),
            i = function(t, e) {
                var n = this;
                if (n.instancePool.length) {
                    var r = n.instancePool.pop();
                    return n.call(r, t, e), r
                }
                return new n(t, e)
            },
            s = function(t, e, n) {
                var r = this;
                if (r.instancePool.length) {
                    var o = r.instancePool.pop();
                    return r.call(o, t, e, n), o
                }
                return new r(t, e, n)
            },
            a = function(t, e, n, r) {
                var o = this;
                if (o.instancePool.length) {
                    var i = o.instancePool.pop();
                    return o.call(i, t, e, n, r), i
                }
                return new o(t, e, n, r)
            },
            c = function(t) {
                var e = this;
                t instanceof e || r("25"), t.destructor(), e.instancePool.length < e.poolSize && e.instancePool.push(t)
            },
            u = o,
            l = function(t, e) {
                var n = t;
                return n.instancePool = [], n.getPooled = e || u, n.poolSize || (n.poolSize = 10), n.release = c, n
            },
            p = {
                addPoolingTo: l,
                oneArgumentPooler: o,
                twoArgumentPooler: i,
                threeArgumentPooler: s,
                fourArgumentPooler: a
            };
        t.exports = p
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return ("" + t).replace(_, "$&/")
        }

        function o(t, e) {
            this.func = t, this.context = e, this.count = 0
        }

        function i(t, e, n) {
            var r = t.func,
                o = t.context;
            r.call(o, e, t.count++)
        }

        function s(t, e, n) {
            if (null == t) return t;
            var r = o.getPooled(e, n);
            y(t, i, r), o.release(r)
        }

        function a(t, e, n, r) {
            this.result = t, this.keyPrefix = e, this.func = n, this.context = r, this.count = 0
        }

        function c(t, e, n) {
            var o = t.result,
                i = t.keyPrefix,
                s = t.func,
                a = t.context,
                c = s.call(a, e, t.count++);
            Array.isArray(c) ? u(c, o, n, v.thatReturnsArgument) : null != c && (m.isValidElement(c) && (c = m.cloneAndReplaceKey(c, i + (!c.key || e && e.key === c.key ? "" : r(c.key) + "/") + n)), o.push(c))
        }

        function u(t, e, n, o, i) {
            var s = "";
            null != n && (s = r(n) + "/");
            var u = a.getPooled(e, s, o, i);
            y(t, c, u), a.release(u)
        }

        function l(t, e, n) {
            if (null == t) return t;
            var r = [];
            return u(t, r, null, e, n), r
        }

        function p(t, e, n) {
            return null
        }

        function h(t, e) {
            return y(t, p, null)
        }

        function f(t) {
            var e = [];
            return u(t, e, null, v.thatReturnsArgument), e
        }
        var d = n(364),
            m = n(26),
            v = n(10),
            y = n(374),
            g = d.twoArgumentPooler,
            b = d.fourArgumentPooler,
            _ = /\/+/g;
        o.prototype.destructor = function() {
            this.func = null, this.context = null, this.count = 0
        }, d.addPoolingTo(o, g), a.prototype.destructor = function() {
            this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
        }, d.addPoolingTo(a, b);
        var C = {
            forEach: s,
            map: l,
            mapIntoWithKeyPrefixInternal: u,
            count: h,
            toArray: f
        };
        t.exports = C
    }, function(t, e, n) {
        "use strict";
        var r = n(26),
            o = r.createFactory,
            i = {
                a: o("a"),
                abbr: o("abbr"),
                address: o("address"),
                area: o("area"),
                article: o("article"),
                aside: o("aside"),
                audio: o("audio"),
                b: o("b"),
                base: o("base"),
                bdi: o("bdi"),
                bdo: o("bdo"),
                big: o("big"),
                blockquote: o("blockquote"),
                body: o("body"),
                br: o("br"),
                button: o("button"),
                canvas: o("canvas"),
                caption: o("caption"),
                cite: o("cite"),
                code: o("code"),
                col: o("col"),
                colgroup: o("colgroup"),
                data: o("data"),
                datalist: o("datalist"),
                dd: o("dd"),
                del: o("del"),
                details: o("details"),
                dfn: o("dfn"),
                dialog: o("dialog"),
                div: o("div"),
                dl: o("dl"),
                dt: o("dt"),
                em: o("em"),
                embed: o("embed"),
                fieldset: o("fieldset"),
                figcaption: o("figcaption"),
                figure: o("figure"),
                footer: o("footer"),
                form: o("form"),
                h1: o("h1"),
                h2: o("h2"),
                h3: o("h3"),
                h4: o("h4"),
                h5: o("h5"),
                h6: o("h6"),
                head: o("head"),
                header: o("header"),
                hgroup: o("hgroup"),
                hr: o("hr"),
                html: o("html"),
                i: o("i"),
                iframe: o("iframe"),
                img: o("img"),
                input: o("input"),
                ins: o("ins"),
                kbd: o("kbd"),
                keygen: o("keygen"),
                label: o("label"),
                legend: o("legend"),
                li: o("li"),
                link: o("link"),
                main: o("main"),
                map: o("map"),
                mark: o("mark"),
                menu: o("menu"),
                menuitem: o("menuitem"),
                meta: o("meta"),
                meter: o("meter"),
                nav: o("nav"),
                noscript: o("noscript"),
                object: o("object"),
                ol: o("ol"),
                optgroup: o("optgroup"),
                option: o("option"),
                output: o("output"),
                p: o("p"),
                param: o("param"),
                picture: o("picture"),
                pre: o("pre"),
                progress: o("progress"),
                q: o("q"),
                rp: o("rp"),
                rt: o("rt"),
                ruby: o("ruby"),
                s: o("s"),
                samp: o("samp"),
                script: o("script"),
                section: o("section"),
                select: o("select"),
                small: o("small"),
                source: o("source"),
                span: o("span"),
                strong: o("strong"),
                style: o("style"),
                sub: o("sub"),
                summary: o("summary"),
                sup: o("sup"),
                table: o("table"),
                tbody: o("tbody"),
                td: o("td"),
                textarea: o("textarea"),
                tfoot: o("tfoot"),
                th: o("th"),
                thead: o("thead"),
                time: o("time"),
                title: o("title"),
                tr: o("tr"),
                track: o("track"),
                u: o("u"),
                ul: o("ul"),
                var: o("var"),
                video: o("video"),
                wbr: o("wbr"),
                circle: o("circle"),
                clipPath: o("clipPath"),
                defs: o("defs"),
                ellipse: o("ellipse"),
                g: o("g"),
                image: o("image"),
                line: o("line"),
                linearGradient: o("linearGradient"),
                mask: o("mask"),
                path: o("path"),
                pattern: o("pattern"),
                polygon: o("polygon"),
                polyline: o("polyline"),
                radialGradient: o("radialGradient"),
                rect: o("rect"),
                stop: o("stop"),
                svg: o("svg"),
                text: o("text"),
                tspan: o("tspan")
            };
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(26),
            o = r.isValidElement,
            i = n(109);
        t.exports = i(o)
    }, function(t, e, n) {
        "use strict";
        t.exports = "15.6.1"
    }, function(t, e, n) {
        "use strict";
        var r = n(137),
            o = r.Component,
            i = n(26),
            s = i.isValidElement,
            a = n(140),
            c = n(207);
        t.exports = c(o, s, a)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t && (o && t[o] || t[i]);
            if ("function" == typeof e) return e
        }
        var o = "function" == typeof Symbol && Symbol.iterator,
            i = "@@iterator";
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r() {
            return o++
        }
        var o = 1;
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = function() {};
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return i.isValidElement(t) || o("143"), t
        }
        var o = n(36),
            i = n(26);
        n(1);
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t && "object" == typeof t && null != t.key ? u.escape(t.key) : e.toString(36)
        }

        function o(t, e, n, i) {
            var h = typeof t;
            if ("undefined" !== h && "boolean" !== h || (t = null), null === t || "string" === h || "number" === h || "object" === h && t.$$typeof === a) return n(i, t, "" === e ? l + r(t, 0) : e), 1;
            var f, d, m = 0,
                v = "" === e ? l : e + p;
            if (Array.isArray(t))
                for (var y = 0; y < t.length; y++) f = t[y], d = v + r(f, y), m += o(f, d, n, i);
            else {
                var g = c(t);
                if (g) {
                    var b, _ = g.call(t);
                    if (g !== t.entries)
                        for (var C = 0; !(b = _.next()).done;) f = b.value, d = v + r(f, C++), m += o(f, d, n, i);
                    else
                        for (; !(b = _.next()).done;) {
                            var w = b.value;
                            w && (f = w[1], d = v + u.escape(w[0]) + p + r(f, 0), m += o(f, d, n, i))
                        }
                } else if ("object" === h) {
                    var x = "",
                        k = String(t);
                    s("31", "[object Object]" === k ? "object with keys {" + Object.keys(t).join(", ") + "}" : k, x)
                }
            }
            return m
        }

        function i(t, e, n) {
            return null == t ? 0 : o(t, "", e, n)
        }
        var s = n(36),
            a = (n(15), n(139)),
            c = n(370),
            u = (n(1), n(363)),
            l = (n(3), "."),
            p = ":";
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.combineEpics = void 0;
        var o = n(159);
        e.combineEpics = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function() {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return o.merge.apply(void 0, r(e.map(function(t) {
                    var e = t.apply(void 0, n);
                    if (!e) throw new TypeError('combineEpics: one of the provided Epics "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                    return e
                })))
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                n = e.adapter,
                r = void 0 === n ? u : n;
            if ("function" != typeof t) throw new TypeError("You must provide a root Epic to createEpicMiddleware");
            var p = new o.Subject,
                h = r.input(new a.ActionsObservable(p)),
                f = new o.Subject,
                d = void 0,
                m = function(e) {
                    return d = e,
                        function(e) {
                            var n;
                            return (n = i.map.call(f, function(t) {
                                    var e = t(h, d);
                                    if (!e) throw new TypeError('Your root Epic "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                                    return e
                                }), s.switchMap).call(n, function(t) {
                                    return r.output(t)
                                }).subscribe(d.dispatch), f.next(t),
                                function(t) {
                                    var n = e(t);
                                    return p.next(t), n
                                }
                        }
                };
            return m.replaceEpic = function(t) {
                d.dispatch({
                    type: c.EPIC_END
                }), f.next(t)
            }, m
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.createEpicMiddleware = r;
        var o = n(27),
            i = n(80),
            s = n(428),
            a = n(142),
            c = n(143),
            u = {
                input: function(t) {
                    return t
                },
                output: function(t) {
                    return t
                }
            },
            l = {
                adapter: u
            }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(376);
        Object.defineProperty(e, "createEpicMiddleware", {
            enumerable: !0,
            get: function() {
                return r.createEpicMiddleware
            }
        });
        var o = n(142);
        Object.defineProperty(e, "ActionsObservable", {
            enumerable: !0,
            get: function() {
                return o.ActionsObservable
            }
        });
        var i = n(375);
        Object.defineProperty(e, "combineEpics", {
            enumerable: !0,
            get: function() {
                return i.combineEpics
            }
        });
        var s = n(143);
        Object.defineProperty(e, "EPIC_END", {
            enumerable: !0,
            get: function() {
                return s.EPIC_END
            }
        })
    }, function(t, e, n) {
        "use strict";

        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function(t) {
                return function(n, r, s) {
                    var a = t(n, r, s),
                        c = a.dispatch,
                        u = [],
                        l = {
                            getState: a.getState,
                            dispatch: function(t) {
                                return c(t)
                            }
                        };
                    return u = e.map(function(t) {
                        return t(l)
                    }), c = o.a.apply(void 0, u)(a.dispatch), i({}, a, {
                        dispatch: c
                    })
                }
            }
        }
        e.a = r;
        var o = n(144),
            i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }

        function o(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(t), o = {}, i = 0; i < n.length; i++) {
                var s = n[i],
                    a = t[s];
                "function" == typeof a && (o[s] = r(a, e))
            }
            return o
        }
        e.a = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = e && e.type;
            return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }

        function o(t) {
            Object.keys(t).forEach(function(e) {
                var n = t[e];
                if (void 0 === n(void 0, {
                        type: s.a.INIT
                    })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                if (void 0 === n(void 0, {
                        type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                    })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + s.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
            })
        }

        function i(t) {
            for (var e = Object.keys(t), n = {}, i = 0; i < e.length; i++) {
                var s = e[i];
                "function" == typeof t[s] && (n[s] = t[s])
            }
            var a = Object.keys(n),
                c = void 0;
            try {
                o(n)
            } catch (t) {
                c = t
            }
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                if (c) throw c;
                for (var o = !1, i = {}, s = 0; s < a.length; s++) {
                    var u = a[s],
                        l = n[u],
                        p = t[u],
                        h = l(p, e);
                    if (void 0 === h) {
                        var f = r(u, e);
                        throw new Error(f)
                    }
                    i[u] = h, o = o || h !== p
                }
                return o ? i : t
            }
        }
        e.a = i;
        var s = n(145);
        n(59), n(146)
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(27),
            i = n(19),
            s = function(t) {
                function e() {
                    t.apply(this, arguments), this.value = null, this.hasNext = !1, this.hasCompleted = !1
                }
                return r(e, t), e.prototype._subscribe = function(e) {
                    return this.hasError ? (e.error(this.thrownError), i.Subscription.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value), e.complete(), i.Subscription.EMPTY) : t.prototype._subscribe.call(this, e)
                }, e.prototype.next = function(t) {
                    this.hasCompleted || (this.value = t, this.hasNext = !0)
                }, e.prototype.error = function(e) {
                    this.hasCompleted || t.prototype.error.call(this, e)
                }, e.prototype.complete = function() {
                    this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this)
                }, e
            }(o.Subject);
        e.AsyncSubject = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(27),
            i = n(163),
            s = function(t) {
                function e(e) {
                    t.call(this), this._value = e
                }
                return r(e, t), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._subscribe = function(e) {
                    var n = t.prototype._subscribe.call(this, e);
                    return n && !n.closed && e.next(this._value), n
                }, e.prototype.getValue = function() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new i.ObjectUnsubscribedError;
                    return this._value
                }, e.prototype.next = function(e) {
                    t.prototype.next.call(this, this._value = e)
                }, e
            }(o.Subject);
        e.BehaviorSubject = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(8),
            i = function(t) {
                function e(e, n, r) {
                    t.call(this), this.parent = e, this.outerValue = n, this.outerIndex = r, this.index = 0
                }
                return r(e, t), e.prototype._next = function(t) {
                    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                }, e.prototype._error = function(t) {
                    this.parent.notifyError(t, this), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }, e
            }(o.Subscriber);
        e.InnerSubscriber = i
    }, function(t, e, n) {
        "use strict";
        var r = function() {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = Date.now ? Date.now : function() {
                return +new Date
            }, t
        }();
        e.Scheduler = r
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(19),
            i = function(t) {
                function e(e, n) {
                    t.call(this), this.subject = e, this.subscriber = n, this.closed = !1
                }
                return r(e, t), e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject,
                            e = t.observers;
                        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                            var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                        }
                    }
                }, e
            }(o.Subscription);
        e.SubjectSubscription = i
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(410);
        r.Observable.bindCallback = o.bindCallback
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(412);
        r.Observable.ajax = o.ajax
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(158);
        r.Observable.from = o.from
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(414);
        r.Observable.fromEvent = o.fromEvent
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(415);
        r.Observable.interval = o.interval
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(159);
        r.Observable.merge = o.merge
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(416);
        r.Observable.throw = o._throw
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(418);
        r.Observable.prototype.combineLatest = o.combineLatest
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(419);
        r.Observable.prototype.count = o.count
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(162);
        r.Observable.prototype.merge = o.merge
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(426);
        r.Observable.prototype.retryWhen = o.retryWhen
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(427);
        r.Observable.prototype.share = o.share
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(429);
        r.Observable.prototype.take = o.take
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(430);
        r.Observable.prototype.takeUntil = o.takeUntil
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(431);
        r.Observable.prototype.throttleTime = o.throttleTime
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = n(157),
            s = n(50),
            a = function(t) {
                function e(e, n) {
                    t.call(this), this.arrayLike = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0])
                }
                return r(e, t), e.create = function(t, n) {
                    var r = t.length;
                    return 0 === r ? new s.EmptyObservable : 1 === r ? new i.ScalarObservable(t[0], n) : new e(t, n)
                }, e.dispatch = function(t) {
                    var e = t.arrayLike,
                        n = t.index,
                        r = t.length,
                        o = t.subscriber;
                    if (!o.closed) {
                        if (n >= r) return void o.complete();
                        o.next(e[n]), t.index = n + 1, this.schedule(t)
                    }
                }, e.prototype._subscribe = function(t) {
                    var n = this,
                        r = n.arrayLike,
                        o = n.scheduler,
                        i = r.length;
                    if (o) return o.schedule(e.dispatch, 0, {
                        arrayLike: r,
                        index: 0,
                        length: i,
                        subscriber: t
                    });
                    for (var s = 0; s < i && !t.closed; s++) t.next(r[s]);
                    t.complete()
                }, e
            }(o.Observable);
        e.ArrayLikeObservable = a
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.value,
                n = t.subject;
            n.next(e), n.complete()
        }

        function o(t) {
            var e = t.err;
            t.subject.error(e)
        }
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            s = n(0),
            a = n(37),
            c = n(28),
            u = n(381),
            l = function(t) {
                function e(e, n, r, o, i) {
                    t.call(this), this.callbackFunc = e, this.selector = n, this.args = r, this.context = o, this.scheduler = i
                }
                return i(e, t), e.create = function(t, n, r) {
                    return void 0 === n && (n = void 0),
                        function() {
                            for (var o = [], i = 0; i < arguments.length; i++) o[i - 0] = arguments[i];
                            return new e(t, n, o, this, r)
                        }
                }, e.prototype._subscribe = function(t) {
                    var n = this.callbackFunc,
                        r = this.args,
                        o = this.scheduler,
                        i = this.subject;
                    if (o) return o.schedule(e.dispatch, 0, {
                        source: this,
                        subscriber: t,
                        context: this.context
                    });
                    if (!i) {
                        i = this.subject = new u.AsyncSubject;
                        var s = function t() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                            var r = t.source,
                                o = r.selector,
                                i = r.subject;
                            if (o) {
                                var s = a.tryCatch(o).apply(this, e);
                                s === c.errorObject ? i.error(c.errorObject.e) : (i.next(s), i.complete())
                            } else i.next(e.length <= 1 ? e[0] : e), i.complete()
                        };
                        s.source = this;
                        a.tryCatch(n).apply(this.context, r.concat(s)) === c.errorObject && i.error(c.errorObject.e)
                    }
                    return i.subscribe(t)
                }, e.dispatch = function(t) {
                    var e = this,
                        n = t.source,
                        i = t.subscriber,
                        s = t.context,
                        l = n.callbackFunc,
                        p = n.args,
                        h = n.scheduler,
                        f = n.subject;
                    if (!f) {
                        f = n.subject = new u.AsyncSubject;
                        var d = function t() {
                            for (var n = [], i = 0; i < arguments.length; i++) n[i - 0] = arguments[i];
                            var s = t.source,
                                u = s.selector,
                                l = s.subject;
                            if (u) {
                                var p = a.tryCatch(u).apply(this, n);
                                p === c.errorObject ? e.add(h.schedule(o, 0, {
                                    err: c.errorObject.e,
                                    subject: l
                                })) : e.add(h.schedule(r, 0, {
                                    value: p,
                                    subject: l
                                }))
                            } else {
                                var f = n.length <= 1 ? n[0] : n;
                                e.add(h.schedule(r, 0, {
                                    value: f,
                                    subject: l
                                }))
                            }
                        };
                        d.source = n;
                        a.tryCatch(l).apply(s, p.concat(d)) === c.errorObject && f.error(c.errorObject.e)
                    }
                    e.add(f.subscribe(i))
                }, e
            }(s.Observable);
        e.BoundCallbackObservable = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(27),
            i = n(0),
            s = n(8),
            a = n(19),
            c = function(t) {
                function e(e, n) {
                    t.call(this), this.source = e, this.subjectFactory = n, this._refCount = 0
                }
                return r(e, t), e.prototype._subscribe = function(t) {
                    return this.getSubject().subscribe(t)
                }, e.prototype.getSubject = function() {
                    var t = this._subject;
                    return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                }, e.prototype.connect = function() {
                    var t = this._connection;
                    return t || (t = this._connection = new a.Subscription, t.add(this.source.subscribe(new u(this.getSubject(), this))), t.closed ? (this._connection = null, t = a.Subscription.EMPTY) : this._connection = t), t
                }, e.prototype.refCount = function() {
                    return this.lift(new l(this))
                }, e
            }(i.Observable);
        e.ConnectableObservable = c, e.connectableObservableDescriptor = {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: c.prototype._subscribe
            },
            getSubject: {
                value: c.prototype.getSubject
            },
            connect: {
                value: c.prototype.connect
            },
            refCount: {
                value: c.prototype.refCount
            }
        };
        var u = function(t) {
                function e(e, n) {
                    t.call(this, e), this.connectable = n
                }
                return r(e, t), e.prototype._error = function(e) {
                    this._unsubscribe(), t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    this._unsubscribe(), t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._connection;
                        t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                    }
                }, e
            }(o.SubjectSubscriber),
            l = function() {
                function t(t) {
                    this.connectable = t
                }
                return t.prototype.call = function(t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new p(t, n),
                        o = e.subscribe(r);
                    return r.closed || (r.connection = n.connect()), o
                }, t
            }(),
            p = function(t) {
                function e(e, n) {
                    t.call(this, e), this.connectable = n
                }
                return r(e, t), e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (!t) return void(this.connection = null);
                    this.connectable = null;
                    var e = t._refCount;
                    if (e <= 0) return void(this.connection = null);
                    if (t._refCount = e - 1, e > 1) return void(this.connection = null);
                    var n = this.connection,
                        r = t._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                }, e
            }(s.Subscriber)
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(0),
            i = function(t) {
                function e(e, n) {
                    t.call(this), this.error = e, this.scheduler = n
                }
                return r(e, t), e.create = function(t, n) {
                    return new e(t, n)
                }, e.dispatch = function(t) {
                    var e = t.error;
                    t.subscriber.error(e)
                }, e.prototype._subscribe = function(t) {
                    var n = this.error,
                        r = this.scheduler;
                    if (r) return r.schedule(e.dispatch, 0, {
                        error: n,
                        subscriber: t
                    });
                    t.error(n)
                }, e
            }(o.Observable);
        e.ErrorObservable = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return !!t && "function" == typeof t.addListener && "function" == typeof t.removeListener
        }

        function o(t) {
            return !!t && "function" == typeof t.on && "function" == typeof t.off
        }

        function i(t) {
            return !!t && "[object NodeList]" === d.call(t)
        }

        function s(t) {
            return !!t && "[object HTMLCollection]" === d.call(t)
        }

        function a(t) {
            return !!t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
        }
        var c = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            u = n(0),
            l = n(37),
            p = n(85),
            h = n(28),
            f = n(19),
            d = Object.prototype.toString,
            m = function(t) {
                function e(e, n, r, o) {
                    t.call(this), this.sourceObj = e, this.eventName = n, this.selector = r, this.options = o
                }
                return c(e, t), e.create = function(t, n, r, o) {
                    return p.isFunction(r) && (o = r, r = void 0), new e(t, n, o, r)
                }, e.setupSubscription = function(t, n, c, u, l) {
                    var p;
                    if (i(t) || s(t))
                        for (var h = 0, d = t.length; h < d; h++) e.setupSubscription(t[h], n, c, u, l);
                    else if (a(t)) {
                        var m = t;
                        t.addEventListener(n, c, l), p = function() {
                            return m.removeEventListener(n, c)
                        }
                    } else if (o(t)) {
                        var v = t;
                        t.on(n, c), p = function() {
                            return v.off(n, c)
                        }
                    } else {
                        if (!r(t)) throw new TypeError("Invalid event target");
                        var y = t;
                        t.addListener(n, c), p = function() {
                            return y.removeListener(n, c)
                        }
                    }
                    u.add(new f.Subscription(p))
                }, e.prototype._subscribe = function(t) {
                    var n = this.sourceObj,
                        r = this.eventName,
                        o = this.options,
                        i = this.selector,
                        s = i ? function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                            var r = l.tryCatch(i).apply(void 0, e);
                            r === h.errorObject ? t.error(h.errorObject.e) : t.next(r)
                        } : function(e) {
                            return t.next(e)
                        };
                    e.setupSubscription(n, r, s, t, o)
                }, e
            }(u.Observable);
        e.FromEventObservable = m
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(51),
            i = n(164),
            s = n(166),
            a = n(409),
            c = n(408),
            u = n(49),
            l = n(401),
            p = n(82),
            h = n(0),
            f = n(425),
            d = n(83),
            m = function(t) {
                function e(e, n) {
                    t.call(this, null), this.ish = e, this.scheduler = n
                }
                return r(e, t), e.create = function(t, n) {
                    if (null != t) {
                        if ("function" == typeof t[d.observable]) return t instanceof h.Observable && !n ? t : new e(t, n);
                        if (o.isArray(t)) return new u.ArrayObservable(t, n);
                        if (s.isPromise(t)) return new a.PromiseObservable(t, n);
                        if ("function" == typeof t[p.iterator] || "string" == typeof t) return new c.IteratorObservable(t, n);
                        if (i.isArrayLike(t)) return new l.ArrayLikeObservable(t, n)
                    }
                    throw new TypeError((null !== t && typeof t || t) + " is not observable")
                }, e.prototype._subscribe = function(t) {
                    var e = this.ish,
                        n = this.scheduler;
                    return null == n ? e[d.observable]().subscribe(t) : e[d.observable]().subscribe(new f.ObserveOnSubscriber(t, n, 0))
                }, e
            }(h.Observable);
        e.FromObservable = m
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(438),
            i = n(0),
            s = n(81),
            a = function(t) {
                function e(e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = s.async), t.call(this), this.period = e, this.scheduler = n, (!o.isNumeric(e) || e < 0) && (this.period = 0), n && "function" == typeof n.schedule || (this.scheduler = s.async)
                }
                return r(e, t), e.create = function(t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = s.async), new e(t, n)
                }, e.dispatch = function(t) {
                    var e = t.index,
                        n = t.subscriber,
                        r = t.period;
                    n.next(e), n.closed || (t.index += 1, this.schedule(t, r))
                }, e.prototype._subscribe = function(t) {
                    var n = this.period,
                        r = this.scheduler;
                    t.add(r.schedule(e.dispatch, n, {
                        index: 0,
                        subscriber: t,
                        period: n
                    }))
                }, e
            }(i.Observable);
        e.IntervalObservable = a
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t[l.iterator];
            if (!e && "string" == typeof t) return new h(t);
            if (!e && void 0 !== t.length) return new f(t);
            if (!e) throw new TypeError("object is not iterable");
            return t[l.iterator]()
        }

        function o(t) {
            var e = +t.length;
            return isNaN(e) ? 0 : 0 !== e && i(e) ? (e = s(e) * Math.floor(Math.abs(e)), e <= 0 ? 0 : e > d ? d : e) : e
        }

        function i(t) {
            return "number" == typeof t && c.root.isFinite(t)
        }

        function s(t) {
            var e = +t;
            return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1
        }
        var a = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            c = n(16),
            u = n(0),
            l = n(82),
            p = function(t) {
                function e(e, n) {
                    if (t.call(this), this.scheduler = n, null == e) throw new Error("iterator cannot be null.");
                    this.iterator = r(e)
                }
                return a(e, t), e.create = function(t, n) {
                    return new e(t, n)
                }, e.dispatch = function(t) {
                    var e = t.index,
                        n = t.hasError,
                        r = t.iterator,
                        o = t.subscriber;
                    if (n) return void o.error(t.error);
                    var i = r.next();
                    return i.done ? void o.complete() : (o.next(i.value), t.index = e + 1, o.closed ? void("function" == typeof r.return && r.return()) : void this.schedule(t))
                }, e.prototype._subscribe = function(t) {
                    var n = this,
                        r = n.iterator,
                        o = n.scheduler;
                    if (o) return o.schedule(e.dispatch, 0, {
                        index: 0,
                        iterator: r,
                        subscriber: t
                    });
                    for (;;) {
                        var i = r.next();
                        if (i.done) {
                            t.complete();
                            break
                        }
                        if (t.next(i.value), t.closed) {
                            "function" == typeof r.return && r.return();
                            break
                        }
                    }
                }, e
            }(u.Observable);
        e.IteratorObservable = p;
        var h = function() {
                function t(t, e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = t.length), this.str = t, this.idx = e, this.len = n
                }
                return t.prototype[l.iterator] = function() {
                    return this
                }, t.prototype.next = function() {
                    return this.idx < this.len ? {
                        done: !1,
                        value: this.str.charAt(this.idx++)
                    } : {
                        done: !0,
                        value: void 0
                    }
                }, t
            }(),
            f = function() {
                function t(t, e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = o(t)), this.arr = t, this.idx = e, this.len = n
                }
                return t.prototype[l.iterator] = function() {
                    return this
                }, t.prototype.next = function() {
                    return this.idx < this.len ? {
                        done: !1,
                        value: this.arr[this.idx++]
                    } : {
                        done: !0,
                        value: void 0
                    }
                }, t
            }(),
            d = Math.pow(2, 53) - 1
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.value,
                n = t.subscriber;
            n.closed || (n.next(e), n.complete())
        }

        function o(t) {
            var e = t.err,
                n = t.subscriber;
            n.closed || n.error(e)
        }
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            s = n(16),
            a = n(0),
            c = function(t) {
                function e(e, n) {
                    t.call(this), this.promise = e, this.scheduler = n
                }
                return i(e, t), e.create = function(t, n) {
                    return new e(t, n)
                }, e.prototype._subscribe = function(t) {
                    var e = this,
                        n = this.promise,
                        i = this.scheduler;
                    if (null == i) this._isScalar ? t.closed || (t.next(this.value), t.complete()) : n.then(function(n) {
                        e.value = n, e._isScalar = !0, t.closed || (t.next(n), t.complete())
                    }, function(e) {
                        t.closed || t.error(e)
                    }).then(null, function(t) {
                        s.root.setTimeout(function() {
                            throw t
                        })
                    });
                    else if (this._isScalar) {
                        if (!t.closed) return i.schedule(r, 0, {
                            value: this.value,
                            subscriber: t
                        })
                    } else n.then(function(n) {
                        e.value = n, e._isScalar = !0, t.closed || t.add(i.schedule(r, 0, {
                            value: n,
                            subscriber: t
                        }))
                    }, function(e) {
                        t.closed || t.add(i.schedule(o, 0, {
                            err: e,
                            subscriber: t
                        }))
                    }).then(null, function(t) {
                        s.root.setTimeout(function() {
                            throw t
                        })
                    })
                }, e
            }(a.Observable);
        e.PromiseObservable = c
    }, function(t, e, n) {
        "use strict";
        var r = n(402);
        e.bindCallback = r.BoundCallbackObservable.create
    }, function(t, e, n) {
        "use strict";

        function r() {
            if (h.root.XMLHttpRequest) return new h.root.XMLHttpRequest;
            if (h.root.XDomainRequest) return new h.root.XDomainRequest;
            throw new Error("CORS is not supported by your browser")
        }

        function o() {
            if (h.root.XMLHttpRequest) return new h.root.XMLHttpRequest;
            var t = void 0;
            try {
                for (var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], n = 0; n < 3; n++) try {
                    if (t = e[n], new h.root.ActiveXObject(t)) break
                } catch (t) {}
                return new h.root.ActiveXObject(t)
            } catch (t) {
                throw new Error("XMLHttpRequest is not supported by your browser")
            }
        }

        function i(t, e) {
            return void 0 === e && (e = null), new g({
                method: "GET",
                url: t,
                headers: e
            })
        }

        function s(t, e, n) {
            return new g({
                method: "POST",
                url: t,
                body: e,
                headers: n
            })
        }

        function a(t, e) {
            return new g({
                method: "DELETE",
                url: t,
                headers: e
            })
        }

        function c(t, e, n) {
            return new g({
                method: "PUT",
                url: t,
                body: e,
                headers: n
            })
        }

        function u(t, e, n) {
            return new g({
                method: "PATCH",
                url: t,
                body: e,
                headers: n
            })
        }

        function l(t, e) {
            return new g({
                method: "GET",
                url: t,
                responseType: "json",
                headers: e
            }).lift(new y.MapOperator(function(t, e) {
                return t.response
            }, null))
        }
        var p = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            h = n(16),
            f = n(37),
            d = n(28),
            m = n(0),
            v = n(8),
            y = n(80);
        e.ajaxGet = i, e.ajaxPost = s, e.ajaxDelete = a, e.ajaxPut = c, e.ajaxPatch = u, e.ajaxGetJSON = l;
        var g = function(t) {
            function e(e) {
                t.call(this);
                var n = {
                    async: !0,
                    createXHR: function() {
                        return this.crossDomain ? r.call(this) : o()
                    },
                    crossDomain: !1,
                    withCredentials: !1,
                    headers: {},
                    method: "GET",
                    responseType: "json",
                    timeout: 0
                };
                if ("string" == typeof e) n.url = e;
                else
                    for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                this.request = n
            }
            return p(e, t), e.prototype._subscribe = function(t) {
                return new b(t, this.request)
            }, e.create = function() {
                var t = function(t) {
                    return new e(t)
                };
                return t.get = i, t.post = s, t.delete = a, t.put = c, t.patch = u, t.getJSON = l, t
            }(), e
        }(m.Observable);
        e.AjaxObservable = g;
        var b = function(t) {
            function e(e, n) {
                t.call(this, e), this.request = n, this.done = !1;
                var r = n.headers = n.headers || {};
                n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), "Content-Type" in r || h.root.FormData && n.body instanceof h.root.FormData || void 0 === n.body || (r["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), n.body = this.serializeBody(n.body, n.headers["Content-Type"]), this.send()
            }
            return p(e, t), e.prototype.next = function(t) {
                this.done = !0;
                var e = this,
                    n = e.xhr,
                    r = e.request,
                    o = e.destination,
                    i = new _(t, n, r);
                o.next(i)
            }, e.prototype.send = function() {
                var t = this,
                    e = t.request,
                    n = t.request,
                    r = n.user,
                    o = n.method,
                    i = n.url,
                    s = n.async,
                    a = n.password,
                    c = n.headers,
                    u = n.body,
                    l = e.createXHR,
                    p = f.tryCatch(l).call(e);
                if (p === d.errorObject) this.error(d.errorObject.e);
                else {
                    this.xhr = p, this.setupEvents(p, e);
                    if ((r ? f.tryCatch(p.open).call(p, o, i, s, r, a) : f.tryCatch(p.open).call(p, o, i, s)) === d.errorObject) return this.error(d.errorObject.e), null;
                    if (p.timeout = e.timeout, p.responseType = e.responseType, "withCredentials" in p && (p.withCredentials = !!e.withCredentials), this.setHeaders(p, c), (u ? f.tryCatch(p.send).call(p, u) : f.tryCatch(p.send).call(p)) === d.errorObject) return this.error(d.errorObject.e), null
                }
                return p
            }, e.prototype.serializeBody = function(t, e) {
                if (!t || "string" == typeof t) return t;
                if (h.root.FormData && t instanceof h.root.FormData) return t;
                if (e) {
                    var n = e.indexOf(";"); - 1 !== n && (e = e.substring(0, n))
                }
                switch (e) {
                    case "application/x-www-form-urlencoded":
                        return Object.keys(t).map(function(e) {
                            return encodeURI(e) + "=" + encodeURI(t[e])
                        }).join("&");
                    case "application/json":
                        return JSON.stringify(t);
                    default:
                        return t
                }
            }, e.prototype.setHeaders = function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && t.setRequestHeader(n, e[n])
            }, e.prototype.setupEvents = function(t, e) {
                function n(t) {
                    var e = n,
                        r = e.subscriber,
                        o = e.progressSubscriber,
                        i = e.request;
                    o && o.error(t), r.error(new w(this, i))
                }

                function r(t) {
                    var e = r,
                        n = e.subscriber,
                        o = e.progressSubscriber,
                        i = e.request;
                    if (4 === this.readyState) {
                        var s = 1223 === this.status ? 204 : this.status,
                            a = "text" === this.responseType ? this.response || this.responseText : this.response;
                        0 === s && (s = a ? 200 : 0), 200 <= s && s < 300 ? (o && o.complete(), n.next(t), n.complete()) : (o && o.error(t), n.error(new C("ajax error " + s, this, i)))
                    }
                }
                var o = e.progressSubscriber;
                if (t.ontimeout = n, n.request = e, n.subscriber = this, n.progressSubscriber = o, t.upload && "withCredentials" in t) {
                    if (o) {
                        var i;
                        i = function(t) {
                            i.progressSubscriber.next(t)
                        }, h.root.XDomainRequest ? t.onprogress = i : t.upload.onprogress = i, i.progressSubscriber = o
                    }
                    var s;
                    s = function(t) {
                        var e = s,
                            n = e.progressSubscriber,
                            r = e.subscriber,
                            o = e.request;
                        n && n.error(t), r.error(new C("ajax error", this, o))
                    }, t.onerror = s, s.request = e, s.subscriber = this, s.progressSubscriber = o
                }
                t.onreadystatechange = r, r.subscriber = this, r.progressSubscriber = o, r.request = e
            }, e.prototype.unsubscribe = function() {
                var e = this,
                    n = e.done,
                    r = e.xhr;
                !n && r && 4 !== r.readyState && "function" == typeof r.abort && r.abort(), t.prototype.unsubscribe.call(this)
            }, e
        }(v.Subscriber);
        e.AjaxSubscriber = b;
        var _ = function() {
            function t(t, e, n) {
                switch (this.originalEvent = t, this.xhr = e, this.request = n, this.status = e.status, this.responseType = e.responseType || n.responseType, this.responseType) {
                    case "json":
                        this.response = "response" in e ? e.responseType ? e.response : JSON.parse(e.response || e.responseText || "null") : JSON.parse(e.responseText || "null");
                        break;
                    case "xml":
                        this.response = e.responseXML;
                        break;
                    case "text":
                    default:
                        this.response = "response" in e ? e.response : e.responseText
                }
            }
            return t
        }();
        e.AjaxResponse = _;
        var C = function(t) {
            function e(e, n, r) {
                t.call(this, e), this.message = e, this.xhr = n, this.request = r, this.status = n.status
            }
            return p(e, t), e
        }(Error);
        e.AjaxError = C;
        var w = function(t) {
            function e(e, n) {
                t.call(this, "ajax timeout", e, n)
            }
            return p(e, t), e
        }(C);
        e.AjaxTimeoutError = w
    }, function(t, e, n) {
        "use strict";
        var r = n(411);
        e.ajax = r.AjaxObservable.create
    }, function(t, e, n) {
        "use strict";
        var r = n(50);
        e.empty = r.EmptyObservable.create
    }, function(t, e, n) {
        "use strict";
        var r = n(405);
        e.fromEvent = r.FromEventObservable.create
    }, function(t, e, n) {
        "use strict";
        var r = n(407);
        e.interval = r.IntervalObservable.create
    }, function(t, e, n) {
        "use strict";
        var r = n(404);
        e._throw = r.ErrorObservable.create
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = new a(t),
                n = this.lift(e);
            return e.caught = n
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(18),
            s = n(20);
        e._catch = r;
        var a = function() {
                function t(t) {
                    this.selector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.selector, this.caught))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.selector = n, this.caught = r
                }
                return o(e, t), e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = void 0;
                        try {
                            n = this.selector(e, this.caught)
                        } catch (e) {
                            return void t.prototype.error.call(this, e)
                        }
                        this._unsubscribeAndRecycle(), this.add(s.subscribeToResult(this, n))
                    }
                }, e
            }(i.OuterSubscriber)
    }, function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
            var n = null;
            return "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && s.isArray(t[0]) && (t = t[0].slice()), t.unshift(this), this.lift.call(new i.ArrayObservable(t), new l(n))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(49),
            s = n(51),
            a = n(18),
            c = n(20),
            u = {};
        e.combineLatest = r;
        var l = function() {
            function t(t) {
                this.project = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new p(t, this.project))
            }, t
        }();
        e.CombineLatestOperator = l;
        var p = function(t) {
            function e(e, n) {
                t.call(this, e), this.project = n, this.active = 0, this.values = [], this.observables = []
            }
            return o(e, t), e.prototype._next = function(t) {
                this.values.push(u), this.observables.push(t)
            }, e.prototype._complete = function() {
                var t = this.observables,
                    e = t.length;
                if (0 === e) this.destination.complete();
                else {
                    this.active = e, this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(c.subscribeToResult(this, r, r, n))
                    }
                }
            }, e.prototype.notifyComplete = function(t) {
                0 == (this.active -= 1) && this.destination.complete()
            }, e.prototype.notifyNext = function(t, e, n, r, o) {
                var i = this.values,
                    s = i[n],
                    a = this.toRespond ? s === u ? --this.toRespond : this.toRespond : 0;
                i[n] = e, 0 === a && (this.project ? this._tryProject(i) : this.destination.next(i.slice()))
            }, e.prototype._tryProject = function(t) {
                var e;
                try {
                    e = this.project.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(a.OuterSubscriber);
        e.CombineLatestSubscriber = p
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return this.lift(new s(t, this))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8);
        e.count = r;
        var s = function() {
                function t(t, e) {
                    this.predicate = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new a(t, this.predicate, this.source))
                }, t
            }(),
            a = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.predicate = n, this.source = r, this.count = 0, this.index = 0
                }
                return o(e, t), e.prototype._next = function(t) {
                    this.predicate ? this._tryPredicate(t) : this.count++
                }, e.prototype._tryPredicate = function(t) {
                    var e;
                    try {
                        e = this.predicate(t, this.index++, this.source)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e && this.count++
                }, e.prototype._complete = function() {
                    this.destination.next(this.count), this.destination.complete()
                }, e
            }(i.Subscriber)
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            void 0 === e && (e = i.async);
            var n = s.isDate(t),
                r = n ? +t - e.now() : Math.abs(t);
            return this.lift(new u(r, e))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(81),
            s = n(437),
            a = n(8),
            c = n(147);
        e.delay = r;
        var u = function() {
                function t(t, e) {
                    this.delay = t, this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.delay, this.scheduler))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.delay = n, this.scheduler = r, this.queue = [], this.active = !1, this.errored = !1
                }
                return o(e, t), e.dispatch = function(t) {
                    for (var e = t.source, n = e.queue, r = t.scheduler, o = t.destination; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(o);
                    if (n.length > 0) {
                        var i = Math.max(0, n[0].time - r.now());
                        this.schedule(t, i)
                    } else e.active = !1
                }, e.prototype._schedule = function(t) {
                    this.active = !0, this.add(t.schedule(e.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: t
                    }))
                }, e.prototype.scheduleNotification = function(t) {
                    if (!0 !== this.errored) {
                        var e = this.scheduler,
                            n = new p(e.now() + this.delay, t);
                        this.queue.push(n), !1 === this.active && this._schedule(e)
                    }
                }, e.prototype._next = function(t) {
                    this.scheduleNotification(c.Notification.createNext(t))
                }, e.prototype._error = function(t) {
                    this.errored = !0, this.queue = [], this.destination.error(t)
                }, e.prototype._complete = function() {
                    this.scheduleNotification(c.Notification.createComplete())
                }, e
            }(a.Subscriber),
            p = function() {
                function t(t, e) {
                    this.time = t, this.notification = e
                }
                return t
            }()
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return this.lift(new s(t, e, n))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8);
        e._do = r;
        var s = function() {
                function t(t, e, n) {
                    this.nextOrObserver = t, this.error = e, this.complete = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new a(t, this.nextOrObserver, this.error, this.complete))
                }, t
            }(),
            a = function(t) {
                function e(e, n, r, o) {
                    t.call(this, e);
                    var s = new i.Subscriber(n, r, o);
                    s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s
                }
                return o(e, t), e.prototype._next = function(t) {
                    var e = this.safeSubscriber;
                    e.next(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.next(t)
                }, e.prototype._error = function(t) {
                    var e = this.safeSubscriber;
                    e.error(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.error(t)
                }, e.prototype._complete = function() {
                    var t = this.safeSubscriber;
                    t.complete(), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.complete()
                }, e
            }(i.Subscriber)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), this.lift(new a(t))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(18),
            s = n(20);
        e.mergeAll = r;
        var a = function() {
            function t(t) {
                this.concurrent = t
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.concurrent))
            }, t
        }();
        e.MergeAllOperator = a;
        var c = function(t) {
            function e(e, n) {
                t.call(this, e), this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0
            }
            return o(e, t), e.prototype._next = function(t) {
                this.active < this.concurrent ? (this.active++, this.add(s.subscribeToResult(this, t))) : this.buffer.push(t)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(i.OuterSubscriber);
        e.MergeAllSubscriber = c
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "number" == typeof e && (n = e, e = null), this.lift(new a(t, e, n))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(20),
            s = n(18);
        e.mergeMap = r;
        var a = function() {
            function t(t, e, n) {
                void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.resultSelector = e, this.concurrent = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.project, this.resultSelector, this.concurrent))
            }, t
        }();
        e.MergeMapOperator = a;
        var c = function(t) {
            function e(e, n, r, o) {
                void 0 === o && (o = Number.POSITIVE_INFINITY), t.call(this, e), this.project = n, this.resultSelector = r, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
            }
            return o(e, t), e.prototype._next = function(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function(t, e, n) {
                this.add(i.subscribeToResult(this, t, e, n))
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
            }, e.prototype.notifyNext = function(t, e, n, r, o) {
                this.resultSelector ? this._notifyResultSelector(t, e, n, r) : this.destination.next(e)
            }, e.prototype._notifyResultSelector = function(t, e, n, r) {
                var o;
                try {
                    o = this.resultSelector(t, e, n, r)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(o)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(s.OuterSubscriber);
        e.MergeMapSubscriber = c
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n;
            if (n = "function" == typeof t ? t : function() {
                    return t
                }, "function" == typeof e) return this.lift(new i(n, e));
            var r = Object.create(this, o.connectableObservableDescriptor);
            return r.source = this, r.subjectFactory = n, r
        }
        var o = n(403);
        e.multicast = r;
        var i = function() {
            function t(t, e) {
                this.subjectFactory = t, this.selector = e
            }
            return t.prototype.call = function(t, e) {
                var n = this.selector,
                    r = this.subjectFactory(),
                    o = n(r).subscribe(t);
                return o.add(e.subscribe(r)), o
            }, t
        }();
        e.MulticastOperator = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = 0), this.lift(new a(t, e))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8),
            s = n(147);
        e.observeOn = r;
        var a = function() {
            function t(t, e) {
                void 0 === e && (e = 0), this.scheduler = t, this.delay = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.scheduler, this.delay))
            }, t
        }();
        e.ObserveOnOperator = a;
        var c = function(t) {
            function e(e, n, r) {
                void 0 === r && (r = 0), t.call(this, e), this.scheduler = n, this.delay = r
            }
            return o(e, t), e.dispatch = function(t) {
                var e = t.notification,
                    n = t.destination;
                e.observe(n), this.unsubscribe()
            }, e.prototype.scheduleMessage = function(t) {
                this.add(this.scheduler.schedule(e.dispatch, this.delay, new u(t, this.destination)))
            }, e.prototype._next = function(t) {
                this.scheduleMessage(s.Notification.createNext(t))
            }, e.prototype._error = function(t) {
                this.scheduleMessage(s.Notification.createError(t))
            }, e.prototype._complete = function() {
                this.scheduleMessage(s.Notification.createComplete())
            }, e
        }(i.Subscriber);
        e.ObserveOnSubscriber = c;
        var u = function() {
            function t(t, e) {
                this.notification = t, this.destination = e
            }
            return t
        }();
        e.ObserveOnMessage = u
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return this.lift(new l(t, this))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(27),
            s = n(37),
            a = n(28),
            c = n(18),
            u = n(20);
        e.retryWhen = r;
        var l = function() {
                function t(t, e) {
                    this.notifier = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new p(t, this.notifier, this.source))
                }, t
            }(),
            p = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.notifier = n, this.source = r
                }
                return o(e, t), e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = this.errors,
                            r = this.retries,
                            o = this.retriesSubscription;
                        if (r) this.errors = null, this.retriesSubscription = null;
                        else {
                            if (n = new i.Subject, (r = s.tryCatch(this.notifier)(n)) === a.errorObject) return t.prototype.error.call(this, a.errorObject.e);
                            o = u.subscribeToResult(this, r)
                        }
                        this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = o, n.next(e)
                    }
                }, e.prototype._unsubscribe = function() {
                    var t = this,
                        e = t.errors,
                        n = t.retriesSubscription;
                    e && (e.unsubscribe(), this.errors = null), n && (n.unsubscribe(), this.retriesSubscription = null), this.retries = null
                }, e.prototype.notifyNext = function(t, e, n, r, o) {
                    var i = this,
                        s = i.errors,
                        a = i.retries,
                        c = i.retriesSubscription;
                    this.errors = null, this.retries = null, this.retriesSubscription = null, this._unsubscribeAndRecycle(), this.errors = s, this.retries = a, this.retriesSubscription = c, this.source.subscribe(this)
                }, e
            }(c.OuterSubscriber)
    }, function(t, e, n) {
        "use strict";

        function r() {
            return new s.Subject
        }

        function o() {
            return i.multicast.call(this, r).refCount()
        }
        var i = n(424),
            s = n(27);
        e.share = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return this.lift(new a(t, e))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(18),
            s = n(20);
        e.switchMap = r;
        var a = function() {
                function t(t, e) {
                    this.project = t, this.resultSelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.project, this.resultSelector))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.project = n, this.resultSelector = r, this.index = 0
                }
                return o(e, t), e.prototype._next = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this._innerSub(e, t, n)
                }, e.prototype._innerSub = function(t, e, n) {
                    var r = this.innerSubscription;
                    r && r.unsubscribe(), this.add(this.innerSubscription = s.subscribeToResult(this, t, e, n))
                }, e.prototype._complete = function() {
                    var e = this.innerSubscription;
                    e && !e.closed || t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    this.innerSubscription = null
                }, e.prototype.notifyComplete = function(e) {
                    this.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
                }, e.prototype.notifyNext = function(t, e, n, r, o) {
                    this.resultSelector ? this._tryNotifyNext(t, e, n, r) : this.destination.next(e)
                }, e.prototype._tryNotifyNext = function(t, e, n, r) {
                    var o;
                    try {
                        o = this.resultSelector(t, e, n, r)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(o)
                }, e
            }(i.OuterSubscriber)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return 0 === t ? new a.EmptyObservable : this.lift(new c(t))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(8),
            s = n(435),
            a = n(50);
        e.take = r;
        var c = function() {
                function t(t) {
                    if (this.total = t, this.total < 0) throw new s.ArgumentOutOfRangeError
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.total))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    t.call(this, e), this.total = n, this.count = 0
                }
                return o(e, t), e.prototype._next = function(t) {
                    var e = this.total,
                        n = ++this.count;
                    n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                }, e
            }(i.Subscriber)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return this.lift(new a(t))
        }
        var o = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = n(18),
            s = n(20);
        e.takeUntil = r;
        var a = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.notifier))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    t.call(this, e), this.notifier = n, this.add(s.subscribeToResult(this, n))
                }
                return o(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
                    this.complete()
                }, e.prototype.notifyComplete = function() {}, e
            }(i.OuterSubscriber)
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = a.async), this.lift(new c(t, e))
        }

        function o(t) {
            t.subscriber.clearThrottle()
        }
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            s = n(8),
            a = n(81);
        e.throttleTime = r;
        var c = function() {
                function t(t, e) {
                    this.duration = t, this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.duration, this.scheduler))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    t.call(this, e), this.duration = n, this.scheduler = r
                }
                return i(e, t), e.prototype._next = function(t) {
                    this.throttled || (this.add(this.throttled = this.scheduler.schedule(o, this.duration, {
                        subscriber: this
                    })), this.destination.next(t))
                }, e.prototype.clearThrottle = function() {
                    var t = this.throttled;
                    t && (t.unsubscribe(), this.remove(t), this.throttled = null)
                }, e
            }(s.Subscriber)
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(19),
            i = function(t) {
                function e(e, n) {
                    t.call(this)
                }
                return r(e, t), e.prototype.schedule = function(t, e) {
                    return void 0 === e && (e = 0), this
                }, e
            }(o.Subscription);
        e.Action = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(16),
            i = n(432),
            s = function(t) {
                function e(e, n) {
                    t.call(this, e, n), this.scheduler = e, this.work = n, this.pending = !1
                }
                return r(e, t), e.prototype.schedule = function(t, e) {
                    if (void 0 === e && (e = 0), this.closed) return this;
                    this.state = t, this.pending = !0;
                    var n = this.id,
                        r = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                }, e.prototype.requestAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0), o.root.setInterval(t.flush.bind(t, this), n)
                }, e.prototype.recycleAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending ? e : o.root.clearInterval(e) && void 0 || void 0
                }, e.prototype.execute = function(t, e) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    var n = this._execute(t, e);
                    if (n) return n;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }, e.prototype._execute = function(t, e) {
                    var n = !1,
                        r = void 0;
                    try {
                        this.work(t)
                    } catch (t) {
                        n = !0, r = !!t && t || new Error(t)
                    }
                    if (n) return this.unsubscribe(), r
                }, e.prototype._unsubscribe = function() {
                    var t = this.id,
                        e = this.scheduler,
                        n = e.actions,
                        r = n.indexOf(this);
                    this.work = null, this.delay = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null))
                }, e
            }(i.Action);
        e.AsyncAction = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(384),
            i = function(t) {
                function e() {
                    t.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                return r(e, t), e.prototype.flush = function(t) {
                    var e = this.actions;
                    if (this.active) return void e.push(t);
                    var n;
                    this.active = !0;
                    do {
                        if (n = t.execute(t.state, t.delay)) break
                    } while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }, e
            }(o.Scheduler);
        e.AsyncScheduler = i
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = function(t) {
                function e() {
                    var e = t.call(this, "argument out of range");
                    this.name = e.name = "ArgumentOutOfRangeError", this.stack = e.stack, this.message = e.message
                }
                return r(e, t), e
            }(Error);
        e.ArgumentOutOfRangeError = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = function(t) {
                function e(e) {
                    t.call(this), this.errors = e;
                    var n = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function(t, e) {
                        return e + 1 + ") " + t.toString()
                    }).join("\n  ") : "");
                    this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message
                }
                return r(e, t), e
            }(Error);
        e.UnsubscriptionError = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t instanceof Date && !isNaN(+t)
        }
        e.isDate = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return !o.isArray(t) && t - parseFloat(t) + 1 >= 0
        }
        var o = n(51);
        e.isNumeric = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            if (t) {
                if (t instanceof o.Subscriber) return t;
                if (t[i.rxSubscriber]) return t[i.rxSubscriber]()
            }
            return t || e || n ? new o.Subscriber(t, e, n) : new o.Subscriber(s.empty)
        }
        var o = n(8),
            i = n(84),
            s = n(148);
        e.toSubscriber = r
    }, function(t, e, n) {
        t.exports = n(441)
    }, function(t, e, n) {
        "use strict";
        (function(t, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o, i = n(442),
                s = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i);
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = (0, s.default)(o);
            e.default = a
        }).call(e, n(38), n(171)(t))
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r
    }, function(t, e) {
        t.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
    }, function(t, e, n) {
        "use strict";
        e.Any = n(170), e.Cc = n(168), e.Cf = n(443), e.P = n(86), e.Z = n(169)
    }])
}); /* custom Miracle JS/css */ //Miracle's Bot Plugin Library.
"use strict";
(function($) {
    $("<div id='bot'></div>").appendTo("body");
    platformResolver();
    $.fn.initChatBot = function(options) {
        var settings = $.extend({
            // Dev-release key and secret
            secret: "hJgbNyPB_Y0.9MOKYckuaOXDw878WmOWnJnkVQ-LbXNPXmb0dkMXITI",
            botId: "f51294f1-5939-4677-a12a-2bef3e2a8a9a",
            //
            user: {
                id: 'schonkar@miraclesoft.com',
                name: 'Shrikar C'
            },
            //user's chatBubble
            myChatBg: "#0078D7",
            myChatColor: "#fff",
            //bot's chatBubble
            botChatBg: "#ddd",
            botChatcolor: "#333",
            //header properties
            headerBg: "#00aae7",
            headerColor: "#79BEE9",
            headerBgCollapsed: "#00aae7",
            headerColorCollapsed: "#fff",
            //font of the chatbox
            font: "inherit",
            //text of the header
            headerText: "<div style='font-size: 15px; font-weight: 500; margin-bottom: 10px;'>Chat with Virtual Assistant<span style='color:#ffffff;right:25px;position:absolute;margin-top:4px '><i class='fa fa-times'></i></span></div>",
            headerSubText: "<span class='small sub-headings-custom'>Your Personal Knowledge Assistant</span>",

            collapsedHeaderText: "<div> <img src='img/chat.svg' style='height:38px;margin-top:7px'></div>",
            //Position on screen
            position: "bottom-right", //two options. bottom left/right

            eventTrigger: false, //turn off/on event trigger
            triggerTarget: "#botTriggerCollecter", //select input for trigger value
            triggerValues: [] //value that triggers chatbot window
        }, options);

        var flag = {
            eventTrigger: true,
            initReponse: true,
            checkFieldsFlag: true
        }

        function renderChat(chatContainer) {
            //microsoft's chatbot init code
            // settings.user.id = $('#useremail').val();
            // settings.user.name = $('#userfullname').val();
            var botConnection = new BotChat.DirectLine({
                secret: settings.secret
            });
            BotChat.App({
                botConnection: botConnection,
                user: settings.user,
                bot: {
                    id: settings.botId
                },
                resize: 'detect'
            }, chatContainer);
            var dataPacket = {
                "user": settings.user,
                "platform": getPlatform(),
                "site": "",
                "siteGroup": ""
            }

            //render chat collpased state
            var collapsedChat = '<div id="collapsedBot">' + settings.collapsedHeaderText + '</div>';
            $(chatContainer).before(collapsedChat);
            //Chat collapse styles
            $(chatContainer).css('display', 'none');
            $('#collapsedBot').css('font_family', settings.font);
            $('#collapsedBot').css('color', settings.headerColorCollapsed);
            $('#collapsedBot').css('background-color', settings.headerBgCollapsed);

            //assigning styles to chatbox
            assignStyles(chatContainer, settings); //definition on line 86
            //creating stylesheet because chatbubbles are not rendered before for element styles.
            //for .wc-message-from-me .wc-message-content change the border radius and for 'wc-message-callout' display to none.
            var styles = '<style>.wc-message-from-me .wc-message-content{background-color: ' + settings.myChatBg + '; color:' + settings.myChatColor + ';}.wc-message-from-bot .wc-message-content{background-color: ' + settings.botChatBg + '; color:' + settings.botChatcolor + ';}</style>'
            $(styles).appendTo(chatContainer);

            //click event on the chatheader
            $(chatContainer).find('.wc-header').click(function() {
                closeWindow(chatContainer);
            })

            //event for collpased chatheader
            $('#collapsedBot').click(function() {
                openWindow(chatContainer);
                if (flag.initReponse) {
                    triggerEvent(botConnection, collectData(dataPacket), settings.user, "initReponse");
                    flag.initReponse = false;
                }
            })

            //check event trigger
            if (settings.eventTrigger) {
                $(settings.triggerTarget).change(function() {
                    if ($(this).val() == settings.triggerValues) {
                        openWindow(chatContainer);
                        if (flag.eventTrigger) {
                            triggerEvent(botConnection, collectData(dataPacket), settings.user, "saptm");
                            flag.eventTrigger = false;
                            flag.initReponse = false;
                        } else {
                            triggerEvent(botConnection, collectData(dataPacket), settings.user, "saptm-stale");
                        }
                    } else {
                        closeWindow(chatContainer);
                    }
                })
            }

            //Checking triggerValues - v2
            $('#maincategory').change(function() {
                if (settings.triggerValues.indexOf(this.options[this.selectedIndex].value) != -1) {
                    if (this.options[this.selectedIndex].value == "16") {
                        triggerEvent(botConnection, collectData(dataPacket), settings.user, "inbox");
                        openWindow(chatContainer);
                    } else if (this.options[this.selectedIndex].value == "15") {
                        triggerEvent(botConnection, collectData(dataPacket), settings.user, "saptm");
                        openWindow(chatContainer);
                    } else if (this.options[this.selectedIndex].value == "1") {
                        triggerEvent(botConnection, collectData(dataPacket), settings.user, "accounts");
                        openWindow(chatContainer);
                    } else if (this.options[this.selectedIndex].value == "61") {
                        triggerEvent(botConnection, collectData(dataPacket), settings.user, "other");
                        openWindow(chatContainer);
                    }
                } else {
                    closeWindow(chatContainer);
                }
            });

            //check subcategory value change
            $('#subcategory').change(function() {
                checkSubCategory(chatContainer);
            })


            //event listener from bot. subscribes to incoming bot activity
            botConnection.activity$
                .subscribe(function(activity) {
                    // console.log("activity", activity);
                    return ifSet(activity.value)
                });

            $('#usersite').change(function() {
                if ($(this).val() != "") {
                    if (flag.checkFieldsFlag) {
                        if (!flag.initReponse) {
                            triggerEvent(botConnection, collectData(dataPacket), settings.user, "setSiteVal");
                            openWindow(chatContainer);
                        }
                        flag.checkFieldsFlag = false;
                    }
                }
            })

        } //renderchat finishes

        return this.each(function() {
            renderChat(this);
        });



        // return this.each(function() {
        //   // settings.user.id = $('#useremail').val();
        //   // settings.user.name = $('#userfullname').val();
        //   // console.log(this);
        //   checkBotStatus(this, settings, function(targetDiv, settings) {
        //     renderChat(targetDiv);
        //   });

        // });

    }

}(jQuery));

//auto initialize the chatbot
$('#bot').initChatBot({
    headerColor: '#fff',
    eventTrigger: true, //turn off/on event trigger
    triggerTarget: '#botTriggerCollecter', //select input for trigger value
    triggerValues: ['16', '1', '15', '61']
});

var parent = $('#main_form').closest('.card');
parent.css({
    "margin-bottom": "50px"
});

//helpers

//triggers the proactive response event
function triggerEvent(botConnection, val, user, action) {
    botConnection
        .postActivity({
            type: "event",
            value: val,
            from: user,
            name: action
        })
        .subscribe(); //callback function on event
};


//checks status of the bot with minsights
// function checkBotStatus(targetDiv, settings, callback) {
//   $.ajax({
//     // url: 'https://vantagechatbotv1.azurewebsites.net/api/bot/status?id=' + settings.botId + '&useremail=' + settings.user.id,
//     url: 'https://minsights-testbot4-3.azurewebsites.net/api/bot/status?id=' + settings.botId + '&useremail=' + settings.user.id,
//     method: 'GET',
//     Accept: 'application/json',
//     success: function(result) {
//       console.log(result);
//       if (result.online) {
//         console.log("Bot Status check complete. Bot online.");
//         callback(targetDiv, settings);
//       } else {
//         console.log("Bot status check returned false. Bot is turned off.");
//       }
//     },
//     fail: function(jqXHR, textStatus) {
//       console.log("Bot status check failed");
//     }
//   })
// }

// function checkHealthStatus(targetDiv, settings, callback) {
//   $.ajax({
//     // url: 'https://vantagechatbotv1.azurewebsites.net/api/bot/healthcheck?useremail=' + settings.user.id,
//     url: 'https://vantagechatbotv1-uat.azurewebsites.net/api/bot/healthcheck?useremail=' + settings.user.id,
//     type: 'GET',
//     Accept: "application/json",
//     success: function(result) {
//       if (result) {
//         console.log("Bot Health status check Status complete. Bot online.");
//         callback(targetDiv);
//       } else {
//         console.log("Bot  Health status check caught some problems. Bot will not be displated.");
//       }
//     },
//     fail: function(jqXHR, textStatus) {
//       console.log("Bot status check failed");
//     }
//   })

// }


function assignStyles(chatContainer, settings) {
    if (settings.position == 'bottom-right') {
        $(chatContainer).css('right', 5);
        $('#collapsedBot').css('right', 5);
        if (jscd.browser.search("Internet Explorer") != -1 && jscd.browserMajorVersion <= 11) {
            $(chatContainer).css('right', 17);
            $('#collapsedBot').css('right', 17);
        }
    } else if (settings.position == 'bottom-left') {
        $(chatContainer).css('left', 5);
        $('#collapsedBot').css('left', 5);
        if (jscd.browser.search("Internet Explorer") != -1 && jscd.browserMajorVersion <= 11) {
            $(chatContainer).css('right', 17);
            $('#collapsedBot').css('right', 17);
        }
    }
    //parent elem styles
    var shadow = "0px 0px 10px 5px rgba(213,215,245,1)";

    //badge and chat window size for lg and XL device respectively.
    $(chatContainer).css('font_family', settings.font);
    if (window.screen.availWidth < 1400) {
        $(chatContainer).css('width', '400px');
        $(chatContainer).css('height', '550px');
        //adjust the snapping width while opening animation
        $("#collapsedBot").css('width', '400px');
    } else {
        $(chatContainer).css('width', '450px');
        $(chatContainer).css('height', '600px');
        //adjust the snapping width while opening animation
        $("#collapsedBot").css('width', '450px');
    }

    //Chat window position on the screen.
    $(chatContainer).css('z-index', '999');
    $(chatContainer).css('position', 'fixed');
    $(chatContainer).css('bottom', '0');
    $(chatContainer).css('border-radius', '13px 13px 0px 0px');
    $(chatContainer).css('-webkit-box-shadow', shadow);
    $(chatContainer).css('-moz-box-shadow', shadow);
    $(chatContainer).css('box-shadow', shadow);

    //assign header colors and text from the settings
    $(chatContainer).find('.wc-header').css('color', settings.headerColor);
    $(chatContainer).find('.wc-header').css('background-color', settings.headerBg);
    $(chatContainer).find('.wc-header span').html(settings.headerText + settings.headerSubText);
    $(chatContainer).find('.wc-shellinput').attr("placeholder", "Type your message");

}

//close and open animations
function closeWindow(chatContainer) {
    $(chatContainer).slideUp();
    setTimeout(function() {
        $('#collapsedBot').slideDown();
        // $('#collapsedBot').css('opacity','1');
    }, 300)
}

function openWindow(chatContainer) {
    $('#collapsedBot').slideUp();
    setTimeout(function() {
        $(chatContainer).slideDown();
    }, 300)
}

function ifSet(id) {
    if ($(id).val() == "") {
        return false;
    } else {
        return true;
    }
}

function checkSubCategory(chatContainer) {
    if ($('#subcategory').val() == 29) {
        openWindow(chatContainer);
    } else if ($('#subcategory').val() == 34) {
        openWindow(chatContainer);
    } else {
        closeWindow(chatContainer);
    }
}

//Get the userValues
function collectData(dataPacket) {
    dataPacket.user = $('#useremail').val();
    dataPacket.platform = getPlatform();
    dataPacket.site = $('#usersite').val();
    // dataPacket.siteGroup = $('#usersitegroup').val();
    return dataPacket
}

function getPlatform() {
    // console.log(jscd);
    if (jscd.os) {
        if (jscd.os.search("Win") != -1 || jscd.os.search("Windows") != -1) {
            return "Windows";
        } else if (jscd.os.search("Mac") != -1 || jscd.os.search("Macintosh") != -1) {
            return "Mac";
        } else {
            return "Other";
        }
    } else {
        return "Other"
    }
}

function platformResolver() {
    ! function(s) {
        var i = "";
        screen.width && (width = screen.width ? screen.width : "", height = screen.height ? screen.height : "", i += width + " x " + height);
        var n, e, r, o = navigator.appVersion,
            d = navigator.userAgent,
            a = navigator.appName,
            t = "" + parseFloat(navigator.appVersion),
            w = parseInt(navigator.appVersion, 10); - 1 != (e = d.indexOf("Opera")) && (a = "Opera", t = d.substring(e + 6), -1 != (e = d.indexOf("Version")) && (t = d.substring(e + 8))), -1 != (e = d.indexOf("OPR")) ? (a = "Opera", t = d.substring(e + 4)) : -1 != (e = d.indexOf("Edge")) ? (a = "Microsoft Edge", t = d.substring(e + 5)) : -1 != (e = d.indexOf("MSIE")) ? (a = "Microsoft Internet Explorer", t = d.substring(e + 5)) : -1 != (e = d.indexOf("Chrome")) ? (a = "Chrome", t = d.substring(e + 7)) : -1 != (e = d.indexOf("Safari")) ? (a = "Safari", t = d.substring(e + 7), -1 != (e = d.indexOf("Version")) && (t = d.substring(e + 8))) : -1 != (e = d.indexOf("Firefox")) ? (a = "Firefox", t = d.substring(e + 8)) : -1 != d.indexOf("Trident/") ? (a = "Microsoft Internet Explorer", t = d.substring(d.indexOf("rv:") + 3)) : (n = d.lastIndexOf(" ") + 1) < (e = d.lastIndexOf("/")) && (a = d.substring(n, e), t = d.substring(e + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 != (r = t.indexOf(";")) && (t = t.substring(0, r)), -1 != (r = t.indexOf(" ")) && (t = t.substring(0, r)), -1 != (r = t.indexOf(")")) && (t = t.substring(0, r)), w = parseInt("" + t, 10), isNaN(w) && (t = "" + parseFloat(navigator.appVersion), w = parseInt(navigator.appVersion, 10));
        var c = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),
            W = !!navigator.cookieEnabled;
        void 0 !== navigator.cookieEnabled || W || (document.cookie = "testcookie", W = -1 != document.cookie.indexOf("testcookie"));
        var O = "-",
            g = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
        for (var f in g) {
            var p = g[f];
            if (p.r.test(d)) {
                O = p.s;
                break
            }
        }
        var b = "-";
        switch (/Windows/.test(O) && (b = /Windows (.*)/.exec(O)[1], O = "Windows"), O) {
            case "Mac OS X":
                b = /Mac OS X (10[\.\_\d]+)/.exec(d)[1];
                break;
            case "Android":
                b = /Android ([\.\_\d]+)/.exec(d)[1];
                break;
            case "iOS":
                b = (b = /OS (\d+)_(\d+)_?(\d+)?/.exec(o))[1] + "." + b[2] + "." + (0 | b[3])
        }
        var x = "no check";
        if ("undefined" != typeof swfobject) {
            var h = swfobject.getFlashPlayerVersion();
            x = h.major > 0 ? h.major + "." + h.minor + " r" + h.release : "-"
        }
        s.jscd = {
            screen: i,
            browser: a,
            browserVersion: t,
            browserMajorVersion: w,
            mobile: c,
            os: O,
            osVersion: b,
            cookies: W,
            flashVersion: x
        }
    }(this);
}
