let display = document.getElementById("vaultDisplay");
let buttons = document.querySelectorAll("button");
let numArray = [];
buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.value == "*") {
      numArray.push(parseInt(display.innerText));
      display.textContent = "";
    } else if (item.value == "#") {
      sum = 0;
      for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
      }
      numArray = [];
      display.textContent = sum;
    } else {
      display.textContent += item.value;
    }
    console.log(numArray);
  });
});

export default function Vault() {
  return (
    <>
      <div>The Vault</div>
      <div id="the-vault">
        <div class="dot dot-tl"></div>
        <div class="dot dot-tr"></div>
        <div class="dot dot-bl"></div>
        <div class="dot dot-br"></div>
        <div class="flex flex-ai-c scroll-x" id="vaultDisplay"></div>
        <div class="grid-container keypad">
          <button class="btn btn-dark" value="1">
            1
          </button>
          <button class="btn btn-dark" value="2">
            2
          </button>
          <button class="btn btn-dark" value="3">
            3
          </button>
          <button class="btn btn-dark" value="4">
            4
          </button>
          <button class="btn btn-dark" value="5">
            5
          </button>
          <button class="btn btn-dark" value="6">
            6
          </button>
          <button class="btn btn-dark" value="7">
            7
          </button>
          <button class="btn btn-dark" value="8">
            8
          </button>
          <button class="btn btn-dark" value="9">
            9
          </button>
          <button class="btn btn-dark" value="*">
            *
          </button>
          <button class="btn btn-dark" value="0">
            0
          </button>
          <button class="btn btn-dark" value="#">
            #
          </button>
        </div>
      </div>
    </>
  );
}
