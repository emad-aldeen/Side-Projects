
var squers = Array.from(document.querySelectorAll('.main div'));

var rowN = 10;
console.log(squers);

var theShpes =[
  theZShape = [
    [0,rowN,rowN+1,rowN*2+1],
    [rowN+1, rowN+2,rowN*2,rowN*2+1],
    [0,rowN,rowN+1,rowN*2+1],
    [rowN+1, rowN+2,rowN*2,rowN*2+1]
  ],

  theTShape = [
    [1,rowN,rowN+1,rowN+2],
    [1,rowN+1,rowN+2,rowN*2+1],
    [rowN,rowN+1,rowN+2,rowN*2+1],
    [1,rowN,rowN+1,rowN*2+1]
  ],

  theLShape = [
    [1,rowN+1,rowN*2+1,2],
    [rowN,rowN+1,rowN+2,rowN*2+2],
    [1,rowN+1,rowN*2+1,rowN*2],
    [rowN,rowN*2,rowN*2+1,rowN*2+2]
  ],

  theOShape = [
    [0,1,rowN,rowN+1],
    [0,1,rowN,rowN+1],
    [0,1,rowN,rowN+1],
    [0,1,rowN,rowN+1]
  ],

  theIShape = [
    [1,rowN+1,rowN*2+1,rowN*3+1],
    [rowN,rowN+1,rowN+2,rowN+3],
    [1,rowN+1,rowN*2+1,rowN*3+1],
    [rowN,rowN+1,rowN+2,rowN+3]
  ]];

  function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

  var currentPosition = 4 ;
  var theCurrentRotation = 0;
  var random = randomNumber(0, 4);
  console.log(random);
  var current = theShpes[random][theCurrentRotation];

  function draw(){
      for(var i =0 ; i < current.length; i++){
        squers[currentPosition + current[i]].classList.add('piece');
    };
    // random = randomNumber(0, 4);
    cheek(); 
  }
  for(var i =0; i < Array.length; i++){
    Array[i]
  }

// Array.forEach(elment =>{ elment + 1 });



  function cheek(){
    current.forEach(item => {if(squers[currentPosition + item + rowN].classList.contains('ground') || squers[currentPosition + item + rowN].classList.contains('taked')){
        current.forEach(item2 => squers[currentPosition + item2].classList.add('taked'));
        // if(squers[currentPosition + item - rowN].classList.contains('cill')){
        //     clearInterval(timer);
        //     main.classList.add('lost');
        // }
        
        random = randomNumber(0, 4);
        current = theShpes[random][theCurrentRotation];
        currentPosition = 4;
        gameOver();
        scoreClac();
        draw();
    }});

    };
    function gameOver(){
        if(current.some(index => squers[currentPosition + index].classList.contains('taked'))) {
            clearInterval(timer);
            main.classList.add('lost');
            // document.removeEventListener();
        }
    }

  draw()
  function undraw(){
    current.forEach(item => squers[currentPosition + item].classList.remove('piece'))
  }


  document.addEventListener('keyup', (event)=>{
      console.log(event.keyCode)
    if (event.keyCode === 40) {
        moveDown();
    } else if (event.keyCode ===37) { // left
        undraw();
        currentPosition -= 1;
        // current.forEach(item => {if(squers[currentPosition + item +1].classList.contains('Wall')){
        //     currentPosition += 2;
        //     console.log(currentPosition);
        // }});
        // currentPosition -= 1;
            current.forEach(item => {if(squers[currentPosition + item ].classList.contains('taked')){
                currentPosition += 1;
            }});
        draw();
    } else if (event.keyCode === 39) { // right
        undraw();
        current.forEach(item => {if(squers[currentPosition + item +1].classList.contains('taked')){
            currentPosition -= 1;
        }});
        // current.forEach(item => {if(squers[currentPosition + item ].classList.contains('Wall'))
        // currentPosition -= 2;
        // })
        currentPosition += 1;
        draw();
    } else if (event.keyCode ===38) { // change
        undraw();
        theCurrentRotation += 1;
        if(theCurrentRotation > 3){
            theCurrentRotation = 0;
        }
        current = theShpes[random][theCurrentRotation];
        draw();
    }
  })


  function moveDown(){
    undraw();
    currentPosition += rowN;
    draw();
  }

  var timer = setInterval(moveDown, 800)

  // console.log(squers[rowN*3+1])s
 
  /////////////////////////////////////////////////////////////////////////////////
  var scoreText = document.querySelector('#score');
  var score = 0;
  var main = document.querySelector('.main');

  function scoreClac(){
      for(var i =0; i < 199; i+=rowN){
        var rows = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
        if(rows.every(index => squers[index].classList.contains('taked'))) {
            score += 10
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
            scoreText.innerHTML = score
            rows.forEach(index => {
            //   squers[index].style.background = 'none'
              squers[index].classList.remove('piece');
              squers[index].classList.remove('taked');
    
            })
            //splice array
            const squaresRemoved = squers.splice(i,rowN)
            squers = squaresRemoved.concat(squers)
            squers.forEach(cell => main.appendChild(cell))
            draw();
          }
        }
      }
