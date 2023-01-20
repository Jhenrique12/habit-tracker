const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) 
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  nlwSetup.addDay(today)

  dayExists ? alert("Dia já incluso!") : alert ("Dia adicionado!")


}

nlwSetup.setData(data)
nlwSetup.load()
