let btn1 = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let colorCode = document.querySelector('.colorCode')
let copy=document.querySelector('.copied')
let rgb1 = '#84d4fc'
let rgb2 = '#d71eec'

const hexValues = () => {
    let myHexValues = '0123456789abcdef';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
}

btn1.addEventListener('click', () => {
    rgb1 = hexValues()
    btn1.innerText = rgb1
    btn1.style.backgroundColor = `${rgb1}`
    document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2})`;
    colorCode.innerText=`background-image: linear-gradient(to right top,${rgb1},${rgb2});`
})

btn2.addEventListener('click', () => {
    rgb2 = hexValues()
    btn2.innerText = rgb2
    btn2.style.backgroundColor = `${rgb2}`
    document.body.style.backgroundImage = `linear-gradient(to right top,${rgb1},${rgb2})`;
    colorCode.innerText=`background-image: linear-gradient(to right top,${rgb1},${rgb2});`
})

colorCode.addEventListener('click',()=>{
    navigator.clipboard.writeText(colorCode.innerText)
    colorCode.style.color='#153890'
    copy.style.display='block'
    setInterval(() => {
        copy.style.display='none' 
        colorCode.style.color='white'  
    }, 2000);
})
