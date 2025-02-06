import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react';

export default function Home() {
	return (
		<>
			<Head title="This is overridden" />

			<Button>Click me</Button>
		</>
	);
}
