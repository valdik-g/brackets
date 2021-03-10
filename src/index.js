module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    let t = 0;
    let k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12;
    let r = arr.join("");
    for(let i = 0;i<10000;i++) {
        k1 = arr.join("").indexOf("[]",0);
        k2 = arr.join("").indexOf("{}",0);
        k3 = arr.join("").indexOf("()",0);
        k4 = arr.join("").indexOf("||",0);
        k5 = arr.join("").indexOf("11",0);
        k6 = arr.join("").indexOf("22",0);
        k7 = arr.join("").indexOf("33",0);
        k8 = arr.join("").indexOf("44",0);
        k9 = arr.join("").indexOf("55",0);
        k10 = arr.join("").indexOf("66",0);
        k11 = arr.join("").indexOf("77",0);
        k12 = arr.join("").indexOf("88",0);
        let r1 = arr.join("");
        if (k1 !== -1) {
            arr.splice(k1,2);
            t++;
            continue;
        }
        if (k2 !== -1) {
            arr.splice(k2,2);
            t++;
            continue;
        }
        if (k3 !== -1) {
            arr.splice(k3,2);
            t++;
            continue;
        }
        if (k4 !== -1) {
            arr.splice(k4,2);
            t++;
            continue;
        }
        if (k5 !== -1) {
            arr.splice(k5,2);
            t++;
            continue;
        }
        if (k6 !== -1) {
            arr.splice(k6,2);
            t++;
            continue;
        }
        if (k7 !== -1) {
            arr.splice(k7,2);
            t++;
            continue;
        }
        if (k8 !== -1) {
            arr.splice(k8,2);
            t++;
            continue;
        }
        if (k9 !== -1) {
            arr.splice(k9,2);
            t++;
            continue;
        }
        if (k10 !== -1) {
            arr.splice(k10,2);
            t++;
            continue;
        }
        if (k11 !== -1) {
            arr.splice(k11,2);
            t++;
            continue;
        }
        if (k12 !== -1) {
            arr.splice(k12,2);
            t++;
            continue;
        }
        if(r1.length === 0)
        {
            return true;
        }
        if(t === 0) {
            return false;
        }
        t = 0;
    }
    return r.length === 0;
}

