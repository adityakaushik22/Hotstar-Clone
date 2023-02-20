let movies=[
    {
        name:"falcon and the winter soldier",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium ullam reiciendis praesentium nihil.",
        image:"assests/images/slider 2.png"
    },
    {
        name:"loki",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium ullam reiciendis praesentium nihil.",
        image:"assests/images/slider 1.png"
    },
    {
        name:"wanda vision",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium ullam reiciendis praesentium nihil.",
        image:"assests/images/slider 3.png"
    },
    {
        name:"raya and the last dragon",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium ullam reiciendis praesentium nihil.",
        image:"assests/images/slider 4.png"
    },
    {
        name:"luca",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi laudantium ullam reiciendis praesentium nihil.",
        image:"assests/images/slider 5.png"
    },
];

let carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; // to track the current slide

const createslide = ()=>{
    // if index gets greater than length of movies array so we re assign to 0
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create dom elements
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attach elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classname
    slide.className='slider'
    content.className='slide-content'
    h1.className='movie-title'
    p.className='movie-desc'

    sliders.push(slide) // adding the slide in our new array.
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100*(sliders.length-1)}% - ${30*(sliders.length-2)}px)`;
    }
}

for(let i=0;i<2;i++){
    createslide()
}

setInterval(()=>{
    createslide()
},3000)



// video

const videocards = [...document.querySelectorAll('.video-card')]

videocards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1]
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1]
        video.pause()
    })
})