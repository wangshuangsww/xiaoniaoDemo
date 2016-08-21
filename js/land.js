/**
 * Created by shuang on 2016/7/7.
 */
//大地类
function Land(cvs,ctx,x) {
    if (!Land.isInit) {
        throw "请初始化";
    }

    this.cvs=cvs;
    this.ctx=ctx;
    this.x = x || 0;
    this.y = cvs.height - Land.IMG_HEIGHT;  //画布的高度-大地图片的高度
    this.width = Land.IMG_WIDTH;
    this.height = Land.IMG_HEIGHT;
    this.speed = -2;
    this.speedPlus = -0.5;
}

//大地类静态方法
Land.init = function (img) {
    Land.img = img;
    Land.IMG_WIDTH = img.width;
    Land.IMG_HEIGHT = img.height;


    //判断是否初始化
    if (img) {
        Land.isInit = true;
    }
}


//大地类原型对象可继承的方法
Land.prototype = {
    //渲染大地的图片
    draw: function () {
        this.ctx.drawImage(Land.img, this.x, this.y);
    },

    //更新下一帧渲染时的数据
    update: function () {
        this.x += this.speed;
        this.speed += this.speedPlus;

        //由于大地的图片尺寸较小，需要在800px的画布上，渲染四个图片，
        //才能保证第一张图片移出最左边时，后面的图片完整的显示
        if (this.x < -this.width) {
            this.x = this.x + this.width*4;
        }

    }
};