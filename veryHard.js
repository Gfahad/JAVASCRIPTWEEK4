function computeFewestCoinsFromDollars(amountInDollars) {
    let amountInCentsRemaining = amountInDollars * 100;

    //list of coin values
    const denominations = [25, 10, 5, 1];
    let coinCount = 0;
    for (let i = 0; i < denominations.length; i++) {
        const currentDenomination = denominations[i];
        let coinsOfThisDenomination = Math.floor(
            amountInCentsRemaining
        );
        coinCount = coinCount + coinsOfThisDenomination;
        amountInCentsRemaining = amountInCentsRemaining % currentDenomination;
    }
    return coinCount;

}

console.log(computeFewestCoinsFromDollars(10.67));
console.log(computeFewestCoinsFromDollars(0.56));
console.log(computeFewestCoinsFromDollars(7));