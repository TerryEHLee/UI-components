import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Footer, Header, LeftMenu } from '@/app/layouts';

export function MainLayout() {
	const [isOpen, setIsOpen] = useState(false);

	const title = 'title';

	const onToggleHeader = (value: boolean) => {
		setIsOpen(value);
	};

	return (
		<>
			<LeftMenu onToggleHeader={onToggleHeader} />
			<main className={isOpen ? 'main open' : 'main'}>
				<section className="content">
					<Header pageTitle={title}></Header>
					<Outlet />
				</section>
			</main>
			<Footer />
		</>
	);
}
