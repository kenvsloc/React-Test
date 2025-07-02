// src/components/EmployeeCard.jsx
// import React from 'react';
import e from '../data/employees.json';
import ProfilePic from './assets/1.png';

// Hàm kiểm tra kỹ năng (có thể đưa vào utils nếu dùng nhiều)
function checkSkill(dame, heart) {
  return dame > 50 && heart < 150;
  
}

export default function EmployeeCard() {
  const employee = e.employee2;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      width: '200px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <img
        src={ProfilePic}
        alt={employee.name}
        width="100%"
        height="auto"
        style={{ borderRadius: '8px' }}
      />
      <h2>{employee.name}</h2>
      <p><strong>Team:</strong> {employee.Team.join(', ')}</p>
      <p><strong>Dame:</strong> {employee.Dame}</p>
      <p><strong>Heart:</strong> {employee.Heart}</p>
      <p><strong>Skill Check:</strong> {checkSkill(employee.Dame, employee.Heart) ? '✅ Có kỹ năng' : '❌ Chưa đủ kỹ năng'}</p>
    </div>
  );
}