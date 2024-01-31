function printUserInput() {
  // 사용자가 입력한 내용 가져오기
  let userInput = document.getElementById('userInputField').value;

  // 출력할 테이블 요소 선택
  let outputTable = document.getElementById('output');
  // 표 내용 초기화
  outputTable.innerHTML = "";

  // 입력 내용에 따라 다른 값을 설정
  if (userInput === "부산") {
    outputTable.innerHTML = `
      <tr>
        <th>영화관</th>
      </tr>
      <tr>
        <td>부산 서면 PKS시네마</td>
      </tr>
      <tr>
        <td>부산 해운대 영화관</td>
      </tr>
      <tr>
        <td>부산 센텀시티 PKS</td>
      </tr>
      <tr>
        <td>부산 전포 PKS</td>
      </tr>
      <tr>
        <td>부산 하단 PKS</td>
      </tr>
      <tr>
        <td>부산 괴정 뉴코아점</td>
      </tr>
      <tr>
        <td>부산 동래 롯데백화점</td>
      </tr>
    `;
  } else if (userInput === "서울") {
    outputTable.innerHTML = `
      <tr>
        <th>영화관</th>
      </tr>
      <tr>
        <td>서울 강남 PKS</td>
      </tr>
      <tr>
        <td>서울 홍대 PKS</td>
      </tr>
      <tr>
        <td>서울 건대 플렉스몰</td>
      </tr>
      <tr>
        <td>서울 수유 메가박스</td>
      </tr>
      <tr>
        <td>서울 합정 유스퀘어</td>
      </tr>
      <tr>
        <td>서울 영등포 타임스퀘어</td>
      </tr>
      <tr>
        <td>서울 신당 떡볶이</td>
      </tr>
      <tr>
        <td>서울 신사 가로수</td>
      </tr>
    `;
  } else if (userInput === "대구") {
    outputTable.innerHTML = `
      <tr>
        <th>영화관</th>
      </tr>
      <tr>
        <td>대구 동성로 메가박스</td>
      </tr>
      <tr>
        <td>대구 수성못 롯데시네마</td>
      </tr>
      <tr>
        <td>대구 동대구역 CGV</td>
      </tr>
    `;
  } else if (userInput === "광주") {
    outputTable.innerHTML = `
      <tr>
        <th>영화관</th>
      </tr>
      <tr>
        <td>광주 상무 CGV</td>
      </tr>
      <tr>
        <td>광주 광산 롯데시네마</td>
      </tr>
      <tr>
        <td>광주 유스퀘어 메가박스</td>
      </tr>
    `;
  } else if (userInput === "인천") {
    outputTable.innerHTML = `
      <tr>
        <th>영화관</th>
      </tr>
      <tr>
        <td>인천 송도 CGV</td>
      </tr>
      <tr>
        <td>인천 부평 롯데백화점</td>
      </tr>
      <tr>
        <td>인천 연수 박스</td>
      </tr>
      <tr>
        <td>인천 수연 신세계몰</td>
      </tr>
    `;
  } else {
    alert("해당 지역의 영화관 정보가 없습니다!");
  }
}
