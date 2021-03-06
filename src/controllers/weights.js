export const familyWeights = (a0, a1, a2) => {
    let [weight3, weight2, weight1] = [1, 1, 1];
    switch (a0) {
        case "0":
            weight3 = 1;
            break;
        case "1":
            weight3 = 4;
            break;
        case "2":
            weight3 = 4;
            break;
        default:
            weight3 = 1;
    }
    switch (a1) {
        case "0":
            weight2 = 1;
            break;
        case "1":
            weight2 = 4;
            break;
        case "2":
            weight2 = 4;
            break;
        case "3":
            weight2 = 1;
            break;
        default:
            weight2 = 2;
    }
    switch (a2) {
        case "0":
            weight1 = 1;
            break;
        case "1":
            weight1 = 2;
            break;
        case "2":
            weight1 = 4;
            break;
        default:
            weight1 = 2;
    }
    return [weight1, weight2, weight3];
};

export const securityWeights = (a3, a4, a5) => {
    let [weight3, weight2, weight1] = [1, 1, 1];
    switch (a3) {
        case "0":
            weight2 = 1;
            break;
        case "1":
            weight2 = 2;
            break;
        case "2":
            weight2 = 4;
            break;
        default:
            weight2 = 1;
    }
    switch (a4) {
        case "0":
            weight3 = 8;
            break;
        case "1":
            weight3 = 4;
            break;
        case "2":
            weight3 = 2;
            break;
        case "3":
            weight3 = 1;
            break;
        default:
            weight3 = 1;
    }
    switch (a5) {
        case "0":
            weight1 = 1;
            break;
        case "1":
            weight1 = 2;
            break;
        case "2":
            weight1 = 4;
            break;
        default:
            weight1 = 1;
    }
    return [weight1, weight2, weight3];
};

export const environmentWeights = (a6, a7, a8) => {
    let [weight3, weight2, weight1] = [1, 1, 1];
    switch (a6) {
        case "0":
            weight1 = 1;
            break;
        case "1":
            weight1 = 2;
            break;
        case "2":
            weight1 = 4;
            break;
        case "3":
            weight1 = 8;
            break;
        default:
            weight1 = 1;
    }
    switch (a7) {
        case "0":
            weight2 = 1;
            break;
        case "1":
            weight2 = 2;
            break;
        case "2":
            weight2 = 4;
            break;
        default:
            weight2 = 1;
    }
    switch (a8) {
        case "0":
            weight1 = 1;
            break;
        case "1":
            weight1 = 2;
            break;
        case "2":
            weight1 = 4;
            break;
        default:
            weight1 = 1;
    }
    return [weight1, weight2, weight3];
};
