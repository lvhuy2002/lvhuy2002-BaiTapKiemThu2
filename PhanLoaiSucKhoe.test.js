
const phanLoai = require('./PhanLoaiSucKhoe');

describe("Kiem thu gia tri bien", () => {
    test('T1', () => {
        expect(phanLoai(190, 160)).toBe(1);
    });
    test('T2', () => {
        expect(phanLoai(190, 20)).toBe(6);
    });
    test('T3', () => {
        expect(phanLoai(190, 21)).toBe(6);
    });
    test('T4', () => {
        expect(phanLoai(190, 300)).toBe(1);
    });
    test('T5', () => {
        expect(phanLoai(190, 299)).toBe(1);
    });
    test('T6', () => {
        expect(phanLoai(120, 160)).toBe(6);
    });
    test('T7', () => {
        expect(phanLoai(121, 160)).toBe(6);
    });
    test('T8', () => {
        expect(phanLoai(260, 160)).toBe(1);
    });
    test('T9', () => {
        expect(phanLoai(259, 160)).toBe(1);
    });
})

describe("Kiem thu phan hoach tuong duong", () => {
    test('T1', () => {
        expect(phanLoai(130, 150)).toBe(6);
    });
    test('T2', () => {
        expect(phanLoai(153, 49)).toBe(5);
    });
    test('T3', () => {
        expect(phanLoai(155, 44)).toBe(4);
    });
    test('T4', () => {
        expect(phanLoai(158, 41)).toBe(4);
    });
    test('T5', () => {
        expect(phanLoai(161, 40)).toBe(5);
    });
    test('T6', () => {
        expect(phanLoai(200, 29)).toBe(6);
    });
})

describe("Kiem thu dong dieu khien (do phu C2)", () => {
    test('T1', () => {
        expect(phanLoai(50, 50)).toBe(-1);
    });
    test('T2', () => {
        expect(phanLoai(130, 50)).toBe(6);
    });
    test('T3', () => {
        expect(phanLoai(153, 40)).toBe(5);
    });
    test('T4', () => {
        expect(phanLoai(185, 42)).toBe(4);
    });
    test('T5', () => {
        expect(phanLoai(158, 45)).toBe(3);
    });
    test('T6', () => {
        expect(phanLoai(161, 48)).toBe(2);
    });
    test('T7', () => {
        expect(phanLoai('a', 'b')).toBe(-1);
    });
    test('T8', () => {
        expect(phanLoai(165, 52)).toBe(1);
    });
})


