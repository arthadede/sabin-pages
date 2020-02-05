export function isImage(url, timeoutT) {
  return new Promise(function(resolve, reject) {
    var timeout = timeoutT || 5000;
    var timer,
      img = new Image();
    img.onerror = img.onabort = function() {
      clearTimeout(timer);
      reject("error");
    };
    img.onload = function() {
      clearTimeout(timer);
      resolve("success");
    };
    timer = setTimeout(function() {
      reject("timeout");
    }, timeout);

    img.src = url;
  });
}
