const pluginName = 'HtmlAfterWebpackPlugin';
const assetHelp = (data) => {
  let js = [];
  let css = [];
  const dir = {
    js: item=>`<script class="layload-js" src="${item}"></script>`,
    css: item=>`<link class="layload-css" rel="stylesheet" href="${item}">`
  }
  for (let jsitem of data.js) {
    js.push(dir.js(jsitem))
  }
  for (let cssitem of data.js) {
    css.push(dir.css(cssitem))
  }
  return {
    js,
    css
  }
}

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
              let _html = htmlPluginData.html;
              const result = assetHelp(htmlPluginData.assets);
              _html = _html.replace(/pages:/g,"../../");
              _html = _html.replace(/components:/g,"../../../components/");
              _html = _html.replace("<!-- injectjs -->",result.js.join(""));
              _html = _html.replace("<!-- injectcss -->",result.css.join(""));
              htmlPluginData.html = _html;
          });
        });
    }
}
module.exports = HtmlAfterWebpackPlugin;