const wantdark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggledarkmode() {
    document.documentElement.dataset.theme 
        = html.dataset.theme === 'dark' ? 'light' : 'dark';
}

function main() {
    if (wantdark) {
        document.documentElement.dataset.theme = 'dark';
    }
} main();