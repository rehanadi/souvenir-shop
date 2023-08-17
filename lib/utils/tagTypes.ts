export const providesTagsAllData = (tagType: string) => (result = [], error: any, arg: any) => 
    result ? [
      { type: tagType, id: 'LIST' },
      ...result.map(({ id }: { id: string }) => ({ type: tagType, id }))
    ] : [
      { type: tagType, id: 'LIST' }
    ]

export const providesTagsDataById = (tagType: string) => {
  return (result: any[], error: any, arg: string) => [{ type: tagType, id: arg }]
}
