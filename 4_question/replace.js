function replace(str){
    let arr=str.split("")
    for(let i=0; i<arr.length; i++){
        if(arr[i]=="p"){
            arr[i]="q"
        }
    }
    str=arr.toString("")
    return str
}
console.log(replace("parampara"));

// let str="parampara"
// for(let i=0; i<str.length; i++){
//     if(str[i]=="p"){
//         str[i]="q"
//     }
// }
// console.log(str)