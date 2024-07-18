import slugify from 'slugify';

export const generateSlug = (text) => {
    return slugify(text, { lower: true });
};

export const removeSlug = (slug) => {
    const words = slug.split('-');
    const convertedWords = words.map(word => {
        if (word === 'and') {
            return '&';
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    return convertedWords.join(' ');
}
