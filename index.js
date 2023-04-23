let menu = document.querySelector('.menu');
let menulist = document.querySelector('#m');
menu.addEventListener('click', () => {

    menulist.classList.toggle('show-menu');
    console.log('clicked', menulist)

});



let story_head = document.querySelector('.story-head');
let mission_head = document.querySelector('.mission-head');
let vision_head = document.querySelector('.vision-head');

let story_para = document.querySelector('.story-para')
let mission_para = document.querySelector('.mission-para')
let vision_para = document.querySelector('.vision-para')


story_para.style.display = 'block';
story_head.style.backgroundColor = '#f49020';
story_head.style.color = "white";

story_head.addEventListener('click', () => {

    story_para.style.display = 'block';
    mission_para.style.display = 'none';
    vision_para.style.display = 'none';

    story_head.style.backgroundColor = '#f49020';
    mission_head.style.backgroundColor = '';
    vision_head.style.backgroundColor = '';
    story_head.style.color = "white";
    mission_head.style.color = 'black';
    vision_head.style.color = 'black';




})
mission_head.addEventListener('click', () => {
    mission_para.style.display = 'block';
    story_para.style.display = 'none';
    vision_para.style.display = 'none';


    mission_head.style.backgroundColor = '#f49020';
    story_head.style.backgroundColor = '';
    vision_head.style.backgroundColor = '';

    story_head.style.color = "black";
    mission_head.style.color = 'white';
    vision_head.style.color = 'black';


})
vision_head.addEventListener('click', () => {
    vision_para.style.display = 'block';
    story_para.style.display = 'none';
    mission_para.style.display = 'none';


    vision_head.style.backgroundColor = '#f49020';
    mission_head.style.backgroundColor = '';
    story_head.style.backgroundColor = '';


    story_head.style.color = "black";
    mission_head.style.color = 'black';
    vision_head.style.color = 'white';
})