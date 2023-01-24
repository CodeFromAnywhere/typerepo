"use strict";
// import { setRandomTimezone } from "set-random-timezone";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.time=void 0;
/**
 * To enable possibility to change the timezone in the OS, this is the actually correct time, assuming we are in timezone GMT+1
 */
var time=function(){var e=Date.now(),t=e+6e4*new Date(e).getTimezoneOffset()+36e5,i=new Date(t);
//   console.log({
//     nowMs,
//     myTimeMs,
//     fakeOffsetH: fakeOffsetMs / 3600000,
//     realOffsetMs: realOffsetMs / 3600000,
//   });
//setRandomTimezone();
return{timeString:"".concat(i.getHours(),":").concat(i.getMinutes()),myTimeDate:i,myTimeMs:t}};exports.time=time;
//# sourceMappingURL=time.js.map