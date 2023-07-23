import Link from "next/link";

type LinkPattern = {
	pattern: RegExp;
	insertLink: (
		input: string,
		match: any,
		elements: JSX.Element[],
		config: any
	) => string;
};

const outsideLink: LinkPattern = {
	pattern: /\{\$(\d+)\}([\s\S]*?)\{\/\$\1\}/,
	insertLink: (input, match, elements, config) => {
		const number = match[1];
		const linkValue = config.get(`links.${number}`);
		const linkContent = match[2].trim();

		const beforeLink = input.substring(0, match.index);
		if (beforeLink) {
			elements.push(<>{beforeLink}</>);
		}

		elements.push(
			<Link href={linkValue} className="text-violet-500">
				{linkContent}
			</Link>
		);

		return input.substring(match.index + match[0].length);
	},
};

const chapterLink: LinkPattern = {
	pattern: /\{\$c\}([\s\S]*?)\{\/\$c\}/,
	insertLink: (input, match, elements, config) => {
		const content: string = match[1].trim();
		const chapter =
			content.indexOf(".") === -1 ? content : content.split(".")[0];

		const section: any = Object.values(config.get("sections")).find(
			(section: any) => {
				return section.chapters[chapter];
			}
		);

		const linkValue = `/reference${section.link}/${chapter}`;

		const beforeLink = input.substring(0, match.index);
		if (beforeLink) {
			elements.push(<>{beforeLink}</>);
		}

		elements.push(
			<Link href={linkValue} className="text-violet-500">
				{content}
			</Link>
		);

		return input.substring(match.index + match[0].length);
	},
};

const links = [outsideLink, chapterLink];

function applySyntaxHighlighting(line: string): JSX.Element[] {
	const keywords = [
		"if",
		"else",
		"while",
		"for",
		"function",
		"let",
		"const",
		"var",
		"new",
	];

	const highlightedElements: JSX.Element[] = [];
	const words = line.split(" ");
	words.forEach((word, index) => {
		const isKeyword = keywords.includes(word);
		const className = isKeyword ? "text-blue-500" : "";

		highlightedElements.push(
			<span className={className} key={index}>
				{word}
			</span>
		);

		if (index < words.length - 1) {
			highlightedElements.push(<> </>);
		}
	});

	return highlightedElements;
}

function renderCodeLines(input: string): JSX.Element {
	const lines = input.split("\n");
	const highlightedLines = lines.map((line, index) => (
		<div className="flex" key={index}>
			<div className="text-gray-500 pr-4">{index + 1}</div>
			<div className="whitespace-pre">{applySyntaxHighlighting(line)}</div>
		</div>
	));

	return (
		<div className="bg-gray-900 text-gray-400 p-4 rounded">
			{highlightedLines}
		</div>
	);
}

function linkData(
	input: string,
	config: { get: (key: string) => string }
): JSX.Element[] {
	const elements: JSX.Element[] = [];
	let remainingInput = input;
	let results = links.map((link) => link.pattern.exec(remainingInput));

	while (results.some((result) => result)) {
		const firstMatch = Math.min(
			...results.map((result) => result?.index ?? Infinity)
		);
		const linkIndex = results.findIndex(
			(result) => result?.index === firstMatch
		);

		remainingInput = links[linkIndex].insertLink(
			remainingInput,
			results[linkIndex],
			elements,
			config
		);

		results = links.map((link) => link.pattern.exec(remainingInput));
	}

	if (remainingInput) {
		elements.push(<>{remainingInput}</>);
	}

	return elements;
}

export { renderCodeLines, linkData };
