import { useState } from "react";
//
import Modal from "./Modal";

const initialData = [
  {
    status: "Done",
    content: "빨래는 귀찮아요.",
    image: "./images/laundry.png",
  },
  {
    status: "In Progress",
    content: "요즘 Nudge를 다시 읽고 있어요.",
    image: "./images/reading.png",
  },
  {
    status: "Todo",
    content: "발목이 나으면 다시 헬스를 조질 것입니다.",
    image: "./images/work-out.png",
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (item) => {
    setData([...data, item]);
  };

  const handleModalOpen = (open) => setIsModalOpen(open);

  return (
    <>
      <header> TODO LIST</header>

      <main>
        <nav>
          <button
            type="button"
            class="add-button"
            onClick={() => setIsModalOpen(true)}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.status}>{item.status}</span>
          ))}
        </nav>

        <article id="container">
          {data.map((item) => (
            <div class="card" key={item.status}>
              <img src={item.image} alt={item.status} />
              <span>{item.status}</span>
              <span>{item.content}</span>
            </div>
          ))}
        </article>
      </main>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
}

export default App;
