function toggleTheme() {
    const body = document.body;
    const toggleText = document.getElementById('toggle-text');

    // 切換主題模式
    body.classList.toggle('dark-mode');

    // 切換按鈕文字與圖標
    if (body.classList.contains('dark-mode')) {
        toggleText.innerHTML = '🌙 黑夜';
    } else {
        toggleText.innerHTML = '🌞 白天';
    }
}
