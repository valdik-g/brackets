module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    let t = 0;
    let k1,k2,k3,k4;
    let r = arr.join("");
    for(let i = 0;i<10000;i++) {
        k1 = arr.join("").indexOf("[]",0);
        k2 = arr.join("").indexOf("{}",0);
        k3 = arr.join("").indexOf("()",0);
        k4 = arr.join("").indexOf("||",0);
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
        if(r1.length === 0)
        {
            console.log(true);
            break;
        }
        if(t === 0) {
            console.log(false);
            break;
        }
        t = 0;
    }
    return r.length === 0;
}

