import { useState } from "react";

function Modal({ handleAddItem, isModalOpen, handleModalOpen }) {
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ status, content, image });
    handleModalOpen(false);
    setStatus("");
    setImage("");
    setContent("");
  };

  const selecOptions = [
    { key: "Done", value: "Done" },
    { key: "In Progress", value: "In Progress" },
    { key: "To Do", value: "To Do" },
  ];

  return (
    <div className="modal-background" hidden={!isModalOpen}>
      <form class="modal" onSubmit={handleSubmit}>
        <label for="status" class="label">
          상태
        </label>
        <select
          id="status"
          type="text"
          placeholder="Task를 입력해 주세요."
          class="input"
          required
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {selecOptions.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
        <label for="image" class="label">
          이미지
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL을 입력해 주세요."
          class="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label for="content" class="label">
          내용
        </label>
        <input
          id="content"
          type="text"
          placeholder="Task 내용을 입력해 주세요."
          class="input"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div class="submit-buttons">
          <button
            type="button"
            class="submit-button close"
            onClick={() => handleModalOpen(false)}
          >
            닫기
          </button>
          <button type="submit" class="submit-button">
            저장
          </button>
        </div>
      </form>
    </div>
  );
}
export default Modal;
