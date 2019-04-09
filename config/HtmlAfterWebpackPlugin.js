const pluginName = 'HtmlAfterWebpackPlugin';
const assetHelp = (data) => {
  let js = [];
  const dir = {
    js: item=>`<script src="${item}"></script>`
  }
  for (let jsitem of data.js) {
    js.push(dir.js(jsitem))
  }
  return {
    js
  }
}

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
              let _html = htmlPluginData.html;
              const result = assetHelp(htmlPluginData.assets);
              _html = _html.replace("pages:","../../");
              _html = _html.replace("components:","../../../components/");
              _html = _html.replace("<!-- injectjs -->",result.js.join(""));
              htmlPluginData.html = _html;
          });
        });
    }
}
module.exports = HtmlAfterWebpackPlugin;