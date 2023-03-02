//оставляем название сайта, удаляя все лишнее
function domainName(url){
    url=url.replace('http://','')
    url=url.replace('https://','')
    url=url.replace('www.','')
    let numI=0;
    for(i=0;i<url.length;i++){
      if(url[i]=='.'){
        numI=i;
        break;
      }
    }
    url=url.slice(0,numI);
    return url
}
console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://google.co.jp"))