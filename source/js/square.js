$(function(){
    var time = 60;
    $(".time").html(time);
    $("#start_btn").click(function(){
        setInterval(function () {
            time = time - 1;
            $(".time").html(time);
            if(time == 0){
                // alert("时间到了，你的得分是：");
                //TODO:切换到重试界面
            }
        }, 1000);
    });
});

getColor = function(a) {
    var b = [Math.round(Math.random() * a), Math.round(Math.random() * a), Math.round(Math.random() * a)],
        c = "rgb(" + b.join(",") + ")";
    return [b, c]
};
getLvColor = function(a, b) {
    var b = b || 5,
        c = [a[0] + 10*b, a[1] + 10*b, a[2] + 10*b];
        d = "rgb(" + c.join(",") + ")";
    return [c, d]
};