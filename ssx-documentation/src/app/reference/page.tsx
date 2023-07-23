import ChapterContent from "./components/ChapterContent";
import config from "../_library/config";

export default function Page() {
	return (
		<ChapterContent
			section="exampleSection"
			chapter="exampleChapter"
			config={config}
		/>
	);
}
