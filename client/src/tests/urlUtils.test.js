// urlUtils.test.js
import { findProductUrlInBodyHtml } from '../utils/urlUtils';

test('findProductUrlInBodyHtml should extract product URL from HTML', () => {
    const bodyHtml = '<strong>productUrl</strong><span> https://example.com</span>';
    const result = findProductUrlInBodyHtml(bodyHtml);
    expect(result).toBe('https://example.com');
});

test('findProductUrlInBodyHtml should return null for invalid HTML', () => {
    const bodyHtml = '<span>Invalid HTML</span>';
    const result = findProductUrlInBodyHtml(bodyHtml);
    expect(result).toBeNull();
});
