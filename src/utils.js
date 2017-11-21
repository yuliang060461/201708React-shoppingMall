export function upMore(element,callback){
  let timerId;
  element.addEventListener('scroll',function(){
    if(timerId) clearTimeout(timerId);
    timerId = setTimeout(function(){
      let scrollTop = element.scrollTop;
      let clientHeight = element.clientHeight;
      let scrollHeight = element.scrollHeight;
      if(scrollTop+clientHeight+10>scrollHeight){
        callback();
      }
    },80)
  });
}
