const randomizeBtn = document.querySelector(".a-card__randomize");
const adviceTitle = document.querySelector(".a-card__advice-title"), adviceContent = document.querySelector(".a-card__advice-content");
const cardContent = document.querySelector(".a-card__content"), loader = document.querySelector(".a-card__loader");

function toggleLoader() {
    cardContent.classList.toggle("a-hidden");
    loader.classList.toggle("a-hidden");
}

function updateAdvice(adviceId, advice) {
    adviceTitle.textContent = `Advice #${adviceId}`;
    adviceContent.textContent = `"${advice}"`;
};

function randomizeAdvice() {
    // Show loader
    toggleLoader();

    // Update advice
    fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let adviceId = data.slip.id, advice = data.slip.advice;
            updateAdvice(adviceId, advice);

            // Hide loader
            setTimeout(toggleLoader, 1000);
        });
};

randomizeBtn.addEventListener('click', randomizeAdvice);

randomizeAdvice();