pub contract IsTheJuiceWorthTheSqueeze {

    pub var answer: String

    pub fun changeAnswer(newAnswer: String) {
        self.answer = newAnswer
    }

    init() {
        self.answer = "Yes, obviously."
    }
}