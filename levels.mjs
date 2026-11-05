export const levels=[
  {
    "id": 1,
    "title": "처음 건진 빛",
    "target": 2,
    "turns": 7,
    "cards": [
      {
        "event": "atMost10",
        "reward": 1
      },
      {
        "event": "even",
        "reward": 2
      },
      {
        "event": "double",
        "reward": 4
      }
    ],
    "lesson": "어느 조건을 만족하는 눈이 더 많을까요?"
  },
  {
    "id": 2,
    "title": "홀짝의 바다",
    "target": 3,
    "turns": 7,
    "cards": [
      {
        "event": "odd",
        "reward": 2
      },
      {
        "event": "bothOdd",
        "reward": 4
      },
      {
        "event": "atMost8",
        "reward": 1
      }
    ],
    "lesson": "홀수의 합과 홀수 두 개는 다른 조건이에요."
  },
  {
    "id": 3,
    "title": "합의 비밀",
    "target": 4,
    "turns": 8,
    "cards": [
      {
        "event": "sum2",
        "reward": 5
      },
      {
        "event": "sum7",
        "reward": 5
      },
      {
        "event": "different",
        "reward": 1
      }
    ],
    "lesson": "합의 종류가 같게 가능할까요? 36칸에서 세어 봐요."
  },
  {
    "id": 4,
    "title": "겹치는 여섯",
    "target": 4,
    "turns": 8,
    "cards": [
      {
        "event": "oneSix",
        "reward": 3
      },
      {
        "event": "double",
        "reward": 5
      },
      {
        "event": "noSix",
        "reward": 1
      }
    ],
    "lesson": "(6,6)을 두 번 세지 않도록 해요."
  },
  {
    "id": 5,
    "title": "파도 앞의 선택",
    "target": 5,
    "turns": 7,
    "cards": [
      {
        "event": "even",
        "reward": 2
      },
      {
        "event": "atLeast9",
        "reward": 4
      },
      {
        "event": "atMost10",
        "reward": 1
      }
    ],
    "lesson": "손에 든 진주가 많을수록 한 번의 실패가 아파요."
  },
  {
    "id": 6,
    "title": "짝수의 두 얼굴",
    "target": 5,
    "turns": 7,
    "cards": [
      {
        "event": "bothEven",
        "reward": 4
      },
      {
        "event": "productEven",
        "reward": 1
      },
      {
        "event": "firstEven",
        "reward": 2
      }
    ],
    "lesson": "둘 다 짝수와 곱이 짝수인 경우를 비교해요."
  },
  {
    "id": 7,
    "title": "달빛을 보관할 때",
    "target": 6,
    "turns": 7,
    "cards": [
      {
        "event": "oneOne",
        "reward": 4
      },
      {
        "event": "middle",
        "reward": 3
      },
      {
        "event": "different",
        "reward": 1
      }
    ],
    "lesson": "보관에도 한 차례가 필요해요. 남은 기회를 생각해요."
  },
  {
    "id": 8,
    "title": "기회 네 번",
    "target": 5,
    "turns": 4,
    "cards": [
      {
        "event": "atMost10",
        "reward": 1
      },
      {
        "event": "even",
        "reward": 3
      },
      {
        "event": "sum7",
        "reward": 6
      }
    ],
    "lesson": "안전한 조건만 고르면 기회가 모자랄 수 있어요."
  },
  {
    "id": 9,
    "title": "푸른 눈과 분홍 눈",
    "target": 6,
    "turns": 6,
    "cards": [
      {
        "event": "firstGreater",
        "reward": 3
      },
      {
        "event": "double",
        "reward": 6
      },
      {
        "event": "atMost8",
        "reward": 1
      }
    ],
    "lesson": "두 주사위의 순서를 바꾸면 같은 결과일까요?"
  },
  {
    "id": 10,
    "title": "얕은 바다와 깊은 바다",
    "target": 7,
    "turns": 6,
    "cards": [
      {
        "event": "productEven",
        "reward": 1
      },
      {
        "event": "high",
        "reward": 5
      },
      {
        "event": "odd",
        "reward": 3
      }
    ],
    "lesson": "성공 가능성과 얻는 양을 함께 비교해요."
  },
  {
    "id": 11,
    "title": "마지막 보관함",
    "target": 8,
    "turns": 6,
    "cards": [
      {
        "event": "oneSix",
        "reward": 5
      },
      {
        "event": "middle",
        "reward": 3
      },
      {
        "event": "atMost10",
        "reward": 1
      }
    ],
    "lesson": "도전을 많이 하는 것과 보관할 차례를 남기는 것 사이에서 골라요."
  },
  {
    "id": 12,
    "title": "조개빛 등대",
    "target": 9,
    "turns": 6,
    "cards": [
      {
        "event": "noSix",
        "reward": 2
      },
      {
        "event": "even",
        "reward": 4
      },
      {
        "event": "sum8",
        "reward": 8
      }
    ],
    "lesson": "경우의 수, 손의 진주, 남은 기회를 함께 보고 탐험해요."
  }
];
export const practice={"id": 0, "title": "첫 진주를 보관해요", "target": 2, "turns": 3, "cards": [{"event": "even", "reward": 2}, {"event": "double", "reward": 4}], "lesson": "연습에서는 푸른 2와 분홍 4가 나와요. 본게임의 주사위는 매번 무작위예요."};
