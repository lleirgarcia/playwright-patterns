// factories/UserFactory.ts
import { User } from './types';

export class UserFactory {
  static standard(): User {
    return { username: 'standard_user', password: 'secret_sauce' };
  }

  static locked(): User {
    return { username: 'locked_out_user', password: 'secret_sauce', errorMessage: 'Epic sadface: Sorry, this user has been locked out.' };
  }

  static problem(): User {
    return { username: 'problem_user', password: 'secret_sauce' };
  }

  static performance(): User {
    return { username: 'performance_glitch_user', password: 'secret_sauce' };
  }

  static visual(): User {
    return { username: 'invalid_user', password: 'secret_sauce' };
  }

  static error(): User {
    return { username: 'invalid_user', password: 'wrong_pass', errorMessage: 'Epic sadface: Username and password do not match any user in this service' };
  }

  static custom(username: string, password: string): User {
    return { username, password };
  }
}
