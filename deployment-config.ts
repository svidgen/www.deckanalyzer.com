import { DeploymentConfig } from 'wirejs-resources';

export default {
	runtimeDesiredMemoryMB: 1 * 1024,
	bundleNodeModules: ['jsdom'],
	domainsByBranch: {
		main: "preview-5786.deckanalyzer.com",
		prod: "www.deckanalyzer.com",
	},
	redirects: [
		{ from: 'deckanalyzer.com', to: 'www.deckanalyzer.com' }
	],
	dnsRecordsByBranch: {
		main: [
			{
				type: 'CNAME',
				name: '_5777d0c00cd18e37f7d9a29f0818b178',
				values: ['_42148fc8f14e73ee53c618b60e379916.rvctyfnwhz.acm-validations.aws']
			},
			{
				type: 'CNAME',
				name: 'dalooztkg6ng',
				values: ['gv-elj6qqt4izjk2y.dv.googlehosted.com'],
				ttlSeconds: 5 * 60
			},
			{
				type: 'CNAME',
				name: 'dev.mtg',
				values: ['d31ljyhwnzj84i.cloudfront.net']
			},
			{
				type: 'CNAME',
				name: 'mtg',
				values: ['d31ljyhwnzj84i.cloudfront.net']
			},
			{ type: 'MX', name: '@', values: ['1 aspmx.l.google.com'] },
			{ type: 'MX', name: '@', values: ['10 alt3.aspmx.l.google.com'] },
			{ type: 'MX', name: '@', values: ['10 alt4.aspmx.l.google.com'] },
			{ type: 'MX', name: '@', values: ['5 alt1.aspmx.l.google.com'] },
			{ type: 'MX', name: '@', values: ['5 alt2.aspmx.l.google.com'] },
			{
				type: 'TXT',
				name: '@',
				values: ['google-site-verification=5wACr70Ytj97T46_H_a6KHa3iru3A0Hdb5fj1ZlTqUs'],
			}
		]
	}
} satisfies DeploymentConfig;
