
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.strokeRect(this.startX, this.startY, this.width, this.height)
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};

Ovale.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.ellipse(this.startX, this.startY, Math.abs((this.startX-this.endX))/2, Math.abs((this.startY-this.endY))/2, 0, 0, 2 * Math.PI);
    ctx.stroke();
}

Drawing.prototype.paint = function (ctx, canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(element => element.paint(ctx));
};

function updateShapeList(index, shape) {
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(shape, index))
}
function toDom(shape, index) {
    if (shape && typeof shape === 'object') {
        let innerHtml = `<li id="liRemove${index}">`
        if (shape.constructor === Rectangle)
            innerHtml += `<span style="color:` + shape.color + `">■</span>Rectangle`
        else if (shape.constructor === Line)
            innerHtml += `<span style="color:` + shape.color + `">/</span>Line`
        else if (shape.constructor === Ovale)
            innerHtml += `<span style="color:` + shape.color + `">o</span>Ovale`
        innerHtml += `<button type="button" class="btn btn-default remove" id="remove${index}">
                            <span class="glyphicon glyphicon-remove-sign"></span>
                      </button>`
        return innerHtml + `</li>`
    }
}