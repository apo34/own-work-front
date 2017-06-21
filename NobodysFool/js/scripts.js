$(document).ready(function () {
  $('.my-menu .nav-pills a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    console.log(this)
  });
});
