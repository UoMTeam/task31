/**
 * Created by jiangyiming on 4/15/16.
 */
var arr = {"长沙":["湖南大学","中南大学","国防科大"],"北京":["清华大学", "北京大学", "人民大学"],"上海":["复旦大学", "上海财经大学", "上海同济大学"]};

window.onload=function(){
    var oInschool = document.getElementById("inschool");
    var oOutschool = document.getElementById("outschool");
    var oSelect1=document.getElementById("select1");
    addEventHandler(oInschool,"change",modify);
    addEventHandler(oOutschool,"change",modify);
    addEventHandler(oSelect1,"change",change);
};
function change(){
    var oSelect2 = document.getElementById("select2");
    oSelect2.innerHTML="";
    var value =this.options[this.selectedIndex].value;
    for(var i=0;i<arr[value].length;i++){
        var newOpt =document.createElement("option");
        newOpt.value=arr[value][i];
        newOpt.innerHTML = arr[value][i];
        oSelect2.appendChild(newOpt);
    }
}
function modify(){
    if (this==document.getElementById("inschool")){
        document.getElementById("company").style.visibility="hidden";
        document.getElementById("select").style.visibility="visible";
    }else {
        document.getElementById("select").style.visibility="hidden";
        document.getElementById("company").style.visibility="visible";

    }
}
function addEventHandler(ele, event, hanlder) {//浏览器兼容
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}