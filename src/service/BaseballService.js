import { RULE } from "../constants/rule.js";
import { ERROR } from "../constants/error.js";
import { VIEW } from "../constants/view.js";
import { Util } from "../util/index.js";
import { Validation } from "../validation/index.js";
import { Output } from "../view/Output.js";

export class BaseballService {
  #answer = [];

  constructor(stage, min, max) {
    this.stage = stage;
    this.min = min;
    this.max = max;

    this.validator = new Validation(this.stage, this.min, this.max);
  }

  async startGame() {
    Util.print(VIEW.START_GAME);
    this.#answer = this.createAnswer();
    await this.makeAnAttempt();
  }

  async endGame() {
    const input = await Output.printComplete(this.stage);

    switch (input) {
      case "1":
        await this.startGame();
        return;
      case "2":
        this.exitGame();
        return;
      default:
        throw new Error(ERROR.NOT_VALID_NUMBER);
    }
  }

  exitGame() {
    Util.print(VIEW.END_GAME);
    return;
  }

  createAnswer() {
    const answer = [];

    while (answer.length < RULE.STAGE) {
      const pickedNumber = Util.pickNumberInRange(RULE.MIN, RULE.MAX);
      if (!answer.includes(pickedNumber)) answer.push(pickedNumber);
    }

    return answer;
  }

  async makeAnAttempt() {
    const input = await Util.readLine(VIEW.ENTER_NUMBER);

    this.validator.isValid(input);

    const { ball, strike } = this.getScore(input);

    Output.printScore(ball, strike);

    const isAnswer = strike === this.stage;

    if (isAnswer) {
      await this.endGame();
      return;
    } else {
      await this.makeAnAttempt();
      return;
    }
  }

  getScore(input) {
    const ball = this.countBall(input);
    const strike = this.countStrike(input);

    return { ball, strike };
  }

  countBall(input) {
    let ball = 0;
    for (let i = 0; i < input.length; i++) {
      const itemIndex = this.#answer.findIndex(
        (item) => item === Number(input[i])
      );

      const isBall = itemIndex !== -1 && itemIndex !== i;

      if (isBall) ball++;
    }

    return ball;
  }

  countStrike(input) {
    let strike = 0;
    for (let i = 0; i < input.length; i++) {
      const itemIndex = this.#answer.findIndex(
        (item) => item === Number(input[i])
      );

      const isStrike = itemIndex !== -1 && itemIndex === i;

      if (isStrike) strike++;
    }

    return strike;
  }
}
