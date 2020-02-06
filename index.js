$(document).ready(function(){
  let items = $("#items");

  $("#add_button").click(function(){
    const colors = ['red', 'pink', 'purple', 'blue', 'sky_blue', 'yellow'];
    let num = items.children().length;
    let name = '';
    $("#item_name").val().trim().length == 0 ? name = `Todo Item ${num+1}` : name = $("#item_name").val()

    items.append(`
            <div class="custom-control custom-checkbox ${randomColor(colors)}">
              <div class="row"><div class="left"><input type="checkbox" class="btn-primary"></div><div class="middle"></div><div class="right">${name}</div></div>
            </div>`);
  });

  $(".color").click(function(){
    let checked_row = $("input:checked").closest('.row').parent();
    let color = checked_row.attr('class').split(' ').pop()
    let new_color = $(this).attr('class').split(' ').pop();

    checked_row.removeClass(color).addClass(new_color);
  });
});


randomColor = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
