import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    propertyType: '',
    area: '',
    repairType: '',
    rooms: '',
    budget: '',
    timeline: '',
    name: '',
    phone: ''
  });

  const questions = [
    {
      id: 'propertyType',
      title: 'Тип недвижимости',
      type: 'radio',
      options: [
        { value: 'apartment', label: 'Квартира', icon: 'Building' },
        { value: 'house', label: 'Дом', icon: 'Home' },
        { value: 'office', label: 'Офис', icon: 'Building2' },
        { value: 'commercial', label: 'Коммерческая недвижимость', icon: 'Store' }
      ]
    },
    {
      id: 'area',
      title: 'Площадь помещения',
      type: 'radio',
      options: [
        { value: '30-50', label: '30-50 м²' },
        { value: '50-80', label: '50-80 м²' },
        { value: '80-120', label: '80-120 м²' },
        { value: '120+', label: 'Более 120 м²' }
      ]
    },
    {
      id: 'repairType',
      title: 'Тип ремонта',
      type: 'radio',
      options: [
        { value: 'cosmetic', label: 'Косметический', icon: 'Paintbrush' },
        { value: 'major', label: 'Капитальный', icon: 'Hammer' },
        { value: 'turnkey', label: 'Под ключ', icon: 'Key' },
        { value: 'partial', label: 'Частичный (отдельные комнаты)', icon: 'Home' }
      ]
    },
    {
      id: 'rooms',
      title: 'Количество комнат',
      type: 'radio',
      options: [
        { value: '1', label: '1 комната' },
        { value: '2', label: '2 комнаты' },
        { value: '3', label: '3 комнаты' },
        { value: '4+', label: '4+ комнат' }
      ]
    },
    {
      id: 'budget',
      title: 'Планируемый бюджет',
      type: 'radio',
      options: [
        { value: '300-500', label: '300-500 тыс. ₽' },
        { value: '500-800', label: '500-800 тыс. ₽' },
        { value: '800-1500', label: '800 тыс. - 1,5 млн ₽' },
        { value: '1500+', label: 'Свыше 1,5 млн ₽' }
      ]
    },
    {
      id: 'timeline',
      title: 'Желаемые сроки',
      type: 'radio',
      options: [
        { value: 'urgent', label: 'Срочно (до 1 месяца)', icon: 'Clock' },
        { value: 'normal', label: 'Стандартно (1-3 месяца)', icon: 'Calendar' },
        { value: 'flexible', label: 'Гибкие сроки (3+ месяца)', icon: 'CalendarDays' }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  const calculateEstimate = () => {
    let basePrice = 3000;
    
    if (answers.repairType === 'cosmetic') basePrice = 2000;
    if (answers.repairType === 'major') basePrice = 5000;
    if (answers.repairType === 'turnkey') basePrice = 8000;
    
    let area = 60;
    if (answers.area === '30-50') area = 40;
    if (answers.area === '50-80') area = 65;
    if (answers.area === '80-120') area = 100;
    if (answers.area === '120+') area = 150;
    
    return Math.round(basePrice * area);
  };

  if (currentStep >= questions.length) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <Icon name="CheckCircle" className="mx-auto text-green-500 mb-4" size={64} />
            <CardTitle className="text-2xl text-primary">Расчет готов!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center bg-primary/10 p-6 rounded-lg">
              <p className="text-lg text-gray-600 mb-2">Примерная стоимость вашего ремонта:</p>
              <p className="text-4xl font-bold text-primary">{calculateEstimate().toLocaleString()} ₽</p>
              <p className="text-sm text-gray-500 mt-2">
                * Точная стоимость рассчитывается после замера
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name"
                  placeholder="Как к вам обращаться?"
                  value={answers.name}
                  onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={answers.phone}
                  onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!answers.name || !answers.phone}
              >
                Получить точный расчет
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({
                    propertyType: '',
                    area: '',
                    repairType: '',
                    rooms: '',
                    budget: '',
                    timeline: '',
                    name: '',
                    phone: ''
                  });
                }}
              >
                Заново
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id as keyof typeof answers];

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Шаг {currentStep + 1} из {questions.length}
            </span>
            <Button variant="ghost" size="sm">
              <Icon name="X" size={16} />
            </Button>
          </div>
          <Progress value={progress} className="mb-4" />
          <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <RadioGroup
            value={currentAnswer}
            onValueChange={handleAnswerChange}
            className="grid grid-cols-1 gap-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex items-center space-x-3 cursor-pointer flex-1 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {option.icon && (
                    <Icon name={option.icon} size={20} className="text-primary" />
                  )}
                  <span>{option.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex gap-3 pt-4">
            {currentStep > 0 && (
              <Button variant="outline" onClick={prevStep}>
                <Icon name="ChevronLeft" size={16} className="mr-1" />
                Назад
              </Button>
            )}
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={nextStep}
              disabled={!currentAnswer}
            >
              {currentStep === questions.length - 1 ? 'Получить расчет' : 'Далее'}
              {currentStep < questions.length - 1 && (
                <Icon name="ChevronRight" size={16} className="ml-1" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;