## STMES PORTPOLIO

## three.js | react-query | ffmpeg wasm (1month)

### update

```
2024.08.30
What's New
- Carousel & Restful 새로운 프로젝트 추가
- GitAction 추가하여 빌드 및 버전 관리 자동화
```

Deployment: https://stems-iota.vercel.app/

실행 방법

```
yarn && yarn dev
```

## Stack

- React
- typescript
- three.js
- ffmpeg wasm
- api
  - react-query
- css
  - styled-components
- nivo (chart)

## Base Setting

- img 파일을 public 경로에 두어 캐시를 사용할 수 있게 설정
- [Animation Core](https://github.com/kisn3089/portpolio/blob/main/src/styles/theme.ts#L65) 함수를 만들어 모든 애니메이션에 재사용
- [font](https://github.com/kisn3089/portpolio/blob/main/src/styles/fonts.css) 깜빡하는 현상을 없애기 위해 import css 방식 사용
- [three.js Canvas](https://github.com/kisn3089/portpolio/blob/main/src/components/molecule/canvasCore/CanvasCore.tsx) 관련 [Core 함수](https://github.com/kisn3089/portpolio/blob/main/src/components/organism/three/modelCore/ModelCore.tsx)를 만들어 모든 three.js에 재사용
- 추후 영어버전 기능 확장을 위해 영어와 한글에 따라 동적으로 폰트 변경되게 설정
- 분기 처리를 원활하게 하기 위해 [CheckCondition Core](https://github.com/kisn3089/portpolio/blob/main/src/lib/util/CheckCondition.tsx) 함수 재사용

## 페이지별 설명

## HomePage

<img src=public/assets/img/readmeInfo/homepage.png width=700px />

```
three.js를 활용하여 호버 및 터치(클릭)시 설정해놓은 패턴을 기반으로 이미지 대체되는 효과를 구현
```

세부 기능

- [Float](https://github.com/kisn3089/portpolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L41C14-L41C19): 떠있는 효과
- [Bloom](https://github.com/kisn3089/portpolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L53): 자체적으로 빛나는 효과
- Reflection Plane
- [마우스 및 터치](https://github.com/kisn3089/portpolio/blob/main/src/components/molecule/canvasCore/cameraMouse/CameraMouse.tsx)에 따라 카메라 위치 변경
- [진입 애니메이션](https://github.com/kisn3089/portpolio/blob/main/src/components/molecule/canvasCore/cameraLookAt/CameraLookAt.tsx): camera-z, opacity

## ProjectPage

<img src=public/assets/img/readmeInfo/pj.png width=700px />

> 반응형

<img src=public/assets/img/readmeInfo/pj_rs.png height=700px />

```
호버에 반응하는 프로젝트 리스트 페이지
```

---

### Carousel & RestFul API Handling

[Github](https://github.com/kisn3089/mobile_cars_deal)

```
useQuery를 사용하여 로딩, 실패, 성공을 구현하였고 쉽게 테스트할 수 있게 왼쪽 영역에 컨트롤러를 구현.
또한 Carousel를 구현하여 클릭 이벤트와 드래그 이벤트로 사용자와 인터렉티브한 UX를 구현
자세한 내용은 해당 git ReadMe를 참고해주세요!
```

### Image_Processing

```
instagram color filter 기능으로 흑백 및 색 보정한 image 파일을 webp 확장자로 다운할 수 있게 구현한 프로젝트
```

#### 세부 기능

- image 파일을 drag를 통한 업로드 방식 구현
- threshold 값으로 image의 색을 변경 / default: 0
- create 버튼 클릭시 현재의 threshold 값으로 image 색보정
- threshold 입력시 Enter 버튼으로 create 기능, metaKey or ctrlKey + Enter로 image 다운로드 기능 구현

#### 트러블 슈팅

- 색보정 로직이 CPU를 독점 사용하여 create 버튼 클릭시 클릭이 되었는지에 대한 인터렉션이 없었던 문제를
  로직을 비동기로 변경, 부드러운 애니메이션 동작을 위해 setTimeout 300ms를 주어 해결

### Project_three.js

```
3D 모델을 로드하여 모델이 가지고 있는 애니메이션을 선택하여 동작하는 모습을 볼 수 있게 구현한 프로젝트
```

#### 세부 기능

- draco 압축 방식을 사용하여 크기 최적화
- 첫 model 로드 후 나머지 model 로드하여 렌더링 속도 개선
- color 클릭 시 배경색 변경
- useFrame으로 회전하는 애니메이션 구현
- 그림자 효과 구현
- [떠다니는](https://github.com/kisn3089/portpolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L41C14-L41C19) 효과 구현
- [자체적으로 빛나는](https://github.com/kisn3089/portpolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L53) 효과 구현
- 스크롤 확대 최소, 최대값 제한

#### 트러블 슈팅

- model 3개를 한번에 로드하여 GPU부하로 인해 로드가 지연되는 현상을 먼저 1개의 model을 로드시킨 후 나머지 작은 용량의 model을 로드하여 해결

<img src=public/assets/img/readmeInfo/pj_three_sphere.png width=700px />
<img src=public/assets/img/readmeInfo/pj_three_apple.png width=700px />

> 반응형

<img src=public/assets/img/readmeInfo/pj_shpere_rs.png height=600px />
<img src=public/assets/img/readmeInfo/pj_apple_rs.png height=600px />

### Project_Stock

```
공공 API를 활용해 주식을 검색하고 관련 정보 및 최근 1주일 데이터를 받아 차트를 이용한 데이터 시각화 프로젝트
```

#### 세부 기능

- url query에 기반한 주식 검색 시스템
- Enter 키로 주식 검색
- 공공 API에서 제공해주는 가장 최근 날짜를 계산하여 초기 설정
- 날짜 변경시 주식장이 열리지 않는 주말은 제외하도록 [알고리즘 개발](https://github.com/kisn3089/portpolio/blob/main/src/lib/util/adjustDate.ts#L53)
- react-query를 이용해 [병렬](https://github.com/kisn3089/portpolio/blob/main/src/hooks/useGetDetail.ts#L17) api 호출
- [에러 처리](https://github.com/kisn3089/portpolio/blob/main/src/components/molecule/showError/ShowError.tsx) Core 함수 생성하여 재사용

<img src=public/assets/img/readmeInfo/pj_stock.webp width=700px />

> 반응형

<img src=public/assets/img/readmeInfo/pj_stocklist_response.png height=600px />
<img src=public/assets/img/readmeInfo/pj_stocklist_response1.png height=600px />
<img src=public/assets/img/readmeInfo/pj_stockchart_response.png height=600px />

### Project_VideoPlayer

```
Video Upload시 확장자가 mp4가 아닐경우 ffmpeg wasm을 이용해 mp4로 변환하여 Player에 재생
```

<img src=public/assets/img/readmeInfo/player.png width=700px />

#### 세부 기능

- 음소거 아래 마커 버튼으로 현재 플레이 시간을 마크, 마크가 2개 일시 section play 버튼 활성화되어 구간재생 기능
- f(풀사이즈), 재생, 정지(space) 등 기본적인 단축키 기능 제공
- <<, >> 버튼을 통해 재생 시간을 이전 마크, 다음 마크 위치로 이동
- 풀사이즈 버튼 아래 마크 지우는 버튼으로 마크 제거
- 변환한 파일 mp4로 다운로드 기능

---

## 추후 업데이트 예정

```
- ABOUTME 페이지
  - 게이지바와 원형 게이지를 이용해 나의 강점 부분과 약점 부분을 시각화
- En 버전 추가
  - 최초 브라우저의 언어에 따라 한글, 영어로 설정 & 헤더에 언어 변경할 수 있는 Select 버튼 추가
- 얼굴 인식 기능 추가
```
