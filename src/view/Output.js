import { VIEW } from "../constants/view.js";
import { Util } from "../util/index.js";

export class Output {
  static async printScore(ball, strike) {
    if (ball === 0 && strike === 0) return Util.print(VIEW.NOTHING);
    if (ball === 0 && strike !== 0)
      return Util.print(`${strike}${VIEW.STRIKE}`);
    if (ball !== 0 && strike === 0) return Util.print(`${ball}${VIEW.BALL}`);
    if (ball !== 0 && strike !== 0)
      return Util.print(`${ball}${VIEW.BALL} ${strike}${VIEW.STRIKE}`);
  }

  static async printComplete(length) {
    Util.print(length + VIEW.COMPLETE_GAME);
    const result = await Util.readLine(`${VIEW.RESTART_OR_EXIT}\n`);

    return result;
  }
}
