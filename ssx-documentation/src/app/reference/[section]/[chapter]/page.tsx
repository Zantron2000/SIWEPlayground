import config from "@/app/_library/config";
import ChapterContent from "../../components/ChapterContent";

export default function Page({
	params,
}: {
	params: { section: string; chapter: string };
}) {
	return (
		<ChapterContent
			section={params.section}
			chapter={params.chapter}
			config={config}
		/>
	);
}
