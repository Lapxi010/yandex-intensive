export const prepareData = (items) => {
    return {
        entities: items.reduce((acc, category) => {
            acc[category.id] = category
            return acc
        }, {}),
        ids: items.map(({id}) => id)
    }
}