/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const { default: UsersController } = await import('#controllers/users_controller');
import router from '@adonisjs/core/services/router';

router.on('/').renderInertia('home');

router.get('/users', [UsersController, 'index']);
