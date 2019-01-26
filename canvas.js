function Canvas() {
    //canvas1
    var myCanvas = document.getElementById('canvas1');
    var ctx1 = myCanvas.getContext('2d');
    ctx1.font = '32pt Arial';
    ctx1.fillStyle = 'DeepSkyBlue';
    ctx1.strokeStyle = 'black';
    ctx1.fillText('TEST CANVAS', 45, 160);
    ctx1.strokeText('TEST CANVAS', 45, 160);

    //canvas2
    var myCanvas2 = document.getElementById('canvas2');
    var ctx2 = myCanvas2.getContext('2d');

    ctx2.fillStyle = '#ff0000';
    ctx2.strokeStyle = '#000000';
    ctx2.lineWidth = 5;
    ctx2.fillRect(45, 5, 135, 135);
    ctx2.strokeRect(45, 5, 135, 135);


    ctx2.fillStyle = '#666666';
    ctx2.fillRect(190, 5, 135, 135);
    ctx2.strokeRect(190, 5, 135, 135);

    ctx2.fillStyle = '#666666';
    ctx2.fillRect(45, 150, 135, 135);
    ctx2.strokeRect(45, 150, 135, 135);

    ctx2.fillStyle = '#ff0000';
    ctx2.fillRect(190, 150, 135, 135);
    ctx2.strokeRect(190, 150, 135, 135);


    //canvas3 //lines
    var myCanvas3 = document.getElementById('canvas3');
    var ctx3 = myCanvas3.getContext('2d');

    ctx3.strokeStyle = '#666666';
    ctx3.fillStyle = '#ff0000';
    ctx3.lineWidth = 5;

    ctx3.beginPath();
    ctx3.moveTo(100, 100);
    ctx3.lineTo(150, 200);
    ctx3.lineTo(200, 200);
    ctx3.lineTo(200, 290);
    ctx3.lineTo(290, 290);
    ctx3.lineTo(290, 100);
    ctx3.lineTo(100, 100);
    ctx3.stroke();
    ctx3.fill();
    ctx3.closePath();

    //canvas4 //circle
    var myCanvas4 = document.getElementById('canvas4');
    var ctx4 = myCanvas4.getContext('2d');

    ctx4.fillStyle = 'blue';
    ctx4.beginPath();
    ctx4.arc(200, 30, 25, 0, Math.PI * 2);
    ctx4.fill();
    ctx4.closePath();

    ctx4.fillStyle = 'red';
    ctx4.beginPath();
    ctx4.arc(200, 100, 45, 0, Math.PI * 2);
    ctx4.fill();
    ctx4.closePath();

    ctx4.fillStyle = 'black';
    ctx4.beginPath();
    ctx4.arc(200, 220, 75, 0, Math.PI * 2);
    ctx4.fill();
    ctx4.closePath();


    //canvas5 //anime
    var myCanvas5 = document.getElementById('canvas5');
    var ctx5 = myCanvas5.getContext('2d');

    var posX = 0;
    var posY = 0;

    setInterval(function () {

        posX += 1
        posY += 1
        ctx5.fillStyle = 'black';
        ctx5.fillRect(0, 0, canvas5.width, canvas5.height);

        ctx5.fillStyle = 'white';
        ctx5.beginPath();
        ctx5.arc(posX, 120, 55, 0, Math.PI * 2);
        ctx5.fill();

        ctx5.fillStyle = 'red';
        ctx5.beginPath();
        ctx5.arc(150, posY, 55, 0, Math.PI * 2);
        ctx5.fill();

        ctx5.fillStyle = 'blue';
        ctx5.beginPath();
        ctx5.arc(posX, posY, 55, 0, Math.PI * 2);
        ctx5.fill();




    }, 30)

}

//Modernizer
if (window.FileReader && Modernizr.draganddrop) {

    function allowDrop(ev){
        
        ev.preventDefault();
        
    }
    
    function drag(ev){
        
        ev.dataTransfer.setData('Text',ev.target.id);
        
    }
    
    
    function drop(ev){
        
        
        ev.preventDefault();
        var data=ev.dataTransfer.getData('Text');
        ev.target.appendChild(document.getElementById(data));
    }
    
    
    

} else {
    document.write('This browser cannot use drag and drop');

}
