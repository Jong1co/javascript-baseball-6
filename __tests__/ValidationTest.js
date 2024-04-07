import { Validation } from "../src/validation";

describe("Valdiation :: ", () => {
  let answer;
  let validation;

  beforeEach(() => {
    // answer = "123";
    validation = new Validation(3, 1, 9);
  });

  describe("isValidInputLength", () => {
    it("숫자 야구 게임의 길이와 입력한 값의 길이가 동일하면 true", () => {
      expect(validation.isValidInputLength("123")).toBe(true);
      expect(validation.isValidInputLength("234")).toBe(true);
    });

    it("숫자 야구 게임의 길이와 입력한 값의 길이가 다르다면 false", () => {
      expect(validation.isValidInputLength("1234")).toBe(false);
      expect(validation.isValidInputLength("23")).toBe(false);
      expect(validation.isValidInputLength("")).toBe(false);
    });
  });

  describe("isPositiveInteger", () => {
    it("모두 숫자가 아니라면 false", () => {
      expect(validation.isPositiveInteger("1234a")).toBe(false);
      expect(validation.isPositiveInteger("vcz23b")).toBe(false);
    });
    it("모두 양의 정수가 아니라면 false", () => {
      expect(validation.isPositiveInteger("")).toBe(false);
      expect(validation.isPositiveInteger("-1230")).toBe(false);
      expect(validation.isPositiveInteger("-123")).toBe(false);
      expect(validation.isPositiveInteger("-1")).toBe(false);
      expect(validation.isPositiveInteger("-0")).toBe(false);
      expect(validation.isPositiveInteger("1.0")).toBe(false);
      expect(validation.isPositiveInteger("+1")).toBe(false);
      expect(validation.isPositiveInteger("1.1")).toBe(false);
      expect(validation.isPositiveInteger("+0")).toBe(false);
    });
    it("0이 포함된다면 false", () => {
      expect(validation.isPositiveInteger("012")).toBe(false);
      expect(validation.isPositiveInteger("052")).toBe(false);
      expect(validation.isPositiveInteger("0")).toBe(false);
      expect(validation.isPositiveInteger("00552")).toBe(false);
    });
    it("모두 양의 정수인 경우 true", () => {
      expect(validation.isPositiveInteger("552")).toBe(true);
    });
  });

  describe("isNumberInRange", () => {
    it("숫자의 범위가 1 - 9가 아니라면 false", () => {
      expect(validation.isNumberInRange("")).toBe(false);
      expect(validation.isNumberInRange("0123")).toBe(false);
      expect(validation.isNumberInRange("123")).toBe(true);
    });
  });

  it("hasDuplicatedNumber :: 중복된 숫자가 존재한다면 true", () => {
    expect(validation.hasDuplicatedNumber("112")).toBe(true);
    expect(validation.hasDuplicatedNumber("111")).toBe(true);
    expect(validation.hasDuplicatedNumber("124")).toBe(false);
    expect(validation.hasDuplicatedNumber("141")).toBe(true);
  });
});
