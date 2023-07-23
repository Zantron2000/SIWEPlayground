import HeaderNav from "@/app/_components/HeaderNav";
import ReferenceNav from "./Navagation";
import EnumTable from "./ChapterComponents/EnumTable";
import { Bungee } from "next/font/google";
import ConstructorTable from "./ChapterComponents/ConstructorTable";
import ExamplesTable from "./ChapterComponents/ExamplesTable";
import MethodsTable from "./ChapterComponents/MethodsTable";
import PropertyTable from "./ChapterComponents/PropertyTable";
import { linkData } from "@/app/_library/utils";
import PrimitiveTable from "./ChapterComponents/PrimitiveTable";

const bungee = Bungee({ weight: "400", subsets: ["latin"] });

export default function ChapterContent({
	section,
	chapter,
	config,
}: {
	section: string;
	chapter: string;
	config: any;
}): JSX.Element {
	const { title, type, description, data } = config.get(
		`sections.${section}.chapters.${chapter}`
	);

	const {
		constructorData,
		enumData,
		examplesData,
		methodsData,
		propertiesData,
		primitiveData,
	} = data;
	const tables = [];

	primitiveData
		? tables.push(<PrimitiveTable data={primitiveData} config={config} />)
		: undefined;
	constructorData
		? tables.push(<ConstructorTable data={constructorData} config={config} />)
		: undefined;
	enumData
		? tables.push(<EnumTable data={enumData} config={config} />)
		: undefined;
	examplesData
		? tables.push(<ExamplesTable data={examplesData} config={config} />)
		: undefined;
	methodsData
		? tables.push(<MethodsTable data={methodsData} config={config} />)
		: undefined;
	propertiesData
		? tables.push(<PropertyTable data={propertiesData} config={config} />)
		: undefined;

	const formattedTables = [];
	for (let i = 0; i < tables.length; i++) {
		formattedTables.push(tables[i]);

		i !== tables.length - 1
			? formattedTables.push(
					<div className="border-white border-b-2 my-4"></div>
			  )
			: undefined;
	}

	return (
		<main className="bg-gray-900">
			<HeaderNav />
			<ReferenceNav
				activeSection={section}
				activeChapter={chapter}
				config={config}
			/>
			<div className="ml-1/5">
				<div className="mx-12 my-8">
					<div className="">
						<h1
							className={`text-violet-500 text-center text-4xl block font-bold`}
						>
							{title}
						</h1>
					</div>
					<div>
						<p className={`text-violet-500 text-xl font-bold mb-1`}>
							Type: {type}
						</p>
						<p>{linkData(description, config)}</p>
					</div>
					<div className="mt-4 p-2 bg-gray-700 rounded-xl">
						{...formattedTables}
					</div>
				</div>
			</div>
		</main>
	);
}
