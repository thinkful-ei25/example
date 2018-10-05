function fizzbuzzer(input) {
  if (input % 15 === 0) return 'fizzbuzz';
  if (input % 5 === 0) return 'buzz';
  if (input % 3 === 0) return 'fizz';
  return input;
}

function generateResultHtml(fizzbuzzResult) {
  let className;
  if (typeof fizzbuzzResult === 'number') {
    className = '';
  } else {
    className = fizzbuzzResult;
  }

  return `
    <div class="fizz-buzz-item ${className}">
      <span>${fizzbuzzResult}</span>
    </div>
  `;
}


function handleSubmit() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    // receive input from user on fizzbuzz count
    const countTo = $('#number-choice').val();
    event.target.reset();

    const results = [];
    for (let i = 1; i <= countTo; i++) {
      // generate a fizzbuzz result up to the inputed count
      results.push(fizzbuzzer(i));
    }

    // generate a HTML element for each fizzbuzz result
    // placing all HTML elements onto the DOM
    $('.js-results').html(results.map(generateResultHtml).join(''));
  });
}



$(handleSubmit);

