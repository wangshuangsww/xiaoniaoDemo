/**
 * Created by shuang on 2016/7/6.
 */
//天空类
function Sky(cvs,ctx,x) {
    if (!Sky.isInit) {
        throw "请初始化";
    }

    this.cvs=cvs;
    this.ctx=ctx;
    this.x = x || 0; //如果有参数时是x坐标，如果没参数时，默认是0
    this.y = 0;
    this.speed = -2;
    this.speedPlus = -0.5;
}

//天空静态方法
Sky.init = function (img) {
    Sky.img = img;
    Sky.IMG_WIDTH = img.width;
    Sky.IMG_HEIGHT = img.height;

    if (img) {
        Sky.isInit = true;
    }
}

//天空的原型对象中的方法
Sky.prototype = {
    draw: function () {
        this.ctx.drawImage(Sky.img, this.x, this.y);
    },
    update: function () {
        this.x += this.speed;
        this.speed += this.speedPlus;

        //更新天空移到最左边之后的位置
        if (this.x < -Sky.IMG_WIDTH) {
            this.x = this.x + Sky.IMG_WIDTH * 2;
        }
    }

}