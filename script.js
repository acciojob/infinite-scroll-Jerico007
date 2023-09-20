//your code here!
let ol = document.getElementById("infi-list");
let count = 1;


function loadContent(num)
{
	for(let i= 1; i <= num;i++)
		{
			let li = document.createElement("li");
			li.innerText = `Item ${count}`;
		   ol.appendChild(li);
			count++;
		}
}

loadContent(10);

ol.addEventListener("scroll",(event)=>{
 console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      			let li = document.createElement("li");
			li.innerText = `Item ${count}`;
		   ol.appendChild(li);
			count++;
    }
})