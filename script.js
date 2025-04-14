const students = [
    "김보희", "김소희", "김연서", "김윤기", "김윤성",
    "김윤아", "김재서", "김혜송", "서인규", "송채진",
    "심정빈", "안윤서", "안준형", "양지혜", "오선유",
    "오율균", "윤지선", "이서연", "이승민", "이승엽",
    "이재인", "이지민", "이지원", "주가연", "최서인",
    "홍지민"
];

document.getElementById("pickBtn").addEventListener("click", function() {
    const count = parseInt(document.getElementById("countInput").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(count) || count < 1 || count > students.length) {
        resultDiv.textContent = "1~26 사이 숫자를 입력하세요!";
        return;
    }

    const shuffled = [...students].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    resultDiv.innerHTML = `<p>뽑힌 학생:</p><p>${selected.join(", ")}</p>`;
});
