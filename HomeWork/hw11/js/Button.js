var Button = function(name, el) {
    this.name = name;
    el.addEventListener('click', this.onclick.bind(this))
};
Button.prototype.log = function(name) {
    console.log(name)
}
Button.prototype.onclick = function() {
    this.log(this.name);
    setTimeout(this.log.bind(this,this.name), 1000);
    setTimeout(this.log.bind(this,this.name), 2000);
};