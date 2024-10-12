const data = new Date();
addEventListener("DOMContentLoaded", () => {
  const glowne = document.querySelector("main");
  const tlo = document.querySelector("body");
  setInterval(() => {
    let godzina = data.getHours();
    console.log(godzina);
    if ((godzina >= 20 && godzina <= 23) || (godzina >= 0 && godzina < 4)) {
      glowne.style.backgroundColor = "#5C469C";
      glowne.style.boxShadow = "1vw 1vw 0 #1D267D";
      tlo.style.backgroundColor = "#0C134F";
      glowne.style.color = "#D4ADFC";
    } else if (godzina >= 4 && godzina < 8) {
      glowne.style.backgroundColor = "#E8A0BF";
      glowne.style.boxShadow = "1vw 1vw 0 #C689C6";
      tlo.style.backgroundColor = "#937DC2";
      glowne.style.color = "#FCC5C0";
    } else if (godzina >= 8 && godzina < 16) {
      glowne.style.backgroundColor = "#A0DEFF";
      glowne.style.boxShadow = "1vw 1vw 0 #CAF4FF";
      tlo.style.backgroundColor = "#FFF9D0";
      glowne.style.color = "#5AB2FF";
    } else {
      glowne.style.backgroundColor = "#CA4E79";
      glowne.style.boxShadow = "1vw 1vw 0 #7A4069";
      tlo.style.backgroundColor = "#513252";
      glowne.style.color = "#FFC18E";
    }
  }, 1000);
});
