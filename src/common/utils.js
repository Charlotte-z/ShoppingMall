export function debounce(func, delay){
    let timer = null
    return function(...args){ 
      //如果有一张图片进来了，清除上一次，如果上一次规定时间没完成，直接清除，达到节流目的
      if(timer) clearTimeout(timer)
      //规定时间内执行
      timer = setTimeout(function(){
        // console.log('------')
        func.apply(this, args)
      }, delay)
    }
  }