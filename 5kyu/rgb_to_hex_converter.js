//получаем цвет на основе rgb

function rgb(r, g, b){
    function getColor(value){
      if(value<0) return '00';
      if(value>255) return 'FF';
      let color=parseInt(value).toString(16);
      return (color.length==1?'0'+color:color).toUpperCase();
    }
    return getColor(r)+getColor(g)+getColor(b)
}