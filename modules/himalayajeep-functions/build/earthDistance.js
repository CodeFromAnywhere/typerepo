"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earthDistance = void 0;
/**
 * returns the distance between two places (not very precise but it's very efficient)
 */
function earthDistance(lat1, long1, lat2, long2, response) {
    var m = Math.PI / 180;
    lat1 = lat1 * m;
    long1 = long1 * m;
    lat2 = lat2 * m;
    long2 = long2 * m;
    var R = 6371e3; // metres of earth radius
    var x = (long2 - long1) * Math.cos((lat1 + lat2) / 2);
    var y = lat2 - lat1;
    var d = Math.sqrt(x * x + y * y) * R;
    return response === "m" ? Math.round(d / 10) * 10 : Math.round(d / 1000);
}
exports.earthDistance = earthDistance;
//# sourceMappingURL=earthDistance.js.map