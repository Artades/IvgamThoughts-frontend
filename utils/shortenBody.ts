export function shortenBody(body: string, maxLength: number): string {
	if (body.length <= maxLength) {
		return body;
	} else {
		return body.substr(0, maxLength) + "...";
	}
}
