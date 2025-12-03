import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, AlertCircle } from "lucide-react";
import logoImage from "@assets/logo_1764802326595.jpeg";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <header className="w-full p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" data-testid="link-home-404">
            <img 
              src={logoImage} 
              alt="LEXIA" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center" data-testid="card-404">
          <CardContent className="pt-8 pb-8">
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-destructive" />
            </div>
            
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            
            <h2 className="text-xl font-semibold text-foreground mb-2">
              الصفحة غير موجودة
            </h2>
            
            <p className="text-muted-foreground mb-6">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
            </p>

            <Link href="/">
              <Button data-testid="button-go-home">
                <Home className="h-5 w-5 ml-2" />
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}