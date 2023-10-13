import {
  computed,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  inject,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  ref,
  renderSlot,
  vShow,
  withDirectives
} from "./chunk-V634PGSD.js";
import "./chunk-5WWUZCGV.js";

// node_modules/v3-drag-zoom/dist/index.es.js
var he = Object.defineProperty;
var ye = (n, t, o) => t in n ? he(n, t, { enumerable: true, configurable: true, writable: true, value: o }) : n[t] = o;
var M = (n, t, o) => (ye(n, typeof t != "symbol" ? t + "" : t, o), o);
var c = class _c {
  constructor(t, o) {
    M(this, "x");
    M(this, "y");
    this.x = t, this.y = o;
  }
  static fromCurPosition(t) {
    return new _c(t.x, t.y);
  }
  sub(t) {
    return new _c(this.x - t.x, this.y - t.y);
  }
  add(t) {
    return new _c(this.x + t.x, this.y + t.y);
  }
};
var De = async (n) => {
  try {
    const t = n.querySelectorAll("img"), o = Array.from(t).map((d) => (d.draggable = false, new Promise((p) => {
      d.onload = () => {
        p(true);
      };
    })));
    await Promise.all(o), o.length && await be(100);
  } catch (t) {
    console.error(t);
  }
};
var Q = class {
  constructor() {
    M(this, "onMousedown", () => {
    });
    M(this, "onMousemove", () => {
    });
    M(this, "onMouseup", () => {
    });
    M(this, "onMouseleave", () => {
    });
    M(this, "onMousewheel", () => {
    });
  }
};
var U = (n) => [n.offsetWidth, n.offsetHeight];
var Ee = (n, t) => {
  const o = t.getBoundingClientRect();
  return new c(n.clientX - o.left, n.clientY - o.top);
};
var be = async (n) => new Promise((t) => setTimeout(t, n));
var $e = { class: "loading" };
var Ce = defineComponent({
  __name: "v3-drag-zoom",
  props: {
    autoResize: { type: Boolean, default: true },
    followPointer: { type: Boolean, default: true },
    maxZoom: { default: 100 },
    minZoom: { default: 0.01 },
    align: { default: "contain" },
    zoomFactor: { default: 0.1 },
    draggable: { type: Boolean, default: true },
    zoomable: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    animateDuration: { default: 200 }
  },
  setup(n, { expose: t }) {
    const o = n, d = ref(false), p = computed(() => o.loading || d.value), h = ref(), v = ref(0), u = ref(0), x = () => {
      h.value == null && console.warn("container is not loaded"), [v.value, u.value] = U(h.value);
    };
    onMounted(x);
    const R = ref(), r = ref(0), y = ref(0), T = computed(() => (v.value - r.value) / 2), z = computed(() => (u.value - y.value) / 2), B = () => {
      h.value == null && console.warn("content is not loaded"), [r.value, y.value] = U(R.value);
    }, m = ref(1), W = computed(() => ({
      min: m.value * o.minZoom,
      max: m.value * o.maxZoom
    })), F = computed(() => v.value / u.value), E = computed(() => r.value / y.value), i = ref(1), w = ref(1), $ = ref(1), b = computed(() => $.value), te = () => {
      F.value > E.value ? (i.value = v.value, w.value = v.value / E.value) : (i.value = u.value * E.value, w.value = u.value), m.value = i.value / r.value, $.value = m.value;
    }, oe = () => {
      F.value > E.value ? (i.value = u.value * E.value, w.value = u.value) : (i.value = v.value, w.value = v.value / E.value), m.value = i.value / r.value, $.value = m.value;
    }, ne = () => {
      i.value = r.value, w.value = y.value, m.value = i.value / r.value, $.value = m.value;
    }, L = ref(0), A = ref(0), C = ref(0), P = ref(0), ae = computed(() => L.value + C.value), le = computed(() => A.value + P.value), ue = () => {
      L.value = T.value, A.value = z.value;
    }, V = () => {
      Y(), C.value = 0, P.value = 0;
    }, Y = () => {
      switch (x(), B(), o.align) {
        case "cover":
          te();
          break;
        case "contain":
          oe();
          break;
        case "auto":
          ne();
          break;
      }
      ue();
    }, D = ref(false), S = ref(new c(0, 0)), _ = new Q();
    _.onMousedown = () => {
      o.draggable && (D.value = true);
    };
    const se = (e) => {
      S.value = new c(e.clientX, e.clientY), f.forEach((a) => a.onMousedown(e));
    }, Z = ref(new c(0, 0));
    _.onMousemove = () => {
      if (!D.value)
        return;
      const e = Z.value.sub(S.value);
      C.value += e.x, P.value += e.y, S.value = Z.value;
    };
    const re = (e) => {
      Z.value = new c(e.clientX, e.clientY);
      const a = Z.value.sub(S.value);
      f.forEach(
        (g) => g.onMousemove(
          e,
          a,
          new c(
            a.x * 100 / i.value,
            a.y * 100 / w.value
          )
        )
      ), S.value = Z.value;
    };
    _.onMouseup = () => {
      D.value && (D.value = false);
    };
    const ve = (e) => {
      f.forEach((a) => a.onMouseup(e));
    };
    _.onMouseleave = () => {
      D.value && (D.value = false);
    };
    const ce = (e) => {
      f.forEach((a) => a.onMouseleave(e));
    }, X = computed(() => new c(
      C.value + v.value / 2,
      P.value + u.value / 2
    )), ie = (e, a) => {
      const g = b.value + b.value * e;
      g < W.value.min || g > W.value.max || ($.value = g, i.value = r.value * g, w.value = y.value * g, !(!o.followPointer || !a) && (C.value += (X.value.x - a.x) * e, P.value += (X.value.y - a.y) * e));
    };
    _.onMousewheel = (e, a) => {
      o.zoomable && ie(a, Ee(e, h.value));
    };
    const fe = (e) => {
      e.preventDefault();
      const g = (e.deltaY > 0 ? -1 : 1) * o.zoomFactor, ge = b.value + b.value * g;
      f.forEach((pe) => pe.onMousewheel(e, g, ge));
    };
    onMounted(async () => {
      d.value = true, await De(h.value), d.value = false, V();
    });
    const de = computed(() => ({
      transform: `translate(${ae.value}px, ${le.value}px) scale(${b.value})`,
      transition: D.value || p.value ? "none" : `transform ${o.animateDuration}ms`,
      opacity: p.value ? 0 : 1
    })), me = () => {
      let e = 0;
      return () => {
        e && clearTimeout(e), e = setTimeout(() => {
          Y();
        }, 100);
      };
    }, O = new ResizeObserver(me());
    onMounted(() => {
      if (o.autoResize) {
        const e = h.value.parentElement;
        e && O.observe(e);
      }
    });
    let f = [_];
    const I = (e) => {
      f = f.filter((a) => a !== e), f.length === 0 && (f = [_]);
    };
    return provide("v3-drag-zoom-item", {
      contentZoom: b,
      currentContentSize: {
        width: i,
        height: w
      },
      orgContentSize: {
        width: r,
        height: y
      },
      addDragEvent: (e) => {
        if (!f.includes(e))
          return f.push(e), e != _ && I(_), () => I(e);
      },
      removeDragEvent: I,
      zoomProps: computed(() => o)
    }), onUnmounted(() => {
      O.disconnect();
    }), t({
      reset: V
    }), (e, a) => (openBlock(), createElementBlock("div", {
      class: "container",
      ref_key: "containerRef",
      ref: h,
      onMousedown: se,
      onMousemove: re,
      onMouseleave: ce,
      onMouseup: ve,
      onWheel: fe,
      onselectstart: "return false"
    }, [
      createBaseVNode("div", {
        class: "content",
        ref_key: "contentRef",
        ref: R,
        style: normalizeStyle(de.value)
      }, [
        renderSlot(e.$slots, "default", {}, void 0, true)
      ], 4),
      withDirectives(createBaseVNode("div", $e, [
        renderSlot(e.$slots, "loading", {}, () => [
          createTextVNode(" Loading... ")
        ], true)
      ], 512), [
        [vShow, p.value]
      ])
    ], 544));
  }
});
var ee = (n, t) => {
  const o = n.__vccOpts || n;
  for (const [d, p] of t)
    o[d] = p;
  return o;
};
var Pe = ee(Ce, [["__scopeId", "data-v-ae64c33b"]]);
var Se = {
  install(n) {
    n.component("v3DragZoom", Pe);
  }
};
var Ze = defineComponent({
  __name: "v3-drag-item",
  props: {
    offset: { default: () => [-50, -50] },
    fixedSize: { type: Boolean, default: false },
    rotate: { default: 0 },
    draggable: { type: Boolean, default: false },
    position: {}
  },
  emits: ["onMove", "onMoveFinished"],
  setup(n, { emit: t }) {
    const o = n, { contentZoom: d, addDragEvent: p, zoomProps: h } = inject(
      "v3-drag-zoom-item"
    ), v = new Q(), u = ref(c.fromCurPosition(o.position));
    v.onMousemove = (z, B, m) => {
      u.value = u.value.add(m), t("onMoveFinished", u.value);
    };
    let x = new Function();
    onUnmounted(() => x()), v.onMouseup = () => {
      x(), t("onMoveFinished", u.value);
    }, v.onMouseleave = () => {
      x();
    };
    const R = () => {
      o.draggable && (x = p(v));
    }, r = computed(() => o.fixedSize ? 1 / d.value : 1), y = computed(() => {
      const z = r.value - 1;
      return [o.offset[0] * r.value + z * 50, o.offset[1] * r.value + z * 50];
    }), T = computed(() => ({
      left: u.value.x + "%",
      top: u.value.y + "%",
      transition: `transform ${h.value.animateDuration}ms`,
      transform: `translate(${y.value[0]}%, ${y.value[1]}%) rotate(${o.rotate}deg) scale(${r.value})`
    }));
    return (z, B) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(T.value),
      class: "item",
      onMousedown: R
    }, [
      renderSlot(z.$slots, "default", {}, void 0, true)
    ], 36));
  }
});
var Re = ee(Ze, [["__scopeId", "data-v-1dde4b00"]]);
var Te = {
  install(n) {
    n.component("v3DragItem", Re);
  }
};
var Be = [Se, Te];
var We = {
  install(n) {
    Be.forEach((t) => n.use(t));
  }
};
export {
  We as default
};
//# sourceMappingURL=v3-drag-zoom.js.map
