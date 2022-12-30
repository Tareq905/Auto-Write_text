const myText = `Hi, I'm Tareq!
I'm a Frontend developer. 
Working with react. 
Also my focus is on Cyber Security.
So That I can get a job in my dream place! 
That is Amazon!!!`;
const divWrapper = document.getElementById('wrapper');

let index = 0;

writeText = () => {
    divWrapper.innerText = myText.slice(0,index);
    index++;
    if(index > myText.length)
    {
        index = 0;
    }
}

setInterval(writeText, 100);