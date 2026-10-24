import {
	AdminService,
	AuthenticationService,
	GoogleOIDCProvider
} from 'wirejs-resources';

const permanentAdmins = ['admin', 'iambipedal@gmail.com', 'jon@deckanalyzer.com'];

const authService = new AuthenticationService('app', 'core-users', {
	oidcProviders: [ GoogleOIDCProvider ]
});

export const auth = authService.buildApi();

new AdminService('app', 'admin', {
	path: 'admin',
	isAdmin: async () => {
		const user = await auth.getCurrentUser()
		return !!user && permanentAdmins.includes(user.username);
	}
});

