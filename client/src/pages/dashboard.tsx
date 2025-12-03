import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/lib/auth";
import { chatConfigs } from "@shared/schema";
import { 
  BookOpen, 
  Star, 
  LogOut, 
  MessageSquare,
  ChevronLeft,
  Sparkles
} from "lucide-react";
import logoImage from "@assets/logo_1764802326595.jpeg";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, logout, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      setLocation("/login");
    }
  }, [user, isLoading, setLocation]);

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const openChat = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Determine which chats to show based on user access level
  const availableChats = user.accessLevel >= 2 
    ? [chatConfigs.saudiHistory, chatConfigs.prophetBiography]
    : [chatConfigs.saudiHistory];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" data-testid="link-home-dashboard">
              <img 
                src={logoImage} 
                alt="LEXIA" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* User info and actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-foreground" data-testid="text-user-name">
                  {user.displayName}
                </p>
                <p className="text-xs text-muted-foreground">
                  مستوى الوصول: {user.accessLevel === 2 ? "كامل" : "أساسي"}
                </p>
              </div>
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">تسجيل الخروج</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Sparkles className="h-4 w-4" />
            <span>مرحباً بك في منصة التعلم</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أهلاً {user.displayName}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر المنهج الذي تريد دراسته وابدأ محادثتك مع المساعد الذكي
          </p>
        </div>

        {/* Chat Cards */}
        <div className={`grid gap-6 max-w-4xl mx-auto ${
          availableChats.length === 1 
            ? "grid-cols-1 max-w-lg" 
            : "grid-cols-1 md:grid-cols-2"
        }`}>
          {availableChats.map((chat) => (
            <Card 
              key={chat.id}
              className="p-8 hover-elevate transition-all duration-300 cursor-pointer group"
              onClick={() => openChat(chat.url)}
              data-testid={`card-chat-${chat.id}`}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  {chat.icon === "book" ? (
                    <BookOpen className="h-10 w-10 text-primary" />
                  ) : (
                    <Star className="h-10 w-10 text-primary" />
                  )}
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {chat.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {chat.description}
                </p>

                <Button 
                  className="w-full sm:w-auto"
                  data-testid={`button-start-chat-${chat.id}`}
                >
                  <MessageSquare className="h-5 w-5 ml-2" />
                  ابدأ المحادثة
                  <ChevronLeft className="h-5 w-5 mr-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <MessageSquare className="h-4 w-4" />
            <span>
              لديك صلاحية الوصول إلى {availableChats.length} {availableChats.length === 1 ? "منهج" : "مناهج"}
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LEXIA. جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
}