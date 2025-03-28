import { useState } from "react";

const exampleData = [
  {
    id: 1,
    firstname: "Yesui",
    lastname: "Enkhbayar",
    job: "kfc worker",
    alive: true,
    items: [
      {
        id: 10,
        name: "lipbalm",
      },
      {
        id: 10,
        name: "book",
      },
    ],
    height: 175,
    image:
      "https://i1.rgstatic.net/ii/profile.image/1072944126107649-1632821222338_Q512/Purevsuren-Munkhtur.jpg",
  },
  {
    id: 2,
    firstname: "Oyunbilig",
    lastname: "Chimiddorj",
    job: "taranshan tseverlegch",
    alive: true,
    items: [
      {
        id: 11,
        name: "tirtir",
      },
    ],
    height: 168,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2ZSuZL1A9Or8Doqb7IomOSy4Aj6UdxhRcw&s",
  },
  {
    id: 3,
    firstname: "Azzaya",
    lastname: "Amarbat",
    job: "bumbuguriin egch",
    alive: true,
    items: [
      {
        id: 12,
        name: "laptop",
      },
    ],
    height: 165,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneaUssyA4YImkbi3tRY4PNjULhmV_ddOAJw&s",
  },
  {
    id: 4,
    firstname: "Anduul",
    lastname: "Altanhaic",
    job: "jolooc",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 150,
    image:
      "https://yt3.googleusercontent.com/4mLftEXUHX8oTpzvNsYNc0geF2iB4G-yWGcJQ3sMnfBTFWEJlzy1_o5XtIWY0HjzybOgWMU-xuQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    firstname: "Ayden-Anand",
    lastname: "Amarbold",
    job: "manaac",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 178,
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGtb7O9TBxsag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720381252329?e=2147483647&v=beta&t=vh2xVFSzO2F56E28KLSZUPK18Wh3B8JCUvgsuUufJD4",
  },
  {
    id: 6,
    firstname: "Temuujin",
    lastname: "Bagsh",
    job: "lab iin manaac",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYB3X49TYz5dWHeIGykJApXugBGfWuwe_lYD8m4nHGriZpvTBYJTzQUxSYWANPoXi5hLI&usqp=CAU",
  },
  {
    id: 7,
    firstname: "Anand",
    lastname: "Altankhuyg",
    job: "angiin darga",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 180,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg",
  },
  {
    id: 8,
    firstname: "Otgonmunkh",
    lastname: "Baatar",
    job: "uscin",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 170,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbV_TlSo2QdJcj2PmjQbs3hCMmT8efWkThqw&s",
  },
  {
    id: 9,
    firstname: "Amirlan",
    lastname: "Taivan",
    job: "geriin avgai",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
      {
        id: 10,
        name: "laptop",
      },
    ],
    height: 167,
    image:
      "https://i.pinimg.com/736x/25/91/c8/2591c82105fe8a394b83ef4c111657e3.jpg",
  },
  {
    id: 10,
    firstname: "Nomindari",
    lastname: "Enkhtur",
    job: "mongol helnii bagsh",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 160,
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQG4WAtTBwzGmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567861265380?e=2147483647&v=beta&t=awoTvTsK90XPmz5eZG2JBfj4m0z7w6NwtFZNRUWC4Uw",
  },
  {
    id: 1,
    firstname: "Yesui",
    lastname: "Enkhbayar",
    job: "kfc worker",
    alive: true,
    items: [
      {
        id: 10,
        name: "lipbalm",
      },
      {
        id: 10,
        name: "book",
      },
    ],
    height: 175,
    image:
      "https://i1.rgstatic.net/ii/profile.image/1072944126107649-1632821222338_Q512/Purevsuren-Munkhtur.jpg",
  },
  {
    id: 2,
    firstname: "Oyunbilig",
    lastname: "Chimiddorj",
    job: "taranshan tseverlegch",
    alive: true,
    items: [
      {
        id: 11,
        name: "tirtir",
      },
    ],
    height: 168,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2ZSuZL1A9Or8Doqb7IomOSy4Aj6UdxhRcw&s",
  },
  {
    id: 3,
    firstname: "Azzaya",
    lastname: "Amarbat",
    job: "bumbuguriin egch",
    alive: true,
    items: [
      {
        id: 12,
        name: "laptop",
      },
    ],
    height: 165,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneaUssyA4YImkbi3tRY4PNjULhmV_ddOAJw&s",
  },
  {
    id: 4,
    firstname: "Anduul",
    lastname: "Altanhaic",
    job: "jolooc",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 150,
    image:
      "https://yt3.googleusercontent.com/4mLftEXUHX8oTpzvNsYNc0geF2iB4G-yWGcJQ3sMnfBTFWEJlzy1_o5XtIWY0HjzybOgWMU-xuQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    firstname: "Ayden-Anand",
    lastname: "Amarbold",
    job: "manaac",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 178,
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGtb7O9TBxsag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720381252329?e=2147483647&v=beta&t=vh2xVFSzO2F56E28KLSZUPK18Wh3B8JCUvgsuUufJD4",
  },
  {
    id: 6,
    firstname: "Temuujin",
    lastname: "Bagsh",
    job: "lab iin manaac",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYB3X49TYz5dWHeIGykJApXugBGfWuwe_lYD8m4nHGriZpvTBYJTzQUxSYWANPoXi5hLI&usqp=CAU",
  },
  {
    id: 7,
    firstname: "Anand",
    lastname: "Altankhuyg",
    job: "angiin darga",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 180,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg",
  },
  {
    id: 8,
    firstname: "Naran erdene",
    lastname: "Ganhuyg",
    job: "uscin",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 170,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbV_TlSo2QdJcj2PmjQbs3hCMmT8efWkThqw&s",
  },
  {
    id: 9,
    firstname: "Batpurev",
    lastname: "Batmunkh",
    job: "geriin avgai",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
      {
        id: 10,
        name: "laptop",
      },
    ],
    height: 167,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdUDyWYrqMAxvBD1lyDI17X-3-Gl5aUdxvA",
  },
  {
    id: 10,
    firstname: "Serjee",
    lastname: "Ganhuyag",
    job: ".",
    alive: true,
    items: [
      {
        id: 10,
        name: "eyeliner",
      },
    ],
    height: 160,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8gCNsytHqLsrUTN0b44S6OzEa_v6Gh7m-g&s",
  },
];

