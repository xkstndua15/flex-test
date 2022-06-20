const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(let el of articles) {
    el.addEventListener("mouseenter", (e) => {
        e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave", (e) => {
        e.currentTarget.querySelector("video").pause();
    });

    el.addEventListener("click", (e) => {
        const tit = e.currentTarget.querySelector("h2").innerText;
        const txt = e.currentTarget.querySelector("p").innerText;
        const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);
        aside.querySelector("video").play();

        aside.classList.add("on");
    });
}

close.onclick = function() {
    aside.classList.remove("on");

    aside.querySelector("video").pause();
    aside.querySelector("video").currentTime = 0;
}