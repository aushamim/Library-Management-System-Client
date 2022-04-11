import React from "react";

const Admin = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {/* UserTable */}
      <div>
        <p className="font-semibold text-2xl text-gray-500">• All Users</p>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded-md">
                <table class="min-w-full text-center">
                  <thead class="border-b bg-gray-200 font-semibold">
                    <tr>
                      <th scope="col" class="text-sm text-gray-900 px-6 py-4">
                        User ID
                      </th>
                      <th scope="col" class="text-sm text-gray-900 px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="text-sm text-gray-900 px-6 py-4">
                        Email
                      </th>
                      <th scope="col" class="text-sm text-gray-900 px-6 py-4">
                        Role
                      </th>
                      <th scope="col" class="text-sm text-gray-900 px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        asdfghjklo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Ashikul Islam
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ai.nayeem@gmail.com
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        user
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center justify-center">
                        <button className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold">
                          Promote
                        </button>
                        <button className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold">
                          Demote
                        </button>
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        asdfghjklo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Ashikul Islam
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ai.nayeem@gmail.com
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        user
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center justify-center">
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
        <p className="font-semibold text-2xl text-gray-500">• All Books</p>
      </div>
    </div>
  );
};

export default Admin;
