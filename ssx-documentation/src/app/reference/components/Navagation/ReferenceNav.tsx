import ReferenceSectionLink from "./ReferenceSectionLink";

export default function ReferenceNav({
	activeSection,
	activeChapter,
	config,
}: {
	activeSection?: string;
	activeChapter?: string;
	config: any;
}) {
	const path = "/reference";
	const sections: any[] = Object.entries(config.get("sections"));

	return (
		<div className="w-1/5 h-full fixed border-r-2 border-white bg-gray-900 overflow-y-scroll">
			<div className="px-1">
				{sections.map((section) => {
					const { name, link, chapters } = section[1];

					return (
						<ReferenceSectionLink
							title={name}
							link={path + link}
							chapters={chapters}
							initActive={activeSection === section[0]}
							initActiveChapter={
								section[0] === activeSection ? activeChapter : undefined
							}
						/>
					);
				})}
			</div>
		</div>
	);
}
