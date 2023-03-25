"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.memory = exports.MemoryService = exports.MemoryAdapter = void 0;
var errors_1 = require("@feathersjs/errors");
var commons_1 = require("@feathersjs/commons");
var adapter_commons_1 = require("@feathersjs/adapter-commons");
var sift_1 = require("sift");
var _select = function (data, params) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var base = adapter_commons_1.select.apply(void 0, __spreadArray([params], args, false));
    return base(JSON.parse(JSON.stringify(data)));
};
var MemoryAdapter = /** @class */ (function (_super) {
    __extends(MemoryAdapter, _super);
    function MemoryAdapter(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, __assign({ id: 'id', matcher: sift_1["default"], sorter: adapter_commons_1.sorter, store: {}, startId: 0 }, options)) || this;
        _this._uId = _this.options.startId;
        _this.store = __assign({}, _this.options.store);
        return _this;
    }
    MemoryAdapter.prototype.getEntries = function (_params) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = _params || {};
                return [2 /*return*/, this._find(__assign(__assign({}, params), { paginate: false }))];
            });
        });
    };
    MemoryAdapter.prototype.getQuery = function (params) {
        var _a = params.query || {}, $skip = _a.$skip, $sort = _a.$sort, $limit = _a.$limit, $select = _a.$select, query = __rest(_a, ["$skip", "$sort", "$limit", "$select"]);
        return {
            query: query,
            filters: { $skip: $skip, $sort: $sort, $limit: $limit, $select: $select }
        };
    };
    MemoryAdapter.prototype._find = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paginate, _a, query, filters, values, total, hasSkip, hasSort, hasLimit, hasQuery, skipped, matcher, matched, index, length_1, value, result;
            var _this = this;
            return __generator(this, function (_b) {
                paginate = this.getOptions(params).paginate;
                _a = this.getQuery(params), query = _a.query, filters = _a.filters;
                values = commons_1._.values(this.store);
                total = values.length;
                hasSkip = filters.$skip !== undefined;
                hasSort = filters.$sort !== undefined;
                hasLimit = filters.$limit !== undefined;
                hasQuery = commons_1._.keys(query).length > 0;
                if (hasSort) {
                    values.sort(this.options.sorter(filters.$sort));
                }
                if (hasQuery || hasLimit || hasSkip) {
                    skipped = 0;
                    matcher = this.options.matcher(query);
                    matched = [];
                    for (index = 0, length_1 = values.length; index < length_1; index++) {
                        value = values[index];
                        if (hasQuery && !matcher(value, index, values)) {
                            continue;
                        }
                        if (hasSkip && filters.$skip > skipped) {
                            skipped++;
                            continue;
                        }
                        matched.push(_select(value, params, this.id));
                        if (hasLimit && filters.$limit === matched.length) {
                            break;
                        }
                    }
                    values = matched;
                }
                else {
                    values = values.map(function (value) { return _select(value, params, _this.id); });
                }
                result = {
                    total: hasQuery ? values.length : total,
                    limit: filters.$limit,
                    skip: filters.$skip || 0,
                    data: filters.$limit === 0 ? [] : values
                };
                if (!paginate) {
                    return [2 /*return*/, result.data];
                }
                return [2 /*return*/, result];
            });
        });
    };
    MemoryAdapter.prototype._get = function (id, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var query, value;
            return __generator(this, function (_a) {
                query = this.getQuery(params).query;
                if (id in this.store) {
                    value = this.store[id];
                    if (this.options.matcher(query)(value)) {
                        return [2 /*return*/, _select(value, params, this.id)];
                    }
                }
                throw new errors_1.NotFound("No record found for id '".concat(id, "'"));
            });
        });
    };
    MemoryAdapter.prototype._create = function (data, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var id, current, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                if (Array.isArray(data)) {
                    return [2 /*return*/, Promise.all(data.map(function (current) { return _this._create(current, params); }))];
                }
                id = data[this.id] || this._uId++;
                current = commons_1._.extend({}, data, (_a = {}, _a[this.id] = id, _a));
                result = (this.store[id] = current);
                return [2 /*return*/, _select(result, params, this.id)];
            });
        });
    };
    MemoryAdapter.prototype._update = function (id, data, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var oldEntry, oldId;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (id === null || Array.isArray(data)) {
                            throw new errors_1.BadRequest("You can not replace multiple instances. Did you mean 'patch'?");
                        }
                        return [4 /*yield*/, this._get(id)
                            // We don't want our id to change type if it can be coerced
                        ];
                    case 1:
                        oldEntry = _b.sent();
                        oldId = oldEntry[this.id];
                        // eslint-disable-next-line eqeqeq
                        id = oldId == id ? oldId : id;
                        this.store[id] = commons_1._.extend({}, data, (_a = {}, _a[this.id] = id, _a));
                        return [2 /*return*/, this._get(id, params)];
                }
            });
        });
    };
    MemoryAdapter.prototype._patch = function (id, data, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var query, patchEntry, entries, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (id === null && !this.allowsMulti('patch', params)) {
                            throw new errors_1.MethodNotAllowed('Can not patch multiple entries');
                        }
                        query = this.getQuery(params).query;
                        patchEntry = function (entry) {
                            var currentId = entry[_this.id];
                            _this.store[currentId] = commons_1._.extend(_this.store[currentId], commons_1._.omit(data, _this.id));
                            return _select(_this.store[currentId], params, _this.id);
                        };
                        if (!(id === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getEntries(__assign(__assign({}, params), { query: query }))];
                    case 1:
                        entries = _b.sent();
                        return [2 /*return*/, entries.map(patchEntry)];
                    case 2:
                        _a = patchEntry;
                        return [4 /*yield*/, this._get(id, params)];
                    case 3: return [2 /*return*/, _a.apply(void 0, [_b.sent()])]; // Will throw an error if not found
                }
            });
        });
    };
    MemoryAdapter.prototype._remove = function (id, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var query, entries, entry;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === null && !this.allowsMulti('remove', params)) {
                            throw new errors_1.MethodNotAllowed('Can not remove multiple entries');
                        }
                        query = this.getQuery(params).query;
                        if (!(id === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getEntries(__assign(__assign({}, params), { query: query }))];
                    case 1:
                        entries = _a.sent();
                        return [2 /*return*/, Promise.all(entries.map(function (current) { return _this._remove(current[_this.id], params); }))];
                    case 2: return [4 /*yield*/, this._get(id, params)];
                    case 3:
                        entry = _a.sent();
                        delete this.store[id];
                        return [2 /*return*/, entry];
                }
            });
        });
    };
    return MemoryAdapter;
}(adapter_commons_1.AdapterBase));
exports.MemoryAdapter = MemoryAdapter;
var MemoryService = /** @class */ (function (_super) {
    __extends(MemoryService, _super);
    function MemoryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemoryService.prototype.find = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this._find;
                        _b = [__assign({}, params)];
                        _c = {};
                        return [4 /*yield*/, this.sanitizeQuery(params)];
                    case 1: return [2 /*return*/, _a.apply(this, [__assign.apply(void 0, _b.concat([(_c.query = _d.sent(), _c)]))])];
                }
            });
        });
    };
    MemoryService.prototype.get = function (id, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this._get;
                        _b = [id];
                        _c = [__assign({}, params)];
                        _d = {};
                        return [4 /*yield*/, this.sanitizeQuery(params)];
                    case 1: return [2 /*return*/, _a.apply(this, _b.concat([__assign.apply(void 0, _c.concat([(_d.query = _e.sent(), _d)]))]))];
                }
            });
        });
    };
    MemoryService.prototype.create = function (data, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Array.isArray(data) && !this.allowsMulti('create', params)) {
                    throw new errors_1.MethodNotAllowed('Can not create multiple entries');
                }
                return [2 /*return*/, this._create(data, params)];
            });
        });
    };
    MemoryService.prototype.update = function (id, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this._update;
                        _b = [id, data];
                        _c = [__assign({}, params)];
                        _d = {};
                        return [4 /*yield*/, this.sanitizeQuery(params)];
                    case 1: return [2 /*return*/, _a.apply(this, _b.concat([__assign.apply(void 0, _c.concat([(_d.query = _e.sent(), _d)]))]))];
                }
            });
        });
    };
    MemoryService.prototype.patch = function (id, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, $limit, query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.sanitizeQuery(params)];
                    case 1:
                        _a = _b.sent(), $limit = _a.$limit, query = __rest(_a, ["$limit"]);
                        return [2 /*return*/, this._patch(id, data, __assign(__assign({}, params), { query: query }))];
                }
            });
        });
    };
    MemoryService.prototype.remove = function (id, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, $limit, query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.sanitizeQuery(params)];
                    case 1:
                        _a = _b.sent(), $limit = _a.$limit, query = __rest(_a, ["$limit"]);
                        return [2 /*return*/, this._remove(id, __assign(__assign({}, params), { query: query }))];
                }
            });
        });
    };
    return MemoryService;
}(MemoryAdapter));
exports.MemoryService = MemoryService;
function memory(options) {
    if (options === void 0) { options = {}; }
    return new MemoryService(options);
}
exports.memory = memory;
