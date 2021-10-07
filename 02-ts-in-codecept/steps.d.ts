/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type LoginPageType = typeof import('./pages/loginPage')
type RegisterPageType = typeof import('./pages/registerPage')

declare namespace CodeceptJS {
	interface SupportObject {
		I: I,
		current: any,
		loginPage: LoginPageType
		registerPage: RegisterPageType
	}

	interface Methods extends Playwright {
	}

	interface I extends ReturnType<steps_file> {
	}

	namespace Translation {
		interface Actions {
		}
	}
}
