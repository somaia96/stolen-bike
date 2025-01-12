
export function txtSlicer(txt: string, max: number = 100){
    if(txt.length >= max) return `${txt.slice(0,max)} ...`;
    return txt;
}
