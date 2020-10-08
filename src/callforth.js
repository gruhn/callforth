
export const eventOn = (eventTarget, successEvent, errorEvent = "error") => {
  let $resolve, $reject

  const promise = new Promise((resolve, reject) => {
    $resolve = resolve
    $reject = reject
  })

  eventTarget.addEventListener(successEvent, $resolve)
  eventTarget.addEventListener(errorEvent, $reject)

  promise.finally(() => {
    eventTarget.removeEventListener(successEvent, $resolve)
    eventTarget.removeEventListener(errorEvent, $reject)
  })

  return promise
}

export const timeout = milliseconds => {
  return new Promise(
    resolve => setTimeout(resolve, milliseconds)
  )
}