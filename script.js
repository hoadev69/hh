var dx, xp, yp, am, stx, sty, no = 500,
    hidesnowtime = 0,
    snowdistance = "pageheight",
    ie4up = document.all ? 1 : 0,
    ns6up = document.getElementById && !document.all ? 1 : 0;

function iecompattest() {
    return document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body
}
var i, doc_width = 800,
    doc_height = 600;
for (ns6up ? (doc_width = self.innerWidth, doc_height = self.innerHeight) : ie4up && (doc_width = iecompattest().clientWidth, doc_height = iecompattest().clientHeight), dx = new Array, xp = new Array, yp = new Array, am = new Array, stx = new Array, sty = new Array, i = 0; i < no; ++i) dx[i] = 0, xp[i] = Math.random() * (doc_width - 50), yp[i] = Math.random() * doc_height, am[i] = 20 * Math.random(), stx[i] = .02 + Math.random() / 10, sty[i] = .7 + Math.random(), (ie4up || ns6up) && document.write('<div id="dot' + i + '" style="POSITION:absolute;Z-INDEX:' + i + ';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:16px;color:#FF0000">*</span></div>');

function snowIE_NS6() {
    for (doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10, doc_height = window.innerHeight && "windowheight" == snowdistance ? window.innerHeight : ie4up && "windowheight" == snowdistance ? iecompattest().clientHeight : ie4up && !window.opera && "pageheight" == snowdistance ? iecompattest().scrollHeight : iecompattest().offsetHeight, i = 0; i < no; ++i) yp[i] += sty[i], yp[i] > doc_height - 50 && (xp[i] = Math.random() * (doc_width - am[i] - 30), yp[i] = 0, stx[i] = .02 + Math.random() / 10, sty[i] = .7 + Math.random()), dx[i] += stx[i], document.getElementById("dot" + i).style.top = yp[i] + "px", document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
    snowtimer = setTimeout("snowIE_NS6()", 10)
}

function hidesnow() {
    for (window.snowtimer && clearTimeout(snowtimer), i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "hidden"
}(ie4up || ns6up) && (snowIE_NS6(), hidesnowtime > 0 && setTimeout("hidesnow()", 1e3 * hidesnowtime));
