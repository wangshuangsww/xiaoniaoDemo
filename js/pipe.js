/**
 * Created by shuang on 2016/7/8.
 */
function Pipe(cvs,ctx,x) {
    if (!Pipe.isInit) {
        throw "未初始化";
    }
    
    this.cvs=cvs;
    this.ctx=ctx;
    this.space = 150;
    this.x = x;
    this.height = Math.random() * 200 + 50;   //高度随机生成
    this.downY = -(Pipe.IMG_HEIGHT - this.height);
    this.upY = this.height + this.space;
    this.width = Pipe.IMG_WIDTH;
    this.speed = -3;
    this.speedPlus = -0.001;

}

Pipe.init = function (imgDown, imgUp) {
    Pipe.imgDown = imgDown;
    Pipe.imgUp = imgUp;
    Pipe.IMG_WIDTH = imgDown.width;
    Pipe.IMG_HEIGHT = imgDown.height;

    if (imgDown && imgUp) {
        Pipe.isInit = true;
    }
}

Pipe.prototype = {
    draw: function () {
        this.ctx.drawImage(Pipe.imgDown, this.x, this.downY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);
        this.ctx.drawImage(Pipe.imgUp, this.x, this.upY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);

        //绘制管道的矩形路径，小鸟的中心碰到路径时游戏结束，判断小鸟的中心是否在矩形路径上
        this.ctx.rect(this.x,this.downY,Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);
        this.ctx.rect(this.x, this.upY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);
        //this.ctx.stroke();
    },

    update: function () {
        //首先计算页面上每次移动多少个，才能保证无缝滚动
        //每个管子之间有两个管子宽度的间隔，当第一个移除之后，拼接到最后一个管子+2个管子宽度的后面
        this.x += this.speed;
        this.speed += this.speedPlus;

        if (this.x < -Pipe.IMG_WIDTH) {
            this.x = this.x + 18 * Pipe.IMG_WIDTH;

            //管子移除之后，更新高度和y轴坐标
            this.height = Math.random() * 200 + 50;   //高度随机生成
            this.downY = -(Pipe.IMG_HEIGHT - this.height);
            this.upY = this.height + this.space;
        }
    }
}