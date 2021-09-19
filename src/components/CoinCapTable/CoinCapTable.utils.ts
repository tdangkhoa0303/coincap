export const formatCurrency = (volume: number): string => (
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(volume)
)