    //072 Escreva um programa que encontre o menor valor em uma matriz.
    // *** https://stackoverflow.com/questions/69337327/find-lowest-value-in-nested-array-in-javascript
    const
    items = [["bob", 1], ["jeff", 2], ["wal-E", 2], ["bob", 1], ["bob", 10]],
    result = Object.entries(items.reduce((r, [name, value]) => {
        if (!(name in r) || r[name] > value) r[name] = value;
        return r;
    }, {}));

    console.log(result);
