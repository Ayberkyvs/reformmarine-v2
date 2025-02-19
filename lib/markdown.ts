import markdownit from "markdown-it";

const md = new markdownit({
	html: true,
	breaks: true,
	linkify: true,
});

export function parseMarkdown(content: string) {
	return md.render(content);
}
