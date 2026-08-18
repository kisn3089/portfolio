## Stems Portfolio

### update

```
2026.08.18
What's New
[프로젝트 추가]
ssurak - QR Table Order System
- 프로젝트 리스트 맨 앞에 추가 및 상세 페이지(/project/ssurak) 신규 구현
- 상세 페이지 카피/이미지 데이터를 src/store/SsurakDetail.ts로 분리하여 컴포넌트와 콘텐츠 분리
- 이미지와 mp4를 같은 데이터 구조(mediaRows)로 다루고 확장자에 따라 img / video 렌더 분기
- 데모 계정 클립보드 복사 버튼 구현 (복사 성공 아이콘 2s 후 원복, unmount 시 타이머 clear)
```

```
2025.09.29
What's New
[프로젝트 추가]
Web Accessibility 모달 폼
- 프로젝트 리스트 및 랜딩 페이지에 추가
- 프로젝트 링크 클릭 이동 시 외부 링크일 경우 a 태그 새탭으로 열리도록 구현
- molcules, organisms 단수 형태 -> 복수 형태로 폴더명 변경
[이미지 프로세싱 프로젝트]
- worker 사용으로 브라우저 스레드를 이용. (메인 스레드 non-blocking)
- 업로드 가능한 확장자를 명확하게 검증하고 사용자에게 오류를 노출히도록 변경
- threshold 값 키보드 이벤트 입력 시 0~3 범위로 보장
```

