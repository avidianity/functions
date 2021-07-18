export function isMobile() {
	return /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isDesktop() {
	return !isMobile();
}

export function outIf<T>(condition: boolean, output: T, defaultValue: any = null): T {
	return condition ? output : (defaultValue as unknown as T);
}
export function toBool(data: any) {
	return data ? true : false;
}

export function validURL(url: string) {
	let valid = false;
	var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;
	try {
		new URL(url);
		valid = true;
	} catch (_) {
		valid = false;
	}
	return !!pattern.test(url) || valid;
}

export function groupBy<T, K extends keyof T>(data: Array<T>, key: K) {
	const temp: { [key: string]: Array<T> } = {};

	data.forEach((item) => {
		const property: any = item[key];
		if (!(property in temp)) {
			temp[property] = [];
		}
		temp[property].push(item);
	});
	return Object.keys(temp).map((key) => temp[key]);
}

export function except<T, K extends keyof T>(data: T, keys: Array<K>) {
	const copy = {} as T;

	for (const key in data) {
		copy[key] = data[key];
	}

	for (const key of keys) {
		if (key in copy) {
			delete copy[key];
		}
	}
	return copy;
}

export function exceptMany<T, K extends keyof T>(data: Array<T>, keys: Array<K>) {
	return [...data].map((item) => except(item, keys));
}

export function has<T>(keys: Array<T>, data: T) {
	return keys.includes(data);
}

export function only<T, K extends keyof T>(data: T, keys: Array<K>) {
	const result = {} as T;
	(result as any)['id'] = (data as any)['id'];
	for (const key of keys) {
		result[key] = data[key];
	}
	return result;
}

export function onlyMany<T, K extends keyof T>(data: Array<T>, keys: Array<K>) {
	return [...data].map((item) => only(item, keys));
}

export function getLocale() {
	if (navigator.languages && navigator.languages.length) {
		return navigator.languages[0];
	} else {
		return (navigator as any)['userLanguage'] || navigator.language || (navigator as any)['browserLanguage'] || 'en-US';
	}
}

export function formatCurrency(value: number, currency = 'PHP') {
	const formatter = new Intl.NumberFormat(getLocale(), {
		style: 'currency',
		currency,
	});

	return formatter.format(value).replace(/\D00(?=\D*$)/, '');
}
