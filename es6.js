es6 = document.getElementById('es6')

function test_es6(elId) {
  try {
    const a = 'test'
    elId.innerHTML = 'es 6 works!'
  } catch (error) {
    elId.innerHTML = 'es 6 does not work.'
  }
}

test_es6(es6)
