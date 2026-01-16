import { games } from "./games.mjs";
import { trackGameClick } from "./gameStats.mjs";
const buttonSize = 3;

export function generateGameLinks(fadeIn = true) {
    const $container = $("#game-links");
    $container.empty();

    const favorites = (localStorage.getItem('favorites') ?? "").split(',');

    games.forEach(game => {
        const $link = $("<button>")
            .addClass(`game-link`)
            .html(`<span>${game.name}</span>`)
            .attr({
                type: "button",
                id: game.url,
                style: "order:3"
            });

        if (favorites.includes(game.name)) $link.addClass("favorite");

        let clickTimer = null;
        $link.on("click", () => {
            clickTimer && clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                trackGameClick(game.name);
                window.open(`games/${game.url}`);
            }, 300);
        });

        $link.on("dblclick", () => {
            clearTimeout(clickTimer);

            const currentFavorites = (localStorage.getItem('favorites') ?? "").split(',');
            if (!currentFavorites.includes(game.name)) currentFavorites.push(game.name);
            else currentFavorites.splice(currentFavorites.indexOf(game.name), 1);

            localStorage.setItem('favorites', currentFavorites.join(','));
            $link.addClass("new-favorite");
            setTimeout(() => generateGameLinks(false), 1000);
        });

        $container.append($link);
    });

    if (fadeIn) $container.hide().fadeIn(1000);
}
