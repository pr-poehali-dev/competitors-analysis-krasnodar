import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Как выбрать материалы для ремонта квартиры в 2024 году",
      excerpt: "Подробный гид по выбору качественных и доступных материалов для ремонта. Разбираем популярные бренды и их характеристики.",
      category: "Материалы",
      date: "15 августа 2024",
      readTime: "8 мин",
      image: "/img/placeholder.jpg",
      tags: ["материалы", "ремонт", "советы"]
    },
    {
      id: 2,
      title: "Этапы капитального ремонта: пошаговая инструкция",
      excerpt: "От планирования до финальной уборки - все этапы капитального ремонта квартиры. Чек-лист для контроля качества работ.",
      category: "Планирование",
      date: "10 августа 2024", 
      readTime: "12 мин",
      image: "/img/placeholder.jpg",
      tags: ["планирование", "этапы", "капремонт"]
    },
    {
      id: 3,
      title: "Дизайн маленькой квартиры: 15 практических советов",
      excerpt: "Как визуально расширить пространство и сделать малогабаритную квартиру функциональной и стильной.",
      category: "Дизайн",
      date: "5 августа 2024",
      readTime: "6 мин", 
      image: "/img/placeholder.jpg",
      tags: ["дизайн", "малогабаритка", "интерьер"]
    },
    {
      id: 4,
      title: "Ошибки при ремонте ванной комнаты: ТОП-10",
      excerpt: "Самые частые ошибки при ремонте ванной и как их избежать. Советы от профессиональных мастеров.",
      category: "Санузел",
      date: "1 августа 2024",
      readTime: "10 мин",
      image: "/img/placeholder.jpg", 
      tags: ["ванная", "ошибки", "сантехника"]
    },
    {
      id: 5,
      title: "Электрика в квартире: что нужно знать перед ремонтом",
      excerpt: "Планирование электропроводки, выбор кабелей и автоматов, расчет нагрузки. Безопасность превыше всего.",
      category: "Электрика",
      date: "28 июля 2024",
      readTime: "14 мин",
      image: "/img/placeholder.jpg",
      tags: ["электрика", "проводка", "безопасность"]
    },
    {
      id: 6,
      title: "Тренды в дизайне интерьера 2024: что будет модно",
      excerpt: "Актуальные цвета, материалы и стили в интерьере. Прогнозы дизайнеров на ближайший год.",
      category: "Тренды",
      date: "25 июля 2024", 
      readTime: "7 мин",
      image: "/img/placeholder.jpg",
      tags: ["тренды", "2024", "стиль"]
    }
  ];

  const categories = [
    { name: "Все статьи", count: 24 },
    { name: "Материалы", count: 8 },
    { name: "Планирование", count: 6 },
    { name: "Дизайн", count: 5 },
    { name: "Санузел", count: 3 },
    { name: "Электрика", count: 2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Hammer" className="text-primary" size={32} />
            <span className="text-2xl font-montserrat font-bold text-secondary">РемонтПро</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="/blog" className="text-primary font-semibold">Блог</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-montserrat font-bold text-secondary mb-4">
              Блог о ремонте и дизайне
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полезные советы, инструкции и актуальные тренды от профессионалов ремонта
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Популярные теги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["ремонт", "дизайн", "материалы", "планирование", "советы", "тренды", "электрика", "сантехника"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-white">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Icon name="FileText" size={48} className="text-gray-400" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-primary text-white text-xs">{article.category}</Badge>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Icon name="Clock" size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Icon name="Calendar" size={12} />
                        <span>{article.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {article.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Читать далее
                        <Icon name="ArrowRight" className="ml-2" size={14} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button variant="default" size="sm" className="bg-primary">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Подпишитесь на новости
          </h3>
          <p className="text-lg mb-6 max-w-md mx-auto">
            Получайте полезные статьи о ремонте прямо на почту
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button className="bg-secondary hover:bg-secondary/90">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Hammer" className="text-primary" size={24} />
            <span className="text-xl font-montserrat font-bold">РемонтПро</span>
          </div>
          <p className="text-gray-300">© 2024 РемонтПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;