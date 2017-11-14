/* jshint esversion: 6 */

// #############################################################################
(function()
{
    // #########################################################################
    // Adapted from https://stackoverflow.com/a/41737171/2699475
    Element.prototype.drag = function()
    {
        var mousemove = function(e)
        {
            this.style.left = (e.clientX-this.offsetX)+'px';
            this.style.top  = (e.clientY-this.offsetY)+'px';
        }.bind(this);

        var mouseup = function(e)
        {
            document.body.classList.remove('draggable-move');

            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);

            GM_setValue(`widget_left`, this.style.left);
            GM_setValue(`widget_top`, this.style.top);
        }.bind(this);

        this.addEventListener('mousedown', function(e)
        {
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;

            this.classList.add('draggable');
            document.body.classList.add('draggable-move');

            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }.bind(this));
    };
    // #########################################################################
}
)();
// #############################################################################
