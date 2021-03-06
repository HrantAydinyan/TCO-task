export const toRem = (number) => `${number / 16}rem`;

export const getObjectFromLocationSearch = (search) => {
    if (!search) return null;
    const withoutSymbol = search.replace('?', '');
    const toArray = withoutSymbol.split('&');
    const keyValue = toArray.reduce((acc, curr) => {
        const keyAndValue = curr.split('=');
        const key = keyAndValue[0];
        const value = keyAndValue[1];
        return { ...acc, [key]: value };
    }, {});
    return keyValue;
};
