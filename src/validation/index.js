/**
 * validation
 *
 * 문자 길이가 n개가 아니라면 throw
 * n개가 전부 양의 정수가 아니라면 throw (경곗값 테스트 적용)
 * 숫자의 범위가 1 - 9가 아니라면 throw (경곗값 테스트 적용)
 * 같은 숫자가 존재한다면 throw ex)111 (경곗값 테스트 적용)
 */

export class Validation {
  constructor(length, min = 1, max = 9) {
    this.answerLength = length;
    this.min = min;
    this.max = max;
  }

  isValid(input) {
    this.isValidInputLength(input);
    this.isNumberInRange(input);
    this.hasDuplicatedNumber(input);
  }

  isValidInputLength(input) {
    if (input.length !== this.answerLength) {
      throw new Error(ERROR.NOT_VALID_LENGTH);
    }
  }

  isPositiveInteger(input) {
    const regex = /^\d+$/;

    if (input.includes("0")) return false;

    return regex.test(input);
  }

  isNumberInRange(input) {
    if (this.#isFalsyButNotZero(input)) throw new Error(ERROR.NOT_VALID_RANGE);

    for (let num of input) {
      if (num < this.min || num > this.max)
        throw new Error(ERROR.NOT_VALID_RANGE);
    }

    return true;
  }

  hasDuplicatedNumber(input) {
    if (this.#isFalsyButNotZero(input)) return false;

    const set = new Set([...input]);

    if (set.size !== input.length) {
      throw new Error(ERROR.HAS_DUPLICATE);
    }
  }

  #isFalsyButNotZero(input) {
    return typeof input !== "string" || input === "";
  }
}
