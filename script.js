const tg = window.Telegram.WebApp;
tg.expand();

const form = {
    plaintiff: document.getElementById("plaintiff"),
    defendant: document.getElementById("defendant"),
    caseNo: document.getElementById("caseNo"),
    paperNo: document.getElementById("paperNo"),
};

document.getElementById("submit").addEventListener("click", () => {
    if (!validate()) return;

    const payload = {
        plaintiff: form.plaintiff.value.trim(),
        defendant: form.defendant.value.trim(),
        case_no: form.caseNo.value.trim(),
        paper_no: form.paperNo.value.trim()
    };

    // Проверяем параметр year для годовой бумаги
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("yearly") === "1") {
        payload.yearly = true;
    }

    tg.sendData(JSON.stringify(payload)); // Отправляем данные боту
    tg.close(); // Закрываем WebApp
});

function validate() {
    for (const key in form) {
        if (!form[key].value.trim()) {
            tg.showAlert("Заполните все поля");
            return false;
        }
    }
    return true;
}
