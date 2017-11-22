export function upMore(element,callback){
  let timerId;
  element.addEventListener('scroll',function(){
    if(timerId) clearTimeout(timerId);
    timerId = setTimeout(function(){
      let scrollTop = element.scrollTop;
      let clientHeight = element.clientHeight;
      let scrollHeight = element.scrollHeight;
      if(scrollTop+clientHeight+50>scrollHeight){
        callback();
      }
    },80)
  });
}
export let goToTop = (ele) => {
  clearInterval(ele.timer);
  let win = document.documentElement || document.body;
  let duration = win.scrollTop;
  let step = duration / 30;
  ele.timer = setInterval(() => {
    duration -= step;
    if (duration <= 0) {
      clearInterval(ele.timer);
      win.scrollTop = 0;
    }
    win.scrollTop = duration;
  }, 10)
};