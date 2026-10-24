import { html } from 'wirejs-dom/v2';
import { Main } from '../layouts/main.js';

export async function generate() {
	return Main({
		pageTitle: 'Deck Analyzers',
		content: html`<div>
			<p>"Deck" analyzers. Heavily fixated on analyses that require Monte Carlo simulations.</p>
			<p>Here's what we have so far.</p>
			<ul>
				<li><a href='https://mtg.deckanalyzer.com'>MTG Deck Analyzer</a></li>
				<li><b>Finance Analyzer</b> <i>Coming soon</i></li>
			</ul>
		</div>`
	})
}
