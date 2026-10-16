// =========================================================
// PAGE 2 — MUSIQUE ANNIVERSAIRE
// =========================================================

const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const birthdayMusic = document.getElementById("birthdayMusic");


// =========================================================
// BOUTON PLAY / PAUSE
// =========================================================

musicButton.addEventListener("click", function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play()
            .then(() => {

                // La musique joue
                musicIcon.textContent = "⏸";

                document.body.classList.add("music-playing");

                musicButton.setAttribute(
                    "aria-label",
                    "Mettre la musique en pause"
                );

            })
            .catch((error) => {

                console.error(
                    "Impossible de lancer la musique :",
                    error
                );

            });

    } else {

        // La musique est déjà en train de jouer
        birthdayMusic.pause();

        musicIcon.textContent = "▶";

        document.body.classList.remove("music-playing");

        musicButton.setAttribute(
            "aria-label",
            "Lancer la musique"
        );
    }

});


// =========================================================
// SI LA MUSIQUE ARRIVE À LA FIN
// =========================================================

birthdayMusic.addEventListener("ended", function () {

    musicIcon.textContent = "▶";

    document.body.classList.remove("music-playing");

    musicButton.setAttribute(
        "aria-label",
        "Lancer la musique"
    );

});