---

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
- [Animation Core](https://github.com/kisn3089/portfolio/blob/main/src/styles/theme.ts#L65) 함수를 만들어 모든 애니메이션에 재사용
- [font](https://github.com/kisn3089/portfolio/blob/main/src/styles/fonts.css) 깜빡하는 현상을 없애기 위해 import css 방식 사용
- [three.js Canvas](https://github.com/kisn3089/portfolio/blob/main/src/components/molecule/canvasCore/CanvasCore.tsx) 관련 [Core 함수](https://github.com/kisn3089/portfolio/blob/main/src/components/organism/three/modelCore/ModelCore.tsx)를 만들어 모든 three.js에 재사용
- 추후 영어버전 기능 확장을 위해 영어와 한글에 따라 동적으로 폰트 변경되게 설정
- 분기 처리를 원활하게 하기 위해 [CheckCondition Core](https://github.com/kisn3089/portfolio/blob/main/src/lib/util/CheckCondition.tsx) 함수 재사용

## 페이지별 설명

## HomePage

<img src=public/assets/img/readmeInfo/homepage.png width=700px />

```
three.js를 활용하여 호버 및 터치(클릭)시 설정해놓은 패턴을 기반으로 이미지 대체되는 효과를 구현
```

세부 기능

- [Bloom](https://github.com/kisn3089/portfolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L53): 자체적으로 빛나는 효과
- [마우스 및 터치](https://github.com/kisn3089/portfolio/blob/main/src/components/molecule/canvasCore/cameraMouse/CameraMouse.tsx)에 따라 카메라 위치 변경
- [진입 애니메이션](https://github.com/kisn3089/portfolio/blob/main/src/components/molecule/canvasCore/cameraLookAt/CameraLookAt.tsx): camera-z, opacity

## ProjectPage

<img src=public/assets/img/readmeInfo/pj.png width=700px />

> 반응형

<img src=public/assets/img/readmeInfo/pj_rs.png height=700px />

```
호버에 반응하는 프로젝트 리스트 페이지
```

---

### ssurak | QR Table Order System

[상세 페이지](https://stems-iota.vercel.app/project/ssurak) · [Console](https://console.ssurak.com) · [Frontend](https://github.com/kisn3089/ssurak-frontend) · [Backend](https://github.com/kisn3089/ssurak-backend) · [Infra](https://github.com/kisn3089/ssurak-infra)

```
태블릿도, 키오스크도 두지 않습니다.
QR 하나로 손님 휴대폰이 그대로 주문 단말이 되는 오프라인 매장용 테이블 오더 서비스.
```

<img alt="ssurak console" src=public/assets/img/ssurak/table-board.webp width=700px />

#### 핵심 구현

**01. 사진 한 장에서 메뉴 초안까지**

- 업로드 이미지를 리사이즈 · `webp` 변환 후 S3 업로드
- OpenAI Responses API의 `Structured Output`으로 이름 · 가격 · 설명 · 카테고리만 추출
- 추출 결과는 Redis에 12시간 TTL 초안으로 보관, 매핑 실패 항목은 별도 캐시에 남겨 다시 열었을 때 이어서 편집
- 추출 횟수를 계정별로 제한하여 API 비용을 예측 가능하게 유지

<img alt="menu extraction" src=public/assets/img/ssurak/menu-extraction.webp width=700px />

**02. 손님 폰과 점주 콘솔을 같은 상태로**

- 장바구니 · 주문 변경을 도메인 이벤트로 만들어 WSS 게이트웨이로 전달
- 손님은 테이블 세션으로, 콘솔은 JWT로 각각 테이블 룸 / 어드민 룸을 구독하여 룸 단위 브로드캐스트
- 서버 인스턴스가 늘어나도 Redis 어댑터의 `pub/sub`으로 모든 인스턴스에 이벤트 전달
- 연결 상태를 UI에 그대로 노출하여 끊김을 숨기지 않도록 구현

**03. 로그인 없는 장바구니**

- 테이블 세션 토큰을 키로 Redis에 장바구니를 보관하여 회원가입 없이도 새로고침 · 재접속 후 장바구니 유지
- 같은 메뉴라도 옵션 조합이 다르면 별개 항목으로 처리
- 주문 확정은 Prisma 트랜잭션으로 MySQL에 기록하여 항목 · 금액 정합성 보장

#### 런타임 구조

```
오더 앱과 콘솔 앱은 REST로 자원에 접근하고, 상태 변화는 도메인 이벤트를 통해 WSS 게이트웨이로 흐릅니다.
메뉴 초안 · 장바구니처럼 수명이 짧은 데이터는 Redis, 확정된 주문과 메뉴는 MySQL에 둡니다.
```

<img alt="ssurak runtime architecture" src=public/assets/img/ssurak/architecture-runtime.webp width=700px />

#### 포트폴리오 상세 페이지 구현

- `project/ssurak` 라우트 추가 → [SsurakPage](https://github.com/kisn3089/portfolio/blob/main/src/pages/SsurakPage.tsx)가 `BackLink → SsurakHeader → Why → Core → Architecture → DemoGuide` 순으로 구성
- 카피 · 이미지 데이터를 [SsurakDetail.ts](https://github.com/kisn3089/portfolio/blob/main/src/store/SsurakDetail.ts)로 분리하여 기존 `ProjectList.ts` 패턴과 동일하게 콘텐츠와 컴포넌트를 분리
- `mediaRows` 한 벌로 이미지와 영상을 함께 다루고, `.mp4` 확장자면 `autoPlay · loop · muted · playsInline` video로 렌더 분기
- 데모 계정 복사는 `navigator.clipboard.writeText` 사용, 복사 아이콘을 2s 후 원복하며 재클릭 시 타이머 리셋 · unmount 시 `clearTimeout`
- 외부 링크는 [ALink](https://github.com/kisn3089/portfolio/blob/main/src/components/molecules/aLink/ALink.tsx)로 `a` 새 탭, 내부 경로는 `Link`로 분기
- 색 · 타이포 · 브레이크포인트는 새 토큰 없이 기존 `theme`(`palette` / `fontSize` / `deviceSize` / `ts.moreFast`) 값만 사용

### Web Accessibility & Modal Form

[Github](https://github.com/kisn3089/toss-accessibility-code-challenge)

```
웹 접근성을 연구하는 WAI 기관에서 제시한 WCAG 표준 스펙 2.1 AA 수준을 준수하고 있습니다.
```

<img src=public/assets/img/pj_accessibility.webp height=500px />

- 탭 이동이 폼 모달 내부에서 순환되도록 구현.
- 스크린리더가 포커싱 이동마다 미리 정의한 label을 읽고, input 검증에 실패할 때 실패한 이유를 읽어주도록 구현.
- `await openModal(<ModalForm />)` 형태로 폼 모달 내부에서 제출되기까지 기다리도록 구현.

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

- `worker` 사용으로 브라우저 스레드를 이용하여 애니메이션 끊기지 않도록 메인 스레드 `non-blocking` 구현
- image 파일을 drag를 통한 업로드 방식 구현
- threshold 값으로 image의 색을 변경 / default: 0
- create 버튼 클릭시 현재의 threshold 값으로 image 색보정
- threshold 입력시 Enter 버튼으로 create 기능, metaKey or ctrlKey + Enter로 image 다운로드 기능 구현

<img src=public/assets/img/readmeInfo/pj_image_.png max-width=1100px />
<img src=public/assets/img/readmeInfo/pj_image_rs.gif  />

#### 트러블 슈팅

- 색보정 로직이 CPU를 `block`하여 애니메이션 기반으로 로딩임을 보여주는 인터렉션이 부드럽지 못하여 `setTimeout` 300ms를 주어 해결했었다.
  - 근본적 해결을 위해서 `worker` 사용으로 색보정 로직을 브라우저 스레드를 사용하도록 메인 스레드와 분리하여 `non-blocking` 구조로 해결

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
- [떠다니는](https://github.com/kisn3089/portfolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L41C14-L41C19) 효과 구현
- [자체적으로 빛나는](https://github.com/kisn3089/portfolio/blob/main/src/components/organism/main/mainLayout/MainLayout.tsx#L53) 효과 구현
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
- 날짜 변경시 주식장이 열리지 않는 주말은 제외하도록 [알고리즘 개발](https://github.com/kisn3089/portfolio/blob/main/src/lib/util/adjustDate.ts#L53)
- react-query를 이용해 [병렬](https://github.com/kisn3089/portfolio/blob/main/src/hooks/useGetDetail.ts#L17) api 호출
- [에러 처리](https://github.com/kisn3089/portfolio/blob/main/src/components/molecule/showError/ShowError.tsx) Core 함수 생성하여 재사용

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
- En 버전 추가
  - 최초 브라우저의 언어에 따라 한글, 영어로 설정 & 헤더에 언어 변경할 수 있는 Select 버튼 추가
- 얼굴 인식 기능 추가
```
