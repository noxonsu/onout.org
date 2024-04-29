(() => {
  console.log('Load vender')
  const appendEl = () => {
  }

  const appendDiv = (id) => {
    const _el = document.createElement('DIV')
    _el.setAttribute('id', id)
    const _body = document.getElementsByTagName('BODY')[0]
    _body.appendChild(_el)
  }
  const appendScript = (url, code) => {
    console.log('>>appendScript call')
    console.log('>>url', url)
    console.log('>>code', code)
    console.log('appendScript ' + url);
    const _src = document.createElement('SCRIPT');

    //_src.text = `try { ` + code + ` } catch (e) { console.log('Fail load engine', e) }`;
    //_src.setAttribute('soEngineId', 'loader')
    _src.src = url;
    console.log('>>> _src', _src)
    const _head = document.getElementsByTagName('HEAD')[0]
    console.log(_head)
    _head.appendChild(_src)
    /*
    console.log(document.head)
    console.log(document.body)
    console.log(document.getElementByTag('HEAD'))
    console.log(document.getElementByTag('BODY'))
    */
    //document.head.appendChild(_src)
  }
  window.SO_LotteryConfig = __vendorOptions
  console.log(window.SO_LotteryConfig)


/*
  appendDiv(`lottery-style-holder`)
  appendDiv(`root`)
  appendDiv(`portal-root`)
  */
  /*
  appendScript(`./loader.js`)
  appendScript(`./vendor/2.chunk.js`)
  appendScript(`./vendor/main.chunk.js`)
  */
})()