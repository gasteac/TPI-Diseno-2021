

export default function Delete({ itemsToDelete, items }) {
    // No sirve porque no modifica el archivo donde estan los datos


    const handleDelete = (itemsToDelete) => {
        itemsToDelete.forEach(itemToDelete => {
            const index = items.findIndex(item => item.id == itemToDelete.original.id);
            items.splice(index, 1)
        })
    }

    return (
        <button onClick={() => handleDelete(itemsToDelete)} disabled={itemsToDelete.length === 0}>Delete</button>
    );
}