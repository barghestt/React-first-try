import Button from "./Button/Button";
import { useState } from "react";
export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          className="control"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          style={{
            border: name.trim().length? null : '1px solid red'
          }}
        ></input>
        <select
          className="control"
          id="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button>Отправить</Button>
      </form>
    </section>
  );
}
