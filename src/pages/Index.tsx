import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    type: '',
    complexity: ''
  });

  const services = [
    {
      title: "Косметический ремонт",
      description: "Покраска стен, поклейка обоев, замена напольных покрытий",
      price: "от 1,500 ₽/м²",
      icon: "Paintbrush"
    },
    {
      title: "Капитальный ремонт",
      description: "Полная перепланировка, замена коммуникаций, черновая и чистовая отделка",
      price: "от 5,000 ₽/м²",
      icon: "Hammer"
    },
    {
      title: "Ремонт под ключ",
      description: "Комплексный ремонт с дизайн-проектом и материалами",
      price: "от 8,000 ₽/м²",
      icon: "Key"
    },
    {
      title: "Ремонт ванной",
      description: "Гидроизоляция, плитка, сантехника, электрика",
      price: "от 3,500 ₽/м²",
      icon: "Bath"
    },
    {
      title: "Ремонт кухни",
      description: "Установка кухонного гарнитура, техники, столешниц",
      price: "от 4,000 ₽/м²",
      icon: "ChefHat"
    },
    {
      title: "Электромонтажные работы",
      description: "Замена проводки, установка розеток, выключателей, щитков",
      price: "от 800 ₽/точка",
      icon: "Zap"
    }
  ];

  const portfolio = [
    {
      title: "Квартира в ЖК Панорама",
      description: "Капитальный ремонт 85 м², современный стиль",
      area: "85 м²",
      duration: "45 дней",
      cost: "425,000 ₽",
      image: "/img/d4d7734a-fbd4-4a18-86c5-87d8e6553d9e.jpg"
    },
    {
      title: "Загородный дом",
      description: "Ремонт под ключ 120 м², классический стиль",
      area: "120 м²",
      duration: "60 дней", 
      cost: "960,000 ₽",
      image: "/img/70bc52e4-eccb-4c34-a526-d02a1300507d.jpg"
    },
    {
      title: "Офисное помещение",
      description: "Косметический ремонт 200 м², офисный стиль",
      area: "200 м²",
      duration: "30 дней",
      cost: "300,000 ₽",
      image: "/img/a3667166-5740-41df-8440-8464f7de98a6.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличная работа! Ребята сделали ремонт качественно и в срок. Очень довольна результатом!",
      project: "Квартира 65 м²"
    },
    {
      name: "Михаил Сидоров", 
      rating: 5,
      text: "Профессиональный подход, качественные материалы. Рекомендую всем!",
      project: "Дом 150 м²"
    },
    {
      name: "Елена Иванова",
      rating: 5,
      text: "Супер команда! Сделали ремонт мечты, все на высшем уровне.",
      project: "Квартира 45 м²"
    }
  ];

  const calculateCost = () => {
    const area = parseInt(calculatorData.area) || 0;
    let basePrice = 0;
    
    switch (calculatorData.type) {
      case 'cosmetic': basePrice = 1500; break;
      case 'major': basePrice = 5000; break;
      case 'turnkey': basePrice = 8000; break;
      default: basePrice = 3000;
    }
    
    const complexityMultiplier = calculatorData.complexity === 'high' ? 1.3 : 1;
    return Math.round(area * basePrice * complexityMultiplier);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Hammer" className="text-primary" size={32} />
            <span className="text-2xl font-montserrat font-bold text-secondary">РемонтПро</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-secondary hover:text-primary transition-colors">Портфолио</a>
            <a href="#calculator" className="text-secondary hover:text-primary transition-colors">Калькулятор</a>
            <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Заказать звонок
          </Button>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            Качественный ремонт<br />в Краснодаре
          </h1>
          <p className="text-xl font-opensans mb-8 max-w-2xl mx-auto">
            Профессиональные ремонтные работы любой сложности. 
            Гарантия качества, соблюдение сроков, честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (861) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр ремонтных работ для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name={service.icon} className="text-primary" size={28} />
                    <CardTitle className="text-secondary">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-primary text-white">
                    {service.price}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Калькулятор */}
      <section id="calculator" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Узнайте примерную стоимость ремонта за 30 секунд</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Рассчитать стоимость ремонта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь помещения (м²)</Label>
                  <Input 
                    id="area"
                    type="number" 
                    placeholder="Например, 65"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Тип ремонта</Label>
                  <Select value={calculatorData.type} onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип ремонта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cosmetic">Косметический</SelectItem>
                      <SelectItem value="major">Капитальный</SelectItem>
                      <SelectItem value="turnkey">Под ключ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Сложность работ</Label>
                  <Select value={calculatorData.complexity} onValueChange={(value) => setCalculatorData({...calculatorData, complexity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите сложность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартная</SelectItem>
                      <SelectItem value="high">Повышенная</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {calculatorData.area && calculatorData.type && calculatorData.complexity && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg text-gray-600 mb-2">Примерная стоимость:</p>
                      <p className="text-3xl font-bold text-primary">{calculateCost().toLocaleString()} ₽</p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Получить точный расчет
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600">Примеры выполненных проектов с детальным описанием</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-secondary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Площадь:</span>
                      <p className="font-semibold">{project.area}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Срок:</span>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Стоимость:</span>
                      <p className="font-bold text-primary text-lg">{project.cost}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Смотреть детали
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-primary">{review.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Icon name="Play" className="mr-2" size={16} />
                    Видеоотзыв
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-montserrat font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} />
                  <span className="text-lg">+7 (861) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">info@remontpro23.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} />
                  <span className="text-lg">г. Краснодар, ул. Красная, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} />
                  <span className="text-lg">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cosmetic">Косметический ремонт</SelectItem>
                      <SelectItem value="major">Капитальный ремонт</SelectItem>
                      <SelectItem value="turnkey">Ремонт под ключ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;