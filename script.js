let recording = false;

// Ініціалізація heatmap
const heatmap = h337.create({
    container: document.getElementById("heatmapContainer"),
    radius: 40
});

// Створюємо масив, якщо його нема
if (!localStorage.getItem("clicks")) {
    localStorage.setItem("clicks", JSON.stringify([]));
}

// ======== ЗАПИС КЛІКІВ ========
document.addEventListener("click", function (event) {
    if (!recording) return;

    const clickData = {
        x: event.clientX,
        y: event.clientY,
        value: 1
    };

    let arr = JSON.parse(localStorage.getItem("clicks"));
    arr.push(clickData);
    localStorage.setItem("clicks", JSON.stringify(arr));
});

// ======== ВІДТВОРЕННЯ ========
function renderHeatmap() {
    const data = JSON.parse(localStorage.getItem("clicks"));
    heatmap.setData({
        max: 5,
        data: data
    });
}

// ======== ОЧИСТИТИ ========
function clearHeatmap() {
    localStorage.setItem("clicks", JSON.stringify([]));
    heatmap.setData({ max: 5, data: [] });
    alert("Дані очищено");
}

// ======== DEV PANEL ========
const devIcon = document.getElementById("dev-icon");
const devPanel = document.getElementById("dev-panel");

devIcon.onclick = () => {
    devPanel.style.display =
        devPanel.style.display === "flex" ? "none" : "flex";
};

document.getElementById("btn-start").onclick = () => {
    recording = !recording;
    alert(recording ? "Запис увімкнено" : "Запис вимкнено");
};

document.getElementById("btn-show").onclick = () => {
    renderHeatmap();
};

document.getElementById("btn-clear").onclick = () => {
    clearHeatmap();
};
