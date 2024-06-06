// src/App.tsx
import React from 'react';
import { Button, DatePicker, Space, Typography } from 'antd';
import './App.css';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Meu Projeto React com Ant Design</Title>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Button type="primary">Botão Primário</Button>
        <Button type="default">Botão Padrão</Button>
        <Button type="dashed">Botão Tracejado</Button>
        <DatePicker />
      </Space>
    </div>
  );
};

export default App;

