// var mobileNav = ()=> {
//     document.getElementById("btn").addEventListener("click",function(){
//         document.getElementById("dropDown").style.display="none";
//     });

//     // var navBtn =  document.getElementById("btn");
//     // var navBar = document.getElementById("dropDown");
//     // navBtn.addEventListener('click', () => {
//     //     if(navBar.style.display=="none"){
//     //         navBar.style.display="block";
//     //     }
//     //     else{
//     //         navBar.style.display="none";
//     //     }
//     // });
// }

// mobileNav();

//Uncaught TypeError: Cannot read property 'addEventListener' of null
//Fix: make it so the function doesn't run before the DOM is fully loaded


window.onload=function(){
    var navBtn =  document.getElementById("btn");
    var navBar = document.getElementById("dropDown");
    navBar.style.display="none";
    navBtn.addEventListener('click', () => {
        if(navBar.style.display=="none"){
            navBar.style.display="block";
            console.log("Worked 1");
        }
        else{
            navBar.style.display="none";
            console.log("Worked 2");
        }
    });
  }

  //issue: first click won't show the button, only on second click, it doesn't register it as being "none". 

//   Manuall set is to none before the function.