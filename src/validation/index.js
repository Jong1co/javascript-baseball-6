/**
 * validation
 *
 * 문자 길이가 n개가 아니라면 throw
 * n개가 전부 양의 정수가 아니라면 throw (경곗값 테스트 적용)
 * 숫자의 범위가 1 - 9가 아니라면 throw (경곗값 테스트 적용)
 * 같은 숫자가 존재한다면 throw ex)111 (경곗값 테스트 적용)
 */

import { ERROR } from "../constants/error.js";

export class Validation {
  constructor(length, min = 1, max = 9) {
    this.length = length;
    this.min = min;
    this.max = max;
  }

  isValidInputLength(input) {
    if (input.length !== this.length) throw new Error(ERROR.NOT_VALID_LENGTH);
  }

  isPositiveInteger(input) {
    const regex = /^\d+$/;

    if (input.includes("0") || !regex.test(input))
      throw new Error(ERROR.NOT_VALID_RANGE);
  }

  isNumberInRange(input) {
    for (let num of input) {
      if (num < this.min || num > this.max)
        throw new Error(ERROR.NOT_VALID_RANGE);
    }
  }

  hasDuplicatedNumber(input) {
    const set = new Set([...input]);

    if (set.size !== input.length) throw new Error(ERROR.HAS_DUPLICATE);
  }

  isFalsyButNotZero(input) {
    if (typeof input !== "string" || input === "")
      throw new Error(ERROR.NOT_VALID_LENGTH);
  }
}
