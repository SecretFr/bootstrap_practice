console.log("Start");
const txt = '{"employee":[' +
    '{"name":"John", "age":"30", "sex":"male", "url":"0.html"},' +
    '{"name":"KIM", "age":"20", "sex":"women", "url":"1.html"}, ' +
    '{"name":"DOE", "age":"25", "sex":"male", "url":"2.html"},' +
    '{"name":"KHAN", "age":"22", "sex":"women", "url":"3.html"}]}';
const obj = JSON.parse(txt);

var url = window.location.pathname;
//url = url + "detail.html";
console.log(url);



var vi = "";
for(var i=0; i<obj.employee.length; i++){
    vi += '<div class="column">'+obj.employee[i].name+'<br>' +
    obj.employee[i].age+'<br>'+'<a class="more" href='+obj.employee[i].url+'>'+'More'+'</a>'+'</div>';
}
//console.log(vi);

document.getElementById('row').innerHTML = vi;