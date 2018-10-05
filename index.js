function main() {
  $.each($('li'), (index, item) => {
    $(item).append(`<button id="delete-${index}" class="delete">Del</button>`);
    $(item).append(`<button id="highlight-${index}" class="highlight">Highlight</button>`);
  });
  
  
  $('.delete').click(event => {
    $(event.target).text('Confirm?');
  });
}


$(main);


