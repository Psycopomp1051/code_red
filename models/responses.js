function getBotResponse(input) {
    
    if (input == "hi" || input == "Hi" || input == "Hello") {
        return "What can i help you?";   
    }
    if (input == "i want some information about periods") {
        return "okay!";
    } 
    if (input == "i have some period issues") {
        return "okay! what issues do you face?";
    } 
    if (input =="i face period cramps") {
        return "we provide information about medicines and diseases";
    }
    if (input =="i face a disease like cancer") {
        return "we provide information related to cancer";
    }if (input =="i face a disease like HIV and AIDS") {
        return "we provide information related to HIV and AIDS";
    }if (input =="i face diesease related to breastfeeding") {
        return "we provide information about breastfeeding";
    }if (input =="i face diesease related to menstural cycle") {
        return "we provide information about menstural cycle";
    }
    if (input =="i face diesease like thyroid") {
        return "we provide information about thyroid";
    }
    if (input =="i want to buy some products") {
        return "we recommend you a links for buying";
    }
    if (input =="give me some information about diet") {
        return "we add information about diet according to your age";
    }
    else{
        return "What can i help you?";
    }
}


