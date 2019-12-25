const getRandomId=()=>{
    const digits='abcdefghijklmnopqrstuvwxyz'
    let id=''
    for(let i=0;i<10;i++){
        let index=Math.floor(Math.random() * digits.length)
        id+=digits[index]
    }
    return id
}

export default {getRandomId}