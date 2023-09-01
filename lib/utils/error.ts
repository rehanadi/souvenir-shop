export const errorMessage = (err: any) => {
  const message = err instanceof Error ? err.message : 'Something went wrong!'
  // if (err! instanceof Error) console.log(err)
  // console.log(`❌ Error message: ${message}`)
  console.error(err)
  return message
}
