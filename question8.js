function calculateDiscount(price, customerType, isHoliday){
    if  (price < 5000){
        return price;
    }
    let discount = 0;
    switch (customerType){
        case "Regular":
            discount = 0.05;
            break;
        case "member":
            discount = 0.10;
            break;
        case "VIP":
            discount = 0.20;
            break;
        default:
            discount = 0;            
    }
    if (isHoliday){
        discount += 0.05;
    }
    return price = price * (1- discount);
}