const tg = window.Telegram.WebApp;

tg.expand();

document.getElementById("submit").addEventListener("click", () => {
  const plaintiff = document.getElementById("plaintiff").value.trim();
  const defendant = document.getElementById("defendant").value.trim();
  const caseNo = document.getElementById("caseNo").value.trim();
  const paperNo = document.getElementById("paperNo").value.trim();

  if (!plaintiff || !defendant || !caseNo || !paperNo) {
    tg.showAlert("Заполните все поля");
    return;
  }

  const data = {
    plaintiff,
    defendant,
    case_no: caseNo,
    paper_no: paperNo
  };

  tg.sendData(JSON.stringify(data));
  tg.close();
});
