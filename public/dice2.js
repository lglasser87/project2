function prng(bounds) {
    let prn = window.crypto.getRandomValues(new Uint16Array(1))[0] * (rn.qrn ? rn.qrn[rn.index++ % rn.qrn.length] : window.crypto.getRandomValues(new Uint16Array(1))[0]);
    if (prn === 0) prn = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * 2147483646) + 1;
    return (prn % 2147483647 * 48271 % 2147483647 / 2147483647 * (bounds[1] - bounds[0]) + bounds[0]).toFixed(Math.max(String(bounds[0]).split('.')[1] ? String(bounds[0]).split('.')[1].length : 0, String(bounds[1]).split('.')[1] ? String(bounds[1]).split('.')[1].length : 0));
}

function load(bounds, len, web = false) {
    if (len === 1) {
        document.getElementById("rn").innerText = prng(bounds);
        if (!web && !rn.qrn) {
            document.getElementById("rn").title = "Error: PRNG";
            document.getElementById("rn").style.color = "#666666";
        }
    }
    else {
        if (rn.win) rn.win.close();
        let qrns = [];
        for (let i = 0; i < len; i++) qrns.push(prng(bounds));
        rn.win = window.open("", "_blank", "width=175,height=120", true);
        rn.win.document.write("<a href=data:text/plain,"+qrns+" download='qrns-"+bounds+"'>Save</a>" + (web || rn.qrn ? "<p style='word-break: break-all; color: #222222;'>"+qrns+"</p>" : "<p style='word-break: break-all; color: #666666;' title='Error: PRNG'>"+qrns+"</p>"));
    }
    document.body.style.cursor = "auto";
}

function request(bounds, len) {
    document.body.style.cursor = "progress";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://qrng.anu.edu.au/API/jsonI.php?length="+len+"&type=uint16", true);
    xhr.timeout = 5000;
    xhr.onload = function() {
        rn.qrn = JSON.parse(this.responseText).data;
        load(bounds, len, true);
    };
    xhr.ontimeout = function() {
        load(bounds, len);
    };
    xhr.onerror = function() {
        load(bounds, len);
    };
    xhr.send();
}

function check(min, max) {
    if (min === max) {
        document.getElementById("rn").innerText = min;
        return;
    }
    if (min > max) {
        [min, max] = [max, min];
        [document.getElementById("min").value, document.getElementById("max").value] = [min, max];
    }
    if (max - min > 2147483647) {
        document.getElementById("rn").innerHTML = "&#128565;";
        return;
    }
    return [min, max];
}

function setQRN() {
    let bounds = check(Number(document.getElementById("min").value), Number(document.getElementById("max").value));
    let len = parseInt(document.getElementById("len").value);
    if (!len > 0) {
        len = 1;
        document.getElementById("len").value = len;
    }
    if (bounds) request(bounds, len);
}

let rn = {index: 0};
document.getElementById("btn").onclick = setQRN;
setQRN();