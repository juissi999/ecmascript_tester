es12 = document.getElementById('es12')

function test_es12(elId) {
  try {
    let text = 'I like chocolate.'
    text = text.replaceAll('chocolate', 'juice')
    elId.innerHTML = 'es 12 works!'
  } catch (error) {
    elId.innerHTML = 'es 12 does not work.'
  }
}

test_es12(es12)
