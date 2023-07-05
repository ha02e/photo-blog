const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {

    //이미지가 30개 이상일 경우 모든 이미지 삭제
    if(gridContainer.children.length >= 30){
        const confirmed = confirm("모든 사진을 지우시겠습니까?");

        if(confirmed){  //확인 버튼을 클릭하면
            gridContainer.innerHTML = "";  //이미지 모두 삭제
        }
    }else{ //이미지가 30개 미만이면 이미지를 랜덤하게 추가
            const randomNum = Math.floor(Math.random()*1000) + 1;  //1부터 1000 사이 랜덤
            const imgUrl = `http://picsum.photos/500?random=${randomNum}`;  //이미지 주소 랜덤하게
        
            const img = document.createElement('img');  //img 태그 생성
            img.src = imgUrl;
        
            gridContainer.appendChild(img);  //이미지를 그리드 컨테이너에 추가
        }
});