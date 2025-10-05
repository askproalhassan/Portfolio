const blogItems = document.querySelectorAll('.card-blog-items,.card-blog-items1,.card-blog-items2');
const buttons = document.querySelectorAll('#btn,#btn1,#btn2');

const changingBlogs = ()=>{

blogItems.forEach((e,i)=>{
    if(i === 0){
        e.style.display='flex';
    }else{
        e.style.display='none';
    }
});

buttons.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        blogItems.forEach(e=>{
           e.style.display='none';
        })
        if(index === 0){
            blogItems[0].style.display='flex';
        }else if(index === 1){
            blogItems[1].style.display='flex';
    
        }else if(index === 2){
            blogItems[2].style.display='flex';
    
        }
    });
})

};changingBlogs()


// testimony button changing
const testimonialItems = document.querySelectorAll('.about-me-work-cards-list');
const btns = document.querySelectorAll('#testimonial-btn');

const testimony = ()=>{
    testimonialItems.forEach((element,index)=>{
        if(index === 0){
            element.style.display='block'
        }else{
            element.style.display='none'
        }
    })
    btns.forEach((e,i)=>{
        e.addEventListener('click',()=>{
            testimonialItems.forEach(element=>{
                element.style.display='none'
            })
            e.style.backgroundColor='none'
            if(i === 0){
                testimonialItems[0].style.display='block'

            }else if(i === 1){
                testimonialItems[1].style.display='block'

            }else if(i === 2){
                testimonialItems[2].style.display='block'

            }
        })
    })
};testimony();

btns.forEach((element,index)=>{
    element.addEventListener('click',()=>{

        if(index === 0){
        }
    })
})

const forms = document.querySelectorAll('input');
let interChange = '';

function borderBottom(){
    forms.forEach(element=> {
        
        element.addEventListener('click',()=>{
            element.style.borderLeft='none'
            element.style.borderRight='none'
            element.style.borderTop='none'
            element.style.borderBottom='2px solid rgb(141, 72, 231)'
        })
    });

};borderBottom();


// media query
const opener = document.querySelector('.open');
const closer = document.querySelector('.closer');
const changerBle = document.querySelectorAll('.navBar nav');


opener.addEventListener(('click',()=>{
    closer.classList.toggle('cal')
}))
// function openerBtn(){
//     opener.forEach((element,index)=>{

//         element.addEventListener(('click',()=>{
//             if(index === 0){
//                 element[1].style.display='block'
//                 element[0].style.display='none'

//             }else if(index === 1){
//                 element[0].style.display='block'
//                 element[1].style.display='none'
//             }
//         }))
//     })
// }openerBtn();
// function openerBtn(){
    
// }
// function closerBtn(){

// }

