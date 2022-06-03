function addEvents(){
    document.getElementById('light-dark').addEventListener('click',darkMode);
}

// function to make a dark mode, changing background color and text color

var modeType = 0; // 0 if is light mode 1 if is dark mode
localStorage.setItem('modeType',modeType);
function darkMode(){    
    var btDarkmode = document.getElementById('light-dark');
    var allLinks = document.getElementsByTagName('a');
    if (modeType==0){

        // change background and font color
        btDarkmode.style.color = 'rgba(255, 255, 255, 1)';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";

        // changing all links on the header
        for (var i = 0; i<allLinks.length; i++){
            allLinks[i].style.color = 'white';
        }

        modeType = 1;
        console.log('before setItem' + ' ' + localStorage.getItem('modeType'));
        localStorage.setItem('modeType',1);
        console.log(localStorage.getItem('modeType'));

    }else{

        // change background and font font color
        btDarkmode.style.color = 'rgba(0, 0, 0, 0.54)';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";

        // changing all links on the header
        for (var i = 0; i < allLinks.length; i++){
            allLinks[i].style.color = 'black';
        }
        modeType = 0;
    }

}