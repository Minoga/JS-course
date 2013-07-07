function Man(level) {
    this.level = level;
    this.girls = [];
}
Man.prototype.pickUp = function(bitchs) {
    for (var i = 0; i < bitchs.length; i++) {
        if (this.level >= bitchs[i].bitchLevel) {
            this.girls.push(bitchs[i].girlName)
        }
    }
    return (this.girls);
};