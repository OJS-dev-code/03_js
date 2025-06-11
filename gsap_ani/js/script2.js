gsap.registerPlugin(SplitText);

console.clear();

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  let split = SplitText.create(".split", {
    type: "words, lines",
    linesClass: "line",
    wordsClass: "word",
    charsClass: "char",
    autoSplit: true,
    onSplit: (self) => {
      console.log("splitting");

      return gsap.from(self.lines, {
        yPercent: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 3,
        repeat: -1
      });
    }
  });

  document.body.classList.add("lines");
});

document.querySelector(".charButton").addEventListener("click", () => {
  document.body.classList.toggle("chars");
});

document.querySelector(".wordButton").addEventListener("click", () => {
  document.body.classList.toggle("words");
});

document.querySelector(".lineButton").addEventListener("click", () => {
  document.body.classList.toggle("lines");
});