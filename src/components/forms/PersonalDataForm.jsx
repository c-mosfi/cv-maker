export const PersonalDataForm = () => {
	return (
		<div>
			<form action="submit">
				<div className="flex flex-col gap-2">
					<input type="text" placeholder="Full Name" />
					<div className="grid sm:grid-cols-3 sm:justify-around">
						<input type="text" placeholder="example@mail.com" />
						<input type="text" placeholder="+00 123 456 798" />
						<input type="text" placeholder="City, Country" />
					</div>
					<div>
						<label htmlFor="summary" className="block mb-2">
							Professional Summary
						</label>
						<textarea
							name="summary"
							id="summary"
							className="w-full placeholder:text-gray-500"
							placeholder="Write a few sentences about yourself..."></textarea>
					</div>
				</div>
			</form>
		</div>
	);
};
