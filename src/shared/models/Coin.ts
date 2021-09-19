export interface Coin {
	id: number,
	name: string,
	symbol: string,
	slug: string,
	num_market_pairs: number,
	date_added: string,
	tags: string[],
	max_supply: number,
	circulating_supply: number,
	total_supply: number,
	platform: string | null,
	cmc_rank: number,
	last_updated: string,
	quote: {
		USD: CoinChange
	}
}

export interface CoinChange {
	price: number,
	volume_24h: number,
	percent_change_1h: number,
	percent_change_24h: number,
	percent_change_7d: number,
	percent_change_30d: number,
	percent_change_60d: number,
	percent_change_90d: number,
	market_cap: number,
	market_cap_dominance: number,
	fully_diluted_market_cap: number,
	last_updated: string,
}