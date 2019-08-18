var classify = document.getElementsByClassName("classify");
var classifybox0 = classify[0].getElementsByTagName("li");
var classifybox1 = classify[1].getElementsByTagName("li");
var classifybox2 = classify[2].getElementsByTagName("li");
var classifybox3 = classify[3].getElementsByTagName("li");
var classifybox4 = classify[4].getElementsByTagName("li");

var bdetail = document.getElementsByClassName("bdetail");
var detailsbox0 = bdetail[0].getElementsByClassName("box-details");
var detailsbox1 = bdetail[1].getElementsByClassName("box-details");
var detailsbox2 = bdetail[2].getElementsByClassName("box-details");
var detailsbox3 = bdetail[3].getElementsByClassName("box-details");
var detailsbox4 = bdetail[4].getElementsByClassName("box-details");

togglescreen(classifybox0, detailsbox0);
togglescreen(classifybox1, detailsbox1);
togglescreen(classifybox2, detailsbox2);
togglescreen(classifybox3, detailsbox3);
togglescreen(classifybox4, detailsbox4);

function togglescreen(classifybox, detailsbox) {
    for (var i = 0; i < classifybox.length; i++) {
        classifybox[i].index = i;
        classifybox[i].onmouseover = function () {
            for (var j = 0; j < detailsbox.length; j++) {
                detailsbox[j].style.display = 'none';
            }
            detailsbox[this.index].style.display = 'block';
            $(this).siblings().removeClass("classifyactive");
            $(this).addClass("classifyactive");
        }
    }
}