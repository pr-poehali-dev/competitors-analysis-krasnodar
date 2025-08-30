import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'operator',
      name: 'Анастасия',
      text: 'Здравствуйте! Меня зовут Анастасия, я консультант компании РемонтПро. Чем могу помочь?',
      time: '14:32',
      avatar: '👩‍💼'
    }
  ]);

  const quickReplies = [
    'Узнать стоимость ремонта',
    'Посмотреть портфолио', 
    'Записаться на замер',
    'Задать вопрос'
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      name: 'Вы',
      text: message,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      avatar: '👤'
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');

    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: 'operator',
        name: 'Анастасия',
        text: 'Благодарю за ваш вопрос! Наш специалист свяжется с вами в ближайшие 5 минут.',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        avatar: '👩‍💼'
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      name: 'Вы',
      text: reply,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      avatar: '👤'
    };
    
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      let responseText = 'Спасибо за ваш интерес!';
      if (reply.includes('стоимость')) {
        responseText = 'Для расчета стоимости ремонта мне нужно знать площадь помещения и тип работ. Можете поделиться этой информацией?';
      } else if (reply.includes('портфолио')) {
        responseText = 'Вы можете посмотреть наши работы в разделе "Портфолио" на сайте или я могу выслать вам дополнительные фотографии проектов.';
      } else if (reply.includes('замер')) {
        responseText = 'Отлично! Для записи на бесплатный замер мне нужен ваш номер телефона и удобное время для визита.';
      }
      
      const response = {
        id: messages.length + 2,
        sender: 'operator',
        name: 'Анастасия',
        text: responseText,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        avatar: '👩‍💼'
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 shadow-lg rounded-full h-16 w-16 p-0 relative"
        >
          <Icon name="MessageCircle" size={28} />
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5">
            1
          </Badge>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-lg transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
        <CardHeader className="bg-primary text-white p-4 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                👩‍💼
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Онлайн поддержка</CardTitle>
                <div className="flex items-center space-x-1 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Анастасия в сети</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(!isMinimized);
                }}
              >
                <Icon name={isMinimized ? "ChevronUp" : "Minus"} size={16} />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex space-x-2 max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-sm">
                      {msg.avatar}
                    </div>
                    <div>
                      <div className={`rounded-lg p-3 text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {msg.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-gray-500 mb-2">Быстрые ответы:</div>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="outline"
                      className="text-xs h-6 px-2"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Напишите сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="text-sm"
                />
                <Button size="sm" onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 flex items-center">
                <Icon name="Shield" size={12} className="mr-1" />
                Ваши данные защищены
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LiveChat;