(function (win){
  var doc = win.document;
  var html = doc.documentElement;
  var option = html.getAttribute('data-use-rem');
  if( option === null ) return;
  // defaut 640px；
  var baseWidth = option == 'default' || option == '' || parseInt(option) <= 0 ? 640 : parseInt(option);
  var grids = baseWidth/100,
  resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
  recalc = function() {
    var clientWidth = html.clientWidth || 320; // default to 320 if can't get device-width
    html.style.fontSize = clientWidth / grids + 'px';
  };
  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();

  Date.prototype.pattern = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "一",
        "1": "二",
        "2": "三",
        "3": "四",
        "4": "五",
        "5": "六",
        "6": "天"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
})(window);
