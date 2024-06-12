es7 = document.getElementById('es7')
function test_es7(elId) {
  try {
    const array1 = [1, 2, 3]
    const test = array1.includes(2)
    elId.innerHTML = 'es 7 works!'
  } catch (error) {
    elId.innerHTML = 'es 7 does not work.'
  }
}
test_es7(es7)
