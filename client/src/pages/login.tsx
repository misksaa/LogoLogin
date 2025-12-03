import { useState } from "react";
import { useLocation, Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/lib/auth";
import { loginSchema, type LoginFormData } from "@shared/schema";
import { User, Lock, ChevronLeft, Loader2 } from "lucide-react";
import logoImage from "@assets/logo_1764802326595.jpeg";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Store user data first
        login(result.user);
        
        // Show success toast
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: `مرحباً ${result.user.displayName}`,
        });
        
        // Navigate after a brief delay to ensure state is persisted
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 100);
      } else {
        setIsLoading(false);
        toast({
          title: "فشل تسجيل الدخول",
          description: result.error || "اسم المستخدم أو كلمة المرور غير صحيحة",
          variant: "destructive",
        });
      }
    } catch {
      setIsLoading(false);
      toast({
        title: "خطأ في الاتصال",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <header className="w-full p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" data-testid="link-home-login">
            <img 
              src={logoImage} 
              alt="LEXIA" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl" data-testid="card-login">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4">
              <img 
                src={logoImage} 
                alt="LEXIA" 
                className="h-16 w-auto object-contain mx-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              تسجيل الدخول
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              أدخل بياناتك للوصول إلى منصة التعلم
            </p>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-login">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اسم المستخدم</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            {...field}
                            placeholder="أدخل اسم المستخدم"
                            className="pr-10"
                            data-testid="input-username"
                            disabled={isLoading}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>كلمة المرور</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            {...field}
                            type="password"
                            placeholder="أدخل كلمة المرور"
                            className="pr-10"
                            data-testid="input-password"
                            disabled={isLoading}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                  data-testid="button-submit-login"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin ml-2" />
                      جاري تسجيل الدخول...
                    </>
                  ) : (
                    <>
                      تسجيل الدخول
                      <ChevronLeft className="h-5 w-5 mr-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {/* Demo credentials hint */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center mb-2">
                للتجربة، استخدم أحد الحسابات التالية:
              </p>
              <div className="space-y-1 text-sm text-center">
                <p className="text-foreground">
                  <span className="text-muted-foreground">المستخدم 1:</span> user1 / 123
                </p>
                <p className="text-foreground">
                  <span className="text-muted-foreground">المستخدم 2:</span> user2 / 123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to home */}
      <div className="p-4 text-center">
        <Link href="/">
          <Button variant="ghost" data-testid="button-back-home">
            العودة إلى الصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
}