export function initThemeSwitcher() {
    const $themeToggle = $('#theme-toggle');

    // Load saved theme or default
    const savedTheme = localStorage.getItem('gameHubTheme') || 'gaming';
    applyTheme(savedTheme);

    $themeToggle.on('click', () => {
        const currentTheme = localStorage.getItem('gameHubTheme') || 'gaming';
        let newTheme;

        switch (currentTheme) {
            case 'gaming': newTheme = 'neon'; break;
            case 'neon': newTheme = 'minimal'; break;
            case 'minimal': newTheme = 'scifi'; break;
            case 'scifi': newTheme = 'classic'; break;
            case 'classic': newTheme = 'glass'; break;
            case 'glass': newTheme = 'gaming'; break;
            default: newTheme = 'gaming';
        }

        applyTheme(newTheme);
        localStorage.setItem('gameHubTheme', newTheme);
    });
}

function applyTheme(theme) {
    const $themeStylesheet = $('#theme-stylesheet');
    const $themeToggle = $('#theme-toggle');

    const themeConfig = {
        gaming: { href: 'dashstyle-gaming.css', label: '🎮 Gaming', title: 'Switch Theme' },
        neon: { href: 'dashstyle-neon.css', label: '⚡ Neon', title: 'Switch Theme' },
        minimal: { href: 'dashstyle-minimal.css', label: '🌙 Minimal', title: 'Switch Theme' },
        classic: { href: 'dashstyle-classic.css', label: '🎨 Classic', title: 'Switch Theme' },
        scifi: { href: 'dashstyle-scifi.css', label: '🚀 Sci-Fi', title: 'Switch Theme' },
        glass: { href: 'dashstyle-glassy.css', label: '💎 Glass', title: 'Switch Theme' }
    };

    const config = themeConfig[theme] || themeConfig.gaming;
    $themeStylesheet.attr('href', config.href);
    $themeToggle.find('.theme-label').text(config.label);
    $themeToggle.attr('title', config.title);
}
