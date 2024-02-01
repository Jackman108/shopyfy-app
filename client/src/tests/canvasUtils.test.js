// canvasUtils.test.js
import { loadCanvasImage } from '../utils/canvasUtils';
import 'jest-canvas-mock';

test('drawImageOnCanvas should draw an image on the canvas', () => {
    // Тут можно использовать Jest Mocks для тестирования
});

// Предполагаем, что есть документ с элементом canvas
test('loadCanvasImage should load an image on the canvas', () => {
    document.body.innerHTML = '<canvas id="testCanvas"></canvas>';
    const canvas = document.getElementById('testCanvas');
    const canvasRef = { current: canvas };
    const imageSrc = 'https://example.com/image.jpg';

    loadCanvasImage(imageSrc, canvasRef);

    // Проверяем, что изображение было нарисовано на canvas
    // Это может включать в себя проверку контекста и т.д.
});
