import { BaseSeeder } from '@adonisjs/lucid/seeders';
import User from '#models/user';

export default class extends BaseSeeder {
	async run() {
		await User.create({
			id: 1,
			email: 'admin@admin.com',
			password: 'admin',
			fullName: 'Admin',
		});
	}
}
