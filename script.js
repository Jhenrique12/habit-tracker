const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) 

const data = {
  run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
  study: ['01-02'],
  programming: ['01-06', '01-07', '01-08','02-01','02-02','02-03']
}

nlwSetup.setData(data)
nlwSetup.load()
