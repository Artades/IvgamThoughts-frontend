const imageLoader = ({ src, width } : {src: string, width: number}) => {
	return `${src}?w=${width}&q=${75}`;
};

export default imageLoader;
