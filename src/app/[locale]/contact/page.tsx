"use client";

import { useTranslations } from 'next-intl';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default function ContactPage() {
  const t = useTranslations();
  
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // In a real app, you would send this data to your backend
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h1>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Form 
          layout="vertical" 
          onFinish={onFinish}
          initialValues={{ subject: 'general' }}
        >
          <Form.Item 
            label={t('contact.form.name')} 
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder={t('contact.form.placeholders.name')} />
          </Form.Item>
          
          <Form.Item 
            label={t('contact.form.email')} 
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder={t('contact.form.placeholders.email')} />
          </Form.Item>
          
          <Form.Item 
            label={t('contact.form.subject')} 
            name="subject"
          >
            <Select>
              <Option value="general">{t('contact.form.subjects.general')}</Option>
              <Option value="support">{t('contact.form.subjects.support')}</Option>
              <Option value="sales">{t('contact.form.subjects.sales')}</Option>
              <Option value="feedback">{t('contact.form.subjects.feedback')}</Option>
            </Select>
          </Form.Item>
          
          <Form.Item 
            label={t('contact.form.message')} 
            name="message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea rows={6} placeholder={t('contact.form.placeholders.message')} />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              {t('common.buttons.contactUs')}
            </Button>
          </Form.Item>
        </Form>
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-xl mb-3">{t('contact.info.email')}</h3>
          <p>contact@gsafe.com</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-xl mb-3">{t('contact.info.phone')}</h3>
          <p>+1 123 456 7890</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-xl mb-3">{t('contact.info.address')}</h3>
          <p>123 Security St, Safety City</p>
        </div>
      </div>
    </div>
  );
} 