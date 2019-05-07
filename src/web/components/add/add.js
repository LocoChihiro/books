import './add.css';
const add = {
  init() {
    xtag.create('x-clock', class extends XTagElement {
      constructor() {
        super();
        console.log('初始化操作');
        this.datas = {
          user:'han'
        }
      }
      '::template(true)' () {
        return `<form>
        <div class="form-group">
          <label for="exampleInputEmail1">书名</label>
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入书名">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入作者">
        </div>
        <div class="form-group">
          <label for="price">Password</label>
          <input type="text" class="form-control" id="price" placeholder="请输入单价">
        </div>
        <button type="button" id="btn-sub" class="btn btn-default">提交</button>
      </form>`
      }
      "click::event"(e){
        console.log(e);
        if (e.target.id == 'btn-sub') {
          console.log(this);
          alert(1);
        }
      }
    });
  }
}

export default add;