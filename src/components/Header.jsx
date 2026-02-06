export const Header = () => {
	return (
		<header className="p-3 border-b">
			<div className="mx-auto lg:max-w-5x flex justify-between items-center">
				<h1>CV-Maker</h1>
				<div className="flex flex-wrap gap-3">
					<button className="cursor-pointer border px-2">Edit</button>
					<button className="cursor-pointer border px-2">View</button>
				</div>
			</div>
		</header>
	);
};
