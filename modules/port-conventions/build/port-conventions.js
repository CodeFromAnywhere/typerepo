"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ports=void 0,
/**
 * See https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers for available ports
 *
 * Range 42000-42080 seems to have no ports. There are many more ranges
 *
 * When creating a new app, ensure you not only define the port here, but also in
 */
exports.ports={
//server
"function-server":42e3,
// page types (the components here are very specialized in functionality, the components presented here can be used as "plugin" into any app)
"db-web":42002,"markdown-reader-web":42004,"function-web":42011,"writer-web":42007,
// typerepo ()
"search-web":42001,"operation-web":42003,"bundle-web":42013,
// demos and niches
"asset-demo-web":42005,"codestorys-web":42016,"learn-toki-web":42006,"himalayajeep-web":42008,"peer-web":42012,"todo-web":42014,"payment-web":42015,"passionfruit-web":3e3};
//# sourceMappingURL=port-conventions.js.map