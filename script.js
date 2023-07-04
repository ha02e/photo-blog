const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    const img = document.createElement('img');  //img 태그 생성
    img.src = 'http://picsum.photos/500?random=1';  // 이미지 URL 할당

    gridContainer.appendChild(img);  //이미지를 그리드 컨테이너에 추가
});