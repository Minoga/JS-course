var Button = function(name, el) {
    this.name = name;
    el.addEventListener('click', this.onclick.bind(this))
};

Button.prototype.onclick = function() {
    console.log(this.name);
    setTimeout(function(){console.log(this.name)}.bind(this), 1000);
    setTimeout(function(){console.log(this.name)}.bind(this), 2000);
};