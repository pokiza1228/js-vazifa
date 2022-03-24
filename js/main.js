const najotTalim = {
    styudens : 1000000,
    img: "../img/logo.jpg",
    name: "Najot ta'lim",
    graduate:1200

}
const wrapper=document.querySelector(".wrapper");
const najotArticle=document.createElement("article");
najotArticle.className="article";

const najotName=document.createElement("h2");
najotName.textContent=najotTalim.name;
najotName.className="title"

const najotImg=document.createElement("img");
najotImg.src=najotTalim.img;
najotImg.className="imge";

const najotText=document.createElement("p");
najotText.textContent=najotTalim.styudens;
najotText.className="soni";

const najotBitiruvchi = document.createElement("p");
najotBitiruvchi.textContent=najotTalim.graduate;

wrapper.append(najotArticle);
najotArticle.append(najotName);
najotArticle.append(najotImg);
najotArticle.append(najotText);
najotArticle.append(najotBitiruvchi);





//
const carta= {
    "Title": "Avengers: Age of Ultron",
    "fulltitle": "Avengers: Age of Ultron (2015)",
    "movie_year": 2015,
    "Categories": "Action|Adventure|Sci-Fi",
    "summary": "Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.",
    "ImageURL": "../img/aaa.jpg",
    "imdb_id": "tt2395427",
    "imdb_rating": 7.4,
    "runtime": 141,
    "language": "English",
    "ytid": "rD8lWtcgeyg"
}

const cTitle = document.createElement("h2");
cTitle.textContent=carta.Title;
cTitle.className=("c-title");

const year=document.createElement("p");
year.textContent=carta.movie_year;
year.className=("year");

const rating =document.createElement("p");
rating.textContent=carta.imdb_rating;

const picture= document.createElement("img");
picture.src=carta.ImageURL;

najotArticle.append(cTitle);
najotArticle.append(year);
najotArticle.append(rating);
najotArticle.append(picture);






//uy ishi alisherning pullari
const text = document.querySelector(".info");
const pul1 = document.querySelector(".deskription1");
const pul2 = document.querySelector(".deskription2");
const pul3 = document.querySelector(".deskription3");
const input = document.querySelector(".field");
const form = document.querySelector(".form-pul");
const D=94433.34;
const YE=10354.03;
const U=11560;
const a = Math.round(500 * D); //doll
const b = Math.round(250 * D); //doll
const c = Math.round(120 * YE); //yevro
const jami = a + c + b;
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const y = Number(input.value);
    const yetmaydi = jami - y;
    if (jami <= y) {
        text.textContent = "oq yo'l yaxshi boring";
    } else if (y < 0) {
        text.textContent = "bizni ahmoq qilmang";
    } else {
        text.textContent = "sizning sayoxatga borishingizga " + yetmaydi +
            " so'm pul yetmaydi yana pul to'plang";
    }
    const usd = Math.round(y / U);
    const doll = Math.round(y / D);
    const evro = Math.round(y / YE);
    pul1.textContent = y >= 0 ? "pulingiz " + usd + " USD" : "ahmoq qilmang";
    pul2.textContent = y >= 0 ? "pulingiz " + doll + " dollar" : "ahmoq qilmang";
    pul3.textContent = y >= 0 ? "pulingiz " + evro + " yevro" : "ahmoq qilmang >>";
});



//sinf ishi sekundni minutga ogirish
const SOAT= 3600;
const MINT=60;
const sekundKelgan=document.querySelector(".form-soat");
const kegan=document.querySelector(".sekunt");
const chiqarish=document.querySelector(".soatlar");

sekundKelgan.addEventListener("submit", function(evt){
    evt.preventDefault();
    const x=Number(kegan.value);
    const soat=x / SOAT;
    const a=(x-Math.floor(soat)*SOAT)- MINT*(Math.floor((x-Math.floor(soat)*SOAT)/MINT));
    chiqarish.textContent = Math.floor(soat) + " Soat " + Math.floor((x-Math.floor(soat)*SOAT)/MINT) + " minut "  + a + " sekunt";
})


//uy ishi mili keskundni kun soat minut sekundga o'girish
const SECOND= 1000;
const MINUTES=SECOND * 60;
const HOUR= MINUTES * 60;
const DAY =HOUR*24;
const miliSekunddKelgan=document.querySelector(".form-milisekund");
const keganMilii=document.querySelector(".millisekunt");
const chiqarishUchun=document.querySelector(".soat-sekundlar");
miliSekunddKelgan.addEventListener("submit", function(evt){
    evt.preventDefault();
    const c=Number(keganMilii.value);
    const k1=c/DAY;
    const s2=(c - Math.floor(k1)*DAY)/HOUR;
    const m3=(s2*HOUR- Math.floor(s2)*HOUR)/MINUTES;
    const s4=(m3*MINUTES-Math.floor(m3)*MINUTES)/SECOND;
    const mq=(s4*SECOND- Math.floor(s4)*SECOND);
    const kunText= !k1 ? "" : (Math.floor(k1)+ " kun"+((s2 || m3 || s4 || mq) ? ", " : "."));
    const soatText= s2 ? (Math.floor(s2) + " soat"+ ((m3 || s4 || mq) ? ", " : ".")) : "";
    const minutText= m3 ? (Math.floor(m3) + " minut" +  ((s4 || mq) ? ", " : ".")) : "";
    const sekundText = s4 ?( Math.floor(s4) + " sekund"+ (mq ? ", " : ".")) : "";
    const miliText= mq ? (Math.floor(mq)+ " millisekund.") : "";
    chiqarishUchun.textContent= kunText+soatText+minutText+sekundText+miliText;
})





















