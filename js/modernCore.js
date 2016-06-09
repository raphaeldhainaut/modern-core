var Core;
(function (Core) {
    'use strict';
    /* ====================================================================
       Dictionary
       ==================================================================== */
    var Dictionary = (function () {
        function Dictionary(init) {
            if (init === void 0) { init = null; }
            this.keys = new Array();
            this.values = new Array();
            if (init) {
                for (var i = 0; i < init.length; i++) {
                    this[init[i].key] = init[i].value;
                    this.keys.push(init[i].key);
                    this.values.push(init[i].value);
                }
            }
        }
        Dictionary.prototype.Add = function (key, value) {
            this[key] = value;
            this.keys.push(key);
            this.values.push(value);
        };
        Dictionary.prototype.Remove = function (key) {
            var index = this.keys.indexOf(key, 0);
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            delete this[key];
        };
        Dictionary.prototype.Keys = function () { return this.keys; };
        Dictionary.prototype.Values = function () { return this.values; };
        Dictionary.prototype.ContainsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        return Dictionary;
    })();
    Core.Dictionary = Dictionary;
})(Core || (Core = {}));
//# sourceMappingURL=modernCore.js.map