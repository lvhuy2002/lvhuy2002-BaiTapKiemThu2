function phanLoaiSucKhoeNVQS(height, weight) {                                      //1
    let type = -1;                                                                  //2 
    if (height < 120 || height > 260 || weight < 20 || weight > 300)                //3
        return type;                                                                //4
    if ((height >= 120 && height <= 152) || (weight >= 20 && weight <= 39))         //5  
        type = 6;                                                                   //6 
    else if ((height >= 153 && height <= 154) || weight === 40)                     //7   
        type = 5;                                                                   //8
    else if ((height >= 155 && height <= 156) || (weight >= 41 && weight <= 42))    //9    
        type = 4;                                                                   //10
    else if ((height >= 157 && height <= 159) || (weight >= 43 && weight <= 46))    //11
        type = 3;                                                                   //12
    else if ((height >= 160 && height <= 162) || (weight >= 47 && weight <= 50))    //13
        type = 2;                                                                   //14
    else if (height >= 163 && height <= 260 && weight >= 51 && weight <= 300)       //15
        type = 1;                                                                   //16
    return type;                                                                    //17
}

module.exports = phanLoaiSucKhoeNVQS;