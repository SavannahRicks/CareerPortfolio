function lastModified()
{
    var modiDate=new Date(document.lastModified);
    var showAs=(modiDate.getMonth()+1)+ "/" +modiDate.getDate()+ "/" +modiDate.getFullYear();
    return showAs
}


// let index = 0;
// let circleInfo = [
//     {
//         radius: 100, //index = 0
//         fill: "blue",
//     },
//     {
//         radius: 75,  //index = 1
//         fill: "purple",
//     },
//     {
//         radius: 50,  //index = 2
//         fill: "red",
//     }
// ];
//
// setInterval(() => {
//     console.log(circleInfo.length); // 3 sections of information
//     index = (index + 1)%(circleInfo.length)
//     const newCircleProps = circleInfo[index];
//     console.log(circleInfo[index]); // displays radius and fill plus values
//     document.getElementById("circle").setAttribute("fill", newCircleProps.fill)
//
//     document.getElementById("circle").setAttribute("r", newCircleProps.radius)
// }, 1000)








function Menubar() {
    var x = document.getElementById("navCont");
    if (x.classList.contains("scrolled")) {
        x.classList.toggle("responsive");
        console.log(x.classList);
    } else {
        x.classList.toggle("responsive");
        console.log(x.classList);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)');
    console.log(isHoverableDevice);
    let scrollTimeout;
    let prevScrollPos = window.scrollY; //positionY before scroll
    // console.log(`Before: ${prevScrollPos}`);
    const menu = document.getElementById("navCont");

    if(isHoverableDevice.matches === false) {
        menu.classList.add("stick");
        menu.style.padding = "0";

    }
    else{

        window.addEventListener("scroll", function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                const currentScrollPos = window.scrollY;//positionY after scroll
                console.log(`After: ${currentScrollPos}`);

                if (currentScrollPos > prevScrollPos) {
                    menu.style.transform = "translateY(-100%)";//retract
                } else {
                    menu.style.transform = "translateY(0)";//stay
                }

                if (currentScrollPos > 0) {
                    menu.classList.add("scrolled");
                } else {
                    menu.classList.remove("scrolled");
                }
                prevScrollPos = currentScrollPos;

            }, 15);

        });
    }

    let mybutton = document.getElementById("navCont");
    // window.onscroll = function () {
    //     scrollFunction();
    // };

    // function scrollFunction() {
    //     if (
    //         document.body.scrollTop > 20 ||
    //         document.documentElement.scrollTop > 20
    //     ) {
    //         mybutton.style.display = "none";
    //     } else {
    //         mybutton.style.display = "block";
    //     }
    // }

    // mybutton.addEventListener("click", topFunction);

    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                500
            );
            Menubar(); // Toggle menu
        }
    });
});





document.write ("Last updated on ")
document.write (lastModified() );

document.write ("");