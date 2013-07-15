var Button = function(name, el) {
    this.name = name;
    el.addEventListener('click', this.onclick.bind(this))
    this.func = this.log.bind(this);
};
Button.prototype.log = function() {
    console.log(this.name)
}
Button.prototype.onclick = function() {
    this.log();
    setTimeout(this.func, 1000);
    setTimeout(this.func, 2000);
};