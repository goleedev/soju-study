import { useState } from "react";

function Modal({ handleAddItem, isModalOpen, handleModalOpen }) {
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ status, content, image });
    handleModalOpen(false);
  };

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
          maxlength="12"
          required
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
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
