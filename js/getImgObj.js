/**
 * Created by shuang on 2016/7/6.
 */
function getImgObj(fn) {
    //    图片路径对象
    var imgePath = {
        "birds": "image/birds.png",
        "land": "image/land.png",
        "pipeUp": "image/pipeUp.png",
        "pipeDown": "image/pipeDown.png",
        "sky": "image/sky.png"
    }

    var imageObj = {};
    var imgCount = 0;

//    获取每个图片的路径
    for (var k in imgePath) {
        var path = imgePath[k];

        var img = new Image();

//        监听图片是否加载完成
        img.addEventListener("load", function () {
//            每循环一次，图片计数累加一次
            imgCount++;
            if (imgCount >= 5) {
//                    所有图片加载完成之后，调用游戏函数，将保存的图片对象传递过去
                fn(imageObj);
            }
        });

        img.src = path;

//        用一个对象来存储每个路径下的图片
        imageObj[k] = img;
    }

}