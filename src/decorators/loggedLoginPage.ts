import { LoginPage } from '../page-object/login.page';

export class LoggedLoginPage {
  constructor(private decorated: LoginPage) {}

  async goto() {
    console.log('[LoginPage] Navegando a login...');
    await this.decorated.goto();
    console.log('[LoginPage] Navegación completa');
  }

  async login(username: string, password: string) {
    console.log(`[LoginPage] Intentando login con usuario: ${username}`);
    await this.decorated.login(username, password);
    console.log('[LoginPage] Login completado');
  }

  async getErrorMessage() {
    console.log('[LoginPage] Obteniendo mensaje de error...');
    return await this.decorated.getErrorMessage();
  }
}

