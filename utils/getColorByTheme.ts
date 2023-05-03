const themeColor = {
	science: "purple",
	learning: "green",
	life: "teal",
	spooky: "orange",
	fact: "yellow",
	news: "white",
	hilarious: "red",
	greeting: "blue",
	space: "indigo"
} as const;

export type Color = (typeof themeColor)[keyof typeof themeColor];
export type Theme = keyof typeof themeColor;

export const getColorByTheme = (theme: string): Color | undefined => {
	return themeColor[theme.toLowerCase() as Theme];
};
