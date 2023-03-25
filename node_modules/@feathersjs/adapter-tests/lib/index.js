"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const basic_1 = __importDefault(require("./basic"));
const methods_1 = __importDefault(require("./methods"));
const syntax_1 = __importDefault(require("./syntax"));
const adapterTests = (testNames) => {
    return (app, errors, serviceName, idProp = 'id') => {
        if (!serviceName) {
            throw new Error('You must pass a service name');
        }
        const skippedTests = [];
        const allTests = [];
        const test = (name, runner) => {
            const skip = !testNames.includes(name);
            const its = skip ? it.skip : it;
            if (skip) {
                skippedTests.push(name);
            }
            allTests.push(name);
            its(name, runner);
        };
        describe(`Adapter tests for '${serviceName}' service with '${idProp}' id property`, () => {
            after(() => {
                testNames.forEach((name) => {
                    if (!allTests.includes(name)) {
                        console.error(`WARNING: '${name}' test is not part of the test suite`);
                    }
                });
                if (skippedTests.length) {
                    console.log(`\nSkipped the following ${skippedTests.length} Feathers adapter test(s) out of ${allTests.length} total:`);
                    console.log(JSON.stringify(skippedTests, null, '  '));
                }
            });
            (0, basic_1.default)(test, app, errors, serviceName, idProp);
            (0, methods_1.default)(test, app, errors, serviceName, idProp);
            (0, syntax_1.default)(test, app, errors, serviceName, idProp);
        });
    };
};
__exportStar(require("./declarations"), exports);
exports.default = adapterTests;
if (typeof module !== 'undefined') {
    module.exports = Object.assign(adapterTests, module.exports);
}
//# sourceMappingURL=index.js.map