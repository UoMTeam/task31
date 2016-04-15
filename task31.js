/**
 * Created by jiangyiming on 4/15/16.
 */
window.onload=function(){
    var oInschool = document.getElementById("inschool");
    var oOutschool = document.getElementById("outschool");
    addEventHandler(oInschool,"change",modify);
    addEventHandler(oOutschool,"change",modify);
};
function modify(){
    if (this==document.getElementById("inschool")){
        document.getElementById("company").style.visibility="hidden"
        document.getElementById("select").style.visibility="visible"
    }else {
        document.getElementById("select").style.visibility="hidden"
        document.getElementById("company").style.visibility="visible"

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