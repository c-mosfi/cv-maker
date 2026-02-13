export const GeneralInfoFieldset = () => {
	return (
		<fieldset className="flex flex-col gap-2">
			<legend>General Info</legend>
			<input type="text" name="full-name" placeholder="Full Name" />
			<input type="text" name="email-address" placeholder="example@mail.com" />
			<input type="text" name="phone-number" placeholder="+00 123 456 798" />
			<input type="text" name="city-country" placeholder="City, Country" />
			<section>
				<label htmlFor="summary" className="block mb-2">
					Professional Summary
				</label>
				<textarea
					name="summary"
					className="w-full placeholder:text-gray-500"
					placeholder="Write a few sentences about yourself..."></textarea>
			</section>
		</fieldset>
	);
};
