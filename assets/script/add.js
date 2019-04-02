class Create {
  constructor() {
    this.btn = $("#btn");
  }
  fn () {
    this.btn.click(
      debounce.throttle(function() {
        console.log("点击");
        fetch("添加新闻页");
      }, 500)
    );
  }
}
// var submit = new Create();
// submit.fn();
export default Create