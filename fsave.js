var css = '#gantibase{width:40%}.btnBlock{padding:6px;margin:10px 10px 7px 10px;background:red;color:#fff;width:70%;border:none;border-radius:6px}.btnBlocks{background:#D73D93;color:#fff;text-decoration:none}.btnBlock:hover{background-color:orange}#progress{margin:40px 0 40px 0}#progressBar{border:none;height:10px;width:100%;z-index:1}progress[value]::-webkit-progress-bar{background-color:#0480cc;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,.25) inset}progress[value]::-webkit-progress-value{background-image:-webkit-linear-gradient(-45deg,transparent 33%,rgba(0,0,0,.1) 33%,rgba(0,0,0,.1) 66%,transparent 66%),-webkit-linear-gradient(top,rgba(255,255,255,.25),rgba(0,0,0,.25)),-webkit-linear-gradient(left,#09c,#f44);-webkit-animation:animate-stripes 5s linear infinite;animation:animate-stripes 5s linear infinite;border-radius:2px;background-size:35px 20px,100% 100%,100% 100%}@-webkit-keyframes animate-stripes{100%{background-position:-100px 0}}@keyframes animate-stripes{100%{background-position:-100px 0}}progress[value]::-webkit-progress-value::after{content:"";width:6px;height:6px;position:absolute;border-radius:100%;right:7px;top:7px;background-color:#fff}progress[value]::-moz-progress-bar{background-image:-moz-linear-gradient(135deg,transparent 33%,rgba(0,0,0,.1) 33%,rgba(0,0,0,.1) 66%,transparent 66%),-moz-linear-gradient(top,rgba(255,255,255,.25),rgba(0,0,0,.25)),-moz-linear-gradient(left,#09c,#f44);border-radius:2px;background-size:35px 20px,100% 100%,100% 100%}progress[value]{background-color:#0480cc;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,.25) inset;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;width:250px;height:15px;color:#00f}#progressBar{border-radius:3px;box-shadow:0 2px 5px rgba(0,0,0,.25) inset}.disabled{pointer-events:none}.sponsor300x250{display:block;width:300px;height:250px;margin:5px;background-color:#ececec}.sponsor320x180{display:block;width:320px;height:180px;margin:5px;background-color:#ececec}#teks-sponsor{margin:auto;padding:auto;position:relative;top:30%;color:#f4765b;font-size:2.5em;line-height:55px}.switch{position:relative;display:inline-block;width:35px;height:15px;border:1px solid #547991;border-radius:34px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:0 0;-webkit-transition:.3s;transition:.3s}.slider:before{position:absolute;content:"";height:13px;width:13px;left:1px;bottom:.9px;background-color:#d41b1c;-webkit-transition:.3s;transition:.3s}input:checked+.slider{background-color:#008cb7}input:focus+.slider{box-shadow:0 0 1px #008cb7}input:checked+.slider:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}.pross{background-color:rgb(1,161,634,.7)!important;color:#fff;padding:7px 10px!important;border:1px solid #0197db;border-radius:4px;cursor:pointer}#pros:hover{background-color:#45a049}#bawahnih{text-align:center;}#bawahnih a {background:green;color:#ffffff; width:100% !important;margin-top:2px;margin-bottom:2px; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}








_("GueNihLink").innerHTML = '<div id="progress" style="text-align:center;display:none;"><progress id="progressBar" value="" max="100" min="0" style="width:80%"></progress><br/><small id="status"></small> <span id="loaded_n_total"></span></div><!--BtnStart--><div class="PageShortlink" style="text-align:center"><span id="demo"></span></div>';








// Fungsi buat mengambil field URL
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Fungsi buat mengatasi Field Yang dobel atau kosong
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}


// Fungsi buat mengambil elemen berdasatkan id
function _(el) {
  return document.getElementById(el);
}

// Fungsi buat menggerakan proggressbar
function updateProgressBar(mytext) {
// var progressBar = _("progressBar");
var catatan = _("status");
  var percentage = 100;
  var curr = progressBar.value;
  var update = setInterval(function() {
// Variable My Text buat kondisi




    if (curr > percentage) {
      clearInterval(update);
    }
    progressBar.value = curr++;

var cxc = curr++;
catatan.innerHTML = 'Memuat URL <b> '+ cxc + '%</b> dimuat.. Mohon tunggu';


if (cxc >= 100){
progressBar.value = 0;
_("progress").style = "display:none";
_("demo").innerHTML = '<p style="color:red">Selesai, Scroll perlahan ke bagian bawah dan klik tombol &quot;DnL0dT&quot; warna hijau dibawah ya</p>';
_("bawahnih").innerHTML = '<p><a href="'+mytext+'" rel="nofollow noopener" target="_blank" class="btnBlock btnBlocks">DnL0dt</a></p>';
}

  }, 450);
}

<!DOCTYPE html>
<html lang=en>
<meta charset=utf-8>
<head> <meta name=viewport content="width=device-width,initial-scale=1">
<title>RyanID Recapcha Demo</title>
</head><html><body>
<form action="" method="post">

<div class="g-recaptcha" data-sitekey="6Ldpa5EdAAAAAGYNC2WqCtl3vDwDtG8fMEjwNIxz" data-callback="RyanWikwiks"></div>
<input type="button" disabled>Ini adalah Button</button>
</form>
<script>function RyanWikwiks(){
document.getElementById("tombolku").disabled=false;}</script>
</body></html>  

function RyanWikwiks(mytext){
updateProgressBar(mytext);
}

var mytext = localStorage.getItem("data_url");
// is not null
if (mytext ){
_("progress").style = 'display:block;text-align:center';
_("status").innerHTML='Memuat URL <b> 0%</b> dimuat.. Mohon tunggu';
window.addEventListener?window.addEventListener("load",RyanWikwiks(mytext),!1):window.attachEvent?window.attachEvent("onload",RyanWikwiks(mytext)):window.onload=RyanWikwiks(mytext);
localStorage.removeItem("data_url");
}



/*

Required add two div in your html page
Put <div id="GueNihLink"></div> in top article
Also put <div id="bawahnih"></div> in bottom article
 
then call the scripts...

*/



