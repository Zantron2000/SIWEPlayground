import Link from "next/link";

export default function ReferenceChapterLink({
	title,
	link,
	active = false,
}: {
	title: string;
	link: string;
	active?: boolean;
}): JSX.Element {
	const generateInactiveLink = (): JSX.Element => {
		return (
			<div className="flex justify-between items-center m-1 px-1 hover:bg-black rounded-lg">
				<Link href={link} className="w-1/1 pl-1 py-1 hover:text-violet-500">
					<p>{title}</p>
				</Link>
			</div>
		);
	};

	const generateActiveLink = (): JSX.Element => {
		return (
			<div className="flex justify-between items-center m-1 px-1 bg-black rounded-lg">
				<Link href={link} className="w-1/1 pl-1 py-1 text-violet-500">
					<p>{title}</p>
				</Link>
			</div>
		);
	};

	return active ? generateActiveLink() : generateInactiveLink();
}
