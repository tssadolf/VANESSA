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
            var e = document.getElementById("znid-616359209320"),
                t = e.querySelector(":scope > .zn-element > .zn-banner"),
                n = "",
                i = null != document.querySelector(".zn-container.editing");
            !i && n && (t.style.cursor = "pointer", t.addEventListener("click", (function() {
                window.location.href = n
            })))
        })();
    })();
    (function() {
        (function() {
            var e = document.getElementById("znid-142715581870"),
                t = e.querySelector(":scope > .zn-element > .zn-banner"),
                n = "",
                i = null != document.querySelector(".zn-container.editing");
            !i && n && (t.style.cursor = "pointer", t.addEventListener("click", (function() {
                window.location.href = n
            })))
        })();
    })();
    (function() {
        (function() {
            var e = document.getElementById("znid-665653237309"),
                t = e.querySelector(":scope > .zn-element > .zn-banner"),
                n = "",
                i = null != document.querySelector(".zn-container.editing");
            !i && n && (t.style.cursor = "pointer", t.addEventListener("click", (function() {
                window.location.href = n
            })))
        })();
    })();
    (function() {
        (function() {
            var e = "normal",
                t = "true",
                n = "true",
                i = "1",
                a = "1",
                o = "500",
                r = "true",
                s = "3000",
                l = document.getElementById("znid-304771887430"),
                c = !1;
            function p() {
                new Splide("#znid-304771887430 > .zn-element > .zn-slider > .splide", {
                    type: "loop" == e ? "loop" : "slide",
                    rewind: "rewind" == e,
                    perPage: +i,
                    perMove: +a,
                    speed: +o,
                    height: "auto",
                    gap: "10px",
                    arrows: "true" == t,
                    pagination: "true" == n,
                    autoplay: "true" == r,
                    interval: +s,
                    arrowPath: "M 30.375 18.714844 L 12.195312 0.53125 C 11.484375 -0.175781 10.332031 -0.175781 9.625 0.53125 C 8.914062 1.242188 8.914062 2.394531 9.625 3.105469 L 26.519531 20 L 9.625 36.894531 C 8.914062 37.605469 8.914062 38.757812 9.625 39.46875 C 9.976562 39.824219 10.445312 40 10.910156 40 C 11.375 40 11.839844 39.824219 12.195312 39.46875 L 30.375 21.285156 C 30.71875 20.945312 30.910156 20.480469 30.910156 20 C 30.910156 19.515625 30.71875 19.054688 30.375 18.714844 Z M 30.375 18.714844"
                }).mount()
            }
            window.znRespondToVisibility(l, (function(e) {
                e && !c && (p(), c = !0)
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