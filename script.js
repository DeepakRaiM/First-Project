var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

var interval;
for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
        //interval=setInterval(scrollVertivally, 20, targetSection);
        
        interval = setInterval(function(){
                scrollVertivally(targetSection);
        }, 20);
        });
}


function scrollVertivally(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
                if(targetSectionCoordinates.top<=0){
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,50);
}


//Autofill Skill Bars
var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        }, 5);
    }
}

// function fillBar(bar){

// }

function checkScroll(){
    //check whether skill container is visible
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('Skills Section Visible');
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}