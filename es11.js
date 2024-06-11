es11 = document.getElementById('es11')
function test_es11(elId) {
  try {
    possibly_syntax_error_code = 'nullishCoalescingOperator = undefined ?? 1'

    eval(possibly_syntax_error_code)

    elId.innerHTML = 'es 11 works!'
  } catch (error) {
    elId.innerHTML = 'es 11 does not work.'
  }
}

test_es11(es11)
