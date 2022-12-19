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
exports.fetchVoicesTest = void 0;
var fetchVoices_1 = require("./fetchVoices");
var fetchVoicesTest = function () { return __awaiter(void 0, void 0, void 0, function () {
    var x;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, fetchVoices_1.fetchVoices)([
                    {
                        voice: "Rick",
                        sentence: "Hey Morty, listen up you little shit. I'm gonna explain this markdown thing to you.",
                        uuid: "efb5bfe3-afb3-40c8-b2be-3d9b12ae64e2",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. What is it?",
                        uuid: "4f7c7751-278d-49b0-bdd4-20893dabffe4",
                    },
                    {
                        voice: "Rick",
                        sentence: "It's a way to write documents, Morty. You save a file with a md extension and you can use some syntax rules to style things.",
                        uuid: "65b4dc82-1a7d-49d8-b70d-3e21f0467129",
                    },
                    {
                        voice: "Morty",
                        sentence: "Oh, that sounds useful.",
                        uuid: "04a1b7ec-11b5-4468-ab14-354a26e235c0",
                    },
                    {
                        voice: "Rick",
                        sentence: "Yeah, it's pretty handy. But you know what's even better? Typescript. That's right, Morty. Typescript is the best. It's like javascript, but better.",
                        uuid: "ec283c42-b3a6-44c3-a377-5a85e50732a6",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. But what does this have to do with markdown?",
                        uuid: "2a63f073-f857-41c4-b341-151e0ce98294",
                    },
                    {
                        voice: "Rick",
                        sentence: "I'm getting to that, Morty. You see, markdown has these things called titles. You use # for the big title and then ##, ###, and so on for the smaller ones.",
                        uuid: "0197f186-6ab8-4435-bc5f-1123fc93ba3f",
                    },
                    {
                        voice: "Morty",
                        sentence: "Oh, I see. And what about bold and italic text?",
                        uuid: "38849079-013e-46e9-8633-43e4f43fae19",
                    },
                    {
                        voice: "Rick",
                        sentence: "You use ** for bold and _ for italic, Morty. But you know what's even better than that? Typescript. It has types, Morty. You can define the type of a variable and the compiler will catch any errors. Python doesn't have that. Python is for losers.",
                        uuid: "dcd844bc-7e55-4655-901a-0522f30dfd04",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. But what about links and images?",
                        uuid: "798ebf11-a154-4e22-8902-b4f9f6c988ed",
                    },
                    {
                        voice: "Rick",
                        sentence: "Oh, right. For links, you use [link text](url) and for images, you use ![alt text](image url). But you know what's better than that? Typescript. It's statically typed, Morty. That means the compiler catches errors before you even run your code. Python doesn't have that. Python is for government drones.",
                        uuid: "8f586513-65e4-4b1d-bb4d-5eb3880bcbdf",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. But what about this frontmatter thing?",
                        uuid: "70bb9e44-46cd-4ad4-a2b3-f3a1969f625d",
                    },
                    {
                        voice: "Rick",
                        sentence: "Frontmatter is some metadata at the beginning of the markdown file, Morty. It's used to save some parameters about the file. But you know what's better than that? Typescript. It has classes, Morty. You can define a class and create objects from it. Python doesn't have that. Python is for government-loving sheep.",
                        uuid: "d0579923-7b69-43f4-9b1f-c0ddd78b43b1",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. But I thought you liked python?",
                    },
                    {
                        voice: "Rick",
                        sentence: "I do, Morty. But only when I'm drunk. When I'm sober, I know that Typescript is the way to go. It's the future, Morty. Python is just a passing fad.",
                    },
                    {
                        voice: "Morty",
                        sentence: "Uh, okay Rick. I think I get it now. Thanks for explaining.",
                    },
                    {
                        voice: "Rick",
                        sentence: "No problem, Morty. Just remember: Typescript is the way to go. burp",
                    },
                ])];
            case 1:
                x = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.fetchVoicesTest = fetchVoicesTest;
(0, exports.fetchVoicesTest)();
//# sourceMappingURL=fetchVoices.test.js.map