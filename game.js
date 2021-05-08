let round = 0;
let scoreComputer = 0;
let scorePlayer = 0;
var player;
let computer;

let table = [
  { player: 'Paper', computer: 'Paper', result: 'Draw' },

  { player: 'Paper', computer: 'Rock', result: 'You Win' },
  { player: 'Paper', computer: 'Scissor', result: 'You Lost' },
  { player: 'Rock', computer: 'Paper', result: 'You Lost' },
  { player: 'Rock', computer: 'Rock', result: 'Draw' },

  { player: 'Rock', computer: 'Scissor', result: 'You Win' },
  { player: 'Scissor', computer: 'Paper', result: 'You Win' },
  { player: 'Scissor', computer: 'Rock', result: 'You Lost' },
  { player: 'Scissor', computer: 'Scissor', result: 'Draw' },
];
let stone = document.querySelector('.stone');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let resultScreen = document.querySelector('.result');
let header = document.querySelector('.header');
let score = document.querySelector('.score');
let button=Array.from(document.querySelectorAll("button"))
console.log(button)
stone.addEventListener('click', (e) => {
  player = e.target.accessKey;
  computer = computerPlay();
  playRound(player, computer);
});
paper.addEventListener('click', (e) => {
  player = e.target.accessKey;
  computer = computerPlay();
  playRound(player, computer);
});
scissor.addEventListener('click', (e) => {
  player = e.target.accessKey;
  computer = computerPlay();
  playRound(player, computer);
});

//Computer`s selection

const computerPlay = () => {
  let random = Math.random();
  let randomComputer;
  random = Math.floor(random * 30);
  random <= 10
    ? (randomComputer = 'Rock')
    : random <= 20
    ? (randomComputer = 'Paper')
    : (randomComputer = 'Scissor');
  return randomComputer;
};

const playRound = (players, computers) => {
  table.map((e) => {
    if (e.player === `${players}` && e.computer === `${computers}`) {
      header.remove();
      var result = document.createElement('h2');
      var rounds = document.querySelector('.round p');

      result.innerText = `${e.result}`;
      resultScreen.appendChild(result);
      e.result === 'You Win'
        ? ((scorePlayer += 1), (round += 1))
        : e.result === 'You Lost'
        ? ((scoreComputer += 1), (round += 1))
        : (round += 1);
      setTimeout(() => {
        result.remove();
      }, 1000);

      rounds.innerText = `
          Round:${round}
      `;
      score.innerHTML = `
      <table class="table table-dark table-striped text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">You</th>
      <th scope="col">Computer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Scores</th>
      <td>${scorePlayer}</td>
      <td>${scoreComputer}</td>
    </tr>
  
   
  </tbody>
</table>
      

      
      
      `;
      setTimeout(() => {
        let ends = document.querySelector('.ends');
        if (scoreComputer === 5) {
          score.remove();
          ends.innerText = `You Lost😥 Computer is: ${scoreComputer}, Your Score is: ${scorePlayer}`;
          button.map(e=>{
            e.classList.add("disabled")
          })
        }
  
        if (scorePlayer === 5) {
          score.remove();
          ends.innerText = `You win😄 Computer is: ${scoreComputer}, Your Score is: ${scorePlayer}`;
          button.map(e=>{
            e.classList.add("disabled")
          })
        }
      }, 1002);
   
    }
  });
};
