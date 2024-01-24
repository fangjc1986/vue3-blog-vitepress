import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-455EPCY7.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-AUZ3RYOM.js";

// node_modules/v3-drag-zoom/dist/v3-drag-zoom.umd.cjs
var require_v3_drag_zoom_umd = __commonJS({
  "node_modules/v3-drag-zoom/dist/v3-drag-zoom.umd.cjs"(exports, module) {
    !function(e, o) {
      "object" == typeof exports && "undefined" != typeof module ? o(exports, (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : "function" == typeof define && define.amd ? define(["exports", "vue"], o) : o((e = "undefined" != typeof globalThis ? globalThis : e || self).V3DragZoom = {}, e.Vue);
    }(exports, function(e, o) {
      "use strict";
      var a = Object.defineProperty, t = (e2, o2, t2) => (((e3, o3, t3) => {
        o3 in e3 ? a(e3, o3, { enumerable: true, configurable: true, writable: true, value: t3 }) : e3[o3] = t3;
      })(e2, "symbol" != typeof o2 ? o2 + "" : o2, t2), t2);
      const l = (e2) => [e2.offsetWidth, e2.offsetHeight];
      class u {
        constructor(e2, o2) {
          t(this, "x"), t(this, "y"), this.x = e2, this.y = o2;
        }
        static fromCurPosition(e2) {
          return new u(e2.x, e2.y);
        }
        sub(e2) {
          return new u(this.x - e2.x, this.y - e2.y);
        }
        add(e2) {
          return new u(this.x + e2.x, this.y + e2.y);
        }
      }
      const n = async (e2, o2 = 5e3) => {
        try {
          const a2 = e2.querySelectorAll("img"), t2 = Array.from(a2).map((e3) => (e3.draggable = false, new Promise((o3) => {
            e3.onload = () => {
              o3(true);
            };
          }))), l2 = setTimeout(() => {
            throw new Error("图片加载超时");
          }, o2);
          await Promise.all(t2), clearTimeout(l2), t2.length && await (async (e3) => new Promise((o3) => setTimeout(o3, e3)))(100);
        } catch (a2) {
        }
      };
      class v {
        constructor() {
          t(this, "onMousedown", () => {
          }), t(this, "onMousemove", () => {
          }), t(this, "onMouseup", () => {
          }), t(this, "onMouseleave", () => {
          }), t(this, "onMousewheel", () => {
          });
        }
      }
      const r = { class: "loading" }, s = (e2, o2) => {
        const a2 = e2.__vccOpts || e2;
        for (const [t2, l2] of o2)
          a2[t2] = l2;
        return a2;
      }, i = s(o.defineComponent({ __name: "v3-drag-zoom-container", props: { autoResize: { type: Boolean, default: true }, followPointer: { type: Boolean, default: true }, maxZoom: { default: 100 }, minZoom: { default: 0.01 }, align: { default: "contain" }, zoomFactor: { default: 0.1 }, draggable: { type: Boolean, default: true }, zoomable: { type: Boolean, default: true }, loading: { type: Boolean, default: false }, animateDuration: { default: 200 } }, setup(e2, { expose: a2 }) {
        const t2 = e2, s2 = o.ref(false), i2 = o.computed(() => t2.loading || s2.value), c2 = o.ref(), d2 = o.ref(0), m = o.ref(0), f = o.ref(), p = o.ref(0), g = o.ref(0), h = o.computed(() => (d2.value - p.value) / 2), y = o.computed(() => (m.value - g.value) / 2), w = o.ref(1), M = o.computed(() => ({ min: w.value * t2.minZoom, max: w.value * t2.maxZoom })), x = o.computed(() => d2.value / m.value), b = o.computed(() => p.value / g.value), z = o.ref(1), E = o.ref(1), _ = o.ref(1), D = o.computed(() => _.value), S = o.ref(0), B = o.ref(0), P = o.ref(0), $ = o.ref(0), Z = o.computed(() => S.value + P.value), C = o.computed(() => B.value + $.value), T = () => {
          V(), P.value = 0, $.value = 0;
        }, V = () => {
          switch (c2.value, [d2.value, m.value] = l(c2.value), c2.value, [p.value, g.value] = l(f.value), t2.align) {
            case "cover":
              x.value > b.value ? (z.value = d2.value, E.value = d2.value / b.value) : (z.value = m.value * b.value, E.value = m.value), w.value = z.value / p.value, _.value = w.value;
              break;
            case "contain":
              x.value > b.value ? (z.value = m.value * b.value, E.value = m.value) : (z.value = d2.value, E.value = d2.value / b.value), w.value = z.value / p.value, _.value = w.value;
              break;
            case "auto":
              z.value = p.value, E.value = g.value, w.value = z.value / p.value, _.value = w.value;
          }
          S.value = h.value, B.value = y.value;
        }, k = o.ref(false), F = o.ref(new u(0, 0)), R = new v();
        R.onMousedown = () => {
          t2.draggable && (k.value = true);
        };
        const j = (e3) => {
          F.value = new u(e3.clientX, e3.clientY), H.forEach((o2) => o2.onMousedown(e3));
        }, I = o.ref(new u(0, 0));
        R.onMousemove = () => {
          if (!k.value)
            return;
          const e3 = I.value.sub(F.value);
          P.value += e3.x, $.value += e3.y, F.value = I.value;
        };
        const O = (e3) => {
          I.value = new u(e3.clientX, e3.clientY);
          const o2 = I.value.sub(F.value);
          H.forEach((a3) => a3.onMousemove(e3, o2, new u(100 * o2.x / z.value, 100 * o2.y / E.value))), F.value = I.value;
        };
        R.onMouseup = () => {
          k.value && (k.value = false);
        };
        const Y = (e3) => {
          H.forEach((o2) => o2.onMouseup(e3));
        };
        R.onMouseleave = () => {
          k.value && (k.value = false);
        };
        const N = (e3) => {
          H.forEach((o2) => o2.onMouseleave(e3));
        }, X = o.computed(() => new u(P.value + d2.value / 2, $.value + m.value / 2)), q = (e3, o2) => {
          const a3 = D.value + D.value * e3;
          a3 < M.value.min || a3 > M.value.max || (_.value = a3, z.value = p.value * a3, E.value = g.value * a3, t2.followPointer && o2 && (P.value += (X.value.x - o2.x) * e3, $.value += (X.value.y - o2.y) * e3));
        };
        R.onMousewheel = (e3, o2) => {
          t2.zoomable && q(o2, ((e4, o3) => {
            const a3 = o3.getBoundingClientRect();
            return new u(e4.clientX - a3.left, e4.clientY - a3.top);
          })(e3, c2.value));
        };
        const A = (e3) => {
          e3.preventDefault();
          const o2 = (e3.deltaY > 0 ? -1 : 1) * t2.zoomFactor, a3 = D.value + D.value * o2;
          H.forEach((t3) => t3.onMousewheel(e3, o2, a3));
        };
        o.onMounted(async () => {
          s2.value = true, await n(c2.value), s2.value = false, T();
        });
        const U = o.computed(() => ({ transform: `translate(${Z.value}px, ${C.value}px) scale(${D.value})`, transition: k.value || i2.value ? "none" : `transform ${t2.animateDuration}ms`, opacity: i2.value ? 0 : 1 }));
        let W = null;
        o.onMounted(() => {
          W = new ResizeObserver((() => {
            let e3 = 0;
            return () => {
              e3 && clearTimeout(e3), e3 = setTimeout(() => {
                V();
              }, 100);
            };
          })());
        }), o.onMounted(() => {
          if (t2.autoResize) {
            const e3 = c2.value.parentElement;
            e3 && (null == W || W.observe(e3));
          }
        });
        let H = [R];
        const L = (e3) => {
          H = H.filter((o2) => o2 !== e3), 0 === H.length && (H = [R]);
        };
        return o.provide("v3-drag-zoom-item", { contentZoom: D, currentContentSize: { width: z, height: E }, orgContentSize: { width: p, height: g }, addDragEvent: (e3) => {
          if (!H.includes(e3))
            return H.push(e3), e3 != R && L(R), () => L(e3);
        }, removeDragEvent: L, zoomProps: o.computed(() => t2) }), o.onUnmounted(() => {
          null == W || W.disconnect();
        }), a2({ reset: T, zoom: (e3) => q(e3) }), (e3, a3) => (o.openBlock(), o.createElementBlock("div", { class: "container", ref_key: "containerRef", ref: c2, onMousedown: j, onMousemove: O, onMouseleave: N, onMouseup: Y, onWheel: A, onselectstart: "return false" }, [o.createElementVNode("div", { class: "content", ref_key: "contentRef", ref: f, style: o.normalizeStyle(U.value) }, [o.renderSlot(e3.$slots, "default", {}, void 0, true)], 4), o.withDirectives(o.createElementVNode("div", r, [o.renderSlot(e3.$slots, "loading", {}, () => [o.createTextVNode(" Loading... ")], true)], 512), [[o.vShow, i2.value]])], 544));
      } }), [["__scopeId", "data-v-2d33ea41"]]), c = s(o.defineComponent({ __name: "v3-drag-zoom-item", props: { offset: { default: () => [-50, -50] }, fixedSize: { type: Boolean, default: false }, rotate: { default: 0 }, draggable: { type: Boolean, default: false }, position: {} }, emits: ["onMove", "onMoveFinished", "update:position"], setup(e2, { emit: a2 }) {
        const t2 = e2, { contentZoom: l2, addDragEvent: n2, zoomProps: r2 } = o.inject("v3-drag-zoom-item"), s2 = new v(), i2 = o.ref(u.fromCurPosition(t2.position));
        s2.onMousemove = (e3, o2, t3) => {
          i2.value = i2.value.add(t3), a2("onMove", i2.value), a2("update:position", i2.value);
        };
        let c2 = new Function();
        o.onUnmounted(() => c2()), s2.onMouseup = () => {
          c2(), a2("onMoveFinished", i2.value);
        }, s2.onMouseleave = () => {
          c2(), a2("onMoveFinished", i2.value);
        };
        const d2 = () => {
          t2.draggable && (c2 = n2(s2));
        }, m = o.computed(() => t2.fixedSize ? 1 / l2.value : 1), f = o.computed(() => {
          const e3 = m.value - 1;
          return [t2.offset[0] * m.value + 50 * e3, t2.offset[1] * m.value + 50 * e3];
        }), p = o.computed(() => ({ left: i2.value.x + "%", top: i2.value.y + "%", transition: `transform ${r2.value.animateDuration}ms`, transform: `translate(${f.value[0]}%, ${f.value[1]}%) rotate(${t2.rotate}deg) scale(${m.value})` }));
        return (e3, a3) => (o.openBlock(), o.createElementBlock("div", { style: o.normalizeStyle(p.value), class: "item", onMousedown: d2 }, [o.renderSlot(e3.$slots, "default", {}, void 0, true)], 36));
      } }), [["__scopeId", "data-v-40327a63"]]), d = { install(e2) {
        e2.component("V3DragZoomContainer", i), e2.component("V3DragZoomItem", c);
      } };
      e.Position = u, e.V3DragZoomContainer = i, e.V3DragZoomItem = c, e.default = d, Object.defineProperties(e, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    });
  }
});
export default require_v3_drag_zoom_umd();
//# sourceMappingURL=v3-drag-zoom.js.map
