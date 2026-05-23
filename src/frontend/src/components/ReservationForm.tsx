export function ReservationForm() {
  return (
    <form className="reservation-form" aria-label="訂位表單">
      <label>
        姓名
        <input type="text" name="guestName" placeholder="王小姐" />
      </label>
      <label>
        日期
        <input type="date" name="date" />
      </label>
      <label>
        人數
        <select name="partySize" defaultValue="2">
          <option value="2">2 位</option>
          <option value="4">4 位</option>
          <option value="6">6 位</option>
          <option value="8">8 位以上</option>
        </select>
      </label>
      <label>
        時段
        <select name="time" defaultValue="19:30">
          <option value="18:00">18:00</option>
          <option value="19:30">19:30</option>
          <option value="21:00">21:00</option>
        </select>
      </label>
      <button type="submit">送出訂位</button>
    </form>
  );
}
