# Yolog
개발에 관한 기술 이야기와 본인의 일상 이야기를 기록하기 위한 개인 블로그입니다 :)

🔗 [**보러가기!**](https://yolog-deploy.vercel.app/)
* * *

## **스크린샷**

<img src="https://user-images.githubusercontent.com/27776795/165331985-f64c25cc-7bc8-4b3d-9aea-5b028cb2d551.png" width="49%" title="메인 화면" alt="메인 화면"></img>
<img src="https://user-images.githubusercontent.com/27776795/165332782-93530d47-4f59-457e-8d79-4796b23348c5.png" width="49%" title="메인 화면" alt="메인 화면"></img>
* * *

## 사용 기술
- Next.js
- React.js
- Redux + Redux-Saga
- Antd + Emotion
- AWS EC2(DB Server) + Vercel(Deploy)
* * *

## 콘텐츠 소개

###메인 화면
![메인 화면](https://user-images.githubusercontent.com/27776795/165331985-f64c25cc-7bc8-4b3d-9aea-5b028cb2d551.png)
포스트 목록은 카드 박스형으로 디자인했고, 페이징은 무한 스크롤로 구성할 지, 페이지네이션으로 구성할 지 고민했습니다. 포스트 데이터의 양이 많지 않았고, 업로드도 방대하게 하지 않을 것이라 오히려 스크롤로 구성하면 독이 될 것 같았습니다. 결국 실 유저들이 특정 포스트를 찾기 편하게 페이지네이션으로 구성했습니다.

###포스트 디테일
![포스트 디테일](https://user-images.githubusercontent.com/27776795/165332782-93530d47-4f59-457e-8d79-4796b23348c5.png)
포스트 디테일 페이지쪽은 유저들이 가장 많이 조회하는 영역이라 판단하고 레이아웃과 디자인에 집중을 많이 했습니다. 디테일 페이지에서 가시성 높은 글자색을 위해 전체 배경색도 여러번 변경하고, 사용자가 글을 읽기 편한 너비를 위해 레이아웃을 수정하곤 했었습니다.

###포스트 작성
![포스트 작성](https://user-images.githubusercontent.com/27776795/165341699-57a52956-342b-4943-88b5-7389876593d8.png)
React Quill이라는 에디터 플러그인을 사용했습니다. 이미지 업로드는 AWS S3에 연동하고 업로드하여 저장하고 관리하고 있습니다.

###반응형
![모바일](https://user-images.githubusercontent.com/27776795/165342771-30f61b4d-6e82-464d-bb8c-d8a133e5c5d9.png)
모바일 우선이 아닌 데스크탑 우선으로 스타일링하며 구성했습니다. 블로그 포스트 작성의 목표는 기술 공유입니다. 따라서 사용자분들은 주로 노트북, 데스크탑 환경에서 개발, 공부하며 제 포스트를 참고할 것으로 예상해 데스크탑을 우선으로 스타일링 했지만, 모바일 버전도 지원하게끔 제작했습니다.
* * *
