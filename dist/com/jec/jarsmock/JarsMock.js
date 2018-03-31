"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const JarsMockContextManager_1 = require("./jcad/JarsMockContextManager");
class JarsMock {
    constructor() {
        this._id = null;
        this._contextManager = null;
        if (JarsMock._locked || JarsMock.INSTANCE) {
            throw new jec_commons_1.SingletonError(JarsMock);
        }
        JarsMock._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (JarsMock.INSTANCE === null) {
            JarsMock._locked = false;
            JarsMock.INSTANCE = new JarsMock();
        }
        return JarsMock.INSTANCE;
    }
    initObj() {
        this._id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        this._contextManager = new JarsMockContextManager_1.JarsMockContextManager();
    }
    createContext() {
        this._contextManager.createContext();
    }
    deleteContext() {
        this._contextManager.deleteContext();
    }
    getId() {
        return this._id;
    }
}
JarsMock.INSTANCE = null;
JarsMock._locked = true;
exports.JarsMock = JarsMock;
