(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    2815: function (e, t, a) {
      "use strict";
      var s = a(5893);
      a(7294);
      var r = a(5675),
        l = a.n(r),
        n = a(1664),
        i = a.n(n),
        o = a(77);
      t.Z = () => {
        let e = o.x.sort((e, t) => new Date(t.date) - new Date(e.date));
        return (0, s.jsx)("section", {
          className: "section",
          children: (0, s.jsxs)("div", {
            className: "container-fluid px-3",
            children: [
              (0, s.jsx)("div", {
                className: "row",
                children: (0, s.jsx)("div", {
                  className: "offset-md-1 col-md-6",
                  children: (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className: "other-heading",
                        children: "Our Blog",
                      }),
                      (0, s.jsx)("p", {
                        className: "my-3 text-start my-md-5 ",
                        children: (0, s.jsx)(i(), {
                          href: "#",
                          className:
                            "text-danger text-decoration-none font-15 fw-normal letter-spacing",
                          children: "ALL ARTICLE",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "row ",
                children: [
                  (0, s.jsx)("div", {
                    className: "col-md-6 px-0",
                    children:
                      e.length > 0 &&
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)(l(), {
                            src: "/img/Blog - home elevator.jpg",
                            alt: "Blog main image",
                            width: 956,
                            height: 587,
                            layout: "intrinsic",
                            className: "w-100",
                          }),
                          (0, s.jsx)("div", {
                            className: "row",
                            children: (0, s.jsxs)("div", {
                              className: "col-md-10  offset-md-2 mt-4  mb-3",
                              children: [
                                (0, s.jsx)("p", {
                                  className: "font-44 ",
                                  children: o.x[0].title,
                                }),
                                (0, s.jsx)("p", {
                                  className: "  text-start m-20",
                                  children: (0, s.jsx)(i(), {
                                    href: "/blog/".concat(o.x[0].slug),
                                    className:
                                      "text-danger text-decoration-none font-12 fw-normal letter-spacing",
                                    children: "READ ARTICLE",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  }),
                  (0, s.jsx)("div", {
                    className: "col-md-6",
                    children: e
                      .slice(1, 4)
                      .map((e, t) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className: "row align-items-center",
                            children: (0, s.jsx)("div", {
                              className:
                                "col-md-9 offset-md-1 d-flex align-tems-center mt-3",
                              children: (0, s.jsxs)("div", {
                                class:
                                  "  border-bottom border-light border-opacity-25 p-20",
                                children: [
                                  "    ",
                                  (0, s.jsx)("p", {
                                    className: "font-28 p-10",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: " p-10 ",
                                    children: (0, s.jsx)(i(), {
                                      href: "/blog/".concat(e.slug),
                                      className:
                                        "text-danger text-decoration-none font-12 fw-normal letter-spacing",
                                      children: "READ ARTICLE",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          },
                          t,
                        ),
                      ),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    7833: function (e, t, a) {
      "use strict";
      var s = a(5893),
        r = a(7294),
        l = a(5675),
        n = a.n(l),
        i = a(9101);
      t.Z = () => {
        let [e, t] = (0, r.useState)({
            name: "",
            email: "",
            phone: "",
            message: "",
          }),
          [a, l] = (0, r.useState)({}),
          [o, d] = (0, r.useState)(!1),
          c = (e) => {
            let { id: a, value: s } = e.target;
            t((e) => ({ ...e, [a]: s }));
          },
          m = () => {
            let t = {};
            return (
              e.name.trim() || (t.name = "Name is required"),
              e.email.trim()
                ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email) ||
                  (t.email = "Invalid email format")
                : (t.email = "Email is required"),
              e.phone.trim()
                ? /^[0-9]+$/.test(e.phone) || (t.phone = "Invalid phone number")
                : (t.phone = "Phone number is required"),
              e.message.trim() || (t.message = "Message is required"),
              t
            );
          };
        return (0, s.jsx)("section", {
          className: "section",
          children: (0, s.jsx)("div", {
            className: "container-fluid p-0",
            children: (0, s.jsxs)("div", {
              className: "row py-0",
              children: [
                (0, s.jsxs)("div", {
                  className: "col-md-5 offset-md-1 sub-section",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "",
                      children: [
                        (0, s.jsxs)("p", {
                          className: "other-heading",
                          children: [
                            "Let us ",
                            (0, s.jsx)("br", {}),
                            " Connect you",
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "py-3 text-start p-30",
                          children: (0, s.jsx)("a", {
                            href: "",
                            className:
                              "text-light text-decoration-none font-11 d-none fw-normal letter-spacing",
                            children:
                              "We'll put you in touch with your acclaimed Global Collective™ member.",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("form", {
                      className: "p-1 myform",
                      onSubmit: (a) => {
                        a.preventDefault();
                        let s = m();
                        if (Object.keys(s).length > 0) {
                          l(s);
                          return;
                        }
                        (l({}),
                          d(!0),
                          i.ZP.send(
                            "service_8lcfj6u",
                            "template_t1sz67w",
                            e,
                            "pquFSqnl_trAaTU9T",
                          )
                            .then((e) => {
                              (console.log("SUCCESS!", e.status, e.text),
                                alert("Message sent successfully!"),
                                t({
                                  name: "",
                                  email: "",
                                  phone: "",
                                  message: "",
                                }));
                            })
                            .catch((e) => {
                              (console.error("FAILED...", e),
                                alert(
                                  "Failed to send message. Please try again later.",
                                ));
                            })
                            .finally(() => d(!1)));
                      },
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "name",
                              className: "form-label",
                              children: "Name",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              className:
                                "form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20",
                              id: "name",
                              placeholder: "Name",
                              value: e.name,
                              onChange: c,
                            }),
                            a.name &&
                              (0, s.jsx)("small", {
                                className: "text-danger",
                                children: a.name,
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "email",
                              className: "form-label",
                              children: "Email",
                            }),
                            (0, s.jsx)("input", {
                              type: "email",
                              className:
                                "form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20",
                              id: "email",
                              placeholder: "Email",
                              value: e.email,
                              onChange: c,
                            }),
                            a.email &&
                              (0, s.jsx)("small", {
                                className: "text-danger",
                                children: a.email,
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "phone",
                              className: "form-label",
                              children: "Mobile",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              className:
                                "form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20",
                              id: "phone",
                              placeholder: "Mobile",
                              value: e.phone,
                              onChange: c,
                            }),
                            a.phone &&
                              (0, s.jsx)("small", {
                                className: "text-danger",
                                children: a.phone,
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "message",
                              className: "form-label",
                              children: "Message",
                            }),
                            (0, s.jsx)("textarea", {
                              className:
                                "form-control border-bottom rounded-0 bg-transparent border-light border-opacity-25 border-top-0 border-start-0 border-end-0 p-20",
                              id: "message",
                              rows: 3,
                              placeholder: "Enter your message",
                              value: e.message,
                              onChange: c,
                            }),
                            a.message &&
                              (0, s.jsx)("small", {
                                className: "text-danger",
                                children: a.message,
                              }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "py-md-5 py-0 m-center",
                          children: (0, s.jsx)("button", {
                            type: "submit",
                            className:
                              "btn text-danger rounded-1 font-12 px-3 font-28",
                            disabled: o,
                            children: o ? "Sending..." : "SEND",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "col-md-6",
                  children: (0, s.jsx)(n(), {
                    src: "/img/lets connect with us.png",
                    alt: "teknix",
                    width: 956,
                    height: 587,
                    className: "w-100",
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    9118: function (e, t, a) {
      "use strict";
      var s = a(5893),
        r = a(7294),
        l = a(5675),
        n = a.n(l);
      t.Z = () => {
        let [e, t] = (0, r.useState)("optima"),
          a = (e) => {
            t(e);
          },
          l = {
            optima: {
              name: "Optima",
              description:
                "The all-new OPTIMA redefines simplicity, giving you a vertical mobility solution with a range of technologically advanced features with German craftsmanship at its heart.",
              carouselId: "carouselExampleOptima",
              images: [
                "/img/OPTIMA BANNER 1.png",
                "/img/OPTIMA BANNER 2.png",
                "/img/OMTIMA BANNER 3.jpg",
              ],
            },
            vertix: {
              name: "Vertix",
              description:
                'The all-new, next-generation VERTIX range of elevators from Teknix, in collaboration with SRH Aufz\xfcge GmbH, brings you the pinnacle of German engineering and craftsmanship. Designed with cutting-edge, eco-friendly technology, the VERTIX elevators offer an unparalleled combination of essential features and unrivaled comfort, ensuring a smooth and luxurious ride every time."\nThis version enhances the premium feel, emphasizing the innovation, luxury, and eco-friendly aspects of the product. ',
              carouselId: "carouselExampleVertix",
              images: [
                "/img/VERTIX BANNER 1.png",
                "/img/VERTIX BANNER 2.png",
                "/img/VERTIX BANNER 3.jpg",
              ],
            },
            greentek: {
              name: "Greentek",
              description:
                "Teknix GREENTEK exemplifies the pinnacle of German engineering, blending precision craftsmanship with years of innovation. With cutting-edge features like the VVVF drive with DTI, Direct Landing Technology, and sleek interface devices, it delivers an unparalleled, ultra-smooth ride—setting a new benchmark in luxury elevators.",
              carouselId: "carouselExampleGreentek",
              images: [
                "/img/Greentek banner 1.png",
                "/img/Greentek banner 2.png",
                "/img/Greentek banner 3.jpg",
              ],
            },
            hydratek: {
              name: "Hydratek",
              description:
                "Teknix Hydratek is an advanced vertical transportation system, crafted with precision using cutting-edge German technology and Italian craftsmanship, based on progressive fluid dynamics.",
              images: [
                "/img/Hydratek banner 1.png",
                "/img/Hydratek banner 2.png",
                "/img/Hydratek banner 3.png",
              ],
            },
            villa_matek: {
              name: "Villa Matek",
              description:
                "TEKNIX VILLAMATEK, designed exclusively for residential use, combines technology, aesthetics, and craftsmanship to enhance accessibility for residents with mobility challenges. Available in gearless models and a variety of cabin styles to suit diverse preferences.",
              carouselId: "carouselExampleVillaMatek",
              images: [
                "/img/Elevators/Vm/1.webp",
                "/img/Elevators/Vm/2.webp",
                "/img/Elevators/Vm/3.webp",
              ],
            },
          };
        return (0, s.jsx)("section", {
          className: "section position-relative ",
          children: (0, s.jsx)("div", {
            className: "container-fluid ",
            children: (0, s.jsxs)("div", {
              className: "row",
              children: [
                (0, s.jsx)("div", {
                  className: "col-md-4 offset-md-1 col-12",
                  children: (0, s.jsx)("div", {
                    className: "filter ps-md-0 text-md-start text-center  m-30",
                    children: Object.keys(l).map((t) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className: "text-decoration-none ".concat(
                            e === t ? "active" : "",
                          ),
                          onClick: () => a(t),
                          children: (0, s.jsxs)("h2", {
                            className: "other-heading text-secondary ".concat(
                              e === t ? "active" : "",
                            ),
                            children: [l[t].name, " "],
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-md-6 col-12 multi-carousel",
                  children: (0, s.jsx)("div", {
                    className: "elevator-carousel m-center",
                    id: "optima",
                    children: (0, s.jsx)("div", {
                      id: "carouselContainer",
                      children: (0, s.jsxs)("div", {
                        id: l[e].carouselId,
                        className: "carousel slide m-center",
                        "data-bs-ride": "carousel",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "d-inline position-relative ",
                            children: [
                              (0, s.jsx)("button", {
                                className:
                                  "carousel-control-prev position-relative d-inline-block",
                                type: "button",
                                "data-bs-target": "#".concat(l[e].carouselId),
                                "data-bs-slide": "prev",
                                "aria-label": "Previous",
                                children: (0, s.jsx)(n(), {
                                  src: "/img/left-carousel.png",
                                  alt: "Previous",
                                  width: 30,
                                  height: 30,
                                  className: "img-fluid carousel-arrow",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                className:
                                  "carousel-control-next position-relative d-inline-block",
                                type: "button",
                                "data-bs-target": "#".concat(l[e].carouselId),
                                "data-bs-slide": "next",
                                "aria-label": "Next",
                                children: (0, s.jsx)(n(), {
                                  src: "/img/right-carousel.png",
                                  alt: "Next",
                                  width: 30,
                                  height: 30,
                                  className: "img-fluid carousel-arrow",
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "carousel-inner",
                            children: l[e].images.map((t, a) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className: "carousel-item ".concat(
                                    0 === a ? "active" : "",
                                  ),
                                  children: [
                                    (0, s.jsxs)("p", {
                                      id: "elevator-description",
                                      class: "mb-4",
                                      children: [" ", l[e].description],
                                    }),
                                    (0, s.jsx)(n(), {
                                      src: t,
                                      alt: "Slide ".concat(a + 1),
                                      layout: "responsive",
                                      width: 1920,
                                      height: 1080,
                                      className: "d-block w-100 mb-5",
                                    }),
                                  ],
                                },
                                a,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    1969: function (e, t, a) {
      "use strict";
      a(5893);
      var s = a(5152),
        r = a.n(s);
      (a(5675),
        a(4298),
        a(4178),
        a(9407),
        r()(() => a.e(568).then(a.t.bind(a, 2568, 23)), {
          loadableGenerated: { webpack: () => [2568] },
          ssr: !1,
        }));
    },
    2602: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return i;
          },
          noSSR: function () {
            return n;
          },
        }));
      let s = a(8754);
      (a(5893), a(7294));
      let r = s._(a(5491));
      function l(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function n(e, t) {
        return (delete t.webpack, delete t.modules, e(t));
      }
      function i(e, t) {
        let a = r.default,
          s = {
            loading: (e) => {
              let { error: t, isLoading: a, pastDelay: s } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (s.loader = () => e)
          : "function" == typeof e
            ? (s.loader = e)
            : "object" == typeof e && (s = { ...s, ...e });
        let i = (s = { ...s, ...t }).loader;
        return (s.loadableGenerated &&
          ((s = { ...s, ...s.loadableGenerated }), delete s.loadableGenerated),
        "boolean" != typeof s.ssr || s.ssr)
          ? a({
              ...s,
              loader: () =>
                null != i ? i().then(l) : Promise.resolve(l(() => null)),
            })
          : (delete s.webpack, delete s.modules, n(a, s));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1159: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let s = a(8754)._(a(7294)).default.createContext(null);
    },
    5491: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let s = a(8754)._(a(7294)),
        r = a(1159),
        l = [],
        n = [],
        i = !1;
      function o(e) {
        let t = e(),
          a = { loading: !0, loaded: null, error: null };
        return (
          (a.promise = t
            .then((e) => ((a.loading = !1), (a.loaded = e), e))
            .catch((e) => {
              throw ((a.loading = !1), (a.error = e), e);
            })),
          a
        );
      }
      class d {
        promise() {
          return this._res.promise;
        }
        retry() {
          (this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 }));
          let { _res: e, _opts: t } = this;
          (e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                (this._update({}), this._clearTimeouts());
              })
              .catch((e) => {
                (this._update({}), this._clearTimeouts());
              }),
            this._update({}));
        }
        _update(e) {
          ((this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e()));
        }
        _clearTimeouts() {
          (clearTimeout(this._delay), clearTimeout(this._timeout));
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          ((this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry());
        }
      }
      function c(e) {
        return (function (e, t) {
          let a = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t,
            ),
            l = null;
          function o() {
            if (!l) {
              let t = new d(e, a);
              l = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return l.promise();
          }
          if (!i) {
            let e = a.webpack ? a.webpack() : a.modules;
            e &&
              n.push((t) => {
                for (let a of e) if (t.includes(a)) return o();
              });
          }
          function c(e, t) {
            !(function () {
              o();
              let e = s.default.useContext(r.LoadableContext);
              e &&
                Array.isArray(a.modules) &&
                a.modules.forEach((t) => {
                  e(t);
                });
            })();
            let n = s.default.useSyncExternalStore(
              l.subscribe,
              l.getCurrentValue,
              l.getCurrentValue,
            );
            return (
              s.default.useImperativeHandle(t, () => ({ retry: l.retry }), []),
              s.default.useMemo(() => {
                var t;
                return n.loading || n.error
                  ? s.default.createElement(a.loading, {
                      isLoading: n.loading,
                      pastDelay: n.pastDelay,
                      timedOut: n.timedOut,
                      error: n.error,
                      retry: l.retry,
                    })
                  : n.loaded
                    ? s.default.createElement(
                        (t = n.loaded) && t.default ? t.default : t,
                        e,
                      )
                    : null;
              }, [e, n])
            );
          }
          return (
            (c.preload = () => o()),
            (c.displayName = "LoadableComponent"),
            s.default.forwardRef(c)
          );
        })(o, e);
      }
      function m(e, t) {
        let a = [];
        for (; e.length; ) {
          let s = e.pop();
          a.push(s(t));
        }
        return Promise.all(a).then(() => {
          if (e.length) return m(e, t);
        });
      }
      ((c.preloadAll = () =>
        new Promise((e, t) => {
          m(l).then(e, t);
        })),
        (c.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let a = () => ((i = !0), t());
            m(n, e).then(a, a);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady));
      let u = c;
    },
    5152: function (e, t, a) {
      e.exports = a(2602);
    },
  },
]);
