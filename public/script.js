const wantdark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggledm() {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
}

function main() {
    if (wantdark) {
        document.documentElement.dataset.theme = 'dark';
    }
}
main();