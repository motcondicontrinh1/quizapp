const getIDs = new Promise((resolve, reject) =>{

    setTimeout(() => {
        
        resolve([523, 887, 342, 123]);

    }, 1000);

});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: "Orange juice",
                publisher: "Hung"
            };
            resolve(`${ID}: ${recipe.title}, ${recipe.publisher}`);
        }, 1500, recID);
    });
};

const getRelated = (publisher) => {
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = {
                title: 'Lemonade',
                publisher: 'Hung'
            }
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    })
};

async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[1]);
    console.log(recipe);
    const related = await getRelated('Hung');
    console.log(related);
    a
    return recipe;
}
getRecipeAW()
.then(res => {
    console.log(`${res} is the best ever`);
});
// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(typeof recipe);
//     console.log(recipe);
//     return getRelated('Hung22');
// }).then(recipe => {
//     console.log(recipe);
// })