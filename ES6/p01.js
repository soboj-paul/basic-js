// function describeDeclaration(keyword){
//     if(keyword === 'var'){
//         return "Can redeclare, can reassign"
//     }else if (keyword === 'let'){
//         return 'cannot redeclare, can reassign';
//     }else if (keyword === 'const'){
//         return 'cannot redeclare, cannot reassign';
//     }else{
//         return 'Invalid'
//     }
// }

const displayDeclaration = (keyword) => {
     if(keyword === 'var'){
        return "Can redeclare, can reassign"
    }else if (keyword === 'let'){
        return 'cannot redeclare, can reassign';
    }else if (keyword === 'const'){
        return 'cannot redeclare, cannot reassign';
    }else{
        return 'Invalid'
    }
}
console.log(displayDeclaration('hello'))