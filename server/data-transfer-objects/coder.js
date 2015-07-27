/**
 * Created by adron on 7/26/15.
 * Description: An class around the coder in the system.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Coder = (function () {
    function Coder(theName) {
        this.name = theName;
    }
    Coder.prototype.swapWith = function (teamGroup) {
        if (teamGroup === void 0) { teamGroup = 0; }
        alert(this.name + " swapping " + teamGroup + "m.");
    };
    return Coder;
})();
var SwappingCoder = (function (_super) {
    __extends(SwappingCoder, _super);
    function SwappingCoder(name) {
        _super.call(this, name);
    }
    SwappingCoder.prototype.swapWith = function (meters) {
        if (meters === void 0) { meters = 5; }
        alert("Slithering...");
        _super.prototype.swapWith.call(this, meters);
    };
    return SwappingCoder;
})(Coder);
var SwappeeCoder = (function (_super) {
    __extends(SwappeeCoder, _super);
    function SwappeeCoder(name) {
        _super.call(this, name);
    }
    SwappeeCoder.prototype.swapWith = function (meters) {
        if (meters === void 0) { meters = 45; }
        _super.prototype.swapWith.call(this, meters);
    };
    return SwappeeCoder;
})(Coder);
//# sourceMappingURL=coder.js.map