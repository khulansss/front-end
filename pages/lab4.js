import { useState, useEffect } from "react";

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

export default function lab4() {
  const [count, setCount] = useState("");
  const [name, setName] = useState("");

  console.log("lenghtj --->", exampleData.length);

  const filter = exampleData.filter((item) =>
    item.firstname.toLowerCase().includes(name.toLowerCase())
  );
  
  console.log(filter);
  
  return (
    <div>
      <div className="w-full h-10 flex ">
        <input
          type="text"
          className="border border-black rounded p-2 fixed ml-3 mt-3"
          size="9"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {filter.length<0 ? <p>iim hun oldsongu</p> : <> <div
        className={`${
          count == true ? "grid" : "flex flex-col"
        } grid-cols-4 gap-4`}
      > {filter.map((element) => (
          <div className="w-full  m-2 p-3 shadow-xl rounded-xl ">
            <div
              className={`${
                count == false ? "grid items-center " : "flex flex-col"
              } grid-cols-4 gap-4`}
            >
              <img
                className={`${
                  count == true ? "w-15 h-15 p-14" : "flex flex-col"
                }  ml-13 w-80 h-80 `}
                src={element.image}
              ></img>

              <div className="">
                <div className="flex ml-5">
                  <p className=" ml-5 text-2xl font-sans ">{element.firstname}</p>
                  <p className=" ml-5 ">{element.lastname}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold ml-16">Firstname:</p>
                  <p className=" ml-5 ">{element.firstname}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold ml-16">Lastname:</p>
                  <p className=" ml-5 ">{element.lastname}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold ml-16">Job:</p>
                  <p className=" ml-5 ">{element.job}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold ml-16">Height:</p>
                  <p className=" ml-5 ">{element.height}</p>
                </div>

                <div className="flex">
                  <p className="font-semibold ml-16 text-red-800">Items:</p>
                  <div className="ml-5  ">
                    {element.items.map((items) => (
                      <p className="text-red-800">{items.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}</div> </>}
        <button
          className="border w-13 h-10 bg-sky-300 m-3 p-2 rounded-xl fixed right-0"
          onClick={() => setCount(!count)}
        >
          click me
        </button>
        <p className="ml-3">{count}</p>
      
     
       
        
      </div>
    </div>
  );
}
