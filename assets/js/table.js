console.log("Start");
const txt = '{"employee":[' +
    '{"name":"John", "age":"30", "intro":"Practice BootStrap", "url":"0.html"},' +
    '{"name":"KIM", "age":"20", "intro":"Practice BootStrap", "url":"1.html"}, ' +
    '{"name":"DOE", "age":"25", "intro":"Practice BootStrap", "url":"2.html"},' +
    '{"name":"KHAN", "age":"22", "intro":"Practice BootStrap", "url":"3.html"}]}';
const obj = JSON.parse(txt);

var url = window.location.pathname;
//url = url + "detail.html";
console.log(url);

var vi = "";
var modal = "";
for(var i=0; i<obj.employee.length; i++){
    vi += 
    '<div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">' +
        '<div class="card" style="width: 18rem; margin-bottom: 20px;">' +
            '<img src="" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
                '<h5 class="card-title">'+obj.employee[i].name+'</h5>' +
                '<p class="card-text">'+obj.employee[i].intro+'</p>' +
                '<a href="#" id="modalClick" onClick=modalDetail($("a").index(this)) class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">view</a>' +
            '</div>' + 
        '</div>' +
    '</div>';    
}

$(document).ready(function(){
    $("button").click(function(){
        $("#test").toggle();
    });
});

function modalDetail(idx){
    modal = "";
    console.log(idx);
    modal += '<div>Name : '+obj.employee[idx].name+'</div>' +
    '<div>Age : '+obj.employee[idx].age+'</div>' +
    '<div>Introduce : '+obj.employee[idx].intro+'</div>';
    $("#modal_detail").html(modal);
}

document.getElementById('test').innerHTML = vi;