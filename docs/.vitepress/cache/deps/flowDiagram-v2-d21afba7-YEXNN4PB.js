import {
  flowRendererV2,
  flowStyles
} from "./chunk-QYM3G6WL.js";
import "./chunk-V3N6HLPP.js";
import {
  flowDb,
  parser$1
} from "./chunk-YWJBUV34.js";
import "./chunk-KYBYKPQ5.js";
import "./chunk-3N6UY6KT.js";
import "./chunk-5CHVVU77.js";
import {
  require_dist,
  setConfig
} from "./chunk-K3ZAVUDO.js";
import {
  require_dayjs_min
} from "./chunk-HBAMDPI3.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-d21afba7.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-d21afba7-YEXNN4PB.js.map
