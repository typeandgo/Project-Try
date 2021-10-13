import React from 'react';
import { Form, Input, Button } from 'antd';
import { useAddTodoMutation } from 'services/todo.service';

const AddTodoForm = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const onFinish = async data => {
    try {

      await addTodo({...data, userId: 1}).unwrap();

    } catch (err) {

      console.error('Failed to save the todo: ', err);
    }
  };

  return (
    <Form layout='vertical' onFinish={ onFinish }>

      <Form.Item label='Başlık' name='title' rules={[{required: true, message: 'Bu alan zorunludur'}]}>
        <Input placeholder='Yeni görev ekleyin' />
      </Form.Item>

      <Form.Item label='Açıklama' name='body' rules={[{required: true, message: 'Bu alan zorunludur'}]}>
        <Input.TextArea rows={ 4 } />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' disabled={ isLoading }>Ekle</Button>
      </Form.Item>

    </Form>
  );
};

export default AddTodoForm;