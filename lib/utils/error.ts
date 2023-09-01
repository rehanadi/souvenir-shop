export const errorMessage = (err: any) => {
  const message = err instanceof Error ? err.message : 'Unknown error'
  if (err! instanceof Error) console.error(err)
  console.log(`❌ Error message: ${message}`)
  return message
}
