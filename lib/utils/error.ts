export const errorMessage = (err: any) => {
  const message = err instanceof Error ? err.message : 'Unknown error'
  // if (err! instanceof Error) console.log(err)
  // console.log(`❌ Error message: ${message}`)
  console.log(`❌ Error: ${err}`)
  return message
}
