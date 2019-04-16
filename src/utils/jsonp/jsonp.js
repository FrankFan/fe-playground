function jsonp(url, timeout, callback) {
  const funcName = generateJsonpCallback();
  window[funcName] = callback;

  // 动态创建script标签
  createScriptTag(url, funcName);

  setTimeout(() => {
    removeScript(funcName);
    removeFunc(funcName);
  }, timeout);
}

function createScriptTag(url, funcName) {
  const script = document.createElement('script');
  script.src = `${url}?callback=${funcName}`;
  script.id = funcName;
  script.type = 'text/javascript';
  document.body.appendChild(script);

  // error handling
  script.onerror = () => {
    removeScript(funcName);
    removeFunc(funcName);
  };
}

function generateJsonpCallback() {
  return `jsonpcallback_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function removeScript(id) {
  document.body.removeChild(document.getElementById(id));
}

function removeFunc(name) {
  delete window[name];
}

jsonp('http://localhost:5000', 3000, function(res) {
  console.log(res);
  const text = document.createTextNode(res.data);
  document.body.appendChild(text);
});
