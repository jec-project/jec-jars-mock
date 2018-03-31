"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
class JarsMockConnector extends jec_commons_1.AbstractDecoratorConnector {
    constructor(jcadReference, decorator) {
        super(jcadReference, decorator);
    }
}
exports.JarsMockConnector = JarsMockConnector;
