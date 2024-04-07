import { Validation } from "../src/validation";
import { RULE } from "../src/constants/rule.js";

describe("Valdiation :: ", () => {
  let validation;

  beforeEach(() => {
    validation = new Validation(RULE.STAGE, RULE.MIN, RULE.MAX);
  });

  describe("isValidInputLength", () => {
    it("게임의 길이와 입력한 값의 길이가 다르다면 throw", () => {
      expect(() => validation.isValidInputLength("1222334")) //
        .toThrow();
    });
  });

  describe("isNumberInRange", () => {
    it("범위에 속하지 않으면 throw", () => {
      expect(() => validation.isNumberInRange("01222334")) //
        .toThrow();
    });
  });

  describe("hasDuplicatedNumber", () => {
    it("중복된 숫자가 존재한다면 throw", () => {
      expect(() => validation.hasDuplicatedNumber("122")) //
        .toThrow();
    });
  });
});
