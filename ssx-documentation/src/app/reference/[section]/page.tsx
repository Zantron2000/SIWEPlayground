export default function Page({ params }: { params: { section: string } }) {
	return <div>My Post: {params.section}</div>;
}
