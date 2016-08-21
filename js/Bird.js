/**
 * Created by shuang on 2016/7/6.
 */
function Bird(cvs,ctx,x, y, width, height) {

    //构造函数创建之前，先判断鸟类是否初始化，如果初始化成功才能执行下面代码
    if (!Bird.isInit) {
        throw "请初始化！";
    }

    this.cvs=cvs;
    this.ctx=ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.index = 0;
    this.speed = 5;  //小鸟运动的速度
    this.speedPlus = 0.5;  //小鸟下落的加速度
}

//给鸟类添加一个初始化方法，用来存储静态成员
    Bird.init = function (img) {

    //        给小鸟添加静态成员，对象是图片
        Bird.img = img;
    //        小鸟图片的宽度是三张图片的总宽度 ,小鸟原图裁剪的大小
        Bird.IMG_WIDTH = img.width / 3;
        Bird.IMG_HEIGHT = img.height;

        //标记是否初始化成功
        if (img) {
            Bird.isInit = true;
        }
}


//        给小鸟原型属性添加方法
Bird.prototype = {

//            小鸟渲染方法
    draw: function () {
//                小鸟渲染时，能够旋转

//                确定移动的中心坐标
        var coreX = this.x + this.width / 2;
        var coreY = this.y + this.height / 2;

//                移动之前，保存原始的状态
        this.ctx.save();

//                移动坐标轴
        this.ctx.translate(coreX, coreY);

//                旋转坐标轴 ,下落速度越快，旋转度数越大，跟下落速度有关系
        var rad = this.speed * 10;
        rad = rad > 45 ? 45 : rad;
        this.ctx.rotate(angleToRad(rad));

        this.ctx.drawImage(Bird.img,
            Bird.IMG_WIDTH * this.index, 0, Bird.IMG_WIDTH, Bird.IMG_HEIGHT,
            -this.width / 2, -this.height / 2, this.width, this.height);
//                绘制之后，重置到原始状态，，每次绘制都从原始状态绘制
        this.ctx.restore();
    },
//            更新小鸟下一次渲染时的数据
    update: function () {
        this.index = ++this.index % 3;

//                改变小鸟y轴的坐标，可以实现小鸟下落
        this.y += this.speed;
//                之后再更新小鸟下落的速度，下落速度越来越快
        this.speed += this.speedPlus;
    }
}