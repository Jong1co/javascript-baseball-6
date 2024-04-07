import App from "../src/App.js";
import { mockQuestions, mockRandoms } from "./util/mock.js";

describe("AdditionalTest :: ", () => {
  let randoms;

  beforeEach(() => {
    randoms = [1, 3, 5, 5, 8, 9];
    mockRandoms(randoms);
  });

  test("입력값 중 0이 포함된 경우 Error", async () => {
    // given
    const answers = ["012"];
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow();
  });

  test("입력값 중 문자가 포함된 경우 Error", async () => {
    // given
    const answers = ["abc"];
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow();
  });

  test("입력값이 중복된 경우 Error", async () => {
    // given
    const answers = ["133"];
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow();
  });
});