export default function Lab4() {
  const [count, setCount] = useState(false);
  const [name, setName] = useState("");

  // Filter data based on user input
  const filter = exampleData.filter((item) =>
    item.firstname.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 text-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="font-semibold text-4xl text-indigo-400">Khulan</h1>
        <input
          type="text"
          className="border-2 border-gray-700 rounded-xl px-4 py-3 w-64 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-3 transition-all focus:outline-none"
          onClick={() => setCount((prev) => !prev)}
        >
          Toggle View
        </button>
      </div>

      {filter.length === 0 ? (
        <p className="text-center text-lg text-red-500">No matches found</p>
      ) : (
        <div
          className={`${
            count ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          }`}
        >
          {filter.map((element) => (
            <div
              key={element.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <div
                className={`${
                  count ? "flex flex-col items-center justify-center" : "flex flex-col items-center space-y-4"
                }`}
              >
                <img
                  className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-gray-600 transition-transform transform hover:scale-110"
                  src={element.image}
                  alt={`${element.firstname} ${element.lastname}`}
                />
                <h3 className="text-2xl font-semibold text-white">
                  {`${element.firstname} ${element.lastname}`}
                </h3>
                <p className="text-gray-400 text-base">{element.job}</p>
                <p className="mt-2 text-gray-300">Height: {element.height} cm</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-300">Items:</p>
                  <ul className="list-disc pl-4 text-gray-400">
                    {element.items.map((item) => (
                      <li key={item.id} className="text-sm">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}