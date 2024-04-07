import { Random, Console } from "@woowacourse/mission-utils";

/**
 * woowacourse/mission-utils는 외부 라이브러리
 * 내 클래스들의 비즈니스 로직이 외부 라이브러리의 구현 세부 사항과 밀접하게 결합되기 때문에
 * 1. 이를 캡슐화하여 변경에 용이하게 하고,
 * 2. 코드의 나머지 부분을 숨겨 상호작용을 단순하게 구현하기 위해 -> Random, Console이 따로 존재하는데 이를 Util이란 클래스 하나로 사용하기 위해
 *
 * 퍼사드 패턴 사용
 */
export class Util {
  static print(message) {
    Console.print(message);
  }

  static readLine = async (message) => Console.readLineAsync(message);

  static pickNumberInRange(min, max) {
    return Random.pickNumberInRange(min, max);
  }
}
