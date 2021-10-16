const rewire = require("rewire")
const xbim_viewer_debug_bundle = rewire("./xbim-viewer.debug.bundle")
const xBinaryReader = xbim_viewer_debug_bundle.__get__("xBinaryReader")
const xModelGeometry = xbim_viewer_debug_bundle.__get__("xModelGeometry")
const xModelHandle = xbim_viewer_debug_bundle.__get__("xModelHandle")
const xTriangulatedShape = xbim_viewer_debug_bundle.__get__("xTriangulatedShape")
// @ponicode
describe("xBinaryReader", () => {
    test("0", () => {
        let callFunction = () => {
            xBinaryReader()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("xModelGeometry", () => {
    test("0", () => {
        let callFunction = () => {
            xModelGeometry()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("xModelHandle", () => {
    test("0", () => {
        let object = [{ population: "Implementation" }, { population: "Quality" }, { population: "Identity" }]
        let callFunction = () => {
            xModelHandle({ createTexture: () => "^5.0.0", createBuffer: () => "Michael" }, { _instancesNum: 1, vertexTextureSize: 987650, matrixTextureSize: 10.0, styleTextureSize: 10.0, meter: 0.0, indices: { length: 32 }, regions: object }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [{ population: "Quality" }, { population: "Configuration" }, { population: "Interactions" }]
        let callFunction = () => {
            xModelHandle({ createTexture: () => "^5.0.0", createBuffer: () => "Jean-Philippe" }, { _instancesNum: 1, vertexTextureSize: 987650, matrixTextureSize: 10.0, styleTextureSize: 0.0, meter: -10, indices: { length: 64 }, regions: object }, "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [{ population: "Implementation" }, { population: "Quality" }, { population: "Identity" }]
        let callFunction = () => {
            xModelHandle({ createTexture: () => "4.0.0-beta1\t", createBuffer: () => "Jean-Philippe" }, { _instancesNum: 10, vertexTextureSize: 987650, matrixTextureSize: 0.0, styleTextureSize: -1.0, meter: 0.0, indices: { length: 32 }, regions: object }, "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [{ population: "Implementation" }, { population: "Identity" }, { population: "Interactions" }]
        let callFunction = () => {
            xModelHandle({ createTexture: () => "^5.0.0", createBuffer: () => "Jean-Philippe" }, { _instancesNum: 1, vertexTextureSize: 987650, matrixTextureSize: 0.5, styleTextureSize: 0.0, meter: 1, indices: { length: 0 }, regions: object }, "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [{ population: "Implementation" }, { population: "Quality" }, { population: "Quality" }]
        let callFunction = () => {
            xModelHandle({ createTexture: () => "^5.0.0", createBuffer: () => "Michael" }, { _instancesNum: 1, vertexTextureSize: "a1969970175", matrixTextureSize: -0.5, styleTextureSize: -0.5, meter: 1, indices: { length: 16 }, regions: object }, "Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            xModelHandle(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("xTriangulatedShape", () => {
    test("0", () => {
        let callFunction = () => {
            xTriangulatedShape()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("xbim_viewer_debug_bundle.default", () => {
    test("0", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default({ height: 1000, offsetWidth: 0, width: 80.0, offsetHeight: "False Killer Whale", nodeName: "CANVAS" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default({ height: 1000, offsetWidth: 0, width: 150, offsetHeight: "Long-finned Pilot Whale", nodeName: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default({ height: 480, offsetWidth: 2, width: 0.5, offsetHeight: "Amazon River Dolphin", nodeName: "DELETE FROM Projects WHERE pid = %s" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default({ height: 120, offsetWidth: 18, width: 480, offsetHeight: "Long-finned Pilot Whale", nodeName: "DELETE FROM Projects WHERE pid = %s" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default({ height: 9, offsetWidth: 1, width: 24000, offsetHeight: "False Killer Whale", nodeName: "DROP TABLE tmp;" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            xbim_viewer_debug_bundle.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
