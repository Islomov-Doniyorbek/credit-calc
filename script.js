function keyUp() {

    let maosh = document.querySelector("#maosh");
    let limit = document.querySelector("#limit");
    let hideRow = document.querySelector(".hide");
    let limitCalc = document.querySelector("#limitCalc");
    let hideRowInnerP = document.querySelector(".hide strong");
    let limitKredit = 0;
    limitCalc.addEventListener("click", (e) => {
        e.preventDefault()
        if (maosh.value >= 1800000) {
            limitCalc.style.display = "none";
            if (maosh.value >= 1800000 && maosh.value < 4000000) {
                limitKredit = 10000000;
                limit.innerHTML = limitKredit;
                hideRow.style.display = "flex"
                console.log(limitKredit);
            }
            else if (maosh.value >= 4000000 && maosh.value < 8000000) {
                limitKredit = 18000000;
                limit.innerHTML = limitKredit;
                hideRow.style.display = "flex"
                console.log(limitKredit);
            }
            else if (maosh.value >= 8000000 && maosh.value < 15000000) {
                limitKredit = 40000000;
                limit.innerHTML = limitKredit;
                hideRow.style.display = "flex"
                console.log(limitKredit);
            }
            else if (maosh.value >= 15000000 && maosh.value < 25000000) {
                limitKredit = 70000000;
                limit.innerHTML = limitKredit;
                hideRow.style.display = "flex"
                console.log(limitKredit);
            }
        } else {
            hideRow.style.display = "flex"
            limit.innerHTML = limitKredit;            
        }
    })
}
keyUp()
function foiz() {
    let select = document.querySelector("select#bank");
    let stavka = document.querySelector("#foiz");
    let hideF = document.querySelector(".hideF");

    select.addEventListener("click", () => {
        if (select.value != "default") {
            stavka.innerHTML = select.value;
            hideF.style.display = "flex"
        }
    })
}
foiz()
function calc() {
    let hideH = document.querySelector(".hideH");
    let maosh = document.querySelector("#maosh");
    let kr = document.querySelector("#kr");
    let krF = document.querySelector("#krF");
    let ul = document.querySelector("ul");
    let kredit = document.querySelector("#kredit");
    let muddat = document.querySelector("#time");
    let stavka = document.querySelector("select#bank");
    let hisobBtn = document.querySelector("#calcBtn");

    hisobBtn.addEventListener("click", (e) => {
        e.preventDefault()
        hisobBtn.style.display = "none"
        kredit = kredit.value;
        muddat = muddat.value;
        maosh = maosh.value
        if (limit >= kredit) {
            hideH.style.display = "flex"
            if (stavka.value != "default") {
                stavka = stavka.value;
            }

            let f = kredit * (stavka / 100 + 1);
            console.log(f.toFixed(2));
            kr.innerHTML = kredit;
            krF.innerHTML = f.toFixed(2);
            for (let i = 0; i < muddat; i++) {
                let ff = f / muddat;
                ul.innerHTML += `
                    <li class="month">
                        ${i+1}-oy <span>${ff.toFixed(2)}</span> so'm
                    </li>
                `;

            }
        }
        else {
            console.log("Limitdan oshish mumkin emas!");
            console.log(kredit);
            console.log(maosh);
        }

    })

}
calc()