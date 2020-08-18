const admissionPage = () => {
    const sideInfo = document.querySelector('.admission-container .admission-second');
    let sideOpen = false;
    document.querySelector('.toggle').addEventListener('click', () => {
        if(sideOpen) {
            sideInfo.style.transform = "translateX(165px)";
            document.querySelector('.toggle > .fa-chevron-right').style.display =  "none";
            document.querySelector('.toggle > .fa-chevron-left').style.display =  "block";
        } else {
            sideInfo.style.transform = "translateX(0px)";

            document.querySelector('.toggle > .fa-chevron-right').style.display =  "block";
            document.querySelector('.toggle > .fa-chevron-left').style.display =  "none";
        }
        sideOpen = !sideOpen;
    })
}

export default admissionPage;