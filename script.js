const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random()*1000) + 1;  //1부터 1000 사이 랜덤
    const imgUrl = `http://picsum.photos/500?random=${randomNum}`;  //이미지 주소 랜덤하게

    const img = document.createElement('img');  //img 태그 생성
    img.src = imgUrl;

    gridContainer.appendChild(img);  //이미지를 그리드 컨테이너에 추가
});