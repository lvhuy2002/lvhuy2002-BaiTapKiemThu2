function phanLoaiSucKhoeNVQS(height, weight) {
    if (height < 120 || weight < 20 || height > 260 || weight > 300) return -1;
    if (height <= 152 || weight <= 39) return 6;
    if ((height >= 153 && height <= 154) || weight === 40) return 5;
    if ((height >= 155 && height <= 156) || (weight >= 41 && weight <= 42)) return 4;
    if ((height >= 157 && height <= 159) || (weight >= 43 && weight <= 46)) return 3;
    if ((height >= 160 && height <= 162) || (weight >= 47 && weight <= 50)) return 2;
    if (height >= 163 && weight >= 51) return 1;
}

module.exports = phanLoaiSucKhoeNVQS;