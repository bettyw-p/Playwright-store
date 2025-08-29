import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  protected readonly url = 'https://www.converse.pl/login'

  emailLocator = this.page.getByPlaceholder('imie@domena.com');
  passwordLocator = this.page.getByPlaceholder('hidden') 
  loginButton = this.page.getByRole('button', {name: 'Zaloguj się'})
  loginError = this.page.getByText('Nieprawidłowa nazwa użytkownika lub hasło.')
  greetingUser = this.page.getByText('Witaj,')
  acceptCookieBanner = this.page.getByText('Tak, akceptuję')

  async fillData(email: string, password: string): Promise<void> {
    await this.emailLocator.fill(email);
    await this.passwordLocator.fill(password);
    await this.loginButton.click();
  }
}


  