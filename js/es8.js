es8 = document.getElementById('es8')
function test_es8(elId) {
  try {
    const object1 = {
      a: 'string1',
      b: 42,
      c: false
    }

    const b = Object.values(object1)
    elId.innerHTML = 'es 8 works!'
  } catch (error) {
    elId.innerHTML = 'es 8 does not work.'
  }
}
test_es8(es8)
