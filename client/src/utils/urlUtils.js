//src/utils/urlUtils.js

export const findProductUrlInBodyHtml = (bodyHtml) => {
    const match = bodyHtml.match(/<strong>productUrl<\/strong><span>\s*(https?:\/\/[^\s]+)\s*<\/span>/);
    return match ? match[1] : null;
};
