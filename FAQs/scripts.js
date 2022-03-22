function znReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
window.znStorage = {
    _storage: new WeakMap,
    put: function(e, t, n) {
        this._storage.has(e) || this._storage.set(e, new Map), this._storage.get(e).set(t, n)
    },
    get: function(e, t) {
        return this._storage.get(e).get(t)
    },
    has: function(e, t) {
        return this._storage.has(e) && this._storage.get(e).has(t)
    },
    remove: function(e, t) {
        var n = this._storage.get(e).delete(t);
        return 0 === !this._storage.get(e).size && this._storage.delete(e), n
    }
};
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
});
window.znRespondToVisibility = function(e, t) {
    var n = {
            root: null,
            threshold: .01
        },
        i = new IntersectionObserver((function(e, n) {
            var i = e.map((function(e) {
                    return e.isIntersecting
                })),
                a = i.includes(!0);
            t(a)
        }), n);
    i.observe(e)
};
znReady(function() {
    (function() {
        (function() {
            for (var e = document.getElementById("znid-311355438635"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-208434746728"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-331047296801"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-161630076644"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-972132641017"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-207104049506"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-079154516786"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-392586475047"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-692772106395"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "single", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        var e = "",
            t = null != document.querySelector(".zn-container.editing");
        e && !t && (window.fbAsyncInit = function() {
            FB.init({
                appId: "912333495590130",
                autoLogAppEvents: !0,
                xfbml: !0,
                version: "v2.11"
            })
        }, function(e, t, n) {
            var i, a = e.getElementsByTagName(t)[0];
            e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(i, a))
        }(document, "script", "facebook-jssdk"))
    })();
    (function() {
        var e = null != document.querySelector(".zn-container.editing"),
            t = document.body;
        p();
        var n = "false",
            i = "true",
            a = "false",
            o = "true",
            r = "false",
            s = "true" == n && (e || "true" != r || !localStorage.znHideAnnouncementBar);
        if (s) {
            var l = document.createElement("div");
            if (l.classList.add("zn-announcement-bar"), "true" == o && l.classList.add("pad-right"), l.innerHTML = '\n        <div class="zn-announcement-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n        '.concat("true" == i ? '\n          <a class="zn-announcement-button" href="" target="'.concat("true" == a ? "_blank" : "", '">\n            <button>Click me</button>\n          </a>\n        ') : "", "\n        ").concat("true" == o ? '<i class="material-icons-outlined zn-annoucement-close">close</i>' : "", "\n      "), t.prepend(l), !e && "true" == o) {
                var c = l.querySelector(".zn-annoucement-close");
                c.addEventListener("click", (function() {
                    p(), "true" == r && (localStorage.znHideAnnouncementBar = !0)
                }))
            }
        }
        function p() {
            var e = t.querySelector(".zn-announcement-bar");
            e && e.parentNode.removeChild(e)
        }
    })();
});