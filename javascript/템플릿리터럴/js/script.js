const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

console.log(template);

const template1 = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;

console.log(template1);

const first = "Ung-mo";
const last = "Lee";

console.log("quotes: my name is "+first+" "+last+".");
console.log(`backtick: my name is ${first} ${last}.`);
