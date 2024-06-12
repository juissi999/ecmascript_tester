es9 = document.getElementById('es9')
function test_es9(elId) {
  try {
    const object2 = {
      a: 'string1',
      b: 42,
      c: false
    }

    let objectClone = { ...object2 }
    elId.innerHTML = 'es 9 works!'
  } catch (error) {
    elId.innerHTML = 'es 9 does not work.'
  }
}
test_es9(es9)
