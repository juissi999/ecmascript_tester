es13 = document.getElementById('es13')

function test_es13(elId) {
  try {
    const object1 = {
      prop: 'test'
    }
    let hasOwnTest = Object.hasOwn(object1, 'prop')

    elId.innerHTML = 'es 13 works!'
  } catch (error) {
    elId.innerHTML = 'es 13 does not work.'
  }
}
test_es13(es13)
