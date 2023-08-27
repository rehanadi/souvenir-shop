export const formatCourier = (courier: string, service: string, etd?: string): string => {
  return courier.toUpperCase() + ' - ' + service + (etd ? ` (${etd.replace(' HARI', '')} hari)` : '')
}
