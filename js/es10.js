es10 = document.getElementById('es10')

function test_es10(elId) {
  try {
    const arr1 = [0, 1, 2, [3, 4]]

    let flattedArr1 = arr1.flat()

    elId.innerHTML = 'es 10 works!'
  } catch (error) {
    elId.innerHTML = 'es 10 does not work.'
  }
}

test_es10(es10)
