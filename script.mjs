import { initGameTimeTracking, updateStatsDisplay } from './gameStats.mjs';
import { generateGameLinks } from './generateGames.mjs';
import { initInputHandler } from './inputHandler.mjs';
import {logVisit} from './visitsCounter.mjs';


window.onload = function () {
    generateGameLinks();
    initGameTimeTracking();
    updateStatsDisplay();
    initInputHandler();
    logVisit();
};

