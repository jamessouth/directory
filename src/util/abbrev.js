export default function abbrev(match){
	if (match.length > 7) {
		return match[0];
	} else {
		return match;
	}
}
