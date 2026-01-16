export function initThemeSwitcher() {
    const $themeToggle = $('#theme-toggle');

    // Load saved theme or default
    const savedTheme = localStorage.getItem('gameHubTheme') || 'modern';
    applyTheme(savedTheme);

    $themeToggle.on('click', () => {
        const currentTheme = localStorage.getItem('gameHubTheme') || 'modern';
        let newTheme;

        switch (currentTheme) {
            case 'modern': newTheme = 'gaming'; break;
            case 'gaming': newTheme = 'neon'; break;
            case 'neon': newTheme = 'minimal'; break;
            case 'minimal': newTheme = 'scifi'; break;
            case 'scifi': newTheme = 'classic'; break;
            case 'classic': newTheme = 'glass'; break;
            case 'glass': newTheme = 'modern'; break;
            default: newTheme = 'modern';
        }

        applyTheme(newTheme);
        localStorage.setItem('gameHubTheme', newTheme);
    });
}

function applyTheme(theme) {
    const $themeStylesheet = $('#theme-stylesheet');
    const $themeToggle = $('#theme-toggle');

    const themeConfig = {
        modern: { href: 'dashstyle-modern.css', label: '🎨 Modern', title: 'Switch Theme' },
        gaming: { href: 'dashstyle-gaming.css', label: '🎮 Gaming', title: 'Switch Theme' },
        neon: { href: 'dashstyle-neon.css', label: '⚡ Neon', title: 'Switch Theme' },
        minimal: { href: 'dashstyle-minimal.css', label: '🌙 Minimal', title: 'Switch Theme' },
        classic: { href: 'dashstyle-classic.css', label: '🎨 Classic', title: 'Switch Theme' },
        scifi: { href: 'dashstyle-scifi.css', label: '🚀 Sci-Fi', title: 'Switch Theme' },
        glass: { href: 'dashstyle-glassy.css', label: '💎 Glass', title: 'Switch Theme' }
    };

    const config = themeConfig[theme] || themeConfig.modern;
    $themeStylesheet.attr('href', config.href);
    $themeToggle.find('.theme-label').text(config.label);
    $themeToggle.attr('title', config.title);
}
