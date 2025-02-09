import { BaseModel, column } from '@adonisjs/lucid/orm';
import type { DateTime } from 'luxon';

export default class User extends BaseModel {
	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare fullName: string;

	@column()
	declare email: string;

	@column({ serializeAs: null })
	declare password: string;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;
}
