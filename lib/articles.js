import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



const articlesDirectory = path.join(process.cwd(), 'articles/reactjs');

export function getSortedArticlesData() {
	const fileNames = fs.readdirSync(articlesDirectory);
	
	const allArticlesData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, '');
		
		const fullPath = path.join(articlesDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		
		const matterResult = matter(fileContents);
		
		return {
			id, 
			...matterResult.data
		};
	});
	
	// sort articles by date
	return allArticlesData.sort(({ date: a }, { date: b }) => {
		if (a < b) {
			return 1;
		} else if (a > b) {
			return -1;
		} else {
			return 0;
		}
	});
};


