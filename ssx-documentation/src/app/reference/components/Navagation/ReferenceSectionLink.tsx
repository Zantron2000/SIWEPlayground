"use client";

import Link from "next/link";
import { useState } from "react";
import ReferenceChapterLink from "./ReferenceChapterLink";

export default function ReferenceSectionLink({
	title,
	link,
	initActiveChapter,
	initActive = false,
	chapters = {},
}: {
	title: string;
	link: string;
	initActiveChapter?: string;
	initActive?: boolean;
	chapters?: any;
}): JSX.Element {
	const [active, setActive] = useState(initActive);

	const reverseActivity = () => {
		setActive(!active);
	};

	const generateInactiveLink = (): JSX.Element => {
		return (
			<div className="flex justify-between items-center my-1 text-stone-300 hover:bg-black rounded-lg">
				<Link href={link} className="w-9/10 pl-2 py-2 hover:text-violet-500">
					<p>{title}</p>
				</Link>
				<button
					onClick={reverseActivity}
					className="text-xl w-1/10 py-2 font-bold hover:text-violet-500"
				>
					{">"}
				</button>
			</div>
		);
	};

	const generateActiveLink = (): JSX.Element => {
		const chapterEntries: any[] = Object.entries(chapters).sort(
			(chapter1, chapter2) => chapter1[0].localeCompare(chapter2[0])
		);

		const childContent = !chapterEntries.length ? undefined : (
			<div className="p-1 mx-1 border-l-2 border-white">
				{chapterEntries.map((chapter) => {
					const { title: chapterTitle, link: chapterLink } = chapter[1];
					return (
						<ReferenceChapterLink
							title={chapterTitle}
							link={`${link}${chapterLink}`}
							active={chapter[0] === initActiveChapter}
						/>
					);
				})}
			</div>
		);

		return (
			<div>
				<div className="flex justify-between items-center my-1 text-stone-300 bg-black rounded-lg">
					<Link href={link} className="w-9/10 pl-2 py-2 text-violet-500">
						<p>{title}</p>
					</Link>
					<button
						onClick={reverseActivity}
						className="text-xl w-1/10 py-2 font-bold text-violet-500 rotate-90"
					>
						{">"}
					</button>
				</div>
				{childContent}
			</div>
		);
	};

	return active ? generateActiveLink() : generateInactiveLink();
}
