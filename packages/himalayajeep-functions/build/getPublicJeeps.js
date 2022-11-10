"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicJeeps = void 0;
var database_1 = require("database");
var earthDistance_1 = require("./earthDistance");
var getPublicJeeps = function (position) { return __awaiter(void 0, void 0, void 0, function () {
    var jeeps, publicJeeps, sorted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("JeepType")];
            case 1:
                jeeps = _a.sent();
                publicJeeps = jeeps.map(function (jeep) {
                    var amountLuggageUnitsLeft = jeep.amountLuggageUnitsLeft, amountSeatsLeft = jeep.amountSeatsLeft, createdAt = jeep.createdAt, id = jeep.id, name = jeep.name, note = jeep.note, updatedAt = jeep.updatedAt, email = jeep.email, locationsCalculated = jeep.locationsCalculated, phone = jeep.phone;
                    var publicJeep = {
                        amountLuggageUnitsLeft: amountLuggageUnitsLeft,
                        amountSeatsLeft: amountSeatsLeft,
                        createdAt: createdAt,
                        id: id,
                        name: name,
                        note: note,
                        updatedAt: updatedAt,
                        email: email,
                        locationsCalculated: locationsCalculated,
                        phone: phone,
                    };
                    return publicJeep;
                });
                sorted = publicJeeps.sort(function (a, b) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    var distanceA = (0, earthDistance_1.earthDistance)(((_b = (_a = a.locationsCalculated) === null || _a === void 0 ? void 0 : _a.pop()) === null || _b === void 0 ? void 0 : _b.latitude) || 0, ((_d = (_c = a.locationsCalculated) === null || _c === void 0 ? void 0 : _c.pop()) === null || _d === void 0 ? void 0 : _d.longitude) || 0, (position === null || position === void 0 ? void 0 : position.latitude) || 0, (position === null || position === void 0 ? void 0 : position.longitude) || 0, "m");
                    var distanceB = (0, earthDistance_1.earthDistance)(((_f = (_e = b.locationsCalculated) === null || _e === void 0 ? void 0 : _e.pop()) === null || _f === void 0 ? void 0 : _f.latitude) || 0, ((_h = (_g = b.locationsCalculated) === null || _g === void 0 ? void 0 : _g.pop()) === null || _h === void 0 ? void 0 : _h.longitude) || 0, (position === null || position === void 0 ? void 0 : position.latitude) || 0, (position === null || position === void 0 ? void 0 : position.longitude) || 0, "m");
                    return distanceA < distanceB ? -1 : 1;
                });
                return [2 /*return*/, {
                        publicJeeps: sorted,
                    }];
        }
    });
}); };
exports.getPublicJeeps = getPublicJeeps;
//# sourceMappingURL=getPublicJeeps.js.map