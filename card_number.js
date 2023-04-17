//оставляем последние четыре цифры карты, а остальные скрываем

function maskify(cc) {
    let text='';
    cc.length<5 ? text=cc : text=`${'#'.repeat((cc.slice(0,-4)).length)}${cc.slice(-4)}`;
    return text;
}

//maskify('4556364607935616'), '############5616');
//maskify('1'), '1');
//maskify('11111'), '#1111');