class Create {
  constructor() {
    this.btn = $("#btn");
  }
  fn () {
    this.btn.click(
      debounce.throttle(function() {
        // let name = $('#name').value();
        // console.log(name);
      }, 500)
    );
  }
}
// var submit = new Create();
// submit.fn();
export default Create