es14 = document.getElementById('es14')
function test_es14(elId) {
  try {
    const array1 = [5, 12, 50, 130, 44]
    const isLargeNumber = (element) => element > 45
    let findLastIndexTest = array1.findLastIndex(isLargeNumber)

    elId.innerHTML = 'es 14 works!'
  } catch (error) {
    elId.innerHTML = 'es 14 does not work.'
  }
}

test_es14(es14)
