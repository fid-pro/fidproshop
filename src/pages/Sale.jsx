function Sale() {
    return (
        <>
            <main id="dashboard-main" className="h-[calc(100vh-6rem)] overflow-auto px-4 py-10">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
                    <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                                <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="app">
                    <div className="container mx-auto">
                        <div className="py-5">
                            <div className="flex items-center px-5 py-2">
                                <span className="w-1/6 text-center">
                                    <span className="text-xs uppercase font-bold">Read</span>
                                </span>
                                <span className="w-1/4">
                                    <span className="text-xs uppercase font-bold">Name</span>
                                </span>
                                <span className="w-1/4">
                                    <span className="text-xs uppercase font-bold">Quantity</span>
                                </span>
                                <span className="w-1/2">
                                    <span className="text-xs uppercase font-bold">Message</span>
                                </span>
                                <span className="w-1/6">
                                    <span className="text-xs uppercase font-bold">Registered At</span>
                                </span>
                            </div>
                            <a className="hover:bg-gray-700 cursor-pointer bg-gray-800 text-white shadow flex p-5 items-center mb-5 rounded-lg">
                                <div className="w-1/6 text-center">
                                    <input id="toggleMessage" type="checkbox" />
                                </div>
                                <div className="w-1/4">
                                    <span className="capitalize block ">fgdgfdg</span>
                                </div>
                                <div className="w-1/4 overflow-hidden">
                                    <span className="capitalize text-xs">
                                        <form className="flex items-center">
                                            <input type="number" id="simple-search" className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1" required="" />
                                        </form>
                                    </span>
                                </div>
                                <div className="w-1/2 px-2">
                                    <span className="ext-sm">2 days ago</span>
                                </div>
                                <div className="w-1/6">
                                    <span className="ext-sm">2 days ago</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Sale