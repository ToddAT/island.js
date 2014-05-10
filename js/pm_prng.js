(function(global, undefined) {
	var CONSTANT = 2147483647,
        DIFF = 0.4999;

    function PM_PRNG(seed) {
        this.seed = seed || 1;
    };
    
    PM_PRNG.prototype.gen = function() {
        return this.seed = (this.seed * 16807) % CONSTANT;
    };
    
    PM_PRNG.prototype.nextInt = function() {
        return this.gen();
    };
    
    PM_PRNG.prototype.nextDouble = function() {
        return (this.gen() / CONSTANT);
    };
    
    PM_PRNG.prototype.nextIntRange = function(min, max) {
        var dbl = this.nextDouble();
        min = min - DIFF;
        max = max - DIFF;
        return Math.round(min + ((max - min) * dbl));
    };
    
    PM_PRNG.prototype.nextDoubleRange = function(min, max) {
        var dbl = this.nextDouble();
        return min + ((max - min) * this.nextDouble());
    };

    global.PM_PRNG = PM_PRNG;
}(this));