import IsTheJuiceWorthTheSqueeze from "../contracts/IsTheJuiceWorthTheSqueeze.cdc"

transaction(myNewAnswer: String) {

  prepare(signer: AuthAccount) {}

  execute {
    IsTheJuiceWorthTheSqueeze.changeAnswer(newAnswer: myNewAnswer)
  }
}