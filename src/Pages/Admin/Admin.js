import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Admin = () => {
  const { dbUser } = useAuth();

  // books data state
  const [booksData, setBooksData] = useState([]);

  // get books data
  useEffect(() => {
    fetch("https://polar-lake-51656.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, [booksData]);

  // make admin
  const handleMakeAdmin = (email) => {
    const confirm = window.confirm(`Do you want to Make ${email} as a Admin`);
    if (confirm) {
      const user = { email };
      fetch("https://polar-lake-51656.herokuapp.com/users/admin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Admin Added");
          } else {
            alert(`${email} is Already an Admin`);
          }
        });
    }
  };

  // change admin to user
  const handleChangeAdmin = (email) => {
    const confirm = window.confirm(`Do you want to Remove ${email} from Admin`);
    if (confirm) {
      const user = { email };
      fetch("https://polar-lake-51656.herokuapp.com/users/makeUser", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Admin Removed");
          } else {
            alert(`${email} is Already an Admin`);
          }
        });
    }
  };

  // delete a book
  const handleBookDelete = (id) => {
    const url = `https://polar-lake-51656.herokuapp.com/books/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Book Removed");
          }
        }
      });
  };

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
                    {dbUser.map((singleUser) => (
                      <tr key={singleUser?._id} className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                          {singleUser?._id}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {singleUser?.displayName}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {singleUser?.email}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {singleUser?.role}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex items-center justify-center">
                          {singleUser?.role === "admin" ? (
                            <button
                              className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold"
                              onClick={() => {
                                handleChangeAdmin(singleUser?.email);
                              }}
                            >
                              Demote
                            </button>
                          ) : (
                            <button
                              className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold"
                              onClick={() => {
                                handleMakeAdmin(singleUser?.email);
                              }}
                            >
                              Promote
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
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
                    {booksData.map((singleBook) => (
                      <tr key={singleBook?._id} className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                          {singleBook?._id}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {singleBook?.title}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {singleBook?.author}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap flex items-center justify-center">
                          <button
                            className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold"
                            onClick={() => {
                              handleBookDelete(singleBook?._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
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
