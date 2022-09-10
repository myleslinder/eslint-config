import { useEffect } from "react";

function Cmp({ v }: { v: number }) {
	useEffect(() => {
		console.log(v);
	}, []);
	return <div>h</div>;
}

export {};
