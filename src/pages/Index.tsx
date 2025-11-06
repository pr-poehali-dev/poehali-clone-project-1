import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'Code',
      title: 'Генерация кода',
      description: 'Создавайте код на любых языках программирования с помощью AI',
    },
    {
      icon: 'Bug',
      title: 'Поиск ошибок',
      description: 'Автоматический анализ и исправление багов в вашем коде',
    },
    {
      icon: 'Lightbulb',
      title: 'Оптимизация',
      description: 'Советы по улучшению производительности и качества кода',
    },
    {
      icon: 'BookOpen',
      title: 'Обучение',
      description: 'Объяснение сложных концепций простым языком',
    },
    {
      icon: 'Zap',
      title: 'Быстрая работа',
      description: 'Мгновенные ответы на ваши вопросы по разработке',
    },
    {
      icon: 'Shield',
      title: 'Приватность',
      description: 'Все данные обрабатываются локально через LM Studio',
    },
  ];

  const examples = [
    'Создай функцию для сортировки массива объектов',
    'Как оптимизировать SQL запрос?',
    'Найди ошибку в моём Python коде',
    'Объясни что такое async/await',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <nav className="flex items-center justify-between mb-16 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name="Rocket" className="text-primary" size={24} />
            </div>
            <span className="text-xl font-bold">AI Code Assistant</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild>
              <a href="/chat">
                <Icon name="MessageSquareCode" size={18} className="mr-2" />
                Чат
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="/register">
                Начать
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </nav>

        <section className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI-ассистент для разработки
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создавай код, находи ошибки и учись программированию с помощью искусственного
            интеллекта на базе LM Studio
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 animate-glow">
              <a href="/chat">
                <Icon name="MessageSquareCode" size={20} className="mr-2" />
                Открыть чат
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/register">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Регистрация
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры запросов</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {examples.map((example, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 cursor-pointer transition-all duration-300 hover:translate-x-2 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Sparkles" className="text-primary" size={20} />
                    </div>
                    <p className="text-foreground">{example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-16 px-6 bg-card/30 backdrop-blur rounded-3xl border border-border/50">
          <div className="max-w-2xl mx-auto">
            <Icon name="Rocket" className="text-primary mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Готов начать?</h2>
            <p className="text-muted-foreground mb-8">
              Присоединяйся к разработчикам, которые используют AI для ускорения своей работы
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="/register">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Создать аккаунт бесплатно
              </a>
            </Button>
          </div>
        </section>
      </div>

      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground border-t border-border/30 mt-20">
        <p>© 2024 AI Code Assistant. Powered by LM Studio</p>
      </footer>
    </div>
  );
};

export default Index;
