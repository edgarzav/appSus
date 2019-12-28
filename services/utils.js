const getRandomId=()=>{
    const digits='abcdefghijklmnopqrstuvwxyz'
    let id=''
    for(let i=0;i<10;i++){
        let index=Math.floor(Math.random() * digits.length)
        id+=digits[index]
    }
    return id
}


const saveToStorage=(key, value)=> {
    let str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

const loadFromStorage=(key, defaultValue)=> {
    let str = localStorage.getItem(key);
    return str ? JSON.parse(str) : defaultValue
}

export default {getRandomId,saveToStorage,loadFromStorage}