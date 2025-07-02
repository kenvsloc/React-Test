import { useState } from 'react';
import './App.css';

function App() {
  const [cashMoney, setCashMoney] = useState(0);
  const [bankMoney, setBankMoney] = useState(0);
  const totalBalance = cashMoney + bankMoney;

  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // thu nhập / chi phí
  const [accountType, setAccountType] = useState('cash'); // tiền mặt / ngân hàng

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      alert('Vui lòng nhập số hợp lệ lớn hơn 0');
      return;
    }

    if (accountType === 'cash') {
      if (type === 'income') {
        setCashMoney(prev => prev + numAmount);
      } else {
        setCashMoney(prev => prev - numAmount);
      }
    } else if (accountType === 'bank') {
      if (type === 'income') {
        setBankMoney(prev => prev + numAmount);
      } else {
        setBankMoney(prev => prev - numAmount);
      }
    }

    // Reset form
    setAmount('');
    setType('income');
    setAccountType('cash');
  };

  return (
    <>
    <div className='app-expense'>
      <div className='Expense-management'>
        <div className='ui-board'>
          <h3>Tiền mặt</h3>
          <span>{cashMoney}</span>
        </div>
        <div className='ui-board'>
          <h3>Tài khoản</h3>
          <span>{bankMoney}</span>
        </div>
        <div className='ui-board'>
          <h3>Tổng cộng</h3>
          <span>{totalBalance}</span>
        </div>
      </div>

      <div className='input-formCash'>
        <h3>Thêm giao dịch mới</h3>
        <form onSubmit={handleAddTransaction}>
          <label htmlFor="enterMoney">Nhập số tiền</label>
          <input
            id="enterMoney"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ví dụ: 100000"
          />
          {/* Thêm phần chọn tài khoản */}
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="cash">Tiền mặt</option>
            <option value="bank">Tài khoản ngân hàng</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Thu nhập</option>
            <option value="expense">Chi phí</option>
          </select>

          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;