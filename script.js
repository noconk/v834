const map = {
  "1": ["a","f","k","p","u","z"],
  "2": ["b","g","l","q","v"],
  "3": ["c","h","m","r","w"],
  "4": ["d","i","n","s","x"],
  "5": ["e","j","o","t","y"]
};

function generate(input, current = "", results = []) {

  if (input.length === 0) {
    results.push(current);
    return results;
  }

  const digit = input[0];

  if (!map[digit]) {
    return results;
  }

  for (const letter of map[digit]) {
    generate(
      input.slice(1),
      current + letter,
      results
    );
  }

  return results;
}

function translateCode() {

  const input =
    document.getElementById("input")
    .value
    .trim();

  const words = input.split(" ");

  const output =
    document.getElementById("output");

  output.innerHTML = "";

  words.forEach(wordInput => {

    const allResults =
      generate(wordInput);

    const validWords =
      allResults.filter(word =>
        dictionary.includes(word)
      );

    const resultBox =
      document.createElement("div");

    resultBox.className = "result";

    if (validWords.length === 0) {

      resultBox.innerHTML = `
        <strong>${wordInput}</strong><br>
        No valid words found
      `;

    } else {

      resultBox.innerHTML = `
        <strong>${wordInput}</strong><br>
        ${validWords.join(", ")}
      `;
    }

    output.appendChild(resultBox);

  });
}

function reverseTranslate() {

  const input =
    document.getElementById("input")
    .value
    .toLowerCase()
    .trim();

  let result = "";

  for (const char of input) {

    for (const number in map) {

      if (map[number].includes(char)) {
        result += number;
        break;
      }
    }
  }

  const output =
    document.getElementById("output");

  output.innerHTML = `
    <div class="result">
      ${result}
    </div>
  `;
}