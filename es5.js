es5 = document.getElementById('es5')

function test_es5(elId) {
  try {
    var a = ' test '
    var b = a.trim()
    elId.innerHTML = 'es 5 works!'
  } catch (error) {
    elId.innerHTML = 'es 5 does not work.'
  }
}
