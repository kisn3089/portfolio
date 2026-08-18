const IMG = "/assets/img/ssurak"
const VIDEO = "/assets/video"

export type WhyCard = {
  index: string
  title: string
  description: string
}

export type CoreMedia = {
  /** `.mp4`면 자동재생 루프 영상으로, 그 외에는 이미지로 렌더한다 */
  src: string
  alt: string
  /** 세로 캡처처럼 고정 폭으로 잘라 보여줄 이미지의 비율 (`width / height`) */
  ratio?: string
}

export type CoreContent = {
  no: string
  title: string
  problem: string
  approach: string
  result: string
  chips: string[]
  /** 한 행에 1개면 전체 폭, 2개면 `ratio`가 있는 쪽이 고정 폭 */
  mediaRows: CoreMedia[][]
}

export const SSURAK_OVERVIEW = `카페나 음식점에서 주문할 때, 고객마다 모바일 디바이스가 있는데 왜 별도의 하드웨어를 매장에 두어야 할까요?\nssurak 프로젝트는 이 질문에서 시작되었습니다.\n\n태블릿, 키오스크 없이 QR 하나로 주문을 전달해줍니다.`

export const SSURAK_HERO_IMAGES = {
  board: {
    src: `${IMG}/table-board.webp`,
    alt: "점주 콘솔 · 테이블별 주문 현황",
  },
  cart: {
    src: `${IMG}/cart.webp`,
    alt: "손님 화면 · 장바구니",
    ratio: "2/3",
  },
}

export const SSURAK_WHY: WhyCard[] = [
  {
    index: "01 / 도입 비용",
    title: "테이블 수만큼 단말을 사지 않습니다.",
    description:
      "키오스크와 테이블 오더 태블릿은 대수만큼 단가와 관리 부담이 늘어납니다. ssurak은 테이블의 QR과 손님 휴대폰만으로 주문을 받습니다.",
  },
  {
    index: "02 / 온보딩",
    title: "메뉴 수십 개를 손으로 넣지 않는다",
    description:
      "메뉴판 사진을 올리면 이름·가격·설명·카테고리를 추출해 초안을 만듭니다. 점주는 검토하고 고친 뒤 한 번에 등록합니다.",
  },
  {
    index: "03 / 운영",
    title: "주문은 양쪽 화면에 동시에 남는다",
    description:
      "손님 폰과 점주 콘솔은 서로 다른 앱이지만 같은 주문을 봅니다. 도메인 이벤트를 룸 단위로 브로드캐스트해 두 화면의 상태를 맞춥니다.",
  },
]

export const SSURAK_CORE: CoreContent[] = [
  {
    no: "01",
    title: "사진 한 장에서 메뉴 초안까지",
    problem: "메뉴 등록은 매장 온보딩에서 가장 오래 걸리는 작업입니다.",
    approach:
      "업로드 이미지를 리사이즈·WebP로 변환해 S3에 올리고, OpenAI Responses API의 Structured Output으로 이름·가격·설명·카테고리만 추출합니다. 결과는 Redis에 12시간 TTL 초안으로 보관하고, 매핑에 실패한 항목은 별도 캐시에 남겨 다시 열었을 때 이어서 편집합니다.",
    result:
      "사진 최대 3장 → 검토 → 일괄 등록. 추출 횟수는 계정별로 제한해 API 비용을 예측 가능하게 유지했습니다.",
    chips: [
      "Responses API",
      "Structured Output",
      "Draft Store · 12h TTL",
      "Failed Extraction Cache",
      "S3 · WebP",
    ],
    mediaRows: [
      [{ src: `${IMG}/menu-extraction.webp`, alt: "메뉴판 사진 업로더" }],
      [
        {
          src: `${IMG}/bulk-create-menu.webp`,
          alt: "추출 결과 검토 후 일괄 등록",
        },
      ],
    ],
  },
  {
    no: "02",
    title: "손님 폰과 점주 콘솔을 같은 상태로",
    problem:
      "주문이 들어온 순간 손님 화면과 콘솔이 서로 다른 것을 보여주면 매장은 주문을 신뢰하지 않습니다.",
    approach:
      "장바구니·주문 변경을 도메인 이벤트로 만들어 WSS 게이트웨이에 넘기고, 테이블 룸과 어드민 룸으로 브로드캐스트합니다. 손님은 테이블 세션으로 룸에 자동 조인하고 콘솔은 JWT로 어드민 룸을 구독하며, 서버 인스턴스가 늘어도 Redis 어댑터의 pub/sub으로 이벤트가 모든 인스턴스에 전달됩니다.",
    result:
      "주문 상태가 양쪽에 즉시 반영되고, 연결 상태를 UI에 노출하여 예측 가능한 사용자 경험을 제공합니다.",
    chips: [
      "Socket.IO",
      "Room Broadcast",
      "Redis Adapter",
      "Domain Events",
      "JWT · Table Session",
    ],
    mediaRows: [
      [
        {
          src: `${VIDEO}/order-console.mp4`,
          alt: "손님이 주문하는 즉시 점주 콘솔의 주문 현황이 갱신되는 화면",
        },
      ],
    ],
  },
  {
    no: "03",
    title: "로그인 없는 장바구니",
    problem:
      "손님에게 회원가입을 요구할 수 없지만, 새로고침이나 재접속 후에도 장바구니는 남아야 합니다.",
    approach:
      "테이블 세션 토큰을 키로 Redis에 장바구니를 보관하고, 같은 메뉴라도 옵션 조합이 다르면 별개 항목으로 다룹니다. 주문 확정은 Prisma 트랜잭션으로 MySQL에 기록해 항목·금액이 어긋나지 않게 했습니다.",
    result:
      "한 테이블에서 여러 명이 담아도 항목이 섞이지 않고, 재접속 후 이어서 주문할 수 있습니다.",
    chips: [
      "Redis Cart Store",
      "Session Token",
      "Prisma Transaction",
      "MySQL 8",
    ],
    mediaRows: [
      [
        {
          src: `${VIDEO}/share-carts.mp4`,
          alt: "한 테이블의 여러 손님이 같은 장바구니에 담는 화면",
        },
      ],
    ],
  },
]

export const SSURAK_ARCHITECTURE = {
  description:
    "오더 앱과 콘솔 앱은 REST로 자원에 접근하고, 상태 변화는 도메인 이벤트를 통해 WSS 게이트웨이로 흐릅니다. 메뉴 초안·장바구니처럼 수명이 짧은 데이터는 Redis, 확정된 주문과 메뉴는 MySQL에 둡니다.",
  image: {
    src: `${IMG}/architecture-runtime.webp`,
    alt: "ssurak 런타임 아키텍처",
  },
}
