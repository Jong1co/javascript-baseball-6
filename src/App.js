import { RULE } from "./constants/rule.js";
import { BaseballService } from "./service/BaseballService.js";

class App {
  async play() {
    const game = new BaseballService(RULE.STAGE, RULE.MIN, RULE.MAX);
    await game.startGame();
  }
}

const app = new App();
app.play();

export default App;
