function dich() {
    let a1 = ["apple", "banana", "lemon", "mango", "orange"];
    let a2 = ["táo", "chuối", "chanh", "xòài", "cam"];
    let x = document.getElementById("eng").value;
    let k = 0;
    let result = "";
    for (let i = 0; i < a1.length; i++) {
        if (x == a1[i]) {
            k = i;
            for (let j = 0; j < a2.length; j++) {
                if (k == j) {
                    result = a2[j];
                }
            }
        }
    }

    document.getElementById("viet").innerHTML = result;
}