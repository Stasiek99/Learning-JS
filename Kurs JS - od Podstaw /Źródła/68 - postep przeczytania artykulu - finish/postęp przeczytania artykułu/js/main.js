// 1. Stwórz element paska i wstaw go na stronę
// 2. Przypisz zdarzenie scroll do obiektu window
// 3. Wylicz postęp przewinięcia dokumentu
// 4. Ustaw szerokość paska postępu

(function() {
    const html = document.documentElement;
    const progress = document.createElement("div");
    const progressInner = document.createElement("div");

    progress.className = "edu-progress";
    progressInner.className = "edu-progress__inner";

    progress.append(progressInner);

    document.body.prepend(progress);

    window.addEventListener("scroll", () => {
        const height = html.scrollHeight - window.innerHeight;
        const scrolled = html.scrollTop / height * 100;

        progressInner.style.width = `${scrolled}%`;
    });
})();
