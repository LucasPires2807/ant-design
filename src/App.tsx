// src/App.tsx
import React from 'react';
import { Button, DatePicker, Flex, Pagination, Skeleton, Space, Typography } from 'antd';
import './App.css';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div className='container margin'>
      <Flex gap='1rem' justify='center' align='center' vertical={true} style={{ padding: 24 }}>
        <Title level={2}>Meu Projeto React com Ant Design</Title>
        <Space className='center' direction="horizontal" size="large">
          <Button type="primary">Botão Primário</Button>
          <Button type="default">Botão Padrão</Button>
          <Button type="dashed">Botão Tracejado</Button>
          <Button type="link">Botão link</Button>
          <Button type="text">Botão text</Button>
          <DatePicker />
        </Space>
      </Flex>
      <Flex>
        <SkeletonAvatar style={{ margin: 24 }}/>
        <Skeleton/>
      </Flex>
      <Flex justify='center' align='center'>
        <Pagination defaultCurrent={1} total={50}/>
      </Flex>
    </div>
  );
};

export default App;

