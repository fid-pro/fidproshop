function SalesComponent({ sale, key }) {
    return (
        <tr key={key} className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="col" className="p-4">
                <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" className="px-6 py-3">
                {sale.productName}
            </th>
            <th scope="col" className="px-6 py-3">
                {sale.color}
            </th>
            <th scope="col" className="px-6 py-3">
                {sale.category}
            </th>
            <th scope="col" className="px-6 py-3">
                {sale.price}
            </th>
            <th scope="col" className="px-6 py-3">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </th>
        </tr>
    )
}

export default SalesComponent