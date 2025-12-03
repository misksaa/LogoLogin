import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/lib/auth";
import { 
  BookOpen, 
  MessageSquare, 
  Users, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin,
  ChevronLeft,
  Sparkles,
  Target,
  Award
} from "lucide-react";
import logoImage from "@assets/logo_1764802326595.jpeg";

export default function Landing() {
  const { user } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" data-testid="link-home">
              <img 
                src={logoImage} 
                alt="LEXIA" 
                className="h-10 w-auto object-contain"
                data-testid="img-logo"
              />
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("hero")}
                data-testid="nav-home"
              >
                الرئيسية
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("services")}
                data-testid="nav-services"
              >
                الخدمات
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("about")}
                data-testid="nav-about"
              >
                من نحن
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("contact")}
                data-testid="nav-contact"
              >
                تواصل معنا
              </Button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {user ? (
                <Link href="/dashboard">
                  <Button data-testid="button-dashboard">
                    لوحة التحكم
                    <ChevronLeft className="h-4 w-4 mr-2" />
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button data-testid="button-login">
                    تسجيل الدخول
                    <ChevronLeft className="h-4 w-4 mr-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>مدعوم بالذكاء الاصطناعي</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              تعلّم بطريقة{" "}
              <span className="text-[#29F3D9]">ذكية</span>
              {" "}مع مساعدك التعليمي الشخصي
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              منصة LEXIA التعليمية تقدم لك تجربة تعلم فريدة باستخدام أحدث تقنيات 
              الذكاء الاصطناعي لمساعدتك في فهم مناهج التاريخ الوطني السعودي والسيرة النبوية
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login">
                <Button 
                  size="lg" 
                  className="bg-[#29F3D9] text-[#326C82] hover:bg-[#29F3D9]/90 font-semibold px-8"
                  data-testid="button-hero-start"
                >
                  ابدأ التعلم الآن
                  <ChevronLeft className="h-5 w-5 mr-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                data-testid="button-hero-learn-more"
              >
                اكتشف المزيد
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا التعليمية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك مجموعة متكاملة من الخدمات التعليمية المبتكرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                محادثات ذكية
              </h3>
              <p className="text-muted-foreground">
                تفاعل مع مساعدك الذكي للحصول على إجابات فورية ودقيقة لجميع أسئلتك
              </p>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                مناهج متخصصة
              </h3>
              <p className="text-muted-foreground">
                محتوى تعليمي مصمم خصيصاً ليتوافق مع المناهج الدراسية السعودية
              </p>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                تعلم مخصص
              </h3>
              <p className="text-muted-foreground">
                تجربة تعليمية مخصصة تتكيف مع مستواك وسرعة تعلمك
              </p>
            </Card>

            {/* Service Card 4 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                أهداف واضحة
              </h3>
              <p className="text-muted-foreground">
                تتبع تقدمك وحقق أهدافك التعليمية خطوة بخطوة
              </p>
            </Card>

            {/* Service Card 5 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                دعم متواصل
              </h3>
              <p className="text-muted-foreground">
                فريق دعم متخصص جاهز لمساعدتك في أي وقت
              </p>
            </Card>

            {/* Service Card 6 */}
            <Card className="p-6 hover-elevate transition-all duration-200" data-testid="card-service-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                شهادات معتمدة
              </h3>
              <p className="text-muted-foreground">
                احصل على شهادات إتمام معتمدة عند إكمال المناهج
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                من نحن
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                LEXIA هي منصة تعليمية رائدة تهدف إلى تحويل طريقة التعلم في العالم العربي. 
                نستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم تجربة تعليمية فريدة ومخصصة لكل طالب.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                نؤمن بأن التعليم يجب أن يكون متاحاً وسهلاً وممتعاً للجميع. لذلك نعمل 
                بشكل مستمر على تطوير أدواتنا التعليمية لتلبية احتياجات الطلاب والمعلمين.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+1000</div>
                  <div className="text-sm text-muted-foreground">طالب نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+50</div>
                  <div className="text-sm text-muted-foreground">منهج تعليمي</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">رضا العملاء</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="h-24 w-24 text-white/90 mx-auto mb-4" />
                  <p className="text-white/80 text-lg">
                    نبني مستقبل التعليم الذكي
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              تواصل معنا
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسارات أو اقتراحات
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <form className="space-y-6" data-testid="form-contact">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    الاسم الكامل
                  </label>
                  <Input 
                    type="text"
                    placeholder="أدخل اسمك"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input 
                    type="email"
                    placeholder="example@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    الرسالة
                  </label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                    data-testid="input-contact-message"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#29F3D9] text-[#326C82] hover:bg-[#29F3D9]/90 font-semibold"
                  data-testid="button-contact-submit"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#29F3D9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">الهاتف</h3>
                  <p className="text-white/80" dir="ltr">+966 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#29F3D9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">البريد الإلكتروني</h3>
                  <p className="text-white/80">info@lexia.sa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#29F3D9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">العنوان</h3>
                  <p className="text-white/80">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground dark:bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={logoImage} 
                alt="LEXIA" 
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="text-background dark:text-foreground/80 text-sm">
                منصة التعليم الذكية
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors"
              >
                الخدمات
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground text-sm transition-colors"
              >
                تواصل معنا
              </button>
            </div>

            <p className="text-background/60 dark:text-foreground/60 text-sm">
              © {new Date().getFullYear()} LEXIA. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}