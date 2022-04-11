import React from "react";

const Admin = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
      {/* UserTable */}
      <div>
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex items-center">
            <p className="font-semibold text-2xl text-gray-500">• All Users</p>
          </div>
          <div className="flex">
            <input
              id="filter-user"
              className="w-full p-3 rounded-md font-semibold outline-blue-300 text-gray-500"
              type="text"
              placeholder="Filter User"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-md">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-300 font-semibold">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        User ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                        asdfghjklo
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        Ashikul Islam
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        ai.nayeem@gmail.com
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        user
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex items-center justify-center">
                        <button className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold">
                          Promote
                        </button>
                        <button className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold">
                          Demote
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BooksTable */}
      <div>
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex items-center">
            <p className="font-semibold text-2xl text-gray-500">• All Books</p>
          </div>
          <div className="flex">
            <input
              id="filter-books"
              className="w-full p-3 rounded-md font-semibold outline-blue-300 text-gray-500"
              type="text"
              placeholder="Filter Books"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-md">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-300 font-semibold">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Book ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Author
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-gray-900 px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                        asdfghjklo
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        Ashikul Islam
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        ai.nayeem@gmail.com
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex items-center justify-center">
                        <button className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
