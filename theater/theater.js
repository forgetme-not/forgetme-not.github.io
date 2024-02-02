function printUserInput() {
  // 사용자가 입력한 내용 가져오기
  let userInput = document.getElementById('userInputField').value;

  let outputContainer = document.getElementById('outputContainer');
  // 표 내용 초기화
  outputContainer.innerHTML = "";

  // 입력 내용에 따라 다른 값을 설정
  let cinemas = [];
  if (userInput === "부산") {
    cinemas = [
      "부산 서면 PKS시네마",
      "부산 해운대 영화관",
      "부산 센텀시티 PKS",
      "부산 전포 PKS",
      "부산 하단 PKS",
      "부산 괴정 뉴코아점",
      "부산 동래 롯데백화점"
    ];
  } else if (userInput === "서울") {
    cinemas = [
      "서울 강남 PKS",
      "서울 홍대 PKS",
      "서울 건대 플렉스몰",
      "서울 수유 메가박스",
      "서울 합정 유스퀘어",
      "서울 영등포 타임스퀘어",
      "서울 신당 떡볶이",
      "서울 신사 가로수",
      "서울 역삼 스카이빌딩"
    ];
  } else if (userInput === "대구") {
    cinemas = [
      "대구 동성로 메가박스",
      "대구 수성못 롯데시네마",
      "대구 동대구역 CGV"
    ];
  } else if (userInput === "광주") {
    cinemas = [
      "광주 상무 CGV",
      "광주 광산 롯데시네마",
      "광주 유스퀘어 메가박스"
    ];
  } else if (userInput === "인천") {
    cinemas = [
      "인천 송도 CGV",
      "인천 부평 롯데백화점",
      "인천 연수 박스",
      "인천 수연 신세계몰"
    ];
  } else {
    alert("해당 지역의 영화관 정보가 없습니다!");
    return;
  }

  // 카드로 출력
  cinemas.forEach(cinema => {
    outputContainer.innerHTML += `
      <div class="card">
        <div class="card-header">${userInput} 영화관</div>
        <div class="card-body">${cinema}</div>
      </div>
    `;
  });
}