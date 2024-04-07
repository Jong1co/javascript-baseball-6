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
    this.length = length;
    this.min = min;
    this.max = max;
  }

  isValidInputLength(input) {
    return input.length === this.length;
  }

  isPositiveInteger(input) {
    const regex = /^\d+$/;

    if (input.includes("0")) return false;

    return regex.test(input);
  }

  isNumberInRange(input) {
    if (this.#isFalsyButNotZero(input)) return false;

    for (let num of input) {
      if (num < this.min || num > this.max) return false;
    }

    return true;
  }

  hasDuplicatedNumber(input) {
    if (this.#isFalsyButNotZero(input)) return false;

    const set = new Set([...input]);
    console.log(set);
    return set.size !== input.length;
  }

  #isFalsyButNotZero(input) {
    return typeof input !== "string" || input === "";
  }
}
