es11 = document.getElementById('es11')
function test_es11(elId) {
  try {
    nullishCoalescingOperator = undefined ?? 'string'

    elId.innerHTML = 'es 11 works!'
  } catch (error) {
    elId.innerHTML = 'es 11 does not work.'
  }
}

test_es11(es11)
