import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import Quiz from '@/components/Quiz';
import LiveChat from '@/components/LiveChat';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    type: '',
    complexity: ''
  });

  const services = [
    {
      title: "Косметический ремонт",
      description: "Обновление интерьера без кардинальных изменений планировки. Покраска, поклейка обоев, мелкий ремонт",
      price: "от 1,500 ₽/м²",
      icon: "Paintbrush",
      features: ["Покраска стен и потолков", "Поклейка обоев", "Замена напольных покрытий", "Мелкий ремонт"],
      duration: "15-30 дней",
      detailedPrice: {
        painting: "350-500 ₽/м²",
        wallpaper: "400-800 ₽/м²", 
        flooring: "800-1500 ₽/м²"
      }
    },
    {
      title: "Капитальный ремонт",
      description: "Полное преображение квартиры с заменой всех коммуникаций, выравниванием стен и потолков",
      price: "от 5,000 ₽/м²",
      icon: "Hammer",
      features: ["Демонтаж старых покрытий", "Замена электропроводки", "Сантехнические работы", "Отделка под ключ"],
      duration: "45-90 дней",
      detailedPrice: {
        demolition: "400-800 ₽/м²",
        electrical: "800-1200 ₽/точка",
        plumbing: "15000-30000 ₽/комплект"
      }
    },
    {
      title: "Ремонт под ключ", 
      description: "Комплексное решение: от дизайн-проекта до финальной уборки. Полный цикл работ с гарантией",
      price: "от 8,000 ₽/м²",
      icon: "Key",
      features: ["Дизайн-проект", "Все виды работ", "Материалы", "Авторский надзор"],
      duration: "60-120 дней",
      detailedPrice: {
        design: "1500-2500 ₽/м²",
        materials: "40-60% от стоимости",
        supervision: "включено"
      }
    },
    {
      title: "Ремонт ванной комнаты",
      description: "Комплексный ремонт санузла: гидроизоляция, плитка, сантехника, вентиляция",
      price: "от 3,500 ₽/м²", 
      icon: "Bath",
      features: ["Гидроизоляция", "Укладка плитки", "Установка сантехники", "Вентиляция"],
      duration: "10-20 дней",
      detailedPrice: {
        waterproofing: "800-1200 ₽/м²",
        tiles: "1200-2500 ₽/м²",
        plumbing: "8000-25000 ₽/комплект"
      }
    },
    {
      title: "Ремонт кухни",
      description: "Установка кухонного гарнитура, техники, столешниц, фартука с подключением коммуникаций",
      price: "от 4,000 ₽/м²",
      icon: "ChefHat", 
      features: ["Кухонный гарнитур", "Встроенная техника", "Столешницы", "Фартук"],
      duration: "20-35 дней",
      detailedPrice: {
        kitchen_set: "40000-150000 ₽/комплект",
        countertop: "8000-25000 ₽/п.м",
        backsplash: "1500-3500 ₽/м²"
      }
    },
    {
      title: "Электромонтажные работы",
      description: "Прокладка новой проводки, установка розеток и выключателей, монтаж электрощитов",
      price: "от 800 ₽/точка",
      icon: "Zap",
      features: ["Прокладка проводки", "Установка розеток", "Монтаж освещения", "Электрощиты"], 
      duration: "3-10 дней",
      detailedPrice: {
        wiring: "300-500 ₽/м",
        outlets: "800-1200 ₽/шт",
        electrical_panel: "8000-15000 ₽/шт"
      }
    }
  ];

  const portfolio = [
    {
      title: "Квартира в ЖК Панорама",
      description: "Капитальный ремонт трёхкомнатной квартиры с полной перепланировкой",
      area: "85 м²",
      duration: "45 дней",
      cost: "425,000 ₽",
      image: "/img/d4d7734a-fbd4-4a18-86c5-87d8e6553d9e.jpg",
      details: {
        client: "Семья Петровых",
        style: "Современный минимализм",
        rooms: "3 комнаты + кухня-гостиная",
        features: ["Объединение кухни с гостиной", "Замена всех коммуникаций", "Тёплые полы", "Встроенная мебель"],
        materials: "Ламинат Quick Step, плитка Керама Марацци, краска Dulux",
        challenge: "Сложная перепланировка с согласованием в БТИ"
      }
    },
    {
      title: "Загородный дом в Центральном районе", 
      description: "Комплексный ремонт под ключ с дизайнерским решением",
      area: "120 м²",
      duration: "60 дней",
      cost: "960,000 ₽", 
      image: "/img/70bc52e4-eccb-4c34-a526-d02a1300507d.jpg",
      details: {
        client: "Индивидуальный заказчик",
        style: "Классический с элементами модерна",
        rooms: "4 комнаты + 2 санузла + кухня",
        features: ["Камин в гостиной", "Гардеробная", "Джакузи в ванной", "Умный дом"],
        materials: "Паркет дуб, натуральный камень, итальянская плитка",
        challenge: "Установка сложной вентиляционной системы"
      }
    },
    {
      title: "Офис IT-компании",
      description: "Современное офисное пространство с зонированием",
      area: "200 м²", 
      duration: "30 дней",
      cost: "300,000 ₽",
      image: "/img/a3667166-5740-41df-8440-8464f7de98a6.jpg",
      details: {
        client: "ООО 'ТехноСофт'",
        style: "Современный офисный",
        rooms: "Open space + 3 переговорные + кухня",
        features: ["Акустические панели", "Мобильные перегородки", "LED-освещение", "Кондиционирование"],
        materials: "Коммерческий линолеум, гипсокартон, алюминиевые конструкции",
        challenge: "Работы в действующем офисе без остановки деятельности"
      }
    },
    {
      title: "Студия 35 м²",
      description: "Максимально функциональное использование малогабаритного пространства",
      area: "35 м²",
      duration: "25 дней", 
      cost: "175,000 ₽",
      image: "/img/b9913de1-a0f2-47bd-9f98-ebefac3b2f07.jpg",
      details: {
        client: "Молодая пара", 
        style: "Скандинавский минимализм",
        rooms: "Студия + санузел",
        features: ["Трансформируемая мебель", "Зеркальные поверхности", "Подиум с хранением", "Французское окно"],
        materials: "Ламинат светлый дуб, краска белая матовая, ИКЕА мебель",
        challenge: "Визуальное расширение пространства при сохранении функциональности"
      }
    },
    {
      title: "Ванная комната премиум-класса",
      description: "Роскошный санузел с использованием натуральных материалов",
      area: "12 м²",
      duration: "20 дней",
      cost: "280,000 ₽", 
      image: "/img/eacb1fdd-16fc-4140-b0d8-fd6115883249.jpg",
      details: {
        client: "Частный дом",
        style: "Современная классика",
        rooms: "Санузел + гардеробная",
        features: ["Душевая кабина из стекла", "Двойная раковина", "Теплые полы", "Система вентиляции"],
        materials: "Мрамор Каррара, сантехника Grohe, мебель под заказ", 
        challenge: "Сложная гидроизоляция и установка тяжелых мраморных плит"
      }
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличная работа! Ребята сделали ремонт качественно и в срок. Очень довольна результатом!",
      project: "Квартира 65 м²",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/img/d4d7734a-fbd4-4a18-86c5-87d8e6553d9e.jpg",
      duration: "2:15"
    },
    {
      name: "Михаил Сидоров", 
      rating: 5,
      text: "Профессиональный подход, качественные материалы. Рекомендую всем!",
      project: "Дом 150 м²",
      videoId: "dQw4w9WgXcQ", 
      thumbnail: "/img/70bc52e4-eccb-4c34-a526-d02a1300507d.jpg",
      duration: "1:45"
    },
    {
      name: "Елена Иванова",
      rating: 5,
      text: "Супер команда! Сделали ремонт мечты, все на высшем уровне.",
      project: "Квартира 45 м²",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/img/b9913de1-a0f2-47bd-9f98-ebefac3b2f07.jpg", 
      duration: "3:20"
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
            <a href="/blog" className="text-secondary hover:text-primary transition-colors">Блог</a>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Пройти квиз-расчет
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Расчет стоимости ремонта</DialogTitle>
                </DialogHeader>
                <Quiz />
              </DialogContent>
            </Dialog>
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
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-700">Что входит:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Icon name="Check" size={12} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-primary text-white">
                      {service.price}
                    </Badge>
                    <span className="text-xs text-gray-500">{service.duration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробный прайс
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
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Площадь:</span>
                      <p className="font-semibold">{project.area}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Срок:</span>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Клиент:</span>
                      <p className="font-semibold text-xs">{project.details.client}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Стиль:</span>
                      <p className="font-semibold text-xs">{project.details.style}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Стоимость:</span>
                      <p className="font-bold text-primary text-lg">{project.cost}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-700">Особенности проекта:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.details.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Icon name="Check" size={12} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Подробнее о проекте
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Основная информация</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="text-gray-500">Площадь:</span> {project.area}</p>
                              <p><span className="text-gray-500">Срок:</span> {project.duration}</p>
                              <p><span className="text-gray-500">Стоимость:</span> {project.cost}</p>
                              <p><span className="text-gray-500">Клиент:</span> {project.details.client}</p>
                              <p><span className="text-gray-500">Стиль:</span> {project.details.style}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Помещения</h4>
                            <p className="text-sm text-gray-600">{project.details.rooms}</p>
                            <h4 className="font-semibold mt-4 mb-2">Материалы</h4>
                            <p className="text-sm text-gray-600">{project.details.materials}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Особенности проекта</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {project.details.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-orange-800">Вызов проекта</h4>
                          <p className="text-sm text-orange-700">{project.details.challenge}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
              <Card key={index} className="bg-white overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={review.thumbnail} 
                    alt={`Отзыв ${review.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/20 hover:bg-white/30 border border-white/50 text-white backdrop-blur-sm"
                    >
                      <Icon name="Play" className="mr-2" size={24} />
                      Смотреть отзыв
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {review.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <Icon name="Quote" className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{review.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic text-sm line-clamp-3">"{review.text}"</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Icon name="Play" className="mr-2" size={16} />
                        Смотреть полный отзыв
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>Отзыв клиента: {review.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                          <div className="text-white text-center">
                            <Icon name="Play" size={64} className="mx-auto mb-4" />
                            <p className="text-lg">Видеоотзыв {review.name}</p>
                            <p className="text-sm text-gray-300">{review.project}</p>
                            <Button className="mt-4 bg-primary hover:bg-primary/90">
                              Воспроизвести видео
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">• {review.project}</span>
                          </div>
                          <p className="text-gray-700 italic">"{review.text}"</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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

      <LiveChat />
    </div>
  );
};

export default Index;