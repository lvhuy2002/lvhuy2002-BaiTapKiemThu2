function phanLoaiSucKhoeNVQS(height, weight) {
    let type = -1;                                                                  //1 
    if (height < 120 || height > 260 || weight < 20 || weight > 300)                //2
        return type;                                                                //3
    if ((height >= 120 && height <= 152) || (weight >= 20 && weight <= 39))         //4  
        type = 6;                                                                   //5 
    else if ((height >= 153 && height <= 154) || weight === 40)                     //6   
        type = 5;                                                                   //7
    else if ((height >= 155 && height <= 156) || (weight >= 41 && weight <= 42))    //8    
        type = 4;                                                                   //9
    else if ((height >= 157 && height <= 159) || (weight >= 43 && weight <= 46))    //10
        type = 3;                                                                   //11
    else if ((height >= 160 && height <= 162) || (weight >= 47 && weight <= 50))    //12
        type = 2;                                                                   //13
    else if (height >= 163 && height <= 260 && weight >= 51 && weight <= 300)       //14
        type = 1;                                                                   //15
    return type;                                                                    //16
}

module.exports = phanLoaiSucKhoeNVQS;